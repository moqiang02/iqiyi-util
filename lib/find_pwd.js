var nodegrass = require('nodegrass');

var ret = {};

var window = {};
window.Q = {};
window.Q.__callbacks__ = {};
window.Q.__callbacks__.cb3q45ej = function(data){ ret = data;};

/**
 * 通过邮箱找回密码
 * @param email
 */
function find_pwd(email){
  // http://passport.iqiyi.com/pages/secure/password/find_pwd.action?type=1

  var url = 'http://passport.iqiyi.com/apis/secure/send_verify_email.action?type=16&antiCsrf=null&email=' + encodeURIComponent(email) + '&authcookie=null&from=&callback=window.Q.__callbacks__.cb3q45ej';

  // try{window.Q.__callbacks__.cb3q45ej({"data":{"token":"5cc24344a26ca90bcbe25f20b5fc990d","redirect":"http://passport.iqiyi.com/pages/secure/send_email_success.action?type=16"},"code":"A00000","msg":null})}catch(e){}

  var headers_sent = {};

  nodegrass.get(url, function(data, status, headers){
    eval(data);
    /*console.log(ret.data.token);
    console.log(ret.data.redirect);*/
    if(ret.code == 'A00000'){
      console.log('爱奇艺账号' + email + ':找回密码邮件发送成功!');
    }
    else{
      console.log('爱奇艺账号' + email + ':找回密码邮件发送失败，原因：' + ret.msg);
    }

  }, headers_sent, "gbk");

}

module.exports = find_pwd;