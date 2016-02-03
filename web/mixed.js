


define("../../interfaces/fdlGetToken", ["../kit/remoteInterface"], function (e, t, n) {
  var i = e("../kit/remoteInterface"), a = "http://kylin.iqiyi.com/get_token";
  n.exports = Q.Class("fdlGetToken", {
    construct: function () {
      this._remoteInterface = new i({getToken: {url: a}})
    }, methods: {
      request: function (e, t) {
        e = e || {}, this._remoteInterface.send({ifname: "getToken", param: e, dataType: "jsonp"}, function (n) {
          t && t(n, e)
        })
      }
    }
  })
});


define("../../kit/remoteInterface", ["./checkRemoteData", "./rhf8vg"], function (e, t, n) {
  var a = e("./checkRemoteData"), i = e("./rhf8vg"), r = "789f23df6ebb918b767638003f1e52f4", o = new Q.ic.InfoCenter({moduleName: "RemoteInterface"}), l = Q.Class("RemoteInterface", {
    construct: function (e) {
      this._remoteInterfaces = e
    }, methods: {
      send: function (e, t) {
        var n = e.ifname, l = e.param, s = e.method || "GET", h = e.jsonp, d = e.spliter || "1", m = this, c = this._getIfData(n), u = new Date, U = e.timeout || 2e4, p = e.withCredentials, V = e.ifr, f = e.dataType, g = Q.cookie.get("P00001"), y = {
          data: l,
          dataType: f,
          method: s,
          jsonp: h,
          spliter: d,
          cors: e.cors,
          withCredentials: p,
          timeout: U,
          ifr: V,
          memory: e.memory,
          encodeFn: e.encodeFn,
          jsonpCallback: e.jsonpCallback,
          onsuccess: function (e, i) {
            new Date - u > 5e3 && (o.log("RemoteInterface [" + n + "] timeout."), o.log("RemoteInterface [" + c.url + "] timeout.")), (h || "object" == typeof l && ("varname"in l || "cb"in l)) && ("code"in i || (i = {
              code: "A00000",
              data: i
            }));
            try {
              o.log("send url : " + m._getUrl(c.url, l) + ", Check " + "result : " + a.check(c.struct, i))
            } catch (r) {
              o.error("RemoteInterface error url " + c.url + ";error message " + r.message)
            }
            t && t(i)
          },
          onfailure: function (e, n) {
            o.error("RemoteInterface onfailure url: " + c.url), o.error("RemoteInterface data: " + JSON.stringify(n)), t && t(n || {code: "E00000"})
          }
        };
        e.antiCsrf && g && (y.data = y.data || {}, y.data.antiCsrf = Q.crypto.md5(g)), e.guard && g && (y.data = y.data || {}, y.data.d41fc5 = 1 * new Date + "", y.data.ea166b = Q.crypto.md5(g + r + y.data.d41fc5));
        var b = c.url;
        e.rhf8vg && (l.isFromSafeLevel = "1", b = i(c.url, l, e.safePlatFormKey, e.safeSrckeyKey, e.domain).fullUrl, y.data = {}), Q.http.json(b, y)
      }, _getIfData: function (e) {
        return this._remoteInterfaces[e] || this._remoteInterfaces
      }, _log: function (e) {
        o.log("iferror" + e)
      }, _getUrl: function (e, t) {
        var n = [];
        for (var a in t)n.push(a + "=" + t[a]);
        return e + "?" + n.join("&")
      }
    }
  });
  n.exports = l
});


define("../../kit/checkRemoteData", [], function (e, t, n) {
  n.exports = {
    check: function (e) {
      if (!e)return !0;
      var t = !0;
      return t
    }, checkArray: function (e, t) {
      var n = this;
      if (Q.array.isArray(t)) {
        var a = !0;
        return t.forEach(function (t) {
          return n.checkData(e.item, t) ? void 0 : (a = !1, !1)
        }), a
      }
      return !1
    }, checkObject: function (e, t) {
      return this.check(e, t)
    }, isEmpty: function (e, t) {
      return "object" == e.type ? null === t : "array" == e.type ? 0 === t.length : "" === t
    }, checkData: function (e, t) {
      return "number" == e.type && "number" == typeof t ? !0 : "string" == e.type && "string" == typeof t ? !0 : "boolean" == e.type && "boolean" == typeof t ? !0 : "array" == e.type ? this.checkArray(e.item, t) : "object" == e.type ? this.checkObject(e.struct, t) : !1
    }, log: function () {
    }
  }
});

