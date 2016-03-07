// http://passport.iqiyi.com/pages/secure/account/verfiy_email.action?token=D7uaE14bUytLAjRLSQzw5DPsBgKb4zQOGv6enJXASnzQZIUr78iUZohKDn6ojQl1WBEKMfp9i%2BHjGC8tJuAdvw%3D%3D

var http = require('http');
var https = require('https');
var rsa = require('../web/mixed.js');
var cookie_util = require('cookie-util');
var log4js = require('log4js');
var iconv = require('iconv-lite');
var mkdirp = require('mkdirp');

mkdirp(process.cwd() + '/logs', function (err) {
  if (err) console.error(err);
  //else console.log('验证码文件夹创建成功!');
});

log4js.configure({
  "appenders":[
    {
      "type": "dateFile",
      "filename": "logs/qqmail.log",
      "pattern": "-yyyy-MM-dd",
      "alwaysIncludePattern": false,
      "category": "iqiyi"
    },
    {
      "type": "console",
      "category": "console"
    }
  ]
});
var file_logger = log4js.getLogger("iqiyi");
var console_logger = log4js.getLogger("console");
var msg = '';


/**
 * 通过邮箱找回密码，进行重置
 * @param email
 */
function find_pwd(email){
  // 1. 访问： http://passport.iqiyi.com/pages/secure/account/verfiy_email.action?token=z1xwSTKXOWQ1vQTTJfmDQp1Y6CLA5DlrErZCg%2FD%2BhpuWKGlBBPH2LvOUo2FjP4mXc4JBHCyW21OYopCtfYMpJw%3D%3D
  // 2. 302到： http://passport.iqiyi.com/pages/secure/password/nset_pwd.action?source=email
  //    cookie中，P00014，z1xwSTKXOWQ1vQTTJfmDQgww6A0RzygiRPHQ1u9pqjW5RWOwnUMckxjAR3vdP1pL787S%2F6lpVJuQogQnvB2pVg%3D%3D
  //    unencodecomponent
  // 3. checkpwd https://passport.iqiyi.com/apis/user/check_passwd_repeat.action?authcookie=null&agenttype=1&passwd=4481034856c79100845a86619664b67bc40deba7d7ec48bc525cf59d445e4b43db54641e6f01cb430d562fa93d33e70980a44d7fed5ac33cfce599767da68c39&callback=window.Q.__callbacks__.cbr5wfdo
  //    返回：try{window.Q.__callbacks__.cbr5wfdo({"data":"密码验证通过","code":"A00000","msg":null})}catch(e){}
  // 4. https://passport.iqiyi.com/pages/secure/password/save_pwd.action?authcookie=&oldpass=&newpass=4481034856c79100845a86619664b67bc40deba7d7ec48bc525cf59d445e4b43db54641e6f01cb430d562fa93d33e70980a44d7fed5ac33cfce599767da68c39&agenttype=1&token=z1xwSTKXOWQ1vQTTJfmDQgww6A0RzygiRPHQ1u9pqjW5RWOwnUMckxjAR3vdP1pL787S%2F6lpVJuQogQnvB2pVg%3D%3D&callback=window.Q.__callbacks__.cblgdatd
  // newpass的加密 ，
  // try{window.Q.__callbacks__.cblgdatd({"data":{"redirect":"/pages/secure/password/changed_success.action?type=21&source=email"},"code":"A00000","msg":null})}catch(e){}



}

var cookies = '';
var newpwd = '';
// 第一步
function verify_email(url, pwd){

  newpwd = pwd;
  var header_sent = {
    "Host": 'passport.iqiyi.com'
  };

  msg = ' verify_email';
  file_logger.info(msg);

  var content = '';

  http.get({
    host:getHost(url),
    port:getPort(url),
    path:getPath(url),
    headers: header_sent
  }, function(res){

    var status = res.statusCode;
    var headers = res.headers;

    res.on('data',function(chunk){
      content += chunk;
    });
    res.on('end',function(){
      //var resp = new Buffer(content,'binary');
      cookies = headers["set-cookie"];

      if(status == 302){
        redirect(headers['location']);
      }
      else{
        file_logger.info(',verify_email error');
      }

    });
  }).on('error', function(e){
    console_logger.error('verify_email error' + e);
    file_logger.error('verify_email error' + e);
  });
}

