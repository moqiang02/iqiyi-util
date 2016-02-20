var nodegrass = require('nodegrass');
var cookie_util = require('cookie-util');
var fs = require('fs');
var rsa = require('../web/mixed.js');
var http = require('http');
var zlib = require('zlib');


// http://passport.iqiyi.com/pages/secure/index.action 页面的js加载步骤：
// 1. http://static.iqiyi.com/js/lib/sea1.2.js
// 2. http://static.iqiyi.com/js/qiyiV2/ver.js?21huymw
// 3. http://static.iqiyi.com/js/qiyiV2/20160131170130/jobs/pc/safeCenterV2.js  safeCenterV2-a.js
// 4. http://static.iqiyi.com/js/qiyiV2/20160126172644/templates/jobs/pc/safeCenterV2.js safeCenterV2-b.js


var cookies = [];
var params = {
  server: 'BEA3AA1908656AABCCFF76582C4C6660',   // 固定， http://static.iqiyi.com/js/qiyiV2/20160131170130/jobs/pc/safeCenterV2.js
  token: '',    // get_token后，能直接获取到
  bird_src: 'eb8d221bc0c04c5ab4ba735b6b1560a1',   // 固定   http://static.iqiyi.com/js/qiyiV2/20160131170130/jobs/pc/safeCenterV2.js
  sign: '',     // get_token后，eval(sdk)能获取到
  bird_t: 0,
  callback: 'window.Q.__callbacks__.cbsq272q'

};

var decoders = {
  gzip: function(buf, callback) {
    zlib.gunzip(buf, callback);
  },
  deflate: function(buf, callback) {
    zlib.inflate(buf, callback);
  }
};

var window = {
  'Q':{
    '__callbacks__': {}
  }
};
var temp_obj = {};
window.Q.__callbacks__.cbjtpztd = function(obj){
  temp_obj = obj;
};

