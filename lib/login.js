var nodegrass = require('nodegrass');
var cookie_util = require('./cookie_util.js');
var fs = require('fs');
var rsa = require('../web/mixed.js');


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
  bird_t: Math.floor((new Date).getTime() / 1e3),
  callback: 'window.Q.__callbacks__.cbsq272q'

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

/**
 * 访问爱奇艺登陆页面，获取到适当的cookie
 */
function visitIndex(){
  var url = 'http://passport.iqiyi.com/pages/secure/index.action';

  var headers_sent = {
    "Host": "passport.iqiyi.com",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:41.0) Gecko/20100101 Firefox/41.0",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3"
  };

  nodegrass.get(url, function(data, status, headers){

    cookies = cookie_util.merge_cookie(cookies, headers["set-cookie"]);
    getToken();

  }, headers_sent, "utf8");
}


function getToken(){

  var url = 'http://kylin.iqiyi.com/get_token?callback=window.Q.__callbacks__.cbjtpztd';

  var headers_sent = {
    "Host": "kylin.iqiyi.com",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:41.0) Gecko/20100101 Firefox/41.0",
    "Accept": "*/*",
    "Accept-Language": "zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3",
    "Referer": "http://passport.iqiyi.com/pages/secure/index.action",
    "Cookie": cookie_util.get_simple_cookie_str(cookies)
  };

  nodegrass.get(url, function(data, status, headers){
    eval(data);
    params.token = temp_obj.token;
    var ip = temp_obj.ip, target = '/apis/reglogin/login.action?email=' + user + '&passwd=' + rsa(pwd) + '&agenttype=1&from=undefined&from=undefined&keeplogin=1&piccode=&fromurl=&_pos=1';

    params.sign = eval('var input = "'+ target +'",timeStamp = Math.floor((new Date).getTime() / 1e3);' +
      'params.bird_t = timeStamp;' + temp_obj.sdk);
    validate();

  }, headers_sent, "utf8");


}

function validate(){

  var url = 'http://kylin.iqiyi.com/validate?target=%2Fapis%2Freglogin%2Flogin.action' +
    '%3Femail%3D' + user +
    '%26passwd%3D' + rsa(pwd) +
    '%26agenttype%3D1' +
    '%26from%3Dundefined' +
    '%26from%3Dundefined' +
    '%26keeplogin%3D1' +
    '%26piccode%3D' +
    '%26fromurl%3D%26_pos%3D1' +
    '&server=' + params.server +
    '&token=' + params.token + '&bird_src=' + params.bird_src +
    '&sign=' + params.sign +
    '&bird_t=' + params.bird_t +
    '&callback=window.Q.__callbacks__.cbnitrg5';

  console.log(url);

  var headers_sent = {
    "Host": "kylin.iqiyi.com",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:41.0) Gecko/20100101 Firefox/41.0",
    "Accept": "*/*",
    "Accept-Language": "zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3",
    "Referer": "http://passport.iqiyi.com/pages/secure/index.action",
    "Cookie": cookie_util.get_simple_cookie_str(cookies)
  };

  nodegrass.get(url, function(data, status, headers){
    console.log(data);
    console.log(status);
    console.log(JSON.stringify(headers));

  }, headers_sent, "utf8");
}


module.exports = login;