// 第二步，跳转
function redirect(url){
  var content = '';

  var temp_cookie = cookie_util.get_simple_cookie_str(cookies);

  msg = ', redirect';
  file_logger.info(msg);

  http.get({
    host:getHost(url),
    port:getPort(url),
    path:getPath(url),
    headers: {
      'Host': getHost(url),
      'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:41.0) Gecko/20100101 Firefox/41.0',
      'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language':'zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3',
      //'Accept-Encoding':'gzip, deflate',
      'Cookie': temp_cookie
    }
  }, function(res){
    res.setEncoding('binary');
    var status = res.statusCode;
    var headers = res.headers;

    cookies = cookie_util.merge_cookie(cookies, headers["set-cookie"] || []);


    res.on('data',function(chunk){
      content += chunk;
    });
    res.on('end',function(){

      if(status == 200){
        //content = iconv.decode(new Buffer(content,'binary'),'gbk');
        //console.log(content);
        check_pwd_repeat();
      }
      else{
        msg = 'redirect error ' + status;
        console_logger.info(msg);
        file_logger.info(msg);
      }
    });
  });
}


// 第三步，检查密码重复
function check_pwd_repeat(){
  var content = '';
  var url = 'https://passport.iqiyi.com/apis/user/check_passwd_repeat.action?' +
    'authcookie=null' +
    '&agenttype=1' +
    '&passwd=' + rsa(newpwd) +
    '&callback=window.Q.__callbacks__.cbr5wfdo'

  var temp_cookie = cookie_util.get_simple_cookie_str(cookies);

  msg = ', check_pwd_repeat';
  file_logger.info(msg);

  https.get({
    host:getHost(url),
    port:getPort(url),
    path:getPath(url),
    headers: {
      'Host': getHost(url),
      'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:41.0) Gecko/20100101 Firefox/41.0',
      'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language':'zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3',
      //'Accept-Encoding':'gzip, deflate',
      'Cookie': temp_cookie
    }
  }, function(res){
    res.setEncoding('binary');
    var status = res.statusCode;
    var headers = res.headers;

    cookies = cookie_util.merge_cookie(cookies, headers["set-cookie"] || []);

    res.on('data',function(chunk){
      content += chunk;
    });
    res.on('end',function(){

      if(status == 200){
        content = iconv.decode(new Buffer(content,'binary'),'utf8');
        console.log(content);
        save_pwd();
      }
      else{
        msg = 'redirect error ' + status;
        console_logger.info(msg);
        file_logger.info(msg);
      }
    });
  });
}

// 保存新密码
function save_pwd(){

  var content = '';
  var url = 'https://passport.iqiyi.com/pages/secure/password/save_pwd.action?' +
    'authcookie=' +
    '&oldpass=' +
    '&newpass=' + rsa(newpwd) +
    '&agenttype=1' +
    '&token=' + getTokenFromCookie() +
    '&callback=window.Q.__callbacks__.cblgdatd'

  var temp_cookie = cookie_util.get_simple_cookie_str(cookies);

  msg = ', save_pwd';
  file_logger.info(msg);

  https.get({
    host:getHost(url),
    port:getPort(url),
    path:getPath(url),
    headers: {
      'Host': getHost(url),
      'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:41.0) Gecko/20100101 Firefox/41.0',
      'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language':'zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3',
      //'Accept-Encoding':'gzip, deflate',
      'Cookie': temp_cookie
    }
  }, function(res){
    res.setEncoding('binary');
    var status = res.statusCode;
    var headers = res.headers;

    cookies = cookie_util.merge_cookie(cookies, headers["set-cookie"] || []);

    res.on('data',function(chunk){
      content += chunk;
    });
    res.on('end',function(){

      if(status == 200){
        content = iconv.decode(new Buffer(content,'binary'),'utf8');


        var code_reg = /A00000/;
        if(code_reg.test(content)){
          console.log('密码重置成功,新密码为：' + newpwd);
        }
        else{
          console.log(content);
        }

      }
      else{
        msg = 'redirect error ' + status;
        console_logger.info(msg);
        file_logger.info(msg);
      }
    });
  });
}

function getTokenFromCookie(){
  var token_reg = /P00014=([^;]+);/;
  token_reg.exec(cookies);
  return RegExp.$1 || '';
}

function getPort(url) {
  var hostPattern = /\w+:\/\/([^\/]+)(\/)?/i;
  var domain = url.match(hostPattern);

  var pos = domain[1].indexOf(":");
  if(pos !== -1) {
    domain[1] = domain[1].substr(pos + 1);
    return parseInt(domain[1]);
  } else if(url.toLowerCase().substr(0, 5) === "https") return 443;
  else return 80;
}

//Parse the url,get the host name
//e.g. http://www.google.com/path/another -> www.google.com
function getHost(url){
  var hostPattern = /\w+:\/\/([^\/]+)(\/)?/i;
  var domain = url.match(hostPattern);

  var pos = domain[1].indexOf(":");
  if(pos !== -1) {
    domain[1] = domain[1].substring(0, pos);
  }
  return domain[1];
}

//Parse the url,get the path
//e.g. http://www.google.com/path/another -> /path/another
function getPath(url){
  var pathPattern = /\w+:\/\/([^\/]+)(\/.+)(\/$)?/i;
  var fullPath = url.match(pathPattern);
  return fullPath?fullPath[2]:'/';
}

module.exports = verify_email;