var user, pwd;
function login(u, p){

  user = u;
  pwd = p;
  visitIndex();

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

function getHost(url){
  var hostPattern = /\w+:\/\/([^\/]+)(\/)?/i;
  var domain = url.match(hostPattern);

  var pos = domain[1].indexOf(":");
  if(pos !== -1) {
    domain[1] = domain[1].substring(0, pos);
  }
  return domain[1];
}

function getPath(url){
  var pathPattern = /\w+:\/\/([^\/]+)(\/.+)(\/$)?/i;
  var fullPath = url.match(pathPattern);
  return fullPath?fullPath[2]:'/';
}

/**
 * 访问爱奇艺登陆页面，获取到适当的cookie
 */
function visitIndex(){
  var url = 'http://passport.iqiyi.com/pages/secure/login.action';


  var content = '';
  http.get({
    host:getHost(url),
    port:getPort(url),
    path:getPath(url),
    headers: {
      'Host': getHost(url),
      'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:41.0) Gecko/20100101 Firefox/41.0',
      'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language':'zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3',
      //'Connection': 'keep-alive',
      'Accept-Encoding':'gzip, deflate'
    }
  }, function(res){
    //res.setEncoding('binary');
    var status = res.statusCode;
    var headers = res.headers;
    console.log(status);
    console.log(JSON.stringify(headers));
    cookies = cookie_util.merge_cookie(cookies, headers["set-cookie"]);
    var buffer = [];

    var gunzip = zlib.createGunzip();
    res.pipe(gunzip);

    gunzip.on('data', function(data) {
      // decompression chunk ready, add it to the buffer
      buffer.push(data.toString())

    }).on("end", function() {
      // response and decompression complete, join the buffer and return
      //callback(null, buffer.join(""));
      console.log(buffer.join(""));

    }).on("error", function(e) {
      callback(e);
    });


  });
}

function getVcode(){

}


function getQd(){
  var url = 'http://nlwl.iqiyi.com/apis/urc/getqd?authcookie=null&containsUgc=1&agent_type=1&subTypes=7&channelIds=1&callback=window.Q.__callbacks__.cb8koou1';

  var content = '';
  http.get({
    host:getHost(url),
    port:getPort(url),
    path:getPath(url),
    headers: {
      'Host': getHost(url),
      'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:41.0) Gecko/20100101 Firefox/41.0',
      'Accept':'*/*',
      'Accept-Language':'zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3',
      'Connection': 'keep-alive',
      "Referer": "http://passport.iqiyi.com/pages/secure/login.action",
      "Cookie": cookie_util.get_simple_cookie_str(cookies)
      //'Accept-Encoding':'gzip, deflate'
    }
  }, function(res){
    //res.setEncoding('binary');
    var status = res.statusCode;
    var headers = res.headers;
    console.log(status);
    console.log(JSON.stringify(headers));
    //cookies = cookie_util.merge_cookie(cookies, headers["set-cookie"]);

    res.on('data',function(chunk){
      content += chunk;
    });
    res.on('end',function(){

      console.log(content);
      getToken();

    });
  });

}


function getToken(){

  var url = 'http://kylin.iqiyi.com/get_token?callback=window.Q.__callbacks__.cbjtpztd';

  var content = '';
  http.get({
    host:getHost(url),
    port:getPort(url),
    path:getPath(url),
    headers: {
      'Host': getHost(url),
      'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:41.0) Gecko/20100101 Firefox/41.0',
      'Accept':'*/*',
      'Accept-Language':'zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3',
      'Connection': 'keep-alive',
      "Referer": "http://passport.iqiyi.com/pages/secure/login.action",
      "Cookie": cookie_util.get_simple_cookie_str(cookies)
      //'Accept-Encoding':'gzip, deflate'
    }
  }, function(res){
    //res.setEncoding('binary');
    var status = res.statusCode;
    var headers = res.headers;
    console.log(status);
    console.log(JSON.stringify(headers));
    //cookies = cookie_util.merge_cookie(cookies, headers["set-cookie"]);

    res.on('data',function(chunk){
      content += chunk;
    });
    res.on('end',function(){
      //var resp = new Buffer(content,'binary');
      console.log('gettoken:' + JSON.stringify(headers));
      //cookies = cookie_util.merge_cookie(cookies, headers["set-cookie"]);

      eval(content);
      params.token = temp_obj.token;
      var ip = temp_obj.ip, target = '/apis/reglogin/login.action?email=' + user + '&passwd=' + rsa(pwd) + '&agenttype=1&from=undefined&from=undefined&keeplogin=1&piccode=&fromurl=&_pos=1';

      var t = Math.floor((new Date).getTime() / 1e3);
      params.sign = eval('var input = "'+ target +'",timeStamp = t;' +
        'params.bird_t = timeStamp;' + temp_obj.sdk);
      console.log(ip);
      console.log(t);
      console.log(JSON.stringify(params));
      validate();

    });
  });
}



function validate(){


  var url = 'http://kylin.iqiyi.com/validate?target=' +
    encodeURIComponent('/apis/reglogin/login.action?email='+user+'&passwd='+rsa(pwd)+'&agenttype=1&from=undefined&from=undefined&keeplogin=1&piccode=&fromurl=&_pos=1') +
    '&server=' + params.server +
    '&token=' + params.token +
    '&bird_src=' + params.bird_src +
    '&sign=' + params.sign +
    '&bird_t=' + params.bird_t +
    '&callback=window.Q.__callbacks__.cb2tr91r';

  console.log(url);
  console.log(cookie_util.get_simple_cookie_str(cookies))

  var content = '';
  http.get({
    host:getHost(url),
    port:getPort(url),
    path:getPath(url),
    headers: {
      'Host': getHost(url),
      //'Accept-Encoding': 'gzip, deflate, sdch',
      'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:41.0) Gecko/20100101 Firefox/41.0',
      'Accept':'*/*',
      'Accept-Language':'zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3',
      'Connection': 'keep-alive',
      "Referer": "http://passport.iqiyi.com/pages/secure/login.action",
      "Cookie": cookie_util.get_simple_cookie_str(cookies),
      "Pragma": "no-cache",
      "Cache-Control": "no-cache"
      //'Accept-Encoding':'gzip, deflate'
    }
  }, function(res){
    //res.setEncoding('binary');
    var status = res.statusCode;
    var headers = res.headers;
    console.log(status);
    console.log(JSON.stringify(headers));
    //cookies = cookie_util.merge_cookie(cookies, headers["set-cookie"]);

    res.on('data',function(chunk){
      content += chunk;
    });
    res.on('end',function(){

      decoders.gzip(content, function(d){
        console.log(d);
      })
      //console.log(content);
      //validate();

    });
  });
}


module.exports = login;