define("../../kit/rhf8vg", [], function (require, exports, module) {
  var _RHF8VG = eval(function (e, t, n, a, i, r) {
    if (i = function (e) {
        return (t > e ? "" : i(parseInt(e / t))) + ((e %= t) > 35 ? String.fromCharCode(e + 29) : e.toString(36))
      }, !"".replace(/^/, String)) {
      for (; n--;)r[i(n)] = a[n] || i(n);
      a = [function (e) {
        return r[e]
      }], i = function () {
        return "\\w+"
      }, n = 1
    }
    for (; n--;)a[n] && (e = e.replace(new RegExp("\\b" + i(n) + "\\b", "g"), a[n]));
    return e
  }('(19(){18 13={\'33\':19(a,b){1d a*b},\'N\':19(a,b){1d a<b},\'2C\':19(a,b){1d a&b},\'2p\':19(a,b){1d a&b},\'39\':19(a,b){1d a>>b},\'T\':19(a,b){1d a&b},\'1a\':(19(){18 d=0,1B=\'\',1z=[[],1g,[],[],\'\',\'\',\'\',\'\',\'\',\'\',1i,-1,-1,1g,1i,1i,1f,1f,{},-1,-1,/ /,1f,{},1g,{},1g,/ /,/ /,-1,1i,-1,/ /,/ /,1f,1f,1f,1f,1g,1g,1g],1I=1z["1r"];1e(;d<1I;){1B+=+(4U 1z[d++]===\'4T\')}18 e=3g(1B,2),1A=\'4F://4A?q=;%29%4x.%29%4v%4u%4t\',3e=1A.3d.3d(1C(/;.+/["4q"](1A))["4l"](\'\')["4h"]()["3b"](\'\'))();1d{1c:19(a){18 b,d=0,1K=e-3e>1I,1q;1e(;d<a["1r"];d++){1q=3g(a["1w"](d),16)["1y"](2);18 c=1q["1w"](1q["1r"]-1);b=d===0?c:b^c}1d b?1K:!1K}}})(),\'36\':19(a,b){1d a<b},\'35\':19(a,b){1d a>>b},\'H\':19(a,b){1d a*b},\'Z\':19(a,b){1d a*b},\'W\':19(a,b){1d a&b},\'34\':19(a,b){1d a<b},\'31\':19(a,b){1d a&b},\'2Z\':19(a,b){1d a%b},\'K\':19(a,b){1d a-b},\'2Y\':19(a,b,e){1d a^b^e},\'2X\':19(a,b){1d a 1o b},\'2W\':19(a,b){1d a*b},\'2V\':19(a,b){1d a<b},\'2U\':19(a,b){1d a<=b},\'2T\':19(a,b){1d a>>>b},\'Q\':19(a,b){1d a<<b},\'E\':19(a,b){1d a===b},\'2S\':19(a,b){1d a>b},\'2Q\':19(a,b){1d a<<b},\'2P\':19(a,b){1d a%b},\'2L\':19(a,b){1d a===b}};19 2K(F,u,2G,2E,1l){18 1m=13.1a.1c("4S")?\'/4s/\':";&&&2B=",2A=13.1a.1c("47")?\'41.3Z\':20,2z=13.1a.1c("3V")?25:\'//1H.\',2v=13.1a.1c("4b")?"2t":"2s",2j=13.1a.1c("3M")?"2t":"3y",2d=13.1a.1c("3p")?"x":"4P",2b=13.1a.1c("3Q")?2:\'&3z=\',26=13.1a.1c("2c")?\'1W\':\'&2M=\',2F=";&&&2B=",1X="3Y",1Y=";",1Z="3r",24=13.1a.1c("3X")?12:"2S",1U="",1T=13.1a.1c("3B")?"1C":"1r",27=13.1a.1c("1b")?44:\'2a\',1S=13.1a.1c("4c")?\'$1\':\'\',1R="3n",1P="3q",1O=13.1a.1c("3t")?6:\'/\',2e="3A",2g=\'a\',2h=13.1a.1c("3F")?"1N":"2i",G=8,2k=13.1a.1c("49")?\'1i\':2l,2m=13.1a.1c("3m")?\'2a\':43,2n=13.1a.1c("15")?\'a\':38,2o="1N",j=4,2q=2r,1L=16,I="3b",2u=40,1u=13.1a.1c("3E")?12:11,1s=\'=\',2w=13.1a.1c("3P")?38:25,k=1,2x="K",x=13.1a.1c("3S")?44:5,w=2,2y="H",1F=44,1D="1y",z=13.1a.1c("46")?2r:\'&\',1p=\'?\',l=0,A=13.1a.1c("4d")?"4i":"4r",J=13.1a.1c("4z")?"4J":"2i";19 4K(a){18 b="4L";1d(4O[b](a))}19 f(a,b){a[J](b)}18 1n=13.1a.1c("3l")?19(a){18 b="2D";h[b]=a}:2,1V=19(){18 a="1w",b="E";h[A]=13.1a.1c("3o")?13[b](h[A][a](l),1p)?(h[A]+z+y):(1p+y):\'//1H.2H.\'},2I=19(){18 b=13.1a.1c("3s")?\'&2M=\':\'2J\',e=13.1a.1c("3u")?\'1W\':\'=\',q=13.1a.1c("3v")?"j":"3w",r=13.1a.1c("3x")?"2L":0,M=13.1a.1c("4Z")?"2N":"2O",O="3D",P=\'2R\',R="2X",S=\'1i\',U=\'19%3G%28%29%20%3H%20%3I%3J%3K%20%3L\',V=13.1a.1c("3N")?"3O":U,s=S;1Q(13[R](P,1M[O][M])){1Q(13[r](3R(2s[q][1D]()),V)){18 X=19(a){s=13.1a.1c("3T")?a:"30"};X(e)}3U{18 Y=19(a){s=13.1a.1c("3W")?a:"2N"};Y(b)}};1d s},g=13.1a.1c("2c")?"2D":[];f(g,1F);f(g,13[2y](w,x));f(g,13[2x](l,w));18 y=[];f(g,-k*w);f(g,-2w);1e(18 1j 1o u){y[J](1j+1s+u[1j])}f(g,x*-1u);f(g,2u);y=y[I](z);f(g,-1L);f(g,2q);f(g,-j);g[2o]([1F,-2n,2m,-2k,-G]);18 h=1M[2h](2g);1n(F);1V();18 C=[];18 1h=(42 45())[2e]();f(C,1O+h[1P][1R](/^\\/(.*)/,1S)+h[A]);f(C,1h);f(C,2G||27);18 37=19(t){18 1m=13.1a.1c("48")?"N":"1y",1x=4a,3a=19(p){18 g=13.1a.1c("4e")?2l:"2C";18 h="36";18 u=13.1a.1c("4f")?\'2J\':\'\';18 y=13.1a.1c("4g")?32:8;18 z=15;18 A=7;18 B=3;18 C="34";18 E="2V";18 F=13.1a.1c("3c")?4j:\'?\';18 H="4k";18 I="2Q";18 J="35";18 K="2U";18 L=13.1a.1c("4m")?"":4n;18 N=4o;18 Q=14;18 T=13.1a.1c("4p")?\'//1H.2H.\':6;18 W=13.1a.1c("3c")?19(a){n=a}:"";18 Z=19(a){p=a};18 1n=19(){18 a="33";18 b="Z";1k[p=13[b]((d+G>>T),t)+Q]=13[a](d,G)};18 i,o,m,c,1k=[],1J=1C(30(p)),d=13.1a.1c("4w")?1J[1T]:6,D=13.1a.1c("4y")?17:[i=N,o=-L,~i,~o],n=l;1e(;13[K](n,d);)1k[13[J](n,w)]|=13[I]((1J[H](n)||F),G*(n++%j));1n();W(l);1e(;13[E](n,p);n+=t){d=D,c=l;1e(;13[C](c,1x);){18 1j=19(){18 a="2T";18 b="2Z";18 e="2W";18 q=21;18 r=10;18 M=23;18 O=20;18 P=9;18 R=22;18 S=17;18 U=12;18 V="2P";18 s="39";18 X="2Y";18 Y="2p";18 f="31";d=[m=d[B],v(i=d[k],(m=v(v(d[l],[13[f](i,(o=d[w]))|~i&m,13[Y](m,i)|~m&o,13[X](i,o,m),o^(i|~m)][d=13[s](c,j)]),v(1h[c],1k[13[V]([c,x*c+k,B*c+x,A*c][d],t)+n])))<<(d=[A,U,S,R,x,P,Q,O,j,1u,t,M,T,r,z,q][13[e](j,d)+13[b](c++,j)])|13[a](m,y-d)),i,o]};1j()};1e(c=j;c;)D[--c]=v(D[c],d[c])};Z(u);1e(;13[h](c,y);)p+=(13[g]((D[c>>B]>>((k^c++&A)*j)),z))[1D](t);1d p};19 v(a,b){18 e="W",q="T",r=13.1a.1c("4B")?"4C":"Q";1d(13[r](((a>>k)+(b>>k)),k))+(13[q](a,k))+(13[e](b,k))}18 1h=13.1a.1c("4D")?[]:"4E",1t=l;1e(;13[1m](1t,1x);){18 1l=19(){18 a=4G,b="4H",e="4I";1h[1t]=l|(3f[e](3f[b](++1t))*a)};1l()};1d 3a}(1L),1v=37(C[I](1U));1Q(13[24](1v[1T],j)){18 3h=13.1a.1c("4M")?\'2R\':19(a){18 b=13.1a.1c("2f")?"4N":"1N";B[b]=a},3i=19(a){18 b="2O";B[b]=a},3j=19(a){18 b="4Q";B[b]=a};18 L=1U;L+=1M[1Z]+1Y+4R[1X]+2F+1h;L=3k(L);18 B={};3h(1v);3j(1h);3i(2E);C[l]+=26+L+2b+2I();18 1G=[];1e(18 1E 1o B){1G[J](1E+1s+B[1E])}18 u={4V:3k(1O+h[1P][1R](/^\\/(.*)/,1S)+h[A]+z+1G[I](z)),4W:h[2d][2j]()},F=h[2v]+2z+(1l||2A)+1m;1d{4X:F,4Y:u,3C:F+1p+(19(a){18 b=[],e;1e(18 e 1o a){b[J](e+1s+a[e])}1d b[I](z)})(u)}}};1d 2K})();', 62, 310, "|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||ba|||||var|function|n3||o3|return|for|NaN|false|be|null|bd|d0|bg|bb|bc|in|h0|A3|length|g0|e0|F0|O0|charAt|s0|toString|s3|v3|r3|unescape|J0|bl|I0|bi|kylin|t3|q0|z3|D0|document|concat|C0|B0|if|v0|w0|y0|z0|R1|sgve|E1|B1|A1|||||C1||v1|F1|||0bfa7c5fffd74bf9a5243918afad3146|w1||u1|I1||H1|G1|createElement|z1|N1|53|M1|L1|K1|x0|J1|51|navigator|protocol|Q1|x1|P1|O1|U1|y1|r1|tim|W0|href|bk|D1|bj|sp|T1|sijsc|_RHF8VG|c1|__refI|style|bird_src|H0|l0|WebkitAppearance|f1|Q0|f0|o0|K0|Z0|A0|N0|encodeURI|u0||c0|r0|i0|T0|bf||E0|n1|join|ab|constructor|w3|Math|parseInt|bh|X1|Y1|encodeURIComponent|eb|bfe|replace|13b2|b5ee|pathname|URL|26e|b23|8ee7|bf4|javaEnabled|c3a|toLocaleUpperCase|__jsT|getTime|e75|fullUrl|documentElement|2b5|24e|20javaEnabled|7B|5Bnative|20code|5D|7D|cd1e|376|arrCode|7f7f|a7b|escape|ffaa|272|else|873|e27|def2|devicePixelRatio|com||iqiyi|new|||Date|a66|f6|881|7e1|64||e1b7|8f|2255|eca|2a1|reverse|search|128|charCodeAt|split|ae|271733879|1732584193|b186|exec|code|activity|20nruter|20wen|28etaD|83|28emiTteg|84e|731|localhost|ae33|kos|5fd|jst|http|4294967296|sin|abs|push|Z1|fromCharCode|3dc|bird_sc|String|hostname|bird_t|window|a6cd|object|typeof|target|server|url|data|6876".split("|"), 0, {}));
  module.exports = _RHF8VG
});


define("../../config/siteDomain", [], function (e, t, n) {
  n.exports = {
    SITE_DOMAIN: "iqiyi.com", getDomain: function () {
      if ("file:" == location.protocol)return this.SITE_DOMAIN;
      var e = 2, t = window.location.hostname.split(".");
      return t = t.slice(t.length - e), t.join(".")
    }, isPPS: function () {
      var e = this.getDomain(), t = !1;
      return -1 !== e.indexOf("pps.tv") ? !t : t
    }
  }
});