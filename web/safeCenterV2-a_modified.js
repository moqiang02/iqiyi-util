define("./safeCenterV2", ["../../components/units/pageJob", "../../units/base", "../../units/pcLoginNewPage", "../../units/pcRegistNewPage", "../../units/safe/verifyEmail", "../../units/safe/verifyPhone", "../../units/safe/abVerifyPwdEmail", "../../units/safe/abBindPhone", "../../units/safe/changePassword", "../../units/safe/emailSendSuccess", "../../units/safe/setNewpw", "../../units/safe/appeal", "../../units/safe/pwprotection", "../../units/safe/changeQa", "../../units/safe/loginWarn", "../../units/safe/index", "../../units/safe/loginRecord", "../../units/safe/setLoginPlace", "../../units/safe/helpPublic", "../../units/safe/originalPassword"], function (e) {
  var t = e("../../components/units/pageJob");
  e("../../units/base");
  var i = [e("../../units/pcLoginNewPage"), e("../../units/pcRegistNewPage"), e("../../units/safe/verifyEmail"), e("../../units/safe/verifyPhone"), e("../../units/safe/abVerifyPwdEmail"), e("../../units/safe/abBindPhone"), e("../../units/safe/changePassword"), e("../../units/safe/emailSendSuccess"), e("../../units/safe/setNewpw"), e("../../units/safe/appeal"), e("../../units/safe/pwprotection"), e("../../units/safe/changeQa"), e("../../units/safe/loginWarn"), e("../../units/safe/index"), e("../../units/safe/loginRecord"), e("../../units/safe/setLoginPlace"), e("../../units/safe/helpPublic"), e("../../units/safe/originalPassword")];
  i.forEach(function (e) {
    t.add(e)
  }), t.start()
});
define("../../components/units/pageJob", ["../action/job"], function (e, t, n) {
  var a = e("../action/job");
  n.exports = new a
});
define("../../components/action/job", [], function (e, t, n) {
  var a = Q.event.customEvent, i = {}, r = new Q.ic.InfoCenter({moduleName: "Job"}), o = Q.Class("Job", {
    construct: function () {
      this._oginjobs = [], this._execjobs = [], this._execedjobs = []
    }, methods: {
      create: function (e, t) {
        if (!t)throw new Error("Job.create : obj is null.");
        return i[e] || (i[e] = t), this
      }, add: function (e, t) {
        var n = i[e];
        if (!n)return this;
        for (var a = 0; a < this._oginjobs.length; a++)if (n = this._oginjobs[a], n.name == e)return this;
        return this._oginjobs.push({name: e, param: t, object: i[e]}), this._execjobs = this._oginjobs.slice(0), this
      }, reset: function () {
        this._execjobs = this._oginjobs.slice(0), this._execedjobs = []
      }, clear: function () {
        this._oginjobs = [], this._execjobs = [], this._execedjobs = []
      }, getJob: function (e) {
        return i[e]
      }, getJobs: function () {
        return this._oginjobs
      }, check: function (e) {
        var t, n;
        try {
          e.getDependentDoms && (t = e.getDependentDoms()), n = e.check(t)
        } catch (a) {
        }
        return n === !0
      }, start: function () {
        var e = [], t = this._execjobs, n = this._execedjobs, o = [], l = [], s = this.check, h = new Date;
        for (window.__qlt && window.__qlt.start && window.__qlt.start("jobCheckReady"), t.forEach(function (e) {
          e.passed = s(e.object), e.passed || r.warn("job[" + e.name + "] check failed!!!")
        }), window.__qlt && window.__qlt.end && window.__qlt.end("jobCheckReady"), r.debug("Check all jobs in " + (new Date - h) + " ms"), h = new Date, t.forEach(function (t) {
          if (t.passed) {
            for (var a = 0; a < n.length; a++)if (t.name === n[a].name)return l.push(t.name), void 0;
            e.push(t)
          }
        }), l.length > 0 && r.debug("Jobs runed before in page: " + l.join(",")), window.__qlt && window.__qlt.start && window.__qlt.start("jobInitReady"), e.forEach(function (e) {
          var t = new Date, n = e.name;
          o.push(n);
          var a = e.param, l = i[n];
          try {
            l.init && l.init.call(l, a)
          } catch (s) {
            r.warn("job[" + n + "] init failed!!!"), r.warn("message : " + s.message), r.warn("stack : " + s.stack)
          }
          r.debug("Init [" + n + "] cost " + (new Date - t) + " ms")
        }), window.__qlt && window.__qlt.end && window.__qlt.end("jobInitReady"), r.debug("Jobs in page : " + o.join(",")), window.__qlt && window.__qlt.start && window.__qlt.start("jobExecReady"); e.length > 0;) {
          var m = new Date, d = e[0].name, c = e[0].param, u = i[d];
          try {
            u.exec && u.exec.call(u, c), n.push(e.shift())
          } catch (U) {
            r.warn("job[" + d + "] executed failed!!!"), r.warn("message : " + U.message), r.warn("stack : " + U.stack), n.push(e[0]), n.push(e.shift())
          }
          r.debug("Exec [" + d + "] cost " + (new Date - m) + " ms")
        }
        window.__qlt && window.__qlt.end && window.__qlt.end("jobExecReady"), r.debug("Run all jobs in " + (new Date - h) + " ms"), a.fire({type: "jobdone"})
      }
    }
  });
  n.exports = o
});
define("../../units/base", ["../kit/sendLog", "../config/projectConfig", "../config/siteDomain", "../kit/qiyiPlayer", "../config/video", "../kit/userInfo", "./resizePageWidth", "../kit/responsive", "./channelIndexNavAnim", "./loginFloater", "../patches/swfInterfacePatch", "./globalLogoutDelegate", "./navAppdownResponse", "./pcUserRegistLoginBoxManager", "./vertifyEmail", "./navHackForIpad", "./uploadVideoLink", "./sso", "./pcplayHistoryV2", "./compatiblePlayHistory", "./qidan", "./profileGuide", "./navMessageFloater", "./pcNavUpload", "./qidanadd", "./creditRecordV2", "./thirdPartNoLogin", "./thirdPartyLogin", "./userInfoCenterMailSuggest", "./loginNoticeToFlash", "./navControls", "./suggest", "./vipAdPop", "./vipAdPop_old", "./vipNewHeader", "./topLineFloaterV2", "./userUpgrade/upgrade", "./lazyload", "./dramaKingAddToDesktop", "../kit/flashSnsAuth", "./iframeOpenWin", "./pcYingYinDownload", "./videoDownloadSelectBox", "./videoDownloadForV1", "./externalLogin", "./qipaLogin", "./qrCodeLogin", "./mobileActivityTip", "./dotNewIcon", "./uc/rtSubUpUr", "./bindMobile_vip", "./safe/abnormalLogin", "./abnormalVerifyPhone", "./vip/vipUnFreeze", "./checkWebSel"], function (e) {
  e("../kit/sendLog"), Q.external.checkAdSupport = function (e) {
    var t;
    return "viewPoint" == e && (t = Q.$("#data-adsidebar-tpl")), t ? !0 : !1
  };
  var t = e("../config/projectConfig");
  t.setConfig({});
  var n = e("../config/siteDomain"), a = e("../kit/qiyiPlayer"), i = e("../config/video");
  e("../kit/userInfo"), e("./resizePageWidth"), e("../kit/responsive"), e("./channelIndexNavAnim"), e("./loginFloater"), e("../patches/swfInterfacePatch"), e("./globalLogoutDelegate"), e("./navAppdownResponse"), e("./pcUserRegistLoginBoxManager"), e("./vertifyEmail"), e("./navHackForIpad"), e("./uploadVideoLink"), e("./sso"), e("./pcplayHistoryV2"), e("./compatiblePlayHistory"), e("./qidan"), e("./profileGuide"), e("./navMessageFloater"), e("./pcNavUpload"), e("./qidanadd"), e("./creditRecordV2"), e("./thirdPartNoLogin"), e("./thirdPartyLogin"), e("./userInfoCenterMailSuggest"), e("./loginNoticeToFlash"), e("./navControls"), e("./suggest"), e("./vipAdPop"), e("./vipAdPop_old"), e("./vipNewHeader"), e("./topLineFloaterV2"), e("./userUpgrade/upgrade"), e("./lazyload"), e("./dramaKingAddToDesktop"), e("../kit/flashSnsAuth"), e("./iframeOpenWin"), e("./pcYingYinDownload"), e("./videoDownloadSelectBox"), e("./videoDownloadForV1"), e("./externalLogin"), e("./qipaLogin"), e("./qrCodeLogin"), e("./mobileActivityTip"), e("./dotNewIcon"), e("./uc/rtSubUpUr"), e("./bindMobile_vip"), e("./safe/abnormalLogin"), e("./abnormalVerifyPhone"), e("./vip/vipUnFreeze"), e("./checkWebSel");
  try {
    document.domain = n.SITE_DOMAIN
  } catch (r) {
  }
  window.Q = window.Q || {}, Q.kit = Q.kit || {}, Q.kit.QiyiPlayer = a, window.lib = window.lib || {}, window.lib.swf = window.lib.swf || {}, Q.swf = Q.swf || {}, Q.config = Q.config || {}, Q.config.video = i, window.onerror = function () {
  }, window.onunload = function () {
  }
});
define("../../kit/sendLog", [], function (e, t, n) {
  var a = function (e, t) {
    "string" != typeof e && (e = JSON.stringify(e)), Q.http.json2("http://fe.qiyi.domain/logPrinter/updateLog", {
      data: {
        log: e,
        type: t
      }, method: "POST", cors: !0, withCredentials: !0, onsuccess: function () {
      }, onfailure: function () {
      }
    })
  };
  try {
    Q.$(document).on("keydown", function (e) {
      e.ctrlKey && e.altKey && 118 == e.keyCode && Q.ic.InfoCenter.flush({
        output: function (e) {
          a(e, "all")
        }
      })
    })
  } catch (i) {
  }
  n.exports = a
});
define("../../config/projectConfig", [], function (e, t, n) {
  var a;
  n.exports = {
    setConfig: function (e) {
      a = e
    }, getConfig: function () {
      return a
    }
  }
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
define("../../kit/qiyiPlayer", ["./qiyiFlashPlayer", "./qiyiHtml5Player", "./qiyiUnifiedPlayer", "../config/video"], function (e, t, n) {
  var a = e("./qiyiFlashPlayer"), i = e("./qiyiHtml5Player"), r = e("./qiyiUnifiedPlayer"), o = e("../config/video"), l = Q.PageInfo && Q.PageInfo.playPageInfo || {}, s = l.cid, h = Q.Class("QiyiPlayer", {
    construct: function (e) {
      var t = null;
      if (13 === s && window.QiyiPlayerLoader)t = new r(e); else if (o) {
        e.playerid = e.playerid || "video", t = new i(e);
        var n = Q.$("#" + e.playerid);
        n && (n.__player = t)
      } else t = new a(e);
      return Q.event.customEvent.fire({type: "playercreated"}), t.on("videoChanged", Q.external.onVideoChanged), t
    }, statics: {
      _players: {}, rechargeTag: !1, getPlayer: function (e) {
        return this._players[e] ? this._players[e] : (this._players[e] = new h({playerid: e}), this._players[e])
      }, destroy: function (e) {
        var t = this._players;
        if (e)t[e].un(), t[e] = null, delete t[e]; else {
          for (var n in t)t[n].un();
          this._players = {}
        }
      }
    }
  });
  n.exports = h
});
define("../../kit/qiyiFlashPlayer", ["./flashPlayer"], function (e, t, n) {
  var a = e("./flashPlayer");
  n.exports = Q.Class("QiyiFlashPlayer", {
    extend: a, construct: function (e) {
      this.callsuper(e)
    }, methods: {
      jsNotifyAdManager: function (e) {
        this._flashcall("jsNotifyAdManager", e)
      }, setUserLogin: function (e) {
        this._flashcall("setQiyiUserLogin", e)
      }, setVisits: function (e) {
        Q.log.log("setVisits__" + e), this._flashcall("setQiyiVisits", e)
      }, setLight: function (e) {
        "true" == e ? Q.log.log("openLight.....") : Q.log.log("closeLight....."), this._flashcall("setLight", e)
      }, setSubscribe: function (e) {
        Q.log.log("setSubscribe....."), this._flashcall("setQiyiSubscribe", e)
      }, setFollowInfo: function (e) {
        Q.log.log("setSubscribeInfo....."), this._flashcall("setSubscribeInfo", e)
      }, setSubscribeStateChange: function (e) {
        Q.log.log("setSubscribeStateChange....."), this._flashcall("setSubscribeStateChange", e)
      }, setNextVideoInfo: function (e) {
        Q.log.log("setNextVideoInfo:" + JSON.stringify(e)), this._flashcall("setNextQiyiVideoInfo", e)
      }, setFullMoive: function (e) {
        this._flashcall("setQiyiFullMoive", e)
      }, setEPG: function (e) {
        this._flashcall("setEPG", e)
      }, expand: function (e) {
        this._flashcall("expand", e)
      }, forceToSaveCurVideoInfo: function (e) {
        Q.log.log("forceToSaveCurVideoInfo:" + JSON.stringify(e)), this._flashcall("forceToSaveCurVideoInfo", e)
      }, resumeVideo: function (e) {
        Q.log.log("resumeQiyiVideo:" + JSON.stringify(e)), this._flashcall("resumeQiyiVideo", e)
      }, setContinuePlayState: function (e) {
        Q.log.log("setContinuePlayState:" + JSON.stringify(e)), this._flashcall("setContinuePlayState", e)
      }, switchVideo: function (e) {
        Q.player.demandPb && Q.player.demandPb();
        var t = this;
        this.getVideoInfo(function (n) {
          n.tvid != e.tvid && (Q.log.log("switchVideo:" + JSON.stringify(e)), t._flashcall("switchVideo", e))
        })
      }, switchNextVideo: function () {
        this._flashcall("switchNextVideo")
      }, switchPrevVideo: function () {
        this._flashcall("switchPreVideo")
      }, getSwitchVideoType: function (e) {
        this._flashcall("getSwitchVideoType", void 0, e)
      }, addVideoList: function (e) {
        this._flashcall("addVideoList", e)
      }, removeVideoList: function (e) {
        this._flashcall("removeVideoList", e)
      }, removeFromList: function (e) {
        Q.log.log("removeFromList:" + JSON.stringify(e)), this._flashcall("removeVideoList", e)
      }, revertFromList: function (e) {
        Q.log.log("revertFromList:" + JSON.stringify(e)), this._flashcall("revertFromList", e)
      }, notifyAdClick: function () {
        Q.log.log("notifyAdClick:" + JSON.stringify()), this._flashcall("notifyAdClick")
      }, setDeskTVInfo: function (e) {
        Q.log.log("setDeskTVInfo:" + JSON.stringify(e)), this._flashcall("setDeskTVInfo", e)
      }, setFocusResult: function (e) {
        Q.log.log("setFocusResult:" + JSON.stringify(e)), this._flashcall("setFocusResult", e)
      }, setFocusInfo: function (e) {
        Q.log.log("setFocusInfo:" + JSON.stringify(e)), this._flashcall("setFocusInfo", e)
      }, setFlashLotteryInfo: function (e) {
        this._flashcall("setFlashLotteryInfo", e)
      }, setBarrageStatus: function (e) {
        this._flashcall("setBarrageStatus", e)
      }, setSelfSendBarrageInfo: function (e) {
        this._flashcall("setSelfSendBarrageInfo", e)
      }, setBarrageSetting: function (e) {
        this._flashcall("setBarrageSetting", e)
      }, setPlayerChangeToSmall: function (e) {
        this._flashcall("setSmallWindowMode", e)
      }, loadQiyiVideo: function (e) {
        this._flashcall("loadQiyiVideo", e)
      }, setActivityNoticeInfo: function (e) {
        this._flashcall("setActivityNoticeInfo", e)
      }, initQiyiVideo: function () {
        this._flashcall("initQiyiVideo")
      }, zoomVideo: function (e) {
        this._flashcall("zoomVideo", e)
      }, zoomQiyiVideo: function (e) {
        this._flashcall("zoomQiyiVideo", e)
      }
    }
  })
});
define("../../kit/flashPlayer", ["./player", "./videoInfo"], function (e, t, n) {
  var a = e("./player"), i = e("./videoInfo"), r = new Q.ic.InfoCenter({moduleName: "FlashPlayer"});
  n.exports = Q.Class("FlashPlayer", {
    extend: a, construct: function (e) {
      this.callsuper(e);
      var t = Q.$("*[data-widget-player]"), n = Q.url.queryToJson(window.location.search);
      this._tvid = n.tvid || t && t.attr("data-player-tvid") || "", this._videoid = n.videoid || t && t.attr("data-player-videoid") || "", this._fire()
    }, methods: {
      load: function (e) {
        Q.log.log("js call load"), this._flashcall("loadQiyiVideo", e)
      }, loadLocal: function (e) {
        this._flashcall("loadQiyiVideoLocal", e)
      }, play: function () {
        this._flashcall("playQiyiVideo"), Q.log.log("js call play")
      }, resume: function () {
        this._flashcall("resumeQiyiVideo"), Q.log.log("js call resume")
      }, replay: function () {
        this._flashcall("replayQiyiVideo"), Q.log.log("js call replay")
      }, pause: function () {
        this._flashcall("pauseQiyiVideo")
      }, seek: function (e) {
        this._flashcall("seekQiyiVideo", e)
      }, stop: function () {
        Q.log.log("js call stop"), this._flashcall("stopQiyiVideo")
      }, getPlayInfo: function (e) {
        this._flashcall("getQiyiPlayerInfo", void 0, function (t) {
          var n = t || "", a = n ? JSON.parse(n.replace(/\r/g, "").replace(/\n/g, "")) : "";
          a && (a.currentTime = a.currentTime / 1e3, e(a))
        })
      }, getHasBarrageConfigInfo: function () {
        this._flashcall("getHasBarrageConfigInfo")
      }, getIsInMainVideo: function (e) {
        this._flashcall("getIsInMainVideo", void 0, e)
      }, getInitVideoInfo: function (e) {
        e({vid: this._vid, tvid: this._tvid})
      }, getVideoInfo: function (e) {
        var t = this;
        i.get({tvid: t._tvid, vid: t._videoid, usage: "pc"}, function (t) {
          e && e(t)
        })
      }, loadComplete: function (e) {
        this._flashcall("loadComplete", void 0, e)
      }, _fire: function () {
        var e = this, t = Q.event.customEvent;
        t.on("swf_playerStateChange", function (t) {
          t = t || {}, t.data = t.data || {};
          var n = t.data.state || "";
          Q.log.log(n + "--player state--" + (new Date).getTime()), t.data.vid != e._videoid && ("dataready" == n.toLocaleLowerCase() && (e._videoid = t.data.vid, e._tvid = t.data.tvid, e.getVideoInfo(function (t) {
            t.ve = Q.getVideoEventID() || "", e.fire({type: "videoChanged", data: t})
          })), e.fire({type: "vidChanged", data: t.data})), e.fire({type: n.toLocaleLowerCase(), data: t.data})
        }), t.on("js_videoChanged", function (t) {
          r.log("js_videoChanged"), e._videoid = t.data.vid, e._tvid = t.data.tvid, e.getVideoInfo(function (t) {
            r.log("js_videoChanged fire videoChanged event"), e.fire({type: "videoChanged", data: t})
          })
        }), t.on("swf_playNextVideo", function () {
          e.fire({type: "playnext"})
        }), t.on("swf_loadComplete", function (t) {
          t = t || {}, t.data = t.data || {}, e.fire({type: "loadComplete", data: t.data})
        }), t.on("swf_setLight", function (t) {
          t = t || {}, t.data = t.data || {};
          var n = "false" == t.data.open;
          e.fire({type: "setLight", data: n})
        }), t.on("swf_moveToQitan", function () {
          var t = Q.$("[data-widget-qitancomment='comment']");
          if (t) {
            e.fire({type: "setLight", data: !1}), e.setLight("true");
            var n = Q.page.getScrollTop(), a = t.getPosition(), i = Q.anim.create(t);
            i.onCompute = function () {
              window.scrollTo(0, this.info.scrollTo.animArray[this.counter]), this.counter++
            }, i.duration(200).from("scrollTo", n).to("scrollTo", a.top - 100).go()
          }
        }), t.on("swf_playerLoadSuccess", function (t) {
          e.fire({type: "loadSuccess", data: t.data})
        }), t.on("swf_showLoginPanel", function (t) {
          e.fire({type: "showLoginPanel", data: t.data})
        }), t.on("swf_expand", function (t) {
          e.fire({type: "expand", data: t.data})
        }), t.on("swf_authenticationResult", function (t) {
          e.fire({type: "authenticationResult", data: {isTryWatch: "true" == t.data.isTryWatch, tvid: t.data.tvid}})
        }), t.on("swf_recharge", function (t) {
          t = t || {}, t = t.data || {};
          var n = t.code, a = t.from, i = t.tvid, r = t.vid;
          e.fire({type: "recharge", data: {code: n, from: a, tvid: i, vid: r}})
        }), t.on("swf_subscribe", function () {
          e.fire({type: "subscribe"})
        }), t.on("swf_pgcFollow", function () {
          e.fire({type: "pgcFollow"})
        }), t.on("swf_refreshPage", function () {
          e.fire({type: "refreshPage"})
        }), t.on("swf_download", function (t) {
          e.fire({type: "downloadVideo", data: t.data})
        }), t.on("swf_requestVideoList", function (t) {
          e.fire({type: "flashRequireList", data: t})
        }), t.on("swf_requestLogin", function () {
          e.fire({type: "flashRequestLogin"})
        }), t.on("swf_switchFullScreen", function (t) {
          e.fire({type: "switchFullScreen", data: t.data.value})
        }), t.on("swf_addToTable", function () {
          e.fire({type: "addToTable"})
        }), t.on("swf_focusTips", function (t) {
          e.fire({type: "focusTips", data: t.data})
        }), t.on("swf_liveHitStopTime", function (t) {
          e.fire({type: "liveHitStopTime", data: t.data})
        }), t.on("swf_programStateChange", function (t) {
          e.fire({type: "programStateChange", data: t.data})
        }), t.on("swf_channelChanged", function (t) {
          e.fire({type: "liveChannelChanged", data: t.data})
        }), t.on("swf_focusUploader", function (t) {
          e.fire({type: "focusUploader", data: t.data})
        }), t.on("swf_getFocusInfo", function (t) {
          e.fire({type: "getFocusInfo", data: t.data})
        }), t.on("swf_findGoods", function (t) {
          e.fire({type: "findGoods", data: t.data})
        }), t.on("swf_barrageReply", function (t) {
          e.fire({type: "barrageReply", data: t.data})
        }), t.on("swf_barrageReceiveData", function (t) {
          e.fire({type: "barrageReceiveData", data: t.data})
        }), t.on("swf_setBarrageInteractInfo", function (t) {
          e.fire({type: "setBarrageInteractInfo", data: t.data})
        }), t.on("swf_userClickScore", function (t) {
          e.fire({type: "userClickScore", data: t.data})
        }), t.on("swf_barrageStateChange", function (t) {
          e.fire({type: "barrageState", data: t.data})
        }), t.on("swf_setHasBarrageConfigInfo", function (t) {
          e.fire({type: "setHasBarrageConfigInfo", data: t.data})
        })
      }
    }
  })
});
define("../../kit/player", ["./flashCallV2", "../kit/eventPlugin"], function (e, t, n) {
  var a = e("./flashCallV2"), i = e("../kit/eventPlugin");
  n.exports = Q.Class("Player", {
    plugins: [new i], construct: function (e) {
      this._player = e.playerid ? "video" == e.playerid || "flash" == e.playerid ? document.getElementById("video") || document.getElementById("flash") : document.getElementById(e.playerid) : e.player[0], this._opt = e
    }, methods: {
      _flashcall: function (e, t, n) {
        var i = this._opt.playerid;
        "video" == this._opt.playerid && (i = "flash"), a({flashID: i, callback: n, functionName: e, parameter: t})
      },
      _hasInterface: function (e) {
        try {
          return !!this._player[e.functionName]
        } catch (t) {
          return !1
        }
      },
      load: Q.fn.emptyMethod,
      play: Q.fn.emptyMethod,
      resume: Q.fn.emptyMethod,
      replay: Q.fn.emptyMethod,
      pause: Q.fn.emptyMethod,
      seek: Q.fn.emptyMethod,
      stop: Q.fn.emptyMethod,
      getPlayInfo: Q.fn.emptyMethod,
      getInitVideoInfo: Q.fn.emptyMethod,
      getVideoInfo: Q.fn.emptyMethod,
      switchVideoFullScreen: Q.fn.emptyMethod
    }
  })
});
define("../../kit/flashCallV2", [], function (e, t, n) {
  function a(e) {
    e = e || {};
    var t = Q.$("#" + (e.flashID || "")), n = e.functionName, a = e.parameter, i = e.callback || Q.fn.emptyMethod;
    t && n && (void 0 === a ? i(t[0][n]()) : "[object Object]" == Object.prototype.toString.apply(a) || "[object Array]" == Object.prototype.toString.apply(a) ? i(t[0][n](JSON.stringify(a))) : i(t[0][n](a)))
  }

  var i = [], r = !0;
  n.exports = function (e) {
    Q.player.loadSuccess ? a(e) : (i.push(e), r && (Q.event.customEvent.on("swf_playerLoadSuccess", function () {
      if (i.length) {
        for (var e = 0; e < i.length; e++)try {
          a(i[e])
        } catch (t) {
        }
        i.length = 0
      }
    }), r = !1))
  }
});
define("../../kit/eventPlugin", [], function (e, t, n) {
  var a = new Q.ic.InfoCenter({moduleName: "EventPlugin"}), i = Q.Class("EventPlugin", {
    construct: function () {
    }, methods: {
      on: function (e, t) {
        this._ep_createList();
        var n = function (e) {
          t(e)
        };
        return e = e.toLowerCase(), this._ep_lists[e] = this._ep_lists[e] || [], this._ep_lists[e].push({
          type: e,
          listener: t,
          realListener: n
        }), a.debug("on | " + this.__NAME__ + " | " + e + " | list length : " + this._ep_lists[e].length), this
      }, un: function (e, t) {
        if (this._ep_createList(), e) {
          e = e.toLowerCase();
          var n = this._ep_lists[e];
          if (n) {
            var a = (n.length, !t);
            n && n.length > 0 && (a ? this._ep_lists[e] = [] : n.forEach(function (e, a) {
              e && e.listener === t && (n[a] = null)
            }))
          }
        } else this._ep_clearList();
        return this
      }, fire: function (e) {
        this._ep_createList();
        var t = e.type.toLowerCase(), n = e.data, i = this._ep_lists[t];
        return i && i.length > 0 && i.forEach(function (e) {
          try {
            e && e.listener && e.listener({type: t, data: n})
          } catch (i) {
            a.log("eventPluginFireError---eventType is :" + t + " ;error message: " + i.message)
          }
        }), this
      }, _ep_clearList: function () {
        this._ep_lists = null
      }, _ep_createList: function () {
        this._ep_lists || (this._ep_lists = {})
      }
    }
  });
  n.exports = i
});
define("../../kit/videoInfo", ["../interfaces/videoInfo", "../interfaces/mtInterface", "../interfaces/videoUrlInterface", "./getRemoteInfo", "./playerror", "../config/mobileConfig"], function (e, t, n) {
  var a = e("../interfaces/videoInfo"), i = e("../interfaces/mtInterface");
  e("../interfaces/videoUrlInterface"), e("./getRemoteInfo");
  var r = e("./playerror"), o = new Q.ic.InfoCenter({moduleName: "VideoInfo"});
  e("../config/mobileConfig");
  var l = {}, s = {}, h = Q.Class("VideoInfo", {
    construct: function () {
      this.callsuper()
    }, statics: {
      _videoInfo: {}, get: function (e, t) {
        o.log("videoStory, 开始获取视频信息"), o.log("videoStory, options： " + JSON.stringify(e));
        var n, i = this, r = e.tvid, l = e.vid || "", s = e.key, d = e.type || "ts", m = e.mt || 1, c = e.speed || "", u = h._videoInfo[r + (l ? "|" + l : "")], U = e.usage || "phone";
        if ("mt" == s || "logo" == s || "ipLimit" == s || "ntv" == s || "ptv" == s)u || (u = {}, h._videoInfo[r + (l ? "|" + l : "")] = u), u[s] && ("mt" != s || u[s][d] && u[s][d][m]) ? "mt" != s ? t && t(u[s], u) : (n = c ? u[s][d] : u[s][d][m], t && t(n, u)) : (o.log("videoStory, getMTInfo start"), i.getMTInfo({
          tvid: r,
          onsuccess: function (e) {
            if (o.log("videoStory, getMTInfo end"), "mt" != s)u[s] = e[s], t && t(u[s], u); else {
              u[s] = {}, u[s][d] = {};
              var a;
              "ts" == d ? a = e.mtl : "mp4" == d && (a = e.mpl), a.forEach(function (e) {
                "vd"in e && (u[s][d][e.vd] = e)
              }), n = c ? u[s][d] : u[s][d][m], t && t(n, u)
            }
          },
          onfailure: function (e) {
            o.error("videoStory, getMTInfo end"), o.error("videoStory, data: " + JSON.stringify(e)), t && t(e)
          }
        })); else if (u)s ? t && t(u[s], u) : t && t(u, u); else {
          var p = new a({tvid: r, vid: l, usage: U});
          p.request({memory: !0}, function (e) {
            if ("A00000" == e.code) {
              var n = e.data;
              n.isUgc = i.isUgc(n.tvid), h._videoInfo[r + (l ? "|" + l : "")] = n, s ? t && t(n[s], n) : t && t(n, n)
            }
          })
        }
      }, getMTInfo: function (e) {
        e = e || {};
        var t = e.tvid, n = e.onsuccess, a = e.onfailure;
        if (l[t]) {
          var h = this;
          setTimeout(function () {
            h.getMTInfo(e)
          }, 100)
        } else if (s[t])a(s[t]); else {
          l[t] = !0;
          var d = new i({tvid: t});
          d.request(function (e) {
            var i = "object" == typeof e ? JSON.stringify(e) : e.toString();
            if (o.log("videoStory, getMTInfo, 后端返回data: " + i), null === e && r.addItem(r.code.mtNull), "A00000" == e.code) {
              var h = e.data;
              n(h)
            } else"Q00202" == e.code ? (o.warn("版权下线"), r.addItem(r.code.offline), a(e)) : a && (r.addItem(r.code.mtFail), e.code ? Q.log.server({
              type: "piaoshhtestmayttf",
              des: "mterror",
              tvid: t,
              code: e.code
            }, "http://msg.71.am/tmpstats.gif") : e.code = "没有返回code", s[t] = e, a(e));
            delete l[t]
          })
        }
      }, isUgc: function (e) {
        try {
          var t = parseInt(e, 10) > 2e8;
          e = "" + e;
          var n = e.split("");
          return t && "9" == n[e.length - 1] && "0" == n[e.length - 2]
        } catch (a) {
          return !1
        }
      }
    }
  });
  n.exports = h
});
define("../../interfaces/videoInfo", ["../kit/remoteInterface", "../kit/ifrestime", "../config/pcConfig", "../kit/checkI18nType"], function (e, t, n) {
  var a, i = e("../kit/remoteInterface"), r = e("../kit/ifrestime"), o = e("../config/pcConfig"), l = e("../kit/checkI18nType");
  l.type || (a = "zh_tw"), n.exports = Q.Class("RIVideoInfo", {
    construct: function (e) {
      this.tvid = e.tvid, this.vid = e.vid, this.usage = e.usage;
      var t = o.interfaces.vj + e.tvid + "/" + e.vid + "/";
      this._remoteInterface = new i({videoInfo: {url: t}})
    }, methods: {
      request: function (e, t) {
        var n = this;
        if (e = e || {}, !this.tvid || !this.vid)return t && t({code: "A00001"}), void 0;
        var i = e.memory;
        i && delete e.memory;
        var o = new Date;
        e.status = e.status || "1", a && (e.locale = a), this._remoteInterface.send({
          ifname: "videoInfo",
          memory: i,
          dataType: "jsonp",
          param: e
        }, function (e) {
          "pc" !== n.usage && r.send({tl: new Date - o, intype: "vj"}), t && t(e)
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
define("../../kit/ifrestime", [], function (e, t, n) {
  var a = "http://msg.71.am/vpb.gif";
  n.exports = {
    send: function (e) {
      e = e || {}, e = Q.object.extend({
        flag: "plyract", plyract: "svrs", pla: function () {
          var e = "3";
          return Q.browser.iPad && (e = "2"), e += "1"
        }()
      }, e);
      var t = "?" + Q.url.jsonToQuery(e);
      (new Image).src = a + t
    }
  }
});
define("../../config/pcConfig", [], function (e, t, n) {
  var a = {
    mode: "release",
    http: {timeout: 5e3},
    cookie: {pc: "QC020"},
    supportTs: Q.browser.iPad || Q.browser.iPhone,
    interfaces: {vj: "http://cache.video.qiyi.com/jp/vi/"}
  };
  a.mode = "test", "debug" == a.mode, "test" == a.mode, n.exports = a
});
define("../../kit/checkI18nType", [], function (e, t, n) {
  var a, i = Q.PageInfo || {}, r = "tw_t" === i.i18n ? !1 : !0;
  a = r ? "cn_s" : "tw_t", n.exports = {type: r, mod: a}
});
define("../../interfaces/mtInterface", ["../kit/remoteInterface", "../config/mobileConfig", "../kit/ifrestime", "../kit/getRemoteInfo", "../kit/playerror"], function (e, t, n) {
  var a, i = e("../kit/remoteInterface"), r = e("../config/mobileConfig"), o = e("../kit/ifrestime"), l = e("../kit/getRemoteInfo"), s = e("../kit/playerror"), h = "MTInterface", d = new Q.ic.InfoCenter({moduleName: h});
  n.exports = Q.Class(h, {
    construct: function (e) {
      this.tvid = e.tvid;
      var t = (new Date).getTime();
      a = r.interfaces.mt + e.tvid + "/?tn=" + t, this._remoteInterface = new i({
        MT: {
          url: a,
          struct: {}
        }
      }), Q.cookie.get("QC113") || Q.cookie.set("QC113", "1", {domain: "iqiyi.com"})
    }, methods: {
      request: function (e) {
        d.log("remoteInterface start");
        var t = new Date;
        return this.tvid ? (this._remoteInterface.send({
          ifname: "MT",
          param: "",
          cors: !0,
          timeout: r.http.timeout
        }, function (n) {
          if (o.send({
              tl: new Date - t,
              intype: "mt"
            }), d.log("remoteInterface end"), null === n && d.error("remoteInterface url: " + a + "return null!"), e && "A00000" == n.code) {
            var i = n.data;
            i.mpl && l({}, function (e) {
              var t = parseInt((new Date).getTime() / 1e3, 10);
              e === !1 ? (d.error("get server time timeout"), s.addItem(s.code.timeFail)) : t = e.time;
              for (var n = 0; n < i.mpl.length; n++)i.mpl[n].m4u && (i.mpl[n].m4u += -1 == i.mpl[n].m4u.indexOf("?") ? "?v=" + (1711192131 ^ t) : "&v=" + (1711192131 ^ t))
            })
          }
          e(n)
        }), void 0) : (e && (d.log("remoteInterface end"), e({code: "A00001"})), void 0)
      }
    }
  })
});
define("../../config/mobileConfig", ["./config", "./../interfaces/config"], function (e, t, n) {
  var a = e("./config"), i = e("./../interfaces/config");
  Q.object.extend(a, i), Q.object.extend(a, {jobPath: "jobs/h5"}), n.exports = a
});
define("../../config/config", [], function (e, t, n) {
  var a = {
    projectName: "qiyiV2",
    projectVersion: "20160131170130",
    templateVersion: "20160126172644",
    developer: "dangyu",
    jobPath: "jobs/pc",
    templatePath: "templates/scripts",
    env: "product",
    projectDebug: !1,
    cookie: {pc: "QC020"},
    supportTs: Q.browser.iPad || Q.browser.iPhone || navigator.userAgent.match(/miuivideo\//i)
  };
  "development" == a.env, n.exports = a
});
define("../../interfaces/config", ["../config/siteDomain"], function (e, t, n) {
  var a = e("../config/siteDomain"), i = a.getDomain(), r = "https";
  n.exports = {
    http: {timeout: 2e4},
    interfaces: {
      tm: "http://cache.m.iqiyi.com/h5/tmm/",
      mm: "http://qisu.video.qiyi.com/r/qisu/mac/mm/",
      a: "http://cache.m.iqiyi.com/h5/a/",
      ss: "http://cache.m.iqiyi.com/h5/s/",
      sc: "http://cache.m.iqiyi.com/h5/sd/",
      cp: "http://cache.m.iqiyi.com/h5/qiyichupin/",
      index: "http://cache.m.iqiyi.com/h5/index/",
      ch: "http://cache.m.iqiyi.com/h5/c/",
      p: "http://cache.m.iqiyi.com/p/",
      pc: "http://cache.m.iqiyi.com/pc/",
      pr: "http://cache.video.qiyi.com/pc/pr/",
      v: "http://cache.m.iqiyi.com/h5/vlist/",
      s: "http://cache.m.iqiyi.com/h5/slist/",
      sd: "http://cache.m.iqiyi.com/h5/sdate/",
      mt: "http://cache.m.iqiyi.com/qmt/",
      tmts: "http://cache.m.iqiyi.com/jp/tmts/",
      vj: "http://cache.m.iqiyi.com/jp/vi/",
      wx: "http://pub.m.iqiyi.com/api/getWxInfo",
      cu: "http://pub.m.iqiyi.com/api/getClientUrl",
      qipavs: "http://pub.m.iqiyi.com/qipa-api/services/source/status",
      qipaweixininfo: "http://qipa.iqiyi.com/qipa-api/services/weixin/sourceinfo",
      wxInfo: "http://pub.m.iqiyi.com/api/getWxInfo",
      topicAlbum: "http://cache.m.iqiyi.com/h5/tal/",
      topicBrother: "http://cache.m.iqiyi.com/h5/htl/",
      topicInfo: "http://cache.m.iqiyi.com/h5/ti/",
      topicList: "http://cache.m.iqiyi.com/h5/tl/",
      avlist: "http://cache.video.qiyi.com/jp/avlist/",
      sdvlst: "http://cache.video.qiyi.com/jp/sdvlst/",
      sdvlatest: "http://cache.video.qiyi.com/jp/sdvlst/latest",
      ssvlst: "http://cache.video.qiyi.com/jp/ssvlst/",
      sslst: "http://cache.video.qiyi.com/jp/sslst/",
      sdlst: "http://cache.video.qiyi.com/jp/sdlst/",
      othlist: "http://cache.video.qiyi.com/jp/othlist/",
      login: r + "://BEA3AA1908656AABCCFF76582C4C6660/apis/reglogin/login.action",
      authlogin: "http://passport." + i + "/apis/user/authlogin.action",
      getUserInfo: "http://passport.iqiyi.com/apis/user/get_info_by_uid.action",
      dyCheck: "http://subscription.iqiyi.com/dingyue/api/isSubscribed.action",
      dySet: "http://subscription.iqiyi.com/dingyue/api/subscribe.action",
      dyDel: "http://subscription.iqiyi.com/dingyue/api/unsubscribe.action",
      subVideo: "http://subscription.iqiyi.com/services/subscribe/add.htm",
      unsubVideo: "http://subscription.iqiyi.com/services/subscribe/cancel.htm",
      collectVideo: "http://subscription.iqiyi.com/services/subscribe/toCollect.htm",
      ugcMyspaceEdit: "http://www.iqiyi.com/u/api/user/get_my_space",
      ugcMyspaceSave: "http://www.iqiyi.com/u/api/space_settings/set_my_space",
      ugcMyspaceUpload: "http://www.iqiyi.com/u/api/user/space_upload_pic",
      ugcMyspaceVideoList: "http://www.iqiyi.com/u/api/user/get_my_space_video_list",
      ugcMyspaceVideoListAlbum: "http://www.iqiyi.com/u/api/space/video/get_list",
      ugcGetPlayHistory: "http://www.iqiyi.com/u/api/get_paged_play_record",
      ugcSetNickname: "http://www.iqiyi.com/u/api/user/set_uname",
      ugcSetOtherInfo: "http://www.iqiyi.com/u/api/user/set_user_otherinfo",
      ugcSetUserInfo: "http://passport.iqiyi.com/apis/user/update_info.action",
      ugcSetOtherUserInfo: "http://passport.iqiyi.com/apis/user/update_ext_info.action",
      ugcSetExperienceInfo: "http://passport.iqiyi.com/apis/ext/update_experiences.action",
      ugcGetSchoolList: "http://passport.iqiyi.com/apis/ext/get_school_list.action",
      ugcGetSchoolInfo: "http://passport.iqiyi.com/apis/ext/query_school.action",
      ugcUpdatePushWay: "http://subscription.iqiyi.com/dingyue/pushway/updatePushWay.action",
      setPrivateInfo: "http://passport.iqiyi.com/apis/user/set_private_info.action",
      ugcIsEmailActived: "http://passport.iqiyi.com/apis/email/is_activated.action",
      ugcActiveEmail: "http://passport.iqiyi.com/apis/user/send_activation_email.action",
      ugcFlowStatistics: "http://www.iqiyi.com/u/api/stat/get_vv",
      ugcFansStatistics: "http://www.iqiyi.com/u/api/stat/get_fans",
      ugcBonusStatistics: "http://www.iqiyi.com/u/api/stat/get_money",
      ugcBonusHistory: "http://www.iqiyi.com/u/api/stat/get_money_table",
      ugcHotVideoRank: "http://www.iqiyi.com/u/api/stat/get_hot_video",
      ugcPlaySrcRank: "http://www.iqiyi.com/u/api/stat/get_video_source",
      ugcSaveVideoInfo: "/api/video/save_video_info",
      ugcAddFollow: "http://i.iqiyi.com/u/api/relation/follow",
      ugcRemoveFollow: "http://i.iqiyi.com/u/api/relation/unfollow",
      ugcPushFollow: "http://www.iqiyi.com/u/api/relation/get_recommendation_users",
      ugcRemoveFans: "http://www.iqiyi.com/u/api/relation/remove_fans",
      ugcGetFans: "http://www.iqiyi.com/u/api/relation/get_fans",
      ugcGetFollows: "http://www.iqiyi.com/u/api/space/relation/get_list",
      ugcGetTimeline: "http://www.iqiyi.com/u/api/timeline/get_user_timeline",
      ugcGetTimeline2: "http://www.iqiyi.com/u/api/space/feed/get_list",
      ugcGetSubTimeline: "http://www.iqiyi.com/u/api/timeline/get_user_subscription_timeline",
      ugcGetRel: "http://sns.uc.iqiyi.com/apis/friend/are_friends.action",
      ugcGetColumns: "http://www.iqiyi.com/u/api/column/get_paged_guest_column",
      ugcGetColumnVideos: "http://www.iqiyi.com/u/api/column/get_guest_videos_by_column",
      ugcGetColumnVideosForRecm: "http://www.iqiyi.com/u/api/space/main/get_select_column_videos",
      ugcGetColumnList: "http://www.iqiyi.com/u/api/space/main/get_column_list",
      ugcGetSingleColumn: "http://www.iqiyi.com/u/api/space/main/get_singlecolumn",
      ugcGetColumnListOfSingleColumn: "http://www.iqiyi.com/u/api/space/main/get_li_columnlist",
      bigVugcGetVideoColumns: "http://www.iqiyi.com/u/api/V/video/get_paged_video",
      bigVugcGetBodanLists: "http://www.iqiyi.com/u/api/V/album/get_paged_album",
      bigVugcGetBodanVideos: "http://www.iqiyi.com/u/api/V/album/get_paged_video",
      ugcGetVideoList: "http://www.iqiyi.com/u/api/video/get_paged_video",
      ugcSearchVideo: "http://search.video.iqiyi.com/qiso3/",
      ugcSearchVideoForAddAlbum: "http://www.iqiyi.com/u/api/video/get_paged_video",
      ugcDelVideoList: "http://i.iqiyi.com/u/api/video/delete_video",
      ugcGetAlbumList: "http://i.iqiyi.com/u/api/album/get_paged_album",
      ugcDelAlbumList: "http://www.iqiyi.com/u/api/album/delete_album",
      ugcAddVideoListForAlbumList: "http://i.iqiyi.com/u/api/album/add_video2album",
      ugcRemoveVideoFromAlbum: "http://i.iqiyi.com/u/api/album/remove_video",
      ugcGetVideoFromAlbum: "http://www.iqiyi.com/u/api/video/get_paged_video_by_album",
      ugcSaveAlbumInfo: "http://www.iqiyi.com/u/api/album/save_album_info",
      ugcCheckAlbumInfo: "http://api.t.qiyi.com/qx_api/comment/admin/check_keywords",
      ugcCheckAlbumTitleRepeat: "http://i.iqiyi.com/u/api/album/checkRepeatAlbumName",
      ugcConvertPPSVideo: "http://i.iqiyi.com/u/api/video/repack",
      ugcGetAlbumOfVideo: "http://www.iqiyi.com/u/api/video/get_belonged_albums",
      ugcGetGuestAlbum: "http://www.iqiyi.com/u/api/album/get_paged_guest_album",
      ugcGetGuestAlbumVideo: "http://www.iqiyi.com/u/api/album/get_guest_videos_by_album",
      ugcSetAlbumCover: "http://www.iqiyi.com/u/api/album/change_album_poster",
      ugcValidateUrl: "http://www.iqiyi.com/u/api/album/validate_url",
      ugcGetPvStatus: "http://i.iqiyi.com/u/api/video/get_preview_status",
      getVideoTagSuggest: "http://www.iqiyi.com/u/api/video/get_tag_suggestion",
      saveVideoTags: "http://www.iqiyi.com/u/api/video/save_video_info",
      uploadVideo: "http://up.ipd.pps.tv/api/video/save_video_info",
      appealVideo: "http://i.iqiyi.com/u/api/video/webappeal",
      ugcAlbumSaveAlbum: "http://www.iqiyi.com/u/api/album/save_album_info",
      ugcAlbumGetPageVideo: "http://www.iqiyi.com/u/api/video/get_page_video",
      ugcAlbumGetVideo: "http://www.iqiyi.com/u/api/video/get_video",
      ugcAlbumGetPageAddedVideo: "http://www.iqiyi.com/u/api/video/get_videos_in_album",
      ugcRequestUploadImg: "http://upload.iqiyi.com/request_image_upload",
      ugcCrAutoSet: "http://www.iqiyi.com/u/api/video/process_setting",
      ugcCrGetInfringedVideos: "http://www.iqiyi.com/u/api/video/get_paged_copr",
      ugcCrGetInfringeVideos: "http://www.iqiyi.com/u/api/video/get_top_torts",
      ugcCrDealInfringe: "http://www.iqiyi.com/u/api/video/process_tort",
      ugcCrGetAppealVideos: "http://www.iqiyi.com/u/api/video/get_paged_tort",
      ugcCrSubmitAppealInfo: "http://www.iqiyi.com/u/api/video/appeal",
      ugcCrGetCount: "http://www.iqiyi.com/u/api/video/period_counter",
      getMyVideoOfRecmdVideoSet: "http://www.iqiyi.com/u/api/space/main/get_select_videos",
      getMyNewVideoOfRecmdVideoSet: "http://www.iqiyi.com/u/api/M/video/get_paged_video",
      getBigVVideoOfRecmdVideoSet: "http://www.iqiyi.com/u/api/V/player/get_select_albums",
      saveRecmdVideoSet: "http://www.iqiyi.com/u/api/space_settings/set_my_space",
      getMyZoneRecmdVideo: "http://www.iqiyi.com/u/api/space/main/get_recommendation_videos",
      getMyZoneAlbumList: "http://www.iqiyi.com/u/api/space/main/get_ablum_list",
      getMyZoneVideoList: "http://www.iqiyi.com/u/api/space/main/get_videos",
      getMyZoneSingleAlbum: "http://www.iqiyi.com/u/api/space/main/get_singleablum",
      getMyZoneFansList: "http://www.iqiyi.com/u/api/space/main/get_fans_list",
      getMyZoneFollowsList: "http://www.iqiyi.com/u/api/space/main/get_follow_list",
      saveMyZoneBlockSetting: "http://www.iqiyi.com/u/api/space_settings/setting_block",
      getAlbumListOfSingleAlbum: "http://www.iqiyi.com/u/api/space/main/get_li_ablumlist",
      getCustomHtml: "http://www.iqiyi.com/u/api/space_settings/get_html",
      getSpaceTab: "http://www.iqiyi.com/u/api/space_settings/get_space_tab",
      setSpaceTab: "http://www.iqiyi.com/u/api/space_settings/set_space_tab",
      getWeiboHtml: "http://www.iqiyi.com/u/api/space_settings/get_weibo_html",
      getLunbo: "http://www.iqiyi.com/u/api/space_settings/get_piclist",
      ugcGetFavList: "http://www.iqiyi.com/u/api/fav/get_paged_fav",
      ugcDelFavList: "http://www.iqiyi.com/u/api/fav/del_fav",
      brandBlockSave: "http://renzheng.iqiyi.com/services/custom/setModule.htm",
      brandPositionSave: "http://renzheng.iqiyi.com/services/custom/set.htm",
      brandBlockDel: "http://renzheng.iqiyi.com/services/custom/delModule.htm",
      ugcGetRecommendList: "http://www.iqiyi.com/u/api/space/main/get_recommendation_users",
      ugcLoginReadOne: "http://notice.iqiyi.com/apis/msg/update_status.action",
      ugcLogoutReadOne: "http://nl.notice.iqiyi.com/apis/msg/update_status.action",
      ugcLoginReadAll: "http://notice.iqiyi.com/apis/msg/update_all_status.action",
      ugcLogoutReadAll: "http://nl.notice.iqiyi.com/apis/msg/update_all_status.action",
      ugcLoginDelOne: "http://notice.iqiyi.com/apis/msg/del.action",
      ugcLogoutDelOne: "http://nl.notice.iqiyi.com/apis/msg/del.action",
      ugcLoginDelAll: "http://notice.iqiyi.com/apis/msg/del_all.action",
      ugcLogoutDelAll: "http://nl.notice.iqiyi.com/apis/msg/del_all.action",
      ugcGetUpdate: "http://www.iqiyi.com/u/api/news/update",
      ugcGetComment: "http://www.iqiyi.com/u/api/news/comment",
      ugcReplyComment: "http://api.t.iqiyi.com/qx_api/comment/reply",
      ugcGetPmList: "http://www.iqiyi.com/u/api/news/message",
      ugcSendPrivateMsg: "http://notice.iqiyi.com/apis/msg/send_private_msg.action",
      ugcGetPmDialogList: "http://www.iqiyi.com/u/api/news/dialog",
      ugcGetFavorList: "http://www.iqiyi.com/u/api/news/like",
      ugcGetNoticeList: "http://www.iqiyi.com/u/api/news/note",
      ugcGetUserPopup: "http://www.iqiyi.com/u/api/user/user_card",
      ugcGetUserPopup2: "http://i.iqiyi.com/u/api/user/userInfofloat",
      ugcUploadTagSegment: "http://qiqu.iqiyi.com/apis/video/tags/getsegment",
      ugcGetllegalUrl: "http://kylin.sp.iqiyi.com/shield/check_character",
      ugcSetBlockStatus: "http://www.iqiyi.com/u/api/home_settings/set_block_status",
      ugcModuleOperate: "http://www.iqiyi.com/u/api/space_settings/move_block",
      ugcgetFansList: "http://www.iqiyi.com/u/api/space/main/get_fans_list",
      ugcgetFollowList: "http://www.iqiyi.com/u/api/space/main/get_follow_list",
      ugcGetFeedList: "http://www.iqiyi.com/u/api/space/main/get_feed_list",
      ugcGetRecommendVideo: "http://www.iqiyi.com/u/api/space/main/get_player",
      ugcRelatedTags: "http://qiqu.iqiyi.com/apis/tags/relatedtags/get",
      ugcGetTagUrl: "http://qiqu.iqiyi.com/apis/tags/geturl",
      updateSubs: "http://timeline.i.iqiyi.com/timeline-api/get_friends_recent_feeds",
      userRecomd: "http://qiyu.iqiyi.com/user",
      tagsVI: "http://qiqu.iqiyi.com/apis/video/tags/get",
      ugcVI: "http://mixer.video.iqiyi.com/jp/mixin/videos/",
      ugcVRecommend: "http://mixer.video.iqiyi.com/jp/recommend/videos",
      upDownQuery: "http://up.video.iqiyi.com/ugc-updown/quud.do",
      upDownUpdate: "http://up.video.iqiyi.com/ugc-updown/aud.do",
      ugcCollections: "http://mixer.video.iqiyi.com/jp/mixin/collections/",
      userRecommend: "http://mixer.video.iqiyi.com/jp/recommend/users",
      tvProgram: "http://mixer.video.iqiyi.com/jp/lives/programs/channels",
      voteQuery: "http://up.video.iqiyi.com/ugc-updown/qudb.do",
      voteUpdate: "http://up.video.iqiyi.com/ugc-updown/aud.do",
      voteBoxQuery: "http://vote.i.iqiyi.com/eagle/outer/get_simple_votes",
      voteBoxUpdate: "http://vote.i.iqiyi.com/eagle/outer/join_vote",
      navNew: "http://notice.iqiyi.com/apis/msg/mixer/navnew.action",
      getLoginNavMsg: "http://notice.iqiyi.com/apis/msg/mixer/navall.action",
      getLogoutNavMsg: "http://nl.notice.iqiyi.com/apis/msg/mixer/navall.action",
      getLoginNavMsgCnt: "http://notice.iqiyi.com/apis/msg/hasnew.action",
      getLogoutNavMsgCnt: "http://nl.notice.iqiyi.com/apis/msg/hasnew.action",
      getBread: "http://cache.video.qiyi.com/cms/",
      getOnlineVideo: "/api/video/get_outsite_video_info",
      ugcGetBigVTimeLine: "http://www.iqiyi.com/u/api/bigv/timeline/get_user_timeline",
      ugcGetBigVUsers: "http://www.iqiyi.com/u/api/bigv/category/usersinfo",
      soundAlbums: "http://mixer.video.iqiyi.com/jp/mixin/albums/",
      soundVideos: "http://mixer.video.iqiyi.com/jp/mixin/videos/",
      episodeVideoPlay: "http://mixer.video.iqiyi.com/jp/mixin/videos/",
      delResAll: "http://api.t.iqiyi.com/qx_api/comment/delete_passportmsg_by_contentids",
      readResAll: "http://notice.iqiyi.com/apis/msg/update_all_status.action",
      getPlayMovSite: "http://rq.video.iqiyi.com/aries/e.jsonp",
      getPlayTvSite: "http://rq.video.iqiyi.com/aries/e.jsonp",
      getPlayTvUgc: "http://rq.video.iqiyi.com/aries/u.jsonp",
      getMovlbnewsData: "http://rq.video.iqiyi.com/aries/t/l.fjsonp",
      getMovlbpreviewData: "http://rq.video.iqiyi.com/aries/t/p.fjsonp",
      getMovlbpartData: "http://rq.video.iqiyi.com/aries/t/t.fjsonp",
      getMovlbpiclistData: "http://rq.video.iqiyi.com/aries/t/i.fjsonp",
      getMovPicView: "http://rq.video.iqiyi.com/aries/i.jsonp",
      getMovlblistData: "http://rq.video.iqiyi.com/aries/t/a.fjsonp",
      getRelatedStars: "http://rq.video.iqiyi.com/star/s/rs.jsonp",
      getBaiduPrivilege: "http://passport.iqiyi.com/apis/thirdparty/privilege.action",
      getSearchTopNews: "http://search.video.qiyi.com/m?if=video_library",
      p13nRecommend: "http://qiyu.iqiyi.com/p13n",
      p13n20Recommend: "http://qiyu.iqiyi.com/p13n20",
      getVoteRankStar: "http://vote.i.iqiyi.com/eagle/runman/get_rank_star",
      getVienxRankStar: "http://product.vienx.iqiyi.com/v1/rank/sendgift.json",
      getRunmanVotes: "http://vote.i.iqiyi.com/eagle/runman/get_vote",
      getBatchCommentCount: "http://api.t.iqiyi.com/qx_api/comment/get_batch_count",
      getVoteMsg: "http://api.t.iqiyi.com/qx_api/comment/vote/get_vote_detail",
      voteJoined: "http://api.t.iqiyi.com/qx_api/comment/vote/join_vote",
      deleteFeedUrl: "http://www.iqiyi.com/u/api/timeline/del_feed",
      huatiGetPersonalVote: "http://vote.i.iqiyi.com/eagle/outer/get_personal_vote",
      huatiJoinVote: "http://vote.i.iqiyi.com/eagle/outer/join_common_vote",
      qjDrawLottery: "http://uaa.iqiyi.com/qiji_draw_lottery/interface/draw_lottery.json",
      getActivityNews: "http://www.iqiyi.com/qiji/notice",
      getFeatureTop: "http://top.inter.qiyi.com/index/feature",
      suggest: "http://suggest.video.iqiyi.com/",
      suggestZhidahao: "http://renzheng.iqiyi.com/services/zhidahao/stickylist.htm",
      hotWord: "http://search.video.qiyi.com/m",
      getRelatedStar: "http://qipu.qiyi.com/graph/getRelatedCelebrities",
      getRelatedStarWithAlbumId: "http://qipu.qiyi.com/graph/getRelatedCelebritiesOfVideo",
      intentStarProperty: "http://so.iqiyi.com/intentStarProperty",
      IntentRecognitionInterface: "http://so.iqiyi.com/intent?if=video&type=list&pos=1",
      intentRole: "http://so.iqiyi.com/intentRole?if=video&type=list&pos=1",
      intentVideo: "http://so.iqiyi.com/intentVideo?if=video&type=list&pos=1",
      scenceshot: "http://so.iqiyi.com/scenceshot",
      matches: "http://mixer.video.iqiyi.com/jp/w/apis/v1/sports/",
      getStarPicPreview: "http://rq.video.iqiyi.com/star/s/p.jsonp",
      getStarpiclistData: "http://rq.video.iqiyi.com/star/s/i.jsonp",
      getStarworksData: "http://rq.video.iqiyi.com/star/s/w.jsonp",
      getPayment: "http://www.iqiyi.com/u/api/stat/get_payment",
      requestPayment: "http://www.iqiyi.com/u/api/stat/request_payment",
      rebaseUserInfo: "http://passport.pps.tv/apis/user/authlogin.action",
      getUsOpenGuessInfo: "http://vote.i.iqiyi.com/eagle/extension/usopen/get_user_votes_info",
      getWorldCupGuessInfo: "http://vote.i.iqiyi.com/eagle/extension/worldcup/get_user_votes_info",
      snsTextShare: "http://passport." + i + "/apis/share/textshare.action",
      getWCLotteryLimit: "http://api.credit.iqiyi.com/services/worldcup/canLottery",
      uaaIsEmpty: "http://uaa.iqiyi.com/video_index/v1/is_album_empty",
      feedBackGetTicket: "http://feedback.iqiyi.com/f/b/g.html",
      feedBackSave: "http://feedback.iqiyi.com/f/b/s.html",
      fbCheck: "http://feedback.iqiyi.com/new/check_around",
      fbQlist: "http://feedback.iqiyi.com/new/get_questions",
      fbSubmit: "http://feedback.iqiyi.com/new/save_feedback",
      appStoreMgrLogin: "/login.action",
      appStoreMgrGetAppList: "/app/getpage.action",
      appStoreMgrCreateApp: "/app/add.action",
      appStoreMgrUpdateApp: "/app/update.action",
      appStoreMgrGetAppInfo: "/app/showdetail.action",
      appStoreMgrSetAppStatus: "/app/set_status.action",
      appStoreMgrCreateDev: "/developer/add.action",
      appStoreMgrGetDevList: "/developer/getpage.action",
      appStoreMgrUpdateDev: "/developer/update.action",
      appStoreMgrDelDev: "/developer/delete.action",
      appStoreMgrDetailApp: "/app/detail.action",
      appStoreSimilarGame: "/app/searchgame.action",
      appStoreAppCategory: "/app/category.action",
      appStoreAppSearch: "/app/search.action",
      appStoreAppAudit: "/app/audit.action",
      appStoreDevMgrGetAppList: "/developer/app/getpage.action",
      appStoreDevMgrGetAppInfo: "/developer/app/showdetail.action",
      appStoreDevMgrUpdateApp: " /developer/app/update.action",
      appStoreDevAppSearch: "/developer/app/search.action",
      appStoreDevMgrOnline: "/developer/app/set_online.action",
      appStoreDevMgrCreateApp: "/developer/app/add.action",
      appStoreDevMgrDetailApp: "/developer/app/detail.action",
      appStoreDevSimilarGame: "/developer/app/searchgame.action",
      appStoreDevAppCategory: "/developer/app/category.action",
      openapiSendMailCode: "/developer/register/captcha/send",
      openapiCheckMailCode: "/developer/register/captcha/check",
      openapiCreateApp: "/developer/app/create",
      openapiDevSaveDetail: "/developer/register/info/submit",
      openapiDevAuditList: "/developer/manager/developer/search",
      openapiDevAuditView: "/developer/manager/developer/detail",
      openapiDevSetAudit: "/developer/manager/developer/audit",
      openapiAppCreate: "/developer/app/create",
      openapiAppView: "/developer/app/detail",
      openapiAppUpdate: "/developer/app/update",
      openapiAppSearch: "/developer/app/search",
      openapiCustomizePlayer: "/developer/player/meta/info",
      openapiPlayerSearch: "/developer/player/meta/getAppAuthority",
      openapiCreateSdk: "/developer/resource/sdk/add",
      openapiViewRes: "/developer/resource/detail",
      openapiUpdateResPage: "/developer/resource/updatePage",
      openapiUpdateRes: "/developer/resource/update",
      openapiDelRes: "/developer/resource/delete",
      openapiCreateDoc: "/developer/resource/doc/add",
      openapiCreateApi: "/developer/resource/api/add",
      openapiSearchRes: "/developer/resource/search",
      openapiSearchMsg: "/developer/message/user/list",
      openapiSendMsg: "/developer/message/mgr/send",
      openapiPersonReport: "/developer/statistic/personal/search",
      openapiMgrReport: "/developer/statistic/mgr/search",
      openapiPersonExportVV: "/developer/statistic/download/personal/report/apptv",
      openapiPersonExportDown: "/developer/statistic/download/personal/report/app",
      openapiMgrExportVV: "/developer/statistic/download/mgr/report/appvv",
      openapiMgrExportDown: "/developer/statistic/download/mgr/report/app",
      openapiAppAuditList: "/developer/manager/app/search",
      openapiAppAuditView: "/developer/manager/app/detail",
      openapiAppSetAudit: "/developer/manager/app/audit",
      openapiviewAppAuth: "/developer/manager/developer/audit",
      openapiBulletinSearch: "/developer/index/broadCast",
      openapiVideoList: "/developer/file/list",
      openapiAddAlbum: "/developer/file/addAlbumUpload",
      openapiEditVideo: "/developer/file/info",
      openapiDelVideoList: "/developer/file/delete",
      openapiViewDevInfo: "/developer/manager/develop/audit",
      getVipBuyFrag: "http://serv.vip.iqiyi.com/pay/buyLayer.action",
      checkBuyState: "http://serv.vip.iqiyi.com/services/at.action",
      subcribleLive: "http://serv.vip.iqiyi.com/vms/api/process.action",
      saveRemindPhone: "http://serv.vip.iqiyi.com/user/stat/saveValue.action",
      getHuatiInfo: "http://qiqu.iqiyi.com/apis/topic/videolist",
      uploadSettingOfVideo: "http://qiyu.iqiyi.com/theme_p13n/set_init",
      uploadScoreOfVideo: "http://score.video.iqiyi.com/beaver-api/external/add_movie_score",
      uploadActionOfVideo: "http://qiyu.iqiyi.com/movie_p13n/record_action",
      getActionOfVideo: "http://qiyu.iqiyi.com/movie_p13n/read_action",
      saveUserTag: "http://usergame.iqiyi.com/services/usertag/save",
      getVideoScore: "http://score.video.iqiyi.com/beaver-api/external/get_user_movie_score",
      ucUnSub: "http://subscription.iqiyi.com/services/subscribe/cancel.htm",
      ucRtUpUr: "http://subscription.iqiyi.com/services/subscribe/resetUnread.htm",
      ufavUrl: "http://www.iqiyi.com/u/fav?",
      userProfilePlatform: "http://uaa.iqiyi.com/video_index/v1/fgtw/get_platform_distribution",
      userProfileProvince: "http://uaa.iqiyi.com/video_index/v1/fgtw/get_province_distribution",
      userProfilePhoto: "http://uaa.iqiyi.com/video_index/v1/fgtw/get_user_profile",
      platformDistribution: "http://uaa.iqiyi.com/video_index/v1/get_platform_distribution",
      provinceDistribution: "http://uaa.iqiyi.com/video_index/v1/get_province_distribution",
      albumUserPhoto: "http://uaa.iqiyi.com/video_index/v1/get_user_profile",
      albumInfo: "http://mixer.video.iqiyi.com/jp/albums/",
      followCountUr: "http://sns.uc.iqiyi.com/apis/friend/user_fans_cnt.action",
      utwfavUrl: "http://www.iqiyi.com/u/fav?",
      urecordUrl: "http://www.iqiyi.com/u/record?",
      utwrecordUrl: "http://www.iqiyi.com/u/record?",
      addToFavorite: "http://mall.iqiyi.com/apis/favourite/save.action",
      isFavorite: "http://mall.iqiyi.com/apis/favourite/is_favor.action",
      removeFromFavorite: "http://mall.iqiyi.com/apis/favourite/remove.action"
    }
  }
});
define("../../kit/getRemoteInfo", [], function (e, t, n) {
  var a = {}, i = function (e, t) {
    e = e || {};
    var n = e.url || "http://data.video.qiyi.com/v.ts";
    if (a.data && a.url == n)return t(a.data), void 0;
    a.url = n;
    var i = {varname: "videoUrl"}, r = {
      onsuccess: function (e, n) {
        a.data = n, t(n)
      }, onfailure: function () {
        t(!1)
      }, data: i, timeout: i.timeout || 3e4
    };
    Q.http.json(n, r)
  };
  n.exports = i
});
define("../../kit/playerror", ["./storage"], function (e, t, n) {
  var a = e("./storage"), i = "playerror", r = {}, o = function (e) {
    var t = a.read(i) + " " + e;
    a.write(i, t)
  }, l = function () {
    a.write(i, "")
  }, s = function () {
    return a.read(i)
  };
  n.exports = {code: r, addItem: o, get: s, clean: l}
});
define("../../kit/storage", [], function (e, t, n) {
  var a = {}, i = {
    getItem: function (e) {
      return a[e]
    }, setItem: function (e, t) {
      a[e] = t
    }, removeItem: function (e) {
      delete a[e]
    }
  }, r = function () {
    try {
      return window.localStorage.setItem("_Q_test_", 1), window.localStorage.removeItem("_Q_test_"), window.localStorage
    } catch (e) {
    }
    return i
  }();
  n.exports = {
    getStorage: function () {
      return r
    }, read: function (e) {
      return r.getItem(e)
    }, write: function (e, t) {
      r.setItem(e, t)
    }, remove: function (e) {
      r.removeItem(e)
    }
  }
});
define("../../interfaces/videoUrlInterface", ["../kit/remoteInterface"], function (e, t, n) {
  var a = e("../kit/remoteInterface");
  n.exports = Q.Class("VideoUrl", {
    construct: function (e) {
      var t = e.url;
      this._remoteInterface = new a({videoUrl: {url: t}})
    }, methods: {
      request: function (e) {
        this._remoteInterface.send({ifname: "videoUrl", param: "", jsonp: {varname: "videoUrl"}}, function (t) {
          e && e(t)
        })
      }
    }
  })
});
define("../../kit/qiyiHtml5Player", ["./html5Player"], function (e, t, n) {
  var a = e("./html5Player");
  n.exports = Q.Class("QiyiHTML5Player", {
    extend: a, construct: function (e) {
      this.callsuper(e)
    }, methods: {
      setUserLogin: function () {
        Q.log.log("setUserLogin....")
      }, setVisits: function () {
      }, setLight: function () {
        Q.log.log("openLight.....")
      }, setSubscribe: function () {
        Q.log.log("setSubscribe.....")
      }, setNextVideoInfo: function () {
        Q.log.log("setNextVideoInfo.....")
      }, setFullMoive: function () {
      }, expand: function (e) {
        this.fire({type: "expand", data: {origin: "video", value: e}})
      }, getSwitchVideoType: function (e) {
        e("0")
      }, switchVideoFullScreen: function (e) {
        try {
          var t;
          e ? (this._player.webkitEnterFullScreen(), t = "true") : (this._player.webkitExitFullscreen(), t = "false"), this.fire({
            type: "switchVideoFullScreen",
            data: t
          })
        } catch (n) {
        }
      }, switchVideo: function (e) {
        this.load(e)
      }, switchNextVideo: function () {
      }, recharge: function () {
        this.fire({type: "recharge", data: {code: "Q00310", from: ""}})
      }
    }
  })
});
define("../../kit/html5Player", ["./player", "./videoSrc", "./uuid", "./eventPlugin", "../kit/videoInfo", "../kit/triggerEvent", "./playerror", "../kit/userInfo"], function (e, t, n) {
  var a = e("./player"), i = e("./videoSrc"), r = e("./uuid"), o = e("./eventPlugin"), l = e("../kit/videoInfo"), s = e("../kit/triggerEvent"), d = e("./playerror"), h = e("../kit/userInfo"), m = new Q.ic.InfoCenter({moduleName: "HTML5Player"});
  Q.ic.InfoCenter.whatToSave("HTML5Player");
  var c = {playing: 4, progress: 4, suspend: 4, timeupdate: 4};
  n.exports = Q.Class("HTML5Player", {
    extend: a, plugins: [new o], construct: function (e) {
      this.callsuper(e);
      var t = Q.$("*[data-widget-player='flash']"), n = window.info || {};
      this._playerstate = "Paused";
      var a = t && t.attr("data-player-videoid"), i = t && t.attr("data-player-tvid"), r = t && t.attr("data-player-albumid");
      this._vid = a, this._tvid = i, this._definition = "1", this._aid = r, this._pid = n.pid || "", this._ptype = n.ptype || "", this._aid = n.albumId || "", this._completeLoaded = "false", this._player && this._bindEvent()
    }, methods: {
      getPlayerElem: function () {
        return this._player
      }, _bindEvent: function () {
        var e = this;
        this._player.addEventListener("canplaythrough", function () {
          e._completeLoaded = "true"
        }), this._firstPlayBinded = this._firstPlay.bind(this), this._player.addEventListener("play", function () {
          e._playStateChange("Play")
        }, !1), this._player.addEventListener("playing", function () {
          e._playStateChange("playing")
        }, !1), this._player.addEventListener("timeupdate", function () {
          e._playStateChange("Playing")
        }, !1), this._player.addEventListener("waiting", function () {
          e._playStateChange("Waiting")
        }, !1), this._player.addEventListener("pause", function () {
          e._playStateChange("Paused")
        }, !1), this._player.addEventListener("ended", function () {
          e._playStateChange("Stoped")
        }, !1), this._player.addEventListener("loadedmetadata", function () {
          e._playStateChange("LoadedMetaData")
        }, !1), this._player.addEventListener("loadeddata", function () {
          e._playStateChange("LoadedData")
        }, !1), this._player.addEventListener("seeking", function () {
          e._playStateChange("Seeking")
        }, !1), this._player.addEventListener("canplay", function () {
          e._playStateChange("Ready")
        }, !1), this._player.addEventListener("error", function () {
          m.debug("Failed"), e._playStateChange("Error")
        }, !1), this._player.addEventListener("volumechange", function () {
          e._playStateChange("VolumeChange")
        }, !1), this._player.addEventListener("loadstart", function () {
          e._playStateChange("LoadStart")
        }, !1), this._player.addEventListener("durationchange", function () {
          e._playStateChange("DurationChange"), m.debug("videoStory, duration: " + e._player.duration);
          var t = e._player.seekable;
          m.debug("videoStory, seekable: " + JSON.stringify(t) + ", Start: " + t.start(0) + ", End: " + t.end(0))
        }, !1), this._player.addEventListener("progress", function () {
          e._playStateChange("Progress")
        }, !1), this._player.addEventListener("suspend", function () {
          e._playStateChange("Suspend")
        }, !1), this._player.addEventListener("webkitfullscreenchange", function () {
          e._playStateChange("webkitfullscreenchange")
        }, !1)
      }, load: function (e) {
        window.__qlt && window.__qlt.start && (window.__qlt.start("playerAuthReady"), window.__qlt.start("playIfRes"));
        var t = new Date;
        m.debug("开始load-----------------------------" + t), m.debug("videoStory, ua:" + navigator.userAgent), m.debug("videoStory, href: " + location.href), m.log("load 页面title：" + document.title), m.debug("load");
        var n = this;
        if (Q.player && Q.player.demandPb && Q.player.demandPb(), e = e || {}, "true" != e.preload) {
          this._videoChanged = !this._tvid || this._tvid && this._tvid != e.tvId, m.log("this._videoChanged---------------- " + !!this._videoChanged), this._vid = e.vid, this._tvid = e.tvId, this._aid = e.albumId, Q.PageInfo && (this._cupid = Q.PageInfo.adPlayerId || ""), m.debug("Load video : tvid" + this._tvid + "| vid:" + this._vid), m.debug("videoStory, Load video : " + this._tvid + "|" + this._vid), this._player.addEventListener("timeupdate", this._firstPlayBinded, !1), this._playStateChange("startGetVideoSrc");
          var a = function (e) {
            m.debug("视频data" + JSON.stringify(e)), window.__qlt && window.__qlt.end && window.__qlt.end("playIfRes"), "A00000" === e.status ? (m.debug("没有广告，使用vrs的视频地址" + e.src), window.__qlt && window.__qlt.add && window.__qlt.add("edpgtp", "noAd"), window.__qlt && window.__qlt.end && window.__qlt.end("playerAuthReady"), m.debug("load视频拿到视频地址耗时：" + (new Date - t) + "ms"), n._play(e.src), n._playStateChange("dataloaded"), n.flushErrorLog()) : "A00012" === e.status ? (m.debug("我需要从广告方去拿视频了"), window.__qlt && window.__qlt.start && window.__qlt.start("adIfRes"), n._initAd(e, function (a) {
              var i;
              a ? (m.debug("拿到广告的视频" + a), window.__qlt && window.__qlt.add && window.__qlt.add("edpgtp", "hasAd"), i = a) : (m.debug("访问了广告接口，但没有拿到广告的视频，使用vrs的视频地址" + e.src), window.__qlt && window.__qlt.add && window.__qlt.add("edpgtp", "hasAd"), i = e.src), window.__qlt && window.__qlt.end && window.__qlt.end("playerAuthReady"), m.debug("load视频拿到视频地址耗时：" + (new Date - t) + "ms"), window.__qlt && window.__qlt.end && window.__qlt.end("adIfRes"), n._play(i), n._playStateChange("dataloaded"), n.flushErrorLog()
            })) : "A00015" === e.status ? (m.debug("从会员那里拿到了鉴权的视频地址" + e.src), window.__qlt && window.__qlt.add && window.__qlt.add("edpgtp", "member"), window.__qlt && window.__qlt.end && window.__qlt.end("playerAuthReady"), m.debug("load视频拿到视频地址耗时：" + (new Date - t) + "ms"), n._play(e.src), n._playStateChange("dataloaded"), n.fire({
              type: "authenticationResult",
              data: parseInt(e.data.prv, 10)
            }), n.flushErrorLog()) : n.flushErrorLog()
          };
          if (this._player && this._player.getPreloader)m.log("预加载成功"), setTimeout(function () {
            n._player.getPreloader(a)
          }, 0); else {
            var r;
            try {
              window.weorjjigh && (r = window.weorjjigh(this._tvid))
            } catch (o) {
            }
            var l = {tvid: this._tvid, vid: this._vid, uid: h.getUid(), cupid: this._cupid || "", auth: r};
            i.get(l, a)
          }
        }
      }, flushErrorLog: function () {
        Q.ic.InfoCenter.flush({
          output: function (e) {
            for (var t = [], n = 0; n < e.length; n++)t[n] = Q.ic.InfoCenter.toStr(e[n]);
            t.push("\r\n\r\n"), d.addItem(t.join("\r\n"))
          }
        })
      }, play: function () {
        m.debug("play"), this._player && this._player.play()
      }, resume: function () {
        m.debug("resume"), this._player && this._player.play()
      }, retryPlay: function () {
        if (m.debug("retryPlay"), this._player) {
          var e = this._player.src;
          e = e.split("&tn=")[0] + "&tn=" + (new Date).getTime(), this._player.src = e, this._player.load(), this._player.play()
        }
      }, replay: function () {
        m.debug("replay"), this._player && (this._player.load(), this._player.play())
      }, resetEvent: function () {
        m.debug("resetEvent"), this._player.addEventListener("timeupdate", this._firstPlayBinded, !1)
      }, show: function () {
        var e = Q.$(this._player);
        "hide" == e.attr("data-display") && e.css("-webkit-transform", "translateX(0px)"), e.attr("data-display", "show"), s.trigger("resize")
      }, hide: function () {
        var e = Q.$(this._player);
        "show" == e.attr("data-display") && e.css("-webkit-transform", "translateX(9999px)"), e.attr("data-display", "hide")
      }, playBySrc: function (e) {
        m.debug("Change src to : " + e), this._play(e)
      }, _play: function (e) {
        m.debug("这是请求视频地址的最后一步，走到这一步，说明已经得到视频地址了，准备播放吧" + e), m.debug("videoStory, 视频地址src: " + e);
        var t = this;
        if (this._player && (this._player.setAttribute("src", e), this._player.load()), Q.browser.android) {
          var n = location.href;
          23 != Q.url.getQueryValue(n, "cnid") && setTimeout(function () {
            t._player && t._player.play()
          }, 1e3)
        } else t._player && t._player.play()
      }, _firstPlay: function () {
        this._firstPlayBinded && this._player.removeEventListener("timeupdate", this._firstPlayBinded), this._playStateChange("StartPlay"), m.debug("Start to play.")
      }, pause: function () {
        this._player && this._player.pause()
      }, seek: function (e) {
        var t = this, n = function (e) {
          return e > 1 && 6e3 !== e && 1 / 0 !== e ? !0 : !1
        }, a = function () {
          t._player.removeEventListener("durationchange", i, !1), m.debug("Seek to :" + e), e = e || 0, e = Math.max(e, 0), 0 === e && (e += 1), m.debug("duration: " + t._player.duration), e = Math.min(e, t._player.duration - 5), m.debug("videoStory, min: " + e), t.delaySeekTimer && clearTimeout(t.delaySeekTimer);
          try {
            var n = t._player.seekable;
            m.debug("videoStory, seekable: " + JSON.stringify(n) + ", Start: " + n.start(0) + ", End: " + n.end(0)), 1 === n.length && e < n.end(0) ? t.seekTo(e) : t.delaySeekTimer = setTimeout(function () {
              m.debug("timeout seek"), t.seek(e)
            }, 100)
          } catch (a) {
            m.error("videoStory, seek error: " + a)
          }
        }, i = function () {
          var e = t._player.duration;
          m.log("durationchange, curDuration: " + e), n(e) && a()
        }, r = t._player.duration;
        n(r) ? a() : t._player.addEventListener("durationchange", i, !1)
      }, seekTo: function (e) {
        m.debug("videoStory, time: " + e);
        var t = this;
        try {
          this._player.currentTime = e
        } catch (n) {
          var a = 0;
          this._player.addEventListener("canplay", function () {
            m.debug("canplay seekto " + t._player.currentTime), 1 !== a && (a = 1, t._player.currentTime = e)
          })
        }
        this._player.paused && this._player.play()
      }, setVolume: function (e) {
        m.log("volume|_player|" + this._player.volume), this._player.volume = e
      }, getVolume: function () {
        return this._player.volume
      }, stop: function () {
        m.debug("stop")
      }, changeDefination: function (e) {
        if (e != this._definition) {
          this._definition = e;
          var t = this, n = t._player.currentTime;
          m.debug("Record current time : " + n), i.get({
            tvid: this._tvid,
            vid: this._vid,
            uid: h.getUid(),
            cupid: this._cupid || ""
          }, function (e) {
            if ("A00000" == e.code) {
              var a = function () {
                setTimeout(function () {
                  m.debug("Resume to : " + n), t.seek(n)
                }, 0), t._player.removeEventListener("timeupdate", a)
              };
              t._player.addEventListener("timeupdate", a), t._player.src = e.src, Q.event.customEvent.fire({type: "videochangedefinition"}), t._play(e.src)
            } else t._playStateChange("Failed")
          })
        }
      }, getPlayInfo: function (e) {
        var t = {};
        t.vid = this._vid, t.tvid = this._tvid, this._player && (t.currentTime = this._player.currentTime, t.totalDuration = this._player.duration), t.currentDefination = this._definition, t.currentStatus = this._playerstate, this._player && this._player.paused && (t.currentStatus = "Paused"), this._player && this._player.ended && (t.currentStatus = "Stoped"), t.uuid = Q.cookie.get("QC006"), t.categoryId = "", t.clientInstall = "0", t.accInstall = "0", e(t)
      }, getInitVideoInfo: function (e) {
        e({vid: this._vid, tvid: this._tvid})
      }, getVideoInfo: function (e) {
        l.get({vid: this._vid, tvid: this._tvid}, function (t) {
          e(t)
        })
      }, loadComplete: function (e) {
        e()
      }, on: function (e, t) {
        Q.swf && Q.swf.notice ? Q.event.customEvent.on("swf_playerStateChange", function (n) {
          n = n || {}, n.data = n.data || {};
          var a = n.data.state || "";
          a.toLocaleLowerCase() == e.toLocaleLowerCase() && t(n.data)
        }) : this.callsuper("on", e, t)
      }, destroy: function () {
        this._adController && (m.debug("Remove event : " + this._AdController.EVENT_CUPID_READY), m.debug("Remove event : " + this._AdController.EVENT_CUPID_NO_AD), this._adController.removeEventListener(this._AdController.EVENT_CUPID_READY, this._cupidEventHandler), this._adController.removeEventListener(this._AdController.EVENT_CUPID_NO_AD, this._cupidEventHandler), this._adController.stop()), this.un(), this._player && (this._player.pause(), this._player = null)
      }, retryFailed: function () {
        this._playStateChange("Failed")
      }, _playStateChange: function (e, t) {
        var n = e.toLocaleLowerCase(), a = ["playing", "progress", "timeupdate", "suspend"];
        -1 === a.indexOf(e.toLocaleLowerCase()) ? m.debug("videoStory, state: " + e) : c[e.toLocaleLowerCase()] > 0 && (m.debug("videoStory, state: " + e), c[e.toLocaleLowerCase()] -= 1), this._playerstate = e, Q.swf && Q.swf.notice ? Q.swf.notice('{"type":"playerStateChange","data":{"tvid":"' + this._tvid + '","state":"' + n + '"}}') : "failed" === n || "error" === n ? this.fire({
          type: n,
          data: t
        }) : this.fire({type: n, data: {tvid: this._tvid}});
        var i = this;
        "dataloaded" == n && this._videoChanged && (m.log("videoChanged"), this.getVideoInfo(function (e) {
          e.ve = Q.getVideoEventID() || "", i.fire({type: "videoChanged", data: e})
        }))
      }, _initAd: function (e, t) {
        var n, a, i = e.data, o = this;
        Q.PageInfo && (n = Q.PageInfo.adPlayerUrl, a = Q.PageInfo.adPlayerId);
        var l, s = this._aid, d = i.cid, h = i.vd;
        l = Q.browser.iPad ? "ipad" : "iphone";
        var c = {96: 3, 1: 2, 2: 1, 3: 0};
        r.get(function (e) {
          r.get(function (r) {
            var u = {
              playerId: a || "",
              tvId: o._tvid,
              vId: o._vid,
              resIndex: c[h] || "",
              albumId: s || "",
              deviceType: l,
              location: location.href,
              webEventId: r,
              channelId: d || "",
              videoEventId: e,
              clientIp: i.clientIp
            };
            m.debug("广告的参数" + JSON.stringify(u)), seajs.use(n || "http://static.qiyi.com/js/common/poseidon", function (e) {
              o._adController && o._adController.stop && o._adController.stop(), o._AdController = e;
              var n = new e(o._player, u);
              o._cupidEventHandler = function (n) {
                m.debug("poseidon|e.type|" + n.type), n.type == e.EVENT_CUPID_NO_AD ? t() : (m.log("Ad length : " + n.data.ads[0].duration), m.debug("Ad info : " + JSON.stringify(n.data)), Q.event.customEvent.fire({
                  type: "adloaded",
                  data: n.data
                }), t(n.data.src))
              }, n.addEventListener(e.EVENT_CUPID_READY, o._cupidEventHandler), n.addEventListener(e.EVENT_CUPID_NO_AD, o._cupidEventHandler), o._adController = n, n.start && n.start()
            })
          })
        })
      }
    }
  })
});
define("../../kit/videoSrc", ["../interfaces/tmtsInterface", "../config/mobileConfig"], function (e, t, n) {
  var a = e("../interfaces/tmtsInterface"), i = e("../config/mobileConfig"), r = new Q.ic.InfoCenter({moduleName: "videoSrc"});
  Q.ic.InfoCenter.whatToSave("videoSrc");
  var o = {
    A00004: "数据不存在",
    A00001: "参数错误",
    A00010: "调用passport获取用户信息失败",
    A00011: "调用会员鉴权接口失败",
    A00013: "IP限制"
  }, l = {A00012: "需要前端请求广告mixer接口", A00015: "会员鉴权成功", A00000: "不请求广告直接播放"}, s = function (e, t) {
    var n = new a({tvid: e.tvid, vid: e.vid}), s = {uid: e.uid, cupid: e.cupid};
    "0" === Q.cookie.get("QC004") && Q.object.extend(s, {nolimit: 1}), s.type = i.supportTs ? "m3u8" : "mp4", e.auth && Q.object.extend(s, e.auth), r.log("请求tmts接口传参数为：" + JSON.stringify(s)), n.request(s, function (e) {
      if ("A00000" === e.code) {
        if (e.data.ds in l) {
          var n = (new Date).getTime(), a = e.data.m3u;
          e.src = i.supportTs ? a.indexOf("?") < 0 ? a + "?v=" + (71717171 ^ n) : a : a, e.status = e.data.ds, t(e)
        }
      } else r.error("出错啦，你的错误信息是：" + (o[e.code] || e.code)), t(e)
    })
  };
  n.exports = {get: s}
});
define("../../interfaces/tmtsInterface", ["../kit/remoteInterface", "../config/mobileConfig"], function (e, t, n) {
  var a = e("../kit/remoteInterface"), i = e("../config/mobileConfig");
  n.exports = Q.Class("tmtsInterface", {
    construct: function (e) {
      e = e || {};
      var t = i.interfaces.tmts + e.tvid + "/" + e.vid + "/";
      this._remoteInterface = new a({tmts: {url: t}})
    }, methods: {
      request: function (e, t) {
        e = e || {}, this._remoteInterface.send({
          ifname: "tmts",
          param: e,
          dataType: "jsonp",
          timeout: i.http.timeout
        }, function (e) {
          t && t(e)
        })
      }
    }
  })
});
define("../../kit/uuid", [], function (e, t, n) {
  n.exports = {
    get: function (e) {
      var t = Q.crypto.md5((new Date).getTime() + Math.floor(999999999 * Math.random()) + window.navigator.userAgent + document.cookie);
      e(t)
    }
  }
});
define("../../kit/triggerEvent", [], function (e, t, n) {
  n.exports = {
    trigger: function (e) {
      var t = document.createEvent("Event");
      t.initEvent(e, !0, !0), window.dispatchEvent(t)
    }
  }
});
define("../../kit/userInfo", ["../config/siteDomain", "../interfaces/isLogin", "../action/reLogin"], function (require, exports, module) {
  var ic = new Q.ic.InfoCenter({moduleName: "kit/userInfo"}), siteDomain = require("../config/siteDomain"), customEvent = Q.event.customEvent, RIIsLogin = require("../interfaces/isLogin"), relogin = require("../action/reLogin"), callbackList = [], UserInfo = Q.Class("UserInfo", {
    properties: {
      uid: "",
      name: "",
      phone: "",
      icon: "",
      email: "",
      deadline_date: "",
      deadline_t: "",
      level: "",
      vipType: "",
      payType: "",
      remind: "",
      status: "",
      isThirdParty: !1,
      thirdPartyFrom: "",
      type: "",
      mobile: "",
      vip: !1,
      mediaBigVUser: !1,
      shareProfitUser: void 0,
      lockedVip: !1,
      expireVip: !1,
      expectPayVip: !1,
      mobilePayVip: !1,
      bindedSNS: null,
      isLoginInfo: null,
      accounts: null,
      tokens: null,
      subaccount: null,
      surplus: "",
      isAwardVip: !1,
      pps: !1,
      isAutoRenew: !1
    }, construct: function () {
      this.hasVipInfo = !1, this.isValidVip = !1
    }, methods: {
      init: function () {
        this.bindEvent(), this.checkUserInfo()
      }, bindEvent: function () {
        customEvent.on("login", this.doLogin.bind(this)), customEvent.on("logout", this.doLogout.bind(this))
      }, doLogin: function () {
        this.checkUserInfo()
      }, doLogout: function () {
        this.clearUserInfo()
      }, checkUserInfo: function () {
        if (this.isLogin()) {
          var p00002 = Q.cookie.get("P00002");
          null !== p00002 && "" !== p00002 && (p00002 = window.JSON ? window.JSON.parse(p00002) : eval("(" + p00002 + ")"), this.uid = p00002.uid, this.name = p00002.nickname, this.email = p00002.email)
        }
      }, getUserInfo: function () {
        if (this.isLogin()) {
          var p00002 = Q.cookie.get("P00002");
          if (null !== p00002 && "" !== p00002)return window.JSON ? window.JSON.parse(p00002) : eval("(" + p00002 + ")")
        }
      }, getSubAuthCookies: function () {
        var e = Q.cookie.get("P00007");
        return "deleted" === e && (e = ""), e
      }, getAuthCookies: function () {
        var e = Q.cookie.get("P00001");
        return "deleted" === e && (e = ""), e
      }, getIsThirdParty: function () {
        return this.isThirdParty
      }, setIsThirdParty: function (e) {
        return this.isThirdParty = e, this.isThirdParty
      }, checkVipInfo: function (e, t) {
        this.isLogin() && (this.hasVipInfo ? e && e(t ? this[t] : "") : this.getInfoFromInterface(e, t))
      }, getInfoFromInterface: function (e, t) {
        var n = this;
        if (n.isLoginInfo)e && e(t ? n[t] : ""); else if (callbackList && callbackList.length)callbackList.push({
          cb: e,
          param: t
        }); else {
          callbackList.push({cb: e, param: t});
          var a = {};
          a.param = a.param || {}, a.dataType = "jsonp";
          var i = new RIIsLogin;
          i.sendInfoAction(a, function (e) {
            if ("A00005" == e.code || "A00055" == e.code)relogin.reLogin(e); else {
              if ("A00000" == e.code) {
                n.setVipInfo(e.data || {}), n.isLoginInfo = e.data.userinfo || {}, n.phone = e.data.userinfo.phone || " ", n.icon = e.data.userinfo.icon || " ";
                var t = n.isMain(e.data.accounts);
                n.thirdPartyFrom = t || "10", n.accounts = e.data.accounts || [], n.tokens = e.data.tokens || {}, n.setShareProfitUserInfo(e.data || {}), n.setMediaBigVUser(e.data || {})
              } else ic.warn("调用vip信息接口（http://passport.iqiyi.com/apis/user/info.action）失败。"), n.clearVipInfo();
              for (var a; callbackList && callbackList.length > 0;)try {
                var i = callbackList.shift();
                a = "A00000" == e.code ? i.param ? n[i.param] : "" : !1, i.cb && i.cb(a)
              } catch (r) {
                ic.log(r)
              }
            }
          })
        }
      }, getBindedSnsInfo: function (e) {
        var t = this;
        this.tokens ? e && e(this.tokens) : this.getInfoFromInterface(function () {
          e && e(t.tokens)
        })
      }, getPhoneInfo: function (e) {
        var t = this;
        this.phone ? e && e(this.phone) : this.getInfoFromInterface(function () {
          e && e(t.phone)
        })
      }, getIconInfo: function (e) {
        var t = this;
        this.icon ? e && e(this.icon) : this.getInfoFromInterface(function () {
          e && e(t.icon)
        })
      }, isMain: function (e) {
        for (var t, n = 0; n < e.length; n++)e[n].is_main === !0 && (t = e[n].type);
        return t
      }, getThirdPartyFromInfo: function (e) {
        var t = this;
        this.getInfoFromInterface(function () {
          e && e(t.thirdPartyFrom)
        })
      }, getIsLoginInfo: function (e) {
        var t = this;
        t.isLoginInfo ? e && e(t.isLoginInfo) : t.getInfoFromInterface(function (n) {
          n || "" === n ? e && e(t.isLoginInfo) : e && e({})
        })
      }, getAllAccountsInfo: function (e) {
        var t = this;
        t.accounts ? e && e(t.accounts) : t.getInfoFromInterface(function () {
          e(t.accounts)
        })
      }, setVipInfo: function (e) {
        var t = e.qiyi_vip_info || {}, n = parseFloat(t.type, 10);
        if (this.isAwardVip = e.award_vip ? !0 : !1, this.vip = n ? !0 : !1, t.level && (this.level = t.level + ""), n) {
          var a = 0;
          t.deadline && (a = t.deadline.t, this.deadline_t = a, this.deadline_date = t.deadline.date + ""), this.vipType = t.vipType + "", this.payType = t.payType + "", this.remind = void 0, this.status = t.status + "", this.type = t.type + "", this.mobile = t.mobile + "", this.lockedVip = "1" == t.type && "2" == t.status, this.expireVip = "1" == t.type && "3" == t.status, this.expectPayVip = "1" == t.type && "1" == t.status && "0" == t.payType, this.mobilePayVip = "1" == t.type && "1" == t.status && "1" == t.payType, this.surplus = t.surplus + "", this.hasVipInfo = !0, this.isValidVip = "1" == t.status, this.autoRenew = t.autoRenew
        }
      }, setShareProfitUserInfo: function (e) {
        var t = e.verify_info, n = t.verifyState, a = t.verifyClass;
        isNaN(n) || isNaN(a) || (this.shareProfitUser = (4 == n || 5 == n) && 3 == a)
      }, setMediaBigVUser: function (e) {
        if (e) {
          var t = e.verify_info, n = t.verifyState, a = t.copyright;
          isNaN(n) || isNaN(a) || (this.mediaBigVUser = 4 == n && 1 == a)
        }
      }, clearUserInfo: function () {
        this.uid = "", this.name = "", this.icon = "", this.email = "", this.phone = "", this.clearVipInfo(), this.shareProfitUser = void 0, this.mediaBigVUser = !1, this.bindedSNS = null, this.isLoginInfo = null, this.accounts = null, this.tokens = null, this.subaccount = null, this.thirdPartyFrom = ""
      }, clearVipInfo: function () {
        this.deadline_date = "", this.deadline_t = "", this.level = "", this.vipType = "", this.payType = "", this.remind = "", this.status = "", this.type = "", this.mobile = "", this.vip = !1, this.lockedVip = !1, this.expireVip = !1, this.expectPayVip = !1, this.mobilePayVip = !1, this.hasVipInfo = !1, this.surplus = "", this.isValidVip = !1, this.autoRenew = !1
      }, isLogin: function () {
        return "" !== Q.cookie.get("P00002") && null !== Q.cookie.get("P00002") && "deleted" !== Q.cookie.get("P00002") && "" !== Q.cookie.get("P00003") && null !== Q.cookie.get("P00003") && "deleted" !== Q.cookie.get("P00003")
      }, isVip: function (e) {
        return this.checkVipInfo(e, "vip"), this.vip
      }, isShareProfitUser: function (e) {
        return void 0 === this.shareProfitUser ? this.getInfoFromInterface(e, "shareProfitUser") : e && e(this.shareProfitUser), this.shareProfitUser
      }, isMediaBigVUser: function (e) {
        return this.getInfoFromInterface(e, "mediaBigVUser"), this.mediaBigVUser
      }, isPPS: function () {
        return 10001 <= parseInt(this.getUid(), 10) && parseInt(this.getUid(), 10) <= 564375554 && (this.pps = !0), this.pps
      }, isAutoRenew: function (e) {
        return this.checkVipInfo(e, "autoRenew"), this.autoRenew
      }, isThirdPartyAccount: function () {
        if (!this.isLogin())return !1;
        var e = this.getUserInfo(), t = parseInt(e.type, 10), n = parseInt(e.uid, 10);
        return !!(t && 13 !== t && n > 2e9 && 3e9 > n)
      }, isLockedVip: function (e) {
        return this.checkVipInfo(e, "lockedVip"), this.lockedVip
      }, isExpireVip: function (e) {
        return this.checkVipInfo(e, "expireVip"), this.expireVip
      }, isExpectPayVip: function (e) {
        return this.checkVipInfo(e, "expectPayVip"), this.expectPayVip
      }, isMobilePayVip: function (e) {
        return this.checkVipInfo(e, "mobilePayVip"), this.mobilePayVip
      }, getUid: function () {
        return this.uid
      }, getName: function () {
        return this.name
      }, getIcon: function (e) {
        return this.getIconInfo(e, "icon"), this.icon
      }, getPhone: function (e) {
        return this.getPhoneInfo(e, "phone"), this.phone
      }, getThirdPartyFrom: function (e) {
        return this.getThirdPartyFromInfo(e, "thirdPartyFrom"), this.thirdPartyFrom
      }, getEmail: function () {
        return this.email
      }, getDeadlineDate: function (e) {
        return this.checkVipInfo(e, "deadline_date"), this.deadline_date
      }, getDeadlineTime: function (e) {
        return this.checkVipInfo(e, "deadline_t"), this.deadline_t
      }, getLevel: function (e) {
        return this.checkVipInfo(e, "level"), this.level
      }, getVipType: function (e) {
        return this.checkVipInfo(e, "vipType"), this.vipType
      }, getPayType: function (e) {
        return this.checkVipInfo(e, "payType"), this.payType
      }, getRemind: function (e) {
        return this.checkVipInfo(e, "remind"), this.remind
      }, getStatus: function (e) {
        return this.checkVipInfo(e, "status"), this.status
      }, getType: function (e) {
        return this.checkVipInfo(e, "type"), this.type
      }, getMobile: function (e) {
        return this.checkVipInfo(e, "mobile"), this.mobile
      }, getSurplus: function (e) {
        return this.checkVipInfo(e, "surplus"), this.surplus
      }, getIsValidVip: function (e) {
        return this.checkVipInfo(e, "isValidVip"), this.isValidVip
      }, getAwardVip: function (e) {
        return this.checkVipInfo(e, "isAwardVip"), this.isAwardVip
      }, isSubaccount: function () {
        var e = this.getUid();
        return !!(e + "").match(/^4\d{9}$/)
      }
    }
  }), userInfo = new UserInfo;
  userInfo.init(), module.exports = {
    getSubAuthCookies: function () {
      return userInfo.getSubAuthCookies()
    }, isLogin: function () {
      return userInfo.isLogin()
    }, getUid: function () {
      return userInfo.getUid()
    }, getName: function () {
      return userInfo.getName()
    }, getIcon: function (e) {
      return userInfo.getIcon(e)
    }, getThirdPartyFrom: function (e) {
      return userInfo.getThirdPartyFrom(e)
    }, getPhone: function (e) {
      return userInfo.getPhone(e)
    }, getAuthCookies: function () {
      return userInfo.getAuthCookies()
    }, getEmail: function () {
      return userInfo.getEmail()
    }, getDeadlineDate: function (e) {
      return userInfo.getDeadlineDate(e)
    }, getDeadlineTime: function (e) {
      return userInfo.getDeadlineTime(e)
    }, getLevel: function (e) {
      return userInfo.getLevel(e)
    }, getVipType: function (e) {
      return userInfo.getVipType(e)
    }, getPayType: function (e) {
      return userInfo.getPayType(e)
    }, getRemind: function (e) {
      return userInfo.getRemind(e)
    }, getStatus: function (e) {
      return userInfo.getStatus(e)
    }, getType: function (e) {
      return userInfo.getType(e)
    }, getMobile: function (e) {
      return userInfo.getMobile(e)
    }, isVip: function (e) {
      return userInfo.isVip(e)
    }, isShareProfitUser: function (e) {
      return userInfo.isShareProfitUser(e)
    }, isMediaBigVUser: function (e) {
      return userInfo.isMediaBigVUser(e)
    }, isLockedVip: function (e) {
      return userInfo.isLockedVip(e)
    }, isExpireVip: function (e) {
      return userInfo.isExpireVip(e)
    }, isExpectPayVip: function (e) {
      return userInfo.isExpectPayVip(e)
    }, isMobilePayVip: function (e) {
      return userInfo.isMobilePayVip(e)
    }, checkVipInfo: function (e) {
      return userInfo.checkVipInfo(e)
    }, checkUserInfo: function () {
      return userInfo.checkUserInfo()
    }, getUserInfo: function () {
      return userInfo.getUserInfo()
    }, getIsThirdParty: function () {
      return userInfo.getIsThirdParty()
    }, getAwardVip: function (e) {
      return userInfo.getAwardVip(e)
    }, setIsThirdParty: function (e) {
      return userInfo.setIsThirdParty(e)
    }, getBindedSnsInfo: function (e) {
      return userInfo.getBindedSnsInfo(e)
    }, getIsLoginInfo: function (e) {
      return userInfo.getIsLoginInfo(e)
    }, getAllAccountsInfo: function (e) {
      return userInfo.getAllAccountsInfo(e)
    }, getSurplus: function (e) {
      return userInfo.getSurplus(e)
    }, clearUserInfo: function () {
      userInfo.clearUserInfo()
    }, getIsValidVip: function (e) {
      return userInfo.getIsValidVip(e)
    }, isPPS: function () {
      return userInfo.isPPS()
    }, isThirdPartyAccount: function (e) {
      if (!userInfo.isLogin())return !1;
      if (0 === arguments.length)return userInfo.isThirdPartyAccount();
      if (e && userInfo.accounts && userInfo.accounts.length)for (var t, n = 0, a = userInfo.accounts.length; a > n; n++)if (t = userInfo.accounts[n].account, t && -1 !== t.indexOf("@" + e))return !0;
      return !1
    }, isAccountBinded: function () {
      return userInfo.isLogin() ? userInfo.accounts && userInfo.accounts.length > 1 : !1
    }, isAutoRenew: function (e) {
      return userInfo.isAutoRenew(e)
    }, isSubaccount: function () {
      return userInfo.isSubaccount()
    }
  }
});
define("../../interfaces/isLogin", ["../kit/remoteInterface", "../config/siteDomain"], function (e, t, n) {
  var a = e("../kit/remoteInterface"), i = e("../config/siteDomain"), r = i.getDomain();
  n.exports = Q.Class("RIIsLogin", {
    construct: function () {
      this._remoteInterface = new a({url: "http://passport." + r + "/apis/user/islogin.php"}), this._infoRemote = new a({url: "http://passport." + r + "/apis/user/info.action"})
    }, methods: {
      send: function (e, t) {
        e.param = e.param || {}, e.method = e.method || "POST", e.cors = !0, e.withCredentials = !0, e.param.authcookie = e.param.authcookie || Q.cookie.get("P00001"), e.param.antiCsrf = Q.crypto.md5(Q.cookie.get("P00001")), this._remoteInterface.send(e, function (e) {
          t && t(e)
        })
      }, sendInfoAction: function (e, t) {
        e.param = e.param || {}, e.method = e.method || "POST", e.cors = !0, e.withCredentials = !0, e.param.authcookie = e.param.authcookie || Q.cookie.get("P00001"), e.antiCsrf = !0, e.param.fields = e.param.fields || "userinfo,qiyi_vip,pps,accounts,tokens,v", this._infoRemote.send(e, function (e) {
          t && t(e)
        })
      }
    }
  })
});
define("../../action/reLogin", ["./qipaLogin"], function (e, t, n) {
  var a = e("./qipaLogin"), i = Q.Class("ReLogin", {
    construct: function () {
      this.needRefresh = !0
    }, methods: {
      reLogin: function (e) {
        var t = this, n = "function" != typeof window._js_app_service;
        ("A00005" == e.code || "A00055" == e.code) && (Q.event.customEvent.on("login", function () {
          t.needRefresh && setTimeout(function () {
            window.location.reload()
          }, 100)
        }), Q.event.customEvent.on("loginIframeClosed", function () {
          t.needRefresh = !1, a.closeLoginWindow(), a.clearTempCallback(), Q.event.customEvent.fire({
            type: "logout",
            data: {}
          })
        }), "A00005" == e.code && n ? a.openLoginWindow({btnId: "resetpwd"}) : "A00055" == e.code && n && a.openLoginWindow({btnId: "ipchange"}))
      }
    }
  });
  n.exports = new i
});
define("../../action/qipaLogin", ["../config/siteDomain", "../components/action/viewCenter", "../components/action/floater", "../components/view/floaterView", "../config/siteDomain"], function (e, t, n) {
  var a = e("../config/siteDomain"), i = e("../components/action/viewCenter"), r = e("../components/action/floater"), o = e("../components/view/floaterView"), s = e("../config/siteDomain"), l = s.getDomain(), d = null, h = Q.event.customEvent, m = {
    genbotrue: "轻松登录，最新预告抢先看",
    resetpwd: "密码已变更，请重新登录",
    overlimit: "登录后可以收藏更多哦",
    userhome: "登录爱奇艺，为您推荐更多精彩视频",
    msglogin: "登录之后就可以订阅他/她咯",
    msgreg: "注册爱奇艺帐号，马上订阅他/她",
    ipchange: "您的网络IP发生了变化，请重新登录"
  }, c = Q.Class("QipaLogin", {
    construct: function () {
      this.loginTempCallback = null
    }, methods: {
      openLoginWindow: function (e, t) {
        if (!this.show) {
          if ("function" == typeof window._js_app_service)return window._js_app_service("popup_logindlg"), void 0;
          var n = "" !== Q.cookie.get("P00002") && null !== Q.cookie.get("P00002") && "deleted" !== Q.cookie.get("P00002") && "" !== Q.cookie.get("P00003") && null !== Q.cookie.get("P00003") && "deleted" !== Q.cookie.get("P00003");
          if (n)t && t(); else {
            if (this.qipaLoginIfr)e.isReg ? this.showRegWindow() : this.showLoginWindow(); else {
              e = Q.object.extend({showClose: !0}, e);
              var i = "";
              e.loginUrl ? i = e.loginUrl : (i = "http://passport." + a.getDomain() + "/user/loginiframe.php?showclose=" + e.showClose.toString(), e.btnId && (i += "&btnid=" + e.btnId)), e.regUrl && (i += i.indexOf("?") >= 0 ? "&url=" + encodeURIComponent(e.regUrl) : "?url=" + encodeURIComponent(e.regUrl)), e.url = i, this.renderIfr(e)
            }
            this.loginTempCallback = t
          }
        }
      }, closeLoginWindow: function () {
        if (h.fire({type: "qipaLoginIfrHide", data: {wrapper: this.qipaLoginIfr}}), d) {
          if (d.destroy(), d = null, Q.browser.IE6 || Q.browser.IE7 || Q.browser.IE8)for (var e = "http://static.qiyi.com/css/common/v3-import/loginbox.css", t = document.getElementsByTagName("link"), n = 0; n < t.length; n++)if (t[n].href == e) {
            t[n].parentElement.removeChild(t[n]);
            break
          }
        } else try {
          var a = lib.component.login = lib.component.login || {};
          a.dialog.close()
        } catch (i) {
        }
        this.qipaLoginIfr = null, this.show = !1
      }, hideLoginWindow: function () {
        h.fire({
          type: "qipaLoginIfrHide",
          data: {wrapper: this.qipaLoginIfr}
        }), this.qipaLoginIfr && this.qipaLoginIfr.hide(), d && d.hide(), this.show = !1
      }, showLoginWindow: function () {
        this.show = !0, this.qipaLoginIfr && this.qipaLoginIfr.show(), d && d.show(), h.fire({
          type: "qipaLoginIfrShown",
          data: {wrapper: this.qipaLoginIfr}
        })
      }, showRegWindow: function () {
        this.show = !0, this.qipaLoginIfr && this.qipaLoginIfr.show(), d && d.show(), h.fire({
          type: "qipaRegIfrShown",
          data: {wrapper: this.qipaLoginIfr}
        })
      }, clearTempCallback: function () {
        this.loginTempCallback = null
      }, renderIfr: function (e) {
        var t = this;
        if (e = Q.object.extend({
            src: "about:blank",
            width: 512,
            height: 360
          }, e), this.qipaLoginIfr = Q.$("#qipaLoginIfr"), !this.qipaLoginIfr) {
          this.qipaLoginIfr = Q.element.Element.create({tagName: "div"});
          var n = function (n) {
            var a = n({_domain: l});
            if (t.qipaLoginIfr.html(a), Q.browser.IE6 || Q.browser.IE7 || Q.browser.IE8) {
              var i = /<link href=(['"])([^'"]*)\1/.exec(a);
              if (i && i[2]) {
                i = i[2];
                var s = document.createElement("link");
                s.rel = "stylesheet", s.type = "text/css", s.href = i;
                var c = document.getElementsByTagName("head")[0];
                c && c.appendChild(s)
              }
            }
            if (e.btnId && m[e.btnId])try {
              window.setTimeout(function () {
                t.qipaLoginIfr.down("[data-loginbox-elem=errDom]").down("span").html(m[e.btnId])
              }, 1e3)
            } catch (u) {
            }
            t.qipaLoginIfr.attr("id", "qipaLoginIfr").css("width", e.width + "px").css("height", e.height + "px").css("zIndex", e.zIndex || 4860).hide();
            try {
              e.from && t.qipaLoginIfr.down('[data-widget-loginbox="loginbox"]').attr("data-from", e.from)
            } catch (p) {
            }
            Q.$("body").append(t.qipaLoginIfr), d || (d = new r({
              view: new o({
                isResize: !0,
                zIndex: 4850
              })
            })), d.show({elem: t.qipaLoginIfr}), h.fire({
              type: "qipaLoginIfrRendered",
              data: {wrapper: t.qipaLoginIfr, isReg: e.isReg}
            }), "favorite" == e.from ? t._getPingParam("1411143_sczs") : "comment" == e.from ? t._getPingParam("1411192_comshw") : "subscribe" == e.from && t._getPingParam("1411191_subshw")
          };
          Q.cookie.get("QC005"), "favorite" == e.from ? (e.height = 475, e.width = 520, Q.loadTemplate("pc/loginFloaterFavorite", function (e) {
            n(e)
          }, {
            jobFile: "jobs/pc/safeCenterV2",
            projectName: "qiyiV2",
            projectDebug: !1,
            templateVersion: "20160126172644"
          })) : "comment" == e.from ? (e.height = 475, e.width = 520, Q.loadTemplate("pc/loginFloaterComment", function (e) {
            n(e)
          }, {
            jobFile: "jobs/pc/safeCenterV2",
            projectName: "qiyiV2",
            projectDebug: !1,
            templateVersion: "20160126172644"
          })) : "subscribe" == e.from ? (e.height = 475, e.width = 520, Q.loadTemplate("pc/loginFloaterSubscribe", function (e) {
            n(e)
          }, {
            jobFile: "jobs/pc/safeCenterV2",
            projectName: "qiyiV2",
            projectDebug: !1,
            templateVersion: "20160126172644"
          })) : "vipDetail" === e.from ? (e.height = 475, e.width = 520, Q.loadTemplate("pc/loginFloaterVipDetail", function (e) {
            n(e)
          }, {
            jobFile: "jobs/pc/safeCenterV2",
            projectName: "qiyiV2",
            projectDebug: !1,
            templateVersion: "20160126172644"
          })) : "regist" === e.from ? (e.height = 475, e.width = 520, Q.loadTemplate("pc/loginFloater", function (t) {
            e.isReg = !0, n(t)
          }, {
            jobFile: "jobs/pc/safeCenterV2",
            projectName: "qiyiV2",
            projectDebug: !1,
            templateVersion: "20160126172644"
          })) : (e.width = 512, e.height = 500, Q.loadTemplate("pc/loginFloater", function (e) {
            n(e)
          }, {
            jobFile: "jobs/pc/safeCenterV2",
            projectName: "qiyiV2",
            projectDebug: !1,
            templateVersion: "20160126172644"
          }))
        }
        this.show = !0
      }, setCenter: function () {
        i(this.qipaLoginIfr)
      }, runTempCallback: function () {
        this.loginTempCallback && (this.loginTempCallback(), this.loginTempCallback = null)
      }, reset: function (e) {
        if (this.qipaLoginIfr)for (var t in e)this.qipaLoginIfr.attr(t, e[t])
      }, _getPingParam: function (e) {
        var t = {platform: 10, p1: 101, t: 21, rn: Math.random(), p: 10, pf: 1, u: Q.cookie.get("QC005"), block: e};
        Q.log.server(t, "http://msg.71.am/b")
      }
    }
  }), u = new c;
  Q.$(document).delegate("hideloginiframe", function () {
    u.closeLoginWindow()
  }), h.on("loginIframeReset", function (e) {
    u.reset(e.data.opt)
  }), n.exports = u
});
define("../../components/action/viewCenter", [], function (e, t, n) {
  var a = function (e, t) {
    if (t = t || {}, e) {
      e = Q.$(e);
      var n = e.width(), a = e.height(), i = Q.page.getViewWidth(), r = Q.page.getViewHeight(), o = (i - n) / 2 + Q.page.getScrollLeft(), s = (r - a) / 2 + Q.page.getScrollTop();
      t.noposition || e.css("position", "absolute"), "vertical" == t.direction ? e.css("top", s + "px") : "horizontal" == t.direction ? e.css("left", o + "px") : (e.css("left", o + "px"), e.css("top", s + "px"))
    }
  };
  n.exports = a
});
define("../../components/action/floater", ["./adapter", "../model/floaterModel", "../view/floaterView"], function (e, t, n) {
  var a = e("./adapter"), i = e("../model/floaterModel"), r = e("../view/floaterView");
  n.exports = Q.Class("Floater", {
    ns: "Q.action", extend: a, construct: function (e) {
      e = e || {}, e.model = e.model || new i, e.view = e.view || new r(e), this.callsuper(e), this._valid = !0, this._plugins = []
    }, methods: {
      show: function (e) {
        e = e || {}, Q.object.extend(e, {display: !0}), this._model.set(e), this.syncGet()
      }, reShow: function () {
        this._view.update({display: !0})
      }, justShow: function () {
        this._view.show(), this._view.showCover(), this._view.adjustPosition(), this._view.playAnim()
      }, hide: function () {
        this._model.set({display: !1}), this.syncGet()
      }, pos: function (e) {
        this._view.pos(e)
      }, getFloater: function () {
        return this._view.getFloater()
      }, destroy: function () {
        this.hide(), this._valid && (this._model.destroy && this._model.destroy(), this._view.destroy && this._view.destroy(), this._valid = !1)
      }, isValid: function () {
        return this._valid
      }, isOpen: function () {
        return this._view.isOpen()
      }, registPlugin: function (e) {
        this._plugins.push(e)
      }, plugin: function (e) {
        this._plugins.forEach(function (t) {
          t.init && t.init(e)
        })
      }, clearPlugins: function () {
        this._plugins = []
      }, getCoverFloater: function () {
        return this._view.getCoverFloater()
      }
    }
  })
});
define("../../components/action/adapter", ["../model/model", "../view/view"], function (e, t, n) {
  var i = e("../model/model"), a = e("../view/view");
  n.exports = Q.Class("Adapter", {
    construct: function (e) {
      e = e || {};
      var t = e.model, n = e.view;
      t instanceof i && (this._model = t, this._model.init(this)), n instanceof a && (this._view = n, this._view.init(this))
    }, methods: {
      notice: function (e) {
        if (!e.hasOwnProperty("type"))throw'The ctrlClass method "notice" argument is not Meet the standard!';
        this._fire(e)
      }, _fire: function (e) {
        this.events && this.events.hasOwnProperty(e.type) && this.events[e.type].call(this, e)
      }, syncGet: function (e) {
        if (this._model)var t = this._model.get(e);
        this._view && this._view.update(t)
      }, asyncGet: function (e) {
        if (!this._model)return !1;
        var t = this;
        this._model.get(e, function (e) {
          t._view && t._view.update(e)
        })
      }, syncSet: function (e) {
        if (this._model)var t = this._model.set(e);
        this._view && this._view.update(t)
      }, asyncSet: function (e) {
        if (!this._model)return !1;
        var t = this;
        this._model.set(e, function (e) {
          t._view && t._view.update(e)
        })
      }
    }
  })
});
define("../../components/model/model", [], function (e, t, n) {
  n.exports = Q.Class("Model", {
    ns: "Q.model", construct: function () {
      this._data = {}
    }, methods: {
      init: Q.fn.emptyMethod, get: function () {
        return this._data
      }, set: function (e) {
        return Q.object.extend(this._data, e)
      }
    }
  })
});
define("../../components/view/view", [], function (e, t, n) {
  n.exports = Q.Class("View", {
    ns: "Q.view", methods: {
      init: function (e) {
        this._ctrl = e
      }, update: Q.fn.emptyMethod
    }
  })
});
define("../../components/model/floaterModel", ["./model"], function (e, t, n) {
  var i = e("./model");
  n.exports = Q.Class("FloaterModel", {
    ns: Q.model, extend: i, methods: {
      init: function () {
        this._data = {display: !1}
      }
    }
  })
});
define("../../components/view/floaterView", ["./view", "../action/viewCenter", "../action/overlay", "../kit/wmodesp", "../../kit/anim", "../../kit/pageSizeListener"], function (e, t, n) {
  var i = e("./view"), a = e("../action/viewCenter"), r = e("../action/overlay"), o = e("../kit/wmodesp"), s = e("../../kit/anim"), l = e("../../kit/pageSizeListener");
  n.exports = Q.Class("FloaterView", {
    ns: "Q.view", extend: i, construct: function (e) {
      e = e || {}, this.callsuper(e), this.doOnresize(e), this._wrapper = e.wrapper || document.body, this._zIndex = e.zIndex || 100, this.isAnim = e.isAnim, this.noOverflowHidden = e.noOverflowHidden, this.clickCoverCloseFloater = !!e.clickCoverCloseFloater
    }, methods: {
      init: function (e) {
        this._ctrl = e, this._elem = Q.$(document.createElement("div")), this._elem.css("position", "absolute"), this._elem.css("top", "0px"), this._elem.css("zIndex", this._zIndex), this.noOverflowHidden || this._elem.css("overflow", "hidden"), this._elem.css("visibility", "hidden"), Q.$(this._wrapper).append(this._elem), this.adjustBind = this.adjustBind || this.adjustPosition.bind(this)
      }, update: function (e) {
        var t = this;
        e.display ? (t.build(e), t.adjustPosition(e.floater), t.playAnim(e.anim), t.isResize && t.doOnresize({isResize: !0}), setTimeout(function () {
          t.show(), t.showCover(e.cover)
        }, 1)) : (this.hide(), this.hideCover(), this._removeEvent())
      }, getFloater: function () {
        return this._elem
      }, build: function (e) {
        if (e.id) {
          var t = Q.$("#" + e.id);
          t && (this._elem.append(t), e.removeBlock ? t.removeAttr("style") : t.show())
        } else e.html ? this._elem.html(e.html) : e.elem && (e.replace && this._elem.html(""), this._elem.append(e.elem), e.elem.show())
      }, pos: function (e) {
        this._elem.css("left", e.left + "px"), this._elem.css("top", e.top + "px")
      }, show: function () {
        this._elem.css("visibility", "visible"), this.hidePlayer()
      }, hide: function () {
        this._elem.css("visibility", "hidden"), this.showPlayer()
      }, showPlayer: function () {
        Q.browser.iPad || (Q._PLAYER_WMODE_SP && Q._PLAYER_WMODE_SP.hide(), o.hide())
      }, hidePlayer: function () {
        Q.browser.iPad || (Q._PLAYER_WMODE_SP && Q._PLAYER_WMODE_SP.show(), o.show())
      }, destroy: function () {
        this._removeEvent(), this._removeDom()
      }, adjustPosition: function () {
        var e = this;
        e.isAnim ? setTimeout(function () {
          a(e._elem[0], {noposition: 1, direction: "horizontal"}), r.resize()
        }, 0) : setTimeout(function () {
          a(e._elem[0]);
          var t = e._elem.top();
          r.resize(), 0 > t && e._elem.css("top", "30px")
        }, 0)
      }, showCover: function (e) {
        var t = this;
        r.show(t._zIndex - 5, e), t.clickCoverCloseFloater && r._overlay.on("click", function () {
          t._ctrl.destroy(), r._overlay.un("click")
        })
      }, hideCover: function () {
        r.hide()
      }, playAnim: function (e) {
        e = e || {}, e.style && s({
          elem: this._elem,
          style: e.style,
          from: e.from || -300,
          to: e.to || 0,
          duration: e.duration || 400
        })
      }, _removeDom: function () {
        var e = this._elem[0];
        e.parentNode && setTimeout(function () {
          e.parentNode.removeChild(e)
        }, 0)
      }, _removeEvent: function () {
        this.winObj && (this.winObj.un("resize", this.adjustBind), this.winObj = null)
      }, isOpen: function () {
        return "visible" == this._elem.css("visibility")
      }, doOnresize: function (e) {
        e && (e.isResize ? (this.isResize = !0, this.winObj || (this.winObj = Q.$(window), this.adjustBind = this.adjustBind || this.adjustPosition.bind(this), this.winObj.on("resize", this.adjustBind))) : e.isResponsive && (this.isResize = !0, this.winObj || (this.winObj = Q.$(window), this.adjustBind = this.adjustBind || this.adjustPosition.bind(this), l.on("sizeChange", this.adjustBind))))
      }, getCoverFloater: function () {
        return r._overlay
      }
    }
  })
});
define("../../components/action/overlay", [], function (e, t, n) {
  var i = Q.Class("Overlay", {
    ns: "Q.action",
    _overlay: null,
    statics: {
      _count: 0, _originZIndex: [], show: function (e, t) {
        if (t = t || {}, !i._overlay) {
          var n = Q.$(document.createElement("div"));
          n.css("position", Q.browser.IE6 ? "absolute" : "fixed"), n.css("left", "0"), n.css("top", "0"), n.css("width", Q.page.getWidth() + "px"), n.css("height", Q.page.getHeight() + "px"), n.css("background", t.bg || "#000"), n.css("opacity", t.opacity || "0.5"), n.css("filter", "alpha(opacity=" + (100 * t.opacity || 50) + ")"), n.css("-moz-opacity", t.opacity || "0.5"), Q.$(document.body).append(n), i._overlay = n
        }
        e && i._overlay.css("zIndex", e), this.resize(), i._overlay.css("display", "")
      }, hide: function () {
        if (i._overlay) {
          if (i._count > 0)return i._count--, i._overlay.css("zIndex", i._originZIndex[i._count]), void 0;
          i._overlay.css("display", "none").css("zIndex", "100")
        }
      }, resize: function () {
        i._overlay && i._overlay.css("width", Q.page.getWidth() + "px").css("height", Q.page.getHeight() + "px")
      }
    }
  });
  n.exports = i
});
define("../../components/kit/wmodesp", [], function (e, t, n) {
  var i = Q.Class("WMODESP", {
    construct: function () {
      this.player = Q.$("#flash")
    }, methods: {
      show: function () {
        this.player && "window" == Q.player.wMode && this.player.css("visibility", "hidden")
      }, hide: function () {
        this.player && "window" == Q.player.wMode && this.player.css("visibility", "visible")
      }
    }
  });
  n.exports = new i
});
define("../../kit/anim", [], function (e, t, n) {
  var i = [], a = function (e, t) {
    var n;
    return i.forEach(function (i) {
      return i.elem.equal(e) && i.style == t ? (n = i.anim, !1) : void 0
    }), n
  };
  n.exports = function (e) {
    if (e) {
      var t = e.elem, n = e.style || "left", r = e.from, o = e.to, s = e.ease || "Expo.easeOut", l = e.duration || 500, d = e.done || function () {
        }, h = a(t, n);
      return h || (h = Q.anim.create(t), i.push({
        elem: t,
        style: n,
        anim: h
      })), h.ease(s), h.duration(l), h.stop().from(n, r).to(n, o).go().onDone(d), h
    }
  }
});
define("../../kit/pageSizeListener", ["../components/action/adapter", "./eventPlugin"], function (e, t, n) {
  var i = e("../components/action/adapter"), a = e("./eventPlugin"), r = null, o = Q.Class("PageSizeListener", {
    extend: i,
    plugins: [new a],
    construct: function (e) {
      this.callsuper(e)
    },
    statics: {
      getInstance: function () {
        return r || (r = new o, r.init()), r
      }
    },
    methods: {
      init: function () {
        function e() {
          var e = Q.page.getViewWidth(), t = Q.page.getViewHeight();
          return {width: e, height: t}
        }

        var t = null;
        this._size = e();
        var n = this;
        Q.$(window).on("onresize", function () {
          t && clearTimeout(t), t = setTimeout(function () {
            var t = e();
            (n._size.width !== t.width || n._size.height !== t.height) && (n._size = t, n.fire({
              type: "sizeChange",
              data: {size: t}
            }))
          }, 100)
        })
      }, get: function () {
        return this._size
      }
    }
  });
  n.exports = o.getInstance()
});
define("../../kit/qiyiUnifiedPlayer", ["../kit/eventPlugin", "../kit/jsCallPlayer"], function (e, t, n) {
  var i, a, r = e("../kit/eventPlugin"), o = e("../kit/jsCallPlayer");
  new Q.ic.InfoCenter({moduleName: "qiyiUnifiedPlayer"});
  var s = Q.Class("QiyiPlayer", {
    plugins: [new r], construct: function (e) {
      this.playerid = e.playerid, window.param || {}, this._bindEvent(e)
    }, methods: {
      load: function (e) {
        o({id: this.playerid, name: "load", param: e})
      }, play: function () {
        o({id: this.playerid, name: "play"})
      }, resume: function () {
        o({id: this.playerid, name: "resume"})
      }, replay: function () {
        o({id: this.playerid, name: "replay"})
      }, pause: function () {
        o({id: this.playerid, name: "pause"})
      }, seek: function (e) {
        o({id: this.playerid, name: "pause", param: e})
      }, stop: function () {
        o({id: this.playerid, name: "stop"})
      }, getPlayInfo: function (e) {
        o({id: this.playerid, name: "getPlayInfo", fn: e})
      }, getVideoInfo: function (e) {
        o({
          id: this.playerid, name: "getVideoInfo", fn: function (t) {
            e(t.vi)
          }
        })
      }, getIsInMainVideo: function (e) {
        o({id: this.playerid, name: "getIsInMainVideo", fn: e})
      }, setCyclePlay: function () {
        o({id: this.playerid, name: "setCyclePlay"})
      }, switchVideo: function (e) {
        o({id: this.playerid, name: "switchVideo", param: e})
      }, switchNextVideo: function () {
        o({id: this.playerid, name: "switchNextVideo"})
      }, switchPreVideo: function () {
        o({id: this.playerid, name: "switchPreVideo"})
      }, addVideoList: function (e) {
        o({id: this.playerid, name: "addVideoList", param: e})
      }, removeVideoList: function (e) {
        o({id: this.playerid, name: "removeVideoList", param: e})
      }, getQiyiPlayerInfo: function (e) {
        o({id: this.playerid, name: "getQiyiPlayerInfo", fn: e})
      }, getQiyiVideoInfo: function (e) {
        o({id: this.playerid, name: "getQiyiVideoInfo", fn: e})
      }, setUserLogin: function (e) {
        o({id: this.playerid, name: "setQiyiUserLogin", param: e})
      }, setQiyiSubscribe: function (e) {
        o({id: this.playerid, name: "setQiyiSubscribe", param: e})
      }, setLight: function (e) {
        o({id: this.playerid, name: "setLight", param: e})
      }, forceToSaveCurVideoInfo: function (e) {
        o({id: this.playerid, name: "forceToSaveCurVideoInfo", param: e})
      }, expand: function (e) {
        o({id: this.playerid, name: "expand", param: e})
      }, setBarrageStatus: function (e) {
        o({id: this.playerid, name: "setBarrageStatus", param: e})
      }, setSelfSendBarrageInfo: function (e) {
        o({id: this.playerid, name: "setSelfSendBarrageInfo", param: e})
      }, setPlayerChangeToSmall: function (e) {
        o({id: this.playerid, name: "setSmallWindowMode", param: e})
      }, setBarrageSetting: function (e) {
        o({id: this.playerid, name: "setBarrageSetting", param: e})
      }, setActivityNoticeInfo: function (e) {
        o({id: this.playerid, name: "setActivityNoticeInfo", param: e})
      }, zoomQiyiVideo: function (e) {
        o({id: this.playerid, name: "zoomQiyiVideo", param: e})
      }, setTimeListener: function (e) {
        o({id: this.playerid, name: "setTimeListener", param: e})
      }, getHasBarrageConfigInfo: function () {
        o({id: this.playerid, name: "getHasBarrageConfigInfo"})
      }, _bindEvent: function () {
        var e = this;
        window.QiyiPlayerLoader.ready(function (t) {
          a = t, i = a.constantType, e.player = a.getPlayerById(e.playerid) || a.getPlayerById("flashbox"), e.player && e._fire()
        })
      }, _fire: function () {
        var e = this, t = e.player;
        Q.event.customEvent, t.on(i.QYPLAYER_STATE_CHANGE, function (t) {
          var n = t.data.state || "";
          Q.log.log(n + "--player state--" + (new Date).getTime()), e.fire({type: n.toLocaleLowerCase(), data: t.data})
        }), t.on(i.QYPLAYER_VIDEO_CHANGE, function (t) {
          t = t.data.vi, t.ve = Q.getVideoEventID() || "", e.fire({type: "videoChanged", data: t})
        }), t.on(i.QYPLAYER_VID_CHANGE, function (t) {
          e.fire({type: "vidChanged", data: t.data})
        }), t.on(i.QYPLAYER_NEXT_VIDEO, function () {
          e.fire({type: "playnext"})
        }), t.on(i.QYPLAYER_LOAD_COMPLETE, function (t) {
          e.fire({type: "loadComplete", data: t.data})
        }), t.on(i.QYPLAYER_SET_LIGHT, function (t) {
          e.fire({type: "setLight", data: t.data})
        }), t.on(i.QYPLAYER_MOVETO_QITAN, function () {
          var n = Q.$("[data-widget-qitancomment='comment']");
          if (n) {
            e.fire({type: "setLight", data: !1}), t.setLight("true");
            var i = Q.page.getScrollTop(), a = n.getPosition(), r = Q.anim.create(n);
            r.onCompute = function () {
              window.scrollTo(0, this.info.scrollTo.animArray[this.counter]), this.counter++
            }, r.duration(200).from("scrollTo", i).to("scrollTo", a.top - 100).go()
          }
        }), t.on(i.QYPLAYER_LOAD_SUCCESS, function (t) {
          e.fire({type: "loadSuccess", data: t.data})
        }), t.on(i.QYPLAYER_SHOW_LOGIN_PANEL, function (t) {
          e.fire({type: "showLoginPanel", data: t.data})
        }), t.on(i.QYPLAYER_EXPAND, function (t) {
          e.fire({type: "expand", data: t.data})
        }), t.on(i.QYPLAYER_AUTHENTICATION_RESULE, function (t) {
          e.fire({type: "authenticationResult", data: {isTryWatch: t.data.isTryWatch, tvid: t.data.tvid}})
        }), t.on(i.QYPLAYER_RECHARGE, function (t) {
          t = t.data || {}, e.fire({type: "recharge", data: {code: t.code, from: t.from, tvid: t.tvid}})
        }), t.on(i.QYPLAYER_SUBSCRIBE, function () {
          e.fire({type: "subscribe"})
        }), t.on(i.QYPLAYER_REFRESH_PAGE, function () {
          e.fire({type: "refreshPage"})
        }), t.on(i.QYPLAYER_DOWNLOAD, function (t) {
          e.fire({type: "downloadVideo", data: t.data})
        }), t.on(i.QYPLAYER_REQUEST_VIDEOLIST, function (t) {
          e.fire({type: "flashRequireList", data: t})
        }), t.on(i.QYPLAYER_SWITCH_FULL_SCREEN, function (t) {
          e.fire({type: "switchFullScreen", data: t.data})
        }), t.on(i.QYPLAYER_ADD_TO_TABLE, function () {
          e.fire({type: "addToTable"})
        }), t.on(i.QYPLAYER_FOCUS_TIPS, function (t) {
          e.fire({type: "focusTips", data: t.data})
        }), t.on(i.QYPLAYER_FOCUS_UPLOADER, function (t) {
          e.fire({type: "focusUploader", data: t.data})
        }), t.on(i.QYPLAYER_FIND_GOODS, function (t) {
          e.fire({type: "findGoods", data: t.data})
        }), t.on(i.QYPLAYER_BARRAGE_REPLAY, function (t) {
          e.fire({type: "barrageReply", data: t.data})
        }), t.on(i.QYPLAYER_BARRAGE_RECEIVE_DATA, function (t) {
          e.fire({type: "barrageReceiveData", data: t.data})
        }), t.on(i.QYPLAYER_SET_BARRAGE_INTERACT_INFO, function (t) {
          e.fire({type: "setBarrageInteractInfo", data: t.data})
        }), t.on(i.QYPLAYER_SET_BARRAGE_CONFIG_INFO, function (t) {
          e.fire({type: "setHasBarrageConfigInfo", data: t.data})
        })
      }
    }
  });
  n.exports = s
});
define("../../kit/jsCallPlayer", [], function (e, t, n) {
  function i(e) {
    if (e = e || {}, o = a.getPlayerById(e.id) || a.getPlayerById("flashbox")) {
      var t = e.fn, n = e.param;
      n ? o[e.name](n) : t ? o[e.name](t) : o[e.name]()
    }
  }

  var a, r = [], o = null;
  n.exports = function (e) {
    a ? i(e) : (r.push(e), window.QiyiPlayerLoader.ready(function (e) {
      if (a = e, r.length) {
        for (var t = 0; t < r.length; t++)try {
          i(r[t])
        } catch (n) {
        }
        r.length = 0
      }
    }))
  }
});
define("../../config/video", [], function (e, t, n) {
  var i = Q.browser.iPad || Q.browser.iPhone || Q.browser.android || Q.browser.lePad || Q.browser.WP;
  n.exports = i
});
define("../../units/resizePageWidth", ["../components/units/pageJob", "../components/action/checkDoms", "../kit/pageSizeListener"], function (e) {
  var t = e("../components/units/pageJob"), n = e("../components/action/checkDoms"), i = e("../kit/pageSizeListener"), a = "resizePageWidth", r = null;
  t.create(a, {
    getDependentDoms: function () {
      return r = {refEle: Q.$("[data-widget-maincontent=maincontent]") || Q.$("#widget-userheader")}
    }, check: function (e) {
      return n(e), !0
    }, init: function () {
      var e = Q.$("body");
      i.on("sizeChange", function (t) {
        var n = Q.PageInfo && Q.PageInfo.minWidth || 940;
        r && r.refEle && (n = r.refEle.width());
        var i = t.data.size;
        i.width < n ? e.css("width", n + "px") : e.css("width", "100%")
      })
    }
  }), t.add(a)
});
define("../../components/action/checkDoms", [], function (e, t, n) {
  var i = function (e) {
    Q.object.forEach(e, function (e, t) {
      if (!e)throw new Error("Dom " + t + " is null")
    })
  };
  n.exports = i
});
define("../../kit/responsive", ["../components/action/adapter", "./eventPlugin", "./pageSizeListener", "./inExternal", "./external"], function (e, t, n) {
  var i = e("../components/action/adapter"), a = e("./eventPlugin"), r = e("./pageSizeListener"), o = e("./inExternal"), s = e("./external");
  Q.$(document.body);
  var l = null, d = Q.Class("Responsive", {
    extend: i, plugins: [new a], construct: function (e) {
      this.callsuper(e)
    }, statics: {
      getInstance: function () {
        return l || (l = new d, l.init()), s.add("responsive", l), l
      }
    }, methods: {
      init: function () {
        Q.PageInfo = Q.PageInfo || {};
        var e = Q.PageInfo.respInfo, t = Q.$("body");
        this.respInfo = e, this.enable = !!e, (Q.browser.IE7 || Q.browser.IE6) && (this.enable = !1);
        var n = o("GetQiyiClientInfo");
        if (n && e && (this.enable = !0), this.enable) {
          var i = this, a = function (n) {
            n = n || r.get();
            for (var a = e.cnf, o = 0; o < a.length; o++) {
              var s = n.width, l = Q.browser.IE8 ? s < a[o].range.max : s <= a[o].range.max;
              if (s >= a[o].range.min && l && !t.hasClass(a[o].cls)) {
                t.removeClass(a[e.curLayout].cls), t.addClass(a[o].cls), e.curLayout = a[o].layout, i.fire({
                  type: "bodyClassChange",
                  data: Q.object.extend({size: n}, e)
                }), i.fire({type: "responsiveDone", data: {}});
                break
              }
            }
          };
          a(), r.on("sizeChange", function (e) {
            a(e.data.size)
          })
        }
      }, getCurrentLayout: function () {
        var e = this.respInfo, t = e.curLayout;
        return {bodyClass: e.cnf[e.curLayout].cls, layout: t}
      }, addListener: function (e) {
        this.on("bodyClassChange", function (t) {
          var n = t.data;
          e(n.cnf[n.curLayout])
        })
      }
    }
  });
  n.exports = d.getInstance()
});
define("../../kit/inExternal", [], function () {
  return function (e) {
    try {
      return "undefined" != typeof window.external && "unknown" != typeof window.external && "undefined" != typeof window.external[e] && "unknown" != typeof window.external[e]
    } catch (t) {
      return !1
    }
  }
});
define("../../kit/external", [], function (e, t, n) {
  Q.external = Q.external || {};
  var i = function (e, t) {
    switch (Object.prototype.toString.call(e)) {
      case"[object Object]":
        Q.object.extend(Q.external, e);
        break;
      case"[object String]":
        Q.external[e] = t
    }
    return Q.external
  };
  n.exports = {add: i}
});
define("../../units/channelIndexNavAnim", ["../components/units/pageJob", "../components/action/checkDoms", "../kit/anim"], function (e) {
  var t = e("../components/units/pageJob");
  e("../components/action/checkDoms");
  var n, i = e("../kit/anim"), a = "channelIndexNavAnim", r = {}, o = !0;
  t.create(a, {
    getDependentDoms: function () {
      r = {
        wrap: Q.$("[data-widget-navAnim=wrap]"),
        word: Q.$("[data-navAnim-elem=word]"),
        navBtn: Q.$("[data-widget-navctrl-elem=guide]"),
        matchWords: Q.$("[data-navAnim-elem=matchword]"),
        mask: Q.$("[data-navAnim-elem=mask]")
      }
    }, check: function () {
      for (var e in r)if (!r[e])return !1;
      return !0
    }, _getCookie: function () {
      var e;
      "channel" == r.wrap.attr("data-navAnim-param") ? e = "QC109" : "play" == r.wrap.attr("data-navAnim-param") && (e = "QC111", o = !1), n = parseInt(Q.cookie.get(e), 10), n || 0 === n ? n++ : n = 0, Q.cookie.set(e, n)
    }, _resetWordText: function () {
      var e = r.word.attr("data-navAnim-param").split("&"), t = e[parseInt(Math.random() * e.length, 10)];
      r.word[0].innerHTML = t
    }, _innerWordAnimate: function () {
      i({
        elem: Q.$("[data-navAnim-elem=cur]"), style: "marginLeft", from: 70, to: 0, duration: 600, done: function () {
          Q.$("[data-navAnim-elem=cur]").removeAttr("data-navAnim-elem")
        }
      })
    }, _navBtnAnimate: function () {
      i({
        elem: r.navBtn, style: "opacity", from: 1, to: 0, duration: 200, done: function () {
          i({
            elem: r.navBtn, style: "opacity", from: 0, to: 1, duration: 200, done: function () {
              r.mask[0].style.display = "none"
            }
          })
        }
      })
    }, _outerWordAnimate: function () {
      i({elem: r.word, style: "right", from: -60, to: 0, duration: 400})
    }, _animateRightToLeft: function () {
      var e = this;
      this._outerWordAnimate(), setTimeout(function () {
        e._navBtnAnimate()
      }, 200), this._innerWordAnimate()
    }, _animteAction: function () {
      var e = this;
      r.word[0].style.right = "-50px", r.matchWords.forEach(function (e) {
        e.innerHTML === r.word[0].innerHTML && (e.style.marginLeft = "60px", Q.$(e).attr("data-navAnim-elem", "cur"))
      });
      var t;
      t = e.isHover ? 0 : 2, setTimeout(function () {
        e._animateRightToLeft()
      }, 1e3 * t)
    }, init: function () {
      if (this._getCookie(), n > 3)return !1;
      var e, t = this;
      this._resetWordText(), r.navBtn.on("mouseenter", function () {
        return t.isHover || t.hoverAlready ? !1 : (e && window.clearInterval(e), r.mask[0].style.display = "block", t.isHover = !0, t._animteAction(), t.hoverAlready = !0, void 0)
      }), r.navBtn.on("mouseleave", function () {
        t.isHover = !1
      }), t._animteAction(), o && (e = setInterval(function () {
        t._animteAction()
      }, 6e4))
    }
  }), t.add(a)
});
define("../../units/loginFloater", ["../components/units/pageJob", "../kit/loginFloater"], function (e) {
  new Q.ic.InfoCenter({moduleName: "units/creditRecord"}), e("../components/units/pageJob");
  var t = e("../kit/loginFloater");
  Q.$("body").delegate("loginfloater", function () {
    t()
  })
});
define("../../kit/loginFloater", ["./userInfo", "../components/action/floater"], function (e, t, n) {
  var i = e("./userInfo"), a = e("../components/action/floater"), r = new a;
  Q.event.customEvent.on("loginIframeClosed", function () {
    r.hide()
  }), n.exports = function (e) {
    if (e = e || function () {
        }, i.isLogin())e(); else {
      var t = function () {
        Q.event.customEvent.un("login", t), r.hide(), e()
      };
      Q.event.customEvent.on("login", t), r.show({html: '<iframe width="580" scrolling="no" height="460" frameborder="0" style="z-index: 9999;" src="http://passport.iqiyi.com/user/loginiframe.php?showclose=true" id="j-dialog" allowtransparency="true"></iframe>'})
    }
  }
});
define("../../patches/swfInterfacePatch", ["../kit/userInfo", "../kit/yingyinPluginV2"], function (e) {
  var t = e("../kit/userInfo"), n = e("../kit/yingyinPluginV2");
  window.lib = window.lib || {}, window.lib.swf = window.lib.swf || {}, window.lib.swf.getPageInfo = window.lib.swf.getPageInfo || function () {
      var e = Q.$("[data-widget-qitancomment='comment']");
      return JSON.stringify({
        login: t.isLogin().toString(),
        passportId: t.getUid(),
        comment: e ? "true" : "false",
        P00001: t.getAuthCookies()
      })
    }, window.lib.swf.checkClientInstall = n.check
});
define("../../kit/yingyinPluginV2", [], function (e, t, n) {
  var i, a = function () {
    if (!(Q.browser.getOS() || "").match(/win/i))return null;
    if (i)return i;
    var e = parseInt(31415926 * Math.random() + 1, 10);
    return window.ActiveXObject || Q.browser.IE11 && void 0 !== window.ActiveXObject ? Q.$("body").html("beforeend", "<object id=" + e + " " + 'classid="clsid:5E6A8DA1-5731-465B-B036-B9E16EF26CAC" width="0" height="0">' + "</object>") : navigator.plugins ? navigator.plugins["iQiyi Browser Plugin"] && Q.$("body").html("beforeend", "<object id=" + e + " " + 'clsid="{5E6A8DA1-5731-465B-B036-B9E16EF26CAC}" width="0" height="0" ' + 'type="application/client-activex" ></object>') : Q.$("body").html("beforeend", "<object id=" + e + " " + 'clsid="{5E6A8DA1-5731-465B-B036-B9E16EF26CAC}" width="0" height="0" ' + 'type="application/client-activex" ></object>'), Q.$("#" + e) && Q.$("#" + e)[0]
  };
  n.exports = {
    check: function () {
      i = a();
      var e;
      try {
        e = i.IsClientExists()
      } catch (t) {
        e = !1
      }
      return null != i && e
    }, checkDramaKing: function () {
      i = a();
      var e;
      try {
        e = i.IsFollowExists()
      } catch (t) {
        e = !1
      }
      return null != i && e
    }, down: function (e) {
      try {
        return i.Launch(e.albumId, "", e.isCharge, e.tvId, e.offline, e.startTime || "", e.definite, e.mdown || 0), !0
      } catch (t) {
        return !1
      }
    }, getPlugin: function () {
      return i = a()
    }, downProtocol: function (e) {
      var t = "iqiyi://type=download&albumid=" + e.albumId + "&tvid=" + e.tvId + "&vid=videoid&name=" + e.tvName + "&mdown=" + (e.mdown || 0) + "&ischarge=0";
      return window.location.href = t, !1
    }, downDramaKing: function (e) {
      try {
        return Q.log.log("setDeskTVInfo:" + JSON.stringify(e)), i.GetDeskFavorInfo(JSON.stringify(e)), !0
      } catch (t) {
        return !1
      }
    }, sendInfoToDrama: function (e) {
      try {
        var t = i.GetJSInfo(JSON.stringify(e));
        return Q.log.log("GetJSInfo:" + JSON.stringify(e)), t
      } catch (n) {
        return !1
      }
    }
  }
});
define("../../units/globalLogoutDelegate", ["../components/units/pageJob", "../kit/pcLogin"], function (e) {
  var t = e("../components/units/pageJob"), n = e("../kit/pcLogin"), i = "globalLogoutDelegate";
  t.create(i, {
    check: function () {
      return !0
    }, init: function () {
      var e = this;
      e.redirect = "", Q.$(document).delegate("j-global_logout", function (t) {
        Q.event.get(t.event).preventDefault();
        var i = t.currentTarget || t.target || t.srcElement;
        e.redirect = 1 !== i.href.indexOf("=") ? decodeURIComponent(i.href.substring(i.href.indexOf("=") + 1)) : "www.iqiyi.com", n.logout()
      }), Q.event.customEvent.on("logout", function () {
        var t = "TQC013";
        Q.cookie.get(t) && Q.cookie.remove(t, {
          path: "/",
          domain: "iqiyi.com"
        }), e.redirect && (location.href = e.redirect)
      })
    }
  }), t.add(i)
});
define("../../kit/pcLogin", ["../interfaces/pcLogin2", "../interfaces/logout", "../interfaces/isLogin", "../kit/userInfo", "../kit/iframeRequest", "../config/siteDomain", "../config/loginMsg"], function (e, t, n) {
  var i = e("../interfaces/pcLogin2"), a = e("../interfaces/logout"), r = e("../interfaces/isLogin"), o = e("../kit/userInfo"), s = e("../kit/iframeRequest"), l = e("../config/siteDomain"), d = Q.event.customEvent, h = e("../config/loginMsg"), m = new Q.ic.InfoCenter({moduleName: "pcLogin"});
  window.lib = window.lib || {}, window.lib.__callbacks__ = window.lib.__callbacks__ || {};
  var c = {
    login_success: lib.__callbacks__.login_success || function () {
    }, login_error: lib.__callbacks__.login_error || function () {
    }, logout_callback: lib.__callbacks__.logout_callback || function () {
    }, login_iframe_closed: lib.__callbacks__.login_iframe_closed || function () {
    }, logBox_close: lib.__callbacks__.logBox_close || function () {
    }, logBox_reset: lib.__callbacks__.logBox_reset || function () {
    }
  };
  window.lib.__callbacks__.login_iframe_closed = function () {
    c.login_iframe_closed(), d.fire({type: "loginIframeClosed"})
  }, window.lib.__callbacks__.login_success = function (e) {
    c.login_success(e), d.fire({type: "login", data: e})
  }, window.lib.__callbacks__.logout_callback = function (e) {
    c.logout_callback(e), d.fire({type: "logout", data: e})
  }, window.lib.__callbacks__.logBox_close = function (e) {
    c.logBox_close(e), d.fire({type: "loginIframeClosed"})
  }, window.lib.__callbacks__.logBox_reset = function (e) {
    c.logBox_reset(e), d.fire({type: "loginIframeReset", data: {opt: e}})
  }, window.lib.__callbacks__.logBox_close.isMainsite = !0, n.exports = {
    login: function (e, t) {
      e = e || {}, t = t || "normal";
      var n = new i(t);
      n.request(e, function (t) {
        if ("A00000" == t.code) {
          if (t.data = t.data || {}, t.data._loginName = e.param.email, e.param.from && (t.data.from = e.param.from), t.data.hasLogined) {
            var n = new s;
            n.request(t.data.hasLogined, null)
          }
          window.lib.__callbacks__.login_success(t.data)
        } else if ("A00055" == t.code) {
          if (m.log(t.code + h[t.code]), t.data.redirect) {
            var i = "http://passport." + l.getDomain() + "/apis/secure/verify_account.action";
            t.data.redirect = i
          }
          if (t.data && "0" == t.data.bindphone)window.location.href = t.data.redirect; else {
            var a = null;
            e.param.from && (a = e.param.from), d.fire({
              type: "abnormal_verifyPhone",
              data: {
                code: t.code,
                redirect: t.data.redirect,
                bindphone: t.data.bindphone,
                _loginName: e.param.email,
                from: a
              }
            })
          }
        } else m.log(t.code + h[t.code]), c.login_error(t.data), e.param && 2 == e.param._pos || e.param && e.param.target && e.param.target.indexOf("_pos=2") > 0 ? d.fire({
          type: "scrollfloater_login-failed",
          data: {code: t.code, msg: t.msg, needCode: t.data.needcode}
        }) : d.fire({type: "login-failed", data: {code: t.code, msg: t.msg, needCode: t.data.needcode}})
      })
    }, logout: function () {
      d.fire({
        type: "beforeLogout",
        data: {}
      }), Q.browser.IE6 ? (this.timer && (clearTimeout(this.timer), this.timer = null), this.timer = setTimeout(this._dologout, 1e3)) : this._dologout()
    }, _dologout: function () {
      var e = this, t = function () {
        var e = new a;
        e.request("", function (e) {
          "A00000" == e.code && window.lib.__callbacks__.logout_callback(e)
        })
      }, n = new r, i = {authcookie: o.getAuthCookies(), fields: "all", agent_type: 1};
      n.sendInfoAction(i, function (n) {
        if ("A00000" == n.code) {
          if (n.data && n.data.verify_info) {
            var i = n.data.verify_info;
            i.level && "2" == i.level && i.is_verified && i.is_verified === !0 ? (e.req = new s, e.req.getFrame() && e.req.request("http://portal.lego.iqiyi.com/logout-json", {
              callback: function () {
                t()
              }, remove: !0
            })) : t()
          }
        } else t()
      })
    }
  }
});
define("../../interfaces/pcLogin2", ["../kit/remoteInterface", "../kit/userInfo", "../config/siteDomain", "../kit/rsa", "./config", "../kit/fdlKit"], function (e, t, n) {
  var i = e("../kit/remoteInterface"), a = e("../kit/userInfo"), r = e("../config/siteDomain");
  r.getDomain();
  var o = e("../kit/rsa"), s = e("./config").interfaces, l = e("../kit/fdlKit");
  n.exports = Q.Class("RIPcLogin", {
    construct: function (e) {
      this._remoteInterface = "normal" == e ? new i({url: s.login}) : new i({url: s.authlogin})
    }, methods: {
      request: function (e, t) {
        var n = this;
        e = e || {}, e.param && (e.param.passwd = o.rsaFun(e.param.passwd)), e.auth = a.getAuthCookies(), Q.browser.iPad && e.param && (e.param.agenttype = 10), e.dataType = "jsonp", e.method = "GET", this._remoteInterface._remoteInterfaces.url.indexOf("reglogin") >= 0 ? (e.bird_src = e.param.lang && "zh_TW" == e.param.lang ? "f8d91d57af224da7893dd397d52d811a" : "eb8d221bc0c04c5ab4ba735b6b1560a1", e.server = "BEA3AA1908656AABCCFF76582C4C6660", e.url_src = "/apis/reglogin/login.action?", l.getToken(e, function (i) {
          "A00000" === i.code ? (e.param = i.param, n._remoteInterface._remoteInterfaces.url = i.requestUrl, n._remoteInterface.send(e, t)) : t && t(i)
        })) : this._remoteInterface.send(e, t)
      }
    }
  })
});
define("../../kit/rsa", [], function (e, t, n) {
  n.exports = {
    rsaFun: function (e) {
      var t = "ab86b6371b5318aaa1d3c9e612a9f1264f372323c8c0f19875b5fc3b3fd3afcc1e5bec527aa94bfa85bffc157e4245aebda05389a5357b75115ac94f074aefcd", n = "10001", i = Q.crypto.rsa.RSAUtils.getKeyPair(n, "", t), a = Q.crypto.rsa.RSAUtils.encryptedString(i, encodeURIComponent(e)).replace(/\s/g, "-");
      return a
    }
  }
});
define("../../kit/fdlKit", ["../interfaces/fdlGetToken", "../config/siteDomain"], function (require, exports, module) {
  var fdlGetTokenIf = require("../interfaces/fdlGetToken"), siteDomain = require("../config/siteDomain"), ic = new Q.ic.InfoCenter({moduleName: "fdlKit"});
  module.exports = {
    getToken: function (params, cb) {
      var _this = this, ri = new fdlGetTokenIf;
      ri.request({}, function (data) {
        if ("A00000" === data.code) {
          var ip = data.ip, target;
          if (params.param)target = params.url_src + Q.url.jsonToQuery(params.param); else {
            var url_src = params.url_src;
            params.url_src = null, target = url_src + Q.url.jsonToQuery(params)
          }
          var input = target, timeStamp = Math.floor((new Date).getTime() / 1e3), sign = eval(data.sdk), options = {
            param: {
              target: target,
              server: params.server,
              token: data.token,
              bird_src: params.bird_src,
              sign: sign,
              bird_t: timeStamp
            }, requestUrl: "http://kylin." + siteDomain.getDomain() + "/validate", code: "A00000"
          };
          cb && cb(options)
        } else cb && cb(data)
      })
    }
  }
});
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
define("../../interfaces/logout", ["../kit/remoteInterface", "../config/siteDomain"], function (e, t, n) {
  var i = e("../kit/remoteInterface"), a = e("../config/siteDomain"), r = a.getDomain();
  n.exports = Q.Class("RILogout", {
    construct: function () {
      var e = "";
      this._remoteInterface = new i({url: e})
    }, methods: {
      request: function (e, t) {
        Q.__logoutcb = function () {
          delete Q.__logoutcb, t({code: "A00000"}), Q.$("body")[0].removeChild(n[0])
        };
        var n = Q.element.Element.create({tagName: "iframe"});
        n[0].frameborder = "0", n[0].width = "0", n[0].height = "0", n[0].src = window.location.protocol + "//passport." + r + "/user/logout.php?noredirect=1&logoutcb=Q.__logoutcb", Q.$("body").append(n)
      }
    }
  })
});
define("../../kit/iframeRequest", [], function (e, t, n) {
  var i = new Q.ic.InfoCenter({moduleName: "kit/iframeRequest"}), a = Q.Class("iframeRequest", {
    construct: function (e) {
      e = e || {}, this.param = e, this.createFrame()
    }, methods: {
      createFrame: function () {
        var e = "loadingIframe_thread" + Math.ceil(1e4 * Math.random());
        this.loadFrames = e;
        var t = ['<iframe id="' + e + '" name="' + e + '" class="invisible"', ' scrolling="no" src=""', ' allowTransparency="true" style="display:none;" frameborder="0"', " ></iframe>"].join(""), n = document.createElement("div");
        n.id = "iframe_request", n.innerHTML = t, document.body.appendChild(n), this.ifr = n, this.frame = document.getElementById(this.loadFrames)
      }, getFrame: function () {
        return this.frame || this.createFrame(), this.frame
      }, request: function (e, t) {
        if (this._initFrame(t), e && this.ifr && null != this.frame) {
          var n = "sIframe_" + (new Date).getTime(), i = [];
          t = t || {}, t.t = n;
          for (var a in t)i.push(a + "=" + encodeURIComponent(t[a]));
          this.frame.src = -1 == e.indexOf("?") ? e + "?" + i.join("&") : e + "&" + i.join("&")
        }
      }, _initFrame: function (e) {
        var t = this;
        this.ifr && this.frame && (this.frame.onload = this.frame.onerror = this.frame.onabort = function () {
          i.log(t.frame.innerHTML), e.callback && e.callback(), t.ifr.onload = t.ifr.onerror = t.ifr.onabort = null, t.param.remove && (document.body.removeChild(t.ifr), t.ifr = t.frame = null)
        })
      }
    }
  });
  n.exports = a
});
define("../../config/loginMsg", ["../config/siteDomain"], function (e, t, n) {
  var i = e("../config/siteDomain"), a = "";
  a = i.isPPS() ? "http://passport.pps.tv/user/login.php" : "http://passport.qiyi.com/user/login.php", n.exports = {
    A00000: "操作成功",
    A00101: "系统错误",
    P00101: "注册来源错误",
    P00102: "请输入正确的邮箱或手机号",
    P00103: "请输入正确的邮箱",
    P00104: "密码须为6-16位字母或数字",
    P00105: '该帐号已注册，请直接<a  j-delegate="loginscroll" href="' + a + '">登录</a>',
    P00106: '该手机已注册，请直接<a  j-delegate="loginscroll" href="' + a + '">登录</a>',
    P00107: "验证码错误，请重新输入",
    P00108: "帐号或密码错误，请重试",
    P00109: '仅支持中英文、数字或"_"',
    P00110: "昵称已被占用，换一个试试？",
    P00111: '该帐号尚未激活，<a href="{0}" target="_blank" class="onlink">重发激活邮件</a>',
    P00112: "邮箱未注册",
    P00113: "当前密码不正确",
    P00114: "新密码格式格式不正确",
    P00115: "找回密码链接失效",
    P00116: "找回密码链接错误",
    P00117: "帐号或密码错误，请重试",
    P00118: "帐号已激活，不用重发激活链接",
    P00119: "昵称包含敏感字",
    P00121: "该邮箱未注册",
    P00201: "缺少图片",
    P00202: "图片格式错误",
    T00115: "图片尺寸有问题，请重新选择",
    P00211: "抱歉！处理头像图片失败，请重试",
    P00301: "此第三方帐号已经绑定过了",
    P00302: "此邮箱已经被占用，请直接绑定已有帐号",
    P00303: "系统繁忙，绑定失败",
    P00304: "邮箱或密码错误，请重试",
    P00305: "该邮箱已被其他帐号绑定，换一个试试吧",
    P00306: "该帐号尚未激活，无法完成绑定",
    A00001: "用户未登录",
    E00000: "用户名或密码错误"
  }
});
define("../../units/navAppdownResponse", ["../components/units/pageJob", "../components/action/checkDoms", "../kit/responsive", "../interfaces/locationInterface", "../interfaces/getDownloadUrlInterface"], function (e) {
  var t = e("../components/units/pageJob");
  e("../components/action/checkDoms");
  var n = e("../kit/responsive");
  new (e("../interfaces/locationInterface"));
  var i, a = e("../interfaces/getDownloadUrlInterface"), r = Q.PageInfo && Q.PageInfo.respInfo, o = 0, s = "navAppdownResponse";
  Q.browser.getOS();
  var l = Q.url.parse(window.location.href), d = "www.iqiyi.com" === l.host && "/" === l.path;
  t.create(s, {
    getDependentDoms: function () {
      var e = Q.$("#wnav-appdown");
      return i = {wrap: e, alink: e.down('*[data-widget-appdown="playpage"]')}
    }, check: function () {
      return !(!i.wrap || !r)
    }, init: function () {
      var e = this;
      e.appLink(), e.bindevent()
    }, appLink: function () {
      var e, t = i.alink, n = {pubarea: t.attr("pubarea"), srcchannel: document.referrer};
      e = a.getDownloadUrl(n), e && t.attr("href", e)
    }, bindevent: function () {
      var e = this, t = i.wrap.attr("data-resp-min") || "1380";
      t = parseInt(t, 10), e.responseEvent(), n.on("bodyClassChange", function (t) {
        t = t || {}, e.responseEvent(t.data)
      })
    }, responseEvent: function (e) {
      e = e || r;
      var t = e.curLayout, n = e.cnf, a = n[t], s = a && a.range && a.range.min && a.range.min > o;
      d ? (i.wrap.css("display", ""), s ? i.alink.html("下载客户端") : i.alink.html("下载")) : s ? (i.alink.html("下载客户端"), i.wrap.css("display", "")) : i.wrap.hide()
    }
  }), t.add(s)
});
define("../../interfaces/locationInterface", ["../kit/remoteInterface"], function (e, t, n) {
  var i = e("../kit/remoteInterface");
  n.exports = Q.Class("UIDInterface", {
    construct: function () {
      var e = String(Math.floor(999999999 * Math.random())) + "" + (new Date).getTime(), t = "http://iplocation.geo.qiyi.com/cityjson?tn=" + e;
      this._remoteInterface = new i({LOC: {url: t}})
    }, methods: {
      request: function (e) {
        this._remoteInterface.send({ifname: "LOC", param: {}, jsonp: {varname: "returnIpCity"}}, function (t) {
          "A00000" == t.code ? e && e(t.data) : e({})
        })
      }
    }
  })
});
define("../../interfaces/getDownloadUrlInterface", ["./config", "../kit/userInfo"], function (e, t, n) {
  e("./config");
  var i, a = e("../kit/userInfo"), r = Q.browser.getOS(), o = Q.browser.ios;
  "Mac" === r ? i = 6 : r.indexOf("Win") > -1 ? i = 1 : o ? i = 2 : Q.browser.android ? i = 3 : Q.browser.WindowsPhone && (i = 4);
  var s = Q.Class("GetDownloadUrlInterface", {
    construct: function () {
    }, methods: {
      request: function (e, t) {
        var n = {ifname: e.ifname, method: e.method || "GET", param: e};
        e.jsonp ? n.dataType = "jsonp" : n.encodeFn = function (e) {
          return encodeURIComponent(e)
        }, delete e.ifname, delete e.method, delete e.jsonp, this._remoteInterface.send(n, t)
      }, mergeJson: function (e, t) {
        var n = {};
        for (var i in e)e.hasOwnProperty(i) && (n[i] = e[i]);
        for (var a in t)t.hasOwnProperty(a) && (n[a] = t[a]);
        return n
      }, packageUrl: function (e) {
        return "http://lotus.sp.iqiyi.com/ota?id=&pubplatform=" + i + "&pubarea=" + e.pubarea + "&qipuid=&u=&pu=" + e.pu
      }, getDownloadUrl: function (e) {
        var t = {pu: a.getUid()};
        return this.packageUrl(this.mergeJson(e, t))
      }
    }
  });
  n.exports = new s
});
define("../../units/pcUserRegistLoginBoxManager", ["../components/units/pageJob", "../kit/userInfo", "../kit/validate", "../components/action/checkDoms", "../kit/getWebEventID", "../units/history20_pingback", "../action/pcLoginBox", "../action/qipaLogin", "../view/pcLoginBoxView", "../action/pcRegistBox", "../view/pcRegistBoxView", "../action/pcUserBox", "../view/pcUserBoxView", "../kit/iframeLocation"], function (e) {
  var t = e("../components/units/pageJob"), n = Q.event.customEvent, i = e("../kit/userInfo"), a = e("../kit/validate");
  e("../components/action/checkDoms");
  var r = e("../kit/getWebEventID"), o = e("../units/history20_pingback"), s = e("../action/pcLoginBox"), l = e("../action/qipaLogin"), d = e("../view/pcLoginBoxView"), h = e("../action/pcRegistBox"), m = e("../view/pcRegistBoxView"), c = e("../action/pcUserBox"), u = e("../view/pcUserBoxView");
  e("../kit/iframeLocation");
  var p, f, U, V, g = "pcUserRegistLoginBoxManager", y = function (e, t) {
    e.html(""), e.append(document.createTextNode(t))
  }, b = 1e3, v = !(Q.browser.IE6 || Q.browser.IE7 || Q.browser.IE8);
  t.create(g, {
    getDependentDoms: function () {
      var e = Q.$("#widget-userregistlogin");
      if (!e)return {wrapper: null};
      var t = e.down("[data-widget-loginbox=loginbox]"), n = e.down("[data-widget-registbox=registbox]"), i = e.down("[data-widget-userbox=userbox]"), a = e.down("[data-elem='topUserName']"), r = e.down("[data-elem=topLoginPanel]"), o = e.down("[data-elem=topRegistPanel]"), s = e.down("*[data-vipheader-elem=vipicon]"), l = e.down("*[data-vipheader-elem=notvipicon]"), d = Q.$("*[data-userinfocenter=loginbtn]");
      return this._doms = {
        wrapper: e,
        loginBox: t,
        registBox: n,
        userBox: i,
        namePanel: a,
        loginPanel: r,
        registPanel: o,
        vipIcon: s,
        notVipIcon: l,
        loginBtn: d
      }, this._doms
    }, check: function (e) {
      return !!(e.wrapper && e.loginBox && e.registBox && e.userBox)
    }, init: function () {
      Q(document).on("click", ".J_pop-third-downbtn", function () {
        var e = Q(this).parents("tr"), t = e.find(".J_pop-third-upbtn"), n = e.find(".J_pop-third-box");
        Q(this).addClass("dn"), n.removeClass("dn"), t.removeClass("dn")
      }), Q(document).on("click", ".J_pop-third-upbtn", function () {
        var e = Q(this).parents("tr"), t = e.find(".J_pop-third-downbtn"), n = e.find(".J_pop-third-box");
        t.removeClass("dn"), n.addClass("dn"), Q(this).addClass("dn")
      }), Q(document).on("click", ".J_account-btn", function () {
        var e = Q('[data-registbox-elem="main"]'), t = Q('[data-registbox-elem="loginTable"]').find("input"), n = Q('[data-registbox-elem="registpanel"]'), i = n.find(".J_account-title"), a = n.find(".J_account-inp");
        n.find(".J_account-btn");
        var r = n.find(".J_sms-box"), o = n.find(".J_piccode-name"), s = n.find(".J_code-phoder"), l = n.find(".J_account-tr").attr("data-type");
        "phone" === l ? (n.find(".J_account-tr").attr("data-type", "email"), i.html("邮&nbsp;&nbsp;&nbsp;箱："), a.attr("placeholder", "请输入电子邮箱地址"), Q(this).html("手机注册"), r.addClass("dn"), e.removeClass("mobileLoginBox"), o.html(" "), s.attr("placeholder", "请输入验证码")) : "email" === l && (n.find(".J_account-tr").attr("data-type", "phone"), i.html("手&nbsp;&nbsp;&nbsp;机："), a.attr("placeholder", "请输入手机号码"), Q(this).html("邮箱注册"), r.removeClass("dn"), e.addClass("mobileLoginBox"), o.html("验证码："), s.attr("placeholder", "请输入右侧字母")), t.each(function (e) {
          Q(t[e]).val("")
        }), n.find('[data-registbox-elem="errDom"]').html(" "), n.find('[data-registbox-elem="pwdstrong"]').addClass("dn")
      })
    }, exec: function () {
      this._doms.userHead = this._doms.wrapper.down("[data-elem=topUserHead]"), this._doms.avatarPanael = this._doms.wrapper.down("[data-elem=topUserFaceSmall]"), this._doms.splitline = this._doms.wrapper.down("*[data-elem=splitline]"), p = this._doms, this.isVlib = "lib" === this._doms.loginBox.attr("data-loginbox-loc"), this.initLoginBox(p.loginBox), this.initRegistBox(p.registBox), this.initUserBox(p.userBox), this.isLogin = i.isLogin(), this.checkoutPanel(this.isLogin), this.isLogin ? p.loginBtn && p.loginBtn.hide() : p.loginBtn && p.loginBtn.css("display", ""), this.bindEvent()
    }, initLoginBox: function (e) {
      f = new s({view: new d({wrapper: e}, {isVlib: this.isVlib}), model: ""})
    }, initRegistBox: function (e) {
      U = new h({view: new m({wrapper: e}), model: ""})
    }, initUserBox: function (e) {
      V = new c({view: new u({wrapper: e}), model: ""})
    }, _resetDefaultSrc: function (e) {
      var t = "http://www.qiyipic.com/common/fix/record_images/usrsmall_index.png", n = this._doms.avatarPanael;
      n && (e.data.top && (t = "http://www.qiyipic.com/common/fix/record_images/usrsmall-index-new.png"), this._doms.avatarPanael.attr("defaultsrc", t), i.isLogin() ? i.getIsLoginInfo(function (e) {
        e && e.icon || n.attr("src", t)
      }) : n.attr("src", t))
    }, bindEvent: function () {
      var e = this, t = {};
      ["login", "regist"].forEach(function (e) {
        n.on(e + "InputBegin", function () {
          t[e] = !0
        }), n.on(e + "InputEnd", function () {
          t[e] = !1
        })
      });
      var i = function () {
      };
      n.on("indexNavClassChange", function (t) {
        e._resetDefaultSrc(t)
      });
      var a = p.userHead;
      a && (a.on("click", function (t) {
        Q.event.get(t).preventDefault(), e.isLogin ? V.toggle() : f.toggle()
      }), Q.browser.iPad || (a.on("mouseleave", function () {
        e.isLogin ? V.hide(b) : i("login", f)
      }), a.on("mouseenter", function () {
        e.isLogin ? V.cancelHide() : i("login", f)
      })));
      var r = p.namePanel;
      r.on("click", function (t) {
        var n = Q.event.get(t).target, i = Q.$(n).attr("data-delegate");
        "D-code-login" != i && "D-login-return" != i && V.toggle(), e._sendPingBack("1503081_microperdivshw")
      }), Q.browser.iPad || r.on("mouseleave", function () {
        V.hide(b)
      }), p.userBox.on("mouseenter", function () {
        V.cancelHide()
      }), p.userBox.on("mouseleave", function () {
        V.hide(b)
      });
      var s = function (e) {
        f.hide(), U.hide(), e && e.data && "pcUserBoxView" == e.data.from || V.hide()
      }, d = Q.$("body"), h = Q.browser.iPad ? "touchstart" : "click";
      d.on(h, function (e) {
        e = Q.event.get(e);
        var t = Q.$(e.target);
        t && t.attr("j-delegate")
      });
      var m = ["hideHeaderBoxFromVipHeader", "playHistoryShow", "updateRecordsShow", "navOneShow", "suggestShow", "updateRecordTipShow"];
      m.forEach(function (e) {
        n.on(e, s)
      }), n.on("login", e.doLogin.bind(e)), n.on("logout", e.doLogout.bind(e)), n.on("hideUserBox", function () {
        V.hide()
      }), n.on("playHistoryTipClick", function () {
        setTimeout(function () {
          l.openLoginWindow()
        }, 0)
      }), d.delegate("loginscroll", this.doLoginDelegate.bind(this)), d.delegate("registerscroll", this.doRegisterDelegate.bind(this));
      var c = ["beforePcLoginBoxShow", "beforePcRegistBoxShow", "beforePcUserBoxShow"];
      c.forEach(function (e) {
        n.on(e, function (e) {
          var t = e.data.wrapper;
          v ? t.css("opacity", "0") : t.css("filter", "alpha(opacity=0)")
        })
      });
      var u = ["pcLoginBoxShow", "pcRegistBoxShow", "pcUserBoxShow"];
      u.forEach(function (e) {
        n.on(e, function (t) {
          var i = t.data.wrapper;
          n.fire({type: "pcUserRegistLoginShow", data: {wrapper: p.wrapper, box: i}});
          var a = i.attr("data-width"), r = i.attr("data-height"), o = Q.$("#qipaLoginIfr");
          o && (a && o.css("width", a + "px"), r && o.css("height", r + "px")), [V, f, U].forEach(function (e) {
            e._view._doms.wrapper[0] !== i[0] && e.hide()
          });
          var s;
          "pcUserBoxShow" == e ? (s = p.namePanel.down("a"), s && s.addClass("arrow-selected")) : "pcLoginBoxShow" == e ? (s = p.loginPanel.down("a") || p.loginPanel, s && s.addClass("arrow-selected")) : "pcRegistBoxShow" == e && (s = p.registPanel.down("a") || p.registPanel, U._view.showVertifyPanel(i), s && s.addClass("arrow-selected")), v ? Q(i[0]).animate({opacity: "1"}, 0) : i.css("filter", "alpha(opacity=100)")
        })
      });
      var g = ["beforePcLoginBoxHide", "beforePcRegistBoxHide", "beforePcUserBoxHide"];
      g.forEach(function (e) {
        n.on(e, function (e) {
          var t = e.data.wrapper;
          v ? t.css("opacity", "0") : t.css("filter", "alpha(opacity=0)")
        })
      });
      var y = ["pcLoginBoxHide", "pcRegistBoxHide", "pcUserBoxHide"];
      y.forEach(function (e) {
        n.on(e, function () {
          var t;
          "pcUserBoxHide" == e ? (t = p.namePanel.down("a"), t && t.removeClass("arrow-selected")) : "pcLoginBoxHide" == e ? (t = p.loginPanel.down("a") || p.loginPanel, t && t.removeClass("arrow-selected")) : "pcRegistBoxHide" == e && (t = p.registPanel.down("a") || p.registPanel, t && t.removeClass("arrow-selected"))
        })
      });
      var k = r.down("a");
      k && k.on("click", function (e) {
        var t = Q.event.get(e.event || window.event || e);
        t.preventDefault(), Q.browser.iPad || (k.attr("href"), o.send("gerenzhongxinclk", function () {
        }))
      })
    }, doLogin: function (e) {
      e.data && e.data.redirect && e.data.redirect.indexOf("secure_modify_pwd.action") >= 0 && (window.location.href = e.data.redirect);
      var t = this;
      if (e && e.data && e.data.refreshCookie)return this.checkoutPanel(!0), void 0;
      if (e && e.data && e.data.from) {
        var n = e.data.from;
        "favorite" == n ? t._setPingBack("1411143_scdl") : "comment" == n ? t._setPingBack("1411192_comclk") : "subscribe" == n && t._setPingBack("1411191_subclk")
      }
      var i = !1, r = !1;
      if (e && e.data && e.data.data && (i = "registed" == e.data.type, r = a.mobile(e.data.data._loginName)), i && !r) {
        var o = U._view.showVertifyPanel();
        if (0 !== o)return
      }
      this.isLogin = !0, this.checkoutPanel(!0), f.hide(), U.hide(), Q('[data-widget-registbox="upgrade-registbox"]') && Q.event.customEvent.fire({type: "upgradeHide"}), i && r || (V.show(), V.hideAfterNoAction(1e4)), p.loginBtn && p.loginBtn.hide(), Q.event.customEvent.fire({type: "abnormalLogin"})
    }, doLogout: function () {
      this.isLogin = !1, i.setIsThirdParty(!1), V.hide(), this.checkoutPanel(!1), p.loginBtn && p.loginBtn.css("display", ""), p.splitline && (this.isVlib ? p.splitline.css("display", "") : p.splitline.show()), Q('[data-widget-topnavloginbar="loginbar"]') && (Q('[data-widget-topnavloginbar="loginbar"]').show(), Q("#J_grade-tip-pop1").addClass("dn"), Q("#J_grade-tip-pop2").addClass("dn"), Q("#J_grade-tip-pop3").removeClass("dn")), Q.event.customEvent.fire({type: "abnormalLogout"})
    }, checkoutPanel: function (e) {
      var t = p.wrapper, n = p.avatarPanael, a = p.namePanel, r = p.loginPanel, o = p.registPanel, s = p.vipIcon, l = p.notVipIcon, d = p.splitline, h = this.isVlib;
      if (e) {
        r.hide(), o.hide(), d && d.hide();
        var m = "", c = JSON.parse(Q.cookie.get("P00002")).pnickname;
        m = c ? c : i.getName();
        var u = a.down("#top-username") || a.down("a");
        !Q.browser.IE8 && Q.browser.IE6 && u.css("width", Math.min(12 * m.length, 36) + "px"), y(u, m), a.css("display", "");
        var f = !1;
        i.getIsLoginInfo(function (e) {
          if (e && e.icon)n && n.attr("src", e.icon); else if (n) {
            var i = n.attr("defaultSrc");
            n.attr("src", i)
          }
          f ? h ? t.css("display", "") : t.show() : f = !0
        }), i.getIsValidVip(function (e) {
          var n = "";
          i.getLevel(function (t) {
            e ? (n = "qyvr" + t + " qyv-rank", l.hide(), s[0].className = "", s.addClass(n).css("display", "")) : (n = "qyvr-gray" + t + " qyv-rank", s.hide(), l[0].className = "", l.addClass(n).css("display", ""))
          }), f ? h ? t.css("display", "") : t.show() : f = !0
        })
      } else {
        if (a.hide(), r.html("登录").css("display", ""), o.html("注册").css("display", ""), h ? t.css("display", "") : t.show(), n) {
          var U = n.attr("defaultSrc");
          n.attr("src", U)
        }
        s.hide(), l.hide()
      }
    }, doLoginDelegate: function (e) {
      e = Q.event.get(e.event || window.event), e.preventDefault(), f.show();
      var t = Q.$(e.target || e.srcElement || e.currentTarget), n = t.attr("j-pingback");
      n && r(function (e) {
        var t = {
          type: "phtr2divstat20121204",
          jsuid: Q.cookie.get("QC006"),
          flshuid: Q.cookie.get("QC005"),
          weid: e,
          pru: Q.cookie.get("P00PRU") || "",
          ppuid: i.getUid()
        };
        n = n.split(";");
        for (var a = null, r = 0, o = n.length; o > r; r++)a = n[r].split(":"), t[a[0]] = a[1];
        Q.log.server(t, "http://msg.71.am/tmpstats.gif")
      })
    }, doRegisterDelegate: function (e) {
      e = Q.event.get(e.event || window.event), e.preventDefault(), U.show();
      var t = Q.$(e.currentTarget || e.target || e.srcElement), n = t.attr("j-pingback");
      n && r(function (e) {
        var t = {
          type: "phtr2divstat20121204",
          jsuid: Q.cookie.get("QC006"),
          flshuid: Q.cookie.get("QC005"),
          weid: e,
          pru: Q.cookie.get("P00PRU") || "",
          ppuid: i.getUid()
        };
        n = n.split(";");
        for (var a = null, r = 0, o = n.length; o > r; r++)a = n[r].split(":"), t[a[0]] = a[1];
        Q.log.server(t, "http://msg.71.am/tmpstats.gif")
      })
    }, _setPingBack: function (e) {
      var t = {platform: 10, p1: 101, t: 20, rn: Math.random(), p: 10, pf: 1, u: Q.cookie.get("QC005"), rseat: e};
      Q.log.server(t, "http://msg.71.am/b")
    }, _sendPingBack: function (e) {
      var t = {t: 21, rn: Math.random(), p: 10, pf: 1, p1: 101, bstp: 0, u: Q.cookie.get("QC005") || "", block: e};
      Q.log.server(t, "http://msg.71.am/b")
    }
  }), t.add(g)
});
define("../../kit/validate", [], function (e, t, n) {
  var i = {
    empty: function (e) {
      return !!e.trim()
    }, mail: function (e) {
      return /^[0-9a-zA-Z_][-_\.0-9a-zA-Z-]{0,31}@([0-9a-zA-Z][0-9a-zA-Z-]*\.)+[a-zA-Z]{2,4}$/.test(e.trim())
    }, newMail: function (e) {
      var t = e.replace(/(^\s*)|(\s*$)/g, "");
      return /^[0-9a-zA-Z_][-_\.0-9a-zA-Z-]{0,31}@([0-9a-zA-Z][0-9a-zA-Z-]*\.)+[a-zA-Z]{2,4}$/.test(t)
    }, oldPwd: function (e) {
      return /^[A-Za-z0-9_\!@#\$%\^&\*\(\)_\+=|<>,\.{}:;\]\[\~\/\?\"'\\-]{4,20}$/.test(e.trim())
    }, pwd: function (e) {
      var t = /^(?![0-9]+$)(?![a-zA-Z]+$)(?![_\!@#\$%\^&\*\(\)_\+=|<>,\.{}:;\]\[\~\/\?\"'\\-]+$)[A-Za-z0-9_\!@#\$%\^&\*\(\)_\+=|<>,\.{}:;\]\[\~\/\?\"'\\-]{8,20}$/;
      return t.test(e.trim())
    }, specialPwd: function (e) {
      return /^[A-Za-z0-9_\!@#\$%\^&\*\(\)_\+=|<>,\.{}:;\]\[\~\/\?\"'\\-]{0,}$/.test(e)
    }, mobile: function (e) {
      return /^(1\d{10})$/.test(e.trim())
    }, len: function (e, t, n) {
      return new RegExp("^.{" + n + "," + (t || 0) + "}$").test(e)
    }, dwordLen: function (e, t, n) {
      e = e.replace(/[^\x00-\xff]/g, "__");
      var i = Math.ceil(e.length / 2);
      return i >= n && t >= i
    }, ic: function (e) {
      return /(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(e)
    }, nickName: function (e) {
      return /^[\u4e00-\u9fa5a-zA-Z0-9]+[\u4e00-\u9fa5a-zA-Z0-9_\-]*$/.test(e) && Q.string.getLength(e) >= 4 && Q.string.getLength(e) <= 20
    }, number: function (e) {
      return /^\d+(\.\d+)?$/.test(e)
    }, integer: function (e) {
      return /^\d+$/.test(e)
    }, postCode: function (e, t) {
      var n = /^\d{6}$/.test(e);
      return t = t || function () {
        }, t(n), n
    }, telephone: function (e, t) {
      var n = /^((0\d{2,3})-)(\d{7,8})(-(\d{3,9}))?$/, i = n.test(e);
      return t = t || function () {
        }, t(i), i
    }, getIsTooSimple: function (e) {
      if (/^(.)\1*$/.test(e))return !0;
      for (var t = e.length, n = !0, i = 0; t > i; i++)if (i > 0) {
        var a = e.charCodeAt(i) - e.charCodeAt(i - 1);
        if (1 != a && -1 != a) {
          n = !1;
          break
        }
      }
      return n ? !0 : !1
    }, getScore: function (e) {
      for (var t = 0, n = 0, i = 0, a = 0, r = 0, o = e.length, s = "", l = 0; o > l; l++)s = e.charAt(l), t += /\d/.test(s) ? 1 : 0, i += /[A-Z]/.test(s) ? 1 : 0, a += /[a-z]/.test(s) ? 1 : 0, n += /\W/.test(s) ? 1 : 0;
      o > 15 ? r += 25 : o >= 13 && 15 >= o ? r += 10 : o >= 8 && 13 > o && (r += 5);
      var d = i > 0 && a > 0, h = i > 0 && 0 === a, m = a > 0 && 0 === i;
      d ? r += 20 : (h || m) && (r += 10), t >= 1 && 3 > t ? r += 10 : t >= 3 && (r += 20), 1 == n ? r += 10 : n > 1 && (r += 25);
      var c = (i > 0 || a > 0) && t > 0, u = (i > 0 || a > 0) && t > 0 && n > 0, p = i > 0 && a > 0 && t > 0 && n > 0, f = t > 0 && n > 0, U = (i > 0 || a > 0) && n > 0;
      return p ? r += 10 : u ? r += 5 : (c || f || U) && (r += 2), r
    }
  };
  n.exports = i
});
define("../../kit/getWebEventID", [], function (e, t, n) {
  n.exports = function (e) {
    e(window.webEventID || "")
  }
});
define("../../units/history20_pingback", ["../kit/userInfo", "../kit/getWebEventID"], function (e, t) {
  var n = e("../kit/userInfo"), i = e("../kit/getWebEventID");
  t.send = function (e, t) {
    i(function (i) {
      var a = {
        type: "phtr2divstat20121204",
        act: e,
        jsuid: Q.cookie.get("QC006"),
        flshuid: Q.cookie.get("QC005"),
        weid: i,
        pru: Q.cookie.get("P00PRU") || "",
        ppuid: n.getUid() || ""
      };
      Q.browser.iPad && (a.agenttype = 10), Q.log.server(a, "http://msg.71.am/tmpstats.gif"), t && setTimeout(t, 50)
    })
  }
});
define("../../action/pcLoginBox", ["../components/action/adapter", "../config/siteDomain"], function (e, t, n) {
  var i = e("../components/action/adapter"), a = e("../config/siteDomain"), r = Q.event.customEvent;
  n.exports = Q.Class("PcLoginBox", {
    ns: Q.action, extend: i, construct: function (e) {
      this.callsuper(e), this.init(), this.bindEvent()
    }, properties: {timer: null}, methods: {
      init: function () {
      }, bindEvent: function () {
        r.on("login", this._loginSuccess.bind(this)), r.on("login-failed", this._loginFailed.bind(this)), r.on("logout", this._logout.bind(this))
      }, _loginSuccess: function () {
        this._view.resetInput(!0), this._view.resetTips(), this._view.hideCode(), Q.cookie.remove("QC017", {
          path: "/",
          domain: a.SITE_DOMAIN
        })
      }, _loginFailed: function (e) {
        var t = !1;
        (1 == e.data.needCode && "P00141" != e.data.code || "P00107" == e.data.code || "P00117" == e.data.code && "1" == e.data.needCode) && (Q.cookie.set("QC017", "1", {
          path: "/",
          expires: 1e5,
          domain: a.SITE_DOMAIN
        }), this._view.initCode(), t = !0);
        var n = e.data.msg;
        n && this._view.showErrorMsg(n), n.indexOf("验证码") >= 0 ? this._view.doEdit("piccode") : n.indexOf("密码") >= 0 ? this._view.doEdit("passwd") : (n.indexOf("帐号") >= 0 || n.indexOf("邮箱") >= 0 || n.indexOf("手机") >= 0) && this._view.doEdit("email"), !t && this._view.piccodeVisible && this._view.refreshPiccode()
      }, _logout: function () {
        this._view.initLastAccount()
      }, show: function (e) {
        var t = this;
        t.timer && clearTimeout(t.timer), e ? t.timer = setTimeout(function () {
          t._view.show()
        }, e) : t._view.show()
      }, hide: function (e) {
        var t = this;
        t.timer && clearTimeout(t.timer), e ? t.timer = setTimeout(function () {
          t._view.hide()
        }, e) : t._view.hide()
      }, cancelHide: function () {
        var e = this;
        e.timer && e.visible() && clearTimeout(e.timer)
      }, toggle: function (e) {
        var t = this;
        t.timer && clearTimeout(t.timer), e ? t.timer = setTimeout(function () {
          t._view.toggle()
        }, e) : t._view.toggle()
      }, visible: function () {
        return this._view.visible
      }
    }
  })
});
define("../../view/pcLoginBoxView", ["../components/view/view", "../units/history20_pingback", "../kit/pcLogin", "../kit/validate", "../kit/thirdPartLogin", "../kit/thirdPartyBtn", "../kit/pcVCodeKit", "../kit/accountHistory", "../kit/placeholder", "../view/pcBoxViewTpl"], function (e, t, n) {
  var i = e("../components/view/view"), a = e("../units/history20_pingback"), r = e("../kit/pcLogin"), o = e("../kit/validate");
  e("../kit/thirdPartLogin"), e("../kit/thirdPartyBtn");
  var s, l = e("../kit/pcVCodeKit"), d = e("../kit/accountHistory"), h = e("../kit/placeholder").simulate, m = e("../view/pcBoxViewTpl"), c = Q.event.customEvent, u = function (e, t, n) {
    e && e.on && e.on(t, n)
  }, p = "<span></span>", f = window.location.href;
  (f.indexOf("7daystrial1cent.html") >= 0 || f.indexOf("landingpage.html") >= 0 || f.indexOf("pages/secure") >= 0) && (p = " "), n.exports = Q.Class("PcLoginBoxView", {
    ns: Q.view,
    extend: i,
    construct: function (e, t) {
      this._doms = e || {}, this._opt = Q.object.extend({
        defaultTxt: p,
        initStatus: "hide",
        alreadyRendered: !1,
        inputFocusClass: "acountIn",
        autoLoginBtnSelectedClass: "selected",
        switchToQrCodeLoginRseat: "140711_tdenter_navlgin",
        returnFromQrCodeLoginRseat: "140711_bknavlgin"
      }, t), this.piccodeVisible = !1, this.visible = !0, this.domReady = !1
    },
    methods: {
      init: function () {
        "hide" === this._opt.initStatus ? this.hide() : this._opt.alreadyRendered && (this.initLoginPanel(), this.resetTips())
      }, show: function () {
        this.visible || (this.domReady || this.initLoginPanel(), this.resetInput(!1), this.resetTips("all"), c.fire({
          type: "beforePcLoginBoxShow",
          data: {wrapper: this._doms.wrapper}
        }), this._doms.wrapper.show(), this._doms.table.show(), this._doms.qrcodeLoginDoms && this._doms.qrcodeLoginDoms.widget && this._doms.qrcodeLoginDoms.widget.hide(), this.visible = !0, this._doms.bg && this._doms.main && this._doms.bg.css("height", this._doms.main.height() - 2 + "px"), a.send("logindivshow"), c.fire({
          type: "pcLoginBoxShow",
          data: {wrapper: this._doms.wrapper}
        }))
      }, hide: function () {
        this.visible && (this.domReady && (this.resetInput(!1), this.resetTips()), c.fire({
          type: "beforePcLoginBoxHide",
          data: {wrapper: this._doms.wrapper}
        }), this._doms.wrapper.hide(), this.visible = !1, c.fire({
          type: "pcLoginBoxHide",
          data: {wrapper: this._doms.wrapper}
        }))
      }, toggle: function () {
        this.visible ? this.hide() : this.show()
      }, initLoginPanel: function () {
        this._rendererPanel(), this.initLastAccount(), this._bindEvent(), this.domReady = !0
      }, _rendererPanel: function () {
        var e = m.getLoginTpl(this._opt), t = this._doms, n = t.wrapper;
        if (n) {
          this._opt.alreadyRendered || n.html(e), (n.down("[data-loginbox-elem]") || []).forEach(function (e) {
            e = Q.$(e), t[e.attr("data-loginbox-elem")] = e
          }), t.inputs = {}, t.wraps = {};
          var i = 1;
          ["email", "passwd", "piccode"].forEach(function (e) {
            t[e + "Input"].attr("tabindex", i), i++, t.inputs[e] = h(t[e + "Input"], {tipColor: "#333"}), t.wraps[e] = t[e + "Wrap"]
          }), 1 == Q.cookie.get("QC017") && this.initCode(), this.domReady = !0, c.fire({
            type: "pcUserLoginDomReady",
            data: {wrapper: t.loginMailSuggest, html: e, input: this._doms.inputs.email}
          });
          var a = {widget: n.down("[data-widget-qrcodelogin]")};
          a.widget && ((a.widget.down("[data-qrcodelogin-elem]") || []).forEach(function (e) {
            e = Q.$(e), a[e.attr("data-qrcodelogin-elem")] = e
          }), t.qrcodeLoginDoms = a, c.fire({
            type: "qrcodeLoginDomReady",
            data: {widget: a.widget, qrcodeLoginDoms: a}
          }))
        }
      }, _bindEvent: function () {
        var e = this, t = this._doms;
        Q.object.forEach(t.inputs, function (n, i) {
          if (n) {
            var a = t.wraps[i];
            n.on("focus", function () {
              (a || n).addClass(e._opt.inputFocusClass), c.fire({type: "loginInputBegin", data: {input: n}})
            }), n.on("blur", function () {
              (a || n).removeClass(e._opt.inputFocusClass), e._doms.wrapper.down("input:focus") || c.fire({
                type: "loginInputEnd",
                data: {lastInput: n}
              })
            }), "email" !== i && n.on("keydown", function (t) {
              13 == t.keyCode && (Q.event.get(t).preventDefault(), e.doLogin())
            })
          }
        }), c.on("mailSuggestHide", function (e) {
          e.data.input[0] === t.inputs.email[0] && t.inputs.passwd[0].focus()
        });
        var n = t.autoLogin;
        if (u(n, "click", function () {
            n.hasClass(e._opt.autoLoginBtnSelectedClass) ? n.removeClass(e._opt.autoLoginBtnSelectedClass) : n.addClass(e._opt.autoLoginBtnSelectedClass)
          }), u(t.refreshPiccode, "click", function (t) {
            Q.event.get(t).preventDefault(), e.refreshPiccode()
          }), u(t.piccode, "click", function (t) {
            Q.event.get(t).preventDefault(), setTimeout(function () {
              e.refreshPiccode()
            }, 0)
          }), u(t.loginBtn, "click", function (t) {
            Q.event.get(t).preventDefault(), e.doLogin()
          }), t.piccodeInput.on("focus", function () {
            s != t.piccode.down("img").attr("src") && e.refreshPiccode()
          }), t.wrapper.delegate("authLoginBtn", function (e) {
            Q.event.get(e.event).preventDefault();
            var t = Q.$(e.target), n = t.attr("data-sourceId");
            "29" == n ? a.send("weixinclk") : "2" == n ? a.send("weiboclk") : "4" == n ? a.send("qqclk") : a.send("extendclk")
          }), t.switchToQrCodeLogin) {
          var i = "showFormLoginFloater";
          t.switchToQrCodeLogin.attr("rseat", e._opt.switchToQrCodeLoginRseat), Q.browser.IE6 && (t.switchToQrCodeLogin[0].setAttribute("tabindex", -1), t.switchToQrCodeLogin[0].setAttribute("tabIndex", -1));
          var r = function (n) {
            !t.formLoginWrapper && !t.table || t.qrCodeLogin1 || (t.formLoginWrapper || t.table).hide(), n = Q.object.extend({
              qrcodeLoginDoms: t.qrcodeLoginDoms,
              returnBtnRseat: e._opt.returnFromQrCodeLoginRseat
            }, n), c.fire({type: "showQrCodeLoginFloater", data: n})
          };
          t.switchToQrCodeLogin.on("click", function () {
            var e = Q.$("[data-loginbox-elem=qrCodeLogin1]"), t = Q.$("[data-loginbox-elem=qrCodeLogin2]");
            e && t && e.hasClass("dn") && (t.addClass("dn"), e.removeClass("dn")), r({returnEventName: i})
          }), c.on("qrCodeImgEffective", function () {
            t.qrCodeLogin1 && r({returnEventName: "showFormLoginFloater"})
          }), c.on("showFormLoginFloaterFromRegist", function (e) {
            r(e.data)
          }), c.on(i, function () {
            (t.formLoginWrapper || t.table) && (t.formLoginWrapper || t.table).show()
          })
        }
      }, doEdit: function (e) {
        e = this._doms.inputs[e], e && (e = e[0], setTimeout(function () {
          e.focus(), e.select()
        }, 0))
      }, doLogin: function () {
        var e = this.getLoginData();
        e._pos = this._opt._pos || 1, this.validate(null, e) && r.login({
          param: e,
          method: "POST"
        }), a.send("loginbtnclk")
      }, getLoginData: function () {
        var e = this._doms, t = {
          email: e.inputs.email && e.inputs.email.value(),
          passwd: e.inputs.email && e.inputs.passwd.value().trim(),
          agenttype: 1,
          from: e.wrapper && e.wrapper.attr("data-from"),
          keeplogin: e.autoLogin.hasClass("selected") ? 1 : 0,
          piccode: this.piccodeVisible ? e.inputs.piccode.value().trim() : "",
          fromurl: ""
        };
        return t
      }, initLastAccount: function () {
        var e = d.get()[0];
        e && this._doms.inputs.email.value(e)
      }, resetInput: function (e) {
        var t = this._doms.inputs;
        e && t.email.value(""), t.passwd.value(""), t.piccode.value("")
      }, resetTips: function () {
        this.showErrorMsg()
      }, _setPiccodeVisible: function () {
        var e = this._doms;
        e.piccodeTr.css("display", ""), e.refreshPiccodeWrapper.css("display", ""), this.piccodeVisible = !0;
        var t = e.wrapper.down("[data-loginbox-elem='table']");
        t && t.addClass("box_v3AddCode")
      }, refreshPiccode: function () {
        s = l.getVcode(), this._doms.piccode.html("<img src='" + s + "'/> ")
      }, initCode: function () {
        this.piccodeVisible || this._setPiccodeVisible(), this.refreshPiccode()
      }, hideCode: function () {
        var e = this._doms;
        e.piccodeTr.css("display", "none"), e.refreshPiccodeWrapper.css("display", "none"), this.piccodeVisible = !1;
        var t = e.wrapper.down("[data-loginbox-elem='table']");
        t && t.removeClass("box_v3AddCode")
      }, validate: function (e, t) {
        return t = t || this.getLoginData(), e && "email" !== e || o.empty(t.email) ? e && "passwd" !== e || o.empty(t.passwd) ? e && "piccode" !== e || !this.piccodeVisible || o.empty(t.piccode) ? (this.showErrorMsg(), !0) : (this.showErrorMsg("验证码错误"), e || this.doEdit("piccode"), !1) : (this.showErrorMsg("密码错误"), e || this.doEdit("passwd"), !1) : (this.showErrorMsg("手机/邮箱格式错误"), e || this.doEdit("email"), !1)
      }, showErrorMsg: function (e) {
        this._doms.errDom && this._doms.errDom.html(e || this._opt.defaultTxt)
      }
    }
  })
});
define("../../kit/thirdPartLogin", ["../kit/snsWindowKit", "../kit/userInfo", "../kit/iframeLocation"], function (e, t, n) {
  function i(e) {
    r.setIsThirdParty(!0), Q.event.customEvent.fire({
      type: "login",
      data: e
    }), a.close(), e && Q.url.isUrl(e) && setTimeout(function () {
      o.href(e)
    }, 1e3)
  }

  var a = e("../kit/snsWindowKit"), r = e("../kit/userInfo"), o = e("../kit/iframeLocation");
  window.lib = window.lib || {}, window.lib.__callbacks__ = window.lib.__callbacks__ || {};
  var s = {
    _oAuthSuccess: lib.__callbacks__._oAuthSuccess || function () {
    }, _oAuthError: lib.__callbacks__._oAuthError || function () {
    }
  };
  lib.__callbacks__._oAuthSuccess = function (e) {
    if (e && e.code && "A00055" == e.code) {
      var t = "http://passport.iqiyi.com/apis/secure/verify_account.action";
      r.setIsThirdParty(!0), window.location.href = t, a.close()
    } else e && "1" == e.newUser ? (Q.event.customEvent.fire({
      type: "thirdTypeBind",
      data: {newUser: e.newUser, type: e.type, icon: e.icon, name: e.nickname}
    }), a.close()) : (i(e), s._oAuthSuccess(e))
  }, lib.__callbacks__._oAuthError = function (e) {
    s._oAuthError(e)
  }, lib.__callbacks__._bindSnsSuccess = function (e) {
    a.close(), Q.event.customEvent.fire({type: "thirdPartSnsBinded", data: d["_" + e]})
  };
  var l = {
    _1: "baidu",
    _2: "sina",
    _3: "renren",
    _4: "qweibo",
    _5: "zhifubao",
    _6: "kaixin",
    _30: "xiaomi",
    _31: "jingdong",
    _29: "weixin",
    _28: "facebook",
    _32: "google"
  }, d = {
    _1: "sina",
    _2: "qzone",
    _3: "qweibo",
    _4: "renren",
    _5: "baidu",
    _6: "kaixin",
    _7: "zhifubao",
    _28: "facebook",
    _32: "google"
  };
  n.exports = {
    show: function (e, t) {
      var n = l["_" + e];
      n ? a.open(n, t) : a.open(e, t)
    }
  }
});
define("../../kit/snsWindowKit", [], function (e, t, n) {
  var i, a = {
    wbVeri: {w: 600, h: 400},
    sina: {w: 600, h: 400},
    weibo: {w: 600, h: 400},
    qqVeri: {w: 600, h: 400},
    qzone: {w: 600, h: 400},
    qweibo: {w: 600, h: 400},
    rrVeri: {w: 420, h: 320},
    renren: {w: 420, h: 320},
    bdVeri: {w: 600, h: 400},
    baidu: {w: 600, h: 400},
    xiaomi: {w: 900, h: 685},
    jingdong: {w: 900, h: 685},
    kaixin: {w: 600, h: 400},
    alipay_wallet: {w: 600, h: 400},
    zhifubao: {w: 650, h: 620},
    kxVeri: {w: 600, h: 400},
    weixin: {w: 500, h: 470},
    facebook: {w: 900, h: 685},
    google: {w: 650, h: 620}
  };
  n.exports = {
    open: function (e, t) {
      var n = a[e];
      Q.page.getViewWidth(), Q.page.getViewHeight(), n.l = window.screenX + (window.screen.width - n.w) / 2, n.t = window.screenY + (window.screen.height - n.h) / 2, i = window.open(t, "newwindow", "height=" + n.h + ",width=" + n.w + ",top=" + n.t + ",left=" + n.l + ",toolbar=no,menubar=no,scrollbars=no, resizable=no,location=yes, status=no"), i || alert("请允许弹窗验证窗体。")
    }, close: function () {
      i && i.close()
    }
  }
});
define("../../kit/iframeLocation", [], function (e, t, n) {
  function i() {
    var e = window.self != window.top, t = null;
    e && (t = document.referrer);
    var n = location.href;
    return s() && (n = l()), t || n
  }

  var a = ["baidu.com", "139life.com"], r = [], o = function (e) {
    var t, n = a.length, i = r.length, o = !1;
    for (t = 0; n > t; t++)-1 != e.indexOf(a[t]) && (o = !0);
    if (o)for (t = 0; i > t; t++)-1 != e.indexOf(r[t]) && (o = !1);
    return o
  }, s = function () {
    var e = !1, t = document.referrer;
    if (t)for (var n = 0; n < a.length; n++)if (-1 != t.indexOf(a[n])) {
      e = !0;
      break
    }
    return e
  }, l = function () {
    for (var e = location.href, t = 0; t < a.length; t++)if (-1 != e.indexOf(a[t])) {
      e = location.origin + location.pathname;
      break
    }
    return e
  };
  n.exports = {
    test: o, check: function () {
      return o(i())
    }, url: i, href: function (e, t) {
      this.check() ? window.open(e) : t ? (t = t || {}, setTimeout(function () {
        window.location.href = e
      }, t.time || 0)) : window.location.href = e
    }
  }
});
define("../../kit/thirdPartyBtn", ["../config/siteDomain"], function (e, t, n) {
  var i = e("../config/siteDomain"), a = i.getDomain(), r = '<a title="${title}" href="${href}" class="${class}" data-sourceId="${source}" j-delegate="${auth}" rseat="${rseat}"> </a>', o = new Q.plugins.Template(r), s = function (e, t) {
    return o.evaluate({
      title: "微信",
      "class": t || "weixin",
      source: "29",
      href: "http://passport." + a + "/apis/thirdparty/nlogin.action?type=29&isiframe=1&_pos=1&agenttype=1" + (e ? "&requestType=1" : ""),
      auth: "authLoginBtn"
    })
  }, l = function (e, t) {
    return o.evaluate({
      title: "微博",
      "class": t || "sinaweibo",
      source: "2",
      href: "http://passport." + a + "/apis/thirdparty/nlogin.action?type=2&isiframe=1&_pos=1&agenttype=1" + (e ? "&requestType=1" : ""),
      auth: "authLoginBtn"
    })
  }, d = function (e, t) {
    return o.evaluate({
      title: "QQ",
      "class": t || "qq",
      source: "4",
      href: "http://passport." + a + "/apis/thirdparty/nlogin.action?type=4&isiframe=1&_pos=1&agenttype=1" + (e ? "&requestType=1" : ""),
      auth: "authLoginBtn"
    })
  }, h = function (e, t) {
    return o.evaluate({
      title: "百度",
      "class": t || "baidu",
      source: "1",
      href: "http://passport." + a + "/apis/thirdparty/nlogin.action?type=1&isiframe=1&_pos=1&agenttype=1" + (e ? "&requestType=1" : ""),
      auth: "authLoginBtn"
    })
  }, m = function (e, t) {
    return o.evaluate({
      title: "小米",
      "class": t || "xiaomi",
      source: "30",
      href: "http://passport." + a + "/apis/thirdparty/nlogin.action?type=30&isiframe=1&_pos=1&agenttype=1" + (e ? "&requestType=1" : ""),
      auth: "authLoginBtn",
      rseat: "1503171_mi"
    })
  }, c = function (e, t) {
    return o.evaluate({
      title: "京东",
      "class": t || "jd",
      source: "31",
      href: "http://passport." + a + "/apis/thirdparty/nlogin.action?type=31&isiframe=1&_pos=1&agenttype=1" + (e ? "&requestType=1" : ""),
      auth: "authLoginBtn",
      rseat: "508031_1"
    })
  }, u = function (e, t) {
    return o.evaluate({
      title: "人人",
      "class": t || "renren",
      source: "3",
      href: "http://passport." + a + "/apis/thirdparty/nlogin.action?type=3&isiframe=1&_pos=1&agenttype=1" + (e ? "&requestType=1" : ""),
      auth: "authLoginBtn"
    })
  }, p = function (e, t) {
    return o.evaluate({
      title: "开心",
      "class": t || "kaixin",
      source: "6",
      href: "http://passport." + a + "/apis/thirdparty/nlogin.action?type=6&isiframe=1&_pos=1&agenttype=1" + (e ? "&requestType=1" : ""),
      auth: "authLoginBtn"
    })
  }, f = function (e, t) {
    return o.evaluate({
      title: "支付宝",
      "class": t || "zhifubao",
      source: "5",
      href: "http://passport." + a + "/apis/thirdparty/nlogin.action?type=5&isiframe=1&_pos=1&agenttype=1" + (e ? "&requestType=1" : ""),
      auth: "authLoginBtn"
    })
  };
  n.exports = {weixin: s, weibo: l, qq: d, baidu: h, xiaomi: m, jingdong: c, renren: u, kaixin: p, zhifubao: f}
});
define("../../kit/pcVCodeKit", ["../config/siteDomain"], function (e, t, n) {
  var i = e("../config/siteDomain");
  n.exports = {
    getVcode: function () {
      var e = window.location.protocol + "//passport." + i.getDomain() + "/register/vcode.php?r=" + Math.random();
      return Q.event.customEvent.fire({type: "vcodechange", data: {url: e}}), e
    }
  }
});
define("../../kit/accountHistory", ["./userInfo", "./validate"], function (e, t, n) {
  var i = e("./userInfo"), a = e("./validate"), r = "QC116", o = 3, s = 31536e6, l = function () {
    return (Q.cookie.get(r) || "").split("|").filter(function (e) {
      return e
    })
  }, d = function (e) {
    Q.cookie.set(r, e.slice(0, o).join("|"), {path: "/", domain: "iqiyi.com", expires: s})
  }, h = function (e) {
    if (!i.getIsThirdParty() || a.empty(e)) {
      m(e);
      var t = l();
      t.unshift(e), d(t)
    }
  }, m = function (e) {
    var t, n = l();
    (t = n.indexOf(e)) >= 0 && (n.splice(t, 1), d(n))
  };
  Q.event.customEvent.on("login", function (e) {
    if ("login" == e.type && e.data && "registed" != e.data.type) {
      var t = e.data && e.data._loginName;
      t || (t = i.getEmail()), h(t)
    }
  }), Q.event.customEvent.on("registed", function (e) {
    if ("registed" == e.type) {
      var t = e.data && e.data._loginName;
      h(t)
    }
  }), n.exports = {get: l, add: h, remove: m}
});
define("../../kit/placeholder", [], function (e, t, n) {
  var i, a;
  n.exports = {
    unBind: function (e) {
      i && e.un("focus", i), a && e.un("blur", a)
    }, simulate: function (e, t) {
      if (e = Q.$(e), t = t || {}, Q.browser.IE6 || Q.browser.IE7 || Q.browser.IE8 || Q.browser.IE9) {
        var n = e.attr("placeholder") || t.placeholder, r = e.attr("type"), o = t.tipColor || "#999", s = t.valColor || "#333", l = e.attr("tabindex");
        if (n)switch (n += "   ", r) {
          case"password":
            var d = Q.$(document.createElement("input"));
            d[0].className = e[0].className, d.attr("type", "text"), d.value(n), d.css("color", o), d.hide(), d.attr("tabindex", "-1"), e.parent().insertBefore(d, e), d.on("focus", function () {
              d.hide(), e.css("display", ""), e[0].focus(), e.attr("tabindex", l), d.attr("tabindex", -1)
            }), e.on("blur", function () {
              e.__value() || (e.hide(), d.css("display", ""), e.attr("tabindex", -1), d.attr("tabindex", l))
            }), e.__value = e.value, e.value = function (t) {
              if (arguments.length < 1)return this.__value();
              var n = this.__value(t);
              return this.__value() ? (d.hide(), e.css("display", ""), e.attr("tabindex", l), d.attr("tabindex", -1)) : (e.hide(), d.css("display", ""), e.attr("tabindex", -1), d.attr("tabindex", l)), n
            };
            var h = e[0];
            h.__focus = h.focus, h.focus = function () {
              d.hide(), e.css("display", ""), h.__focus();
              var t = h.value.length;
              if (h.createTextRange) {
                var n = h.createTextRange();
                n.move("character", t), n.collapse(), n.select()
              } else h.setSelectionRange(0, t), h.__focus()
            }, e.__value() || (e.hide(), d.css("display", ""), e.attr("tabindex", "-1"), d.attr("tabindex", l));
            break;
          default:
            e.__value = e.value, e.value = function (t) {
              if ("undefined" == typeof t)return t = this.__value(), t === n ? "" : t;
              var i = this.__value(t);
              return this.__value() ? e.css("color", s) : (e.__value(n), e.css("color", o)), i
            }, i = function () {
              e.__value() === n && (e.__value(""), e.css("color", s))
            }, e.on("focus", i), a = function () {
              e.__value() || (e.__value(n), e.css("color", o))
            }, e.on("blur", a), e.__value() || (e.__value(n), e.css("color", o))
        }
      }
      return e
    }
  }
});
define("../../view/pcBoxViewTpl", ["../kit/thirdPartyBtn", "../config/siteDomain"], function (e, t, n) {
  var i = e("../kit/thirdPartyBtn"), a = e("../config/siteDomain"), r = {
    getLoginTpl: function (e) {
      var t = '<i class="nav_arrow"></i>', n = "爱奇艺", r = "http://passport.iqiyi.com/pages/secure/password/find_pwd_index.action";
      a.isPPS() && (n = "PPS");
      var o = "登录爱奇艺，悦享品质生活";
      e.isVlib && (o = "爱奇艺影视大全，覆盖全网更新最快");
      var s = ['<div class="usrTxGeneral-box usrTx-box_popup usrTx-login-box" data-loginbox-elem="main">' + t, '<div class="userLogin-title">', "<h2>" + o + "</h2>", "</div>", '<div data-loginbox-elem="table" class="usrTxGeneral-box_v3" style="display: block;">', '<div class="mailType-box-login" style="display:none ;" data-loginbox-elem="loginMailSuggest">', '<ul class="mailType-list">', '<li data-mailsuggest-elem="item" data-index="0">请选择或继续输入...</li>', '<li data-mailsuggest-elem="item" data-index="1" class="selected">qiyiria@gmail.com</li>', "</ul>", "</div>", '<div class="logReg-form">', '<div data-loginbox-elem="errDom" class="errorArea"><span class="mobile-tips"></span></div>', '<table class="tabs-regRorm notest-tabs" data-loginbox-elem="loginTable">', "<tbody>", '<tr data-loginbox-elem="emailTr">', "<th>帐&nbsp;&nbsp;&nbsp;号：</th>", "<td>", '<div data-loginbox-elem="emailWrap" class="acountBorder">', '<input type="text" placeholder="请输入手机/邮箱" class="in-txt" data-loginbox-elem="emailInput" tabindex="1">', '<a title="爱奇艺手机APP扫二维码登录" data-loginbox-elem="switchToQrCodeLogin" class="iqyCode-mini" href="javascript:;" rseat="140711_tdenter_navlgin"></a>', "</div>", "</td>", "</tr>", '<tr data-loginbox-elem="passwdTr">', "<th>密&nbsp;&nbsp;&nbsp;码：</th>", "<td>", '<div data-loginbox-elem="passwdWrap" class="acountBorder">', '<input type="password" placeholder="请输入密码" data-loginbox-elem="passwdInput" class="in-txt" tabindex="2">', "</div>", "</td>", "</tr>", '<tr style="display:none;" data-loginbox-elem="piccodeTr">', "<th></th>", "<td>", '<div class="acountCode acountBorder acountYzm" data-loginbox-elem="piccodeWrap">', '<input placeholder="请输入验证码" class="in-txt" data-loginbox-elem="piccodeInput" tabindex="3" type="text">', '<span class="in-xline"></span><span class="yzimg" data-loginbox-elem="piccode">', "</span>", "</div>", '<a class="refreshContent" href="javascript" data-loginbox-elem="refreshPiccodeWrapper">', '<i class="loginIcon refreshIcon" data-loginbox-elem="refreshPiccode"></i>', "</a> ", "</td>", "</tr>", "<tr>", "<th></th>", '<td class="pb16"><div data-loginbox-elem="autoLoginWrap" class="itemregLast">', '<div class="logAuto"><span data-loginbox-elem="autoLogin" class="selected">记住我</span></div>', '<div class="logAutoRightCon">', '<a href="' + r + '">找回密码</a>', '<i class="RegNowLine"></i>', '<a class="" href="javascript:void(0)" j-delegate="registerscroll" rseat="1412242_rgn">立即注册</a>', "</div>", "</div></td>", "</tr>", "<tr>", "<th></th>", '<td class="pb0"><div class="login_submitV3"><a data-loginbox-elem="loginBtn" class="submitV3Btn" rseat="1412242_lgn" href="#">登录</a></div></td>', "</tr>", '<tr class="cooperation-account">', "<th></th>", '<td class="pb0">', '<div class="divide-line-ico">', '<a class="J_pop-third-downbtn" href="javascript:void(0)">', "使用其他方式登录", '<div class="divide-line-con">', '<i class="loginIcon arrowDown"></i>', "</div>", "</a> ", '<div class="arrowUpCon dn J_pop-third-box">', '<div class="otherBind-big clearfix">', i.weibo(null, "loginIcon weibo"), i.qq(null, "loginIcon qq"), i.weixin(null, "loginIcon weixin"), i.baidu(null, "loginIcon baidu"), i.zhifubao(null, "loginIcon zhifubao"), i.renren(null, "loginIcon renren"), i.xiaomi(null, "loginIcon xiaomi"), i.jingdong(null, "loginIcon jd"), "</div>", '<div class="divide-line-con">', '<a href="javascript:void(0)" class="J_pop-third-upbtn">', '<i class="loginIcon arrowUp"></i>', "</a>", "</div>", "</div>", "</div>", "</td>", "</tr>", "</tbody>", "</table>", "</div>", "</div>", '<div class="iqyNav-code" data-widget-qrcodelogin="qrCodeLogin" style="display:none;">', '<div class="iqyCode-wrap">', '<div class="iqyCode-bd clearfix">', '<div class="iqyCode-lt">', '<p class="p-txt1">扫描二维码登录</p>', '<p class="p-txt2">使用爱奇艺手机APP"扫一扫"</p>', '<p class="p-txt2">用手机帐号同步在电脑登录</p>', '<p class="p-tipPic">', '<img width="119" height="108" src="http://www.qiyipic.com/common/fix/site/code-pic-small.png">', "</p>", "</div>", '<div class="iqyCode-rt">', '<p class="return-web"><a class="green" href="javascript:;" data-qrcodelogin-elem="returnBtn">返回&gt;</a></p>', '<div style="display:;" class="iqyCode-container"  data-qrcodelogin-elem="loadedWrapper">', '<p class="iqyCode-pic" data-qrcodelogin-elem="qrcodeImgCon">', '<img width="135" height="135" src="http://www.qiyipic.com/common/fix/site/iqyCode-small.jpg" data-qrcodelogin-elem="qrcodeImg">', "</p>", '<p class="updateCode">', '<em class="green" data-qrcodelogin-elem="refreshTimerNum">60</em>秒后为您更新二维码', "</p>", "</div>", '<div style="display:none" class="codeBorder suc-login-tip" data-qrcodelogin-elem="loginSuccessWrapper">', '<span class="suc-txt green">您已成功登录！</span>', "</div>", '<div class="getcodePic-con" style="display:none;" data-qrcodelogin-elem="loadingWrapper">', '<div class="codeBorder getcodePic">', '<div class="getCode-bd">', '<p><img src="http://www.qiyipic.com/common/images/load.gif"></p>', '<span class="getIngTxt">正在获取...</span>', "</div>", "</div>", '<p class="updateCode">', '<em class="green">60</em>秒后为您更新二维码', "</p>", "</div>", '<div class="codeBorder getCode-error" style="display:none" data-qrcodelogin-elem="loadFailWrapper">', "<i></i>", '<div class="againGet">', "<p>获取二维码失败</p>", '<p>请<a href="javascript:;" data-qrcodelogin-elem="reloadBtn">点击此处重试</a></p>', "</div>", "</div>", "</div>", "</div>", "</div>", "</div>", "</div>"].join("");
      return s
    }, getRegistTpl: function () {
      var e = '<i class="nav_arrow"></i>', t = "爱奇艺", n = "http://passport.iqiyi.com/register/protocol.php", r = "《用户服务协议》";
      a.isPPS() && (t = "PPS", n = "http://passport.iqiyi.com/pages/register/ppsprotocol.action", r = "《用户服务协议》");
      var o = ['<div class="usrTxGeneral-box usrTx-box_popup usrTx-login-box" data-registbox-elem="main">' + e, '<div class="userLogin-title">', "<h2>登录爱奇艺，悦享品质生活</h2>", "</div>", '<div data-registbox-elem="registpanel" class="usrTxGeneral-box_v3 box_v3AddCode" style="display: block;">', '<div class="mailType-box-login" style="display: none;" data-registbox-elem="loginMailSuggest">', '<ul class="mailType-list">', '<li data-mailsuggest-elem="item" data-index="0">请选择或继续输入...</li>', '<li data-mailsuggest-elem="item" data-index="1" class="selected">qiyiria@gmail.com</li>', "</ul>", "</div>", '<div class="logReg-form">', '<div data-registbox-elem="errDom" class="errorArea">', "<span></span>", '<span class="dn">帐号或密码错误</span>', '<span class="dn">密码已错误X次，再输错X次帐号将被锁定24小时</span>', '<span class="dn">密码错误已达10次，请24小时后再试或<a href="#">找回密码</a></span>', "</div>", '<table class="tabs-regRorm notest-tabs" data-registbox-elem="loginTable">', "<tbody>", '<tr data-registbox-elem="emailTr" class="J_account-tr" data-type="phone">', '<th class="J_account-title">手&nbsp;&nbsp;&nbsp;机：</th>', "<td>", '<div data-registbox-elem="emailWrap" class="acountBorder fl">', '<input type="text" placeholder="请输入手机号码" class="in-txt J_account-inp" data-registbox-elem="emailInput" tabindex="1">', '<span class="emailReg">', '<a href="javascript:void(0)" class="J_account-btn">邮箱注册</a>', "</span>", "</div>", "</td>", "</tr>", '<tr data-registbox-elem="passwdTr">', "<th>密&nbsp;&nbsp;&nbsp;码：</th>", "<td>", '<div data-registbox-elem="passwdWrap" class="acountBorder fl">', '<input type="password" placeholder="8~20位字母、数字或字符，至少包含两种" data-registbox-elem="passwdInput" class="in-txt" tabindex="2">', "</div>", '<div class="mod-passwordStrength dn passwordStrength_level1"  data-registbox-elem="pwdstrong">', '<div class="passwordStrength_results">', '<span class="strengthResult_1">弱</span>', '<span class="strengthResult_2">中</span>', '<span class="strengthResult_3">强</span>', "</div>", '<div class="passwordStrength">', '<div class="passwordStrength_blocks">', '<span class="strengthBlock_1"></span>', '<span class="strengthBlock_2"></span>', '<span class="strengthBlock_3"></span>', "</div>", "</div>", "</div>", "</td>", "</tr>", '<tr style="display:;" data-registbox-elem="piccodeTr">', "<th></th>", "<td>", '<div class="acountCode acountBorder fl J_pic-code-box" data-registbox-elem="piccodeWrap">', '<input placeholder="请输入验证码" class="in-txt" data-registbox-elem="piccodeInput" tabindex="3" type="text">', '<span class="in-xline dn J_line-icon"></span>', '<span class="yzimg J_pic-code dn" data-registbox-elem="piccode">', "</span>", '<span class="free-yzm-get" data-registbox-elem="sms">', '<a href="" data-registbox-elem="getSms">免费获取短信</a>', '<span class="getSms_already" data-registbox-elem="timer" style="display:none;">', '<span data-registbox-elem="timerNum"></span>秒后重新获得', "</span>", "</span>", "</div>", '<a class="refreshContent dn J_pic-code-btn" href="javascript:void(0)" data-registbox-elem="refreshPiccodeWrapper">', '<i class="loginIcon refreshIcon" data-registbox-elem="refreshPiccode"></i>', "</a>", "</td>", "</tr>", "<tr>", "<th></th>", "<td>", '<div data-registbox-elem="autoLoginWrap" class="itemregLast">', '<div class="logAuto">', '<span data-registbox-elem="protocol" class="selected">我同意<a href="' + n + '">' + r + "</a>", "</span>", "</div>", '<div class="logAutoRightCon">', '<a href="#" j-delegate="loginscroll" rseat="1411201_lgn">立即登录</a>', "</div>", "</div>", "</td>", "</tr>", "<tr>", "<th></th>", '<td class="pb0">', '<div class="login_submitV3">', '<a data-registbox-elem="registBtn" class="submitV3Btn w200" rseat="1411201_rgt" href="javascript:void(0)">注册</a>', "</div>", "</td>", "</tr>", '<tr class="cooperation-account">', "<th></th>", '<td class="pb0">', '<div class="divide-line-ico">', '<a class="J_pop-third-downbtn" href="javascript:void(0)">', "使用其他方式登录", '<div class="divide-line-con">', '<i class="loginIcon arrowDown"></i>', "</div>", "</a>", '<div class="arrowUpCon dn J_pop-third-box">', '<div class="otherBind-big clearfix">', i.weibo(null, "loginIcon weibo"), i.qq(null, "loginIcon qq"), i.weixin(null, "loginIcon weixin"), i.baidu(null, "loginIcon baidu"), i.zhifubao(null, "loginIcon zhifubao"), i.renren(null, "loginIcon renren"), i.xiaomi(null, "loginIcon xiaomi"), i.jingdong(null, "loginIcon jd"), "</div>", '<div class="divide-line-con">', '<a href="javascript:void(0)" class="J_pop-third-upbtn">', '<i class="loginIcon arrowUp"></i>', "</a>", "</div>", "</div>", "</div>", "</td>", "</tr>", "</tbody>", "</table>", "</div>", "</div>", '<div data-registbox-elem="vertifymail" style="display:none;" class="usrTxGeneral-box_v3 box_active">', '<div class="logReg-form">', '<div class="emailActivation">', '<h3 class="eA_title"><i class="site-icons icon-submitSuccessful"></i><span>还差一步即可完成注册</span></h3>', '<div class="eA_content">', '<p>我们已经向您的邮箱  <span data-emailname="email"></span>发送了一封激活邮件，请点击邮件中的链接完成注册！</p>', '<p class="eA_operation"><a href="javascript:void()" class="eA_links" rseat="1411201_alt" j-delegate="modifyemail">更改注册邮箱</a></p>', "</div>", '<div class="login_submitV3"><a class="submitV3Btn" href="javascript:void()" rseat="1411201_eml" data-entermail="enter">立即进入邮箱</a></div>', '<div class="eA_desc">如果无法自动跳转，请手动打开邮箱</div>', "</div>", "</div>", '<div class="bindOther-box">', '<div class="emailActivation_q">', '<h4 class="eA_title">没有收到激活邮件？</h4>', '<div class="eA_content">', '<p><i class="site-icons square-icon"></i><span>看看是否在邮件的回收站中、垃圾邮件中</span></p>', '<p><i class="site-icons square-icon"></i><span>重新发送，</span>', '<a href="javascript:void()" rseat="1411201_rem" class="eA_links" j-delegate="resendemail">重发一封</a></p>', "</div>", "</div>", "</div>", "</div>", "</div>"].join("");
      return o
    }
  };
  n.exports = r
});
define("../../action/pcRegistBox", ["../components/action/adapter", "../units/history20_pingback"], function (e, t, n) {
  var i = e("../components/action/adapter"), a = Q.event.customEvent;
  e("../units/history20_pingback"), n.exports = Q.Class("PcRegistBox", {
    ns: Q.action,
    extend: i,
    construct: function (e) {
      this.callsuper(e), this.init(), this.bindEvent()
    },
    properties: {timer: null},
    methods: {
      init: function () {
      }, bindEvent: function () {
        var e = this;
        a.on("login", this.loginSuccess.bind(this)), a.on("logout", this.logout.bind(this)), a.on("registFail", this._registFail.bind(this)), a.on("registed", function (t) {
          e._registSuccess(t)
        })
      }, loginSuccess: function () {
        this.resetInput(!0), this.resetTips()
      }, logout: function () {
        this.refreshPiccode()
      }, _registSuccess: function (e) {
        window.lib.__callbacks__.login_success(e || {})
      }, _registFail: function (e) {
        if ("P00148" == e.data.code)this._view.showErrorMsg("密码安全等级非常低，请更换密码"); else {
          var t = e.data.msg || "";
          t.indexOf("验证码") >= 0 ? "P00405" == e.data.code ? (this._view.doEdit("smscode"), this._view.showErrorMsg("手机验证码错误")) : (this._view.doEdit("piccode"), this._view.showErrorMsg("图文验证码错误")) : t.indexOf("密码") >= 0 ? (this._view.showErrorMsg("密码须为4-20位字母或数字"), this._view.doEdit("passwd")) : this._view.showErrorMsg(t), this.refreshPiccode()
        }
      }, resetTips: function () {
        this._view.resetTips()
      }, resetInput: function (e) {
        this._view.resetInput(e)
      }, refreshPiccode: function () {
        this._view.refreshPiccode()
      }, show: function (e) {
        var t = this;
        t.timer && clearTimeout(t.timer), e ? t.timer = setTimeout(function () {
          t._view.show()
        }, e) : t._view.show()
      }, hide: function (e) {
        var t = this;
        t.timer && clearTimeout(t.timer), e ? t.timer = setTimeout(function () {
          t._view.hide()
        }, e) : t._view.hide()
      }, cancelHide: function () {
        var e = this;
        e.timer && e.visible() && clearTimeout(e.timer)
      }, toggle: function (e) {
        var t = this;
        t.timer && clearTimeout(t.timer), e ? t.timer = setTimeout(function () {
          t._view.toggle()
        }, e) : t._view.toggle()
      }, visible: function () {
        return this._view.visible
      }
    }
  })
});
define("../../view/pcRegistBoxView", ["../components/view/view", "../units/history20_pingback", "../kit/pcLogin", "../kit/validate", "../kit/thirdPartLogin", "../kit/thirdPartyBtn", "../kit/pcVCodeKit", "../kit/placeholder", "../kit/pcUserRegistKit", "../config/siteDomain", "../view/pcBoxViewTpl"], function (e, t, n) {
  var i = e("../components/view/view"), a = e("../units/history20_pingback");
  e("../kit/pcLogin");
  var r = e("../kit/validate");
  e("../kit/thirdPartLogin"), e("../kit/thirdPartyBtn");
  var o = e("../kit/pcVCodeKit"), s = e("../kit/placeholder").simulate, l = e("../kit/pcUserRegistKit");
  e("../config/siteDomain");
  var d = e("../view/pcBoxViewTpl"), h = Q.event.customEvent, m = 0, c = !0, u = "点击太频繁啦，客官您歇会儿……", p = function (e, t, n) {
    e && e.on && e.on(t, n)
  };
  n.exports = Q.Class("PcRegistBoxView", {
    ns: Q.view, extend: i, construct: function (e, t) {
      this._doms = e || {}, this._opt = Q.object.extend({
        inputFocusClass: "acountIn",
        protocolSelectedClass: "selected",
        smsClass: "acount-getSms",
        smsWait: 90,
        submitBtnDisabledClass: "submit-gray",
        defaultTxt: "",
        accountType: "mobile",
        alreadyRendered: !1,
        initStatus: "hide",
        switchToQrCodeLoginRseat: "140711_tdenter_navrgst",
        returnFromQrCodeLoginRseat: "140711_bknavrgst"
      }, t), this.visible = !0, this.domReady = !1, this.defaultAccoutnType = this._opt.accountType, this.accountType = this._opt.accountType
    }, methods: {
      init: function () {
        "hide" === this._opt.initStatus ? this.hide() : this._opt.alreadyRendered && (this.initRegistPanel(), this.resetTips("all"))
      }, show: function () {
        this._getPingBack("1411201_dhshw"), this.visible || (this.domReady || this.initRegistPanel(), this.resetInput(!1), this.resetTips("all"), h.fire({
          type: "beforePcRegistBoxShow",
          data: {wrapper: this._doms.wrapper}
        }), this._doms.wrapper.show(), this.visible = !0, this._doms.bg && this._doms.main && this._doms.bg.css("height", this._doms.main.height() - 2 + "px"), a.send("regdivshow"), h.fire({
          type: "pcRegistBoxShow",
          data: {wrapper: this._doms.wrapper}
        }))
      }, hide: function () {
        this.visible && (this.domReady && (this.resetInput(!1), this.resetTips("all")), this.visible = !1, this._doms.wrapper && "popup" == this._doms.wrapper.attr("data-from") && this.showVertifyPanel(this._doms.wrapper), h.fire({
          type: "beforePcRegistBoxHide",
          data: {wrapper: this._doms.wrapper}
        }), this._doms.wrapper.hide(), h.fire({type: "pcRegistBoxHide", data: {wrapper: this._doms.wrapper}}))
      }, toggle: function () {
        this.visible ? this.hide() : this.show()
      }, initRegistPanel: function () {
        this._rendererPanel(), this._bindEvent(), this.domReady = !0
      }, _rendererPanel: function () {
        var e = d.getRegistTpl(), t = this._doms, n = t.wrapper;
        if (n) {
          this._opt.alreadyRendered || n.html(e), (n.down("[data-registbox-elem]") || []).forEach(function (e) {
            e = Q.$(e), t[e.attr("data-registbox-elem")] = e
          }), t.inputs = {}, t.wraps = {};
          var i = 1;
          ["email", "passwd", "piccode", "smscode"].forEach(function (e) {
            t[e + "Input"].attr("tabindex", i), i++, t.inputs[e] = s(t[e + "Input"], {tipColor: "#333"}), t.wraps[e] = t[e + "Wrap"]
          }), this.initCode(), this.domReady = !0, h.fire({
            type: "pcUserRegDomReady",
            data: {wrapper: t.registMailSuggest, html: e, input: this._doms.inputs.email}
          })
        }
      }, _bindEvent: function () {
        var e = this, t = this._doms;
        e._inpsEvent(t), e._inpsFireEvent(t);
        var n = Q.$('[data-registbox-elem="pwdstrong"]'), i = "passwordStrength_level1", o = "passwordStrength_level2", s = "passwordStrength_level3", d = function (e) {
          e = r.getScore(e), n.removeClass("dn"), n.removeClass(i), n.removeClass(o), n.removeClass(s), e >= 70 ? n.addClass(s) : e >= 40 && 70 >= e ? n.addClass(o) : 40 >= e && (n.addClass(i), 0 === e && n.addClass("dn"))
        };
        p(t.passwdInput, "blur", function () {
          var n = t.passwdInput.value().trim();
          "" !== n && e.validate("passwd", null)
        }), p(t.passwdInput, "keydown", function (e) {
          var n = Q.event.get(e).keyCode;
          if (13 != n) {
            var i = t.passwdInput.value().trim();
            d(i)
          }
        }), p(t.passwdInput, "keyup", function (e) {
          var n = Q.event.get(e).keyCode;
          if (9 != n && 13 != n) {
            var i = t.passwdInput.value().trim();
            d(i)
          }
        });
        var m = t.delemailinput;
        p(m, "click", function (e) {
          Q.event.get(e).preventDefault(), t.emailInput.value("")
        });
        var f = t.protocol;
        p(f, "click", function (n) {
          var i = Q.$(n.target || n.srcElement);
          "A" != i.attr("tagName").toUpperCase() && (f.hasClass(e._opt.protocolSelectedClass) ? (f.removeClass(e._opt.protocolSelectedClass), t.registBtn.addClass(e._opt.submitBtnDisabledClass)) : (f.addClass(e._opt.protocolSelectedClass), t.registBtn.removeClass(e._opt.submitBtnDisabledClass)))
        }), p(t.refreshPiccode, "click", function (t) {
          Q.event.get(t).preventDefault(), e.refreshPiccode()
        }), p(t.piccode, "click", function (t) {
          Q.event.get(t).preventDefault(), setTimeout(function () {
            e.refreshPiccode()
          }, 0)
        }), p(t.registBtn, "click", function (n) {
          Q.event.get(n).preventDefault(), t.registBtn.hasClass(e._opt.submitBtnDisabledClass) || e.doReg(n)
        });
        var U = null;
        if (p(t.getSms, "click", function (n) {
            return Q.event.get(n).preventDefault(), e.validate("email", null) ? (c = !0, clearTimeout(U), U = setTimeout(function () {
              Q(t.getSms).is(":visible") && c ? e.showErrorMsg(u) : clearTimeout(U)
            }, 3e3), l.sendCode({
              requestType: 1,
              agenttype: 1,
              cellphoneNumber: t.inputs.email.value().trim(),
              vcode: t.inputs.piccode.value().trim(),
              serviceId: 2
            }, function (n) {
              if (c = !1, "A00000" === n.code) {
                t.getSms.hide(), t.timer.css("display", "");
                var i = e._opt.smsWait, a = setInterval(function () {
                  t.timerNum.html(--i), 0 >= i && (clearInterval(a), t.getSms.css("display", ""), t.timer.hide())
                }, 1e3);
                t.timerNum.html(i)
              } else"E00000" === n.code ? e.showErrorMsg(u) : (e.refreshPiccode(), e.showErrorMsg(n.msg))
            }), void 0) : (e.showErrorMsg("手机号格式错误"), void 0)
          }), t.wrapper.delegate("authLoginBtn", function (e) {
            Q.event.get(e.event).preventDefault();
            var t = Q.$(e.target), n = t.attr("data-sourceId");
            "29" == n ? a.send("weixinclk") : "2" == n ? a.send("weiboclk") : "4" == n ? a.send("qqclk") : a.send("extendclk")
          }), t.switchToQrCodeLogin) {
          var V = "hideQrCodeLoginFloater";
          t.switchToQrCodeLogin.attr("rseat", e._opt.switchToQrCodeLoginRseat), Q.browser.IE6 && (t.switchToQrCodeLogin[0].setAttribute("tabindex", -1), t.switchToQrCodeLogin[0].setAttribute("tabIndex", -1)), t.switchToQrCodeLogin.on("click", function () {
            var n = {returnBtnRseat: e._opt.returnFromQrCodeLoginRseat}, i = "", a = 0;
            t.formRegistWrapper ? (t.formRegistWrapper.hide(), i = "showQrCodeLoginFloater", n.returnEventName = V, h.fire({
              type: i,
              data: n
            })) : (i = "showFormLoginFloaterFromRegist", n.returnDelegate = "registerscroll", a = 100, setTimeout(function () {
              h.fire({type: i, data: n})
            }, a))
          }), t.formRegistWrapper && h.on(V, function () {
            t.formRegistWrapper.show()
          })
        }
      }, _inpsEvent: function (e) {
        var t = this;
        e.inputs.email.on("keydown", function (t) {
          var n = Q.event.get(t).keyCode;
          13 == n && e.inputs.passwd[0].focus()
        }), Q.object.forEach(e.inputs, function (n, i) {
          if (n) {
            var a = e.wraps[i];
            n.on("focus", function () {
              (a || n).addClass(t._opt.inputFocusClass), h.fire({type: "registInputBegin", data: {input: n}})
            }), n.on("blur", function (e) {
              var i = Q.event.get(e).target;
              Q.$(i).attr("tabindex"), (a || n).removeClass(t._opt.inputFocusClass), t._doms.wrapper.down("input:focus") || h.fire({
                type: "registInputEnd",
                data: {lastInput: n}
              })
            }), "email" !== i && n.on("keydown", function (n) {
              13 == n.keyCode && (Q.event.get(n).preventDefault(), t.doReg(n), e.inputs.piccode[0].focus(), "piccode" == i && (1 == m ? e.inputs.email[0].focus() : 2 == m ? e.inputs.passwd[0].focus() : 3 == m ? e.inputs.piccode[0].focus() : 4 == m && e.inputs.smscode[0].focus()))
            }), "email" === i && n.on("blur", function () {
              setTimeout(function () {
                t.validate("email", null) && l.checkAccount({
                  account: e.inputs.email && e.inputs.email.value(),
                  agenttype: 1
                }, function (e) {
                  "A00000" != e.code ? t.showErrorMsg(e.msg) : t.showErrorMsg("")
                })
              }, 300)
            })
          }
        })
      }, _inpsFireEvent: function (e) {
        var t = this;
        h.on("mailSuggestHide", function (t) {
          t.data.input[0] === e.inputs.email[0] && e.inputs.passwd[0].focus()
        }), h.on("rePcRegistBoxShow", function () {
          if (1 != t._opt.hackNoDisplay) {
            t.hide(), t.show();
            var e = Q.$("#bottomfix-login-reg");
            e || t.refreshPiccode()
          }
        }), h.on("showVertifyEmailPanel", function (e) {
          t.showVertifyPanel(e.data.wrap)
        })
      }, doEdit: function (e) {
        e = this._doms.inputs[e], e && (e = e[0], setTimeout(function () {
          e.focus(), e.select()
        }, 0))
      }, doReg: function () {
        var e = this, t = e._doms;
        if (!this._doms.protocol.hasClass(this._opt.protocolSelectedClass))return this.showErrorMsg("协议未勾选"), void 0;
        var n = this.getRegisterData();
        n._pos = 1, n.agenttype = 1;
        var i = this.validate(null, n);
        i && (n.piccode = t.inputs.smscode.value().trim(), l.regByMobile({
          authCode: n.piccode,
          agenttype: 1,
          cellphoneNumber: n.email,
          password: n.passwd,
          _pos: 1,
          serviceId: 2
        }))
      }, showVertifyPanel: function (e) {
        if (e = e || this._doms.wrapper) {
          var t = e.down('[data-registbox-elem="registpanel"]'), n = e.down('[data-registbox-elem="table"]'), i = e.down('[data-registbox-elem="vertifymail"]'), a = t || n, r = i;
          if (!Q.cookie.get("P00011")) {
            if (r && r.hide(), a) {
              a.show();
              var o = Q.$("#bottomfix-login-reg");
              o && this.refreshPiccode()
            }
            return 0
          }
          try {
            return r.show(), a.hide(), h.fire({type: "showVertifyEmailInfo", data: {wrap: r}}), 1
          } catch (s) {
            r && r.hide(), a && a.show()
          }
        }
      }, getRegisterData: function () {
        var e = this._doms, t = window.location.href, n = "http://passport.iqiyi.com/pages/secure/reg.action", i = "http://passport.iqiyi.com/pages/secure/index.action", a = "http://passport.iqiyi.com/pages/register/index.action", r = "http://www.iqiyi.com/u/";
        t.indexOf(n) >= 0 ? t = i : t.indexOf(a) >= 0 && (t = r);
        var o = {
          email: e.inputs.email && e.inputs.email.value(),
          passwd: e.inputs.passwd.value().trim(),
          piccode: e.inputs.piccode.value().trim(),
          smscode: e.inputs.smscode.value().trim(),
          source: "3",
          fromurl: encodeURIComponent(t)
        };
        return o
      }, resetInput: function (e) {
        var t = Q.$('[data-registbox-elem="pwdstrong"]'), n = this._doms.inputs;
        e && n.email.value(""), n.passwd.value(""), n.piccode.value(""), t && t.addClass("dn")
      }, resetTips: function () {
        this.showErrorMsg()
      }, initCode: function () {
        this.refreshPiccode()
      }, refreshPiccode: function () {
        this._doms.piccode && (this._doms.piccode.html("<img src='" + o.getVcode() + "'/> "), this._doms.inputs.piccode.value(""))
      }, validate: function (e, t) {
        m = 0;
        var n = t || this.getRegisterData();
        if (!(e && "email" !== e || r.mobile(n.email) || /^09\d{8}$/.test(n.email)))return this.showErrorMsg("手机格式错误"), e || this.doEdit("email"), m = 1, !1;
        if (!e || "passwd" === e) {
          if (!r.specialPwd(n.passwd))return this.showErrorMsg("密码包含无效字符"), e || this.doEdit("passwd"), m = 2, !1;
          if (!r.pwd(n.passwd))return this.showErrorMsg("8~20位字母、数字或字符，至少包含两种"), e || this.doEdit("passwd"), m = 2, !1
        }
        return e && "piccode" !== e || r.empty(n.piccode) ? e && "smscode" !== e || r.empty(n.smscode) ? (this.showErrorMsg(), !0) : (this.showErrorMsg("短信验证码错误"), e || this.doEdit("smscode"), m = 4, !1) : (this.showErrorMsg("图文验证码错误"), e || this.doEdit("piccode"), m = 3, !1)
      }, showErrorMsg: function (e) {
        this._doms.errDom.show(), this._doms.pwdstrongwrap && this._doms.pwdstrongwrap.hide(), this._doms.errDom.html(e || this._opt.defaultTxt)
      }, _getPingBack: function (e) {
        var t = {
          t: 21,
          rn: Math.random(),
          p: 10,
          pf: 1,
          p1: 101,
          bstp: 0,
          jsuid: Q.cookie.get("QC006") || "",
          ve: Q.getVideoEventID() || "",
          u: Q.cookie.get("QC005") || "",
          block: e
        };
        Q.log.server(t, "http://msg.71.am/b")
      }
    }
  })
});
define("../../kit/pcUserRegistKit", ["../interfaces/pcUserRegistInterface", "../interfaces/mobileRegistInterface", "../interfaces/checkUserInterface", "./checkI18nType", "../config/i18n/i18nloginMsg", "../config/loginMsg"], function (e, t, n) {
  var i = e("../interfaces/pcUserRegistInterface"), a = e("../interfaces/mobileRegistInterface"), r = e("../interfaces/checkUserInterface"), o = Q.event.customEvent, s = new Q.ic.InfoCenter({moduleName: "pcUserRegistKit"}), l = {}, d = e("./checkI18nType");
  l = d && !d.type ? e("../config/i18n/i18nloginMsg") : e("../config/loginMsg"), n.exports = {
    regist: function (e) {
      e = e || {}, window.location.href.indexOf("vip.") > -1 && (e.param.agenttype = 5);
      var t = new i;
      t.request(e, function (t) {
        t = t || {}, t.data && (t.data._loginName = e.param.email), "A00000" == t.code ? o.fire({
          type: "registed",
          data: t.data
        }) : (s.log(t.code + l[t.code]), o.fire({type: "registFail", data: {code: t.code, msg: l[t.code]}}))
      })
    }, regByMobile: function (e) {
      e = e || {}, (new a).register(e, function (t) {
        t = t || {}, "A00000" == t.code ? (t.data._loginName = e.cellphoneNumber, o.fire({
          type: "registed",
          data: t.data
        })) : (s.log(t.code + l[t.code]), e && 2 === e._pos ? o.fire({
          type: "scrollfloater_mobile-failed",
          data: {code: t.code, msg: l[t.code] || t.msg}
        }) : o.fire({type: "registFail", data: {code: t.code, msg: l[t.code] || t.msg}}))
      })
    }, checkAccount: function (e, t) {
      e = e || {}, (new r).checkAccount(e, function (e) {
        e = e || {}, "A00000" == e.code ? e.data === !0 ? t({
          code: "P00105",
          msg: l.P00105
        }) : t({code: "A00000"}) : "P00102" == e.code ? t({code: "P00102", msg: l.P00102}) : t(e)
      })
    }, sendCode: function (e, t) {
      e = e || {}, (new a).sendCode(e, function (e) {
        e = e || {}, "A00000" !== e.code ? (t && t(e), s.log("mobile register send code error")) : t(e)
      })
    }
  }
});
define("../../interfaces/pcUserRegistInterface", ["../kit/remoteInterface", "../config/siteDomain", "../kit/rsa"], function (e, t, n) {
  var i = e("../kit/remoteInterface"), a = e("../config/siteDomain"), r = e("../kit/rsa"), o = a.getDomain();
  n.exports = Q.Class("pcUserRegistInterface", {
    construct: function () {
      this._remoteInterface = new i({url: "https://passport." + o + "/apis/reglogin/register.action"})
    }, methods: {
      request: function (e, t) {
        e = e || "", Q.browser.iPad && (e.param.agenttype = 10), e.param.passwd = r.rsaFun(e.param.passwd), this._remoteInterface.send(e, function (e) {
          t && t(e)
        })
      }
    }
  })
});
define("../../interfaces/mobileRegistInterface", ["../kit/remoteInterface", "../config/siteDomain", "../kit/rsa", "../kit/fdlKit"], function (e, t, n) {
  var i = e("../kit/remoteInterface"), a = e("../config/siteDomain"), r = a.getDomain(), o = e("../kit/rsa"), s = e("../kit/fdlKit");
  n.exports = Q.Class("RIMobileReg", {
    construct: function () {
      this._remoteInterface = new i({
        register: {url: "http://kylin." + r + "/validate"},
        sendCode: {url: "http://passport." + r + "/apis/phone/send_cellphone_authcode.action"},
        sendCodeNew: {url: "http://passport." + r + "/apis/phone/send_cellphone_authcode_vcode.action"},
        bindPhone: {url: "http://kylin." + r + "/validate"},
        newBindPhone: {url: "http://kylin." + r + "/validate"},
        replacePhone: {url: "http://passport." + r + "/apis/phone/replace_phone.action"},
        vertifyPwd: {url: "http://passport." + r + "/apis/user/verify_pwd.action?t=" + +new Date},
        validate: {url: "http://passport." + r + "/apis/phone/verify_cellphone_authcode.action"},
        resetPasswd: {url: "https://passport." + r + "/apis/user/reset_passwd.action"},
        savePwd: {url: "https://passport." + r + "/pages/secure/password/save_pwd.action"},
        resetNewPwd: {url: "https://passport." + r + "/pages/secure/password/reset_passwd.action"},
        checkPasswdRepeat: {url: "https://passport." + r + "/apis/user/check_passwd_repeat.action"},
        tokenlogin: {url: "http://passport." + r + "/apis/phone/token_login.action"}
      })
    }, methods: {
      register: function (e, t) {
        var n = this;
        e = e || {}, e.password = o.rsaFun(e.password), e.server = "BEA3AA1908656AABCCFF76582C4C6660", e.url_src = "/apis/reglogin/cellphone_reg.action?", e.bird_src = e.lang && "zh_TW" == e.lang ? "f8d91d57af224da7893dd397d52d811a" : "bfc434ba2fa1457f8c42f824ff26aa7d", s.getToken(e, function (e) {
          "A00000" === e.code ? n._remoteInterface.send({
            dataType: "jsonp",
            ifname: "register",
            param: e.param,
            domain: r
          }, function (e) {
            t && t(e)
          }) : t && t(e)
        })
      }, sendCode: function (e, t) {
        e = e || {}, this._remoteInterface.send({dataType: "jsonp", ifname: "sendCode", param: e}, function (e) {
          t && t(e)
        })
      }, sendCodeNew: function (e, t) {
        e = e || {}, this._remoteInterface.send({dataType: "jsonp", ifname: "sendCodeNew", param: e}, function (e) {
          t && t(e)
        })
      }, bindPhone: function (e, t) {
        var n = this;
        e = e || {}, e.passwd && (e.passwd = o.rsaFun(e.passwd)), e.server = "BEA3AA1908656AABCCFF76582C4C6660", e.url_src = "/apis/phone/bind_phone.action?", e.bird_src = "eb8d221bc0c04c5ab4ba735b6b1560a1", s.getToken(e, function (e) {
          "A00000" === e.code ? n._remoteInterface.send({
            dataType: "jsonp",
            ifname: "bindPhone",
            param: e.param,
            domain: r
          }, function (e) {
            t && t(e)
          }) : t && t(e)
        })
      }, newBindPhone: function (e, t) {
        var n = this;
        e = e || {}, e.passwd && (e.passwd = o.rsaFun(e.passwd)), e.server = "BEA3AA1908656AABCCFF76582C4C6660", e.url_src = "/apis/secure/bind_account.action?", e.bird_src = "eb8d221bc0c04c5ab4ba735b6b1560a1", s.getToken(e, function (e) {
          "A00000" === e.code ? n._remoteInterface.send({
            dataType: "jsonp",
            ifname: "newBindPhone",
            param: e.param,
            domain: r
          }, function (e) {
            t && t(e)
          }) : t && t(e)
        })
      }, replacePhone: function (e, t) {
        e = e || {}, e.authcookie = Q.cookie.get("P00001"), this._remoteInterface.send({
          dataType: "jsonp",
          ifname: "replacePhone",
          antiCsrf: !0,
          param: e
        }, function (e) {
          t && t(e)
        })
      }, vertifyPwd: function (e, t) {
        e = e || {}, e.passwd = o.rsaFun(e.passwd), this._remoteInterface.send({
          method: "post",
          dataType: "jsonp",
          ifname: "vertifyPwd",
          param: e
        }, function (e) {
          t && t(e)
        })
      }, validate: function (e, t) {
        e = e || {}, e.passwd && (e.passwd = o.rsaFun(e.passwd)), this._remoteInterface.send({
          method: "post",
          dataType: "jsonp",
          ifname: "validate",
          param: e
        }, function (e) {
          t && t(e)
        })
      }, resetPasswd: function (e, t) {
        e = e || {}, e.newpass && (e.newpass = o.rsaFun(e.newpass)), e.oldpass && (e.oldpass = o.rsaFun(e.oldpass)), this._remoteInterface.send({
          method: "post",
          dataType: "jsonp",
          ifname: "resetPasswd",
          param: e
        }, function (e) {
          t && t(e)
        })
      }, savePwd: function (e, t) {
        e = e || {}, e.newpass = o.rsaFun(e.newpass), this._remoteInterface.send({
          method: "post",
          dataType: "jsonp",
          ifname: "savePwd",
          param: e
        }, function (e) {
          t && t(e)
        })
      }, resetNewPwd: function (e, t) {
        e = e || {}, e.newpass = o.rsaFun(e.newpass), this._remoteInterface.send({
          method: "post",
          dataType: "jsonp",
          ifname: "resetNewPwd",
          param: e
        }, function (e) {
          t && t(e)
        })
      }, checkPasswdRepeat: function (e, t) {
        e = e || {}, e.passwd = o.rsaFun(e.passwd), this._remoteInterface.send({
          method: "post",
          dataType: "jsonp",
          ifname: "checkPasswdRepeat",
          param: e
        }, function (e) {
          t && t(e)
        })
      }, tokenlogin: function (e, t) {
        e = e || {}, this._remoteInterface.send({
          method: "post",
          dataType: "jsonp",
          ifname: "tokenlogin",
          param: e
        }, function (e) {
          t && t(e)
        })
      }
    }
  })
});
define("../../interfaces/checkUserInterface", ["../kit/remoteInterface2", "../config/siteDomain"], function (e, t, n) {
  var i = e("../kit/remoteInterface2"), a = e("../config/siteDomain"), r = a.getDomain();
  n.exports = Q.Class("checkUserInterface", {
    construct: function () {
      this._remoteInterface = new i({checkAccount: {url: "http://passport." + r + "/apis/user/check_account.action?t=" + +new Date}})
    }, methods: {
      checkAccount: function (e, t) {
        e = e || {}, this._remoteInterface.send({
          method: "POST",
          ifname: "checkAccount",
          param: e,
          cors: !0,
          withCredentials: !0
        }, function (e) {
          t && t(e)
        })
      }
    }
  })
});
define("../../kit/remoteInterface2", ["./checkRemoteData"], function (e, t, n) {
  var i = e("./checkRemoteData");
  n.exports = Q.Class("RemoteInterface2", {
    construct: function (e) {
      this._remoteInterfaces = e
    }, methods: {
      send: function (e, t) {
        var n = this, a = e.ifname, r = e.param, o = e.method || "GET", s = n._remoteInterfaces[a] || n._remoteInterfaces;
        Q.http.json2(s.url, {
          data: r,
          method: o,
          timeout: e.timeout,
          withCredentials: e.withCredentials,
          ifr: e.ifr,
          encodeFn: e.encodeFn,
          headers: e.headers,
          onsuccess: function (e, a) {
            try {
              Q.log.log("send url : " + n._getUrl(s.url, r) + ", Check result : " + i.check(s.struct, a))
            } catch (o) {
            }
            t && t(a)
          },
          onfailure: function (e, n) {
            t && t(n || {code: "E00000"})
          }
        })
      }, _getUrl: function (e, t) {
        var n = [];
        for (var i in t)n.push(i + "=" + t[i]);
        return e + "?" + n.join("&")
      }
    }
  })
});
define("../../config/i18n/i18nloginMsg", ["../siteDomain"], function (e, t, n) {
  var i = e("../siteDomain"), a = "";
  a = i.isPPS() ? "http://passport.pps.tv/user/login.php" : "http://passport.qiyi.com/user/login.php", n.exports = {
    A00000: "操作成功",
    A00101: "系統錯誤",
    P00101: "註冊來源錯誤",
    P00102: "請輸入正確的郵箱或手機號",
    P00103: "請輸入正確的郵箱",
    P00104: "密碼須為6-16位字母或數字",
    P00105: '該帳號已註冊，請直接<a  j-delegate="loginscroll" href="' + a + '">登錄</a>',
    P00106: '該手機已註冊，請直接<a  j-delegate="loginscroll" href="' + a + '">登錄</a>',
    P00107: "驗證碼錯誤，請重新輸入",
    P00108: "帳號或密碼錯誤，請重試",
    P00109: '僅支持中英文、數字或"_"',
    P00110: "昵稱已被占用，換壹個試試？",
    P00111: '該帳號尚未激活，<a href="{0}" target="_blank" class="onlink">重發激活郵件</a>',
    P00112: "郵箱未註冊",
    P00113: "當前密碼不正確",
    P00114: "新密碼格式格式不正確",
    P00115: "找回密碼鏈接失效",
    P00116: "找回密碼鏈接錯誤",
    P00117: "帳號或密碼錯誤，請重試",
    P00118: "帳號已激活，不用重發激活鏈接",
    P00119: "昵稱包含敏感字",
    P00121: "該郵箱未註冊",
    P00201: "缺少圖片",
    P00202: "圖片格式錯誤",
    T00115: "圖片尺寸有問題，請重新選擇",
    P00211: "抱歉！處理頭像圖片失敗，請重試",
    P00301: "此第三方帳號已經綁定過了",
    P00302: "此郵箱已經被占用，請直接綁定已有帳號",
    P00303: "系統繁忙，綁定失敗",
    P00304: "郵箱或密碼錯誤，請重試",
    P00305: "該郵箱已被其他帳號綁定，換壹個試試吧",
    P00306: "該帳號尚未激活，無法完成綁定",
    A00001: "用戶未登錄",
    E00000: "用戶名或密碼錯誤"
  }
});
define("../../action/pcUserBox", ["../components/action/adapter"], function (e, t, n) {
  var i = e("../components/action/adapter"), a = Q.event.customEvent;
  n.exports = Q.Class("PcUserBox", {
    ns: Q.action, extend: i, construct: function (e) {
      this.callsuper(e), this.init(), this.bindEvent()
    }, properties: {timer: null}, methods: {
      init: function () {
      }, bindEvent: function () {
        a.on("login", this.login.bind(this)), a.on("logout", this.logout.bind(this))
      }, login: function () {
        this._view.initUserInfo(), this._view.startSync()
      }, logout: function () {
        this._view.resetUserInfo(), this._view.resetInbox(), this._view.stopSync()
      }, show: function (e) {
        var t = this;
        t.timer && clearTimeout(t.timer), e ? t.timer = setTimeout(function () {
          t._view.show()
        }, e) : t._view.show()
      }, hide: function (e) {
        var t = this;
        t.timer && clearTimeout(t.timer), e ? t.timer = setTimeout(function () {
          t._view.hide()
        }, e) : t._view.hide()
      }, cancelHide: function () {
        var e = this;
        e.timer && e.visibile() && clearTimeout(e.timer)
      }, hideAfterNoAction: function (e) {
        e = e >= 0 ? e : 1e4;
        var t = this;
        t.timer = setTimeout(function () {
          t._view.hide()
        }, e)
      }, toggle: function (e) {
        var t = this;
        t.timer && clearTimeout(t.timer), e ? t.timer = setTimeout(function () {
          t._view.toggle()
        }, e) : t._view.toggle()
      }, visibile: function () {
        return this._view.visible
      }
    }
  })
});
define("../../view/pcUserBoxView", ["../components/view/view", "../kit/anim", "../kit/userInfo", "../kit/qrCoder", "../kit/qrcodeLoginKit", "../units/history20_pingback", "../kit/pcLogin", "../kit/iframeLocation", "../config/siteDomain", "../kit/period", "../kit/loadDivPingback", "../kit/juicer", "../view/pcUserBoxViewtpl", "../interfaces/profileNav"], function (e, t, n) {
  var i = e("../components/view/view");
  e("../kit/anim");
  var a = e("../kit/userInfo"), r = e("../kit/qrCoder"), o = e("../kit/qrcodeLoginKit"), s = e("../units/history20_pingback"), l = e("../kit/pcLogin"), d = e("../kit/iframeLocation"), h = Q.event.customEvent, m = e("../config/siteDomain"), c = e("../kit/period").create();
  e("../kit/loadDivPingback");
  var u = e("../kit/juicer"), p = e("../view/pcUserBoxViewtpl"), f = e("../interfaces/profileNav"), U = new f, V = function (e, t) {
    e.html(""), e.append(document.createTextNode(t))
  };
  n.exports = Q.Class("PcUserBoxView", {
    ns: Q.view, extend: i, construct: function (e, t) {
      this._doms = e || {}, this._opt = t || {}
    }, properties: {visible: !0, syncTimer: null, domReady: !1}, methods: {
      init: function () {
        this.hide();
        var e = this;
        h.on("logout", function () {
          e.domReady = !1
        })
      }, _rendererPanel: function () {
        var e = "http://www.iqiyi.com/u/", t = '<i class="nav_arrow"></i>', n = '<li><a data-elem="homeLink" href="http://www.iqiyi.com/u/">个人中心</a></li> <li><a data-elem="vipLink" href="http://vip.iqiyi.com/?fc=8c35dcfbce83bcc1">VIP会员首页</a></li> <li><a target="_blank" data-userbox-elem="ppsGameLink" href="#">我的游戏</a></li><li class="bottomLine-e2"><a target="_blank" rseat="tj_usrclk_gwc" href="http://mall.iqiyi.com/shoppingcart.html">我的购物车</a></li> ';
        m.isPPS() && (e = "http://ipd.pps.tv", t = '<div class="nav_pop_arrow"><i class="arrow-inner"></i><i class="arrow-outer"></i></div>', n = '<li><a data-elem="homeLink" href="http://ipd.pps.tv">个人中心</a></li><li><a data-elem="vipLink" href="http://vip.iqiyi.com/?platform=b61aebc0586abea7&amp;fc=9068aec20fbc9ca8" target="_blank">VIP会员中心</a></li><li><a target="_blank" data-userbox-elem="ppsGameLink" href="#">我的游戏</a></li><li class="bottomLine-e2"><a target="_blank" rseat="tj_usrclk_gwc" href="http://mall.iqiyi.com/shoppingcart.html">我的购物车</a></li> <li><a href="http://my.ipd.pps.tv/my_follow.php">我的订阅</a></li><li><a href="http://www.iqiyi.com/u/video">视频管理</a></li>');
        var i = '<div class="usrTx-inner-box usrTx-box_popup" data-elem="main">' + t + '<ul class="usrTx-inner-box_bd">' + '<li class="usrTx-inner-box_userInfo">' + '<span class="usrTx-img">' + '<a data-elem="homeLink" href="' + e + '">' + '<img defaultsrc="http://www.qiyipic.com/common/fix/' + 'record_images/usrsmall_index.png" src="" data-userbox-elem="avatar">' + "</a>" + "</span>" + '<span data-private-display="block" class="usrTx-name" style="display: block;">' + "<span>" + '<a data-elem="homeLink" href="' + e + '"' + ' class="myName" data-userbox-elem="username" rseat="tj_usrclk"></a>' + '<i class="kthy0201" style="display: none;" data-userbox-elem="vipicon"></i>' + '<i class="no-kthy0201" style="display: block;"' + ' data-userbox-elem="notvipicon"></i>' + "</span>" + "</span>  " + '<p class="txjifen">' + '<a href="" data-credit="topcreditlink" data-credit-num="pingback" title="积分">' + '积分： <span data-credit="topcreditnumber"></span>' + "</a>" + "</p>" + "</li>" + n + '<li><a href="#" j-delegate="j-logoutBtn">退出登录</a></li> ' + "</ul>" + "</div>" + '<iframe class="frameLayer" data-elem="bg"></iframe> ';
        m.isPPS() || (i = '<div data-elem="main" class="usrTx-inner-box usrTx-box_popup"><i class="nav_arrow"></i><div class="usrTx-inner-addCode-bd clearfix"><div class="usrTx-inner-addCode-lt fl"><ul class="usrTx-inner-box_bd"><li class="usrTx-inner-box_userInfo"><span style="display: block;" class="usrTx-name" data-private-display="block"><span><a rseat="tj_usrclk" data-userbox-elem="username" class="myName" href="' + e + '" data-elem="homeLink"></a>' + '<i data-userbox-elem="vipicon" style="display: block;" class="kthy0201"></i>' + '<i data-userbox-elem="notvipicon" style="display: none;" class="no-kthy0201" data-private-display="block"></i>' + "</span>" + "</span>" + "</li>" + '<li class="hoverNoBg">' + '<span class="user-img-70">' + '<a href="http://www.iqiyi.com/u/" data-elem="homeLink">' + '<img data-userbox-elem="avatar" src="" ' + 'defaultsrc="http://www.qiyipic.com/common/fix/record_images/usrsmall_index.png">' + "</a>" + "</span>" + "</li>" + '<li><a href="http://www.iqiyi.com/u/" data-elem="homeLink">个人中心</a></li>' + '<li><a href="http://vip.iqiyi.com/?fc=8c35dcfbce83bcc1" data-elem="vipLink">VIP会员首页</a></li>' + "<li>" + '<a href="" data-userbox-elem="ppsGameLink" target="_blank">我的游戏</a>' + "</li>" + '<li class="bottomLine-e2">' + '<a target="_blank" rseat="tj_usrclk_gwc" href="http://mall.iqiyi.com/shoppingcart.html">我的购物车</a></li>' + "<li>" + '<a j-delegate="j-logoutBtn" href="#">退出登录</a>' + "</li>" + "</ul>" + "</div>" + '<div class="usrTx-inner-addCode-rt fl" data-widget-qrcodeauth="qrcodeAuth">' + '<p class="c-333 p-code-tit">使用爱奇艺移动APP扫描同步登录</p>' + "<!-- 状态1 -->" + '<div class="iqyCode-container" style="display:none;" data-qrcodeauth-elem="loadedWrapper">' + '<p class="iqyCode-pic" data-qrcodeauth-elem="qrcodeImgCon">' + '<img width="135" height="135" ' + 'src="http://www.qiyipic.com/common/fix/site/iqyCode-small.jpg" data-qrcodeauth-elem="qrcodeImg">' + "</p>" + '<p class="updateCode">' + '<em class="green" data-qrcodeauth-elem="updateTimerTip">60</em>秒后为您更新二维码' + "</p>" + "</div>" + "<!-- 状态1 end-->" + "<!-- 状态2-->" + '<div style="display:none" class="codeBorder suc-login-tip" data-qrcodeauth-elem="loginSuccess">' + '<span class="suc-txt green">您已成功登录！</span>' + "</div>" + "<!-- 状态2 end-->" + "<!-- 状态3-->" + '<div class="getcodePic-con" data-qrcodeauth-elem="loadingWrapper">' + '<div class="codeBorder getcodePic">' + '<div class="getCode-bd">' + '<p><img src="http://www.qiyipic.com/common/images/load.gif"></p>' + '<span class="getIngTxt">正在获取...</span>' + "</div>" + "</div>" + '<p class="updateCode">' + '<em class="green">60</em>秒后为您更新二维码' + "</p>" + "</div>" + "<!-- 状态3 end-->" + "<!-- 状态4-->" + '<div class="codeBorder getCode-error" style="display:none" data-qrcodeauth-elem="loadFailWrapper">' + "<i></i>" + '<div class="againGet">' + "<p>获取二维码失败</p>" + '<p>请<a href="javascript:;" data-qrcodeauth-elem="reloadBtn">点击此处重试</a></p>' + "</div>" + "</div>" + "<!-- 状态4 end-->" + "</div>" + "</div>" + "</div>");
        var r = this._doms.wrapper;
        if (r) {
          r.html(i), this._doms.avatar = r.down('[data-userbox-elem="avatar"]'), this._doms.username = r.down('[data-userbox-elem="username"]'), this._doms.vipicon = r.down('[data-userbox-elem="vipicon"]'), this._doms.notvipicon = r.down('[data-userbox-elem="notvipicon"]'), this._doms.homeLink = r.down('[data-elem="homeLink"]'), this._doms.vipLink = r.down('[data-elem="vipLink"]'), this._doms.ppsGameLink = r.down('[data-userbox-elem="ppsGameLink"]'), this._doms.followLink = r.down('[data-userbox-elem="followLink"]'), this._doms.favLink = r.down('[data-userbox-elem="favLink"]'), this._doms.recordLink = r.down('[data-userbox-elem="recordLink"]'), this._doms.videoLink = r.down('[data-userbox-elem="videoLink"]'), this._doms.bingoLink = r.down('[data-userbox-elem="bingoLink"]'), this._doms.main = r.down("[data-elem='main']"), this._doms.bg = r.down("[data-elem='bg']"), a.isLogin() && (c.begin(), this.initUserInfo(), this.startSync());
          try {
            var o = r.down("[data-widget-qrcodeauth]");
            this._pullInterval = 2e3, this._doms.qrcodeAuth = o, this._doms.qrcodeLoadedWrapper = o.down("[data-qrcodeauth-elem=loadedWrapper]"), this._doms.qrcodeLoadingWrapper = o.down("[data-qrcodeauth-elem=loadingWrapper]"), this._doms.qrcodeLoadFailWrapper = o.down("[data-qrcodeauth-elem=loadFailWrapper]"), this._doms.qrcodeLoginSuccessWrapper = o.down("[data-qrcodeauth-elem=loginSuccess]"), this._doms.qrcodeImgCon = o.down("[data-qrcodeauth-elem=qrcodeImgCon]"), this._doms.qrcodeImg = o.down("[data-qrcodeauth-elem=qrcodeImg]"), this._doms.qrcodeUpdateTimerTip = o.down("[data-qrcodeauth-elem=updateTimerTip]"), this._doms.qrcodeReloadBtn = o.down("[data-qrcodeauth-elem=reloadBtn]"), this.initQrcodeAuth()
          } catch (s) {
          }
        }
        this.domReady = !0, h.fire({type: "pcUserBoxDomReady", data: {wrapper: r, html: i}})
      }, initQrcodeAuth: function () {
        var e = this;
        e.refreshQrcode(), e._doms.qrcodeReloadBtn.on("click", e.refreshQrcode.bind(e))
      }, refreshQrcode: function () {
        if (this.visible) {
          try {
            this._doms.qrcodeLoadingWrapper.show(), this._doms.qrcodeLoadedWrapper.hide(), this._doms.qrcodeLoadFailWrapper.hide(), this._doms.qrcodeLoginSuccessWrapper.hide()
          } catch (e) {
            return
          }
          var t = this;
          t._agenttype = 1, t._device_name = "网页端";
          var n = {agenttype: t._agenttype, Code_type: 2, device_name: t._device_name, authcookie: a.getAuthCookies()};
          o.genLoginAuthToken(n, function (e) {
            var n = "http://passport.iqiyi.com/apis/qrcode/opt/request_login.action?";
            if ("A00000" === e.code) {
              t._loginToken = e.data.token, t._loginTokenExpire = e.data.expire;
              var i, a = ["token=" + encodeURIComponent(e.data.token), "Code_type=2", "agenttype=" + encodeURIComponent(t._agenttype)], o = {
                data: n + a.join("&"),
                width: 162
              }, s = r.getQrCoder(o) + "&_=" + Math.random(), l = t._doms.qrcodeImg[0];
              l.onload = function () {
                l.onload = l.onerror = function () {
                }, clearTimeout(i), t.qrcodeImgSrcChanged()
              }, l.onerror = function () {
                l.onload = l.onerror = function () {
                }, clearTimeout(i), t._doms.qrcodeLoadingWrapper.hide(), t._doms.qrcodeLoadFailWrapper.show()
              }, i = setTimeout(function () {
                l.onerror()
              }, 1e4), t._doms.qrcodeImg.attr("src", s)
            }
          })
        }
      }, qrcodeImgSrcChanged: function () {
        function e() {
          o.checkAuthTokenRequested({agenttype: t._agenttype, token: t._loginToken}, function (i) {
            if ("A00000" === i.code)try {
              o.confirmAuthTokenLogin({
                agenttype: t._agenttype,
                token: t._loginToken,
                authcookie: a.getAuthCookies()
              }, function (e) {
                "A00000" === e.code && (t._doms.qrcodeLoadedWrapper.hide(), t._doms.qrcodeLoginSuccessWrapper.show(), setTimeout(t.refreshQrcode.bind(t), 3e3))
              })
            } catch (r) {
            } else clearTimeout(t._pollAuthTokenLoginTimer), !n && t.visible && (t._pollAuthTokenLoginTimer = setTimeout(e, t._pullInterval))
          })
        }

        var t = this;
        if (t._doms.qrcodeLoadingWrapper.hide(), t._doms.qrcodeLoadedWrapper.show(), t.visible) {
          var n = !1;
          t._pollAuthTokenLoginTimer = setTimeout(e, t._pullInterval), setTimeout(function () {
            n = !0, clearTimeout(t._pollAuthTokenLoginTimer), t._pollAuthTokenLoginTimer = null
          }, 1e3 * t._loginTokenExpire);
          var i = 60;
          t._doms.qrcodeUpdateTimerTip.html(i), clearInterval(t._refreshTipInterval), t._refreshTipInterval = setInterval(function () {
            return i--, t._doms.qrcodeUpdateTimerTip.html(i), t.visible ? (0 >= i && (clearInterval(t._refreshTipInterval), t._refreshTipInterval = null, t.visible && t.refreshQrcode()), void 0) : (clearInterval(t._refreshTipInterval), void 0)
          }, 1e3)
        }
      }, _bindEvent: function () {
        var e = this._doms, t = this;
        e.wrapper.delegate("j-logoutBtn", function (e) {
          Q.event.get(e.event).preventDefault(), l.logout()
        });
        var n = function (e, t, n) {
          var i = Q.event.get(t);
          i.preventDefault();
          var a = Q.$(e).attr("href");
          s.send(n, function () {
            d.href(a)
          })
        }, i = function (e, t, n) {
          Q.$(e).attr("href"), s.send(n)
        };
        e.homeLink && e.homeLink.on("click", function (e) {
          n(this, e, "gerenzhongxinclk")
        }), e.vipLink && e.vipLink.on("click", function (e) {
          n(this, e, "vipcntrclk")
        }), e.ppsGameLink && e.ppsGameLink.on("click", function (e) {
          i(this, e, "myppsgameclk")
        }), e.followLink && e.followLink.on("click", function (e) {
          n(this, e, "micromyattntnclk")
        }), e.favLink && e.favLink.on("click", function (e) {
          n(this, e, "micromyfavrtclk")
        }), e.recordLink && e.recordLink.on("click", function (e) {
          i(this, e, "microrecordclk")
        }), e.videoLink && e.videoLink.on("click", function (e) {
          n(this, e, "micromyupldclk")
        }), e.bingoLink && e.bingoLink.on("click", function (e) {
          n(this, e, "microrecommendclk")
        }), Q.$(document).delegate("D-code-login", function () {
          Q.$("#J_nav-login-info_code").removeClass("dn"), Q.$("#nav-login-info").addClass("dn");
          try {
            var n = e.wrapper.down("[data-widget-qrcodeauth]");
            t._pullInterval = 2e3, t._doms.qrcodeAuth = n, t._doms.qrcodeLoadedWrapper = n.down("[data-qrcodeauth-elem=loadedWrapper]"), t._doms.qrcodeLoadingWrapper = n.down("[data-qrcodeauth-elem=loadingWrapper]"), t._doms.qrcodeLoadFailWrapper = n.down("[data-qrcodeauth-elem=loadFailWrapper]"), t._doms.qrcodeLoginSuccessWrapper = n.down("[data-qrcodeauth-elem=loginSuccess]"), t._doms.qrcodeImgCon = n.down("[data-qrcodeauth-elem=qrcodeImgCon]"), t._doms.qrcodeImg = n.down("[data-qrcodeauth-elem=qrcodeImg]"), t._doms.qrcodeUpdateTimerTip = n.down("[data-qrcodeauth-elem=updateTimerTip]"), t._doms.qrcodeReloadBtn = n.down("[data-qrcodeauth-elem=reloadBtn]"), t.initQrcodeAuth()
          } catch (i) {
          }
        }), Q.$(document).delegate("D-login-return", function (e) {
          Q.event.get(e).preventDefault(), Q.$("#J_nav-login-info_code").addClass("dn"), Q.$("#nav-login-info").removeClass("dn")
        })
      }, initUserInfo: function () {
        var e = this._doms;
        a.getIsLoginInfo(function (t) {
          var n = e.avatar, i = e.username;
          if (t && t.icon)n.attr("src", t.icon); else {
            var r = n.attr("defaultSrc");
            n.attr("src", r)
          }
          var o = a.getName();
          Q.browser.IE6 && i.css("width", Math.min(10 * o.length, 76) + "px"), V(i, o)
        }), a.getIsValidVip(function (t) {
          t ? (e.vipicon.css("display", "inline-block"), e.notvipicon.hide()) : (e.vipicon.hide(), e.notvipicon.css("display", "inline-block"))
        });
        var t = encodeURIComponent(a.getAuthCookies()), n = "http://i.pps.tv/auth_login.php?P00001=" + t + "&pre_url=" + encodeURIComponent("http://g.pps.tv/");
        e.ppsGameLink.attr("href", n), "http://i.pps.tv/auth_login.php?P00001=" + t + "&pre_url=" + encodeURIComponent("http://my.ipd.pps.tv/upload_external.php")
      }, startSync: function () {
        var e = this;
        e.syncTimer || (e.syncTimer = setTimeout(function () {
        }, 6e4))
      }, stopSync: function () {
        this.syncTimer && (clearTimeout(this.syncTimer), this.syncTimer = null)
      }, resetUserInfo: function () {
      }, show: function () {
        var e = this;
        this.visible || (this.domReady || (m.isPPS() ? e._rendererPanel() : U.getProfile({
          fields: "prus,userinfo,qiyi_vip",
          authcookie: Q.cookie.get("P00007")
        }, function (t) {
          "A00000" === t.code && (e._rendererPanelNew(t), Q.event.customEvent.fire({type: "upgradeInit", data: t}))
        }), this._bindEvent()), h.fire({
          type: "beforePcUserBoxShow",
          data: {wrapper: this._doms.wrapper}
        }), this._doms.wrapper.show(), Q.event.customEvent.fire({
          type: "navOneShow",
          data: {from: "pcUserBoxView"}
        }), this.visible = !0, this._doms.bg && this._doms.main && this._doms.bg.css("height", this._doms.main.height() + "px"), s.send("microperdivshow"), h.fire({
          type: "pcUserBoxShow",
          data: {wrapper: this._doms.wrapper}
        }), this.refreshQrcode())
      }, hide: function () {
        this.visible && (h.fire({
          type: "beforePcUserBoxHide",
          data: {wrapper: this._doms.wrapper}
        }), this._doms.wrapper.hide(), this.visible = !1, h.fire({
          type: "pcUserBoxHide",
          data: {wrapper: this._doms.wrapper}
        }))
      }, toggle: function () {
        this.visible ? this.hide() : this.show()
      }, _rendererPanelNew: function (e) {
        var t = this, n = t._doms.wrapper, i = null, r = "";
        if (a.getIsValidVip(function (e) {
            a.getLevel(function (t) {
              r = e ? "qyvr" + t + " qyv-rank" : "qyvr-gray" + t + " qyv-rank"
            })
          }), e.data._vipClass = r, e.data.purs && (e.data.listsLen = Q.url.jsonToQuery(e.data.purs).split("&").length), e.data.qiyi_vip_info) {
          e.data.qiyi_vip_info.deadline.formatDate = Q.date.format(new Date(e.data.qiyi_vip_info.deadline.t), "yyyy-MM-dd");
          var o = e.data.qiyi_vip_info.deadline.t - (new Date).getTime(), s = Math.ceil(o / 864e5, 10);
          e.data.qiyi_vip_info.deadline.t = s, s > 0 && (e.data.qiyi_vip_info.flag = !0);
          var l = e.data.qiyi_vip_info.payType, d = parseInt(l, 10);
          1 === d && (e.data.qiyi_vip_info.surplus = "30")
        }
        var m = {area: "nemo", ppuid: e.data.userinfo.uid, rltnum: 4};
        i = u(p.tpl0, {
          tpl1: p.tpl1,
          tpl2: p.tpl2,
          tpl3: p.tpl3,
          tpl4: p.tpl4,
          tpl5_1: p.tpl5_1,
          tpl6: p.tpl6,
          data: e.data,
          lists: {}
        }, e.data), n.html(i), t.domReady = !0, h.fire({
          type: "pcUserBoxDomReady",
          data: {wrapper: n, html: i}
        }), t._bindHomeEvent(), U.getFollows({
          rows: 4,
          page: 1,
          subscribeType: 1,
          sort: "latestUpdate",
          fields: "userinfo"
        }, function (e) {
          try {
            if ("A00000" === e.code && e.data.list.length) {
              e.data = e.data.list;
              for (var t = [], i = 0, a = 0; a < e.data.length; a++)i += e.data[a].unread, e.data[a].unread > 99 ? e.data[a].unread = "99+" : e.data[a].unread <= 0 && (t = t.concat(e.data.splice(a, 1)), a--);
              return e.totalUnread = i, e.data = e.data.concat(t), e.len = e.data.length, e.subText = "订阅", e.subUrl = "http://www.iqiyi.com/u/sub", n.down('[data-userbox-elem="subscribe"]').html(u(p.tpl5_2, e)), void 0
            }
          } catch (r) {
          }
          U.recommendSubscription(m, function (e) {
            "A00000" === e.code && (e.len = e.data.length, e.subText = "推荐订阅", e.subUrl = "http://www.iqiyi.com/official", e.data.forEach(function (e) {
              e.unread = 0, e.fuid = e.id, e.userInfo = {nickname: e.nick_name, icon: e.icon}
            }), n.down('[data-userbox-elem="subscribe"]').html(u(p.tpl5_2, e)))
          })
        })
      }, _bindHomeEvent: function () {
        var e = this;
        Q.$("#nav-login-info").delegate("D-home-link", function (t) {
          var n = Q.$(t.target);
          Q.event.get(t.event).preventDefault();
          var i = n.attr("data-id"), a = Q.$('[data-playhistory-elem="tip"]'), r = {
            authcookie: Q.cookie.get("P00001"),
            fields: "prus,userinfo,qiyi_vip",
            pru: i
          };
          U.getHomeInfo(r, function (t) {
            "A00000" === t.code && (e._rendererPanelNew(t), e._setNavInfo(t), Q.cookie.get("P00003") === Q.cookie.get("P00PRU") ? a.css("display", "block") : a.css("display", "none"), h.fire({
              type: "accountSwitched",
              data: {}
            }))
          })
        })
      }, _setNavInfo: function (e) {
        Q.$('[data-vipheader-elem="vipicon"]');
        var t = Q.$("#permovset-username");
        if (Q.$("#top-username").html(e.data.userinfo.nickname), Q.$("[data-banner-elem]") || t) {
          var n = window.location.href;
          return window.location.href = n, !1
        }
        var i = window.location.href;
        return i.indexOf("http://www.iqiyi.com/dianying") >= 0 ? (window.location.href = i, !1) : void 0
      }
    }
  })
});
define("../../kit/qrCoder", [], function (e, t, n) {
  new Q.ic.InfoCenter({moduleName: "kit/qrCoder"});
  var i = "http://qrcode.qiyipic.com/qrcoder/?";
  n.exports = {
    getQrCoder: function (e) {
      var t = e.data, n = encodeURIComponent(t), a = e.md5 || "35f4223bb8f6c8638dc91d94e9b16f5";
      e.property = e.property || 0;
      for (var r = [{key: "!", value: "%21"}], o = 0, s = r.length; s > o; o++) {
        var l = new RegExp(r[o].key, "g");
        n = n.replace(l, r[o].value)
      }
      var d = a + n, h = Q.crypto.md5(d), m = [];
      m.push("data=" + n), m.push("&salt=" + h);
      for (var c in e)"data" != c && m.push(c + "=" + e[c]);
      var u = i + m.join("&");
      return u
    }
  }
});
define("../../kit/qrcodeLoginKit", ["../interfaces/qrcodeLoginInterface", "./qrCoder", "../config/loginMsg"], function (e, t, n) {
  var i = e("../interfaces/qrcodeLoginInterface");
  e("./qrCoder"), Q.event.customEvent, e("../config/loginMsg"), new Q.ic.InfoCenter({moduleName: "qrcodeLoginKit"}), n.exports = {
    genLoginToken: function (e, t) {
      var n = new i({ifname: "genLoginTokenIf"});
      n.request(e, function (e) {
        t(e)
      })
    }, genLoginAuthToken: function (e, t) {
      var n = new i({ifname: "genLoginAuthTokenIf"});
      n.request(e, function (e) {
        t(e)
      })
    }, checkTokenLogin: function (e, t) {
      var n = new i({ifname: "checkTokenLoginIf"});
      n.request(e, function (e) {
        t(e)
      })
    }, checkAuthTokenRequested: function (e, t) {
      var n = new i({ifname: "checkAuthTokenRequestIf"});
      n.request(e, function (e) {
        t(e)
      })
    }, confirmAuthTokenLogin: function (e, t) {
      var n = new i({ifname: "confirmLoginIf"});
      n.request(e, function (e) {
        t(e)
      })
    }
  }
});
define("../../interfaces/qrcodeLoginInterface", ["../kit/remoteInterface"], function (e, t, n) {
  var i = e("../kit/remoteInterface");
  n.exports = Q.Class("QrCodeLoginInterface", {
    construct: function (e) {
      e = e || {}, this._ifname = e.ifname, this._remoteInterface = new i({
        genLoginTokenIf: {
          url: "http://passport.iqiyi.com/apis/qrcode/gen_login_token.action",
          struct: {code: {type: "string", empty: !1}, data: {type: "object", empty: !1, struct: {}}}
        },
        checkTokenLoginIf: {
          url: "http://passport.iqiyi.com/apis/qrcode/is_token_login.action",
          struct: {code: {type: "string", empty: !1}, data: {type: "object", empty: !1, struct: {}}}
        },
        genLoginAuthTokenIf: {
          url: "http://passport.iqiyi.com/apis/qrcode/opt/gen_login_token.action",
          struct: {code: {type: "string", empty: !1}, data: {type: "object", empty: !1, struct: {}}}
        },
        checkAuthTokenRequestIf: {
          url: "http://passport.iqiyi.com/apis/qrcode/opt/is_login_requested.action",
          struct: {code: {type: "string", empty: !1}, data: {type: "object", empty: !1, struct: {}}}
        },
        confirmLoginIf: {
          url: "http://passport.iqiyi.com/apis/qrcode/opt/login_confirm.action",
          struct: {code: {type: "string", empty: !1}, data: {type: "object", empty: !1, struct: {}}}
        }
      })
    }, methods: {
      request: function (e, t) {
        e = e || {};
        var n = e.ifname || this._ifname || "videoUserProfileIf", i = e.timeout || 5e3;
        delete e.ifname, delete e.timeout, this._remoteInterface.send({
          ifname: n,
          param: e,
          dataType: "jsonp",
          timeout: i
        }, function (n) {
          t && t(n, e)
        })
      }
    }
  })
});
define("../../kit/period", [], function (e, t) {
  var n = function () {
    this.beginPoint = null
  };
  n.prototype.begin = function () {
    return this.beginPoint = Date.now && Date.now() || (new Date).getTime(), this.beginPoint
  }, n.prototype.end = function (e) {
    if (null === this.beginPoint)return null;
    var t = (Date.now && Date.now() || (new Date).getTime()) - this.beginPoint;
    return this.beginPoint = null, e && e(t), t
  }, t.create = function () {
    return new n
  }
});
define("../../kit/loadDivPingback", ["../kit/userInfo", "../kit/checkI18nType"], function (e, t) {
  var n = e("../kit/userInfo"), i = e("../kit/checkI18nType");
  t.send = function (e, t, a) {
    Q.log.server({
      type: "navdivshowltd20130813",
      divtype: e,
      ltd: t,
      jsuid: Q.cookie.get("QC006"),
      flshuid: Q.cookie.get("QC005"),
      pru: Q.cookie.get("P00PRU") || "",
      ppuid: n.getUid() || "",
      mod: i.mod,
      qtcurl: window.location.href
    }, "http://msg.71.am/tmpstats.gif"), a && a()
  }
});
define("../../kit/juicer", [], function (e, t, n) {
  !function () {
    var e = function () {
      var t = [].slice.call(arguments);
      return t.push(e.options), t[0].match(/^\s*#([\w:\-\.]+)\s*$/gim) && t[0].replace(/^\s*#([\w:\-\.]+)\s*$/gim, function (e, n) {
        var i = document, a = i && i.getElementById(n);
        t[0] = a ? a.value || a.innerHTML : e
      }), 1 == arguments.length ? e.compile.apply(e, t) : arguments.length >= 2 ? e.to_html.apply(e, t) : void 0
    }, t = {
      escapehash: {"<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&#x27;", "/": "&#x2f;"},
      escapereplace: function (e) {
        return t.escapehash[e]
      },
      escaping: function (e) {
        return "string" != typeof e ? e : e.replace(/[&<>"]/gim, this.escapereplace)
      },
      detection: function (e) {
        return "undefined" == typeof e ? "" : e
      }
    }, i = function (e) {
      var t = window.console;
      if ("undefined" != typeof t) {
        if (t.warn)return t.warn(e), void 0;
        if (t.log)return t.log(e), void 0
      }
      throw e
    }, a = function (e, t) {
      if (e = e !== Object(e) ? {} : e, e.__proto__)return e.__proto__ = t, e;
      var n = function () {
      }, i = Object.create ? Object.create(t) : new Object(n.prototype = t, n);
      for (var a in e)e.hasOwnProperty(a) && (i[a] = e[a]);
      return i
    };
    e.__cache = {}, e.version = "0.6.5-stable", e.settings = {}, e.tags = {
      operationOpen: "{@",
      operationClose: "}",
      interpolateOpen: "\\${",
      interpolateClose: "}",
      noneencodeOpen: "\\$\\${",
      noneencodeClose: "}",
      commentOpen: "\\{#",
      commentClose: "\\}"
    }, e.options = {
      cache: !0,
      strip: !0,
      errorhandling: !0,
      detection: !0,
      _method: a({__escapehtml: t, __throw: i, __juicer: e}, {})
    }, e.tagInit = function () {
      var t = e.tags.operationOpen + "each\\s*([^}]*?)\\s*as\\s*(\\w*?)\\s*(,\\s*\\w*?)?" + e.tags.operationClose, n = e.tags.operationOpen + "\\/each" + e.tags.operationClose, i = e.tags.operationOpen + "if\\s*([^}]*?)" + e.tags.operationClose, a = e.tags.operationOpen + "\\/if" + e.tags.operationClose, r = e.tags.operationOpen + "else" + e.tags.operationClose, o = e.tags.operationOpen + "else if\\s*([^}]*?)" + e.tags.operationClose, s = e.tags.interpolateOpen + "([\\s\\S]+?)" + e.tags.interpolateClose, l = e.tags.noneencodeOpen + "([\\s\\S]+?)" + e.tags.noneencodeClose, d = e.tags.commentOpen + "[^}]*?" + e.tags.commentClose, h = e.tags.operationOpen + "each\\s*(\\w*?)\\s*in\\s*range\\(([^}]+?)\\s*,\\s*([^}]+?)\\)" + e.tags.operationClose, m = e.tags.operationOpen + "include\\s*([^}]*?)\\s*,\\s*([^}]*?)" + e.tags.operationClose;
      e.settings.forstart = new RegExp(t, "igm"), e.settings.forend = new RegExp(n, "igm"), e.settings.ifstart = new RegExp(i, "igm"), e.settings.ifend = new RegExp(a, "igm"), e.settings.elsestart = new RegExp(r, "igm"), e.settings.elseifstart = new RegExp(o, "igm"), e.settings.interpolate = new RegExp(s, "igm"), e.settings.noneencode = new RegExp(l, "igm"), e.settings.inlinecomment = new RegExp(d, "igm"), e.settings.rangestart = new RegExp(h, "igm"), e.settings.include = new RegExp(m, "igm")
    }, e.tagInit(), e.set = function (e, t) {
      var n = this, i = function (e) {
        return e.replace(/[\$\(\)\[\]\+\^\{\}\?\*\|\.]/gim, function (e) {
          return "\\" + e
        })
      }, a = function (e, t) {
        var a = e.match(/^tag::(.*)$/i);
        return a ? (n.tags[a[1]] = i(t), n.tagInit(), void 0) : (n.options[e] = t, void 0)
      };
      if (2 === arguments.length)return a(e, t), void 0;
      if (e === Object(e))for (var r in e)e.hasOwnProperty(r) && a(r, e[r])
    }, e.register = function (e, t) {
      var n = this.options._method;
      return n.hasOwnProperty(e) ? !1 : (n[e] = t, n[e])
    }, e.unregister = function (e) {
      var t = this.options._method;
      return t.hasOwnProperty(e) ? delete t[e] : void 0
    }, e.template = function (t) {
      var n = this;
      this.options = t, this.__interpolate = function (e, t, n) {
        var i, a = e.split("|"), r = a[0] || "";
        return a.length > 1 && (e = a.shift(), i = a.shift().split(","), r = "_method." + i.shift() + ".call({}, " + [e].concat(i) + ")"), "<%= " + (t ? "_method.__escapehtml.escaping" : "") + "(" + (n && n.detection === !1 ? "" : "_method.__escapehtml.detection") + "(" + r + ")" + ")" + " %>"
      }, this.__removeShell = function (t, i) {
        var a = 0;
        return t = t.replace(e.settings.forstart, function (e, t, n, i) {
          var r = n || "value", o = i && i.substr(1), s = "i" + a++;
          return "<% ~function() {for(var " + s + " in " + t + ") {" + "if(" + t + ".hasOwnProperty(" + s + ")) {" + "var " + r + "=" + t + "[" + s + "];" + (o ? "var " + o + "=" + s + ";" : "") + " %>"
        }).replace(e.settings.forend, "<% }}}(); %>").replace(e.settings.ifstart, function (e, t) {
          return "<% if(" + t + ") { %>"
        }).replace(e.settings.ifend, "<% } %>").replace(e.settings.elsestart, function () {
          return "<% } else { %>"
        }).replace(e.settings.elseifstart, function (e, t) {
          return "<% } else if(" + t + ") { %>"
        }).replace(e.settings.noneencode, function (e, t) {
          return n.__interpolate(t, !1, i)
        }).replace(e.settings.interpolate, function (e, t) {
          return n.__interpolate(t, !0, i)
        }).replace(e.settings.inlinecomment, "").replace(e.settings.rangestart, function (e, t, n, i) {
          var r = "j" + a++;
          return "<% ~function() {for(var " + r + "=" + n + ";" + r + "<" + i + ";" + r + "++) {{" + "var " + t + "=" + r + ";" + " %>"
        }).replace(e.settings.include, function (e, t, n) {
          if (t.match(/^file\:\/\//gim))return e;
          var i = "<%= _method.__juicer(" + t + ", " + n + "); %>";
          return i
        }), i && i.errorhandling === !1 || (t = "<% try { %>" + t, t += '<% } catch(e) {_method.__throw("Juicer Render Exception: "+e.message);} %>'), t
      }, this.__toNative = function (e, t) {
        return this.__convert(e, !t || t.strip)
      }, this.__lexicalAnalyze = function (t) {
        var n = [], i = [], a = "", r = ["if", "each", "_", "_method", "console", "break", "case", "catch", "continue", "debugger", "default", "delete", "do", "finally", "for", "function", "in", "instanceof", "new", "return", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "null", "typeof", "class", "enum", "export", "extends", "import", "super", "implements", "interface", "let", "package", "private", "protected", "public", "static", "yield", "const", "arguments", "true", "false", "undefined", "NaN"], o = function (e, t) {
          if (Array.prototype.indexOf && e.indexOf === Array.prototype.indexOf)return e.indexOf(t);
          for (var n = 0; n < e.length; n++)if (e[n] === t)return n;
          return -1
        }, s = function (t, a) {
          if (a = a.match(/\w+/gim)[0], -1 === o(n, a) && -1 === o(r, a) && -1 === o(i, a)) {
            if ("undefined" != typeof window && "function" == typeof window[a] && window[a].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i))return t;
            var s = {};
            if ("undefined" != typeof s && "function" == typeof s[a] && s[a].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i))return t;
            if ("function" == typeof e.options._method[a] || e.options._method.hasOwnProperty(a))return i.push(a), t;
            n.push(a)
          }
          return t
        };
        t.replace(e.settings.forstart, s).replace(e.settings.interpolate, s).replace(e.settings.ifstart, s).replace(e.settings.elseifstart, s).replace(e.settings.include, s).replace(/[\+\-\*\/%!\?\|\^&~<>=,\(\)\[\]]\s*([A-Za-z_]+)/gim, s);
        for (var l = 0; l < n.length; l++)a += "var " + n[l] + "=_." + n[l] + ";";
        for (var d = 0; d < i.length; d++)a += "var " + i[d] + "=_method." + i[d] + ";";
        return "<% " + a + " %>"
      }, this.__convert = function (e, t) {
        var n = [].join("");
        return n += "'use strict';", n += "var _=_||{};", n += "var _out='';_out+='", n += t !== !1 ? e.replace(/\\/g, "\\\\").replace(/[\r\t\n]/g, " ").replace(/'(?=[^%]*%>)/g, "	").split("'").join("\\'").split("	").join("'").replace(/<%=(.+?)%>/g, "';_out+=$1;_out+='").split("<%").join("';").split("%>").join("_out+='") + "';return _out;" : e.replace(/\\/g, "\\\\").replace(/[\r]/g, "\\r").replace(/[\t]/g, "\\t").replace(/[\n]/g, "\\n").replace(/'(?=[^%]*%>)/g, "	").split("'").join("\\'").split("	").join("'").replace(/<%=(.+?)%>/g, "';_out+=$1;_out+='").split("<%").join("';").split("%>").join("_out+='") + "';return _out.replace(/[\\r\\n]\\s+[\\r\\n]/g, '\\r\\n');"
      }, this.parse = function (e, t) {
        var i = this;
        return t && t.loose === !1 || (e = this.__lexicalAnalyze(e) + e), e = this.__removeShell(e, t), e = this.__toNative(e, t), this._render = new Function("_, _method", e), this.render = function (e, t) {
          return t && t === n.options._method || (t = a(t, n.options._method)), i._render.call(this, e, t)
        }, this
      }
    }, e.compile = function (e, t) {
      t && t === this.options || (t = a(t, this.options));
      try {
        var n = this.__cache[e] ? this.__cache[e] : new this.template(this.options).parse(e, t);
        return t && t.cache === !1 || (this.__cache[e] = n), n
      } catch (r) {
        return i("Juicer Compile Exception: " + r.message), {
          render: function () {
          }
        }
      }
    }, e.to_html = function (e, t, n) {
      return n && n === this.options || (n = a(n, this.options)), this.compile(e, n).render(t, n._method)
    }, "undefined" != typeof n && n.exports ? n.exports = e : this.juicer = e
  }()
});
define("../../view/pcUserBoxViewtpl", [], function (e, t, n) {
  var i = {
    tpl0: ["{@include tpl6,data}", '<div class="nav-login-info nav-login-info-new" id="nav-login-info">', '<div class="nav-login-inner"><span class="nav-login_arrow"><i class="tip_outer"></i> <i class="tip_inner"></i></span>', '<div class="nav-login-bd">', "{@include tpl1,data}", '<div class="nav-login-profile {@if (data.qiyi_vip_info != null && data.qiyi_vip_info.surplus !="")  || data.purs != null}profile-fold{@/if}">', '{@if (data.qiyi_vip_info != null && data.qiyi_vip_info.surplus !="")  || data.purs != null}', "{@if data.purs == null}", "{@include tpl2,data}", "{@else}", "{@include tpl3,data}", "{@/if}", "{@/if}", "</div>", '<div class="nav-login-bottom clearfix">', "{@include tpl4,data}", "{@include tpl5_1,lists}", "</div>", "</div>", '<iframe data-elem="bg" class="frameLayer ', "{@if data.purs == null && data.qiyi_vip_info != null}", "frameLayer-vip_1", "{@else data.purs != null && data.qiyi_vip_info != null}", "frameLayer-vip_2", "{@/if}", '"></iframe>', "</div>"].join(""),
    tpl1: ['<div class="nav-login-top clearfix">', '<div class="img">', '<a href="http://www.iqiyi.com/u/" target="_blank" rseat="1503081_1" class="homeLink">', '<img src="${userinfo.icon}" width="50" height="50" rseat="1503081_1" alt="">', "</a>", "</div>", '<div class="title">', '<span class="userName clearfix">', '<a  href="http://www.iqiyi.com/u/" class="userName_link" target="_blank">', '<span class="name" rseat="1503081_2">${userinfo.nickname}</span>', '<a class="${_vipClass}" href="http://www.iqiyi.com/club/" target="_blank" id="J_vip-kthy"></a>', "</a></span>", '{@if qiyi_vip_info != null && qiyi_vip_info.surplus != "" && qiyi_vip_info.status == 1}', '<span class="tip">', "{@if qiyi_vip_info.payType == 1}", "{@if qiyi_vip_info.vipType == 1}黄金{@else if qiyi_vip_info.vipType == 3}白银{@else if qiyi_vip_info.vipType == 4}白金{@/if}", "套餐 手机包月", "{@else if qiyi_vip_info.deadline.t <= 20 }", "{@if qiyi_vip_info.vipType == 1}黄金{@else if qiyi_vip_info.vipType == 3}白银{@else if qiyi_vip_info.vipType == 4}白金{@/if}", "套餐 ${qiyi_vip_info.deadline.t}天后到期 ", '<a href="http://serv.vip.iqiyi.com/order/renew-vip.action?fc=b1155904b6eaa861" class="ml10 vip_link" target="_blank">立即续费</a>', "{@else}", "{@if qiyi_vip_info.vipType == 1}黄金{@else if qiyi_vip_info.vipType == 3}白银{@else if qiyi_vip_info.vipType == 4}白金{@/if}", "套餐 ${qiyi_vip_info.deadline.formatDate}到期", "{@/if}", '<a href="javascript:void(0)" class="vip_link ml20" target="_blank" rseat="1503081_13" data-delegate="j-logoutBtn">退出</a>', "</span>", "{@else}", '{@if qiyi_vip_info==null||qiyi_vip_info.surplus == ""}', '<span class="tip">', '<a href="http://serv.vip.iqiyi.com/order/renew-vip.action?fc=b1155904b6eaa861" class="vip_link" rseat="1503081_4" target="_blank">立即开通VIP 全站无广告 大片随意看</a>', '<a href="javascript:void(0)" class="vip_link ml20" target="_blank" rseat="1503081_13" data-delegate="j-logoutBtn">退出</a>', "</span>", "{@else}", '<span class="tip">', '账号因使用异常已被封停,</a><a href="javascript:void(0)" class="vip_link" data-vipuser-ele="freeTips" >请解封账号</a>', '<a href="javascript:void(0)" class="vip_link ml20" target="_blank" rseat="1503081_13" data-delegate="j-logoutBtn">退出</a>', "</span>", "{@/if}", "{@/if}", " </div>", '<a href="javascript:void(0)" class="code-login" data-delegate="D-code-login" rseat="1503081_7" id="J_code-login"></a></div>'].join(""),
    tpl2: ['<div class="add-family">', '<a href="http://www.iqiyi.com/u/profile/" rseat="1503081_5" target="_blank class="add_slink fs14">', '<i class="add-family_sicon"></i><span>家庭成员</span>', "</a>", "</div>"].join(""),
    tpl3: ['<div class="add-family-list_warp">', '<ul class="add-family-list clearfix">', "{@each purs as item,index}", "<li>", '<a class="homeLink" data-delegate="D-home-link" target="_blank" href="javascript:void(0)" rseat="1503081_17" data-id="${index}">', '<div class="img">', '<img height="50" width="50" alt="" rseat="1503081_17" src="${item.icon}">', "</div>", '<div class="title">${item.nickname}</div></a></li>', "{@/each}", "{@if listsLen < 2}", '<li><a class="add_blink" target="_blank" href="http://www.iqiyi.com/u/profile?entry=1">', '<i class="add-family_bicon"></i>', '<div class="title">家庭成员</div></a></li>', "{@/if}", "</ul>", '<a href="http://www.iqiyi.com/u/profile/" target="_blank" rseat="1503081_6" class="family-amend">成员修改&gt;</a>', "</div>"].join(""),
    tpl4: ['<div class="nav-login-l">', '<ul class="nav-login-list">', '<li><a href="http://www.iqiyi.com/u/" target="_blank" rseat="1503081_8"><i class="nav-icon nav-icon-home"></i>我的首页</a></li>', '<li><a href="http://www.iqiyi.com/club/" target="_blank" rseat="1503081_3"><i class="nav-icon nav-icon-vip"></i>VIP会员俱乐部</a></li>', '<li><a href="http://www.iqiyi.com/u/accountset/" target="_blank" rseat="1503081_12"><i class="nav-icon nav-icon-setup"></i>个人设置</a></li>', '<li><a href="http://passport.iqiyi.com/pages/secure/index.action" rseat="1503081_16" target="_blank"><i class="nav-icon nav-icon-security"></i>安全中心</a></li>', "</ul>", '<ul class="nav-login-list nav-login-list-r">', '<li><a href="http://www.iqiyi.com/u/fav" target="_blank" rseat="1503081_9"><i class="nav-icon nav-icon-stow"></i>收藏</a></li>', '<li><a href="http://vip.game.pps.tv/" target="_blank" rseat="1503081_10"><i class="nav-icon nav-icon-game"></i>游戏</a></li>', '<li><a href="http://mall.iqiyi.com/shoppingcart.html?odfrm=pc_minishoppingcart" target="_blank" rseat="1503081_11">', '<i class="nav-icon nav-icon-cart"></i>购物车<span class="num"></span></a></li>', '<li><a href="http://cserver.iqiyi.com/index?e=4" target="_blank" rseat="510161_5"><i class="nav-icon nav-icon-service"></i>在线客服</a></li>', "</ul>", "</div>"].join(""),
    tpl5_1: '<div class="nav-login-r" data-userbox-elem="subscribe"></div>',
    tpl5_2: ['<h4 class="title-h4">${subText}{@if len >= 4}<a href="${subUrl}" rseat="1503081_15" target="_blank" class="more_new">更多&gt;</a>{@/if}</h4>', '<ul class="nav-user-list">', "{@each data as item}", '<li><a href="http://www.iqiyi.com/u/${item.fuid}" rseat="1503081_14" target="_blank" data-id="${item.fuid}" class="nameLink">', '<span class="img"><img src="${item.userInfo.icon}" width="20" height="20" alt=""></span>', '<span class="title">${item.userInfo.nickname}</span>', '<span class="num{@if item.unread==0} dn{@/if}" data-sub-elem="num">${item.unread}</span>', "</a></li>", "{@/each}"].join(""),
    tpl6: ['<div class="nav-login-info nav-login-info_code nav-login-info-new dn" id="J_nav-login-info_code">', '<div class="nav-login-inner" data-widget-qrcodeauth="qrcodeAuth"><span class="nav-login_arrow"><i class="tip_outer"></i> <i class="tip_inner"></i></span>', '<div class="nav-login-bd">', '<div class="tip">使用爱奇艺移动APP扫描同步登录</div>', '<div class="code-img">', '<div style="" class="iqyCode-container"  style="display: block;" data-qrcodeauth-elem="loadedWrapper">', '<p class="iqyCode-pic" data-qrcodeauth-elem="qrcodeImgCon">', '<img width="135" height="135" src="http://www.qiyipic.com/common/fix/site/iqyCode-small.jpg" data-qrcodeauth-elem="qrcodeImg">', "</p>", '<p class="updateCode"> <em class="green" data-qrcodeauth-elem="updateTimerTip">60</em>秒后为您更新二维码 </p>', "</div>", '<div style="display:none" class="codeBorder getCode-error" data-qrcodeauth-elem="loadFailWrapper"> <i></i>', '<div class="againGet">', "<p>获取二维码失败</p>", '<p>请<a href="javascript:void(0)" data-qrcodeauth-elem="reloadBtn">点击此处重试</a></p>', "</div>", "</div>", '<div style="display:none" class="getcodePic-con" data-qrcodeauth-elem="loadingWrapper" data-private-display="block">', '<div class="codeBorder getcodePic">', '<div class="getCode-bd">', '<p><img src="http://www.qiyipic.com/common/images/load.gif"></p>', '<span class="getIngTxt">正在获取...</span> </div>', "</div>", '<p class="updateCode"> <em class="green">60</em>秒后为您更新二维码 </p>', "</div>", '<div class="codeBorder suc-login-tip" style="display:none" data-qrcodeauth-elem="loginSuccess"> <span class="suc-txt green">您已成功登录！</span> </div>', "</div>", '<a href="javascript:void(0);" class="back-login-info" data-delegate="D-login-return"></a> </div>', "</div>", '<iframe data-elem="bg" class="frameLayer frameLayer-vip_code"></iframe>', "</div>"].join("")
  };
  n.exports = i
});
define("../../interfaces/profileNav", ["../kit/remoteInterface"], function (e, t, n) {
  var i = e("../kit/remoteInterface");
  n.exports = Q.Class("profileNav", {
    construct: function () {
      this._remoteInterface = new i({
        getProfile: {url: "http://passport.iqiyi.com/apis/user/info.action"},
        changeProfile: {url: "https://passport.iqiyi.com/apis/profile/change_profile.action"},
        recommendSubscription: {url: "http://qiyu.iqiyi.com/portal/user"},
        getHomeInfoForPC: {url: "http://passport.iqiyi.com/apis/user/info.action"},
        getHomeInfo: {url: "http://passport.iqiyi.com/apis/profile/change_profile.action"},
        getFollows: {url: "http://subscription.iqiyi.com/services/subscribe/list.htm"}
      })
    }, methods: {
      getProfile: function (e, t) {
        this._remoteInterface.send({
          ifname: "getProfile",
          dataType: "jsonp",
          method: "POST",
          param: e || {}
        }, function (e) {
          t && t(e)
        })
      }, changeProfile: function (e, t) {
        this._remoteInterface.send({
          ifname: "changeProfile",
          dataType: "jsonp",
          method: "POST",
          param: e || {}
        }, function (e) {
          t && t(e)
        })
      }, getFollows: function (e, t) {
        this._remoteInterface.send({
          ifname: "getFollows",
          dataType: "jsonp",
          method: "GET",
          param: e || {}
        }, function (e) {
          t && t(e)
        })
      }, recommendSubscription: function (e, t) {
        this._remoteInterface.send({
          ifname: "recommendSubscription",
          dataType: "jsonp",
          method: "POST",
          param: e || {}
        }, function (e) {
          t && t(e)
        })
      }, getHomeInfoForPC: function (e, t) {
        this._remoteInterface.send({
          ifname: "getHomeInfoForPC",
          dataType: "jsonp",
          method: "POST",
          param: e || {}
        }, function (e) {
          t && t(e)
        })
      }, getHomeInfo: function (e, t) {
        this._remoteInterface.send({
          ifname: "getHomeInfo",
          dataType: "jsonp",
          method: "POST",
          param: e || {}
        }, function (e) {
          t && t(e)
        })
      }
    }
  })
});
define("../../units/vertifyEmail", ["../components/units/pageJob", "../components/action/checkDoms", "../interfaces/resendEmailInterface", "../config/siteDomain", "../kit/findParent"], function (e) {
  var t = e("../components/units/pageJob");
  e("../components/action/checkDoms");
  var n = e("../interfaces/resendEmailInterface"), i = e("../config/siteDomain"), a = e("../kit/findParent"), r = "vertifyEmail";
  t.create(r, {
    getDependentDoms: function () {
      return !0
    }, check: function () {
      return !0
    }, resendEmail: function (e) {
      var t = this, i = new n, r = Q.cookie.get("P00011"), o = Q.$(e), s = a(o, "p"), l = a(o, "li");
      s ? i.resendActivateEmail({code: r}, function () {
        s.html(" "), s.html(t._getTimeHtml());
        var e = Q.$("#J_num");
        t._EcountDown(s, e)
      }) : l && i.resendBindEmail({code: r}, function () {
        l.html(" "), l.html(t._getTimeHtml());
        var e = Q.$("#J_num");
        t._EcountDown(l, e)
      })
    }, setTimerAuto: function () {
      var e = this, t = window.location.href;
      t.indexOf("thirdparty/bind_email_notice") > 0 && e.resendEmail(Q("#J_email-resendSubmit")[0])
    }, init: function () {
      var e = this;
      e.setTimerAuto(), Q.$(document).delegate("resendemail", function (t) {
        var n = Q.event.get(t).target;
        e.resendEmail(n)
      });
      var t = function (e) {
        var t = Q.cookie.get("P000email");
        if (t) {
          var n = /@(.*)\./.exec(t), i = e.down("[data-emailname]"), a = e.down("[data-entermail]");
          if (n && n[1]) {
            i && i.html(t);
            var r = "http://mail." + n[1] + ".com";
            a && a.attr("href", r)
          }
        }
      };
      if (Q.$("[data-registbox-third=thirdUserReg]")) {
        var n = Q.$("[data-registbox-elem='vertifymail']");
        t(n)
      }
      Q.event.customEvent.on("showVertifyEmailInfo", function (e) {
        t(e.data.wrap)
      }), Q.$(document).delegate("modifyemail", function (e) {
        e = Q.event.get(e.event), e.preventDefault(), Q.cookie.remove("P00011", {path: "/", domain: i.getDomain()});
        var t = Q(e.target).attr("href");
        t.indexOf("bind_account.action") > 0 ? window.location.href = t : Q.event.customEvent.fire({
          type: "rePcRegistBoxShow",
          data: {}
        })
      });
      var a = Q.$('[data-widget-registvertifymail="page"]');
      a && (t(a), a.delegate("modifyemail", function (e) {
        Q.event.get(e.event).stop(), Q.cookie.remove("P00011", {
          path: "/",
          domain: i.getDomain()
        }), setTimeout(function () {
          window.location.href = "http://passport.iqiyi.com/pages/register/index.action"
        }, 0)
      }))
    }, _getHtml: function () {
      var e = ['<i class="site-icons square-icon"></i>', "<span>重新发送，</span>", '<a rseat="1411201_rem" href="javascript:void()" class="eA_links" j-delegate="resendemail">', "重发一封"].join("");
      return e
    }, _getTimeHtml: function () {
      var e = ['<i class="site-icons square-icon"></i>', "<span>已发送，</span>", '<span rseat="1411201_rem" style="color:#ccc;">', '<span id="J_num">59</span>', "秒后重发</span>"].join("");
      return e
    }, _EcountDown: function (e, t) {
      var n = this, i = 58, a = null;
      clearInterval(a), a = setInterval(function () {
        return Q.$(t).html(i), 0 === i ? (Q.$(e).html(n._getHtml()), clearInterval(a), !1) : (i--, void 0)
      }, 1e3)
    }
  }), t.add(r)
});
define("../../interfaces/resendEmailInterface", ["../kit/remoteInterface"], function (e, t, n) {
  var i = e("../kit/remoteInterface");
  n.exports = Q.Class("editPwdInterface", {
    construct: function () {
      this._remoteInterface = new i({
        resendActivateEmail: {url: "https://passport.iqiyi.com/apis/secure/resend_activate_email.action"},
        resendBindEmail: {url: "https://passport.iqiyi.com/apis/thirdparty/resend_bind_email.action"}
      })
    }, methods: {
      resendActivateEmail: function (e, t) {
        e = e || {}, this._remoteInterface.send({
          dataType: "jsonp",
          ifname: "resendActivateEmail",
          param: e
        }, function (e) {
          t && t(e)
        })
      }, resendBindEmail: function (e, t) {
        e = e || {}, this._remoteInterface.send({dataType: "jsonp", ifname: "resendBindEmail", param: e}, function (e) {
          t && t(e)
        })
      }
    }
  })
});
define("../../kit/findParent", [], function (e, t, n) {
  var i = function (e, t) {
    if (e && e !== document) {
      var n = e.parentNode;
      if (null == n)return !1;
      var i = Q.$(n).down(t);
      if (i)for (var a = 0, r = i.length; r > a; a++)if (i[a] == e)return !0
    }
    return !1
  }, a = function (e, t) {
    e = Q.$(e);
    for (var n = e[0], a = n.parentNode, r = !1; a && !(r = i(a, t));)a = a.parentNode;
    return r ? Q.$(a) : null
  };
  n.exports = a
});
define("../../units/navHackForIpad", ["../components/units/pageJob", "../components/action/checkDoms", "../kit/userInfo"], function (e) {
  var t = e("../components/units/pageJob"), n = e("../components/action/checkDoms");
  e("../kit/userInfo");
  var i, a = "removeUpload";
  t.create(a, {
    getDependentDoms: function () {
      var e = Q.$("#data-widget-upload");
      return i = {upload: e}
    }, check: function (e) {
      return n(e), !0
    }, init: function () {
      if (i.splitline = Q.$("#data-upload-splitline"), Q.browser.iPad) {
        i.upload[0].style.display = "none", i.splitline && (i.splitline[0].style.display = "none");
        var e = Q.$("*[data-ipadhack-elem=nav]");
        e && e.addClass("forpad")
      }
    }
  }), t.add(a)
});
define("../../units/uploadVideoLink", ["../components/units/pageJob", "../components/action/checkDoms", "../kit/ppsSyncAuthUrl", "../kit/userInfo"], function (e) {
  var t = e("../components/units/pageJob"), n = e("../components/action/checkDoms"), i = e("../kit/ppsSyncAuthUrl");
  e("../kit/userInfo");
  var a = "uploadVideoLink", r = null;
  t.create(a, {
    getDependentDoms: function () {
      var e = Q.$("#data-widget-upload");
      if (e) {
        var t = e.down("a");
        r || (r = []), r.push(t)
      }
      var n = Q.$("[data-widget-uploadvideo=uploadvideo]");
      return n && (r || (r = []), n.forEach(function (e) {
        r.push(Q.$(e))
      })), r
    }, check: function (e) {
      return n(e), !0
    }, init: function () {
      r && r.forEach(function (e) {
        e.on("click", function (e) {
          e = Q.event.get(e), e.preventDefault();
          var t = Q.$(e.target), n = i.getUrl(t.attr("href"));
          "_blank" == t.attr("target") ? window.open(n) : window.location.href = n
        })
      })
    }
  }), t.add(a)
});
define("../../kit/ppsSyncAuthUrl", ["./userInfo"], function (e, t, n) {
  var i = e("./userInfo"), a = function (e) {
    var t = "", n = encodeURIComponent(i.getAuthCookies() || "");
    return t = n ? "http://passport.pps.tv/apis/user/authlogin.action?authcookie=" + n + "&redirect_url=" + encodeURIComponent(e) : "http://passport.pps.tv/pages/user/login.action?url=" + encodeURIComponent(e)
  };
  n.exports = {getUrl: a}
});
define("../../units/sso", ["../components/units/pageJob", "../components/action/checkDoms", "../action/ppsSync", "../config/siteDomain", "../kit/userInfo", "../kit/yingyinPluginV2", "../kit/yingyinSyncLogin"], function (e) {
  var t = e("../components/units/pageJob");
  e("../components/action/checkDoms");
  var n = e("../action/ppsSync"), i = e("../config/siteDomain"), a = e("../kit/userInfo"), r = e("../kit/yingyinPluginV2"), o = e("../kit/yingyinSyncLogin"), s = {};
  t.create("sso", {
    check: function () {
      return !0
    }, init: function () {
      this._buildEvent(), this._doSync()
    }, _buildEvent: function () {
      Q.event.customEvent.on("login", function () {
        s.uid = a.getUid(), s.auth = Q.cookie.get("P00001"), s.uid && s.auth && o.setLoginInfo({
          launcher: r.getPlugin(),
          loginInfo: s
        })
      }), Q.event.customEvent.on("logout", function () {
        o.setLogoutInfo({launcher: r.getPlugin(), loginInfo: {}})
      })
    }, _doSync: function () {
      var e = i.getDomain(), t = "", a = "";
      /pps/.test(e) ? (a = "http://passport.iqiyi.com/apis/user/delcookie.action?agenttype=39", t = "http://passport.iqiyi.com/apis/user/setcookie.action?agenttype=39") : (a = "http://passport.pps.tv/apis/user/delcookie.action?agenttype=39", t = "http://passport.pps.tv/apis/user/setcookie.action?agenttype=39"), this.sync = new n({
        setUrl: t,
        delUrl: a
      }), this.sync.init()
    }
  }), t.add("sso")
});
define("../../action/ppsSync", ["../kit/iframeRequest", "../kit/userInfo"], function (e, t, n) {
  var i = e("../kit/iframeRequest"), a = Q.event.customEvent, r = e("../kit/userInfo");
  n.exports = Q.Class("PpsSync", {
    construct: function (e) {
      e = e || {}, this.setUrl = e.setUrl, this.delUrl = e.delUrl
    }, properties: {setUrl: "", delUrl: ""}, methods: {
      init: function () {
        this.req = new i, a.on("beforeLogout", this._doSync.bind(this, this.delUrl)), a.on("login", this._doSync.bind(this, this.setUrl))
      }, _doSync: function (e) {
        if (e) {
          var t = r.getAuthCookies(), n = {authcookie: t}, i = r.getUid(), a = Q.cookie.get("QC102");
          if (a) {
            var o = a.match(/uid:\d+/gi)[0];
            o && (o = o.replace(/\D+/gi, ""), o === i && (a = a.replace("=1", "=0"), n.fromBaidu = a))
          }
          this.req.getFrame() && this.req.request(e, n)
        }
      }
    }
  })
});
define("../../kit/yingyinSyncLogin", [], function (e, t, n) {
  new Q.ic.InfoCenter({moduleName: "yingyinSyncLogin"}), n.exports = {
    setLoginInfo: function (e) {
      if (e.launcher)try {
        e.loginInfo && e.launcher.SetLoginInfo(101, e.loginInfo.uid, e.loginInfo.auth, 1)
      } catch (t) {
      }
    }, setLogoutInfo: function (e) {
      if (e.launcher)try {
        e.loginInfo && e.launcher.SetLoginInfo(101, e.loginInfo.uid, e.loginInfo.auth, 0)
      } catch (t) {
      }
    }, setClientInfo: function (e) {
      if (e.launcher)try {
        e.loginInfo && e.launcher.SetLoginInfo(100, e.loginInfo.uid, e.loginInfo.auth, e.clientState)
      } catch (t) {
      }
    }, getLoginInfo: function (e) {
      if (e.launcher)try {
        var t = e.launcher.GetLoginInfo(e.pid);
        if (t) {
          var n = t.split("|");
          if (3 == n.length)return {uid: n[0], auth: n[1], state: n[2]}
        } else if ("" === t)return {uid: 0, auth: "", state: 0}
      } catch (i) {
      }
      return null
    }
  }
});
define("../../units/pcplayHistoryV2", ["../components/units/pageJob", "../action/PcPlayHistoryV2", "../view/pcPlayHistoryViewV2", "../model/pcPlayHistoryModelV2", "../model/syncLastVideo", "../action/playhistoryRecorder", "../components/action/checkDoms", "../model/parseItem", "../kit/qiyiPlayer"], function (e) {
  new Q.ic.InfoCenter({moduleName: "units/pcPlayHistory"});
  var t = e("../components/units/pageJob"), n = e("../action/PcPlayHistoryV2"), i = e("../view/pcPlayHistoryViewV2"), a = e("../model/pcPlayHistoryModelV2"), r = e("../model/syncLastVideo"), o = e("../action/playhistoryRecorder"), s = e("../components/action/checkDoms"), l = e("../model/parseItem"), d = e("../kit/qiyiPlayer"), h = "PcplayHistoryV2", c = !(Q.browser.IE6 || Q.browser.IE7 || Q.browser.IE8);
  t.create(h, {
    getDependentDoms: function () {
      return this._widget = Q.$("#widget-playhistory"), this._widget || (this.version = 2.4, this._widget = Q.$("#widget-playhistory-new")), {widget: this._widget}
    }, check: function (e) {
      return s(e), !0
    }, init: function () {
      new r;
      var e = this, t = Q.browser.iPad ? "click" : "mouseover";
      t = "click", e._widget.on(t, function () {
        e._playhistory || e.initPlayHistory(e._widget)
      })
    }, exec: function () {
      var e = navigator.userAgent.toLowerCase();
      if (/ipad/.test(e)) {
        var t = Q.$("video");
        if (t) {
          var n = null;
          if (1 == t.length)n = t.attr("id"); else if (t.length > 1) {
            var i = function (e) {
              for (var n = t.length, i = null, a = 0; n > a; a++)if (Q.$(t[a]).attr("id") == e) {
                i = e;
                break
              }
              return i
            };
            n = i("video"), n || (n = i("flash"))
          }
          var a = new o({playerId: n});
          a.init()
        }
      }
    }, initPlayHistory: function (e) {
      var t = {
        widget: e,
        title: e ? e.down("*[data-playhistory-elem=title]") : null,
        body: e ? e.down("*[data-playhistory-elem=body]") : null,
        historyList: e ? e.down("*[data-playhistory-elem=historylist]") : null,
        reloadingTip: e ? e.down("*[data-playhistory-elem=reloadingtip]") : null,
        reloading: e ? e.down("*[data-playhistory-elem=reloading]") : null,
        nullTip: e ? e.down("*[data-playhistory-elem=nulltip]") : null,
        tip: e ? e.down("*[data-playhistory-elem=tip]") : null,
        tipText: e ? e.down("*[data-playhistory-elem=tiptext]") : null,
        tipClose: e ? e.down("*[data-playhistory-elem=tipclose]") : null,
        loadingTip: e ? e.down("*[data-playhistory-elem=loadingtip]") : null,
        loadingTipText: e ? e.down("*[data-playhistory-elem=loadingtiptext]") : null,
        trash: e ? e.down("*[data-playhistory-elem=trash]") : null,
        trashText: e ? e.down("*[data-playhistory-elem=trashtext]") : null,
        more: e ? e.down("*[data-playhistory-elem=more]") : null,
        cbFilterShortVideo: e ? e.down("*[data-playhistory-elem=filtershortvideo]") : null,
        allVideo: e ? e.down("*[data-playhistory-elem=allvideo]") : null,
        longNullTip: e ? e.down("*[data-playhistory-elem=longnulltip]") : null,
        moreLong: e ? e.down("*[data-playhistory-elem=readmore]") : null
      };
      2.4 == this.version && (t.version = 2.4, t.today = e ? e.down("*[data-playhistory-elem=today]") : null, t.todayList = e ? e.down("*[data-playhistory-elem=todaylist]") : null, t.week = e ? e.down("*[data-playhistory-elem=week]") : null, t.weekList = e ? e.down("*[data-playhistory-elem=weeklist]") : null, t.early = e ? e.down("*[data-playhistory-elem=early]") : null, t.earlyList = e ? e.down("*[data-playhistory-elem=earlylist]") : null, t.timeline = e ? e.down("*[data-playhistory-elem=timeline]") : null, t.content = e ? e.down("*[data-playhistory-elem=content]") : null), this._playhistory = new n({
        view: new i({doms: t}),
        model: new a({selfItem: l.playHistoryParse})
      });
      var r = this;
      d.getPlayer("video").getInitVideoInfo(function (e) {
        r._playhistory.init(e.vid, e.tvid)
      });
      var o, s = function () {
        o && clearTimeout(o), o = setTimeout(function () {
          r._playhistory._view.hide()
        }, 1e3)
      }, h = function () {
        o && clearTimeout(o)
      };
      t.body.on("mouseenter", h), t.body.on("mouseleave", s), t.title.on("mouseenter", h), t.title.on("mouseleave", s), t.title.attr("href", "javascript:void(0);"), Q.event.customEvent.on("beforePlayHistoryShow", function () {
        c ? t.body.css("opacity", "0") : t.body.css("filter", "alpha(opacity=0)")
      }), Q.event.customEvent.on("playHistoryShow", function () {
        var e = t.title.down("a") || t.title;
        e && e.addClass("arrow-selected"), c ? t.body.css("opacity", "1") : t.body.css("filter", "alpha(opacity=100)"), h()
      }), Q.event.customEvent.on("beforePlayHistoryHide", function () {
        c ? t.body.css("opacity", "0") : t.body.css("filter", "alpha(opacity=0)")
      }), Q.event.customEvent.on("playHistoryHide", function () {
        var e = t.title.down("a") || t.title;
        e && e.removeClass("arrow-selected")
      })
    }
  }), t.add(h)
});
define("../../action/PcPlayHistoryV2", ["../components/action/adapter", "../kit/getWebEventID", "../kit/userInfo", "../kit/qiyiPlayer", "../kit/checkI18nType", "../kit/period", "../kit/loadDivPingback"], function (e, t, n) {
  var i, a = e("../components/action/adapter"), r = e("../kit/getWebEventID"), o = e("../kit/userInfo"), s = e("../kit/qiyiPlayer"), l = e("../kit/checkI18nType");
  l.type || (i = "TW");
  var d = e("../kit/period").create(), h = e("../kit/loadDivPingback");
  n.exports = Q.Class("pcPlayHistoryV2", {
    ns: Q.action, extend: a, construct: function (e) {
      this.callsuper(e)
    }, properties: {readInterval: 5e3, lastReadTime: 0, showNum: 0}, methods: {
      init: function (e, t) {
        this._model.initCurrent(e, t);
        var n = this;
        Q.event.customEvent.on("login", function () {
          Q.cookie.get("P00003") === Q.cookie.get("P00PRU") && n._loginEvt()
        }), Q.event.customEvent.on("logout", function () {
          n._logoutEvt()
        }), Q.event.customEvent.on("navOneShow", function () {
          n._view.hide()
        }), Q.event.customEvent.on("suggestShow", function () {
          n._view.hide()
        }), Q.event.customEvent.on("hideHeaderBoxFromVipHeader", function () {
          n._view.hide()
        }), Q.event.customEvent.on("updateRecordsShow", function () {
          n._view.hide()
        }), Q.event.customEvent.on("showUserCenterBox", function () {
          n._view.hide()
        }), Q.event.customEvent.on("pcUserRegistLoginShow", function () {
          n._view.hide()
        }), Q.event.customEvent.on("updateRecordTipShow", function () {
          n._view.hide()
        }), s.getPlayer("video").on("startplay", function (e) {
          var t = e.data;
          n.refreshCurrent.apply(n, [t.vid, t.tvid])
        })
      }, _loginEvt: function () {
        var e = e || {}, t = this;
        e.onsuccess = function () {
          t._readPlayHistory(), t._view.showImportTips()
        }, e.onfailure = function () {
        }, this._model.importPlayHistory(e)
      }, _logoutEvt: function () {
        this._readPlayHistory()
      }, refreshCurrent: function () {
        this._model.refreshCurrent.apply(this._model, arguments)
      }, getPlayHistory: function (e) {
        2.4 == this._view._doms.version ? this._sendPingBack({act: "phtrdivshow_a"}) : this._sendPingBack({act: "phtrdivshow"}), this.showNum++;
        var t = new Date;
        return t - this.lastReadTime < this.readInterval && !e ? void 0 : (this.lastReadTime = t, this._readPlayHistory(null, !0), !0)
      }, _readPlayHistory: function (e, t) {
        e = e || {}, void 0 !== this._view.onlyLong && (e.param = {}, e.param.only_long = this._view.onlyLong ? 1 : 0, i && (e.param.locale = i));
        var n = this;
        t && d.begin(), e.onsuccess = function (e) {
          n._view.hideReloadingTip(), n._view.hideLoadingTip(), n._view.showPlayHistory(e), d.end(function (e) {
            h.send("playrecord", e)
          })
        }, e.onfailure = function () {
          n._view.hideLoadingTip(), n._view.showReloadingTip()
        }, this._model.readPlayHistory(e)
      }, delPlayHistory: function (e) {
        e = e || {};
        var t = this;
        e.onsuccess = function () {
          t._view.hideLoadingTip(), t._readPlayHistory()
        }, e.onfailure = function () {
          t._view.hideLoadingTip(), t._view.showReloadingTip()
        }, this._model.delPlayHistory(e), this._sendPingBack({act: "delsingleclk"})
      }, clearPlayHistory: function () {
        var e = this;
        this._model.clearPlayHistory({
          onsuccess: function () {
            e._view.hideLoadingTip(), e._readPlayHistory()
          }, onfailure: function () {
          }
        }), this._sendPingBack({act: "delallclk"})
      }, hideImportTips: function () {
        this._view.hideTip("import")
      }, _sendPingBack: function (e) {
        r(function (t) {
          Q.log.server({
            type: "phtr2divstat20121204",
            act: e.act,
            jsuid: Q.cookie.get("QC006"),
            flshuid: Q.cookie.get("QC005"),
            weid: t,
            pru: Q.cookie.get("P00PRU") || "",
            ppuid: o.getUid(),
            mod: l.mod
          }, "http://msg.71.am/tmpstats.gif")
        })
      }
    }
  })
});
define("../../view/pcPlayHistoryViewV2", ["../components/view/widgetView", "../kit/userInfo", "../kit/artTemplate", "../config/siteDomain", "../kit/getWebEventID", "../action/underframe", "../kit/iframeLocation", "../kit/flashVar", "../kit/langTransform", "../kit/checkI18nType"], function (e, t, i) {
  var n = e("../components/view/widgetView"), a = e("../kit/userInfo"), r = e("../kit/artTemplate"), o = e("../config/siteDomain"), s = e("../kit/getWebEventID"), l = e("../action/underframe"), d = e("../kit/iframeLocation"), h = e("../kit/flashVar"), c = e("../kit/langTransform"), m = e("../kit/checkI18nType"), u = !1, p = 500, f = 100;
  p = f = 0, Q.$("*[data-widget-toplinefloater=blackFloater]");
  var U = Q.PageInfo || {};
  i.exports = Q.Class("pcPlayHistoryViewV2", {
    ns: Q.view,
    extend: n,
    construct: function (e) {
      this.callsuper(e)
    },
    properties: {
      listTpl: ['<li class="${itemStatus}" rseat="${rseat}" looking=${looking}>', '<div class="rectxt">', '<span class="icoplay ${playDevice}"></span>', '<a tvId="${tvId}" rseat="${rseat}" ${comeFrom} ${playVideo} title="${videoName}" ', 'href="${videoUrl}" data-playhistory-elem="tvid" ', 'data-playhistory-tvid="${tvId}">${videoTrancateName}</a>', '<span class="icojl-del" j-delegate="j-delHistory"></span>', '<span class="playing"><a ${playVideo} rseat="${rseat}"', 'href="${continuePlayUrl}">${playState}</a></span>', "</div>", "</li>"].join(""),
      listTplV2: ['<li  rseat="{{rseat}}"', '{{if (exclusive=="0")}}', ' class="cut-large" normal-cls="cut-large"', "{{/if}}", '{{if (exclusive=="1")}}', ' class="cut-large-only" normal-cls="cut-large-only"', "{{/if}}", "{{if (nextVideoUrl)}}", ' hover-cls="cut-mini"', "{{/if}}", "{{if (playState)}}", ' hover-cls="cut-normal"', "{{/if}}", ">", '<div class="recorder_list_info clearfix">', '<span class="icoplay {{playDevice}}"></span>', '<a tvId="{{tvId}}" rseat="{{rseat}}"  {{comeFrom}} {{playVideo}} data-playhistory-tvid="{{tvId}}"', ' data-playhistory-elem="tvid" ', ' class="recorder_list_item" href="{{videoUrl}}" title="{{videoName}}" name="${{videoTrancateName}}" hovername="${{hoverVideoTrancateName}}">{{videoTrancateName}}</a>', '<span class="def-showStatic"> {{restTime}} </span>', '<span class="icojl-del" j-delegate="j-delHistory"></span>', '<span class="opt">', '{{if (playState == "重新观看")}}', '<a href="{{videoUrl}}" rseat="{{rseat}}" data-pb="{{dataPb}}" title="重新播放">重播</a>', "{{/if}}", '{{if (playState == "继续观看")}}', '<a href="{{continuePlayUrl}}" data-pb="{{dataPb}}" rseat="{{continueRseat}}" title="继续播放">续播</a>', "{{/if}}", '{{if (playState == "正在观看")}}', '<a href="{{continuePlayUrl}}" rseat="{{rseat}}" data-pb="{{dataPb}}" title="正在播放">正播</a>', "{{/if}}", '{{if (playState == "搜索观看")}}', '<a href="{{continuePlayUrl}}" data-pb="{{dataPb}}" rseat="{{continueRseat}}" title="搜索观看">续播</a>', "{{/if}}", '{{if (playState == "到PPS观看")}}', '<a href="{{continuePlayUrl}}" data-pb="{{dataPb}}" rseat="{{continueRseat}}" title="到PPS播放">续播</a>', "{{/if}}", "{{if (nextVideoUrl)}}", '<span class="cutline"> | </span>', '<a href="{{nextVideoUrl}}" rseat="{{rseat}}" data-pb="{{dataPb}}" title="下一集">下一集</a>', "{{/if}}", "</span>", "</div>", "</li>"].join(""),
      itemHandler: [],
      tipsStatus: {},
      onlyLong: "false" == Q.cookie.get("TQC016") ? !1 : !0
    },
    methods: {
      init: function (e) {
        2.4 == this._doms.version && (this.listTpl = this.listTplV2, this._renderList = this._renderListV2), this._ctrl = e, this._initElement(), this._initEvent(), this._createShowTimer()
      }, _initElement: function () {
        var e = this._doms;
        this._widget = e.widget, this._title = e.title, this._body = e.body, this._historyList = e.historyList, this._nullTip = e.nullTip, this._tip = e.tip, this._tipText = e.tipText, this._tipClose = e.tipClose, this._loadingTip = e.loadingTip, this._loadingTipText = e.loadingTipText, this._trash = e.trash, this._trashText = e.trashText, this._more = e.more;
        var t = "";
        t = o.isPPS() ? "http://my.ipd.pps.tv/playlist.php" : "http://www." + o.SITE_DOMAIN + "/u/record" + this._ctrl._model.urlEx.enrperc, this._more.attr("href", t), e.tipText.css("cursor", "pointer");
        var i = this._strTransform("查看更多"), n = this._strTransform("登录查看更多");
        Q.event.customEvent.on("login", function () {
          e.tipText.css("cursor", "default"), e.more.forEach(function (e) {
            e = Q.$(e), e.attr("title", i), e.html(i)
          })
        }), Q.event.customEvent.on("logout", function () {
          e.tipText.css("cursor", "pointer"), e.more.forEach(function (e) {
            e = Q.$(e), e.attr("title", n), e.html(n)
          })
        }), this._title.on("click", function (e) {
          Q.event.get(e).preventDefault()
        }), e.tipText.on("click", function (e) {
          a.isLogin() || Q.event.customEvent.fire({type: "playHistoryTipClick", data: {evt: e}})
        });
        var r = Q.$("*[data-playhistory-elem=underframe]");
        (Q.browser.IE6 || Q.browser.IE7) && r && r.hide()
      }, _initEvent: function () {
        var e = this, t = Q.browser.iPad ? "click" : "mouseover";
        t = "click", Q.browser.iPad ? (Q.$("body").on("touchstart", function () {
          e._clearShowTimer(), e._createHideTimer()
        }), this._widget.on("touchstart", function (e) {
          Q.event.get(e).stopPropagation()
        }), this._title.on("click", function (t) {
          Q.event.get(t).preventDefault(), e[e.visible ? "hide" : "show"]()
        })) : (this._title.on("click", function (t) {
          Q.event.get(t).preventDefault(), e.toggle()
        }), Q.$(document).on("click", function (t) {
          t = Q.event.get(t);
          var i = t.target, n = e._widget;
          n.contains(i) || e.visible && e.hide()
        })), this._doms.reloading && this._doms.reloading.on("click", function () {
          u = !0, e.show()
        }), this._initOnlyLong(), this._showClearHistoryTipHandler = this._showClearHistoryTip.bind(this), this._trash && this._trash.on("click", this._showClearHistoryTipHandler), this._widget.delegate("clearPlayHistory", this._clearPlayHistoryEvt.bind(this)), this._widget.delegate("j-delHistory", this._deleteHistoryEvt.bind(this)), this._widget.delegate("playVideo", this._pingbackEvt.bind(this)), this._widget.delegate("historyTip-close", this._closeTipsEvt.bind(this))
      }, _createShowTimer: function () {
        if (!this._showTimer) {
          var e = this;
          this._showTimer = setTimeout(function () {
            e.show()
          }, p)
        }
      }, _clearShowTimer: function () {
        this._showTimer && (clearTimeout(this._showTimer), this._showTimer = null)
      }, _createHideTimer: function () {
        if (!this.hideTimer) {
          var e = f;
          this.isLoading && (e = 10 * e);
          var t = this;
          this.hideTimer = setTimeout(function () {
            t.hide()
          }, e)
        }
      }, _clearHideTimer: function () {
        this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }, hideTimeLine: function () {
        this._doms.today.hide(), this._doms.week.hide(), this._doms.early.hide()
      }, toggle: function () {
        this.visible ? (this._clearShowTimer(), this._createHideTimer()) : (this._clearHideTimer(), this._createShowTimer())
      }, show: function () {
        var e = this;
        this._clearShowTimer(), this._clearHideTimer();
        var t = !1;
        this.visible || (this.onlyLong || (t = !0), this._setOnlyLong()), this.className || (this.className = this._widget.attr("data-playhistory-cls"), this.hoverClassName1 = this.className + "Hover", this.hoverClassName = this.className + "-hover");
        var i = function () {
          var i = e._ctrl.getPlayHistory(t);
          i && (e.hideTimeLine(), e._doms.loadingTip.show(), e._doms.reloadingTip && e._doms.reloadingTip.hide())
        };
        this._widget.hasClass(this.hoverClassName) && this._widget.hasClass(this.hoverClassName1) || (Q.event.customEvent.fire({
          type: "beforePlayHistoryShow",
          data: {}
        }), this._widget.addClass(this.hoverClassName), this._widget.addClass(this.hoverClassName1), Q.event.customEvent.fire({
          type: "playHistoryShow",
          data: {}
        }), i()), u && (i(), u = !1), this._redrawUnderFrame(), this.visible = !0
      }, _redrawUnderFrame: function () {
        if (!this.underFrame) {
          var e = Q.$("*[data-playhistory-elem=underframe]"), t = parseInt(this._body.css("paddingTop"), 10);
          Q.browser.IE6 || Q.browser.IE7 ? (e && e.hide(), e = null) : e && e.show();
          var i = 5;
          2.4 == this._doms.version && (i = 0), this.underFrame = new l({
            elem: this._body,
            distHeight: -1 * t,
            radius: i,
            target: e,
            distTop: t
          })
        }
        this.underFrame.show()
      }, hide: function () {
        this._clearShowTimer(), this._clearHideTimer(), Q.event.customEvent.fire({
          type: "beforePlayHistoryHide",
          data: {}
        }), "import" == this._tip.attr("data-name") && this._hideTip(this._tip.attr("data-name")), this._widget.hasClass(this.hoverClassName) && this._widget.removeClass(this.hoverClassName), this._widget.hasClass(this.hoverClassName1) && this._widget.removeClass(this.hoverClassName1), this.underFrame && this.underFrame.hide(), this.visible = !1, Q.event.customEvent.fire({
          type: "playHistoryHide",
          data: {}
        })
      }, _showClearHistoryTip: function () {
        this._trash.un("click", this._showClearHistoryTipHandler), this._tip.show(), this._trashText.show(), this._trash.addClass("defClearkong"), this._tipClose.hide(), this._regionJudge(this._tipText, "是否清空您的电脑.电视.pad所有记录？");
        var e = this;
        Q.anim(this._tip).duration(100).ease("Linear").from("top", 31).to("top", 0).onDone(function () {
          e._trash.attr("j-delegate", "clearPlayHistory"), e._closeClearHistoryTipHandler = e._closeClearHistoryTip.bind(e), e._trash.on("mouseleave", e._closeClearHistoryTipHandler)
        }).go()
      }, _closeClearHistoryTip: function () {
        this._trash.un("mouseleave", this._closeClearHistoryTipHandler), this._trashText.hide(), this._trash.removeClass("defClearkong"), this._tip.hide(), this._trash.on("click", this._showClearHistoryTipHandler), this._trash.attr("j-delegate", "")
      }, _clearPlayHistoryEvt: function () {
        this._ctrl.clearPlayHistory()
      }, _deleteHistoryEvt: function (e) {
        e = e || window.event;
        var t = Q.$(e.target).parent("li"), i = t.down("*[data-playhistory-elem=tvid]"), n = i.attr("data-playhistory-tvid"), a = i.attr("data-playhistory-com"), r = {tvId: n};
        void 0 !== a && (r.com = a), this._ctrl.delPlayHistory({param: r})
      }, _closeTipsEvt: function (e) {
        this._hideTip(this._tip.attr("data-name")), Q.event.get(e).preventDefault()
      }, _pingbackEvt: function (e) {
        Q.event.get(e).preventDefault();
        var t = "itemviewclk";
        2.4 == this._doms.version && (t += "_a"), s(function (i) {
          var n = Q.$(e.target).attr("href"), r = ["type=phtr2divstat20121204", "act=" + t, "jsuid=" + Q.cookie.get("QC006"), "flshuid=" + Q.cookie.get("QC005"), "weid=" + i, "ppuid=" + a.getUid()].join("&");
          "so.iqiyi.com" == Q.url.parse(n).host ? d.href(n) : d.href(n + "&" + r)
        })
      }, showPlayHistory: function (e) {
        2.4 != this._doms.version && this._more.hide(), 0 === e.length ? (this._historyList && this._historyList.hide(), this._showNullTip()) : (this._hideNullTip(), this._historyList && this._historyList.show(), this._renderList(e), e.length >= 10 && a.isLogin() && this._more.show()), this._redrawUnderFrame()
      }, _addVVFrom: function (e) {
        return 2.4 == this._doms.version ? Q.url.isUrl(e) ? h.add({videoIsFromQidan: "itemviewclk_a"}, e) + "#vfrm=5-6-0-1" : e : Q.url.isUrl(e) ? h.add({videoIsFromQidan: "itemviewclk"}, e) + "#vfrm=5-6-0-1" : e
      }, _formatData: function (e) {
        e.comeFrom = e.hasOwnProperty("com") ? "data-playhistory-com=" + e.com : "", 2 == e.com ? (e.playVideo = "target=_blank", e.playState = "到PPS观看") : e.playVideo = "j-delegate=playVideo", e.videoUrl = this._addVVFrom(e.videoUrl), e.nextVideoUrl = this._addVVFrom(e.nextVideoUrl), e.continuePlayUrl = this._addVVFrom(e.continuePlayUrl);
        var t = "bfjl1", i = "_iqy";
        if (("继续观看" == e.playState || "搜索观看" == e.playState || "到PPS观看" == e.playState) && (t = "bfjl2"), !e.looking) {
          var n = Q.url.parse(e.videoUrl).host;
          -1 != n.indexOf("so.iqiyi.com") ? i = "_out" : -1 != n.indexOf("pps.tv") && (i = "_pps")
        }
        var a = Q.cookie.get("P00PRU");
        return e.continueRseat = t + i, e.rseat = "bfjl1" + i, e.dataPb = "tm=" + e.videoPlayTime + "&qpid=" + e.tvIdQipu + "&pru=" + a, e
      }, _strTransform: function (e) {
        return U.i18n && "TW_T" === U.i18n.toUpperCase() && (e = c.transformTpl(e, "TW")), e
      }, _regionJudge: function (e, t) {
        U.i18n && "TW_T" === U.i18n.toUpperCase() && (t = c.transformTpl(t, "TW")), e.html(t)
      }, _renderList: function (e) {
        for (var t = new Q.plugins.Template(this.listTpl), i = this, n = [], r = e.length, o = 0; r > o && 10 > o; o++)n.push(t.evaluate(this._formatData(e[o])));
        if (r >= 1 && 5 >= r && !a.isLogin() && !this._isTipClose("exactRecord") ? this._showTip("登录后可保存最准确的播放记录", "exactRecord") : r > 5 && !a.isLogin() && !this._isTipClose("moreRecord") && this._showTip("登录后可保存更多播放记录", "moreRecord"), this._historyList) {
          Q.browser.iPad || this._unbindItem(), i._regionJudge(i._historyList, n.join(""));
          var s = this._historyList.down("li");
          s && s.length >= 6 && Q.$(s[s.length - 1]).addClass("last"), Q.browser.iPad || this._bindItem(), e && e.length <= 6 ? this._historyList.css("height", "200px") : this._historyList.css("height", "auto")
        }
      }, _renderListV2: function (e) {
        this.hideTimeLine();
        var t = [], i = [], n = [], o = e.length, s = r.compile("ph", this.listTpl), l = new Date, d = l.getTime(), h = "", c = 1e3 * (3600 * l.getHours() + 60 * l.getMinutes() + l.getSeconds()), u = d - c;
        0 === l.getDay() ? 7 : l.getDay();
        for (var p, f, U = 5184e5, V = l - c - U, g = this, y = 0; o > y && 10 > y; y++)p = this._formatData(e[y]), f = 1e3 * parseInt(p.addtime, 10), p.videoTrancateName = p.vn, p.hoverVideoTrancateName = p.videoTrancateName, this._doms.allVideo ? (p.playPercent = parseFloat(p.playPercent) <= 1 ? (m.type ? "剩余" : "剩餘") + "99%" : 100 == parseFloat(p.playPercent) ? "已看完" : (m.type ? "剩余" : "剩餘") + p.restPercent, p.restTime = p.playPercent, Q.browser.IE6 && p.exclusive && (p.videoTrancateName = Q.string.truncate(p.videoTrancateName, 24))) : p.restTime = "", h = s(p), f > u ? t.push(h) : f > V ? i.push(h) : n.push(h);
        if (o >= 1 && 5 >= o && !a.isLogin() && !this._isTipClose("exactRecord") ? this._showTip("登录后可保存最准确的播放记录", "exactRecord") : o > 5 && !a.isLogin() && !this._isTipClose("moreRecord") && this._showTip("登录后可保存更多播放记录", "moreRecord"), Q.browser.iPad || this._unbindItem(this._doms.widget), t.length > 0 && (this._doms.today.show(), g._regionJudge(g._doms.todayList, t.join(""))), i.length > 0 && (this._doms.week.show(), g._regionJudge(g._doms.weekList, i.join(""))), n.length > 0 && (this._doms.early.show(), g._regionJudge(g._doms.earlyList, n.join(""))), Q.browser.IE6) {
          var b = this._doms.nullTip.height();
          this._doms.timeline.css("height", b + "px")
        }
        var v = this._doms.widget.down("li");
        v && v.length >= 6 && Q.$(v[v.length - 1]).addClass("last"), Q.browser.iPad || this._bindItem(this._doms.widget), e && e.length <= 6 ? this._historyList && this._historyList.css("height", "200px") : this._historyList ? this._historyList.css("height", "auto") : this._body.css("height", "auto"), this._doms.loadingTip.hide()
      }, _hidePlayHistory: function () {
        this._historyList && this._historyList.hide(), this._hideNullTip()
      }, _showLongNullTip: function () {
        return this.onlyLong && this._doms.longNullTip ? (this._doms.longNullTip.removeClass("dn"), !0) : void 0
      }, _hideLongNullTip: function () {
        this._doms.longNullTip && this._doms.longNullTip.addClass("dn")
      }, _showNullTip: function () {
        this._doms.timeline.addClass("dn"), this.hideTimeLine(), this._showLongNullTip() || (2.4 == this._doms.version ? this._nullTip.addClass("noRecorder") : this._nullTip.show())
      }, _hideNullTip: function () {
        2.4 == this._doms.version ? this._nullTip.removeClass("noRecorder") : this._nullTip.hide(), this._hideLongNullTip(), this._doms.timeline.removeClass("dn")
      }, _unbindItem: function (e) {
        var t = this, i = "mouseenter", n = "mouseleave";
        Q.browser.CHROME && (i = "mouseover", n = "mouseout");
        var a = (e || this._historyList).down("li");
        a && a.forEach(function (e) {
          var a = Q.$(e), r = a.attr("data-idx");
          r && (a.un(i, t.itemHandler[r].over), a.un(n, t.itemHandler[r].out))
        })
      }, _bindItem: function (e) {
        var t = this, i = "mouseenter", n = "mouseleave";
        Q.browser.CHROME && (i = "mouseover", n = "mouseout"), t.itemHandler = [];
        var a = (e || this._historyList).down("li");
        a.forEach(function (e, a) {
          var r = Q.$(e);
          t.itemHandler[a] = {}, t.itemHandler[a].over = t._itemOver.bind(t), t.itemHandler[a].out = t._itemOut.bind(t), r.attr("data-idx", a), r.on(i, t.itemHandler[a].over), r.on(n, t.itemHandler[a].out)
        })
      }, _itemOver: function (e) {
        e = e || window.event;
        var t = Q.$(e.currentTarget || e.srcElement);
        "true" == t.attr("looking") ? t.addClass("watchSelected") : t.addClass("selected");
        var i = t.attr("hover-cls");
        if (t.removeClass(t.attr("normal-cls")), t.addClass(i), Q.browser.IE6) {
          var n = t.down("[data-playhistory-elem=tvid]");
          n.html(n.attr("hovername"))
        }
      }, _itemOut: function (e) {
        e = e || window.event;
        var t = Q.$(e.currentTarget || e.srcElement);
        "true" == t.attr("looking") ? t.removeClass("watchSelected") : t.removeClass("selected");
        var i = t.attr("hover-cls");
        if (t.addClass(t.attr("normal-cls")), t.removeClass(i), Q.browser.IE6) {
          var n = t.down("[data-playhistory-elem=tvid]");
          n.html(n.attr("name"))
        }
      }, _initOnlyLong: function () {
        var e = this, t = this._doms.allVideo, i = "";
        t && (i = t.attr("checkcls"), t.on("click", function () {
          var n = "";
          t.hasClass(i) ? (t.removeClass(i), e.onlyLong = !1, n = "filtervideocancel") : (t.addClass(i), e.onlyLong = !0, n = "filtervideoclk"), Q.cookie.set("TQC016", e.onlyLong, {
            path: "/",
            domain: o.getDomain(),
            expires: 31536e6
          }), s(function (e) {
            Q.log.server({
              type: "phtr2divstat20121204",
              act: n,
              jsuid: Q.cookie.get("QC006"),
              flshuid: Q.cookie.get("QC005"),
              weid: e,
              pru: Q.cookie.get("P00PRU") || "",
              ppuid: a.getUid()
            }, "http://msg.71.am/tmpstats.gif")
          }), e._ctrl.getPlayHistory(!0)
        })), this._doms.moreLong && this._doms.moreLong.on("click", function () {
          e.onlyLong = !1, t && t.removeClass(i), e._ctrl.getPlayHistory(!0)
        })
      }, _setOnlyLong: function () {
        if (!this.onlyLong) {
          var e = this._doms.allVideo;
          if (e) {
            var t = e.attr("checkcls");
            e.removeClass(t)
          }
        }
      }, _showTip: function (e, t) {
        var i = this;
        this._tip.show(), t && this._tip.attr("data-name", t), this._tipClose.show(), i._regionJudge(i._tipText, e)
      }, _hideTip: function (e) {
        this._tip.attr("data-name") == e && (this._tip.hide(), this.tipsStatus[e] = !0)
      }, _isTipClose: function (e) {
        return this.tipsStatus[e] === !0
      }, showLoadingTip: function (e) {
        this.showReloadingTip(), this._more.hide(), this.isLoading = !0, this._hidePlayHistory(), this._loadingTip.show(), this._regionJudge(this._loadingTipText, e)
      }, hideLoadingTip: function () {
        this.isLoading = !1, this._loadingTip.hide()
      }, showReloadingTip: function () {
        this._hidePlayHistory(), this._doms.timeline.addClass("dn"), this.hideLoadingTip(), this._doms.reloadingTip && this._doms.reloadingTip.show()
      }, hideReloadingTip: function () {
        this._doms.reloadingTip && this._doms.reloadingTip.hide()
      }, showImportTips: function () {
        this._showTip("已为您导入未登录时播放记录", "import")
      }
    }
  })
});
define("../../components/view/widgetView", ["./view"], function (e, t, i) {
  var n = e("./view");
  i.exports = Q.Class("WidgetView", {
    ns: "Q.view", extend: n, construct: function (e) {
      if (e = e || {}, !e.doms)throw new Error("Missing doms.");
      this._doms = e.doms
    }, methods: {config: Q.fn.emptyMethod}
  })
});
define("../../kit/artTemplate", [], function (e, t, i) {
  var n;
  !function (e) {
    "use strict";
    n = function (e, t) {
      return n["string" == typeof t ? "compile" : "render"].apply(n, arguments)
    }, n.version = "2.0.2", n.openTag = "<%", n.closeTag = "%>", n.isEscape = !0, n.isCompress = !1, n.parser = null, n.render = function (e, t) {
      var i = n.get(e) || a({id: e, name: "Render Error", message: "No Template"});
      return i(t)
    }, n.compile = function (e, i) {
      function o(t) {
        try {
          return new s(t, e) + ""
        } catch (r) {
          return d ? a(r)() : n.compile(e, i, !0)(t)
        }
      }

      var s, l = arguments, d = l[2], h = "anonymous";
      "string" != typeof i && (d = l[1], i = l[0], e = h);
      try {
        s = r(e, i, d)
      } catch (c) {
        return c.id = e || i, c.name = "Syntax Error", a(c)
      }
      return o.prototype = s.prototype, o.toString = function () {
        return s.toString()
      }, e !== h && (t[e] = o), o
    };
    var t = n.cache = {}, i = n.helpers = {
      $include: n.render, $string: function (e, t) {
        return "string" != typeof e && (t = typeof e, "number" === t ? e += "" : e = "function" === t ? i.$string(e()) : ""), e
      }, $escape: function (e) {
        var t = {"<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "&": "&#38;"};
        return i.$string(e).replace(/&(?![\w#]+;)|[<>"']/g, function (e) {
          return t[e]
        })
      }, $each: function (e, t) {
        var i = Array.isArray || function (e) {
            return "[object Array]" === {}.toString.call(e)
          };
        if (i(e))for (var n = 0, a = e.length; a > n; n++)t.call(e, e[n], n, e); else for (var r in e)t.call(e, e[r], r)
      }
    };
    n.helper = function (e, t) {
      i[e] = t
    }, n.onerror = function (t) {
      var i = "Template Error\n\n";
      for (var n in t)i += "<" + n + ">\n" + t[n] + "\n\n";
      e.console && e.console.error(i)
    }, n.get = function (i) {
      var a;
      if (t.hasOwnProperty(i))a = t[i]; else if ("document"in e) {
        var r = document.getElementById(i);
        if (r) {
          var o = r.value || r.innerHTML;
          a = n.compile(i, o.replace(/^\s*|\s*$/g, ""))
        }
      }
      return a
    };
    var a = function (e) {
      return n.onerror(e), function () {
        return "{Template Error}"
      }
    }, r = function () {
      var e = i.$each, t = "break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined", a = new RegExp(["\\/\\*[\\w\\W]*?\\*\\/", "\\/\\/[^\\n]*\\n", "\\/\\/[^\\n]*$", '"(?:[^"\\\\]|\\\\[\\w\\W])*"', "'(?:[^'\\\\]|\\\\[\\w\\W])*'", "[\\s\\t\\n]*\\.[\\s\\t\\n]*[$\\w\\.]+"].join("|"), "g"), r = /[^\w$]+/g, o = new RegExp(["\\b" + t.replace(/,/g, "\\b|\\b") + "\\b"].join("|"), "g"), s = /^\d[^,]*|,\d[^,]*/g, l = /^,+|,+$/g, d = function (e) {
        return e.replace(a, "").replace(r, ",").replace(o, "").replace(s, "").replace(l, "").split(/^$|,+/)
      };
      return function (t, a, r) {
        function o(e) {
          return "'" + e.replace(/('|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "'"
        }

        function s(e) {
          return V += e.split(/\n/).length - 1, n.isCompress && (e = e.replace(/[\n\r\t\s]+/g, " ").replace(/<!--.*?-->/g, "")), e && (e = k[1] + o(e) + k[2] + "\n"), e
        }

        function l(e) {
          var t = V;
          if (p ? e = p(e) : r && (e = e.replace(/\n/g, function () {
              return V++, "$line=" + V + ";"
            })), 0 === e.indexOf("=")) {
            var a = 0 !== e.indexOf("==");
            if (e = e.replace(/^=*|[\s;]*$/g, ""), a && n.isEscape) {
              var o = e.replace(/\s*\([^\)]+\)/, "");
              i.hasOwnProperty(o) || /^(include|print)$/.test(o) || (e = "$escape(" + e + ")")
            } else e = "$string(" + e + ")";
            e = k[1] + e + k[2]
          }
          return r && (e = "$line=" + t + ";" + e), h(e), e + "\n"
        }

        function h(t) {
          t = d(t), e(t, function (e) {
            g.hasOwnProperty(e) || (c(e), g[e] = !0)
          })
        }

        function c(e) {
          var t;
          "print" === e ? t = L : "include" === e ? (y.$include = i.$include, t = w) : (t = "$data." + e, i.hasOwnProperty(e) && (y[e] = i[e], t = 0 === e.indexOf("$") ? "$helpers." + e : t + "===undefined?$helpers." + e + ":" + t)), b += e + "=" + t + ","
        }

        var m = n.openTag, u = n.closeTag, p = n.parser, f = a, U = "", V = 1, g = {
          $data: 1,
          $id: 1,
          $helpers: 1,
          $out: 1,
          $line: 1
        }, y = {}, b = "var $helpers=this," + (r ? "$line=0," : ""), v = "".trim, k = v ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(", ");", "$out.join('')"], x = v ? "if(content!==undefined){$out+=content;return content;}" : "$out.push(content);", L = "function(content){" + x + "}", w = "function(id,data){data=data||$data;var content=$helpers.$include(id,data,$id);" + x + "}";
        e(f.split(m), function (e) {
          e = e.split(u);
          var t = e[0], i = e[1];
          1 === e.length ? U += s(t) : (U += l(t), i && (U += s(i)))
        }), f = U, r && (f = "try{" + f + "}catch(e){" + "throw {" + "id:$id," + "name:'Render Error'," + "message:e.message," + "line:$line," + "source:" + o(a) + ".split(/\\n/)[$line-1].replace(/^[\\s\\t]+/,'')" + "};" + "}"), f = b + k[0] + f + "return new String(" + k[3] + ");";
        try {
          var _ = new Function("$data", "$id", f);
          return _.prototype = y, _
        } catch (W) {
          throw W.temp = "function anonymous($data,$id) {" + f + "}", W
        }
      }
    }()
  }(window), function (e) {
    e.openTag = "{{", e.closeTag = "}}", e.parser = function (t) {
      t = t.replace(/^\s/, "");
      var i = t.split(" "), n = i.shift(), a = i.join(" ");
      switch (n) {
        case"if":
          t = "if(" + a + "){";
          break;
        case"else":
          i = "if" === i.shift() ? " if(" + i.join(" ") + ")" : "", t = "}else" + i + "{";
          break;
        case"/if":
          t = "}";
          break;
        case"each":
          var r = i[0] || "$data", o = i[1] || "as", s = i[2] || "$value", l = i[3] || "$index", d = s + "," + l;
          "as" !== o && (r = "[]"), t = "$each(" + r + ",function(" + d + "){";
          break;
        case"/each":
          t = "});";
          break;
        case"echo":
          t = "print(" + a + ");";
          break;
        case"include":
          t = "include(" + i.join(",") + ");";
          break;
        default:
          e.helpers.hasOwnProperty(n) ? t = "==" + n + "(" + i.join(",") + ");" : (t = t.replace(/[\s;]*$/, ""), t = "=" + t)
      }
      return t
    }
  }(n), i.exports = n
});
define("../../action/underframe", [], function (e, t, i) {
  var n = new Q.ic.InfoCenter({moduleName: "kit/underframe"});
  i.exports = Q.Class("UnderFrame", {
    construct: function (e) {
      e = e || {}, e.elem ? (this.elem = "string" == typeof e.elem ? Q.$("#" + e.elem) : e.elem, this.target = e.target || Q.$("body"), this.attrs = e.attrs || {}, this.distTop = e.distTop || 0, this.distLeft = e.distLeft || 0, this.distHeight = e.distHeight || 0, this.distWidth = e.distWidth || 0, this.distRadius = e.radius || 0, this.bg = e.bg || "#FFFFFF", e._class && (this._class = e._class), this.createIframe()) : n.warn("opt.elem不存在！")
    }, methods: {
      createIframe: function () {
        var e = Q.$(document.createElement("iframe")), t = this.elem.css("zIndex");
        "auto" == t ? t = 0 : t -= 1, e.attr("src", "about:blank"), e.attr("frameBorder", "0"), e.css("display", "none"), this._class && e.addClass(this._class), this.target.append(e), e.css("position", "absolute"), e.css("zIndex", t);
        var i = this.elem.width() + this.distWidth;
        0 > i && (i = 0);
        var n = this.elem.height() + this.distHeight;
        0 > n && (n = 0), e.css("top", this.elem.top() + this.distTop + "px"), e.css("left", this.elem.left() + this.distLeft + "px"), e.css("width", i + "px"), e.css("height", n + "px"), e.css("background", this.bg), this.distRadius && e.css("borderRadius", this.distRadius + "px");
        for (var a in this.attrs)e.css(a, this.attrs[a]);
        this.iframe = e
      }, show: function () {
        var e = this.iframe, t = this.elem.width() + this.distWidth;
        0 > t && (t = 0);
        var i = this.elem.height() + this.distHeight;
        0 > i && (i = 0), e.css("top", this.elem.top(this.target) + this.distTop + "px"), e.css("left", this.elem.left(this.target) + this.distLeft + "px"), e.css("width", t + "px"), e.css("height", i + "px"), e.css("display", "")
      }, hide: function () {
        this.iframe.hide()
      }, get: function () {
        return this.iframe
      }
    }
  })
});
define("../../kit/flashVar", [], function (e, t, i) {
  function n(e) {
    var t = Q.url.queryToJson(e);
    for (var i in t)t[i] = decodeURIComponent(t[i]);
    return t
  }

  var a = "flashvars", r = function (e, t) {
    var i = /(.*)#(.*)/.exec(t);
    i && (t = i[1], i = i[2]);
    var r = t.lastIndexOf("?") + 1, o = r ? t.substr(r) : "", s = n(o), l = n(s[a] || "");
    return Q.object.extend(l, e), s[a] = Q.url.jsonToQuery(l, encodeURIComponent), t = r ? t.substr(0, r) : t + "?", t += Q.url.jsonToQuery(s, encodeURIComponent), i && (t += "#" + i), t
  };
  i.exports = {add: r}
});
define("../../kit/langTransform", [], function (e, t, i) {
  var n = {};
  new Q.ic.InfoCenter({moduleName: "langTransform"});
  var a = Q.PageInfo || {};
  n.TW = a.i18nLang;
  var r = {
    cn_Zh2TW: function (e) {
      var t, i = /[\u4e00-\u9fa5]+/g, a = e.match(i);
      return a && a.length > 0 && a.forEach(function (i) {
        t = new RegExp(i), n.TW && n.TW[i] && (e = e.replace(t, n.TW[i]))
      }), e
    }
  };
  i.exports = {
    tranformData: function (e, t) {
      function i(n) {
        var a = {};
        if (e.constructor === Object)for (var o in e)e.hasOwnProperty(o) && (e[o].constructor === Object ? a[o] = i(e[o]) : e[o].constructor === String && (a[o] = r["cn_Zh2" + t](e[o])));
        return Q.object.extend(n, a)
      }

      return i(e)
    }, transformTpl: function (e, t) {
      return r["cn_Zh2" + t](e)
    }
  }
});
define("../../model/pcPlayHistoryModelV2", ["./../components/model/model", "./playhistoryModel", "../kit/userInfo", "../kit/checkI18nType"], function (e, t, i) {
  var n = e("./../components/model/model"), a = e("./playhistoryModel"), r = new a;
  e("../kit/userInfo");
  var o = e("../kit/checkI18nType");
  i.exports = Q.Class("pcPlayHistoryModelV2", {
    ns: Q.model,
    extend: n,
    construct: function (e) {
      this.callsuper(), e = e || {}, this._selfItem = e.selfItem || null
    },
    properties: {
      INFO: window.info || {},
      entireUrl: null,
      showCurrent: !0,
      urlEx: {},
      TERMINAL: {11: "电脑", 12: "电脑", 21: "平板", 22: "平板", 31: "手机", 32: "手机", 51: "电视"}
    },
    methods: {
      init: function (e) {
        this._ctrl = e, this._initInfo(), this.isFinalPlayer() || (this.showCurrent = !1), this.entireUrl = function (e) {
          return e.protocol + "//" + e.host + e.pathname
        }(window.location);
        var t = navigator.userAgent.toLowerCase(), i = "?" + ["pltfm=" + (/ipad/.test(t) ? "21" : "11"), "pos="].join("&");
        this.urlEx = {ctnvw: i + "ctnvw", title: i + "title", enrperc: i + "enrperc"}
      }, isFinalPlayer: function () {
        return !!Q.$("#flashArea")
      }, _initInfo: function () {
        var e = navigator.userAgent.toLowerCase(), t = /ipad/.test(e) ? 21 : /iphone os/.test(e) ? 31 : 11, i = this.INFO || {};
        this.currentCache = {
          tvId: i.tvId,
          videoId: i.videoId,
          videoName: i.title,
          videoUrl: i.url || this.entireUrl,
          albumId: i.albumId,
          terminalId: t
        }
      }, readPlayHistory: function (e) {
        var t = e.param;
        t.agent_type = 1;
        var i = this;
        e = e || {};
        var n = function (t) {
          for (var n, a = [], r = 0, o = t.length; o > r; r++)n = i._parseItem(t[r]), i._selfItem && (n = i._selfItem(n, t[r])), n.looking ? a.unshift(n) : a.push(n);
          e.onsuccess(a)
        }, a = e.onfailure || function () {
          };
        r.getPlayhistory({param: t, onsuccess: n, onfailure: a})
      }, _parseItem: function (e) {
        var t, i = {}, n = "", a = this.getCurrentInfo(), r = e.videoUrl || this.entireUrl, s = e.tvId, l = o.type ? "剩余" : "剩餘", d = this.TERMINAL[e.terminalId];
        i.playDevice = "电脑" === d ? "icojl-pc" : "手机" === d || "平板" === d ? "icojl-phone" : "icojl-pc";
        var h = e.channelId, c = "", m = {2: "电视剧", 3: "纪录片", 4: "动漫"}, u = {6: "综艺", 14: "时尚综艺"};
        c = h in m && e.albumName && e.videoOrder ? e.albumName + " 第" + e.videoOrder + "集" : h in u && e.sourceName && e.tvYear ? e.sourceName + " 第" + e.tvYear + "期" : e.videoName || e.albumName || "";
        var p = 0 === parseInt(e.videoPlayTime, 10) ? 1 : e.videoPlayTime / e.videoDuration;
        p = -1 === parseInt(e.videoPlayTime, 10) ? 0 : p;
        var f = 0 === parseInt(e.videoPlayTime, 10) ? 0 : e.videoDuration - e.videoPlayTime;
        f = 0 > f ? 0 : f;
        var U = parseInt(f / 60, 10), V = f % 60, g = 0 === U && 0 === V, y = this.showCurrent && s == a.tvId, b = "正在观看";
        n = g ? "重新观看" : y ? b : "继续观看";
        var v = y && !g;
        t = v ? "looking" : "belooked";
        var k = "javascript:void(0);", x = v ? k : r + this.urlEx.title, L = "so.iqiyi.com" === Q.url.parse(r).host ? !0 : !1;
        L ? (x = r + "_p1_" + (/ipad/.test(navigator.userAgent.toLowerCase()) ? "21" : "11") + "_f_title", r = x, n = "搜索观看", c = e.albumName) : r = v ? k : g ? x : r + this.urlEx.ctnvw;
        var w = 24, _ = v ? "itemLook" : "";
        return i.itemStatus = _, i.videoName = c.length > w / 2 ? c : "", i.playPercent = Math.round(100 * p) + "%", i.restPercent = 100 - Math.round(100 * p) + "%", i.videoTrancateName = Q.string.truncate(c, w), i.videoUrl = x, i.continuePlayUrl = r, i.playState = n, i.playStateCls = t, i.tvId = s, i.addtime = e.addtime, i.vn = c, i.exclusive = e.exclusive, i.nextVideoUrl = e.nextVideoUrl, i.looking = v, i.tvIdQipu = e.tvIdQipu, i.videoPlayTime = e.videoPlayTime, i.restTime = 0 >= f ? "已看完" : U >= 100 ? l + U % 1e3 + ":" + Q.number.pad(V, 2) : l + Q.number.pad(U, 2) + ":" + Q.number.pad(V, 2), e.hasOwnProperty("com") && (i.com = e.com), i
      }, refreshCurrent: function (e, t) {
        this.currentCache.videoId = e, this.currentCache.tvId = t
      }, getCurrentInfo: function () {
        return this.currentCache
      }, delPlayHistory: function (e) {
        e.param.agent_type = 1, r.delPlayHistory(e)
      }, clearPlayHistory: function (e) {
        e.param.agent_type = 1, r.clearPlayHistory(e)
      }, initCurrent: function (e, t) {
        this.currentCache.videoId = e, this.currentCache.tvId = t
      }, importPlayHistory: function (e) {
        e.param.agent_type = 1, r.importPlayHistory(e)
      }
    }
  })
});
define("../../model/playhistoryModel", ["../components/model/widgetModel", "../interfaces/playhistory", "../kit/storage", "../kit/userInfo", "../kit/checkI18nType"], function (e, t, i) {
  function n() {
    return 11 == m ? Q.cookie.get("QC005") : 21 == m || 31 == m ? Q.cookie.get("QC006") : null
  }

  var a, r = e("../components/model/widgetModel"), o = e("../interfaces/playhistory"), s = e("../kit/storage"), l = e("../kit/userInfo"), d = new Q.ic.InfoCenter({moduleName: "Playhistory"}), h = e("../kit/checkI18nType");
  h.type || (a = "TW");
  var c = navigator.userAgent.toLowerCase(), m = /ipad/.test(c) ? 21 : Q.browser.android || Q.browser.iPhone || Q.browser.WP ? 31 : 11;
  i.exports = Q.Class("PlayhistoryModel", {
    extend: r, properties: {_storageKey: "playhistory"}, construct: function () {
      this.callsuper()
    }, methods: {
      getPlayhistory: function (e) {
        var t = l.isLogin();
        d.log("Is login : " + t), t ? this.getLoginPlayHistory(e) : this.getUnLoginPlayHistory(e)
      }, setPlayhistory: function (e) {
        var t = l.isLogin();
        e.data || [], d.log("Is login : " + t), t ? this.setLoginPlayHistory(e) : this.setUnLoginPlayHistory(e)
      }, getByAlbumId: function (e) {
        e = e || {};
        var t = e.albumId, i = e.onsuccess, n = e.onfailure;
        this.getPlayhistory({
          onsuccess: function (e) {
            var a = [];
            e.length && (a = e.filter(function (e) {
              return e.albumId == t ? !0 : void 0
            })), a.length > 0 ? i && i(a[0]) : n && n()
          }, onfailure: n
        })
      }, getByTvId: function (e) {
        e = e || {};
        var t = e.tvId, i = e.onsuccess, n = e.onfailure;
        this.getPlayhistory({
          onsuccess: function (e) {
            var a = [];
            e.length && (a = e.filter(function (e) {
              return e.tvId == t ? !0 : void 0
            })), a.length > 0 ? i && i(a[0]) : n && n()
          }, onfailure: n
        })
      }, getLocalPlayhistory: function (e) {
        e = e || {}, e.param || {limit: 10};
        var t = e.onsuccess;
        e.onfailure;
        var i = s.read(this._storageKey);
        i = i ? JSON.parse(i) : [], t && t(i)
      }, getRemotePlayhistory: function (e) {
        e = e || {};
        var t = e.param || {limit: 10}, i = e.onsuccess, n = e.onfailure, a = new o;
        a.get(Q.url.jsonToQuery(t), function (e) {
          "A00000" == e.code ? (d.log("Success getting remote data : " + JSON.stringify(e.data)), i && i(e.data)) : (d.log("Failed to get remote data. Error code : " + JSON.stringify(e.code)), n && n(e))
        })
      }, setLocalPlayhistory: function (e) {
        var t = this;
        e = e || {};
        var i = e.data || [];
        this.getLocalPlayhistory({
          onsuccess: function (n) {
            Q.array.isArray(i) || (i = [i]), 0 === n.length ? n = i : i.forEach(function (e) {
              n.forEach(function (t, i) {
                t.tvId == e.tvId && t.videoId == e.videoId && n.splice(i, 1)
              }), n.splice(0, 0, e)
            });
            var a = e.onsuccess;
            e.onfailure, s.write(t._storageKey, JSON.stringify(n)), a && a()
          }
        })
      }, setRemotePlayhistory: function (e) {
        e = e || {};
        var t = e.data;
        t.terminalId = "31";
        var i = e.onsuccess, n = e.onfailure, a = new o;
        a.set(Q.url.jsonToQuery(t), function (e) {
          "A00000" == e.code ? i && i() : n && n(e)
        })
      }, getLoginPlayHistory: function (e) {
        e = e || {};
        var t = e.param || {limit: 10};
        t.auth = l.getSubAuthCookies(), t.cb = "cb_" + Math.floor(2147483648 * Math.random()).toString(36), e.noPPS || (t.dp = 3), t.terminalId = t.terminalId || m;
        var i = e.onsuccess, n = e.onfailure, a = new o;
        a.getPcLogin(t, function (e) {
          "A00000" == e.code ? i && i(e.data) : n && n(e)
        })
      }, getUnLoginPlayHistory: function (e) {
        e = e || {};
        var t = e.param || {};
        t.cb = "cb_" + Math.floor(2147483648 * Math.random()).toString(36), e.noPPS || (t.dp = 3), t.limit = 10, t.terminalId = t.terminalId || m, n() && (t.ckuid = t.ckuid || n());
        var i = e.onsuccess, a = e.onfailure, r = new o;
        d.log("getUnLoginPlayHistory, param: " + JSON.stringify(t)), r.getPcUnLogin(t, function (e) {
          "A00000" == e.code ? i && i(e.data) : a && a(e)
        })
      }, setLoginPlayHistory: function (e) {
        d.log("setLoginPlayHistory, videoName:" + e.data.videoName + ", videoPlayTime:" + e.data.videoPlayTime), e = e || {};
        var t = e.data || {};
        a && (t.locale = a), t.cb = "cb_" + Math.floor(2147483648 * Math.random()).toString(36), t.terminalId = t.terminalId || m;
        var i = e.onsuccess, n = e.onfailure, r = new o;
        r.setPcLogin(t, function (e) {
          "A00000" == e.code ? i && i(e.data) : n && n(e)
        })
      }, setUnLoginPlayHistory: function (e) {
        d.log("setUnLoginPlayHistory, videoName:" + e.data.videoName + ", videoPlayTime:" + e.data.videoPlayTime), e = e || {};
        var t = e.data || {};
        a && (t.locale = a), t.terminalId = t.terminalId || m, n() && (t.ckuid = t.ckuid || n()), t.cb = "cb_" + Math.floor(2147483648 * Math.random()).toString(36);
        var i = e.onsuccess, r = e.onfailure, s = new o;
        s.setPcUnLogin(t, function (e) {
          "A00000" == e.code ? i && i(e.data) : r && r(e)
        })
      }, delPlayHistory: function (e) {
        var t = l.isLogin();
        t ? this.delLoginHistory(e) : this.delUnLoginPlayHistory(e)
      }, delLoginHistory: function (e) {
        e = e || {};
        var t = e.param || {};
        t.cb = "cb_" + Math.floor(2147483648 * Math.random()).toString(36);
        var i = e.onsuccess, n = e.onfailure, a = new o;
        a.delPcLogin(t, function (e) {
          "A00000" == e.code ? i && i(e.data) : n && n(e)
        })
      }, delUnLoginPlayHistory: function (e) {
        e = e || {};
        var t = e.param || {};
        n() && (t.ckuid = t.ckuid || n()), t.cb = "cb_" + Math.floor(2147483648 * Math.random()).toString(36);
        var i = e.onsuccess, a = e.onfailure, r = new o;
        r.delPcUnLogin(t, function (e) {
          "A00000" == e.code ? i && i(e.data) : a && a(e)
        })
      }, clearPlayHistory: function (e) {
        var t = l.isLogin();
        d.log("Is login : " + t), t ? this.clearLoginPlayHistory(e) : this.clearUnLoginPlayHistory(e)
      }, clearLoginPlayHistory: function (e) {
        e = e || {};
        var t = e.param || {};
        t.cb = "cb_" + Math.floor(2147483648 * Math.random()).toString(36);
        var i = e.onsuccess, n = e.onfailure, a = new o;
        a.clearPcLogin(t, function (e) {
          "A00000" == e.code ? i && i(e.data) : n && n(e)
        })
      }, clearUnLoginPlayHistory: function (e) {
        e = e || {};
        var t = e.param || {};
        n() && (t.ckuid = t.ckuid || n()), t.cb = "cb_" + Math.floor(2147483648 * Math.random()).toString(36);
        var i = e.onsuccess, a = e.onfailure, r = new o;
        r.clearPcUnLogin(t, function (e) {
          "A00000" == e.code ? i && i(e.data) : a && a(e)
        })
      }, importPlayHistory: function (e) {
        this.importLoginPlayHistory(e)
      }, importLoginPlayHistory: function (e) {
        e = e || {};
        var t = e.param || {};
        n() && (t.ckuid = t.ckuid || n()), t.cb = "cb_" + Math.floor(2147483648 * Math.random()).toString(36);
        var i = e.onsuccess, a = e.onfailure, r = new o;
        r.importPcLogin(t, function (e) {
          e.data ? i && i(e.data) : a && a(e)
        })
      }, importSearchLogin: function (e) {
        e = e || {};
        var t = e.data || {};
        t.terminalId = t.terminalId || m, t.cb = "cb_" + Math.floor(2147483648 * Math.random()).toString(36);
        var i = e.onsuccess, n = e.onfailure, a = new o;
        a.importSearchLogin(t, function (e) {
          "A00000" == e.code ? i && i(e.data) : n && n(e.data)
        })
      }, getPlayHistoryByChannel: function (e) {
        e = e || {};
        var t = e.param || {}, i = e.onsuccess, n = e.onfailure, a = new o;
        a.getPcChannel(t, function (e) {
          "A00000" == e.code ? i && i(e.data) : n && n(e.data)
        })
      }, getPlayHistoryByAlbum: function (e) {
        var t = l.isLogin();
        d.log("Is login : " + t), t ? this.getLoginByAlbum(e) : this.getUnLoginByAlbum(e)
      }, getUnLoginByAlbum: function (e) {
        e = e || {};
        var t = e.param || {};
        t.terminalId = t.terminalId || m, t.cb = "cb_" + Math.floor(2147483648 * Math.random()).toString(36);
        var i = e.onsuccess, n = e.onfailure, a = new o;
        a.getPcUnLoginAlbum(t, function (e) {
          "A00000" == e.code ? i && i(e.data) : n && n(e.data)
        })
      }, getLoginByAlbum: function (e) {
        e = e || {};
        var t = e.param || {};
        t.terminalId = t.terminalId || m, t.cb = "cb_" + Math.floor(2147483648 * Math.random()).toString(36);
        var i = e.onsuccess, n = e.onfailure, a = new o;
        a.getPcLoginAlbum(t, function (e) {
          "A00000" == e.code ? i && i(e.data) : n && n(e.data)
        })
      }, importSearchUnLogin: function (e) {
        e = e || {};
        var t = e.data || {};
        t.terminalId = t.terminalId || m, t.cb = "cb_" + Math.floor(2147483648 * Math.random()).toString(36), n() && (t.ckuid = t.ckuid || n());
        var i = e.onsuccess, a = e.onfailure, r = new o;
        r.importSearchUnLogin(t, function (e) {
          "A00000" == e.code ? i && i(e.data) : a && a(e.data)
        })
      }
    }
  })
});
define("../../components/model/widgetModel", ["./model"], function (e, t, i) {
  var n = e("./model");
  i.exports = Q.Class("WidgetModel", {
    ns: "Q.model", extend: n, construct: function () {
      this.callsuper()
    }
  })
});
define("../../interfaces/playhistory", ["../kit/remoteInterface", "../config/siteDomain"], function (e, t, i) {
  var n = e("../kit/remoteInterface"), a = e("../config/siteDomain");
  i.exports = Q.Class("RIPlayhistory", {
    construct: function () {
      this._remoteInterface = new n({
        get: {url: "http://passport.m." + a.SITE_DOMAIN + "/apis/qiyirc/getrc.php"},
        set: {url: "http://passport.m." + a.SITE_DOMAIN + "/apis/qiyirc/setrc.php"},
        getPcLogin: {url: "http://l.rcd." + a.SITE_DOMAIN + "/apis/qiyirc/getrc.php"},
        getTWPcLogin: {url: "http://l.rcd." + a.SITE_DOMAIN + "/apis/tw/qiyirc/getrc.php"},
        getPcUnLogin: {url: "http://nl.rcd." + a.SITE_DOMAIN + "/apis/urc/getrc"},
        getTWPcUnLogin: {url: "http://nl.rcd." + a.SITE_DOMAIN + "/apis/tw/urc/getrc"},
        setPcLogin: {url: "http://l.rcd." + a.SITE_DOMAIN + "/apis/qiyirc/setrc.php"},
        setTWPcLogin: {url: "http://l.rcd." + a.SITE_DOMAIN + "/apis/tw/qiyirc/setrc.php"},
        setPcUnLogin: {url: "http://nl.rcd." + a.SITE_DOMAIN + "/apis/urc/setrc"},
        setTWPcUnLogin: {url: "http://nl.rcd." + a.SITE_DOMAIN + "/apis/tw/urc/setrc"},
        delPcLogin: {url: "http://l.rcd." + a.SITE_DOMAIN + "/apis/qiyirc/delrc.php"},
        delPcUnLogin: {url: "http://nl.rcd." + a.SITE_DOMAIN + "/apis/urc/delrc"},
        clearPcLogin: {url: "http://l.rcd." + a.SITE_DOMAIN + "/apis/qiyirc/delall.php"},
        clearPcUnLogin: {url: "http://nl.rcd." + a.SITE_DOMAIN + "/apis/urc/delall"},
        importPcLogin: {url: "http://nl.rcd." + a.SITE_DOMAIN + "/apis/urc/merge"},
        importSearchLogin: {url: "http://l.rcd." + a.SITE_DOMAIN + "/apis/qiyirc/setsrc"},
        importSearchUnLogin: {url: "http://l.rcd." + a.SITE_DOMAIN + "/apis/urc/setsrc"},
        getPcLoginAlbum: {url: "http://l.rcd." + a.SITE_DOMAIN + "/apis/qiyirc/getalbumrc"},
        getPcUnLoginAlbum: {url: "http://nl.rcd." + a.SITE_DOMAIN + "/apis/urc/getalbumrc"},
        getChannel: {url: "http://l.rcd." + a.SITE_DOMAIN + "/apis/qiyirc/getchannel"}
      })
    }, methods: {
      get: function (e, t) {
        e = e || "", this._remoteInterface.send({ifname: "get", param: e, cors: !0, withCredentials: !0}, function (e) {
          t && t(e)
        })
      }, set: function (e, t) {
        e = e || "", this._remoteInterface.send({
          method: "POST",
          ifname: "set",
          param: e,
          cors: !0,
          withCredentials: !0
        }, function (e) {
          t && t(e)
        })
      }, getPcLogin: function (e, t) {
        e = e || "";
        var i = e.locale || "";
        delete e.locale, this._remoteInterface.send({
          ifname: "get" + i + "PcLogin",
          param: e,
          timeout: 3e3
        }, function (e) {
          t && t(e)
        })
      }, getPcUnLogin: function (e, t) {
        e = e || "";
        var i = e.locale || "";
        delete e.locale, this._remoteInterface.send({
          ifname: "get" + i + "PcUnLogin",
          param: e,
          timeout: 3e3
        }, function (e) {
          t && t(e)
        })
      }, setPcLogin: function (e, t) {
        e = e || "";
        var i = e.locale || "";
        delete e.locale, e.t = (new Date).getTime(), this._remoteInterface.send({
          ifname: "set" + i + "PcLogin",
          param: e
        }, function (e) {
          t && t(e)
        })
      }, setPcUnLogin: function (e, t) {
        e = e || "";
        var i = e.locale || "";
        delete e.locale, this._remoteInterface.send({
          method: "POST",
          ifname: "set" + i + "PcUnLogin",
          param: e
        }, function (e) {
          t && t(e)
        })
      }, clearPcLogin: function (e, t) {
        e = e || "", this._remoteInterface.send({ifname: "clearPcLogin", param: e}, function (e) {
          t && t(e)
        })
      }, clearPcUnLogin: function (e, t) {
        e = e || "", this._remoteInterface.send({ifname: "clearPcUnLogin", param: e}, function (e) {
          t && t(e)
        })
      }, delPcLogin: function (e, t) {
        e = e || "", e.t = (new Date).getTime(), this._remoteInterface.send({
          ifname: "delPcLogin",
          param: e
        }, function (e) {
          t && t(e)
        })
      }, delPcUnLogin: function (e, t) {
        e = e || "", this._remoteInterface.send({ifname: "delPcUnLogin", param: e}, function (e) {
          t && t(e)
        })
      }, importPcLogin: function (e, t) {
        e = e || "", this._remoteInterface.send({ifname: "importPcLogin", param: e}, function (e) {
          t && t(e)
        })
      }, importSearchLogin: function (e, t) {
        e = e || "", this._remoteInterface.send({
          method: "GET",
          ifname: "importSearchLogin",
          param: e,
          timeout: 3e3
        }, function (e) {
          t && t(e)
        })
      }, getPcLoginAlbum: function (e, t) {
        e = e || "", this._remoteInterface.send({
          method: "GET",
          ifname: "getPcLoginAlbum",
          param: e,
          timeout: 3e3
        }, function (e) {
          t && t(e)
        })
      }, getPcUnLoginAlbum: function (e, t) {
        e = e || "", this._remoteInterface.send({
          method: "GET",
          ifname: "getPcUnLoginAlbum",
          param: e,
          timeout: 3e3
        }, function (e) {
          t && t(e)
        })
      }, getPcChannel: function (e, t) {
        e = e || "", this._remoteInterface.send({
          method: "GET",
          ifname: "getChannel",
          param: e,
          dataType: "jsonp",
          cors: !0,
          timeout: 3e3
        }, function (e) {
          t && t(e)
        })
      }
    }
  })
});
define("../../model/syncLastVideo", ["../kit/qiyiPlayer", "./playhistoryModel"], function (e, t, i) {
  var n = e("../kit/qiyiPlayer"), a = e("./playhistoryModel"), r = new a, o = null;
  i.exports = Q.Class("SyncLastVideo", {
    construct: function () {
      this.init()
    },
    properties: {
      timer: 1e4,
      cookieName: "QC018",
      terminalId: null,
      handler: null,
      cookieOpt: {path: "/", expires: 31536e6, domain: "iqiyi.com"}
    },
    methods: {
      init: function () {
        "" === document.referrer && this.syncLastVideo(), this.terminalId = Q.browser.iPad ? 21 : Q.browser.android || Q.browser.iPhone ? 31 : 11, o = n.getPlayer("video");
        var e = this;
        Q.player.loadSuccess && (this.handler = setTimeout(e.writeCurrentVideoToCookie.bind(e), e.timer))
      }, syncLastVideo: function () {
        var e = Q.cookie.get(this.cookieName);
        if (e) {
          var t = parseInt(Q.url.getQueryValue(e, "tvid"), 10), i = parseFloat(Q.url.getQueryValue(e, "videoPlayTime")), n = parseInt(Q.url.getQueryValue(e, "terminalId"), 10);
          if (t && i && n) {
            var a = {tvId: t, videoPlayTime: i, terminalId: n};
            r.setPlayhistory({data: a}, function (e) {
              "A00000" == e.code
            }), clearTimeout(this.handler), Q.cookie.set(this.cookieName, "", this.cookieOpt)
          }
        }
      }, writeCurrentVideoToCookie: function () {
        var e = this;
        o.getPlayInfo(function (t) {
          var i = "tvid=" + (t.tvid || t.tvId) + "&videoPlayTime=" + t.currentTime + "&terminalId=" + e.terminalId;
          Q.cookie.set(e.cookieName, i, e.cookieOpt), e.handler = setTimeout(e.writeCurrentVideoToCookie.bind(e), e.timer)
        })
      }
    }
  })
});
define("../../action/playhistoryRecorder", ["../kit/qiyiPlayer", "../model/playhistoryModel", "../kit/userInfo", "../kit/page"], function (e, t, i) {
  var n, a = e("../kit/qiyiPlayer"), r = e("../model/playhistoryModel"), o = 0, s = e("../kit/userInfo"), l = new Q.ic.InfoCenter({moduleName: "PlayhistoryRecorder"}), d = e("../kit/page"), h = function (e) {
    var t = e.data;
    o = t.ads[0].duration
  };
  i.exports = Q.Class("PlayhistoryRecorder", {
    construct: function (e) {
      e.playerId = e.playerId || "video", this._player = a.getPlayer(e.playerId), this._interval = e.interval || 12e4, this._timer = null, this._data = {}
    }, methods: {
      init: function () {
        this._initEvent(), this._historyModel = new r, this._hasStoped = !1
      }, destroy: function () {
        this._stopTimer(), o = 0, Q.event.customEvent.un("adloaded", h), n.un("beforeunload", this.beforeunloadHandler), Q.$(window).un("unload", this.windowUnload), Q.$(window).un("pagehide", this.windowUnload)
      }, _initEvent: function () {
        var e = this;
        e.unloaded = !1, this._player.on("StartPlay", function () {
          e._hasStoped = !1, l.log("StartPlay"), e._record()
        }), this._player.on("Play", function () {
          e._hasStoped = !1, l.log("Play"), e._startTimer()
        }), this._player.on("Paused", function () {
          l.log("Paused before1"), Q.browser.iPad && e.unloaded || (l.log("Paused before2"), e._hasStoped || (l.log("Paused"), e._recording()))
        }), this._player.on("Stoped", function () {
          l.log("Stoped"), e._hasStoped = !0, e._stopTimer(), e._stoped()
        }), n = d.getCurrent(), this.beforeunloadHandler = function () {
          l.log("beforeunloadHandler"), e._recording()
        }, n && n.on("beforeunload", this.beforeunloadHandler), this.windowUnload = function () {
          l.log("windowUnload"), e.unloaded = !0, e._recording()
        }, "onpagehide"in window ? Q.$(window).on("pagehide", this.windowUnload) : Q.$(window).on("unload", this.windowUnload), Q.event.customEvent.on("adloaded", h)
      }, _record: function () {
        var e = this;
        this._player.getVideoInfo(function (t) {
          var i = t.tvid;
          e._historyModel.getByTvId({
            tvId: i, onsuccess: function (t) {
              l.log("data.videoPlayTime" + t.videoPlayTime), t.videoPlayTime <= 0 && e._recording()
            }, onfailure: function () {
              e._recording()
            }
          })
        })
      }, _startTimer: function () {
        var e = s.isLogin();
        e && !this._timer && (l.debug("Recorder start."), this._timer = setInterval(this._recording.bind(this), this._interval))
      }, _stopTimer: function () {
        this._timer && (l.debug("Recorder stop."), clearInterval(this._timer), this._timer = null)
      }, _stoped: function () {
        var e = this;
        this._hasStoped = !0, this._getData(function (t) {
          t.videoPlayTime = 0, l.log(t.videoPlayTime), e._historyModel.setPlayhistory({data: t})
        })
      }, _getData: function (e) {
        var t = this;
        this._player.getPlayInfo(function (i) {
          t._data.videoPlayTime = parseInt(i.currentTime, 10), t._player.getVideoInfo(function (i) {
            t._data.videoName = i.vn, t._data.albumName = i.an, t._data.videoId = i.vid, t._data.albumId = i.aid, t._data.tvId = i.tvid, t._data.nextTvid = i.ntvd || "", t._data.nextVid = i.nvid || "", e(t._data)
          })
        })
      }, _recording: function () {
        var e = this;
        l.log("_recording"), this._getData(function (t) {
          l.log("recording 1 : " + t.videoPlayTime), t.videoPlayTime < o || t.videoName && (t.videoPlayTime = t.videoPlayTime - o, l.log("Recording 2 : " + t.videoPlayTime), 0 === t.videoPlayTime && (t.videoPlayTime = -1), e._hasStoped && (t.videoPlayTime = 0), l.log("Recording : " + t.videoPlayTime), e._historyModel.setPlayhistory({data: t}))
        })
      }
    }
  })
});
define("../../kit/page", ["../components/units/pageJob", "../action/templateRenderer", "../view/templateView", "../model/channelModel", "./eventPlugin", "../components/action/nonMVCWidget", "../action/phoneLoading", "../kit/ifrestime", "../config/projectConfig"], function (e, t, i) {
  var n, a = e("../components/units/pageJob"), r = e("../action/templateRenderer"), o = e("../view/templateView");
  e("../model/channelModel");
  var s = e("./eventPlugin"), l = e("../components/action/nonMVCWidget"), d = e("../action/phoneLoading"), h = [], c = [], m = {}, u = new Q.ic.InfoCenter({moduleName: "Page"}), p = e("../kit/ifrestime"), f = e("../config/projectConfig"), U = f.getConfig();
  Q.$(window).on("popstate", function (e) {
    Q.event.get(e).preventDefault();
    var t;
    if (u.log("state: " + t + ", e.state: " + e.state), t = e.state)if (null != t ? t.id : 0) {
      var i = V.getCurrent(), n = !1;
      n = !i.state || i.state && i.state.id >= t.id ? V.back(t.id) : V.foward(t.id), n || location.reload()
    } else location.reload()
  });
  var V = Q.Class("Page", {
    extend: l, properties: {}, plugins: [new s], construct: function (e) {
      this._uid = (new Date).getTime(), this.callsuper(e), this._wrapper = e.wrapper, this._tmp = Q.element.Element.create({tagName: "div"}), this._scroll = 0
    }, statics: {
      _backStack: [], _fowardStack: [], _currPage: null, getInstance: function (e) {
        var t = new V({wrapper: Q.$("body")});
        return t.setUrl(e), t
      }, setCurrent: function (e) {
        V._currPage = e
      }, getCurrent: function () {
        return V._currPage
      }, canBack: function () {
        return h.length > 0
      }, back: function (e) {
        var t = m[e];
        if (t) {
          var i = V.getCurrent();
          return c.push(i), t.setType("back"), t.renderHtml(t.getHtml(), function () {
            t.initPage(!1), V.setCurrent(t), t.removeHiddenPages()
          }), !0
        }
        return !1
      }, foward: function (e) {
        var t = m[e];
        if (t) {
          var i = V.getCurrent();
          return h.push(i), t.setType("foward"), t.renderHtml(t.getHtml(), function () {
            t.initPage(!1), V.setCurrent(t), t.removeHiddenPages()
          }), !0
        }
        return !1
      }, updateHistory: function (e) {
        c = [], h.push(e), u.log("back:" + h.length), u.log("foward:" + c.length)
      }, _getPageFromStack: function (e) {
        var t;
        return h.some(function (i) {
          return i.getUrl() == e ? (t = i, !1) : void 0
        }), t
      }
    }, methods: {
      load: function (e) {
        Q.LoadTime && Q.LoadTime.reset(["jsloaded", "jobdone"]), u.log("load | tplid | " + e.tplId), this._check(), this.setType("newload"), this._loading || (this._loading = new d({doms: {wrapper: Q.$("body")}})), this._id = (new Date).getTime() - 1, m[this._id] = this;
        var t = this, i = Q.object.extend({}, e), n = new Date;
        i.onsuccess = function () {
          u.debug("Page loaded in " + (new Date - n) + " ms"), t.initPage(!0);
          var i = V.getCurrent();
          t.setReferrer(i.getUrl()), V.setCurrent(t), V.updateHistory(i, t), t.removeHiddenPages(), e.onsuccess && e.onsuccess()
        }, i.onfailure = function () {
          e.onfailure && e.onfailure()
        }, this._render(i)
      }, removeHiddenPages: function () {
        var e = Q.$("[data-widget=page]"), t = V.getCurrent();
        e.forEach(function (e) {
          e != t.getPageElem()[0] && Q.$(document.body).remove(e)
        })
      }, initPageResource: function () {
        this._getScript(), this._getHtmlTitle()
      }, setType: function (e) {
        this._type = e
      }, getType: function () {
        return this._type
      }, replaceUrl: function (e) {
        history.replaceState && history.replaceState("", "", e), this.setUrl(e)
      }, initPage: function (e) {
        this.initPageResource(), this.setTitle(), this._initPageJob(), u.debug("Resume to scrollTop : " + this._scroll), setTimeout(this.execScript.bind(this), 0), this.pushState(e)
      }, pushState: function (e) {
        if (this.state || (this.state = {id: this._id}), this._url)try {
          e && history.pushState ? history.pushState(this.state, this.getTitle(), this._url) : history.replaceState && history.replaceState(this.state, this.getTitle(), this._url)
        } catch (t) {
        }
      }, unload: function () {
        this._destroyJobs()
      }, getHtml: function () {
        return this._html || ""
      }, setUrl: function (e) {
        this._url = e
      }, getUrl: function () {
        return decodeURI(this._url)
      }, setReferrer: function (e) {
        this._referrer = e
      }, getReferrer: function () {
        return this._referrer || ""
      }, _render: function (e) {
        var t, i = e.tplId, a = e.tplUrl, s = e.onsuccess, l = e.onfailure, d = !1;
        t = setTimeout(function () {
          d = !0, l && l()
        }, U.http.timeout), u.log("_render | tmpl to render: " + i);
        var h = this, c = new Date;
        U.getTpls(function (m) {
          if (!d) {
            p.send({
              tl: new Date - c,
              intype: "ht_tm"
            }), u.debug("Loaded template data : " + (new Date - c) + " ms."), t && clearTimeout(t), m = m || {}, a = m[i].tpl, u.debug("_render | tmpl url: " + a);
            var f = m[i];
            if (a && f) {
              f.Action && (r = f.Action), f.Model && (n = f.Model), f.View && (o = f.View);
              var U = new n({dom: e.dom}), V = new o({tplUrl: a}), g = new r({model: U, view: V});
              c = new Date, g.render({
                onsuccess: function (e) {
                  u.debug("Template rendered in " + (new Date - c) + " ms"), u.log("_render | begin to renderHtml"), c = new Date, h.renderHtml(e, function () {
                    u.debug("Html rendered in " + (new Date - c) + " ms"), s && s(e)
                  })
                }, onfailure: function () {
                  u.error("_render | No string rendered."), l && l()
                }
              })
            } else u.error("_render | Missing tplUrl or rendererInfo"), l && l()
          }
        })
      }, renderHtml: function (e, t) {
        this.saveHtml(e), e = this._trimBody(e);
        var i = new Date;
        this._tmp.html(e);
        var n = this._tmp.first();
        u.debug("Trim body2 cost : " + (new Date - i) + " ms"), this._pageElem = n, n.css("visibility", "hidden"), this._wrapper.append(n);
        var a = V.getCurrent(), r = a.getPageElem();
        a._saveScroll(), this._switchPage(r, this._pageElem, t)
      }, _saveScroll: function () {
        this._scroll = Q.page.getScrollTop(), u.debug("Saved scrollTop : " + this._scroll)
      }, getPageElem: function () {
        return this._pageElem
      }, getScripts: function () {
        return this._scripts || []
      }, execScript: function () {
        var e = this._scripts;
        e && e.forEach(function (e) {
          if (e = e.replace(/<.*?>/g, "").trim())try {
            new Function(e).call()
          } catch (t) {
            u.debug(t)
          }
        })
      }, _switchPage: function (e, t, i) {
        var n = V.getCurrent();
        n.fire({type: "beforeunload", data: {page: n}}), n.fire({
          type: "beforeswitchpage",
          data: {type: this._type, callback: i, oldPage: e, newPage: t}
        }), n.unload()
      }, setPageElem: function (e) {
        this._pageElem = e
      }, removePageElem: function (e) {
        this._wrapper.remove(e)
      }, _getScript: function () {
        var e = this._html, t = /<script.*?>([\s\S]*?)<\/ *script>/g, i = e.match(t);
        i && (this._scripts = i)
      }, getTitle: function () {
        return this._title || ""
      }, setTitle: function (e) {
        document.title = e || this.getTitle(), this._title = document.title
      }, _getHtmlTitle: function () {
        var e = this._html, t = /<title>([\s\S]+?)<\/title>/;
        e.match(t) && (this._title = RegExp.$1.trim())
      }, _trimBody: function (e) {
        return e.replace(/^[\s\S]*<body.*?>/, "").replace(/<\/ *body>[\s\S]*/, "")
      }, saveHtml: function (e) {
        this._html = e
      }, _destroyJobs: function () {
        var e = a.getJobs();
        e.forEach(function (e) {
          if (e.object.destroy)try {
            e.object.destroy()
          } catch (t) {
            u.warn("job destroy failed in " + e.name + " with message: " + t.message)
          }
        })
      }, _initPageJob: function () {
        a.clear()
      }, _showLoading: function () {
        this._loading.show()
      }, _hideLoading: function () {
        this._loading.hide()
      }, _check: function () {
        var e = Q.$("[data-widget=page]");
        e.length > 1
      }
    }
  });
  i.exports = V
});
define("../../action/templateRenderer", ["../components/action/adapter", "../model/templateModel", "../view/templateView"], function (e, t, i) {
  var n = e("../components/action/adapter"), a = e("../model/templateModel"), r = e("../view/templateView"), o = new Q.ic.InfoCenter({moduleName: "TemplateRenderer"});
  i.exports = Q.Class("TemplateRenderer", {
    extend: n, construct: function (e) {
      e = e || {};
      var t = e.model, i = e.view;
      if (!(t instanceof a))throw new Error("Template.construct : model is not instance of TemplateModel");
      if (!(i instanceof r))throw new Error("Template.construct : view is not instance of TemplateView");
      this.callsuper(e)
    }, methods: {
      render: function (e) {
        var t = e, i = e;
        Q.object.isObject(e) && (t = e.onsuccess, i = e.onfailure);
        var n = this;
        o.debug("Begin to get template data.");
        var a = new Date;
        this._model.makeupData(function (e) {
          o.debug("Data loaded in " + (new Date - a) + " ms"), o.debug("Data is : " + ("object" == typeof e ? JSON.stringify(e) : e.toString())), e && "A00000" == e.code ? (o.debug("Success getting data."), a = new Date, n._view.load({
            onsuccess: function () {
              o.debug("All templates loaded in " + (new Date - a) + " ms."), a = new Date, n._view.render(e.data || {}, function (e) {
                o.debug("Mustache calculated in " + (new Date - a) + " ms."), t(e)
              })
            }, onfailure: function () {
              i && i()
            }
          })) : (o.debug("Fail to get data."), i && i())
        })
      }, config: function (e) {
        this._view.config(e)
      }
    }
  })
});
define("../../model/templateModel", ["../components/model/model"], function (e, t, i) {
  var n = e("../components/model/model");
  i.exports = Q.Class("TemplateModel", {
    extend: n, construct: function () {
      this.callsuper()
    }, methods: {makeupData: Q.fn.abstractMethod}
  })
});
define("../../view/templateView", ["../components/view/view", "../config/mobileRoot", "../config/mobileConfig", "../kit/plugins/storage/localStoragePlugin", "../components/action/asyncQueue", "../config/projectConfig"], function (e, t, i) {
  var n = e("../components/view/view");
  e("../config/mobileRoot");
  var a, r, o = e("../config/mobileConfig"), s = new Q.ic.InfoCenter({moduleName: "TemplateView"}), l = e("../kit/plugins/storage/localStoragePlugin"), d = e("../components/action/asyncQueue"), h = e("../config/projectConfig"), c = h.getConfig();
  Q.event.customEvent.on("cachedownloading", function () {
    a = {}, r = {}
  }), i.exports = Q.Class("TemplateView", {
    extend: n, construct: function (e) {
      this._plugins = {storage: new l}, this._tplBase = c.tplBase || "", this._partials = [], this._partialsCount = 0, this._tplUrl = e.tplUrl, this._id = "default", this._tplUrl && (this._id = this._tplUrl)
    }, methods: {
      load: function (e) {
        var t, i = e;
        Q.object.isObject(e) && (i = e.onsuccess, t = e.onfailure);
        var n = this, o = new Date;
        this._loadStorageData(function () {
          a[n._id] && r[n._id] && !/\/(?:home)|(?:chunwan).inc$/.test(n._id) ? i() : (a[n._id] = {}, n._loadTmpl(function (e) {
            e ? (s.debug("Tmpl[" + n._id + "] loaded in " + (new Date - o) + " ms."), r[n._id] = e, n._saveTmplToStorage(function () {
              n._getPartials(e, {
                onsuccess: function (e) {
                  e.forEach(function (e) {
                    a[n._id][e.name] = e.content, "/templates/pages/play.inc" === n._id && s.log(n._id + '["' + e.name + '"]: ' + (e.content.length > 20 ? e.content.length : e.content))
                  }), i(), n._savePdToStorage()
                }, onfailure: function () {
                  s.warn("Tmpl[" + n._id + "] load failed."), t.apply(null, arguments)
                }
              })
            })) : (s.warn("Tmpl[" + n._id + "] load failed."), t.apply(null, arguments))
          }))
        })
      }, config: function (e) {
        e && e.plugins && "storage"in e.plugins && (this._plugins.storage = e.plugins.storage)
      }, render: function (e, t) {
        e = this._getData(e), this._renderTemplate(e, function (e) {
          t(e)
        })
      }, _getData: function (e) {
        return e
      }, _loadTmpl: function (e) {
        r[this._tplUrl] ? e(r[this._tplUrl]) : Q.http.text(this._tplUrl + "?" + Date.now(), {
          cors: !0,
          onsuccess: function (t, i) {
            e(i)
          },
          timeout: o.http.timeout,
          onfailure: function () {
            e("")
          }
        })
      }, _loadStorageData: function (e) {
        if (!this._plugins.storage)return a = {}, r = {}, e(), void 0;
        var t = new d, i = this;
        t.enqueue(function () {
          a ? t.dequeue() : i._plugins.storage.read("tmplpd", function (e, i) {
            a = i || {}, t.dequeue()
          })
        }), t.enqueue(function () {
          r ? t.dequeue() : i._plugins.storage.read("tmpl", function (e, i) {
            r = i || {}, t.dequeue()
          })
        }), t.on("end", e), t.start()
      }, _saveTmplToStorage: function (e) {
        this._plugins.storage ? this._plugins.storage.write("tmpl", r, function () {
          e()
        }) : e()
      }, _savePdToStorage: function (e) {
        this._plugins.storage ? this._plugins.storage.write("tmplpd", a, function () {
          e && e()
        }) : e && e()
      }, _getPartials: function (e, t) {
        var i, n = t;
        Q.object.isObject(t) && (n = t.onsuccess, i = t.onfailure);
        var a = /\{\{> *.+? *\}\}/g, l = /[\{\} >]/g, d = this, h = e.match(a);
        h && h.length > 0 ? (this._partialsCount += h.length, h.forEach(function (e) {
          var t = e.replace(l, ""), a = d._tplBase + t + ".inc", h = new Date, c = function (e) {
            d._partials.push({name: t, content: e}), d._getPartials(e, n)
          };
          r[a] ? c(r[a]) : Q.http.text(a + "?" + Date.now(), {
            cors: !0,
            timeout: o.http.timeout,
            onsuccess: function (e, i) {
              s.debug("Tmpl[" + a + "] loaded in " + (new Date - h) + " ms."), "fragments/chunwan/item/chunwandetail" != t && "fragments/chunwan/item/chuwanpushdetail" != t && (r[a] = i), c(i), d._savePdToStorage()
            },
            onfailure: function () {
              s.warn("Tmpl[" + a + "] load failed."), i.apply(null, arguments)
            }
          })
        })) : this._partialsCount == this._partials.length && n(this._partials)
      }, _renderTemplate: function (e, t) {
        var i = this, n = Q.plugins.Mustache.render(r[this._id], e, a[this._id]);
        "/templates/pages/play.inc" === i._id && (i._plugins.storage.read("tmplpd", function () {
          s.log('read tmplpd partialsDatas["/templates/pages/play.inc"]' + JSON.stringify(a["/templates/pages/play.inc"]).length)
        }), s.log("this._id: " + this._id), s.log("tpls[this._id]: " + JSON.stringify(r[this._id]).length), s.log("partialsDatas[this._id]: " + JSON.stringify(a[this._id]).length), s.log("str.length " + n.length)), t(n)
      }
    }
  })
});
define("../../config/mobileRoot", [], function (e, t, i) {
  i.exports = ""
});
define("../../kit/plugins/storage/localStoragePlugin", ["./storagePlugin", "../../storage"], function (e, t, i) {
  var n = e("./storagePlugin"), a = e("../../storage");
  i.exports = Q.Class("LocalStoragePlugin", {
    extend: n, construct: function () {
    }, methods: {
      _write: function (e, t, i) {
        t && a.write(e, JSON.stringify(t)), i()
      }, _read: function (e, t) {
        var i = a.read(e);
        i && (i = JSON.parse(i)), t(null, i)
      }, _remove: function (e, t) {
        a.remove(e), t()
      }
    }
  })
});
define("../../kit/plugins/storage/storagePlugin", [], function (e, t, i) {
  i.exports = Q.Class("StoragePlugin", {
    construct: function () {
    }, methods: {
      write: function (e, t, i) {
        e = this.__getKey(e), this._write(e, t, i)
      }, read: function (e, t) {
        e = this.__getKey(e), this._read(e, t)
      }, remove: function (e, t) {
        e = this.__getKey(e), this._remove(e, t)
      }, __getKey: function (e) {
        return "StoragePlugin_" + e
      }, _write: Q.fn.abstractMethod, _read: Q.fn.abstractMethod, _remove: Q.fn.abstractMethod
    }
  })
});
define("../../components/action/asyncQueue", [], function (e, t, i) {
  i.exports = Q.Class("AsyncQueue", {
    ns: "Q.action", construct: function () {
      this._queue = [], this._event = {}
    }, methods: {
      enqueue: function () {
        var e, t;
        1 == arguments.length && (e = arguments[0]), 2 == arguments.length && (e = arguments[0], t = arguments[1]), this._queue.push({
          fn: e,
          param: t || {}
        })
      }, dequeue: function () {
        if (0 == this._queue.length)this.end(!0); else {
          var e = this._queue.splice(0, 1)[0];
          e.fn(e.param)
        }
      }, start: function () {
        this.dequeue()
      }, end: function (e) {
        this.fire("end", e)
      }, on: function (e, t) {
        this._event[e] || (this._event[e] = []), this._event[e].push(t)
      }, fire: function (e, t) {
        if (this._event[e])for (var i = 0; i < this._event[e].length; i++)this._event[e][i](t)
      }, clear: function () {
        this._queue = []
      }
    }
  })
});
define("../../model/channelModel", ["../model/templateModel"], function (e, t, n) {
  var i = e("../model/templateModel");
  n.exports = Q.Class("ChannelModel", {
    extend: i, construct: function (e) {
      this.callsuper(), e && (this.name = e.name)
    }, statics: {}, methods: {
      setName: function (e) {
        this.name = e
      }, getChannels: function () {
        var e = [{
          name: "电影",
          htid: "dianying",
          categoryId: 1,
          types: [{desc: "按地区", mb10: !0, all: ["全部", "华语", "美国", "欧洲", "韩国", "日本", "泰国", "其他"]}, {
            desc: "按类型",
            all: ["全部", "动作", "喜剧", "爱情", "惊悚", "科幻", "剧情", "战争", "青春", "灾难"]
          }]
        }, {
          name: "电视剧",
          htid: "dianshiju",
          categoryId: 2,
          types: [{desc: "按地区", mb10: !0, all: ["全部", "内地", "香港", "台湾", "韩国", "日本", "美剧", "泰剧", "其他"]}, {
            desc: "按类型",
            all: ["全部", "青春", "家庭", "军旅", "言情", "古装", "武侠", "偶像", "谍战", "喜剧"]
          }]
        }, {
          name: "片花",
          htid: "pianhua",
          categoryId: 10,
          types: [{desc: "按分类", mb10: !0, all: ["全部", "电影", "电视剧"]}, {desc: "按地区", all: ["全部", "华语", "美国", "欧洲"]}]
        }, {
          name: "微电影",
          htid: "weidianying",
          categoryId: 16,
          types: [{desc: "按片种", mb10: !0, all: ["全部", "剧情", "动画", "创意", "记录"]}, {
            desc: "按类型",
            all: ["全部", "明星", "歌舞", "文艺", "喜剧", "爱情", "动作", "奇幻", "惊悚", "悬疑"]
          }]
        }, {
          name: "动漫",
          htid: "dongman",
          categoryId: 4,
          types: [{desc: "按地区", mb10: !0, all: ["全部", "大陆", "日本", "美国", "法国", "韩国", "英国", "其他"]}, {
            desc: "按年龄",
            all: ["全部", "0-3", "4-6", "7-13", "14-17", "18以上"]
          }]
        }, {
          name: "综艺",
          htid: "zongyi",
          categoryId: 6,
          types: [{desc: "按地区", mb10: !0, all: ["全部", "内地", "港台", "日韩", "其它"]}, {
            desc: "按类型",
            all: ["全部", "情感", "搞笑", "访谈", "选秀", "时尚", "杂谈", "游戏", "播报", "粤语"]
          }]
        }, {
          name: "纪录片",
          htid: "jilupian",
          categoryId: 3,
          types: [{desc: "按类型", all: ["全部", "社会", "军事", "探索", "自然", "历史", "人物", "文化", "地理", "旅游"]}]
        }, {
          name: "音乐",
          htid: "yinyue",
          categoryId: 5,
          types: [{desc: "按地区", mb10: !0, all: ["全部", "内地", "港台", "日韩", "欧美", "拉丁", "东南亚"]}, {
            desc: "按流派",
            all: ["全部", "流行", "摇滚", "民谣", "说唱", "爵士", "另类", "朋克", "金属", "独立"]
          }]
        }, {
          name: "旅游",
          htid: "lvyou",
          categoryId: 9,
          types: [{desc: "按地区", mb10: !0, all: ["全部", "北京", "西藏", "法国", "日本", "埃及", "澳洲", "安徽", "河南", "湖南"]}, {
            desc: "按类型",
            all: ["全部", "风光", "饮食", "出行", "住宿"]
          }]
        }, {
          name: "时尚",
          htid: "shishang",
          categoryId: 13,
          types: [{desc: "按行业", mb10: !0, all: ["全部", "美容", "服饰", "生活", "其他"]}, {
            desc: "按季节",
            all: ["全部", "早春", "春夏", "早秋", "秋冬", "其他"]
          }]
        }, {
          name: "娱乐",
          htid: "yule",
          categoryId: 7,
          types: [{desc: "按地区", mb10: !0, all: ["全部", "内地", "港台", "日韩", "海外", "其它"]}, {
            desc: "按类型",
            all: ["全部", "新闻", "访谈", "专题", "花絮", "MV", "独家", "热点", "原创", "八卦"]
          }]
        }, {
          name: "体育",
          htid: "sports",
          categoryId: 17,
          types: [{desc: "按项目", mb10: !0, all: ["全部", "足球", "篮球", "网球", "高尔夫", "赛车", "极限", "台球", "其他"]}, {
            desc: "按类型",
            all: ["全部", "集锦", "花絮", "进球", "整场", "节目", "纪录片", "教学", "咨询", "其他"]
          }]
        }, {
          name: "搞笑",
          htid: "fun",
          categoryId: 22,
          types: [{desc: "按地区", mb10: !0, all: ["全部", "国内", "国外"]}, {
            desc: "按类型",
            all: ["全部", "自爆", "原创", "恶搞", "相声", "小品", "宠物", "屌丝", "童趣", "方言"]
          }]
        }, {
          name: "广告",
          htid: "ad",
          categoryId: 20,
          types: [{desc: "按分类", mb10: !0, all: ["全部", "明星", "公益", "欧美", "形象", "搞笑", "时尚", "儿童", "生活", "性感"]}, {
            desc: "按品牌",
            all: ["全部", "食品", "饮料", "化妆品", "房地产", "金融", "汽车", "IT数码", "烟酒"]
          }]
        }, {
          name: "生活",
          htid: "life",
          categoryId: 21,
          types: [{desc: "按地区", mb10: !0, all: ["全部", "国内", "国外"]}, {
            desc: "按类型",
            all: ["全部", "社会", "民生", "科技", "财经", "奇闻", "美食", "健康", "居家", "美容"]
          }]
        }, {
          name: "教育",
          htid: "edu",
          categoryId: 12,
          types: [{
            desc: "按类型",
            mb10: !0,
            all: ["全部", "幼儿", "小学", "初中", "高中", "学历教育", "外语学习", "职业教育", "管理培训"]
          }, {desc: "按学科", all: ["全部", "语文", "数学", "英语", "物理", "化学", "政治", "生物", "历史", "地理"]}]
        }];
        return {channels: e}
      }, makeupData: function (e) {
        var t = this.name, n = this.getChannels();
        n.channels.forEach(function (n) {
          if (n.name == t) {
            n.types.forEach(function (e, t) {
              var n = [];
              e.all.forEach(function (e) {
                "全部" == e ? n.push({name: e, sel: !0}) : n.push({name: e, sel: !1})
              }), e.all = n, e.i = t
            });
            var i = {};
            return i.data = n, i.code = "A00000", e(i), void 0
          }
        })
      }, getData: function (e, t) {
        var n = this.getChannels();
        n.channels.forEach(function (n) {
          if (Q.object.like(n, e))for (var i in t)t[i] = n[i]
        })
      }, getCategoryIdByName: function (e) {
        var t = this.getChannels(), n = 0;
        return t.channels.forEach(function (t) {
          t.name == e && (n = t.categoryId)
        }), n
      }, gethtidByName: function (e) {
        var t = this.getChannels(), n = null;
        return t.channels.forEach(function (t) {
          t.name == e && (n = t.htid)
        }), n
      }, getCategoryById: function (e) {
        var t, n = this.getChannels();
        return n.channels.forEach(function (n) {
          n.categoryId == e && (t = n)
        }), t
      }, getCategorys: function () {
        var e = [], t = this.getChannels();
        return t.channels.forEach(function (t) {
          e.push(t.name)
        }), e
      }
    }
  })
});
define("../../components/action/nonMVCWidget", ["./adapter", "./plugin"], function (e, t, n) {
  var i = e("./adapter"), a = e("./plugin");
  n.exports = Q.Class("NonMVCWidget", {
    extend: i, construct: function (e) {
      this.callsuper(e), this._plugins = []
    }, methods: {
      init: function () {
        var e = this;
        this._plugins.forEach(function (t) {
          t.init(e)
        })
      }, registerPlugin: function (e) {
        if (!(e instanceof a))throw new Error("Not a Plugin's instance.");
        this._plugins.push(e)
      }, resetPlugin: function () {
        this._plugins = []
      }
    }
  })
});
define("../../components/action/plugin", [], function (e, t, n) {
  n.exports = Q.Class("Plugin", {
    construct: function () {
      throw new Error("Can not create instance.")
    }, methods: {
      init: function (e) {
        this._widget = e
      }
    }
  })
});
define("../../action/phoneLoading", ["../components/action/widget", "../components/model/model", "../view/phoneLoadingView"], function (e, t, n) {
  var i = e("../components/action/widget"), a = e("../components/model/model"), r = e("../view/phoneLoadingView");
  n.exports = Q.Class("PhoneLoading", {
    extend: i, construct: function (e) {
      e = e || {}, e.model = e.model || new a, e.view = e.view || new r(e), this.callsuper(e)
    }, methods: {
      show: function () {
        this.syncSet({display: !0})
      }, hide: function () {
        this.syncSet({display: !1})
      }
    }
  })
});
define("../../components/action/widget", ["./nonMVCWidget", "../view/widgetView"], function (e, t, n) {
  var i = e("./nonMVCWidget"), a = e("../view/widgetView");
  n.exports = Q.Class("Widget", {
    extend: i, construct: function (e) {
      if (!(e.view instanceof a))throw new Error("Widget.construct : view is not instance of WidgetView");
      this.callsuper({model: e.model, view: e.view})
    }, methods: {
      redraw: function () {
        this._view.update(this._model.get())
      }, config: function (e) {
        this._view.config(e)
      }
    }
  })
});
define("../../view/phoneLoadingView", ["../components/view/widgetView"], function (e, t, n) {
  var i = e("../components/view/widgetView"), a = function (e) {
    Q.event.get(e).stop()
  };
  n.exports = Q.Class("PhoneLoadingView", {
    extend: i, construct: function (e) {
      this.callsuper(e), e.message = e.message || "加载中..", this._elem = Q.$("#loadingelem");
      var t = Q.page.getViewHeight(), n = Q.page.getViewWidth(), i = Q.page.getScrollTop();
      if (this._elem)this._elem.html('<img src="http://www.qiyipic.com/common/images/load.gif"/>&nbsp;' + e.message); else {
        Q.page.getScrollTop();
        var a = 0 + t / 2 - 24;
        this._elem = Q.element.Element.create({tagName: "div"}), this._elem.html('<img src="http://www.qiyipic.com/common/images/load.gif"/>&nbsp;' + e.message), this._elem.css("position", "absolute"), this._elem.css("left", "0"), this._elem.css("width", n + "px"), this._elem.css("height", t + "px"), this._elem.css("color", "white"), this._elem.css("background", "black"), this._elem.css("zIndex", "10"), this._elem.css("opacity", "0.6"), this._elem.css("display", "none"), this._elem.css("textAlign", "center"), this._elem.attr("data-fixed-enable", "true"), this._elem.attr("id", "loadingelem"), this._elem.css("paddingTop", a + "px"), e.doms.wrapper.append(this._elem)
      }
      this._elem.css("top", i + "px")
    }, methods: {
      init: function (e) {
        this.callsuper("init", e)
      }, update: function (e) {
        e.display ? (this._elem.show(), Q.$("body").on("touchmove", a)) : (this._elem.hide(), Q.$("body").un("touchmove", a))
      }
    }
  })
});
define("../../model/parseItem", [], function (e, t, n) {
  var i = function (e, t) {
    var n = Q.url.parse(e);
    return n ? (n.search = e.replace(n.protocol + "://" + n.host + n.path, ""), t + n.search) : t
  };
  n.exports = {
    playHistoryParse: function (e, t) {
      if ("重新观看" === e.playState && t.nextTvid && "" !== t.nextVideoUrl) {
        if (this._ctrl._view._doms.version && 2.4 == this._ctrl._view._doms.version)return e;
        e.videoName = t.nextVideoName || t.videoName, e.videoUrl = i(e.videoUrl, t.nextVideoUrl), e.playState = "继续观看", e.continuePlayUrl = i(e.continuePlayUrl, t.nextVideoUrl)
      }
      return e
    }, updateRecordInfoParse: function (e) {
      return 0 === parseInt(e.videoPlayTime, 10) && e.nextTvid && "" !== e.nextVideoUrl && (e.updateCurrentUrl === e.updateVideoUrl ? e.updateCurrentUrl = e.updateVideoUrl = i(e.updateCurrentUrl, e.nextVideoUrl) : e.updateVideoUrl = i(e.updateCurrentUrl, e.nextVideoUrl)), e
    }, parse: function (e, t) {
      var n = new Q.plugins.Template(e);
      return n.evaluate(t)
    }, parseLimit: function (e, t, n) {
      n && n.forEach(function (e) {
        t[e.key] = Q.string.truncate(t[e.key], e.value)
      });
      var i = new Q.plugins.Template(e);
      return i.evaluate(t)
    }
  }
});
define("../../units/compatiblePlayHistory", ["../components/units/pageJob", "../model/playhistoryModel"], function (e) {
  var t = e("../components/units/pageJob"), n = e("../model/playhistoryModel"), i = new n;
  t.create("CompatiblePlayHistory", {
    check: function () {
      return !0
    }, init: function () {
    }, exec: function () {
      var e = window, t = "lib.action.NewPlayHistory.instance";
      Q.object.forEach(t.split("."), function (t) {
        e[t] = e[t] || {}, e = e[t]
      }), lib.action.NewPlayHistory.instance.getAlbum = function (e, t) {
        var n = {albumId: e, onsuccess: t, onfailure: t};
        i.getByAlbumId(n)
      }, lib.action.NewPlayHistory.instance.history2string = function (e) {
        var t = {};
        e = e || function () {
          }, t.onsuccess = function (t) {
          for (var n = t.length, i = [], a = 0; n > a; a++)i.push([t[a].videoName, t[a].videoPlayUrl, t[a].videoPlayTime, t[a].videoId].join("*"));
          e(i.join("|"))
        }, t.onfailure = e, i.getPlayhistory(t)
      }, lib.action.NewPlayHistory.instance.getByTvId = function (e, t) {
        var n = {};
        n.tvId = e, n.onsuccess = t, n.onfailure = t, i.getByTvId(n)
      }
    }
  }), t.add("CompatiblePlayHistory")
});
define("../../units/qidan", ["../components/units/pageJob", "../action/qidan", "../components/action/checkDoms"], function (e) {
  var t = e("../components/units/pageJob"), n = e("../action/qidan"), i = e("../components/action/checkDoms"), a = "qidan";
  t.create(a, {
    getDependentDoms: function () {
      var e = Q.$("*[data-widget-qidan=qidan]"), t = {
        widget: e,
        body: e ? e.down("*[data-qidan-elem=body]") : null,
        title: e ? e.down("*[data-qidan-elem=title]") : null,
        icon: e ? e.down("*[data-qidan-elem=icon]") : null,
        num: e ? e.down("*[data-qidan-elem=num]") : null,
        qidanCon: e ? e.down("*[data-qidan-elem=qidancon]") : null,
        infoLabel: e ? e.down("*[data-qidan-elem=infolabel]") : null,
        infoLabelText: e ? e.down("*[data-qidan-elem=infolabeltext]") : null,
        importLabelText: e ? e.down("*[data-qidan-elem=importlabeltext]") : null,
        btnImport: e ? e.down("*[data-qidan-elem=btnimport]") : null,
        noTipBtn: e ? e.down("*[data-qidan-elem=notipbtn]") : null,
        noQidanCon: e ? e.down("*[data-qidan-elem=noqidancon]") : null,
        closeInfoBtn: e ? e.down("*[data-qidan-elem=closebtn]") : null
      };
      return t
    }, check: function (e) {
      var t = !0;
      return i(e), t
    }, init: function () {
      var e = new n({doms: this.getDependentDoms()});
      e.init()
    }
  }), t.add(a)
});
define("../../action/qidan", ["../components/action/widget", "../model/qidanModel", "../view/qidanView", "../kit/qidan", "../model/parseItem", "../kit/userInfo", "../kit/period", "../kit/loadDivPingback"], function (e, t, n) {
  var i = e("../components/action/widget"), a = e("../model/qidanModel"), r = e("../view/qidanView"), o = e("../kit/qidan"), s = e("../model/parseItem"), l = e("../kit/userInfo"), d = e("../kit/period").create(), c = e("../kit/loadDivPingback");
  n.exports = Q.Class("Qidan", {
    extend: i, construct: function (e) {
      e = e || {}, e.model = e.model || new a({selfItem: s.updateRecordInfoParse}), e.view = e.view || new r(e), this.callsuper(e)
    }, properties: {
      events: {
        noTipBtnClick: function (e) {
          Q.event.customEvent.fire({type: "noUpdateRecords", e: e.data.e})
        }, onDisplay: function () {
          function e() {
            var e = 0 !== t._model.get().data.length ? "updatenotifydivshowhasdata" : "updatenotifydivshownodata";
            t._view.sendPingbackV1({act: e})
          }

          var t = this;
          o.needRefresh() ? (d.begin(), o.refresh(function () {
            e(), d.end(function (e) {
              c.send("qidan", e)
            })
          }, function () {
            e()
          })) : e(), Q.event.customEvent.fire({type: "updateRecordsShow", data: {}})
        }, btnImportClick: function () {
          o.loginImport()
        }, btnItemDelClick: function (e) {
          var t = e.data, n = parseInt(t.dsid, 10);
          delete t.dsid, 1 == n ? o.delVideo(1, e.data) : 2 == n ? o.delVideo(2, e.data) : 0 === n && o.delVideo(3, e.data)
        }
      }
    }, methods: {
      init: function () {
        function e() {
          var e = o.getSwKeysCount();
          return e ? !0 : !1
        }

        function t(e) {
          var t = n._view._doms.widget.down("*[data-qidan-elem=more]");
          t && (e ? t.show() : t.hide())
        }

        var n = this;
        Q.event.customEvent.on("navOneShow", function () {
          n._view.hide()
        }), Q.event.customEvent.on("suggestShow", function () {
          n._view.hide()
        }), Q.event.customEvent.on("hideHeaderBoxFromVipHeader", function () {
          n._view.hide()
        }), Q.event.customEvent.on("playHistoryShow", function () {
          n._view.hide()
        }), Q.event.customEvent.on("showUserCenterBox", function () {
          n._view.hide()
        }), Q.event.customEvent.on("pcLoginBoxShow", function () {
          n._view.hide()
        }), Q.event.customEvent.on("login", function () {
          t(!0), e() ? n._view.showTip(!0, !0) : n._view.showTip(!0, !1), o.reset(), o.refresh()
        }), Q.event.customEvent.on("logout", function () {
          t(!1), n._view.showTip(!1, !0), o.reset(), o.refresh()
        }), l.isLogin() ? (e() ? n._view.showTip(!0, !0) : n._view.showTip(!0, !1), t(!0)) : (n._view.showTip(!1, !0), t(!1)), this.syncSet(o.get()), o.on("qidanDataChange", function (e) {
          n.syncSet(e.data.data), n._view.setIcon(o.getDataCount())
        })
      }, syncSet: function (e) {
        var t = this._model.set(e);
        this._view.update(t)
      }
    }
  })
});
define("../../model/qidanModel", ["../components/model/model", "../kit/userInfo"], function (e, t, n) {
  var i = e("../components/model/model"), a = e("../kit/userInfo");
  n.exports = Q.Class("QidanModel", {
    extend: i,
    construct: function (e) {
      this.callsuper(e)
    },
    properties: {urlParams: "type=phtr2divstat20121204&flashvars=videoIsFromQidan%3Dupdateitemviewclk&act=updateitemviewclk&jsuid=" + Q.cookie.get("QC006") + "&flshuid=" + Q.cookie.get("QC005") + "&ppuid=" + a.getUid()},
    methods: {
      init: function (e) {
        this.callsuper("init", e)
      }, set: function (e) {
        var t = e, n = [];
        if (e.data && e.data.length)for (var i = 0; i < e.data.length; i++)n.push(this._format(e.data[i]));
        return t.data = n, this._data = t, this._data
      }, _format: function (e) {
        return this._formatName(e), this._formatUrl(e), this._formatUpdateTitle(e), this.selfItem && "function" == typeof this.selfItem && this.selfItem(e), e
      }, _formatName: function (e) {
        e.title = 2 == e.dsid ? e.videoName : 6 == e.channelId || 14 == e.channelId ? e.sourceName : 10 == e.channelId ? e.reminder ? e.reminder.tvName : e.albumName : e.albumName
      }, _appendParam: function (e, t) {
        var n = Q.url.parse(e), i = n.protocol + "://" + n.host + n.path, a = e.replace(i, ""), r = "";
        return 0 === a.indexOf("?") && (r = a.substr(1)), r && r.length && (t = r + "&" + t), i + "?" + t
      }, _formatUrl: function (e) {
        var t = null;
        0 === e.dsid ? (1 == e.channelId ? t = e.videoUrl : 2 == e.channelId || 6 == e.channelId || 14 == e.channelId || 10 == e.channelId ? (t = e.reminder.vurl, t || (t = e.videoUrl)) : (t = e.videoUrl, t || (t = e.reminder.vurl)), e.updateCurrentUrl = t ? this._appendParam(t, this.urlParams) : "javascript:void(0)", e.updateVideoUrl = e.videoUrl ? this._appendParam(e.videoUrl, this.urlParams) : e.updateCurrentUrl, 10 == e.channelId && (e.updateVideoUrl = e.updateCurrentUrl)) : 1 == e.dsid ? (1 == e.channelId ? t = e.videoUrl : 2 == e.channelId || 6 == e.channelId || 14 == e.channelId || 10 == e.channelId ? e.reminder ? (t = e.reminder.vurl, t || (t = e.videoUrl)) : t = e.videoUrl : e.reminder ? (t = e.videoUrl, t || (t = e.reminder.vurl)) : t = e.videoUrl, e.updateCurrentUrl = t ? this._appendParam(t, this.urlParams) : "javascript:void(0)", e.updateVideoUrl = e.videoUrl ? this._appendParam(e.videoUrl, this.urlParams) : e.updateCurrentUrl, 10 == e.channelId && (e.updateVideoUrl = e.updateCurrentUrl)) : 2 == e.dsid && (e.updateVideoUrl = this._appendParam(e.videoUrl, this.urlParams), e.updateCurrentUrl = e.updateVideoUrl)
      }, _formatUpdateTitle: function (e) {
        if (0 === e.dsid)if (1 == e.channelId)e.updateTitle = "付费电影转免费"; else if (2 == e.channelId || 3 == e.channelId || 4 == e.channelId)e.updateTitle = "看到" + (e.videoOrder < e.reminder.mpd ? e.videoOrder : e.reminder.mpd) + "集/更新至" + e.reminder.mpd + "集"; else if (6 == e.channelId || 14 == e.channelId) {
          var t = e.reminder.mpd + "";
          e.updateTitle = 8 == t.length ? "更新至" + t.substring(0, 4) + "-" + t.substring(4, 6) + "-" + t.substring(6, 8) + "期" : "第" + t + "期"
        } else e.updateTitle = 10 == e.channelId ? 1 == e.reminder.cid ? "电影正片新上映" : "" : 7 == e.channelId ? "娱乐事件新进展" : ""; else if (1 == e.dsid)if (1 == e.channelId)e.updateTitle = "订阅内容更新"; else if (2 == e.channelId || 3 == e.channelId || 4 == e.channelId)e.updateTitle = e.reminder ? null === e.videoPlayTime ? "更新至" + e.reminder.mpd + "集" : 0 === e.videoPlayTime ? "已看完" : "看到" + (e.videoOrder < e.reminder.mpd ? e.videoOrder : e.reminder.mpd) + "集/更新至" + e.reminder.mpd + "集" : 0 === e.videoPlayTime ? "已看完" : "已收藏"; else if (6 == e.channelId || 14 == e.channelId)if (e.reminder)if (0 === e.videoPlayTime)e.updateTitle = "已看完"; else {
          var n = e.reminder.mpd + "";
          e.updateTitle = 8 == n.length ? "更新至" + n.substring(0, 4) + "-" + n.substring(4, 6) + "-" + n.substring(6, 8) + "期" : "第" + n + "期"
        } else e.updateTitle = 0 === e.videoPlayTime ? "已看完" : "已收藏"; else 10 == e.channelId ? e.reminder ? 1 == e.reminder.cid ? e.updateTitle = "订阅内容更新" : 2 == e.reminder.cid && (e.updateTitle = null === e.videoPlayTime ? "更新至" + e.reminder.mpd + "集" : 0 === e.videoPlayTime ? "已看完" : "看到" + (e.videoOrder < e.reminder.mpd ? e.videoOrder : e.reminder.mpd) + "集/更新至" + e.reminder.mpd + "集") : e.updateTitle = 0 === e.videoPlayTime ? "已看完" : "已收藏" : e.updateTitle = 7 == e.channelId ? "娱乐事件新进展" : "已收藏"; else if (2 == e.dsid) {
          var i = 0;
          e.videoPlayTime && (i = parseInt(e.videoPlayTime, 10));
          var a = parseInt(e.videoDuration, 10), r = 0, o = 0, s = 0;
          if (null === e.videoPlayTime)r = parseInt(a / 3600, 10), o = parseInt(a % 3600 / 60, 10), s = a % 60, e.updateTitle = "片长", r > 0 && (e.updateTitle += Q.number.pad(r, 2) + ":"), e.updateTitle += Q.number.pad(o, 2) + ":" + Q.number.pad(s, 2); else if (0 === i || i >= .7 * a)e.updateTitle = "已看完"; else {
            -1 == i && (i = 0);
            var l = a - i;
            r = parseInt(l / 3600, 10), o = parseInt(l % 3600 / 60, 10), s = l % 60, e.updateTitle = "剩余", r > 0 && (e.updateTitle += Q.number.pad(r, 2) + ":"), e.updateTitle += Q.number.pad(o, 2) + ":" + Q.number.pad(s, 2)
          }
        }
      }
    }
  })
});
define("../../view/qidanView", ["../components/view/widgetView", "../action/underframe", "../kit/getWebEventID", "../config/siteDomain", "../kit/userInfo", "../kit/qidan"], function (e, t, i) {
  var n = e("../components/view/widgetView"), a = e("../action/underframe"), r = e("../kit/getWebEventID"), o = e("../config/siteDomain"), s = e("../kit/userInfo"), l = e("../kit/qidan"), d = 500, c = 100;
  i.exports = Q.Class("QidanView", {
    extend: n,
    construct: function (e) {
      this.callsuper(e)
    },
    properties: {liTpl: ['<li index="{{index}}" tvid={{tvId}} channelId={{channelId}} albumId={{albumId}} sourceId={{sourceId}} dsid={{dsid}} style="position:relative;float:left;{{liWidth}}">', '<div class="rectxt">', '<span class="icoplay icojl-gx"></span>', '<a curhref="{{updateVideoUrl}}" j-delegate="pingback_webevent" {{title}} style="cursor:pointer;width:{{titleWidth}}px;">{{shortTitle}}</a>', '<span class="playing" style="cursor:pointer;width:{{updateTitleWidth}}px;float:{{spanFloat}};"><a href="{{updateCurrentUrl}}" j-delegate="pingback_webevent" style="width:100%; float:right;">{{updateTitle}}</a></span>', '<span j-delegate="j-delItem" class="icojl-del" style="display:block;right:{{delBtnRight}};"></span>', "</div>", "</li>"].join("")},
    methods: {
      init: function (e) {
        this.callsuper("init", e), this._initIcon(), this._bindEvent();
        var t = this._doms.widget.down("*[data-qidan-elem=underframe]");
        (Q.browser.IE6 || Q.browser.IE7) && t && t.hide()
      }, _unBindItemHandler: function (e) {
        var t = e.down("li");
        if (t && !Q.browser.iPad) {
          var i = this, n = "mouseenter", a = "mouseleave";
          Q.browser.CHROME && (n = "mouseover", a = "mouseout"), t.forEach(function (e) {
            e = Q.$(e);
            var t = i._handerObj[e.attr("index")];
            e.un(n, t.mouseEnter), e.un(a, t.mouseLeave)
          })
        }
      }, _bindItemHandler: function (e) {
        var t = e.down("li");
        if (t && !Q.browser.iPad) {
          var i = this;
          this._handerObj || (this._handerObj = {});
          var n = null, a = null, r = "mouseenter", o = "mouseleave";
          Q.browser.CHROME && (r = "mouseover", o = "mouseout"), t.forEach(function (e) {
            e = Q.$(e), n = i._doInfoConMouseEnter.bind(i), a = i._doInfoConMouseLeave.bind(i), i._handerObj[e.attr("index")] = {
              mouseEnter: n,
              mouseLeave: a
            }, e.on(r, n), e.on(o, a)
          })
        }
      }, _update: function (e) {
        var t = this, i = this._doms.qidanCon, n = i.down("li"), a = 0, r = "mouseenter", o = "mouseleave";
        if (Q.browser.CHROME && (r = "mouseover", o = "mouseout"), n) {
          var s = null;
          a = 0, n.forEach(function (e) {
            e = Q.$(e), s = t._handerObj[e.attr("index")], Q.browser.iPad || (e.un(r, s.mouseEnter), e.un(o, s.mouseLeave)), a++
          })
        }
        var l = e.data, d = [], c = this._doms.noQidanCon, h = !1;
        if (i.css("overflowX", "hidden"), i.css("overflowY", "hidden"), i.css("position", "relative"), l.length ? l.length <= 6 ? i.css("height", "200px") : l.length > 10 ? (i.css("height", "329px"), i.css("overflowY", "auto"), h = !0) : (i.css("height", "auto"), Q.browser.IE6 && i.css("height", 33 * l.length - 1 + "px")) : i.css("height", "0px"), l.length) {
          for (a = 0; a < l.length; a++)l[a].index = a, this._formatView(l[a], h), d.push(Q.plugins.Mustache.render(this.liTpl, l[a]));
          i.html(d.join("")), c.hide(), i.css("visibility", "visible"), i.show(), n = i.down("li"), this._handerObj = {}, a = 0;
          var m = null, u = null;
          n.forEach(function (e) {
            e = Q.$(e), m = t._doInfoConMouseEnter.bind(t), u = t._doInfoConMouseLeave.bind(t), t._handerObj[e.attr("index")] = {
              mouseEnter: m,
              mouseLeave: u
            }, Q.browser.iPad || (e.on(r, m), e.on(o, u)), a++
          }), n.length >= 6 && Q.$(n[n.length - 1]).addClass("last")
        } else i.html(""), i.css("visibility", "hidden"), i.css("display", "none"), c.show();
        if (this._underFrame)try {
          this._underFrame.show()
        } catch (p) {
        }
      }, update: function (e) {
        var t = this._doms, i = t.qidanCon;
        t.updateCon || (t.updateCon = i.down("*[data-qidan-elem=updatecon]"));
        var n = t.updateCon;
        if (!n)return this._update(e), void 0;
        t.updateTitle || (t.updateTitle = i.down("*[data-qidan-elem=updatetitle]"));
        var a = t.updateTitle;
        t.watchLaterCon || (t.watchLaterCon = i.down("*[data-qidan-elem=watchlatercon]"));
        var r = t.watchLaterCon;
        t.watchLaterTitle || (t.watchLaterTitle = i.down("*[data-qidan-elem=watchlatertitle]"));
        var o = t.watchLaterTitle, s = t.noQidanCon;
        this._unBindItemHandler(n), this._unBindItemHandler(r);
        var d = e.data, c = [], h = [];
        if (i.css("position", "relative"), i.css("overflowX", "hidden"), i.css("overflowY", "hidden"), d.length) {
          s.hide();
          for (var m = 0, u = 0; u < d.length; u++) {
            d[u].index = u, this._formatView(d[u], d.length > 10);
            var p = Q.plugins.Mustache.render(this.liTpl, d[u]);
            2 == d[u].dsid ? (h.push(p), m++) : c.push(p)
          }
          r.html(h.join("")), n.html(c.join("")), this._bindItemHandler(n), this._bindItemHandler(r);
          var f = d.length - m, U = 0;
          if (f > 0 ? (a.show(), a.html("更新提醒 （" + f + "/" + (l.getDataCount() - l.getWatchLaterCount()) + "）"), n.show(), n.css("height", 33 * f + "px"), U += 33) : (a.hide(), n.hide()), m > 0 ? (o.show(), o.html("待看列表 （" + m + "/" + l.getWatchLaterCount() + "）"), r.show(), r.css("height", 33 * m + "px"), U += 33) : (o.hide(), r.hide()), d.length <= 6 ? i.css("height", U + 200 + "px") : d.length > 10 ? (i.css("height", U + 330 + "px"), i.css("overflowY", "auto")) : i.css("height", U + 33 * d.length + "px"), d.length > 6) {
            var V = n;
            m > 0 && (V = r);
            var g = V.down("li");
            Q.$(g[g.length - 1]).addClass("last")
          }
        } else a.hide(), n.hide(), o.hide(), r.hide(), s.show(), i.css("height", "200px");
        if (this._underFrame)try {
          this._underFrame.show()
        } catch (y) {
        }
      }, _escapeDBCString: function (e) {
        for (var t = "", i = 0; i < e.length; i++) {
          var n = e.charCodeAt(i);
          t += 32 != n ? e.charAt(i) : String.fromCharCode(12288)
        }
        return t
      }, _getStrWidth: function (e) {
        var t = 8, i = 12, n = Q.string.getLength(e) - e.length, a = Q.string.getLength(e) - 2 * n;
        return n * i + a * t
      }, _getShortTitle: function (e, t, i) {
        var n = 0, a = Q.string.getLength(e);
        a > i && (a = i);
        for (var r = 0; a > r && !(this._getStrWidth(Q.string.truncate(e, r + 1)) > t); r++)n = r + 1;
        return Q.string.truncate(e, n)
      }, _formatView: function (e, t) {
        e.title = this._escapeDBCString(e.title);
        var i = 223, n = 17, a = 2, r = 18;
        e.updateTitleWidth = this._getStrWidth(e.updateTitle), e.titleWidth = t ? i - n - e.updateTitleWidth : i - e.updateTitleWidth;
        var o = e.titleWidth - a;
        e.shortTitle = this._getShortTitle(e.title, o, r), e.title = Q.string.getLength(e.shortTitle) < Q.string.getLength(e.title) ? "title=" + e.title : "", Q.browser.IE6 || Q.browser.IE7 ? (e.liWidth = t ? "width:256px;" : "width:273px;", t ? Q.browser.IE6 && (e.spanFloat = "right", e.delBtnRight = "0px") : Q.browser.IE6 && (e.delBtnRight = "0px")) : (e.spanFloat = "right", e.delBtnRight = "5px")
      }, _doInfoConMouseEnter: function (e) {
        e = Q.event.get(e), Q.$(e.currentTarget || e.target).addClass("selected")
      }, _doInfoConMouseLeave: function (e) {
        e = Q.event.get(e), Q.$(e.currentTarget || e.target).removeClass("selected")
      }, showTip: function (e, t) {
        var i = this._doms, n = i.infoLabelText, a = i.importLabelText, r = i.infoLabel.children();
        if (!t) {
          for (var o = 0; o < r.length; o++) {
            var s = Q.$(r[o]);
            s.css("visibility", "hidden"), s.css("display", "block"), s.css("display", "none")
          }
          return i.infoLabel.css("display", "none"), void 0
        }
        i.infoLabel.show();
        for (var l = 0; l < r.length; l++)Q.$(r[l]).css("visibility", "visible"), Q.$(r[l]).show();
        e ? n.css("display", "none") : a.css("display", "none")
      }, _delItemEvt: function (e) {
        e = e || window.event;
        var t = Q.$(e.target).parent("li"), i = t.attr("tvid"), n = t.attr("albumId"), a = t.attr("channelId"), r = t.attr("sourceId"), o = t.attr("dsid");
        this._sendPingbackV2({tvId: i, channelId: a}), this._ctrl.notice({
          type: "btnItemDelClick",
          data: {tvId: i, channelId: a, sourceId: r, albumId: n, dsid: o}
        })
      }, sendPingbackV1: function (e) {
        r(function (t) {
          Q.log.server({
            type: "phtr2divstat20121204",
            act: e.act,
            jsuid: Q.cookie.get("QC006"),
            flshuid: Q.cookie.get("QC005"),
            weid: t,
            pru: Q.cookie.get("P00PRU") || "",
            ppuid: s.getUid()
          }, "http://msg.71.am/tmpstats.gif")
        })
      }, _sendPingbackV2: function (e) {
        r(function (t) {
          for (var i = /ipad/.test(navigator.userAgent.toLowerCase()) ? 21 : Q.browser.android || Q.browser.iPhone ? 31 : 11, n = 11 == i ? Q.cookie.get("QC005") : Q.cookie.get("QC006"), a = "", r = 0; 32 > r; r++)a += Math.floor(10 * Math.random());
          var o = parseInt(0x45c1e2ff69ea100 * Math.random(), 10);
          Q.log.server({
            c1: e.channelId,
            s1: window.location.href,
            r: e.tvId,
            e: a,
            se: t,
            u: n,
            pu: s.getUid(),
            rn: o,
            a: 26,
            pf: 1,
            p: 10,
            p1: 101,
            p2: 1014,
            t: 5
          }, "http://msg.71.am/b")
        })
      }, _bindEvent: function () {
        var e = this, t = this._doms, i = t.widget, n = Q.browser.iPad ? "click" : "mouseover";
        i.on(n, function () {
          e._clearHideTimer(), e._createShowTimer()
        }), Q.browser.iPad ? (Q.$("body").on("touchstart", function () {
          e._clearShowTimer(), e._createHideTimer()
        }), i.on("touchstart", function (e) {
          Q.event.get(e).stopPropagation()
        })) : i.on("mouseleave", function (t) {
          Q.event.get(t).preventDefault(), e._clearShowTimer(), e._createHideTimer()
        }), t.body.on(n, function () {
          e._clearHideTimer(), e._createShowTimer()
        }), t.closeInfoBtn.on("click", function (t) {
          Q.event.get(t).stop(), e.showTip(!1, !1)
        }), t.btnImport.on("click", function (t) {
          Q.event.get(t).stop(), e.showTip(!1, !1), e._ctrl.notice({type: "btnImportClick", data: {e: Q.event.get(t)}})
        });
        var a = t.noTipBtn;
        a.on("click", function (t) {
          Q.event.get(t).stop(), e._hideIcon(), e._ctrl.notice({
            type: "noTipBtnClick",
            data: {e: Q.event.get(t)}
          }), e.sendPingbackV1({act: "nonotifyclk"}), e._ctrl.notice({type: "noTip", data: {e: Q.event.get(t)}})
        }), t.qidanCon.delegate("pingback_webevent", function (e) {
          Q.event.get(e).stop(), r(function (t) {
            e = e || window.event;
            var i = Q.$(e.target || e.srcElement);
            location.href = i.attr("curhref") + "&weid=" + t
          })
        }), t.qidanCon.delegate("j-delItem", this._delItemEvt.bind(this))
      }, _initIcon: function () {
        var e = this._doms;
        e.num.html(0), e.icon.hide(), e.noTipBtn.hide()
      }, setIcon: function (e) {
        void 0 !== this._num && this._num != e && Q.cookie.remove("QC028", {
          duration: 0,
          path: "/",
          domain: o.SITE_DOMAIN
        }), this._num = e;
        var t = this._doms;
        if (!Q.cookie.get("QC028") && e > 0) {
          var i = e > 99 ? "99+" : e;
          t.num.html(i), t.icon.show(), t.noTipBtn.show()
        } else t.num.html(0), t.icon.hide(), t.noTipBtn.hide()
      }, _hideIcon: function () {
        var e = this._doms;
        e.num.html(0), e.icon.hide(), e.noTipBtn.hide(), Q.cookie.set("QC028", "true", {
          duration: 0,
          path: "/",
          domain: o.SITE_DOMAIN
        })
      }, _show: function () {
        var e = this, t = this._doms, i = t.widget;
        this._className || (this._className = i.attr("data-qidan-cls"), this._hoverClassName = this._className + "-hover", this._hoverClassName1 = this._className + "Hover"), i.hasClass(this._hoverClassName) && i.hasClass(this._hoverClassName1) || (i.addClass(this._hoverClassName), i.addClass(this._hoverClassName1), e._ctrl.notice({type: "onDisplay"}));
        var n = t.body;
        if (!this._underFrame) {
          var r = t.widget.down("*[data-qidan-elem=underframe]"), o = parseInt(n.css("paddingTop"), 10);
          Q.browser.IE6 || Q.browser.IE7 ? (r && r.hide(), r = null) : r && r.show(), this._underFrame = new a({
            elem: n,
            radius: 5,
            target: r,
            distTop: o,
            distHeight: -1 * o
          })
        }
        this._underFrame.show()
      }, hide: function () {
        this._clearShowTimer(), this._clearHideTimer();
        var e = this._doms.widget;
        (e.hasClass(this._hoverClassName) || e.hasClass(this._hoverClassName1)) && (e.removeClass(this._hoverClassName), e.removeClass(this._hoverClassName1)), this._underFrame && this._underFrame.hide()
      }, _createHideTimer: function () {
        if (!this._hideTimer) {
          var e = this;
          this._hideTimer = setTimeout(function () {
            e.hide()
          }, c)
        }
      }, _clearHideTimer: function () {
        this._hideTimer && (clearTimeout(this._hideTimer), this._hideTimer = null)
      }, _createShowTimer: function () {
        if (!this._showTimer) {
          var e = this;
          this._showTimer = setTimeout(function () {
            e._show()
          }, d)
        }
      }, _clearShowTimer: function () {
        this._showTimer && (clearTimeout(this._showTimer), this._showTimer = null)
      }
    }
  })
});
define("../../kit/qidan", ["../interfaces/qidanInterface", "../model/subscribeModel", "../config/siteDomain", "./eventPlugin", "../kit/qiyiPlayer", "./userInfo"], function (e, t, i) {
  var n = e("../interfaces/qidanInterface"), a = e("../model/subscribeModel"), r = e("../config/siteDomain"), o = e("./eventPlugin"), s = e("../kit/qiyiPlayer"), l = e("./userInfo"), d = Q.Class("Qidan", {
    construct: function () {
      this._data = {data: [], keys: {}, count: 0, initSwKeys: {}, swKeys: {}}
    }, plugins: [new o], methods: {
      init: function () {
        this._fetch(Q.fn.emptyMethod, Q.fn.emptyMethod, !1), this.player = s.getPlayer("video")
      }, _getKeys: function (e) {
        for (var t = {}, i = 0; i < e.length; i++) {
          var n = e[i].subType + "" + (e[i].subkey || e[i].subKey);
          t[n] = n
        }
        return t
      }, _getQidanKey: function (e) {
        var t = "";
        return t = 1 == e.dsid ? this.getKey(1, e) : 2 == e.dsid ? this.getKey(2, e) : this.getKey(3, e)
      }, getKey2: function (e) {
        return this.parsedParam(e)
      }, getKey: function (e, t) {
        var i = this.parsedParam(t);
        return i = i.subType + "" + i.subKey
      }, _getAlbumIdKey: function (e) {
        var t = "aid";
        return t += e.hasOwnProperty("albumId") ? e.albumId : "0"
      }, _getSourceIdKey: function (e) {
        var t = "sid";
        return t += e.hasOwnProperty("sourceId") ? e.sourceId : "0"
      }, _getTvIdKey: function (e) {
        var t = "tid";
        return t += e.hasOwnProperty("tvId") ? e.tvId : "0"
      }, _getChannelIdKey: function (e) {
        var t = "cid";
        return t += e.hasOwnProperty("channelId") ? e.channelId : "0"
      }, _fetch: function (e, t, i) {
        this._nextFetchTimer && (clearTimeout(this._nextFetchTimer), this._nextFetchTimer = null), navigator.userAgent.toLowerCase();
        var a = new n, o = "loginGetQidan", s = l.isLogin();
        s || (o = "unLoginGetQidan");
        var d = this, c = Q.cookie.get("P00001"), h = {
          authcookie: c,
          containsUgc: 1,
          agent_type: Q.browser.iPad ? 10 : r.isPPS() ? 39 : 1,
          subTypes: "7",
          channelIds: 1
        };
        i ? h.number = !0 : this._everFetchDetail = !0, a[o].call(a, h, function (i) {
          if ("A00000" == i.code && i.data && i.data.data) {
            d._data.data = i.data.data, d._data.data || (d._data.data = []), d._data.keys = d._getKeys(d._data.data), d._data.count = i.data.qidan_cnt;
            for (var n = {}, a = "", r = 0; r < i.data.data.length; r++)a = 7 == i.data.data[r].subType ? d.getKey(2, i.data.data[r]) : d.getKey(1, i.data.data[r]), n[a] = a;
            d._data.swKeys = n, d._data.initSwKeys = Q.object.extend({}, n), e && e(i), d._notify(), d._nextFetchTimer = setTimeout(function () {
              d._everFetchDetail ? d._fetch() : d._fetch(Q.fn.emptyMethod, Q.fn.emptyMethod, !1)
            }, 18e5)
          } else {
            var o = "";
            "A00001" == i.code ? o = s ? "用户未登录!" : "cookie id 不存在!" : "A01011" == i.code && (o = "查询失败!"), Q.log.log(o), t && t(i)
          }
        })
      }, parsedParam: function (e) {
        var t = {subKey: e.subKey, subType: e.subType};
        return e.tvId > 0 ? (t.subKey = e.tvId, t.subType = "7") : e.collectionId > 0 ? (t.subKey = e.collectionId, t.subType = "9") : e.albumId > 0 ? (t.subKey = e.albumId, t.subType = "1") : e.sourceId > 0 && (t.subKey = e.sourceId, t.subType = "2"), t
      }, _del: function (e, t, i, n) {
        var r = this.getKey(e, t), o = this;
        Q.object.extend(t, {cb: "cb_" + Math.floor(2147483648 * Math.random()).toString(36)});
        var s = l.isLogin(), d = this.parsedParam(t), c = new a;
        c.unsubscribe(d, function (e) {
          if ("A00000" == e.remoteData.code) {
            for (var t = o._data.data, a = 0; a < t.length; a++)if (o._getQidanKey(t[a]) == r) {
              t.splice(a, 1), o._data.count--;
              break
            }
            o._data.data = t, o._data.keys = o._getKeys(t), delete o._data.initSwKeys[r], delete o._data.swKeys[r], i && i(e)
          } else {
            var l = "";
            "A00001" == e.code ? l = s ? "用户未登录!" : "cookie uid 不存在!" : "A01011" == e.code ? l = "请求删除失败!" : "A01001" == e.code ? l = "缺少tvId!" : "A01002" == e.code && (l = "tvId格式不对!"), Q.log.log(l), n && n(e)
          }
        })
      }, _add: function (e, t, i, n) {
        var r = {cb: "cb_" + Math.floor(2147483648 * Math.random()).toString(36)};
        Q.object.extend(r, t);
        var o = this.parsedParam(t), s = new a;
        s.subscribe(o, function (e) {
          "A00000" == e.remoteData.code ? i && i(e) : n && n(e)
        })
      }, _clear: function (e, t) {
        var i = new n, a = "loginAllDel", r = l.isLogin();
        r || (a = "unLoginAllDel");
        var o = this;
        i[a].call(i, {}, function (i) {
          if ("A00000" == i.code)o._data.data = [], o._data.keys = {}, e && e(i); else {
            var n = "";
            "A00001" == i.code ? n = r ? "用户未登录!" : "cookie uid 不存在!" : "A01011" == i.code && (n = "请求删除失败!"), Q.log.log(n), t && t(i)
          }
        })
      }, _notify: function () {
        this.fire({type: "qidanDataChange", data: {data: this.get()}})
      }, _getPropertyCount: function (e) {
        var t, i = 0;
        for (t in e)e.hasOwnProperty(t) && i++;
        return i
      }, set: function (e) {
        this._data = e
      }, get: function () {
        return this._data
      }, reset: function () {
        this.set({data: [], keys: {}, count: 0, swKeys: {}, initSwKeys: {}}), this._notify()
      }, getKeysCount: function () {
        return this._getPropertyCount(this._data.keys)
      }, getSwKeysCount: function () {
        return this._getPropertyCount(this._data.swKeys)
      }, refresh: function (e, t) {
        this._fetch(e, t)
      }, needRefresh: function () {
        if (!this._everFetchDetail)return !0;
        var e = this.get(), t = e.keys, i = e.data;
        if (this.getKeysCount() != i.length || this.getSwKeysCount() != this._getPropertyCount(this._data.initSwKeys))return !0;
        for (var n = 0; n < i.length; n++)if (void 0 === t[this._getQidanKey(i[n])])return !0;
        for (var a in this._data.initSwKeys)if (void 0 === this._data.swKeys[a])return !0;
        return !1
      }, getDataCount: function () {
        var e = this._data.count;
        for (var t in this._data.initSwKeys)void 0 === this._data.swKeys[t] && e--;
        for (var i in this._data.swKeys)void 0 === this._data.initSwKeys[i] && e++;
        return e
      }, getWatchLaterCount: function () {
        var e, t = this._data.swKeys, i = 0;
        for (e in t)t.hasOwnProperty(e) && 0 === t[e].indexOf("watchlater") && i++;
        return i
      }, setVideoAdd: function (e, t) {
        var i = this.get(), n = i.keys, a = i.swKeys, r = this.getKey(e, t);
        n[r] = r, i.keys = n, a[r] = r, i.swKeys = a, this.set(i), this._notify()
      }, setVideoDel: function (e, t) {
        var i = this.get(), n = i.keys, a = i.swKeys, r = i.initSwKeys, o = this.getKey(e, t);
        n.hasOwnProperty(o) && (delete n[o], i.count--), i.keys = n, delete a[o], i.swKeys = a, delete r[o], i.initSwKeys = r, this.set(i), this._notify()
      }, delVideo: function (e, t, i, n) {
        var a = this;
        this._del(e, t, function (e) {
          i && i(e), a.getKeysCount() < 20 ? a.refresh() : a._notify()
        }, n)
      }, addVideo: function (e, t, i, n) {
        var a = this;
        this._add(e, t, function (n) {
          i && i(n), a.setVideoAdd(e, t)
        }, n)
      }, clear: function (e, t) {
        var i = this;
        this._clear(function (t) {
          e && e(t), i._notify()
        }, t)
      }, loginImport: function (e, t) {
        var i = this, a = Q.cookie.get("P00001"), o = {
          authcookie: a,
          ckuid: Q.cookie.get("QC005") || Q.cookie.get("QC006"),
          agent_type: Q.browser.iPad ? 10 : r.isPPS() ? 39 : 1,
          antiCsrf: Q.crypto.md5(a),
          cb: "cb_" + Math.floor(2147483648 * Math.random()).toString(36)
        };
        (new n).loginImport(o, function (n) {
          "A00000" == n.code ? (i.refresh(), e && e(n)) : t && t(n)
        })
      }
    }
  }), c = new d;
  c.init(), i.exports = c
});
define("../../interfaces/qidanInterface", ["../kit/remoteInterface"], function (e, t, i) {
  var n = e("../kit/remoteInterface"), a = "http://lwl.iqiyi.com", r = "http://nlwl.iqiyi.com", o = "http://i.iqiyi.com";
  i.exports = Q.Class("QidanInterface", {
    construct: function () {
      this._remoteInterface = new n({
        loginAdd: {url: a + "/apis/watchlater/saveqidanitem"},
        loginDel: {url: a + "/apis/watchlater/deleteqidanitem"},
        loginDelUpdate: {url: "http://l.rcd.iqiyi.com/apis/qiyirc/updaterc"},
        loginDelAllUpdate: {url: "http://l.rcd.iqiyi.com/apis/qiyirc/updateallrc"},
        loginAllDel: {url: a + "/apis/watchlater/deleteAll"},
        loginFetch: {url: a + "/apis/watchlater/getqidanlistforpage"},
        loginGetQidan: {url: "http://subscription.iqiyi.com/apis/watchlater/list.action"},
        unLoginAdd: {url: r + "/apis/uwl/saveqidanitem"},
        unLoginDel: {url: r + "/apis/uwl/deleteqidanitem"},
        unLoginDelUpdate: {url: "http://nl.rcd.iqiyi.com/apis/urc/updaterc"},
        unLoginDelAllUpdate: {url: "http://nl.rcd.iqiyi.com/apis/urc/updateallrc"},
        unLoginAllDel: {url: r + " /apis/uwl/deleteAll"},
        unLoginFetch: {url: r + "/apis/uwl/getqidanlistforpage"},
        unLoginGetQidan: {url: r + "/apis/urc/getqd"},
        loginImport: {url: a + "/apis/uwl/merge"},
        clearClosedAlbumUpdate: {url: o + "/apis/clearClosedAlbums.action"},
        fetchAlbumUpdate: {url: o + "/pages/myqidan/showAlbumUpdate.action"},
        clearWatchLater: {url: o + "/apis/clearWatchlater.action"},
        fetchWatchLater: {url: o + "/pages/myqidan/watchlater.action"},
        fetchHotQidan: {url: o + "/pages/myqidan/hotQidan.action"},
        fetchRecommend: {url: o + "/pages/myqidan/recommand.action"}
      })
    }, methods: {
      _request: function (e, t, i, n, a, r) {
        var o = {
          ifname: e, dataType: "jsonp", param: t, encodeFn: function (e) {
            return encodeURIComponent(e)
          }
        };
        n && (o.method = n), a && (o.encodeFn = a), r && (o.spliter = r), t.hasOwnProperty("timeout") && (o.timeout = t.timeout, delete t.timeout), this._remoteInterface.send(o, function (e) {
          i && i(e)
        })
      }, loginAdd: function (e, t) {
        this._request("loginAdd", e, t, "POST")
      }, loginDel: function (e, t) {
        this._request("loginDel", e, t, "POST")
      }, loginDelUpdate: function (e, t) {
        this._request("loginDelUpdate", e, t, "GET")
      }, loginDelAllUpdate: function (e, t) {
        this._request("loginDelAllUpdate", e, t, "GET")
      }, loginAllDel: function (e, t) {
        this._request("loginAllDel", e, t, "GET")
      }, loginFetch: function (e, t) {
        this._request("loginFetch", e, t, "GET")
      }, loginGetQidan: function (e, t) {
        this._request("loginGetQidan", e, t, "GET", null, "0")
      }, unLoginAdd: function (e, t) {
        this._request("unLoginAdd", e, t, "POST")
      }, unLoginDel: function (e, t) {
        this._request("unLoginDel", e, t, "POST")
      }, unLoginDelUpdate: function (e, t) {
        this._request("unLoginDelUpdate", e, t, "GET")
      }, unLoginDelAllUpdate: function (e, t) {
        this._request("unLoginDelAllUpdate", e, t, "GET")
      }, unLoginAllDel: function (e, t) {
        this._request("unLoginAllDel", e, t, "GET")
      }, unLoginFetch: function (e, t) {
        this._request("unLoginFetch", e, t, "GET")
      }, unLoginGetQidan: function (e, t) {
        this._request("unLoginGetQidan", e, t, "GET", null, "0")
      }, loginImport: function (e, t) {
        this._request("loginImport", e, t, "POST")
      }, clearClosedAlbumUpdate: function (e, t) {
        this._request("clearClosedAlbumUpdate", e, t, "GET")
      }, fetchAlbumUpdate: function (e, t) {
        this._request("fetchAlbumUpdate", e, t, "GET")
      }, clearWatchLater: function (e, t) {
        this._request("clearWatchLater", e, t, "GET")
      }, fetchWatchLater: function (e, t) {
        this._request("fetchWatchLater", e, t, "GET")
      }, fetchRecommend: function (e, t) {
        this._request("fetchRecommend", e, t, "GET")
      }, fetchHotQidan: function (e, t) {
        this._request("fetchHotQidan", e, t, "GET")
      }
    }
  })
});
define("../../model/subscribeModel", ["../components/model/baseModel", "../interfaces/subscribe", "../config/siteDomain"], function (e, t, i) {
  var n = e("../components/model/baseModel"), a = e("../interfaces/subscribe"), r = e("../config/siteDomain");
  i.exports = Q.Class("SubscribeModel", {
    extend: n, construct: function (e) {
      e = Q.object.extend({
        ri: a,
        remoteMethods: {
          check: "check",
          subscribe: "subscribe",
          unsubscribe: "unsubscribe",
          getSubscribe: "getSubscribe"
        }
      }, e), this.callsuper(e), this._remoteCheckParam = function () {
        return {subType: this._data.localData.subType, subKey: this._data.localData.subKey}
      }
    }, methods: {
      check: function (e, t) {
        var i = this;
        e = e || {}, e = Q.object.extend(this._remoteCheckParam(), e), this.callsuper("getRemoteData", e, "check", function (e) {
          var n = e.remoteData.code;
          i._data.localData.isSubscribed = "A00000" == n, i._data.localData.newSubscribe = !1, t && t(i._data)
        })
      }, subscribe: function (e, t) {
        var i = this;
        e = e || {}, e = Q.object.extend(this._remoteCheckParam(), e), this.callsuper("getRemoteData", e, "subscribe", function (e) {
          var n = e.remoteData.code;
          "A00000" == n || "A00001" == n || "A00002" == n ? (i._data.localData.isSubscribed = !0, i._data.localData.newSubscribe = !0) : (i._data.localData.isSubscribed = !1, i._data.localData.newSubscribe = !1), t && t(i._data)
        })
      }, unsubscribe: function (e, t) {
        var i = this;
        e = e || {}, e = Q.object.extend(this._remoteCheckParam(), e), this.callsuper("getRemoteData", e, "unsubscribe", function (e) {
          var n = e.remoteData.code;
          "A00000" == n && (i._data.localData.isSubscribed = !1, t && t(i._data))
        })
      }, getSubscribe: function (e, t) {
        var i = this;
        this.callsuper("getRemoteData", e, "getSubscribe", function (e) {
          var n = e.remoteData.code;
          "A00000" == n ? (i._data.hasNew = !0, t && t(i._data)) : Q.cookie.set("deleCloseSubscribe", "none", {
            path: "/",
            expires: 24,
            domain: r.SITE_DOMAIN
          })
        })
      }
    }
  })
});
define("../../components/model/baseModel", [], function (e, t, i) {
  function n() {
    return {}
  }

  i.exports = Q.Class("BaseModel", {
    ns: "Q.model", construct: function (e) {
      this._data = {
        remoteData: {},
        localData: {}
      }, this._remoteInterface = e.ri || null, this._remoteGetParam = e.remoteGetParam || n, this._remoteSetParam = e.remoteSetParam || n, this._remoteMethods = e.remoteMethods || {}
    }, methods: {
      init: Q.fn.emptyMethod, get: function () {
        return this._data
      }, asyncGet: function (e, t) {
        var i = this;
        e = e || {}, e = Q.object.extend(this._remoteGetParam(), e);
        var n = new this._remoteInterface;
        this._remoteMethods.get && n[this._remoteMethods.get](e, function (e) {
          Q.object.extend(i._data.remoteData, e), t && t(i.get())
        })
      }, set: function (e) {
        return Q.object.extend(this._data.localData, e.localData || e), this.get()
      }, asyncSet: function (e, t) {
        var i = this;
        Q.object.extend(this._data.localData, e.localData || e);
        var n = Q.object.extend(this._remoteSetParam(), e), a = new this._remoteInterface;
        this._remoteMethods.set && a[this._remoteMethods.set](n, function (e) {
          Q.object.extend(i._data.remoteData, e), t && t(i.get())
        })
      }, getRemoteData: function (e, t, i) {
        var n = this;
        e = e || {};
        var a = new this._remoteInterface;
        n._remoteMethods[t] && a[n._remoteMethods[t]](e, function (e) {
          Q.object.extend(n._data.remoteData, e), i && i(n._data)
        })
      }
    }
  })
});
define("../../interfaces/subscribe", ["../kit/remoteInterface", "../config/siteDomain", "./config"], function (e, t, n) {
  var i = e("../kit/remoteInterface"), a = e("../config/siteDomain"), r = e("./config");
  "http://i." + a.SITE_DOMAIN + "/dingyue/api/";
  var o = "http://i." + a.SITE_DOMAIN + "/dingyue/data/new/", s = "1";
  "pps.tv" == a.getDomain() && (s = "39"), n.exports = Q.Class("RIMark", {
    construct: function () {
      this._remoteInterface = new i({
        check: {url: r.interfaces.dyCheck},
        set: {url: r.interfaces.dySet},
        del: {url: r.interfaces.dyDel},
        getNew: {baseUrl: o},
        delAllLoginSubscribe: {url: "http://lwl." + a.SITE_DOMAIN + "/apis/watchlater/deleteAllSubscriptions.action"},
        updateSubscription: {url: r.interfaces.updateSubs}
      })
    }, methods: {
      check: function (e, t) {
        var n = {
          method: "POST", ifname: "check", param: e, dataType: "jsonp", encodeFn: function (e) {
            return encodeURIComponent(e)
          }
        };
        this._remoteInterface.send(n, function (e) {
          t && t(e)
        })
      }, subscribe: function (e, t) {
        e.agent_type = s;
        var n = {
          method: "POST", ifname: "set", antiCsrf: !0, param: e, dataType: "jsonp", encodeFn: function (e) {
            return encodeURIComponent(e)
          }
        };
        this._remoteInterface.send(n, function (e) {
          t && t(e)
        })
      }, unsubscribe: function (e, t) {
        e.agent_type = s;
        var n = {
          method: "POST", ifname: "del", antiCsrf: !0, param: e, dataType: "jsonp", encodeFn: function (e) {
            return encodeURIComponent(e)
          }
        };
        this._remoteInterface.send(n, function (e) {
          t && t(e)
        })
      }, getSubscribe: function (e, t) {
        var n = encodeURIComponent(e.userInfo);
        e.userInfo = n, e.agent_type = "1";
        var i = this._remoteInterface._remoteInterfaces.getNew.baseUrl;
        this._remoteInterface._remoteInterfaces.getNew.url = i + n + "/", window.lib = window.lib || {}, e = {varname: "lib._newSubscribe"}, this._remoteInterface.send({
          param: e,
          ifname: "getNew"
        }, function (e) {
          t && t(e)
        })
      }, delAllLoginSubscribe: function (e, t) {
        e.agent_type = s;
        var n = {
          method: "GET",
          ifname: "delAllLoginSubscribe",
          antiCsrf: !0,
          param: e,
          dataType: "jsonp",
          encodeFn: function (e) {
            return encodeURIComponent(e)
          }
        };
        this._remoteInterface.send(n, function (e) {
          t && t(e)
        })
      }, getUpdateInfo: function (e, t) {
        e = e || {}, this._remoteInterface.send({
          ifname: "updateSubscription",
          param: e,
          dataType: "jsonp"
        }, function (e) {
          t && t(e)
        })
      }
    }
  })
});
define("../../units/profileGuide", ["../components/units/pageJob", "../components/action/checkDoms", "../action/qipaLogin", "../kit/userInfo", "../kit/findParent", "../interfaces/profileNav", "../config/siteDomain"], function (e) {
  var t = e("../components/units/pageJob"), i = e("../components/action/checkDoms");
  e("../action/qipaLogin");
  var n = e("../kit/userInfo"), a = e("../kit/findParent"), r = e("../interfaces/profileNav"), o = new r, s = e("../config/siteDomain"), l = null, d = null, c = "profileGuide";
  t.create(c, {
    getDependentDoms: function () {
      return l = {profileGuideBox: Q.$("#nav-profile-guide"), wrapper: Q.$("#userboxparent")}
    }, check: function (e) {
      return i(e), !0
    }, init: function () {
      var e = this;
      if (n.isLogin()) {
        var t = !1;
        n.checkVipInfo(function () {
          n.getIsValidVip(function () {
            if (n.getIsValidVip()) {
              var i = n.getUid(), a = Q.cookie.get("P00PRU") || "";
              if (i == a) {
                var r = JSON.parse(Q.cookie.get("QC134"));
                r || (r = {}, r[i] = []);
                var l = r[i];
                if (l && !l.created) {
                  var d = l.length;
                  if (5 !== d) {
                    var c = (new Date).getTime();
                    if (0 === d)t = !0, r[i].push(c); else {
                      var h = l[d - 1];
                      c - h > 864e5 && (t = !0, r[i].push(c))
                    }
                    t && o.getProfile({fields: "prus", authcookie: Q.cookie.get("P00007")}, function (t) {
                      if ("A00000" === t.code && !t.data.purs) {
                        e._showProfileGuideFloater();
                        var i = JSON.stringify(r);
                        Q.cookie.set("QC134", i, {path: "/", expires: 31536e6, domain: s.SITE_DOMAIN})
                      }
                    })
                  }
                }
              }
            }
          })
        }), l.profileGuideBox.delegate("hideProfileGuide", function () {
          l.profileGuideBox.hide()
        }), l.profileGuideBox.delegate("createProfile", function () {
          for (var e = JSON.parse(Q.cookie.get("QC134")), t = n.getUid(), i = (new Date).getTime(), a = e[t], r = 0, o = 5 - a.length; o > r; r++)e[t].push(i);
          var d = JSON.stringify(e);
          Q.cookie.set("QC134", d, {path: "/", expires: 31536e6, domain: s.SITE_DOMAIN}), l.profileGuideBox.hide();
          var c = Q.$('[j-delegate="createProfile"]'), h = c.attr("data-profile-entry"), m = "http://www.iqiyi.com/u/profile?entry=" + h;
          window.open(m, "newwindow")
        }), l.profileGuideBox.on("mouseenter", function () {
          clearTimeout(d)
        }), l.profileGuideBox.on("mouseleave", function () {
          d && clearTimeout(d), d = setTimeout(function () {
            l.profileGuideBox.hide()
          }, 1e4)
        });
        var i = Q.$("body");
        i.on("click", function (e) {
          var t = a(Q.$(Q.event.get(e).target), "#nav-profile-guide");
          t || (l.profileGuideBox.hide(), d && clearTimeout(d))
        }), Q.$(window).on("scroll", function () {
          l.profileGuideBox.hide()
        })
      }
    }, _showProfileGuideFloater: function () {
      var e = Q.$('[data-widget-userbox="userbox"');
      e && e[0] ? l.wrapper.insertBefore(l.profileGuideBox, e) : l.wrapper.append(l.profileGuideBox), l.profileGuideBox.show(), d = setTimeout(function () {
        l.profileGuideBox.hide()
      }, 1e4)
    }
  }), t.add(c)
});
define("../../units/navMessageFloater", ["../components/units/pageJob", "../components/action/checkDoms", "../action/navMessageFloater"], function (e) {
  var t = e("../components/units/pageJob"), n = e("../components/action/checkDoms"), i = e("../action/navMessageFloater"), a = "navMessageFloater", r = null, o = !(Q.browser.IE6 || Q.browser.IE7 || Q.browser.IE8);
  t.create(a, {
    getDependentDoms: function () {
      var e = Q.$("#data-widget-navmessagefloater");
      return r = {
        widget: e,
        target: e,
        title: e.down("[data-navmessagefloater-elem=title]"),
        body: e.down("[data-navmessagefloater-elem=body]"),
        titles: e.down("[data-navmessagefloater-elem=tabtitle]"),
        bodies: e.down("[data-navmessagefloater-elem=tabbody]"),
        markReadBtn: e.down("[data-navmessagefloater-elem=markreadbtn]"),
        moreBtn: e.down("[data-navmessagefloater-elem=morebtn]"),
        nums: e.down("[data-navmessagefloater-elem=num]"),
        numTip: e.down("[data-navmessagefloater-elem=numtip]")
      }
    }, check: function (e) {
      return n(e), !0
    }, init: function () {
      var e = r.widget;
      e.attr("data-navmessagefloater-showdelay") || 500, e.attr("data-navmessagefloater-hidedelay") || 100;
      var t = e.attr("data-navmessagefloater-showcls") || "", n = {
        doms: r,
        targetHoverCls: t,
        showDelay: 0,
        hideDelay: 0,
        showEvt: "click",
        hideEvt: "click"
      };
      "click" != e.attr("data-navmessagefloater-tabchangeevt") && (r.body.attr("data-widget-hover", "true"), n.tabChangeDelay = e.attr("data-navmessagefloater-tabchangedelay") || 300);
      var a = new i(n);
      a.init();
      var s, l = function (e) {
        e = e >= 0 ? e : 1e3, s && clearTimeout(s), s = setTimeout(function () {
          a.syncSet({visible: !1})
        }, e)
      }, d = function () {
        s && clearTimeout(s)
      };
      r.body.on("mouseleave", l), r.body.on("mouseenter", d), r.title.on("mouseleave", l), r.title.on("mouseenter", d), Q.browser.iPad && Q.$("body").on("touchstart", function (e) {
        e = Q.event.get(e);
        var t = e.target;
        r.title.contains(t) || r.body.contains(t) || l(0)
      });
      var c = Q.event.customEvent;
      a.on("stateChange", function (e) {
        var t;
        e.data.visible ? (c.fire({
          type: "updateRecordsShow",
          data: {}
        }), t = r.title.down("a") || r.title, t && t.addClass("arrow-selected"), o ? r.body.css("opacity", "1") : r.body.css("filter", "alpha(opacity=100)"), d()) : (c.fire({
          type: "updateRecordsHide",
          data: {}
        }), t = r.title.down("a") || r.title, t && t.removeClass("arrow-selected"))
      }), a.on("beforeShow", function () {
        o ? r.body.css("opacity", "0") : r.body.css("filter", "alpha(opacity=0)")
      }), a.on("beforeHide", function () {
        o ? r.body.css("opacity", "0") : r.body.css("filter", "alpha(opacity=0)")
      });
      var h = ["navOneShow", "suggestShow", "hideHeaderBoxFromVipHeader", "playHistoryShow", "showUserCenterBox", "pcLoginBoxShow"];
      h.forEach(function (e) {
        c.on(e, function () {
          a.syncSet({visible: !1})
        })
      })
    }
  }), t.add(a)
});
define("../../action/navMessageFloater", ["./hoverShow", "./messageRouter", "../view/navMessageFloaterView", "../model/navMessageFloaterModel", "../kit/userInfo", "./tab", "./navMessageFloaterList", "../view/tabView"], function (e, t, i) {
  var n = e("./hoverShow"), a = e("./messageRouter"), r = e("../view/navMessageFloaterView"), o = e("../model/navMessageFloaterModel"), s = e("../kit/userInfo"), l = e("./tab"), d = e("./navMessageFloaterList"), c = e("../view/tabView"), h = Q.Class("NavMessageFloaterTabView", {
    extend: c,
    construct: function (e) {
      this.callsuper(e), this._option = e
    },
    methods: {
      _bindHoverEvent: function () {
        var e = this._doms.titles, t = this._option.delay;
        this._timer = null;
        var i = this;
        e.on("mouseenter", function (e) {
          i._timer && (clearTimeout(i._timer), i._timer = null);
          var n = Q.$(Q.event.get(e).target);
          i._timer = setTimeout(function () {
            i._timer = null;
            var e = n;
            i._changeTab(e)
          }, t)
        }), e.on("mouseleave", function () {
          i._timer && (clearTimeout(i._timer), i._timer = null)
        }), e.on("click", function (e) {
          i._changeTab(Q.$(Q.event.get(e).target))
        })
      }
    }
  });
  i.exports = Q.Class("NavMessageFloater", {
    extend: n, construct: function (e) {
      this.opt = e;
      var t = e.doms, i = t.bodies;
      e.view = new r(e), e.model = new o(e);
      var n = {doms: {widget: t.body, titles: t.titles, bodies: i}, delay: e.tabChangeDelay};
      Q.object.extend(n, {view: new h(n)}), this.tab = new l(n);
      var s = [];
      i.forEach(function (e) {
        e = Q.$(e), e.css("position", "relative");
        var t = new d({doms: {list: e}});
        t.init(), s.push(t)
      }), this.lists = s, this.bodies = i, this.messageRouter = a.getMessageRouter(), this.callsuper(e);
      var c = this;
      Q.event.customEvent.on("leftnavmsgstatechange", function (e) {
        c.syncSet({leftNavMsgVisible: e.data.visible}), e.data.visible && c._model.getMessage(!0)
      })
    }, methods: {
      init: function () {
        this.callsuper("init")
      }, fini: function () {
        this.callsuper("fini"), this.lists.forEach(function (e) {
          e.fini()
        })
      }, bindEvents: function () {
        this._messageItemsStatusChangeHandler || (this._messageItemsStatusChangeHandler = this.onMessageItemsStatusChange.bind(this)), this.messageRouter.on("msg", this._messageItemsStatusChangeHandler);
        var e = this;
        this.tab.on("itemclick", function () {
          var t = e.tab._model.get(), i = t.focus - 1, n = e._model.get();
          if (i != n.seq) {
            if (e.syncSet({seq: i}), 2 === i) {
              var a = n.data, r = a.page3.messages || [];
              r.legth >= 1 && e._sysSendShowPingback(e.getParam(r))
            } else e._sendShowPingback();
            Q.event.customEvent.fire({type: "navMessageFloaterTabChange", data: {}})
          }
        }), this._itemClickHandler || (this._itemClickHandler = this.onMessageItemClick.bind(this)), this.lists.forEach(function (t) {
          t.on("itemclick", e._itemClickHandler)
        })
      }, unbindEvents: function () {
        if (this._messageItemsStatusChangeHandler && this.messageRouter.un("msg", this._messageItemsStatusChangeHandler), this._itemClickHandler) {
          var e = this;
          this.lists.forEach(function (t) {
            t.un("itemclick", e._itemClickHandler)
          })
        }
      }, getParam: function (e) {
        var t = {}, i = e.length;
        t.groupIds = "", t.msgids = "", t.sub_types = "";
        for (var n = 0; i - 1 > n; n++)t.msgids += e[n].notice_id + ":", t.msgids += e[n].groupId + ":", t.msgids += "6:", t.msgids += e[n].sub_type + ":", t.msgids += e[n].source + ",";
        return t.msgids += e[i - 1].notice_id + ":", t.msgids += e[i - 1].groupId + ":", t.msgids += "6:", t.msgids += e[i - 1].sub_type + ":", t.msgids += e[n].source, t
      }, syncGet: function (e) {
        return Q.object.extend({tabSeq: this.tab._model.get().focus}, this._model.get(e))
      }, syncSet: function (e) {
        var t = this._model.set(e);
        this.render(t)
      }, onMessageItemClick: function (e) {
        function t() {
          var e = o.sendList[0];
          o.messageRouter.notice(e.param, function () {
            e.successCb && e.successCb(), e.href && (window.location.href = e.href), o.sendList.splice(0, 1), o.sendList.length && t()
          }, function () {
            e.failCb && e.failCb(), o.sendList.splice(0, 1), o.sendList.length && t()
          })
        }

        var i = e.data.syncGet().data, n = i.page, a = i.notice_id, r = {
          type: "msg",
          data: {action: 1, type: n, actype: i.type, msgids: [a], target: this, jump: !!e.data.href}
        };
        1 == i.type ? r.data.chat_uid = i.uid : 7 == i.type ? r.data.content = i.content : 4 == i.type && (r.data.content = i.ext_data), this.sendList || (this.sendList = []), this.sendList.push({
          param: r,
          successCb: e.data.successCb,
          failCb: e.data.failCb,
          href: e.data.href
        });
        var o = this;
        1 == this.sendList.length && t()
      }, onMessageItemsStatusChange: function (e) {
        if ("msg" == e.type && !e.data.jump) {
          var t = e.data, i = t.type, n = t.actype, a = t.msgids, r = this._model.get(), o = r.data, l = s.isLogin();
          if (0 === i)r.data = {}; else if (0 === n) {
            if (l) {
              var d = o["page" + i] || {}, c = d.messages || [];
              c.forEach(function (e) {
                e.status = 1
              }), d.unread = 0, d.messages = c, o["page" + i] = d
            } else o["page" + i] = {};
            r.data = o
          } else {
            for (var h = o["page" + i] || {}, m = h.messages || [], u = h.total || 0, p = h.unread || 0, f = 0; f < m.length; f++)if (n == m[f].type)if (0 === a.length)l ? m[f].status = 1 : (m.splice(f, 1), f--, u--), p--; else for (var U = 0; U < a.length; U++)if (a[U] == m[f].notice_id) {
              if (!l) {
                m.splice(f, 1), f--, u--, p--;
                break
              }
              m[f].status = 1, p--
            }
            h.total = u, h.unread = p, h.messages = m, o["page" + i] = h, r.data = o
          }
          this._model.updateMessage(r), this.render(r)
        }
      }, _renderList: function (e) {
        for (var t = s.isLogin(), i = 0; 3 > i; i++) {
          var n = i + 1, a = e.data["page" + n] || {}, r = [];
          if (a.messages && a.messages.length && (r = a.messages, r.forEach(function (t, i) {
              void 0 === t.page && (t.page = n, t.systime = e.data.timestamp, t.time = isNaN(t.time) ? 0 : t.time), void 0 === t.sn && (t.sn = i), void 0 === t.isLogin && (t.isLogin = s.isLogin())
            })), 0 === r.length && r.push({
              page: n,
              type: 0,
              isLogin: t
            }), s.isLogin() ? this.lists[i].syncSet({
              itemsData: [{
                page: n,
                type: -1,
                isLogin: t
              }].concat(r)
            }) : (Q.$(this.opt.doms.bodies[i]).css("marginTop", "0px"), this.lists[i].syncSet({itemsData: r.slice(0, e.pageCount)})), 2 == i) {
            var o = this;
            o.bodies.forEach(function (e) {
              if (e = Q.$(e), e && "3" == e.attr("data-seq")) {
                var t = e.down("[data-notice_id]");
                t && t.forEach(function (e) {
                  e = Q.$(e), e.on("click", function () {
                    var t = {};
                    t.url = e.attr("data-url"), t.groupid = e.attr("data-groupId"), t.sub_type = e.attr("data-sub_type"), t.msgid = e.attr("data-notice_id"), t.source = e.attr("data-source"), o._sysSendClickPingback(t), t.url ? window.open(t.url) : window.open("http://www.iqiyi.com/u/news/note")
                  })
                })
              }
            })
          }
        }
      }, render: function (e) {
        this.tab.select(e.seq + 1), this._renderList(e), this._view.update(e)
      }, _sendShowPingback: function () {
        var e = this._model.get();
        if (e.visible) {
          var t = e.data, i = e.seq, n = "", r = ((t["page" + (i + 1)] || {}).messages || []).length || 0;
          0 === i ? n = "updatealertshow131212" : 1 == i ? n = "mydynamicshow131212" : 2 == i && (n = "systemalertshow131212"), a.sendShowPingback(n, r)
        }
      }, _sysSendShowPingback: function (e) {
        var t = this._model.get();
        if (t.visible) {
          var i = t.data, n = t.seq, r = ((i["page" + (n + 1)] || {}).messages || []).length || 0;
          e.type = 21, e.msgNum = r, a.sysSendShowPingback(e)
        }
      }, _sysSendClickPingback: function (e) {
        var t = this._model.get();
        t.visible && (t.data, t.seq, e.type = 20, a.sysSendClickPingback(e))
      }
    }, properties: {
      events: {
        beforeStateChange: function (e) {
          var t = e.data.from, i = e.data.to;
          !t.visible && i.visible ? this.fire({
            type: "beforeShow",
            data: e.data
          }) : t.visible && !i.visible && this.fire({type: "beforeHide", data: e.data})
        }, onStateChange: function (e) {
          var t, i = e.data.visible;
          if (i) {
            var n = this._model.get(), a = n.data;
            t = n.seq, a.page1 && a.page1.unread ? t = 0 : a.page2 && a.page2.unread ? t = 1 : a.page3 && a.page3.unread && (t = 2), this.syncSet(Q.object.extend({seq: t}, e.data)), this._model.getMessage(!0)
          } else this.syncSet(e.data);
          this.fire({type: "stateChange", data: {visible: i}}), 2 !== t && this._sendShowPingback()
        }, onMarkReadBtnClick: function (e) {
          this.messageRouter.notice({
            type: "msg",
            data: {action: 1, type: this._model.get().seq + 1, actype: 0, msgids: [], target: this}
          }, e.data.successCb, e.data.failCb)
        }, onDataChange: function (e) {
          this.render(e.data);
          var t = e.data.data, i = e.data.seq;
          if (2 === i) {
            var n = t.page3.messages || [];
            if (n.length >= 1) {
              var a = this.getParam(t.page3.messages);
              this._sysSendShowPingback(a)
            }
          }
        }
      }
    }
  })
});
define("../../action/hoverShow", ["../components/action/widget", "../view/hoverShowView", "../model/hoverShowModel", "../kit/eventPlugin"], function (e, t, i) {
  var n = e("../components/action/widget"), a = e("../view/hoverShowView"), r = e("../model/hoverShowModel"), o = e("../kit/eventPlugin");
  i.exports = Q.Class("HoverShow", {
    extend: n, plugins: [new o], construct: function (e) {
      e = e || {}, e.model = e.model || new r(e), e.view = e.view || new a(e), this.callsuper(e)
    }, methods: {
      init: function () {
        this.bindEvents()
      }, fini: function () {
        this._view.fini(), this.unbindEvents()
      }, bindEvents: function () {
      }, unbindEvents: function () {
      }, syncGet: function (e) {
        return this._model.get(e)
      }, syncSet: function (e) {
        this._view.update(this._model.set(e))
      }
    }, properties: {
      events: {
        onStateChange: function (e) {
          this.syncSet(e.data), this.fire({type: "stateChange", data: e.data})
        }
      }
    }
  })
});
define("../../view/hoverShowView", ["../components/view/widgetView"], function (e, t, i) {
  var n = e("../components/view/widgetView");
  i.exports = Q.Class("HoverShowView", {
    extend: n, construct: function (e) {
      this.callsuper(e)
    }, methods: {
      init: function (e) {
        this._ctrl = e;
        var t = e._model.get();
        this._visible = t.visible, this._showEvt = t.showEvt, this._hideEvt = t.hideEvt, this.update(t), this.bindEvents()
      }, fini: function () {
        this.unbindEvents()
      }, bindEvents: function () {
        var e = this;
        this._hoverOverHandler || (this._hoverOverHandler = this.onHoverOver.bind(this)), this._hoverOutHandler || (this._hoverOutHandler = this.onHoverOut.bind(this)), this._touchBodyHandler || (this._touchBodyHandler = this.onTouchBody.bind(this)), this._pageShowHandler || (this._pageShowHandler = this.onPageShow.bind(this));
        var t = this._doms.target, i = this._doms.title, n = this._showEvt || "mouseenter", a = this._hideEvt || "mouseleave", r = n === a;
        Q.browser.iPad ? (n = "click", Q.$("body").on("touchstart", this._touchBodyHandler), Q.$(window).on("pageshow", this._pageShowHandler)) : r || t.on(a, this._hoverOutHandler), r ? (i.on(n, function () {
          e._visible ? e._hoverOutHandler() : e._hoverOverHandler()
        }), Q.$(document).on(n, function (i) {
          i = Q.event.get(i);
          var n = i.target;
          t.contains(n) || e._hoverOutHandler()
        }), Q.$("body").un("touchstart", this._touchBodyHandler)) : t.on(n, this._hoverOverHandler)
      }, unbindEvents: function () {
        var e = this._doms.target, t = "mouseenter";
        Q.browser.iPad ? (t = "click", this._touchBodyHandler && Q.$("body").un("touchstart", this._touchBodyHandler), this._pageShowHandler && Q.$(window).un("pageshow", this._pageShowHandler)) : this._hoverOutHandler && e.un("mouseleave", this._hoverOutHandler), this._hoverOverHandler && e.un(t, this._hoverOverHandler)
      }, onHoverOver: function () {
        this.show(this._ctrl.syncGet().showDelay)
      }, onHoverOut: function () {
        this.hide(this._ctrl.syncGet().hideDelay)
      }, onTouchBody: function (e) {
        var t = Q.$(Q.event.get(e).target), i = this._doms.target;
        i.contains(t) || this.hide(this._ctrl.syncGet().hideDelay)
      }, onPageShow: function (e) {
        e && e.persisted && this._visible && window.location.reload()
      }, update: function (e) {
        this._setVisible(e.visible)
      }, _setVisible: function (e) {
        void 0 !== e && this._visible !== e && (e ? this.show(0) : this.hide(0))
      }, show: function (e) {
        function t() {
          var e = i._doms, t = e.target, a = n.targetHoverCls, r = n.titleHoverCls, o = n.bodyHoverCls;
          i._ctrl.notice({
            type: "beforeStateChange",
            data: {from: {visible: !1}, to: {visible: !0}}
          }), a ? t.addClass(a) : t.show(), r && e.title.addClass(r), o && e.body.addClass(o), i._visible = !0, i._ctrl.notice({
            type: "onStateChange",
            data: {visible: !0}
          })
        }

        var i = this, n = this._ctrl.syncGet();
        void 0 === e && (e = n.showDelay), this._hideTimer && (clearTimeout(this._hideTimer), this._hideTimer = null), this._showTimer && (clearTimeout(this._showTimer), this._showTimer = null), this._visible || (e >= 0 ? this._showTimer = setTimeout(function () {
          i._showTimer = null, t()
        }, e) : t())
      }, hide: function (e) {
        function t() {
          var e = i._doms, t = e.target, a = n.targetHoverCls, r = n.titleHoverCls, o = n.bodyHoverCls;
          i._ctrl.notice({
            type: "beforeStateChange",
            data: {from: {visible: !0}, to: {visible: !1}}
          }), a ? t.removeClass(a) : t.hide(), r && e.title.removeClass(r), o && e.body.removeClass(o), i._visible = !1, i._ctrl.notice({
            type: "onStateChange",
            data: {visible: !1}
          })
        }

        var i = this, n = this._ctrl.syncGet();
        void 0 === e && (e = n.hideDelay), this._showTimer && (clearTimeout(this._showTimer), this._showTimer = null), this._hideTimer && (clearTimeout(this._hideTimer), this._hideTimer = null), this._visible && (e >= 0 ? this._hideTimer = setTimeout(function () {
          i._hideTimer = null, t()
        }, e) : t())
      }
    }
  })
});
define("../../model/hoverShowModel", ["../components/model/widgetModel"], function (e, t, i) {
  var n = e("../components/model/widgetModel");
  i.exports = Q.Class("HoverShowModel", {
    extend: n, construct: function (e) {
      this.callsuper(e), this._data = Q.object.extend({
        showDelay: 0,
        hideDelay: 0,
        targetHoverCls: "",
        titleHoverCls: "",
        bodyHoverCls: "",
        visible: !1,
        showEvt: "mouseenter",
        hideEvt: "mouseleave"
      }, e)
    }, methods: {
      init: function (e) {
        this.callsuper("init", e)
      }
    }
  })
});
define("../../action/messageRouter", ["../components/action/adapter", "../model/messageRouterModel", "../kit/eventPlugin", "../model/noticeTemplateModel", "../kit/artTemplate", "../kit/userInfo", "../kit/generateRandomString", "../config/siteDomain", "../kit/getPicUrl"], function (e, t, i) {
  var n = e("../components/action/adapter"), a = e("../model/messageRouterModel"), r = e("../kit/eventPlugin"), o = e("../model/noticeTemplateModel"), s = e("../kit/artTemplate"), l = e("../kit/userInfo"), d = e("../kit/generateRandomString"), c = e("../config/siteDomain"), h = e("../kit/getPicUrl"), m = null, u = Q.Class("MessageRouter", {
    extend: n,
    plugins: [new r],
    construct: function (e) {
      e = e || {}, e.model = e.model || new a(e), this.callsuper(e)
    },
    statics: {
      threeMin: 180,
      oneHour: 3600,
      getMessageRouter: function () {
        return m || (m = new u), m
      },
      _parseTime: function (e, t) {
        var i = t - e.time, n = "", a = (new Date).getTimezoneOffset(), r = t - 60 * a, o = parseFloat(e.time) - 60 * a;
        n = i < this.threeMin ? "刚刚" : i < this.oneHour ? Math.floor(i / 60) + "分钟前" : Math.floor(r / 3600 / 24) == Math.floor(o / 3600 / 24) ? Math.floor((r - o) / 3600) + "小时前" : 1 == Math.floor(r / 3600 / 24) - Math.floor(o / 3600 / 24) ? "昨天" : Q.date.format(new Date(1e3 * e.time), "M月d日"), e.parsedTime = n
      },
      url: {
        myspaceUrl: "http://www.iqiyi.com/u/",
        noteUrl: "http://www.iqiyi.com/u/news/note",
        updateUrl: "http://www.iqiyi.com/u/news/update",
        fansUrl: "http://www.iqiyi.com/u/fans",
        privateMail: "http://www.iqiyi.com/u/news/message",
        likeUrl: "http://www.iqiyi.com/u/news/like",
        commentUrl: "http://www.iqiyi.com/u/news/comment",
        recommendUrl: "http://www.iqiyi.com/u/news/recommendation"
      },
      _parseUrl: function (e) {
        e = Q.object.extend(e, this.url);
        var t = {
          2: this.url.updateUrl,
          1: this.url.privateMail,
          3: this.url.commentUrl,
          4: this.url.likeUrl,
          5: this.url.fansUrl,
          7: this.url.myspaceUrl,
          8: this.url.commentUrl,
          9: this.url.recommendUrl,
          6: this.url.noteUrl
        };
        return e.dataUrl = t[e.type], e
      },
      _addParam: function (e, t, i) {
        var n = Q.url.parse(e), a = n.protocol, r = n.host, o = n.path, s = e.lastIndexOf("#"), l = e.lastIndexOf("?");
        return t && -1 != l && (-1 != s ? Q.object.extend(Q.url.queryToJson(e.substring(l + 1, s)), t) : Q.object.extend(Q.url.queryToJson(e.substring(l + 1)), t)), i && -1 != s && Q.object.extend(Q.url.queryToJson(e.substring(s + 1)), i), a + "://" + r + o + "?" + Q.url.jsonToQuery(t) + "#" + Q.url.jsonToQuery(i)
      },
      _parseUpdate: function (e, t) {
        e.videoName = t.tvName;
        var i = "", n = e.identifier;
        if (n)if (t.order && 0 === n.indexOf("1-"))i = t.watchOrder ? "看到" + t.watchOrder + "集/更新至" + t.order + "集" : "更新至" + t.order + "集"; else if (t.tvYear && 0 === n.indexOf("2-")) {
          var a = t.tvYear;
          i = 8 == a.length ? "更新至" + a.substring(0, 4) + "-" + a.substring(4, 6) + "-" + a.substring(6, 8) + "期" : "更新至" + a + "期"
        }
        return e.videoNameTip = i, e.tvFocus = t.tvFocus, e.dataUrl = this._addParam(t.videoUrl, {src: "frmmssgshow131212"}, {vfrm: "14-6-2-1"}), e.videoUrl = e.dataUrl, e
      },
      getPingbackType: function (e) {
        var t = {
          2: "bubbleupdate131212",
          1: "bubbleprtletter131212",
          3: "bubblecomment131212",
          4: "bubblepraise131212",
          5: "bubblenewfans131212",
          7: "bubbleupld131212",
          8: "bubblenewvote131212",
          9: "bubbleuserrec131212",
          6: "bubblesysmsg131212"
        };
        return t[e]
      },
      _parseClickMap: function (e) {
        return "single" == e.msgtype && (e.clickmap_r = this.getPingbackType(e.type)), e
      },
      parseData: function (e, t) {
        this._parseTime(e, t), this._parseUrl(e), this._parseClickMap(e);
        var i = e.type;
        if (1 == i)e.dataUrl = "http://www.iqiyi.com/u/news/dialog?sui=" + e.uid; else if (2 == i)this._parseUpdate(e, e.related_video); else if (6 == i && l.isLogin()) {
          var n = /http:\/\/[\w-]*(\.[\w-/]*)+/gi, a = e.content;
          e.content = a.replace(n, function (e) {
            return e
          }), e.truncateContent = Q.string.truncate(a, 127, "...").replace(n, function (e) {
            return '<a target="_blank" href="' + e + '" class="link_add">' + e + "</a>"
          })
        } else if (3 == i || 8 == i)try {
          var r = JSON.parse(e.ext_data) || {};
          if (3 == i) {
            e.videoName = r.videoName, e.videoUrl = this._addParam(r.videoUrl, {src: "frmmssgshow131212"}, {
              vfrm: "14-6-2-1",
              scrollTo: "qitancommonarea"
            }), e.dataUrl = e.videoUrl, e.isReply = 9 == r.mainContentType;
            var o = e.related_users || [];
            o && o.length >= 2 && o[1].uid != l.getUid() && (e.isReply = !1)
          } else e.nickname = "投票：" + r.voteTitle, e.img_url = "http://www.qiyipic.com/common/fix/pc-site/head-tp.png", e.dataUrl = this._addParam(r.videoUrl, {
            src: "frmmssgshow131212",
            contentid: r.voteId
          }, {vfrm: "14-6-2-1", scrollTo: "qitancommonarea"})
        } catch (s) {
        } else 4 == i ? (e.img_url = "http://www.qiyipic.com/common/fix/pc-site/head-good.jpg", e.dataUrl = "http://www.iqiyi.com/u/news/like", e.nickname = "收到" + e.content + "条新的赞", e.formatNickname = '<span><em class="desc">收到</em></span><span class="link green w-auto">' + e.content + '</span><span><em class="desc">条新的赞</em></span>') : 7 == i ? (e.dataUrl = e.dataUrl + e.uid + "/v", e.count = e.ext_data, e.videoUrl = this._addParam(e.related_video.videoUrl, {src: "frmmssgshow131212"}, {vfrm: "14-6-2-1"}), e.related_video.videoPic = h(e.related_video.videoPic, "_160_90")) : 9 == i && (e.dataUrl = e.myspaceUrl + e.uid);
        if (e.isLogin = l.isLogin(), 1 == i || 3 == i || 4 == i || 5 == i || 7 == i || 8 == i) {
          var d = {1: "查看详情", 3: "查看完整评论", 4: "查看详情", 5: "查看详情", 7: "查看更多该用户的视频>>", 8: "查看投票详情"};
          e.openTip = d[i]
        }
        return e.hasParsed = !0, e
      },
      getParsedHtml: function (e, t) {
        var i = e.type, n = i;
        n > 0 && (i = u.getMessageRouter().getType(n)), 2 == n ? i = 1 : 7 == n && (i = 2);
        var a = o.getTplByType(i), r = Q.crypto.md5(a);
        s.compile(r, a), e.hasParsed || (e = this.parseData(e, t));
        var l = s.render(r, e);
        return l
      },
      sendShowPingback: function (e, t, i) {
        i && (e = this.getPingbackType(e));
        var n = 1;
        c.isPPS() && (n = 2011), Q.log.server({
          type: e,
          pf: n,
          p: 10,
          block: "A",
          mssgnumb: t,
          pu: l.getUid(),
          pru: Q.cookie.get("P00PRU") || "",
          u: Q.cookie.get("QC006"),
          rn: d.generate(10)
        }, "http://msg.71.am/tmpstats.gif")
      },
      sysSendShowPingback: function (e, t) {
        t && (e.type = this.getPingbackType(e.type));
        var i = 1;
        c.isPPS() && (i = 2011), Q.log.server({
          t: e.type,
          bstp: "31_msg",
          pf: i,
          p: 10,
          p1: 101,
          block: "508282_01",
          mssgnumb: e.msgNum,
          pu: l.getUid(),
          u: Q.cookie.get("QC006"),
          rn: d.generate(10),
          msgid: e.msgids,
          pos: 1
        }, "http://msg.71.am/b")
      },
      sysSendClickPingback: function (e, t) {
        t && (e.type = this.getPingbackType(e.type));
        var i = 1;
        c.isPPS() && (i = 2011), Q.log.server({
          t: e.type,
          pf: i,
          p: 10,
          p1: 101,
          rseat: "508282_01",
          pu: l.getUid(),
          u: Q.cookie.get("QC006"),
          rn: d.generate(10),
          msgid: e.msgid + ":" + e.groupid + ":6:" + e.sub_type + ":" + e.source
        }, "http://msg.71.am/b")
      }
    },
    methods: {
      notice: function (e, t, i) {
        var n = this;
        this._model.asyncSend(e, function () {
          t && t(), n.fire(e)
        }, i)
      }, getType: function (e) {
        var t = {2: 2, 1: 2, 3: 2, 4: 2, 5: 2, 7: 1, 8: 2, 6: 3, 9: 2};
        return t[e]
      }, getAcType: function (e) {
        var t = {1: "7", 2: "1,2,3,4,5,8,9", 3: "6"};
        return t[e]
      }
    }
  });
  i.exports = u
});
define("../../model/messageRouterModel", ["../components/model/model", "../interfaces/ugcMessageChangeStatus", "../kit/userInfo"], function (e, t, i) {
  var n = e("../components/model/model"), a = e("../interfaces/ugcMessageChangeStatus");
  e("../kit/userInfo"), i.exports = Q.Class("MessageRouterModel", {
    extend: n, construct: function () {
      this.callsuper()
    }, methods: {
      init: function (e) {
        this.callsuper("init", e), this._ctrl = e
      }, _getTypes: function (e, t) {
        var i = this._ctrl;
        return e ? t ? t : i.getAcType(e) : i.getAcType(1) + i.getAcType(2) + i.getAcType(3)
      }, asyncSend: function (e, t, i) {
        var n = e.data, r = n.type, o = null;
        n.msgids && (o = n.msgids.join(",")), n.content && (o = n.content);
        var s = {}, l = this._getTypes(r, n.actype);
        n.chat_uid && (s.chat_uid = n.chat_uid, o = null);
        var d, c = n.action;
        1 == c ? (s.status = 1, d = "ugcReadAll", o ? (s.msgids = o, d = "ugcReadOne") : s.types = l) : 2 == c && (d = "ugcDelAll", o ? (s.msgids = o, d = "ugcDelOne") : s.types = l), (new a)[d](s, function (e) {
          "A00000" == e.code && (t ? t() : i())
        })
      }
    }
  })
});
define("../../interfaces/ugcMessageChangeStatus", ["../kit/remoteInterface", "./config", "../kit/userInfo"], function (e, t, i) {
  var n = e("../kit/remoteInterface"), a = e("./config"), r = e("../kit/userInfo");
  i.exports = Q.Class("ugcMessageChangeStatus", {
    construct: function () {
      this._remoteInterface = new n({
        ugcLoginDelOne: {url: a.interfaces.ugcLoginDelOne},
        ugcLogoutDelOne: {url: a.interfaces.ugcLogoutDelOne},
        ugcLoginReadOne: {url: a.interfaces.ugcLoginReadOne},
        ugcLogoutReadOne: {url: a.interfaces.ugcLogoutReadOne},
        ugcLoginDelAll: {url: a.interfaces.ugcLoginDelAll},
        ugcLogoutDelAll: {url: a.interfaces.ugcLogoutDelAll},
        ugcLoginReadAll: {url: a.interfaces.ugcLoginReadAll},
        ugcLogoutReadAll: {url: a.interfaces.ugcLogoutReadAll}
      })
    }, methods: {
      request: function (e, t) {
        e = e || {};
        var i = {dataType: "jsonp", ifname: e.ifname, param: e};
        delete e.ifname, e.agent_type = 1, this._remoteInterface.send(i, t)
      }, ugcDelOne: function (e, t) {
        var i = "ugcLoginDelOne";
        r.isLogin() || (i = "ugcLogoutDelOne"), this.request(Q.object.extend(e, {ifname: i}), t)
      }, ugcReadOne: function (e, t) {
        var i = "ugcLoginReadOne";
        r.isLogin() || (i = "ugcLogoutReadOne"), this.request(Q.object.extend(e, {ifname: i}), t)
      }, ugcDelAll: function (e, t) {
        var i = "ugcLoginDelAll";
        r.isLogin() || (i = "ugcLogoutDelAll"), this.request(Q.object.extend(e, {ifname: i}), t)
      }, ugcReadAll: function (e, t) {
        var i = "ugcLoginReadAll";
        r.isLogin() || (i = "ugcLogoutReadAll"), this.request(Q.object.extend(e, {ifname: i}), t)
      }
    }
  })
});
define("../../model/noticeTemplateModel", ["../config/siteDomain"], function (e, t, i) {
  var n = e("../config/siteDomain");
  i.exports = {
    sysNotice: function () {
      var e = "http://www.qiyipic.com/common/fix/site/icon-nav_msg.png";
      return n.isPPS() && (e = "http://www.qiyipic.com/common/fix/site/icon-nav_msg-pps.png"), '<div class="nav_pop_item{{ if (isLogin) }}{{ if (status==0) }} nav_pop_item-readed{{ else }} nav_pop_item-unread{{ /if }}{{ else }} nav_pop_item_old{{ /if }}"{{ if (msgtype=="single") }}data-navmsgtips-actype="{{type}}" data-navmsgtips-item="item" r="{{clickmap_r}}" rseat="bubblealert"{{ /if }}data-notice_id="{{notice_id}}" data-href="{{dataUrl}}" data-groupid="{{groupId}}" data-url="{{url}}"data-sub_type="{{sub_type}}" data-source="{{source}}" "data-msgid={{notice_id}}" style="cursor:pointer"><div class="pop_item_inner clearfix" j-delegate="content"><div class="mod-bd clearfix"><div class="mod-bd_opt mod-bd_opt-notice"><span class="opt_title"><a class="link link-long" href="{{noteUrl}}" target="_blank" title="{{title}}">{{title}}</a></span>{{if (msgtype==="single") }}<span class="opt_close"><a data-navmsgtips-close="close" href="javascript:void(0);"  class="btn-close-popup">×</a></span>{{/if}}{{ if (isLogin) }}<span class="opt_desc"><em class="c999" title="{{parsedTime}}">{{parsedTime}}</em></span>{{ else }}<span class="opt_desc"><em class="c999" {{if (msgtype!="single") }}j-delegate="markread" hoverovertext="标记已读" hovertext="已读" hoverouttext="{{parsedTime}}" rseat="systemalert_read"{{/if}}>{{parsedTime}}</em></span>{{ /if }}</div>{{ if (isLogin) }}<div class="mod-bd_info"><em class="desc" title="{{content}}">{{=truncateContent}}</em></div><div class="mod-bd_more"><a target="_blank" href="{{dataUrl}}" class="link_more">查看完整内容</a></div>{{ else }}<div class="mod-bd_desc"><div class="trend_lt"><a href="{{dataUrl}}" target="_blank"><em class="desc textOverflow" title="{{content}}">{{content}}</em></a></div><div class="trend_look"><a href="{{dataUrl}}" target="_blank">立即查看</a></div></div>{{ /if }}</div></div>{{if (msgtype=="single") }}<div data-noticetip-elem="underframe" style="display: block;"><iframe src="about:blank" frameborder="0" style="position: absolute; z-index: 4; top: 25px; left: -156px;width: 300px; height: 62px; background-color: rgb(255, 255, 255);display: none; background-position: initial initial;background-repeat: initial initial;" data-private-display=""></iframe></div>{{ /if }}</div>'
    }, updateNotice: function () {
      var e = "http://www.qiyipic.com/common/fix/site/icon-nav_play.png";
      return n.isPPS() && (e = "http://www.qiyipic.com/common/fix/site/icon-nav_play-pps.png"), '<div class="nav_pop_item nav_pop_update{{ if (isLogin) }}{{ if (status==0) }} nav_pop_item-readed{{ else }} nav_pop_item-unread{{ /if }}{{ /if }}"{{ if (msgtype=="single") }}data-navmsgtips-actype="{{type}}"  data-navmsgtips-item="item" r="{{clickmap_r}}" rseat="bubblealert"{{ /if }}data-notice_id="{{notice_id}}" data-href="{{dataUrl}}"><div class="pop_item_inner clearfix" j-delegate="content"><div class="mod-bd clearfix"><div class="mod-bd_opt"><span class="opt_title"><a class="link link-long" href="{{videoUrl}}" target="_blank" title="{{videoName}}">{{videoName}}</a></span>{{ if (msgtype=="single") }}<span class="opt_close"><a data-navmsgtips-close="close"  href="javascript:void(0);" class="btn-close-popup">×</a></span>{{ /if }}{{ if (isLogin) }}<span class="opt_desc"><em class="c999" title="{{videoNameTip}}">{{videoNameTip}}</em></span>{{ else }}<span class="opt_desc"><em class="c999" {{if (msgtype!="single") }}j-delegate="markread" rseat="updatealert_read" hoverovertext="标记已读" hovertext="已读" hoverouttext="{{videoNameTip}}"{{/if}}>{{videoNameTip}}</em></span>{{ /if }}</div><div class="mod-bd_desc"><div class="trend_lt"><a href="{{dataUrl}}" target="_blank"><em class="desc" title="{{tvFocus}}">看点：{{tvFocus}}</em></a></div><div class="trend_look"><a href="{{dataUrl}}" target="_blank"><i class="site-icons msg-playBtn"></i>立即观看</a></div></div></div></div>{{ if (msgtype=="single") }}<div data-noticetip-elem="underframe" style="display: block;"><iframe src="about:blank" frameborder="0" style="position: absolute; z-index: 4; top: 25px; left: -156px;width: 300px; height: 62px; background-color: rgb(255, 255, 255);display: none; background-position: initial initial;background-repeat: initial initial;" data-private-display=""></iframe></div>{{ /if }}</div>'
    }, myNotice: function () {
      return '<div class="nav_pop_item{{ if (isLogin) }}{{ if (status==0) }} nav_pop_item-readed{{ else }} nav_pop_item-unread{{ /if }}{{ /if }}"{{ if (msgtype=="single") }}data-navmsgtips-actype="{{type}}" data-navmsgtips-item="item" r="{{clickmap_r}}" rseat="bubblealert"{{ /if }} data-notice_id="{{notice_id}}" data-href="{{dataUrl}}"><div class="pop_item_inner clearfix" j-delegate="content">{{ if (type!=7) }}<div class="mod-hd"><a target="_blank"{{ if (type==8||type==4) }} href="{{dataUrl}}"{{ else }} href="{{myspaceUrl}}{{uid}}"{{ /if }} title="{{nickname}}"><img width="40" height="40" src="{{img_url}}" title={{nickname}} alt="{{nickname}}"></a></div>{{ /if }}<div class="mod-bd clearfix"><div class="mod-bd_opt"><span class="opt_title{{ if (type==7) }} fl{{ /if }}"><a target="_blank" class="link{{ if (type!=3) }} link-long{{ /if }}"{{ if (type==8||type==4) }} href="{{dataUrl}}"{{ else }} href="{{myspaceUrl}}{{uid}}"{{ /if }} title="{{nickname}}">{{ if (type!=4) }}{{nickname}}{{ else }}{{=formatNickname}}{{ /if }}</a>\n{{ if (type==3) }}{{ if (!isReply) }}<a class="desc" href="{{dataUrl}}" target="_blank">评论了</a>\n<a class="link" title="{{videoName}}" href="{{videoUrl}}" target="_blank">{{videoName}}</a>{{ else }}<a class="desc" href="{{dataUrl}}" target="_blank">回复了你的评论</a>{{ /if }}{{ /if }}</span>{{ if (msgtype=="single") }}<span class="opt_close"><a data-navmsgtips-close="close"href="javascript:void(0);" class="btn-close-popup">×</a></span>{{ /if }}{{ if (type==7) }}<a class="opt_title" target="_blank" href={{dataUrl}}>上传了<span class="link_num">{{ext_data}}</span>个视频</a>{{ else if (type==9) }}<span class="opt_desc"><em class="c999" j-delegate="addfollow" uid="{{uid}}" subscribe="true" nickname="{{nickname}}">+订阅</em></span>{{ else }}<span class="opt_desc"><em class="c999" title="{{parsedTime}}">{{parsedTime}}</em></span>{{ /if }}</div>{{ if (type!=7) }}<div class="mod-bd_desc"><div class="trend_lt">{{ if (type==1) }}<a target="_blank" href="{{dataUrl}}"><em class="desc">私信了你</em></a>{{ else if (type==3) }}<a href="{{dataUrl}}" target="_blank"><em class="desc textOverflow" title="{{content}}">{{content}}</em></a>{{ else if (type==5) }}<a target="_blank" href="{{dataUrl}}"><em class="desc">订阅了你</em></a>{{ else if (type==8) }}<a target="_blank" href="{{dataUrl}}"><span><em class="desc">收到</em></span><span><em class="link green w-auto">{{content}}</em></span><span><em class="desc">条新投票</em></span></a>{{ else if (type==9) }}<a href="{{dataUrl}}" target="_blank"><em class="desc">看过他的视频</em></a>{{ /if }}</div>{{ if (type==5) }}<div class="trend_look"><a target="_blank" href="{{myspaceUrl}}fans">{{openTip}}</a></div>{{ else if (type==9) }}<div class="trend_look"><em class="green" {{if (msgtype!="single") }}j-delegate="markread" hovertext="下次再说" hoverovertext="下次再说" hoverouttext="下次再说" rseat="mydynamic_read"{{/if}}>下次再说</em></div>{{ else if (type==4||type==8) }}<div class="trend_look"><a target="_blank" href="{{dataUrl}}">{{openTip}}</a></div>{{ else }}<div class="trend_look"><a target="_blank" href="{{dataUrl}}">{{openTip}}</a></div>{{ /if }}</div>{{ else }}<div class="mod-bd_piclist"><a target="_blank" href="{{videoUrl}}" class="piclist_img"><img alt="{{=related_video.videoName}}" title="{{=related_video.videoName}}" src="{{=related_video.videoPic}}"></a><div class="piclist_cont"><div class="cont_title"><a target="_blank" href="{{videoUrl}}" title="{{=related_video.videoName}}">{{=related_video.videoName}}</a></div><div class="cont_desc-bt"><div class="cont_desc_right"><a target="_blank" class="cont_desc_link" title="去空间查看更多" href="{{dataUrl}}">去空间查看更多</a></div><div class="cont_desc_content">{{parsedTime}}</div></div></div></div>{{ /if }}</div></div>{{ if (msgtype=="single") }}<div data-noticetip-elem="underframe" style="display: block;"><iframe src="about:blank" frameborder="0" style="position: absolute; z-index: 4; top: 25px; left: -156px;width: 300px; height: 62px; background-color: rgb(255, 255, 255);display: none; background-position: initial initial;background-repeat: initial initial;" data-private-display=""></iframe></div>{{ /if }}</div>'
    }, getTplByType: function (e) {
      return 1 == e ? this.updateNotice() : 2 == e ? this.myNotice() : 3 == e ? this.sysNotice() : 0 === e ? this.getNoneNotice() : -1 == e ? this.getScrollBarTpl() : void 0
    }, getNoneNotice: function () {
      return '<div class="nav_pop_noItem"><div class="pop_noItem_inner"><div><em>{{if (page==1)}}您还没有收到新的更新消息{{/if}}{{if (isLogin&&page==2)}}您还没有收到新的动态{{/if}}{{if (!isLogin)&&page==2}}暂时还没有新的推荐{{/if}}{{if (isLogin&&page==3)}}您还没有收到新的系统消息{{/if}}{{if (!isLogin&&page==3)}}您还没有登录{{/if}}</em></div><div class="mt5">{{if (!isLogin&&page==3)}}您<a class="noItem_link" href="javascript:void(0);" j-pingback="act:accloginclk" j-delegate="login">登录</a>后可以查看完整的通知列表{{/if}}</div></div><span class="vl-fix"></span></div>'
    }, getScrollBarTpl: function () {
      return '<div class="scrollbar_track" style="display:none;" wrapperheight="305" data-navmessagefloater-elem="scrollbar"><a data-navmessagefloater-elem="scrollbarhandle" href="javascript:void(0);" class="scrollbar_handle" style="height: 100px; top: 0;"></a></div>'
    }
  }
});
define("../../kit/generateRandomString", [], function (e, t, i) {
  i.exports = {
    generate: function (e) {
      for (var t = "", i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = 0; e > n; n++)t += i.charAt(Math.floor(Math.random() * i.length));
      return t
    }
  }
});
define("../../kit/getPicUrl", [], function (e, t, i) {
  i.exports = function (e, t) {
    if (!e)return "";
    var i = e.lastIndexOf("."), n = e.substr(0, i), a = e.substr(i);
    return n + (t || "") + a
  }
});
define("../../view/navMessageFloaterView", ["./hoverShowView", "../kit/userInfo", "../kit/iframeLocation", "../kit/followInfo", "../components/action/floater", "../components/view/floaterView", "../kit/artTemplate", "../action/qipaLogin", "../config/siteDomain"], function (e, t, i) {
  var n = e("./hoverShowView"), a = e("../kit/userInfo"), r = e("../kit/iframeLocation"), o = e("../kit/followInfo"), s = e("../components/action/floater"), l = e("../components/view/floaterView"), d = e("../kit/artTemplate"), c = e("../action/qipaLogin"), h = e("../config/siteDomain"), m = "http://www.iqiyi.com/u/home", u = "http://www.iqiyi.com/u/news/comment", p = "http://www.iqiyi.com/u/news/note", f = "http://www.iqiyi.com/u/news/message", U = "http://www.iqiyi.com/u/news/like", V = "http://www.iqiyi.com/u/news/recommendation";
  i.exports = Q.Class("NavMessageFloaterView", {
    extend: n,
    construct: function (e) {
      this.callsuper(e);
      var t = this._doms;
      Q.$(t.bodies[0]).addClass("pop_main_inner_remind"), Q.$(t.bodies[1]).addClass("pop_main_inner_trend"), Q.$(t.bodies[2]).addClass("pop_main_inner_notify");
      var i = t.moreBtn.parent(), n = i.parent();
      n.html("BEFOREEND", '<div class="nav_pop_ft_recorder clearfix" style="display:none;"><a title="查看更多" data-navmessagefloater-elem="morebtn" unlogin="true">查看更多</a></div>'), t.moreBtn = n.down("[data-navmessagefloater-elem=morebtn]"), t.loginMoreBtnCon = i, t.markReadBtnCon = t.markReadBtn.parent(), t.unloginMoreBtnCon = n.down("[data-navmessagefloater-elem=morebtn][unlogin=true]").parent(), t.footer = n
    },
    properties: {addFlowSucTpl: ['<div class="nav_pop_single-rss">', '<div class="nav_pop_item">', '<div class="pop_item_inner clearfix">', '<div class="mod-hd"><i class="icon-rss-success"></i></div>', '<div class="mod-bd clearfix">', '<div class="mod-bd_desc">', '<em class="desc">恭喜您已成功订阅用户“{{nickname}}”</em>', "</div>", "</div>", "</div>", "</div>", "</div>"].join("")},
    methods: {
      init: function (e) {
        this.callsuper("init", e);
        var t = this, i = Q.event.customEvent;
        i.on("qipaLoginIfrRendered", function () {
          t._setLoginRegistBoxCaption()
        }), i.on("qipaLoginIfrShown", function () {
          t._setLoginRegistBoxCaption()
        }), i.on("qipaLoginIfrHide", function () {
          t._rlt = !1, t._setLoginRegistBoxCaption()
        })
      }, update: function (e) {
        this.callsuper("update", e), this._setFooter(), this._setTab(e.seq), this._setData(e.data), this._setBtnStatus(), this._setPingbackParam()
      }, _setLoginRegistBoxCaption: function () {
        var e = c.qipaLoginIfr.down("[data-loginbox-elem=caption]"), t = c.qipaLoginIfr.down("[data-registbox-elem=caption]"), i = e.attr("data-loginbox-defaultcaption"), n = t.attr("data-registbox-defaultcaption"), a = "登录之后就可以订阅他/她咯", r = "注册爱奇艺账号，马上订阅他/她";
        this._rlt ? (i || (e.attr("data-loginbox-defaultcaption", e.html()), e.html(a)), n || (t.attr("data-registbox-defaultcaption", t.html()), t.html(r))) : (i && (e.html(i), e.removeAttr("data-loginbox-defaultcaption")), n && (t.html(n), t.removeAttr("data-registbox-defaultcaption")))
      }, _setPingbackParam: function () {
        var e = this._doms, t = e.body, i = e.moreBtn, n = e.markReadBtn, a = [t], r = t.down("a") || [], o = t.down("img") || [];
        r.forEach(function (e) {
          e = Q.$(e), "tabtitle" != e.parent().attr("data-navmessagefloater-elem") && a.push(e)
        }), o.forEach(function (e) {
          a.push(Q.$(e))
        });
        var s = this._seq;
        0 === s ? (a.forEach(function (e) {
          e.attr("rseat", "updatealert")
        }), i.attr("rseat", "updatealert_more"), n.attr("rseat", "updatealert_rdall")) : 1 == s ? (a.forEach(function (e) {
          e.attr("rseat", "mydynamic")
        }), i.attr("rseat", "mydynamic_more"), n.attr("rseat", "mydynamic_rdall")) : (a.forEach(function (e) {
          e.attr("rseat", "systemalert")
        }), i.attr("rseat", "systemalert_more"), n.attr("rseat", "systemalert_rdall"))
      }, _setFooter: function () {
        var e = this._doms;
        a.isLogin() ? (e.unloginMoreBtnCon.hide(), e.markReadBtnCon.show(), e.loginMoreBtnCon.show()) : (e.loginMoreBtnCon.hide(), e.markReadBtnCon.hide(), e.unloginMoreBtnCon.show())
      }, _setTab: function (e) {
        void 0 !== e && this._seq !== e && (this._seq = e)
      }, _setBtnStatus: function () {
        var e = this._doms, t = e.moreBtn, i = e.markReadBtn, n = this._ctrl._model.get(), r = n.data, o = this._seq, s = "disabled";
        n.pageCount;
        var l = r["page" + (o + 1)] || {}, d = l.unread || 0;
        d ? i.removeClass(s) : i.addClass(s);
        var c = Q.$(e.nums[1]).parent(), h = Q.$(e.nums[0]).parent();
        a.isLogin() ? (c.html("与我相关" + c.html().substr(4)), h.html("我的订阅" + h.html().substr(4))) : (c.html("用户推荐" + c.html().substr(4)), h.html("更新提醒" + h.html().substr(4))), e.nums = e.body.down("[data-navmessagefloater-elem=num]");
        var g = "";
        if (0 === o)g = m, a.isLogin() || (g = "http://www.iqiyi.com/u/news/update"); else if (1 == o) {
          g = u;
          var y = l.messages;
          if (y)for (var b = 0; b < y.length; b++) {
            var v = y[b].type;
            if (3 == v)break;
            if (1 == v) {
              g = f;
              break
            }
            if (4 == v) {
              g = U;
              break
            }
          }
          a.isLogin() || (g = V)
        } else g = p;
        t.attr("href", g)
      }, _setData: function (e) {
        var t = this._doms, i = t.nums, n = t.numTip;
        a.isLogin();
        for (var r = 0; r < i.length; r++) {
          var o = Q.$(i[r]), s = e["page" + (r + 1)] || {}, l = s.unread || 0;
          l > 0 ? (o.html(l > 99 ? "99+" : l), o.show()) : o.hide()
        }
        var d = !1;
        e.unshow && (n.show(), d = !0), this._ctrl._model.get().visible && n.hide(), Q.event.customEvent.fire({
          type: "navmsgnumchange",
          data: Q.object.extend(e, {dotVisible: d})
        })
      }, onMarkReadBtnClick: function (e) {
        var t = this._ctrl._model.get(), i = t.data, n = this._seq, a = i["page" + (n + 1)];
        a && a.messages && a.messages.length && this._ctrl.notice({
          type: "onMarkReadBtnClick",
          data: {evt: Q.event.get(e)}
        })
      }, onMoreBtnClick: function (e) {
        e = Q.event.get(e), e.preventDefault();
        var t = this._seq;
        0 === t && Q.cookie.set("FEEDTYPESN", 30, {expires: 6e6, path: "/", domain: h.SITE_DOMAIN});
        var i = this._ctrl._model.get(), n = i.data, a = n["page" + (t + 1)], o = Q.$(e.target).attr("href");
        a && a.messages && a.messages.length ? this._ctrl.notice({
          type: "onMarkReadBtnClick",
          data: {
            evt: Q.event.get(e), successCb: function () {
              r.href(o)
            }, failCb: function () {
              r.href(o)
            }
          }
        }) : r.href(o)
      }, onTitleClick: function (e) {
        if (Q.event.get(e).preventDefault(), Q.browser.iPad) {
          var t = this._ctrl.syncGet().visible;
          t ? this.hide(0) : this.show(0)
        }
      }, onHoverOver: function (e) {
        Q.browser.iPad || this.callsuper("onHoverOver", e)
      }, addFollow: function (e) {
        e = Q.event.get(e), e.preventDefault(), this._rlt = !0;
        var t = Q.$(e.target), i = this, n = t.attr("uid"), a = t.attr("nickname");
        c.openLoginWindow({from: "subscribe"}, function () {
          var e = {uids: n};
          o.addFollow(e, function (e) {
            if ("A00000" == e.code) {
              o.fire({type: "memberStateChange", data: {uid: n, stateTo: 2}});
              var t = i.addFlowSucTpl, r = Q.crypto.md5(t);
              d.compile(r, t);
              var c = d.render(r, {nickname: a});
              i._floater || (i._floater = new s({view: new l({isResize: !0})})), i._floater.show({html: c}), setTimeout(function () {
                i._floater.hide()
              }, 1500)
            }
          })
        })
      }, bindEvents: function () {
        this.callsuper("bindEvents"), this._markReadBtnClickHandler || (this._markReadBtnClickHandler = this.onMarkReadBtnClick.bind(this)), this._moreBtnClickHandler || (this._moreBtnClickHandler = this.onMoreBtnClick.bind(this)), this._titleClickHandler || (this._titleClickHandler = this.onTitleClick.bind(this)), this._addFollowHandler || (this._addFollowHandler = this.addFollow.bind(this)), this._doms.markReadBtn.on("click", this._markReadBtnClickHandler), this._doms.moreBtn.on("click", this._moreBtnClickHandler);
        var e = "click";
        Q.browser.iPad && (e = "touchstart"), this._doms.title.on(e, this._titleClickHandler), this._doms.body.delegate("addfollow", this._addFollowHandler, "click")
      }, unbindEvents: function () {
        if (this._markReadBtnClickHandler && this._doms.markReadBtn.un("click", this._markReadBtnClickHandler), this._moreBtnClickHandler && this._doms.moreBtn.un("click", this._moreBtnClickHandler), this._titleClickHandler) {
          var e = "click";
          Q.browser.iPad && (e = "touchstart"), this._doms.title.un(e, this._titleClickHandler)
        }
        this._addFollowHandler && this._doms.body.undelegate("addfollow", this._addFollowHandler, "click")
      }
    }
  })
});
define("../../kit/followInfo", ["../interfaces/ugcFollowsInterface", "../kit/eventPlugin", "../kit/userInfo", "./generateRandomString"], function (e, t, i) {
  new Q.ic.InfoCenter({moduleName: "kit/followInfo"});
  var n = e("../interfaces/ugcFollowsInterface"), a = e("../kit/eventPlugin"), r = e("../kit/userInfo"), o = e("./generateRandomString"), s = {}, l = "http://msg.71.am/b", d = Q.Class("FollowInfo", {
    plugins: [new a],
    construct: function () {
      this.init()
    },
    methods: {
      init: function () {
      }, insert: function (e) {
        e = e || {}, e.name && e.action && (s[e.name] || (s[e.name] = e.action))
      }, getFollow: function (e) {
        return s[e]
      }, getAllFollow: function () {
        return s
      }, clearAllFollow: function () {
        s = {}
      }, setEnableState: function (e) {
        for (var t in s)s[t].view.setEnable(e)
      }, addFollow: function (e, t) {
        e = e || {}, (new n).addFollow(e, t)
      }, removeFollow: function (e, t) {
        e = e || {}, (new n).removeFollow(e, t)
      }, removeFans: function (e, t) {
        e = e || {}, (new n).removeFans(e, t)
      }, pushFollow: function (e) {
        (new n).pushFollow(null, e)
      }, getFollows: function (e, t) {
        e = e || {}, new n({url: e.url}).getFollows(e.params, t)
      }, getFans: function (e, t) {
        e = e || {}, new n({url: e.url}).getFans(e.params, t)
      }, getTimeline: function (e, t) {
        e = e || {}, new n({url: e.url}).getTimeline(e.params, t)
      }, getRel: function (e, t) {
        e = e || {}, e.auth = r.getAuthCookies(), (new n).getRel(e, t)
      }, getSubTimeline: function (e, t) {
        e = e || {}, new n({url: e.url}).getSubTimeline(e.params, t)
      }, sendPingback: function (e) {
        e = e || {};
        var t = {
          t: 20,
          pf: 1,
          p: Q.browser.iPad ? 20 : 10,
          p1: 101,
          bstp: "0",
          pu: r.getUid(),
          u: Q.cookie.get("QC005"),
          rn: o.generate(10)
        };
        Q.object.extend(t, e), Q.log.server(t, l)
      }
    }
  }), c = new d;
  i.exports = c
});
define("../../interfaces/ugcFollowsInterface", ["../kit/remoteInterface", "./config"], function (e, t, i) {
  var n = e("../kit/remoteInterface"), a = e("./config");
  i.exports = Q.Class("ugcFollowsInterface", {
    construct: function (e) {
      e = e || {}, e.url && (this.url = e.url), this._remoteInterface = new n({
        addFollow: {url: a.interfaces.ugcAddFollow},
        removeFollow: {url: a.interfaces.ugcRemoveFollow},
        removeFans: {url: a.interfaces.ugcRemoveFans},
        pushFollow: {url: a.interfaces.ugcPushFollow},
        getFans: {url: this.url ? this.url : a.interfaces.ugcGetFans},
        getFollows: {url: this.url ? this.url : a.interfaces.ugcGetFollows},
        getTimeline: {url: this.url ? this.url : a.interfaces.ugcGetTimeline},
        getRel: {url: a.interfaces.ugcGetRel},
        getSubTimeline: {url: this.url ? this.url : a.interfaces.ugcGetSubTimeline}
      })
    }, methods: {
      addFollow: function (e, t) {
        e = e || {}, this._remoteInterface.send({
          param: e,
          ifname: "addFollow",
          dataType: "jsonp",
          antiCsrf: !0
        }, function (e) {
          t && t(e)
        })
      }, removeFollow: function (e, t) {
        e = e || {}, e.antiCsrf = Q.crypto.md5(Q.cookie.get("P00001")), this._remoteInterface.send({
          param: e,
          ifname: "removeFollow",
          dataType: "jsonp",
          antiCsrf: !0
        }, function (e) {
          t && t(e)
        })
      }, removeFans: function (e, t) {
        e = e || {}, e.antiCsrf = Q.crypto.md5(Q.cookie.get("P00001")), this._remoteInterface.send({
          param: e,
          ifname: "removeFans",
          dataType: "jsonp",
          antiCsrf: !0
        }, function (e) {
          t && t(e)
        })
      }, pushFollow: function (e, t) {
        e = e || {}, this._remoteInterface.send({param: e, ifname: "pushFollow", dataType: "jsonp"}, function (e) {
          t && t(e)
        })
      }, getFollows: function (e, t) {
        e = e || {}, this._remoteInterface.send({param: e, ifname: "getFollows", dataType: "jsonp"}, function (e) {
          t && t(e)
        })
      }, getFans: function (e, t) {
        e = e || {}, this._remoteInterface.send({param: e, ifname: "getFans", dataType: "jsonp"}, function (e) {
          t && t(e)
        })
      }, getTimeline: function (e, t) {
        e = e || {}, this._remoteInterface.send({param: e, ifname: "getTimeline", dataType: "jsonp"}, function (e) {
          t && t(e)
        })
      }, getRel: function (e, t) {
        e = e || {}, this._remoteInterface.send({param: e, ifname: "getRel", dataType: "jsonp"}, function (e) {
          t && t(e)
        })
      }, getSubTimeline: function (e, t) {
        e = e || {}, this._remoteInterface.send({param: e, ifname: "getSubTimeline", dataType: "jsonp"}, function (e) {
          t && t(e)
        })
      }
    }
  })
});
define("../../model/navMessageFloaterModel", ["./hoverShowModel", "../interfaces/messageInterface", "../kit/userInfo"], function (e, t, i) {
  var n = e("./hoverShowModel"), a = e("../interfaces/messageInterface"), r = e("../kit/userInfo");
  i.exports = Q.Class("NavMessageFloaterModel", {
    extend: n, construct: function (e) {
      e = Q.object.extend({
        seq: 0,
        interval: 18e5,
        pageCount: 5,
        leftNavMsgVisible: !1,
        data: {total: 0, unread: 0, unshow: !1}
      }, e), this.callsuper(e)
    }, methods: {
      init: function (e) {
        this.callsuper("init", e), this._ctrl = e, this.getMessage();
        var t = this, i = Q.event.customEvent;
        i.on("login", function () {
          t.getMessage()
        }), i.on("logout", function () {
          t.getMessage()
        })
      }, _fetchMessage: function (e, t) {
        this.get().visible || this.get().leftNavMsgVisible ? a.getNavMessage(e, function (e) {
          e = e.data || {}, e.total = 0, e.unread = 0;
          for (var i = 1; 3 >= i; i++)e.total += e["page" + i] ? e["page" + i].total : 0, !r.isLogin() && e["page" + i] && (e["page" + i].unread = e["page" + i].total), e.unread += e["page" + i] ? e["page" + i].unread : 0;
          e.unshow = 0, t({data: e})
        }) : a.getNavMessageCount(e, function (e) {
          e = e.data, t({data: {unread: e ? e.unread : 0, unshow: e ? e.unshow : 0}})
        })
      }, getMessage: function (e, t) {
        var i = this;
        this._getMessageTimer && (clearTimeout(this._getMessageTimer), this._getMessageTimer = null);
        var n = this.get(), a = n.interval, o = r.isLogin();
        this._fetchMessage({count: n.pageCount}, function (n) {
          if (o == r.isLogin()) {
            var s = i.get(), l = s.seq;
            !e || s.data.page1 && s.data.page2 && s.data.page3 || (n.data.page1 && n.data.page1.total ? l = 0 : n.data.page2 && n.data.page2.total ? l = 1 : n.data.page3 && n.data.page3.total && (l = 2)), i.set({
              data: n.data,
              seq: l
            }), i._ctrl.notice({
              type: "onDataChange",
              data: i.get()
            }), i._isValid(t) || (i._getMessageTimer = setTimeout(function () {
              i.getMessage(r.isLogin())
            }, a))
          }
        })
      }, _isValid: function (e) {
        var t = this.get(), i = t.pageCount, n = !0;
        if (e)n = !1; else for (var a = 1; 3 >= a; a++) {
          var r = t.data["page" + a];
          if (!r || !r.messages || r.messages.length < i) {
            n = !1;
            break
          }
        }
        return n
      }, updateMessage: function (e) {
        this.set(e), r.isLogin() || this._isValid() || this.getMessage()
      }
    }
  })
});
define("../../interfaces/messageInterface", ["./config", "../kit/remoteInterface", "../kit/userInfo"], function (e, t, i) {
  var n = e("./config"), a = e("../kit/remoteInterface"), r = e("../kit/userInfo"), o = Q.Class("MessageInterface", {
    construct: function () {
      this._remoteInterface = new a({
        getLoginNavMsg: {url: n.interfaces.getLoginNavMsg},
        getLogoutNavMsg: {url: n.interfaces.getLogoutNavMsg},
        getLoginNavMsgCnt: {url: n.interfaces.getLoginNavMsgCnt},
        getLogoutNavMsgCnt: {url: n.interfaces.getLogoutNavMsgCnt}
      })
    }, methods: {
      request: function (e, t) {
        e = e || {};
        var i = {dataType: "jsonp", ifname: e.ifname, param: e};
        delete e.ifname, e.agent_type = 1, this._remoteInterface.send(i, t)
      }, getNavMessage: function (e, t) {
        var i = "getLoginNavMsg";
        r.isLogin() || (i = "getLogoutNavMsg"), this.request(Q.object.extend(e, {ifname: i}), t)
      }, getNavMessageCount: function (e, t) {
        var i = "getLoginNavMsgCnt";
        r.isLogin() || (i = "getLogoutNavMsgCnt"), this.request(Q.object.extend(e, {ifname: i}), t)
      }
    }
  });
  i.exports = new o
});
define("../../action/tab", ["../components/action/widget", "../model/tabModel", "../view/tabView", "../kit/eventPlugin"], function (e, t, i) {
  var n = e("../components/action/widget"), a = e("../model/tabModel"), r = e("../view/tabView"), o = e("../kit/eventPlugin"), s = {};
  i.exports = Q.Class("Tab", {
    extend: n, plugins: [new o], statics: {
      init: function () {
        s = {}
      }, getTab: function (e) {
        return s[e]
      }
    }, construct: function (e) {
      e = e || {}, e.model = e.model || new a(e), e.view = e.view || new r(e), this.callsuper(e);
      var t = e.doms.widget.attr("data-tabname");
      t && (s[t] = this)
    }, properties: {
      events: {
        titleclick: function (e) {
          var t = e.data.title, i = parseInt(t.attr("data-seq"), 10);
          this.select(i), this.fire({type: "itemclick", data: e.data})
        }
      }
    }, methods: {
      select: function (e) {
        var t = this._model.get();
        t.focus != e && (this._model.setFocus(e), this.redraw(), this.fire({
          type: "focuschange",
          data: {seq: e, title: this._view.getTitleItem(e), body: this._view.getBodyItem(e)}
        }))
      }, doneAnim: function () {
        this._view.doneAnim()
      }, getCurrentTab: function () {
        var e = this._model._data.focus;
        return {title: this._view.getTitleItem(e || 1), body: this._view.getBodyItem(e || 1), seq: e}
      }
    }
  })
});
define("../../model/tabModel", ["../components/model/model"], function (e, t, i) {
  var n = e("../components/model/model");
  i.exports = Q.Class("TabModel", {
    extend: n, construct: function () {
      this.callsuper(), this._data = {focus: 0}
    }, methods: {
      setFocus: function (e) {
        var t = this._data;
        t.focus = e
      }
    }
  })
});
define("../../view/tabView", ["../components/view/widgetView", "../kit/plugins/anim/animPlugin", "../kit/plugins/anim/sohAnimPlugin"], function (e, t, i) {
  var n = e("../components/view/widgetView"), a = e("../kit/plugins/anim/animPlugin"), r = e("../kit/plugins/anim/sohAnimPlugin");
  i.exports = Q.Class("TabView", {
    extend: n, construct: function (e) {
      this.callsuper(e)
    }, methods: {
      init: function (e) {
        this.enbleHover = this._doms.widget.attr("data-widget-hover"), this.enableHoverAndClick = this._doms.widget.attr("data-widget-hoverclick"), this.enableLazyloadContent = this._doms.widget.attr("data-widget-lazyloadcontent"), this.triggerLazyloadTimer = null, this.callsuper("init", e), this._initSeq(), this._bindEvent(), this._anim = new r
      }, update: function (e) {
        var t = this._doms, i = t.titles, n = t.bodies, a = "selected";
        t.widget && (a = t.widget.attr("data-tab-selectedtitlecls") || a), i.removeClass(a);
        var o = e.focus - 1;
        Q.$(i[o]).addClass(a), this._anim || (this._anim = new r), this._anim.play({elem: t.slide, s: Q.$(n[o]), h: n})
      }, getTitleItem: function (e) {
        var t = this._doms;
        return Q.$(t.titles[e - 1])
      }, getBodyItem: function (e) {
        var t = this._doms;
        return Q.$(t.bodies[e - 1])
      }, config: function (e) {
        this._configAnim(e)
      }, doneAnim: function () {
        this._anim.done()
      }, _configAnim: function (e) {
        if (e.plugins.anim) {
          if (!(e.plugins.anim instanceof a))throw new Error("Not instanceof AnimPlugin.");
          this._anim = e.plugins.anim
        }
      }, _initSeq: function () {
        var e = this._doms, t = e.titles, i = e.bodies;
        t.forEach(function (e, t) {
          Q.$(e).attr("data-seq", t + 1)
        }), i.forEach(function (e, t) {
          Q.$(e).attr("data-seq", t + 1)
        })
      }, lazyload: function (e) {
        var t = e.down("img[data-widget-lazyload]");
        t && t.forEach(function (e) {
          e.src = Q.$(e).attr("data-lazyload-src"), Q.$(e).removeAttr("data-widget-lazyload")
        })
      }, _changeTab: function (e) {
        for (var t = this._doms, i = t.titles, n = t.bodies, a = this; e;) {
          var r = e.attr("data-seq");
          if (r && e.equal(i[r - 1]))break;
          e = e.parent()
        }
        if (e) {
          var o = parseInt(e.attr("data-seq"), 10) - 1, s = Q.$(n[o]);
          if (this.triggerLazyloadTimer && window.clearTimeout(this.triggerLazyloadTimer), this.enableLazyloadContent) {
            var l = window.parseInt(this.enableLazyloadContent, 10);
            this.triggerLazyloadTimer = window.setTimeout(function () {
              a.lazyload(s)
            }, l)
          }
          "true" !== e.attr("data-tab-disabletitleclick") && this._ctrl.notice({
            type: "titleclick",
            data: {title: e, body: s}
          })
        }
      }, _bindClickEvent: function () {
        var e = this._doms, t = e.titles, i = this;
        t.on("click", function (t) {
          t = Q.event.get(t), e.widget && e.widget.attr && "false" !== e.widget.attr("data-widget-disabletitleclickevt") && t.preventDefault();
          var n = Q.$(t.target), a = n;
          i._changeTab(a)
        })
      }, _bindHoverEvent: function () {
        var e = this._doms, t = e.titles, i = this;
        t.on("mouseover", function (e) {
          e = Q.event.get(e), e.preventDefault();
          var t = Q.$(e.target), n = t;
          i._changeTab(n)
        })
      }, _bindLazyHover: function () {
        for (var e = this._doms, t = e.titles, i = this, n = 0; n < t.length; n++) {
          var a = Q.$(t[n]);
          if (a.attr("data-lazyhover")) {
            var r = a.attr("data-lazyhovertm") || 0;
            a.on("mouseover", function (e) {
              i.lazyhoverSt && clearTimeout(i.lazyhoverSt), e = Q.event.get(e), e.preventDefault();
              var t = Q.$(e.target), n = t;
              i.lazyhoverSt = setTimeout(function () {
                i._changeTab(n)
              }, r)
            }), a.on("mouseout", function () {
              i.lazyhoverSt && clearTimeout(i.lazyhoverSt)
            })
          }
        }
      }, _bindEvent: function () {
        this.enableHoverAndClick ? (this._bindClickEvent(), this._bindLazyHover()) : this.enbleHover ? this._bindHoverEvent() : this._bindClickEvent()
      }
    }
  })
});
define("../../kit/plugins/anim/animPlugin", ["../../eventPlugin"], function (e, t, i) {
  var n = e("../../eventPlugin");
  i.exports = Q.Class("AnimPlugin", {
    plugins: [new n], construct: function () {
    }, methods: {
      play: function (e) {
        this._createAnim(e);
        var t = this;
        this._playAnim(e, function () {
          t.fire({type: "done"})
        })
      }, pause: function () {
      }, reset: function () {
        this._clearAnim()
      }, done: function () {
        this._doneAnim()
      }, _createAnim: function (e) {
        this._anim || (this._anim = Q.anim(e.elem))
      }, _playAnim: Q.fn.abstractMethod, _clearAnim: function () {
        this._anim = null
      }, _doneAnim: function () {
        this._anim.done()
      }
    }
  })
});
define("../../kit/plugins/anim/sohAnimPlugin", ["./animPlugin"], function (e, t, i) {
  var n = e("./animPlugin");
  i.exports = Q.Class("SoHAnimPlugin", {
    extend: n, construct: function () {
    }, methods: {
      _createAnim: Q.fn.emptyMethod, _playAnim: function (e, t) {
        e.h && e.h.hide(), e.s && e.s.show(), t()
      }
    }
  })
});
define("../../action/navMessageFloaterList", ["./list", "./navMessageFloaterItem", "../view/navMessageFloaterItemView"], function (e, t, i) {
  var n = e("./list"), a = e("./navMessageFloaterItem"), r = e("../view/navMessageFloaterItemView");
  i.exports = Q.Class("NavMessageFloaterList", {
    extend: n, construct: function (e) {
      this.callsuper(e)
    }, methods: {
      buildItems: function (e) {
        var t = [];
        return e.itemsData.forEach(function (e) {
          var i = {data: e}, n = new r(i), o = new a(Q.object.extend(i, {view: n}));
          o.init(), t.push(o)
        }), t
      }, bindItemsEvents: function () {
        var e = this.items;
        if (e) {
          this._clickItemHandler || (this._clickItemHandler = this.onClickItem.bind(this));
          var t = this;
          e.forEach(function (e) {
            e.on("click", t._clickItemHandler)
          })
        }
      }, unbindItemsEvents: function () {
        var e = this.items;
        if (e) {
          var t = this;
          e.forEach(function (e) {
            t._clickItemHandler && e.un("click", t._clickItemHandler)
          })
        }
      }, onClickItem: function (e) {
        this.fire({type: "itemclick", data: e.data})
      }
    }
  })
});
define("../../action/list", ["../components/action/adapter", "../view/listView", "../model/listModel", "../kit/eventPlugin", "./item", "../units/activityNotice"], function (e, t, i) {
  var n = e("../components/action/adapter"), a = e("../view/listView"), r = e("../model/listModel"), o = e("../kit/eventPlugin"), s = e("./item");
  e("../units/activityNotice");
  var l = {};
  i.exports = Q.Class("List", {
    extend: n, plugins: [new o], construct: function (e) {
      e = e || {}, e.model = e.model || new r(e), e.view = e.view || new a(e);
      var t = e.name;
      t && (l[t] ? l[t].push(this) : l[t] = [this]), this.callsuper(e)
    }, statics: {
      getList: function (e) {
        return l[e]
      }
    }, methods: {
      init: function () {
        var e = this._model.get();
        this._updateItems(e), this.update(e), this.bindEvents()
      }, fini: function () {
        this.destroyItems(), this._view.fini(), this.unbindEvents()
      }, syncGet: function (e) {
        return Q.object.extend({items: this.items}, this._model.get(e))
      }, syncSet: function (e) {
        void 0 !== e.itemsData && this._isItemsDataChange(e.itemsData, this._model.get().itemsData) && (this.destroyItems(), this._updateItems(e)), this.update(this._model.set(e)), this.fire({
          type: "listReady",
          data: {count: this.items.length}
        })
      }, asyncGet: function (e) {
        var t = this;
        this._model.asyncGet(e, function (e) {
          void 0 !== e.itemsData && t._isItemsDataChange(e.itemsData, t._model.get().itemsData) && (t.destroyItems(), t._updateItems(e)), t.update(t._model.set(e)), t.fire({
            type: "listReady",
            data: {count: t.items.length}
          })
        })
      }, bindEvents: function () {
        this.bindItemsEvents()
      }, unbindEvents: function () {
        this.unbindItemsEvents()
      }, bindItemsEvents: function () {
      }, unbindItemsEvents: function () {
      }, buildItems: function (e) {
        for (var t = [], i = 0; i < e.itemsData.length; i++) {
          var n = !1;
          e.curSn == i && (n = !0);
          var a = new s({data: e.itemsData[i], select: n});
          a.init(), t.push(a)
        }
        return t
      }, update: function (e) {
        for (var t = e.curSn, i = 0; i < this.items.length; i++) {
          var n = this.items[i], a = !1, r = n.syncGet().select;
          t === i ? r || (n.syncSet({select: !0}), a = !0) : r && (n.syncSet({select: !1}), a = !0), a && this.fire({
            type: "sizeChange",
            data: {}
          })
        }
        this._view.update(e)
      }, _updateItems: function (e) {
        this.items = this.buildItems(e), this.bindItemsEvents(), this._model.get().calHtml && (this._view.update({html: this._getItemsHtml()}), this._setItemsDoms())
      }, destroyItems: function () {
        this.unbindItemsEvents(), this.items && this.items.forEach(function (e) {
          e.fini()
        }), this.items = []
      }, _setItemsDoms: function () {
        for (var e = this._view._doms.list.children(), t = this.items, i = 0; i < t.length; i++)t[i].syncSet({doms: {con: Q.$(e[i])}})
      }, _getItemsHtml: function () {
        var e = "";
        return this.items.forEach(function (t) {
          e += t.syncGet().html
        }), e
      }, _isItemsDataChange: function (e, t) {
        var i = !1;
        if (e.length == t.length) {
          for (var n = 0; n < e.length; n++)if (e[n] != t[n]) {
            i = !0;
            break
          }
        } else i = !0;
        return i
      }
    }, properties: {
      events: {
        onSelItem: function (e) {
          this.syncSet(e.data), this.fire({type: "selItem", data: e.data})
        }, onFocusInItem: function (e) {
          this.fire({type: "focusInItem", data: e.data})
        }, onFocusOutItem: function (e) {
          this.fire({type: "focusOutItem", data: e.data})
        }, onSizeChange: function (e) {
          this.fire({type: "sizeChange", data: e.data})
        }
      }
    }
  })
});
define("../../view/listView", ["../components/view/view"], function (e, t, i) {
  var n = e("../components/view/view");
  i.exports = Q.Class("ListView", {
    extend: n, construct: function (e) {
      e && (this._doms = e.doms)
    }, methods: {
      init: function (e) {
        this._ctrl = e, this.update(e._model.get()), this.bindEvents()
      }, update: function (e) {
        if (void 0 !== e.html) {
          this.unbindItemsEvents();
          var t = this._doms.list;
          t.html(e.html);
          var i = t.children();
          if (i)for (var n = 0; n < i.length; n++) {
            var a = Q.$(i[n]);
            a.attr("index", n + ""), n == e.curSn && (a.addClass(e.selItemCls), this._curSn = e.curSn)
          }
          this._ctrl.notice({type: "onSizeChange", data: {}}), this.bindItemsEvents()
        }
        this.selItem(e.curSn)
      }, selItem: function (e) {
        if (this._ctrl._model.get().respItemsEvts && void 0 !== e && this._curSn != e) {
          var t = this._doms.list.children();
          if (t) {
            var i = this._ctrl._model.get().selItemCls;
            t.forEach(function (t) {
              t = Q.$(t), t.removeClass(i), parseInt(t.attr("index"), 10) == e && t.addClass(i)
            })
          }
          this._curSn = e, this._ctrl.notice({type: "onSizeChange", data: {}})
        }
      }, doSelItem: function (e) {
        e = Q.event.get(e);
        var t = parseInt(Q.$(e.currentTarget || e.target).attr("index"), 10);
        this.selItem(t), this._ctrl.notice({type: "onSelItem", data: {curSn: t}})
      }, doFocusInItem: function (e) {
        e = Q.event.get(e);
        var t = Q.$(e.currentTarget || e.target), i = parseInt(t.attr("index"), 10);
        t.addClass(this._ctrl._model.get().focusItemCls), this._ctrl.notice({type: "onFocusInItem", data: {curSn: i}})
      }, doFocusOutItem: function (e) {
        e = Q.event.get(e);
        var t = Q.$(e.currentTarget || e.target), i = parseInt(t.attr("index"), 10), n = this._ctrl._model.get(), a = n.focusItemCls;
        (n.selItemCls != a || i != n.curSn) && t.removeClass(a), this._ctrl.notice({
          type: "onFocusOutItem",
          data: {curSn: i}
        })
      }, bindItemsEvents: function () {
        if (this._ctrl._model.get().respItemsEvts) {
          var e = this._doms.list.children();
          if (e) {
            var t = {}, i = this._ctrl._model.get(), n = {
              selItem: {
                evts: i.selItemEvts,
                handler: this.doSelItem.bind(this)
              },
              focusInItem: {evts: i.focusInItemEvts, handler: this.doFocusInItem.bind(this)},
              focusOutItem: {evts: i.focusOutItemEvts, handler: this.doFocusOutItem.bind(this)}
            };
            e.forEach(function (e) {
              e = Q.$(e);
              var i = e.attr("index");
              for (var a in n)if (n[a]) {
                var r = n[a].evts, o = n[a].handler;
                r.forEach(function (n) {
                  e.on(n, o), t[i] || (t[i] = {}), t[i][a] || (t[i][a] = {}), t[i][a][n] = o
                })
              }
            }), this._itemHandlerObj = t
          }
        }
      }, unbindItemsEvents: function () {
        if (this._ctrl._model.get().respItemsEvts) {
          var e = this._itemHandlerObj;
          if (e) {
            var t = this._doms.list.children(), i = this._ctrl._model.get(), n = {
              selItem: i.selItemEvts,
              focusInItem: i.focusInItemEvts,
              focusOutItem: i.focusOutItemEvts
            };
            t.forEach(function (t) {
              t = Q.$(t);
              var i = t.attr("index");
              for (var a in n)n[a] && n[a].forEach(function (n) {
                t.un(n, e[i][a][n])
              })
            })
          }
          this._itemHandlerObj = null
        }
      }, bindEvents: function () {
        this.bindItemsEvents()
      }, unbindEvents: function () {
        this.unbindItemsEvents()
      }, fini: function () {
        this.unbindEvents()
      }
    }
  })
});
define("../../model/listModel", ["../components/model/widgetModel"], function (e, t, i) {
  var n = e("../components/model/widgetModel");
  i.exports = Q.Class("ListModel", {
    extend: n, construct: function (e) {
      this.callsuper(e), this._data = Q.object.extend({
        itemsData: [],
        curSn: -1,
        selItemEvts: ["mouseenter"],
        focusInItemEvts: ["mouseenter", "click"],
        focusOutItemEvts: ["mouseleave"],
        selItemCls: "",
        focusItemCls: "",
        respItemsEvts: !0,
        calHtml: !0
      }, e)
    }, methods: {
      init: function (e) {
        this.callsuper("init", e)
      }
    }
  })
});
define("../../action/item", ["../components/action/adapter", "../view/itemView", "../model/itemModel", "../kit/eventPlugin", "../kit/artTemplate"], function (e, t, i) {
  var n = e("../components/action/adapter"), a = e("../view/itemView"), r = e("../model/itemModel"), o = e("../kit/eventPlugin"), s = e("../kit/artTemplate"), l = {};
  i.exports = Q.Class("Item", {
    extend: n, plugins: [new o], construct: function (e) {
      e = e || {}, e.model = e.model || new r(e), e.view = e.view || new a(e);
      var t = e.name;
      t && (l[t] ? l[t].push(this) : l[t] = [this]), this.callsuper(e)
    }, statics: {
      getItem: function (e) {
        return l[e]
      }
    }, methods: {
      init: function () {
        this.bindEvents()
      }, syncGet: function (e) {
        var t = this._model.get(e), i = this._view.formatData(Q.object.extend({}, t.data)), n = Q.crypto.md5(t.tpl);
        return s.compile(n, t.tpl), Q.object.extend({html: s.render(n, i), formatData: i}, t)
      }, syncSet: function (e) {
        void 0 !== e.doms && (this._view.update({doms: e.doms}), delete e.doms), this._view.update(this._model.set(e))
      }, unbindEvents: function () {
      }, bindEvents: function () {
      }, fini: function () {
        this._view.fini(), this.unbindEvents()
      }
    }
  })
});
define("../../view/itemView", ["../components/view/view"], function (e, t, i) {
  var n = e("../components/view/view");
  i.exports = Q.Class("ItemView", {
    extend: n, construct: function (e) {
      e && (this._doms = e.doms)
    }, methods: {
      init: function (e) {
        this._ctrl = e, this.update(e._model.get()), this.bindEvents()
      }, update: function (e) {
        void 0 !== e.doms && (this._doms && this.unbindEvents(), this._doms = e.doms, e.doms && this.bindEvents()), this._setSelect(e.select)
      }, _setSelect: function (e) {
        if (this._doms && void 0 !== e && this._select != e) {
          var t = this._doms.con, i = this._ctrl._model.get().selectCls;
          e ? t.addClass(i) : t.removeClass(i), this._select = e
        }
      }, bindEvents: function () {
      }, unbindEvents: function () {
      }, fini: function () {
        this.unbindEvents()
      }, formatData: function (e) {
        return e
      }
    }
  })
});
define("../../model/itemModel", ["../components/model/widgetModel"], function (e, t, i) {
  var n = e("../components/model/widgetModel");
  i.exports = Q.Class("ItemModel", {
    extend: n, construct: function (e) {
      this.callsuper(e), this._data = Q.object.extend({select: !1, tpl: "", selectCls: "", data: {}}, e)
    }, methods: {
      init: function (e) {
        this.callsuper("init", e)
      }
    }
  })
});
define("../../units/activityNotice", ["../components/units/pageJob", "../components/action/checkDoms", "../kit/parentByProp", "../kit/userInfo", "../action/qipaLogin", "../interfaces/activityNoticeInterface", "../kit/qiyiPlayer", "../action/scrollV2"], function (e, t, i) {
  var n = e("../components/units/pageJob"), a = e("../components/action/checkDoms"), r = e("../kit/parentByProp"), o = e("../kit/userInfo"), s = e("../action/qipaLogin"), l = e("../interfaces/activityNoticeInterface");
  e("../kit/qiyiPlayer").getPlayer("video");
  var d, c = e("../action/scrollV2"), h = "activityNotice", m = "[data-widget-activity=activityshowbox]", u = "[data-activity-attentBtn=attent]", p = "[data-activity-notice=activity-join]", f = "[data-activity-content=content]", U = "[data-activity-noticeIcon=activity-msg]", V = "<div data-widget-activity='index_bigpic'><div class='wrapper-listTitle wrapper-listTitle-notify wrapper-listTitle-notify-large'><div class='mod-listTitle album-notify-pic'><div class='notify-main' data-activity-attendBox='activity-box'><i class='notify-msgIco' data-activity-noticeIcon='activity-msg'></i><span class='notify-content' data-activity-content='content'></span><span class='notify-join' data-activity-notice='activity-join'><a style='cursor:pointer;' data-pb='' data-activity-attentBtn='attent'></a></span></div></div></div></div>", g = "<div class='wrapper-listTitle wrapper-listTitle-oneNotify' data-activity-hover='0'><div class='mod-listTitle'><div class='mod-listTitle_left'><p class='textOverflow'><i class='notify-msgIco'></i> <span data-activity-notice='litTitle'></span></p></div></div></div><div class='rapper-listTitle wrapper-listTitle-notify' data-activity-hover='1'><div class='mod-listTitle album-notify-pic'><div class='notify-main' data-activity-attendBox='activity-box'><i class='notify-msgIco' data-activity-noticeIcon='activity-msg'></i><span class='notify-content' data-activity-content='content'></span><span class='notify-join' data-activity-notice='activity-join'><a style='cursor:pointer;' data-pb='' data-activity-attentBtn='attent'></a></span></div></div></div>", y = "<div class='wrapper-listTitle wrapper-listTitle-row2' data-activity-hover='0'><div class='mod-listTitle'><div class='mod-listTitle_left'><p rseat='1_leftflo1' class='textOverflow' data-activity-tvname='tvname'></p></div><div class='mod-listTitle_describe'><p class='textOverflow'><i class='notify-msgIco'></i><span data-activity-notice='litTitle'></span></p></div></div></div><div class='wrapper-listTitle wrapper-listTitle-notify wrapper-listTitle-notifyTit' data-activity-hover='1'><div class='mod-listTitle album-notify-pic'><div class='mod-listTitle_left'><p rseat='1_leftflo2' class='textOverflow' data-activity-tvname='tvname'></p></div><div class='notify-main' data-activity-attendBox='activity-box'><i class='notify-msgIco' data-activity-noticeIcon='activity-msg'></i><span class='notify-content' data-activity-content='content'></span><span class='notify-join'  data-activity-notice='activity-join'><a style='cursor:pointer;' data-pb='' data-activity-attentBtn='attent'></a></span></div></div></div>", b = "<div class='wrapper-listTitle wrapper-listTitle-notify'><div class='mod-listTitle album-notify-pic'><div class='notify-main' data-activity-attendBox='activity-box'><i class='notify-msgIco' data-activity-noticeIcon='activity-msg'></i><span class='notify-content' data-activity-content='content'></span><span class='notify-join' data-activity-notice='activity-join'><a style='cursor:pointer;' data-pb='' data-activity-attentBtn='attent'></a></span></div></div></div>", v = "<div class='album-notify'><div class='notify-main' data-activity-attendBox='activity-box'><i class='notify-msgIco' data-activity-noticeIcon='activity-msg'></i><span class='notify-content' data-activity-content='content'></span><span class='notify-join' data-activity-notice='activity-join'><a style='cursor:pointer;' data-pb='' data-activity-attentBtn='attent'></a></span></div></div>", k = {}, x = {}, w = 0;
  Q.PageInfo && Q.PageInfo.playPageInfo && Q.PageInfo.playPageInfo.tvId && (w = Q.PageInfo.playPageInfo.tvId), n.create(h, {
    getDependentDoms: function () {
      var e = Q.$("*[data-activity-detailFlag]"), t = Q.$("*[data-activity-noticFlag]"), i = Q.$("[data-widget-activity=activitynoticedetail]"), n = i && i.down("li");
      return d = {activityDetailLi: n, activityShow: e, activityflag: t}
    }, check: function (e) {
      return a(e), !0
    }, init: function () {
      for (var e, t, i = this, n = 0, a = d.activityDetailLi.length; a > n; n++) {
        var r = Q.$(d.activityDetailLi[n]), s = r.attr("data-activity-detailId");
        k[s] = {}, i.attrAssignment(s, r)
      }
      var h = new l, U = {authcookie: o.getAuthCookies(), agent_type: 1};
      h.get(U, function (n) {
        for (var a = 0, r = d.activityShow.length; r > a; a++) {
          var s = Q.$(d.activityShow[a]), l = s.attr("data-activity-detailFlag"), h = s.attr("data-activity-noticFlag");
          x[l] = i.compareTime(k[l].start, k[l].stop, k[l].content, k[l].activityType);
          var U = x[l].substr(x[l].length - 5, 2);
          if ("分钟" == U || "行中" == U)e = k[l].activityVideoId == w && "0" == k[l].activityType ? " " : "去看看"; else if (x[l].substr(6, 3).indexOf("周") > 0 || "小时" == U) {
            if (o.isLogin() && "A00000" == n.code)for (var L = 0; L < n.data.activities.length; L++)if (n.data.activities[L] == k[l].id) {
              var _ = new Date(k[l].start).getTime() - (new Date).getTime(), W = Math.floor(_ / 6e4);
              t = 60 > W ? "去看看" : "已关注"
            }
            e = "感兴趣"
          } else e = "已结束", "5" == h && s.parent().parent().removeClass("mod-zy-notify");
          var I = s.down("[data-activity-wrapper=activity]");
          if ("已结束" == e && I && I.css("display", "block"), "已结束" != e) {
            I && I.css("display", "none");
            var X = s.down(m);
            X.css("display", "block"), "0" == h || "3" == h ? ("0" == h && X.html(g), "3" == h && (X.html(y), s.down("[data-activity-tvname=tvname]").html(k[l].tvName)), s.down("[data-activity-hover=1]").hide(), s.down("[data-activity-notice=litTitle]").html(k[l].title), s.down("[data-activity-hover=0]").on("mouseenter", function () {
              Q.$(this).hide(), Q.$(this).parent().down("[data-activity-hover=1]").show()
            }), s.down("[data-activity-hover=1]").on("mouseleave", function () {
              Q.$(this).hide(), Q.$(this).parent().down("[data-activity-hover=0]").show()
            })) : "1" == h ? X.html(v) : "4" == h ? X.html(V) : "2" == h ? X.html(b) : "5" == h && (X.html(v), X.parent().addClass("play-notify"));
            var K = s.down(u);
            ("分钟" == U || "行中" == U) && (K.attr("href", k[l].href), "1" == k[l].activityType && K.attr("target", "_blank")), s.down(f).html(x[l]), K.attr("data-pb", "rseat=" + k[l].pingback + "&" + "noticeid=" + k[l].id), "已关注" == t ? (s.down(p).html(t), s.down("[data-activity-attendBox=activity-box]").addClass("notify-main-over"), t = " ") : "去看看" == t ? K.html(t) : K.html(e), K && K.on("click", function () {
              i.attendActivity(Q.$(this))
            })
          }
        }
        setTimeout(function () {
          var e = c.getScroll("sourcelist");
          e && e.reset()
        }, 500)
      }), window.setInterval(function () {
        for (var e = 0; e < d.activityShow.length; e++) {
          var t = Q.$(d.activityShow[e]), n = t.attr("data-activity-detailFlag");
          x[n] = i.compareTime(k[n].start, k[n].stop, k[n].content, k[n].activityType), x[n].indexOf("分钟") > 0 || x[n].indexOf("进行中") > 0 ? (t.down(f).html(x[n]), k[n].activityVideoId == w && "0" == k[n].activityType ? t.down(p).html(" ") : (t.down(p).html("<a style='cursor:pointer;' data-pb='' data-activity-attentBtn='attent'>去看看</a>"), t.down(u).attr("href", k[n].href), t.down(u).attr("data-pb", "rseat=" + k[n].pingback + "&" + "noticeid=" + k[n].id), "1" == k[n].activityType && t.down(u).attr("target", "_blank"))) : x[n].indexOf("结束") > 0
        }
      }, 6e4), Q.event.customEvent.on("logout", function () {
        for (var e = 0, t = d.activityShow.length; t > e; e++) {
          var n = Q.$(d.activityShow[e]);
          if (n.down(p) && "已关注" == n.down(p).html()) {
            var a = n.down(p).attr("data-activity-rseat");
            n.down(p).html("<a data-activity-attentBtn='attent' style='cursor:pointer;' rseat=" + a + ">感兴趣</a>"), n.down(u) && n.down(u).on("click", function () {
              i.attendActivity(Q.$(this))
            })
          }
        }
      }), Q.event.customEvent.on("login", function () {
        var e = {authcookie: o.getAuthCookies(), agent_type: 1};
        h.get(e, function (e) {
          if ("A00000" == e.code)for (var t = 0; t < e.data.activities.length; t++)for (var i = 0; i < d.activityShow.length; i++)if (e.data.activities[t] == Q.$(d.activityShow[i]).attr("data-activity-detailFlag"))for (var n = 0; n < d.activityDetailLi.length; n++)if (Q.$(d.activityShow[i]).attr("data-activity-detailFlag") == Q.$(d.activityDetailLi[n]).attr("data-activity-detailId")) {
            var a = Q.$(d.activityDetailLi[n]).attr("data-activity-detailStartTime"), r = (new Date(a.replace(/-/g, "/")).getTime() - (new Date).getTime()) / 6e4, o = Q.$(d.activityDetailLi[n]).attr("data-activity-detailpingback"), s = Q.$(d.activityDetailLi[n]).attr("data-activity-detailId"), l = Q.$(d.activityDetailLi[n]).attr("data-activity-datailHref"), c = Q.$(d.activityDetailLi[n]).attr("data-activity-detailActivityVideoId"), h = Q.$(d.activityDetailLi[n]).attr("data-activity-detailactivitytype");
            if (60 > r)if (c != w || "1" == h) {
              var m = "<a style='cursor:pointer;' href=" + l + ">去看看</a>";
              Q.$(d.activityShow[i]).down(p).html(m), Q.$(d.activityShow[i]).down(p).down("a").attr("data-pb", "rseat=" + o + "&" + "noticeid=" + s)
            } else Q.$(d.activityShow[i]).down(p).html(""); else Q.$(d.activityShow[i]).down(p).html("已关注")
          }
        })
      })
    }, changeState: function (e, t) {
      var i = r(e, "data-activity-attendBox", "activity-box"), n = i.down(f).html();
      i.addClass("notify-main-succ"), i.down(U).removeClass("notify-msgIco").addClass("notify-succIco"), i.down(f).html("成功关注该活动，活动开始前将收到通知"), i.down(p).html(""), window.setTimeout(function () {
        i.removeClass("notify-main-succ").addClass("notify-main-over"), i.down(U).removeClass("notify-succIco").addClass("notify-msgIco"), i.down(f).html(n), i.down(p).html("已关注");
        for (var e = 0; e < d.activityShow.length; e++) {
          var a = Q.$(d.activityShow[e]), r = a.attr("data-activity-detailflag");
          t == r && a.down(p).html("已关注")
        }
      }, 2e3)
    }, attendActivity: function (e) {
      var t = this, i = r(e, "data-activity-attendBox", "activity-box"), n = i.down(u).html(), a = r(e, "data-activity-detailFlag", "").attr("data-activity-detailFlag");
      if (k[a] = {}, i.down(p).attr("data-activity-rseat", i.down(u).attr("rseat")), "去看看" != n) {
        for (var c = 0, h = d.activityDetailLi.length; h > c; c++) {
          var m = Q.$(d.activityDetailLi[c]), f = m.attr("data-activity-detailId");
          if (a == f) {
            t.attrAssignment(a, m);
            break
          }
        }
        var U = new l, V = {authcookie: o.getAuthCookies(), agent_type: 1};
        if (!o.isLogin()) {
          var g = 0;
          return s.openLoginWindow(null, function () {
            U.get(V, function (e) {
              if ("A00000" == e.code)for (var t = 0; t < e.data.activities.length; t++)k[a].id == e.data.activities[t] && (i.down(p).html("已关注"), i.addClass("notify-main-over"), g = 1)
            }), window.setTimeout(function () {
              "0" == g && t.attendActivity(e)
            }, 1e3)
          }), !1
        }
        var y = o.getUid(), b = {
          notice_id: k[a].id,
          rev_uids: y,
          notice_type: k[a].activityType,
          authcookie: o.getAuthCookies(),
          title: k[a].title,
          details: k[a].content,
          start_time: Math.round(new Date(k[a].start.replace(/-/g, "/")).getTime() / 1e3),
          end_time: Math.round(new Date(k[a].stop.replace(/-/g, "/")).getTime() / 1e3),
          correlation_url: k[a].href,
          correlation_id: k[a].activityVideoId,
          qipu_id: k[a].activityVideoId,
          agent_type: 1
        };
        U.set(b, function () {
        }), t.changeState(e, k[a].id)
      }
    }, attrAssignment: function (e, t) {
      k[e].id = t.attr("data-activity-detailId"), k[e].title = t.attr("data-activity-detailTitle"), k[e].start = t.attr("data-activity-detailStartTime"), k[e].stop = t.attr("data-activity-detailEndTime"), k[e].content = t.attr("data-activity-detailContent"), k[e].href = t.attr("data-activity-datailHref"), k[e].tvName = t.attr("data-activity-detailTvname"), k[e].pingback = t.attr("data-activity-detailpingback"), k[e].activityVideoId = t.attr("data-activity-detailActivityVideoId"), k[e].activityType = t.attr("data-activity-detailActivityType")
    }, compareTime: function (e, t, i, n) {
      var a, r = "", o = new Date, s = new Date(e.replace(/-/g, "/")), l = new Date(t.replace(/-/g, "/")), d = s.getTime() - o.getTime(), c = Math.floor(d / 864e5), h = s.getDay(), m = Math.floor(d / 36e5), u = Math.floor(d / 6e4), p = s.getMonth(), f = s.getDate(), U = s.getHours(), V = s.getMinutes(), g = l.getHours(), y = l.getMinutes();
      switch (9 > p && (p = "0" + (p + 1)), 10 > f && (f = "0" + f), 10 > U && (U = "0" + U), 10 > V && (V = "0" + V), 10 > g && (g = "0" + g), 10 > y && (y = "0" + y), "0" == n ? a = U + ":" + V + "-" + g + ":" + y : "1" == n && (a = U + ":" + V), h) {
        case 0:
          h = "日";
          break;
        case 1:
          h = "一";
          break;
        case 2:
          h = "二";
          break;
        case 3:
          h = "三";
          break;
        case 4:
          h = "四";
          break;
        case 5:
          h = "五";
          break;
        case 6:
          h = "六"
      }
      return c > 0 || m > 12 || s.getDate() > o.getDate() && p > o.getMonth() ? "0" == n ? r = p + "-" + f + " 本周" + h + " " + a + "，" + i : "1" == n && (r = p + "-" + f + " " + " 周" + h + " " + a + "，" + i) : m > 0 && 12 > m ? r = a + " " + i + " " + m + "小时后开始" : u > 0 ? r = a + " " + i + " " + u + "分钟后开始" : o.getTime() > s.getTime() && o.getTime() < l.getTime() ? "0" == n ? r = a + " " + i + " " + "正在进行中..." : "1" == n && (r = i + " " + "正在进行中...") : o.getTime() > l.getTime() && (r = "活动已结束 "), r
    }
  }), i.exports = h
});
define("../../kit/parentByProp", [], function (e, t, i) {
  i.exports = function (e, t, i) {
    for (var n = null; e;)if (e = e.parent()) {
      var a = e.attr(t);
      if (i && a == i || !i && a) {
        n = e;
        break
      }
    }
    return n
  }
});
define("../../interfaces/activityNoticeInterface", ["../kit/remoteInterface"], function (e, t, i) {
  var n = e("../kit/remoteInterface");
  i.exports = Q.Class("activityInterface", {
    construct: function () {
      this._remoteInterface = new n({
        getActivityId: {url: "http://notice.iqiyi.com/apis/msg/activities/get_msg.action"},
        setActivityId: {url: "http://notice.iqiyi.com/apis/msg/activities/send_msg.action"}
      })
    }, methods: {
      get: function (e, t) {
        e = e || {}, this._remoteInterface.send({
          dataType: "jsonp",
          ifname: "getActivityId",
          param: e,
          cors: !0,
          method: "GET",
          withCredentials: !0
        }, function (i) {
          t && t(i, e)
        })
      }, set: function (e, t) {
        e = e || {}, this._remoteInterface.send({
          dataType: "jsonp",
          ifname: "setActivityId",
          param: e,
          cors: !0,
          method: "GET",
          withCredentials: !0
        }, function (i) {
          t && t(i, e)
        })
      }
    }
  })
});
define("../../action/scrollV2", ["../components/action/widget", "../model/scrollModelV2", "../view/scrollViewV2", "../kit/eventPlugin"], function (e, t, i) {
  var n = e("../components/action/widget"), a = e("../model/scrollModelV2"), r = e("../view/scrollViewV2"), o = e("../kit/eventPlugin"), s = {};
  i.exports = Q.Class("ScrollV2", {
    extend: n, plugins: [new o], construct: function (e) {
      e = e || {}, this.disable = !1, e.model = e.model || new a(e), e.view = e.view || new r(e);
      var t = e.name;
      t && (s[t] = this), this.callsuper(e)
    }, statics: {
      getScroll: function (e) {
        return s[e]
      }
    }, properties: {
      events: {
        moving: function (e) {
          this.fire({type: "moving", data: e.data})
        }, private_mousemove: function (e) {
          var t = e.data.endY - e.data.startY;
          t && (this._model.moveBar(t), this.syncGet())
        }, finishmove: function () {
          var e = this._model.get();
          this.fire({type: "finishmove", data: {margin: e.margin, rate: e.rate, dis: e.margin - this._model.startMove}})
        }, disable: function () {
          this.disable = !0, this.fire({type: "disable"})
        }, enable: function () {
          this.disable = !1, this.fire({type: "enable"})
        }, mousescroll: function (e) {
          this.scroll(-e.data.delta)
        }
      }
    }, methods: {
      scroll: function (e) {
        e && !this.disable && (this._model.moveBar(e), this.syncGet())
      }, reset: function (e) {
        e = e || {};
        var t = 0;
        e.keepPos ? (t = this._model.get().margin, this._model.restLength == t && (t = 9999999)) : this._model.margin = 0, this._model.targetLength = e.targetLength || this._view._doms.scrollContent.height(), this._model.contentLength = e.contentLength || this._view._doms.scrollWrap.height(), this._model.reset(this), this._view.init(this), e.keepPos && this._model.moveBar(t), this._view.moveBar(this._model.get())
      }, check: function (e) {
        e = e || {};
        var t = this._model.margin || 0, i = this._model.targetLength || 0;
        this._model.targetLength = e.targetLength || this._view._doms.scrollContent.height(), this._model.contentLength = e.contentLength || this._view._doms.scrollWrap.height(), this._model.reset(this), this._view.init(this), this._model.moveBar(t * (i / this._model.targetLength)), this._view.moveBar(this._model.get())
      }
    }
  })
});
define("../../model/scrollModelV2", ["../components/model/model"], function (e, t, i) {
  var n = e("../components/model/model");
  i.exports = Q.Class("ScrollModel", {
    extend: n, construct: function (e) {
      this.callsuper(), this.contentLength = e.doms.scrollWrap.height(), this.targetLength = e.doms.scrollContent.height(), e.scrollWrapHeight && (this.contentLength = e.scrollWrapHeight), this.dis = 0, this.scrollBarLength = 0, this.contentPos = 0, this.moveDis = 0, this.margin = 0, this.maxRate = e.maxRate || 2, this.minRate = e.minRate || 1, this.minLength = e.minLength || 50, this._data = {}
    }, methods: {
      init: function (e) {
        return this.dis = this.targetLength - this.contentLength, this.dis <= 0 ? e.notice({type: "disable"}) : (e.notice({type: "enable"}), this.calc(), void 0)
      }, get: function () {
        return {margin: this.margin, moveDis: this.moveDis, rate: this.rate, contentPos: this.contentPos}
      }, calc: function () {
        this.scrollBarLength = this.dis < this.contentLength - this.minLength ? this.contentLength - this.dis : this.minLength, this.restLength = this.contentLength - this.scrollBarLength, this.rate = this.dis / (this.contentLength - this.scrollBarLength)
      }, moveBar: function (e) {
        this.margin + e <= 0 ? (this.moveDis = -this.margin, this.margin = 0, this.contentPos = 0) : this.margin + e >= this.restLength ? (this.moveDis = this.restLength - this.margin, this.margin = this.restLength, this.contentPos = -this.restLength * this.rate) : (this.moveDis = e, this.margin = this.margin + e, this.contentPos = this.contentPos - e * this.rate)
      }, reset: function (e) {
        this.init(e), this.margin = 0, this.moveDis = 0, this.contentPos = 0
      }
    }
  })
});
define("../../view/scrollViewV2", ["../components/view/widgetView", "../kit/anim"], function (e, t, i) {
  var n = e("../components/view/widgetView");
  e("../kit/anim"), i.exports = Q.Class("ScrollViewV2", {
    extend: n, construct: function (e) {
      this.movingClass = e.movingClass || "", this.hasBindEvent = !1, this.contentMoveCss = e.contentMoveCss || "marginTop", this.disableWheel = e.disableWheel || !1, this.wheeldelta = e.wheeldelta || 3, this.callsuper(e), this.isScroll = !1, this._doms.widget.attr("data-class-scrolldis") && (this.inClass = this._doms.widget.attr("data-class-scrollenable"), this.outClass = this._doms.widget.attr("data-class-scrolldis"))
    }, methods: {
      init: function (e) {
        e.disable ? this._doms && this._doms.scrollBar.css("height", 0) : (this.callsuper("init", e), this.scrollInfo = {}, this._bindEvent(), this._doms.scrollBar.css("height", e._model.scrollBarLength + "px"))
      }, update: function (e) {
        this.moveBar(e), this._ctrl.notice({type: "moving", data: e})
      }, moveBar: function (e) {
        var t = this._doms;
        Q.$("#pps-widget-dramalist") && (e.margin = e.margin + 15), t.scrollBar.css("marginTop", e.margin + "px"), t.scrollContent.css(this.contentMoveCss, e.contentPos + "px")
      }, destroy: function () {
        this._unbindEvent()
      }, _bindEvent: function () {
        if (!this.hasBindEvent) {
          var e = this, t = this.disSelect.bind(this);
          e.inClass && (e._doms.widget.on("mouseenter", function () {
            e._doms.scrollBar.removeClass(e.outClass), e._doms.scrollBar.addClass(e.inClass)
          }), e._doms.widget.on("mouseleave", function () {
            e.isScroll || (e._doms.scrollBar.removeClass(e.inClass), e._doms.scrollBar.addClass(e.outClass))
          })), Q.$(document).on("mousemove", function (t) {
            if (e.isScroll && !e._ctrl.disable) {
              var i = t || window.event;
              e.scrollInfo.endX = i.clientX, e.scrollInfo.endY = i.clientY, e._ctrl.notice({
                type: "private_mousemove",
                data: e.scrollInfo
              }), e.scrollInfo.startX = i.clientX, e.scrollInfo.startY = i.clientY, Q.event.get(t).stop()
            }
          }), e._doms.scrollWrap.on("DOMMouseScroll", function (t) {
            e.disableWheel || e._wheel(t)
          }), e._doms.scrollWrap.on("mousewheel", function (t) {
            e.disableWheel || e._wheel(t)
          });
          var i, n;
          Q.browser.iPad && (e._doms.scrollWrap.on("touchstart", function (e) {
            i = e.touches[0].pageY
          }), e._doms.scrollWrap.on("touchmove", function (t) {
            Q.event.get(t).preventDefault();
            var n = t.targetTouches[0].pageY;
            e._ctrl.scroll(i - n)
          }), e._doms.scrollBar.on("touchstart", function (e) {
            n = e.touches[0].pageY
          }), e._doms.scrollBar.on("touchmove", function (t) {
            Q.event.get(t).preventDefault();
            var i = t.targetTouches[0].pageY;
            e._ctrl.scroll(i - n)
          })), e._doms.scrollBar.on("mousedown", function (i) {
            if (!e._ctrl.disable) {
              e.isScroll = !0, e._ctrl._model.startMove = e._ctrl._model.margin, Q.$(document).on("selectstart", t), e.movingClass && e._doms.scrollBar.addClass(e.movingClass);
              var n = i || window.event;
              e.scrollInfo.startX = n.clientX, e.scrollInfo.startY = n.clientY, e.scrollInfo.clickStartX = n.clientX, e.scrollInfo.clickStartY = n.clientY
            }
            Q.event.get(i).stop()
          }), e._doms.scrollBar.on("selectstart", function (e) {
            Q.event.get(e).stop()
          }), Q.$(document).on("mouseup", function (i) {
            var n = i || window.event;
            e.isScroll && !e._ctrl.disable && (e.scrollInfo.clickEndX = n.clientX, e.scrollInfo.clickEndY = n.clientY, e._ctrl.notice({
              type: "finishmove",
              data: e.scrollInfo
            }), e.movingClass && e._doms.scrollBar.removeClass(e.movingClass), e.isScroll = !1, Q.$(document).un("selectstart", t), e.inClass && (e._doms.scrollBar.removeClass(e.inClass), e._doms.scrollBar.addClass(e.outClass)))
          }), this.hasBindEvent = !0
        }
      }, _wheel: function (e) {
        var t = this;
        Q.event.get(e).preventDefault();
        var i = e || window.event, n = 0, a = t.wheeldelta;
        n = "Mac" == Q.browser.getOS() ? i.wheelDelta ? i.wheelDelta / a : 0 - i.detail / a : i.wheelDelta ? i.wheelDelta / a : 0 - i.detail / a;
        var r = 0;
        n && (n > 0 ? r = "up" : -0 > n && (r = "down"), this._ctrl.notice({
          type: "mousescroll",
          data: {act: r, event: e, delta: n}
        }))
      }, setWheelDelta: function (e) {
        this.wheeldelta = e
      }, disSelect: function (e) {
        Q.event.get(e).preventDefault()
      }, disable: function () {
        this._doms.scrollBar.hide()
      }
    }
  })
});
define("../../action/navMessageFloaterItem", ["./item", "./messageRouter"], function (e, t, i) {
  var n = e("./item"), a = e("./messageRouter");
  i.exports = Q.Class("NavMessageFloaterItem", {
    extend: n, construct: function (e) {
      this.callsuper(e)
    }, methods: {
      syncGet: function (e) {
        var t = this._model.get(e), i = this._view.formatData(t.data);
        return Q.object.extend({html: a.getParsedHtml(i, t.data.systime || 0), formatData: i}, t)
      }
    }, properties: {
      events: {
        onClick: function (e) {
          this.fire({type: "click", data: Q.object.extend(this, e.data)})
        }
      }
    }
  })
});
define("../../view/navMessageFloaterItemView", ["./itemView", "../action/pcCheckbox", "../kit/mousePosListener", "../action/messageRouter", "../kit/parentByProp", "../kit/userInfo"], function (e, t, i) {
  var n = e("./itemView");
  e("../action/pcCheckbox");
  var a = e("../kit/mousePosListener");
  e("../action/messageRouter");
  var r = e("../kit/parentByProp"), o = e("../kit/userInfo");
  i.exports = Q.Class("NavMessageFloaterItemView", {
    extend: n, construct: function (e) {
      this.callsuper(e), this._doms = e.doms
    }, methods: {
      update: function (e) {
        if (void 0 !== e.doms && (this._doms && this.unbindEvents(), this._doms = e.doms, e.doms && this.bindEvents()), this._setSelect(e.select), void 0 !== e.doms) {
          var t = e.doms.con;
          if (!Q.browser.IE) {
            var i = t.top(), n = t.height(), o = t.left(), s = t.width(), l = a.pos;
            l.x >= o && l.x <= o + s && l.y >= i && l.y <= i + n && this.onConHoverOver()
          }
          var d = this._ctrl._model.get().data.status, c = this;
          if (0 === d) {
            var h = null, m = function () {
              if (0 === d && !c._ctrl._model.get().data.changingState) {
                var e = r(t, "data-navmessagefloater-elem", "tabbody").parent(), i = e.top(), n = i + e.height() + 3, a = t.top(), o = a + t.height(), s = t.parent();
                s.parent().isInScreen() && a >= i && n >= o ? h || (h = setTimeout(function () {
                  h = null, c._ctrl._model.get().data.changingState = !0, c._ctrl.notice({
                    type: "onClick",
                    data: {
                      successCb: function () {
                        c._ctrl._model.get().data.changingState = !1
                      }, failCb: function () {
                        c._ctrl._model.get().data.changingState = !1
                      }
                    }
                  })
                }, 500)) : h && (clearTimeout(h), h = null)
              }
            }, u = ["navMessageFloaterTabChange", "updateRecordsShow", "navMessageFloaterScroll"];
            u.forEach(function (e) {
              Q.event.customEvent.on(e, function () {
                m()
              })
            }), m()
          }
        }
      }, bindEvents: function () {
        if (this.callsuper("bindEvents"), this._conClickHandler || (this._conClickHandler = this.onConClick.bind(this)), this._conHoverOverHandler || (this._conHoverOverHandler = this.onConHoverOver.bind(this)), this._conHoverOutHandler || (this._conHoverOutHandler = this.onConHoverOut.bind(this)), this._touchBodyHandler || (this._touchBodyHandler = this._onTouchBody.bind(this)), this._doms) {
          var e = this, t = this._doms.con, i = t.parent();
          if (this._initScrollBar = function () {
              var e = 0, n = !1, a = i.height() - 1, o = t.attr("wrapperheight");
              if (a > o) {
                t.css("display", "block");
                var s = t.down("[data-navmessagefloater-elem=scrollbarhandle]"), l = Q.$(document);
                s.css("height", o / a * o + "px");
                var d = parseInt(i.css("marginTop"), 10);
                s.css("top", -1 * d - o / a * d + "px"), parseInt(s.css("height"), 10);
                var c = "mousedown", h = "mousemove", m = "mouseup";
                Q.browser.iPad && (c = "touchstart", h = "touchmove", m = "touchend");
                var u = function (t) {
                  t = Q.event.get(t), t.preventDefault(), l.un(h), l.on(h, f), n = !0, e = t.clientY, Q.browser.iPad && (e = t.changedTouches[0].clientY)
                }, p = function (e) {
                  var t = e * a / o, n = (parseInt(i.css("marginTop"), 10) || 0) - t;
                  n > 0 && (n = 0), -1 * n > a - o && (n = o - a), i.css("marginTop", n + "px"), s.css("top", -1 * n - o / a * n + "px"), Q.event.customEvent.fire({
                    type: "navMessageFloaterScroll",
                    data: {}
                  })
                }, f = function (t) {
                  if (n) {
                    t = Q.event.get(t);
                    var i = t.clientY;
                    Q.browser.iPad && (i = t.changedTouches[0].clientY), p(i - e), e = i
                  }
                }, U = function () {
                  l.un(h), n = !1
                }, V = function (e) {
                  p(e * o / a)
                };
                s.on(c, u), l.on(m, U);
                var g = r(i, "data-navmessagefloater-elem", "body");
                g.un("mousewheel"), g.on("mousewheel", function (e) {
                  e = Q.event.get(e), e.preventDefault();
                  var t = e.wheelDelta ? e.wheelDelta / 120 : 0 - e.detail / 3, n = Math.abs(parseInt(i.css("marginTop"), 10)), a = i.children(), r = 0, s = 0;
                  if (0 > t)for (var l = 0; l < a.length; l++) {
                    var d = Q.$(a[l]);
                    if (!d.attr("data-navmessagefloater-elem") && (s = d.height(), r += s, r > n))break
                  } else for (var c = a.length - 1; c >= 0; c--) {
                    var h = Q.$(a[c]);
                    if (!h.attr("data-navmessagefloater-elem") && (s = h.height(), r += s, r + n + o > i.height()))break
                  }
                  t > 0 ? V(-1 * s) : 0 > t && V(s)
                })
              }
            }, "scrollbar" != t.attr("data-navmessagefloater-elem")) {
            var n = "mouseenter";
            Q.browser.iPad ? (n = "touchstart", Q.$("body").on("touchstart", e._touchBodyHandler)) : t.on("mouseleave", e._conHoverOutHandler), t.on("click", e._conClickHandler), t.on(n, e._conHoverOverHandler)
          } else {
            i.parent().isInScreen() && (this._initScrollBar(), this._hasInit = !0);
            var a = ["navMessageFloaterTabChange", "updateRecordsShow"];
            a.forEach(function (t) {
              Q.event.customEvent.on(t, function () {
                i.parent().isInScreen() && !e._hasInit && (e._initScrollBar(), e._hasInit = !0)
              })
            })
          }
        }
      }, unbindEvents: function () {
        if (this.callsuper("unbindEvents"), this._doms) {
          var e = this._doms.con, t = "mouseenter";
          Q.browser.iPad ? (t = "touchstart", Q.$("body").un("touchstart", this._touchBodyHandler)) : this._conHoverOutHandler && e.un("mouseleave", this._conHoverOutHandler), this._conClickHandler && e.un("click", this._conClickHandler), this._conHoverOverHandler && e.un(t, this._conHoverOverHandler)
        }
      }, onConClick: function (e) {
        if (!o.isLogin()) {
          var t = this._ctrl._model.get().data, i = t.type, n = this._doms.con;
          e = Q.event.get(e);
          var a = Q.$(e.target);
          if (a.attr("subscribe"))return;
          if (i && "true" != n.attr("marked")) {
            n.attr("marked", "true");
            var r = t.dataUrl;
            o.isLogin() && (r = "");
            var s = null;
            if ("A" == (a[0].tagName || "").toUpperCase())s = a; else {
              var l = Q.$(a.parent("a"));
              l && (s = l)
            }
            s && s.attr("href") ? (r = s.attr("href"), "_blank" == s.attr("target") ? r = "" : e.preventDefault()) : e.preventDefault();
            var d = Q.fn.emptyMethod;
            "markread" == a.attr("j-delegate") && (a.html(a.attr("hovertext")), r = "", d = function () {
              n.removeAttr("marked"), a.html(a.attr("hoverouttext"))
            }), this._ctrl.notice({type: "onClick", data: Q.object.extend({href: r, failCb: d}, e)})
          }
        }
      }, onConHoverOver: function () {
        if (this._ctrl._model.get().data.type) {
          var e = this._doms.con, t = e.down("[j-delegate=content]");
          e.addClass("nav_pop_item-hover"), t && t.addClass("hover");
          var i = e.down("[j-delegate=markread]");
          i && i.html(i.attr("hoverovertext"))
        }
      }, onConHoverOut: function () {
        if (this._ctrl._model.get().data.type) {
          var e = this._doms.con, t = e.down("[j-delegate=content]");
          e.removeClass("nav_pop_item-hover"), t && t.removeClass("hover"), this._ctrl._model.get().data;
          var i = e.down("[j-delegate=markread]");
          i && i.html(i.attr("hoverouttext"))
        }
      }, _onTouchBody: function (e) {
        var t = Q.$(Q.event.get(e).target), i = this._doms.con;
        i.contains(t) || this.onConHoverOut(e)
      }
    }
  })
});
define("../../action/pcCheckbox", ["../kit/easyEventPlugin", "../components/action/adapter", "../model/pcCheckboxModel", "../view/pcCheckboxView"], function (e, t, i) {
  var n = e("../kit/easyEventPlugin"), a = e("../components/action/adapter"), r = e("../model/pcCheckboxModel"), o = e("../view/pcCheckboxView"), s = "pcCheckbox";
  Q.event.customEvent, new Q.ic.InfoCenter({moduleName: s}), i.exports = Q.Class(s, {
    extend: a,
    plugins: [new n],
    construct: function (e) {
      return this.widgetId = s + (Math.random() + "").slice(2), e = e || {}, e.constructor === Q.element.Element && (e = {doms: {box: e}}), this.box = e.doms.box, this.binder = e.doms.binder, this.box ? (e.data = Q.object.extend({
        name: this.box.attr("data-pccheckbox-name"),
        value: this.box.attr("data-pccheckbox-value")
      }, e.data), e.opts = Q.object.extend({
        selectedClass: this.box.attr("data-pccheckbox-selectedclass"),
        disabledClass: this.box.attr("data-pccheckbox-disabledclass")
      }, e.opts), e.model = e.model || new r(e), e.view = e.view || new o(e), this.callsuper(e), this.init(), void 0) : null
    },
    properties: {
      events: {
        click: function () {
          this.value(!this.value())
        }
      }, isActive: !1
    },
    methods: {
      init: function () {
        this.render(), this.bindEvent(), this.bind()
      }, bindEvent: function () {
      }, name: function (e) {
        return this._model.name(e)
      }, value: function (e) {
        var t = this._model.value();
        return this._model.value(e) === e && t !== e && (this._view.update(e), this.fire("change", {
          origin: t,
          curr: e
        })), this._model.value()
      }, check: function (e) {
        return this.value(e)
      }, render: function () {
        return this._view.update(this._model.value()), this
      }, disable: function () {
        return this._view.able(!1), this
      }, enable: function () {
        return this._view.able(!0), this
      }, bind: function (e) {
        if (e = e || this.binder) {
          this.binder = Q.$(e);
          var t = this;
          this.binder.on("change", function () {
            t.value(t.binder[0].checked)
          }), this.on("change", function (e) {
            t.binder[0].checked = e.curr
          }), this.value(this.binder[0].checked)
        }
        return this
      }
    }
  })
});
define("../../kit/easyEventPlugin", ["./eventPlugin"], function (e, t, i) {
  var n = e("./eventPlugin");
  new Q.ic.InfoCenter({moduleName: "EasyEventPlugin"});
  var a = Q.Class("EasyEventPlugin", {
    extend: n, construct: function () {
      var e = this.on;
      this.on = function (t, i) {
        var n = this;
        i && e.call(n, t, function (e) {
          return i.call(n, e.data)
        })
      };
      var t = this.fire;
      this.fire = function (e, i) {
        t.call(this, {type: e, data: i})
      }
    }
  });
  i.exports = a
});
define("../../model/pcCheckboxModel", ["../components/model/model"], function (e, t, i) {
  var n = e("../components/model/model");
  new Q.ic.InfoCenter({moduleName: "pcCheckboxModel"}), i.exports = Q.Class("pcCheckboxModel", {
    extend: n,
    construct: function (e) {
      this._data = e.data || {}, this._data.value = this._data.value || !1, this._data.name = this._data.name || ""
    },
    methods: {
      checkName: function (e) {
        return "[object String]" === Object.prototype.toString.call(e)
      }, name: function (e) {
        return this.checkName(e) && (this._data.name = e), this._data.name
      }, value: function (e) {
        return void 0 !== e && (this._data.value = !!e), this._data.value
      }
    }
  })
});
define("../../view/pcCheckboxView", ["../components/view/view"], function (e, t, i) {
  var n = e("../components/view/view");
  new Q.ic.InfoCenter({moduleName: "pcCheckboxView"}), i.exports = Q.Class("pcCheckboxView", {
    extend: n,
    construct: function (e) {
      this._doms = e.doms, this._opts = e.opts || {}, this._opts.selectedClass = this._opts.selectedClass || "selected", this._opts.disabledClass = this._opts.disabledClass || "disabled"
    },
    methods: {
      init: function (e) {
        this._ctrl = e, this.bindEvent()
      }, update: function (e) {
        e ? this._doms.box.addClass(this._opts.selectedClass) : this._doms.box.removeClass(this._opts.selectedClass)
      }, able: function (e) {
        if (void 0 === e) {
          var t = this._doms.box.attr("data-pccheckbox-disabled");
          return !(t && "false" !== t)
        }
        e ? (this._doms.box.removeClass(this._opts.disabledClass), this._doms.box.removeAttr("data-pccheckbox-disabled")) : (this._doms.box.addClass(this._opts.disabledClass), this._doms.box.attr("data-pccheckbox-disabled", "disabled"))
      }, bindEvent: function () {
        var e = this, t = this._ctrl, i = Q.browser.iPad ? "touchstart" : "click";
        this._doms.box.on(i, function () {
          e.able() && t.notice({type: "click"})
        })
      }
    }
  })
});
define("../../kit/mousePosListener", ["../components/action/adapter", "./eventPlugin"], function (e, t, i) {
  var n = e("../components/action/adapter"), a = e("./eventPlugin");
  Q.$(document.body);
  var r = null, o = Q.Class("MousePosListener", {
    extend: n, plugins: [new a], construct: function (e) {
      this.callsuper(e)
    }, statics: {
      getInstance: function () {
        return r || (r = new o, r.init()), r
      }
    }, methods: {
      init: function () {
        this.pos = {x: void 0, y: void 0};
        var e = this;
        Q.$(document).on("mousemove", function (t) {
          t = Q.event.get(t), (t.clientX !== e.pos.x || t.clientY !== e.pos.y) && (e.pos = {
            x: t.clientX,
            y: t.clientY
          }, e.fire({type: "posChange", data: e.pos}))
        })
      }
    }
  });
  i.exports = o.getInstance()
});
define("../../units/pcNavUpload", ["../components/units/pageJob", "../components/action/checkDoms", "../interfaces/ugcBonusInterface", "../kit/userInfo", "../kit/findParent", "../kit/ppsSyncAuthUrl"], function (e) {
  var t = e("../components/units/pageJob"), i = e("../components/action/checkDoms"), n = e("../interfaces/ugcBonusInterface"), a = e("../kit/userInfo"), r = e("../kit/findParent");
  e("../kit/ppsSyncAuthUrl");
  var o, s = "pcNavUpload";
  !(Q.browser.IE6 || Q.browser.IE7 || Q.browser.IE8);
  var l;
  t.create(s, {
    getDependentDoms: function () {
      return o = {
        parent: Q.$("#data-widget-parent"),
        body: Q.$("#data-widget-navuploadfloater"),
        uploadEntry: Q.$("[data-elem=uploadEntry]")
      }
    }, check: function (e) {
      return i(e), !0
    }, _updateCheckShareAttrs: function () {
      var e = a.isLogin(), t = Q.$("#data-widget-parent"), i = t.attr("data-class") || "";
      e && (a.isShareProfitUser(function (e) {
        e && t.removeClass(i)
      }), a.isMediaBigVUser(function (e) {
        var t = o.body.down("[data-elem=navprofile]") || "";
        t && (e ? (t.hasClass("dn") && t.removeClass("dn"), o.body.hasClass("userPic") || o.body.addClass("userPic")) : (o.body.hasClass("userPic") && o.body.removeClass("userPic"), t.hasClass("dn") || t.addClass("dn")))
      }));
      var n = o.body.down("[data-navuploadfloater-elem=zone]");
      n && (e ? n.attr("href", "http://www.iqiyi.com/u/" + a.getUid()) : n.attr("href", "http://www.iqiyi.com/u/channel")), t.addClass(i)
    }, _showPanel: function () {
      setTimeout(function () {
        var e = o.uploadEntry.attr("data-class") || "";
        o.uploadEntry.addClass(e);
        var t = o.body;
        t.css("display", "block"), t.css("opacity", "1"), Q.browser.IE6 && t.css("filter", "")
      }, 0)
    }, _hidePanel: function () {
      var e = o.body;
      e.css("display", "none"), e.css("opacity", "0"), Q.browser.IE6 && e.css("filter", "");
      var t = o.uploadEntry.attr("data-class") || "";
      o.uploadEntry.removeClass(t)
    }, _isPanelHide: function () {
      return "none" == o.body.css("display")
    }, init: function () {
      var e = this, t = Q.event.customEvent;
      this._updateCheckShareAttrs(), t.on("login", e._updateCheckShareAttrs), t.on("logout", e._updateCheckShareAttrs);
      var i = Q.$(document);
      i.delegate("uploadVideo", function (e) {
        var t = "http://up.ipd.pps.tv/upload?type=0";
        if (!a.isLogin())return window.location.href = t, void 0;
        Q.$(e.target);
        var i = a.getAuthCookies(), r = {authcookie: i};
        n.rebaseUserAuthInfo(r, function (e) {
          "A00000" == e.code && (window.location.href = t)
        })
      }, "click"), o.parent.on("mouseleave", function () {
        l = setTimeout(function () {
          e._hidePanel()
        }, 1e3)
      }), o.body.on("mouseenter", function () {
        l && clearTimeout(l), e._showPanel()
      }), i.on("click", function (t) {
        var i = Q.$(t.target || t.currentTarget || t.srcElement);
        return r(i, "#data-widget-parent") && e._isPanelHide() ? (e._showPanel(), void 0) : (e._hidePanel(), l && clearTimeout(l), void 0)
      }), Q.browser.iPad && Q.$("body").on("touchstart", function (t) {
        t = Q.event.get(t);
        var i = t.target;
        o.parent.contains(i) || (e._hidePanel(), l && clearTimeout(l))
      });
      var s = ["navOneShow", "suggestShow", "playHistoryShow", "showUserCenterBox", "pcLoginBoxShow"];
      s.forEach(function (i) {
        t.on(i, function () {
          e._hidePanel()
        })
      })
    }
  }), t.add(s)
});
define("../../interfaces/ugcBonusInterface", ["./config", "../kit/remoteInterface"], function (e, t, i) {
  var n = e("./config"), a = e("../kit/remoteInterface"), r = Q.Class("UgcBonusInterface", {
    construct: function () {
      this._remoteInterface = new a({
        ugcBonusStatistics: {url: n.interfaces.ugcBonusStatistics},
        ugcBonusHistory: {url: n.interfaces.ugcBonusHistory},
        ugcGetPayMent: {url: n.interfaces.getPayment},
        ugcRequestPayment: {url: n.interfaces.requestPayment},
        rebaseUserInfo: {url: n.interfaces.rebaseUserInfo}
      })
    }, methods: {
      getChart: function (e, t) {
        e = e || {};
        var i = {dataType: "jsonp", ifname: "ugcBonusStatistics", param: e};
        this._remoteInterface.send(i, t)
      }, request: function (e, t) {
        e = e || {};
        var i = {dataType: "jsonp", ifname: "ugcBonusHistory", param: e};
        this._remoteInterface.send(i, t)
      }, getPayment: function (e, t) {
        e = e || {};
        var i = {dataType: "jsonp", ifname: "ugcGetPayMent", param: e};
        this._remoteInterface.send(i, t)
      }, requestPayment: function (e, t) {
        e = e || {};
        var i = {dataType: "jsonp", ifname: "ugcRequestPayment", param: e};
        this._remoteInterface.send(i, t)
      }, rebaseUserAuthInfo: function (e, t) {
        e = e || {};
        var i = {dataType: "jsonp", ifname: "rebaseUserInfo", param: e};
        this._remoteInterface.send(i, t)
      }
    }
  });
  i.exports = new r
});
define("../../units/qidanadd", ["../components/units/pageJob", "../components/action/checkDoms", "../kit/userInfo", "../kit/qidan", "../action/qipaLogin", "../action/underframe", "../config/siteDomain"], function (e) {
  var t = e("../components/units/pageJob"), i = "qidanAdd";
  e("../components/action/checkDoms");
  var n = e("../kit/userInfo"), a = e("../kit/qidan"), r = e("../action/qipaLogin");
  e("../action/underframe");
  var o = e("../config/siteDomain");
  t.create(i, {
    getDependentDoms: function () {
      var e = {dependent: Q.$("*[data-widget-qidanadd]")};
      return e
    }, check: function () {
      return Q.browser.iPad ? !1 : !0
    }, init: function () {
      var e = this;
      Q.event.customEvent.on("qidan_add_renderDone", function (t) {
        if (t.data.wrapper) {
          var i = t.data.wrapper.down("[data-widget-qidanadd]");
          e.initWidget(i)
        }
      });
      var t = Q.$("[data-widget-qidanadd]");
      t && this.initWidget(t), e.sourceDesc = {
        later: "收藏",
        vipLater: "收藏。会员/付费视频，可免费观看6分钟",
        added: "成功添加至个人中心我的收藏",
        noLogin: "收藏失败，未登录用户只能保存10条待看记录，马上登录。",
        addFail: "收藏失败，请再试一次"
      }
    }, initWidget: function (e) {
      var t = this;
      e.forEach(function (e) {
        var i = Q.$(e), n = t.getParam(i);
        return n.collectionId || n.tvId || n.albumId || n.sourceId ? (i.on("mouseover", function (e) {
          t.qidanAddHover(e, this)
        }), i.on("mouseout", function (e) {
          t.qidanAddLeave(e, this)
        }), void 0) : !1
      })
    }, addTrigger: function (e) {
      var t = this, i = e.down("[data-qidanadd-ele=sub]");
      i || e.html("AFTERBEGIN", '<p data-qidanadd-ele="sub" class="video_brooch video_brooch-default"></p>'), e.attr("data-qidanadd-in") || (e.attr("data-qidanadd-in", 1), e.down('[data-qidanadd-ele="sub"]').on("click", function (i) {
        t.clickIcon(i, e)
      }))
    }, getParam: function (e) {
      for (var t = ["tvId", "albumId", "channelId", "sourceId", "collectionId"], i = {}, n = 0, a = t.length; a > n; n++) {
        var r = e.attr("data-qidanadd-" + t[n].toLowerCase());
        r && (i[t[n]] = r)
      }
      return i
    }, displayHideIcon: function (e, t) {
      var i = t.down('[data-qidanadd-ele="definition"]');
      i && ("hide" == e ? i.hide() : "show" == e && i.show())
    }, qidanAddHover: function (e, t) {
      if (t = Q.$(t), t.contains(e.relatedTarget || e.fromElement))return !1;
      this.getWenan(t), this.addTrigger(t);
      var i = t.attr("data-qidanadd-hoverclass") || "hover";
      if (!t.hasClass(i)) {
        t.addClass(i), this.displayHideIcon("hide", t);
        var n = t.attr("data-qidanadd-vip"), a = 1 == t.attr("data-qidanadd-episode") ? 1 : 2, r = t.down('[data-qidanadd-ele="sub"]');
        if (r) {
          var o = this.getParam(t), s = r.attr("data-qidanadd-confirmclass") || "video_brooch-confirm";
          this.isExist(a, o) ? (t.attr("data-qidanadd-status", 1), r.addClass(s), r.attr("title", this.desc.added)) : (t.attr("data-qidanadd-status", 0), 1 == n ? r.attr("title", this.desc.vipLater) : r.attr("title", this.desc.later), r.removeClass(s))
        }
      }
    }, qidanAddLeave: function (e, t) {
      if (t = Q.$(t), t.contains(e.relatedTarget || e.toElement))return !1;
      this.displayHideIcon("show", t);
      var i = t.attr("data-qidanadd-hoverclass") || "hover";
      t.removeClass(i)
    }, getWenan: function (e) {
      this.desc = {}, Q.object.extend(this.desc, this.sourceDesc);
      var t = e.attr("data-qidanadd-unaddtip"), i = e.attr("data-qidanadd-addedtip"), n = e.attr("data-qidanadd-exclusive"), a = e.attr("data-qidanadd-zizhi");
      1 == n && 1 != a && (this.desc.later = "全网独播，收藏更好看", this.desc.vipLater = "全网独播，收藏更好看。会员/付费视频，可免费观看6分钟"), t && (this.desc.later = "0" === t ? "" : t), i && (this.desc.added = "0" === i ? "" : i)
    }, addDeleteQidan: function (e) {
      var t = this, i = this.getParam(e);
      i.terminalId = Q.browser.iPad ? 21 : Q.browser.android || Q.browser.iPhone ? 31 : 11, this.getWenan(e);
      var a = 1 == e.attr("data-qidanadd-episode") ? 1 : 2, s = "", l = "", d = e.down('[data-qidanadd-ele="sub"]');
      1 != e.attr("data-qidanadd-status") ? (s = function () {
        e.attr("data-qidanadd-status", 1), d.attr("title", t.desc.added);
        var i = d.attr("data-qidanadd-confirmclass") || "video_brooch-confirm";
        d.addClass(i)
      }, l = function (e) {
        if (e && e.remoteData && (e = e.remoteData), "A01011" == e.code || "A00200" == e.code) {
          if (!n.isLogin()) {
            var c = !1, h = function () {
              c = !0
            }, m = function (e) {
              var t = o.isPPS();
              return Q.object.extend({
                t: 21,
                bstp: 1,
                pf: Q.browser.iPad ? t ? 202 : 201 : t ? 2 : 1,
                p: Q.browser.iPad ? 20 : 10,
                p1: Q.browser.iPad ? 202 : 101,
                block: "body",
                u: Q.cookie.get("QC005") || Q.cookie.get("QC006") || ""
              }, e || {})
            };
            Q.event.customEvent.on("registed", h), r.openLoginWindow({
              btnId: "overlimit",
              from: "favorite"
            }, function () {
              t.handleQidan("add", a, i, s, l), setTimeout(function () {
                Q.event.customEvent.un("registed", h);
                var e = m({
                  t: 20,
                  block: "body",
                  rt: "a",
                  r: c ? "注册" : "登陆",
                  rlink: "javascript:void(0);",
                  rseat: c ? "1409101_5rgst" : "1409101_5lgin"
                });
                Q.log.server(e, "http://msg.71.am/b")
              })
            });
            var u = m({block: "1409101_dltc"});
            return Q.log.server(u, "http://msg.71.am/b"), void 0
          }
          d.attr("title", t.desc.noLogin)
        } else d.attr("title", t.desc.addFail)
      }, t.handleQidan("add", a, i, s, l)) : (s = function () {
        e.attr("data-qidanadd-status", 0), d.attr("title", t.desc.later);
        var i = d.attr("data-qidanadd-confirmclass") || "video_brooch-confirm";
        d.removeClass(i)
      }, this.handleQidan("del", a, i, s))
    }, clickIcon: function (e, t) {
      Q.event.get(e).stop(), t = Q.$(t);
      var i = t.attr("data-qidanadd-collectionid") > 0;
      return n.isLogin() || 1 != t.attr("data-qidanadd-episode") && !i ? (this.addDeleteQidan(t), void 0) : (r.openLoginWindow({from: "favorite"}, function () {
      }), void 0)
    }, handleQidan: function (e, t, i, n, r) {
      "add" == e ? a.addVideo(t, i, n, r) : "del" == e && a.delVideo(t, i, n, r)
    }, isExist: function (e, t) {
      var i = a.get(), n = a.getKey2(t);
      if (n = n.subType + n.subKey, i.keys[n])return !0;
      var r = Q.object.extend({}, t);
      return r.tvId = this.qpIdToVrsId(t.tvId), n = a.getKey2(r), n = n.subType + n.subKey, i.keys[n] ? !0 : !1
    }, qpIdToVrsId: function (e) {
      return 9089999900 >= e ? e / 100 - 9e5 : e
    }
  }), t.add(i)
});
define("../../units/creditRecordV2", ["../config/siteDomain", "../kit/getWebEventID", "../components/units/pageJob", "../kit/userInfo", "../action/creditInfo", "../kit/anim", "../components/action/floater", "../components/view/floaterCustomView", "../interfaces/userEventInterface", "../kit/iframeLocation"], function (e) {
  new Q.ic.InfoCenter({moduleName: "units/creditRecordV2"});
  var t, i, n, a, r, o = e("../config/siteDomain"), s = e("../kit/getWebEventID"), l = e("../components/units/pageJob"), d = e("../kit/userInfo"), c = e("../action/creditInfo"), h = e("../kit/anim"), m = e("../components/action/floater"), u = e("../components/view/floaterCustomView"), p = e("../interfaces/userEventInterface"), f = e("../kit/iframeLocation"), U = Q.plugins.clearSwf, V = [{
    key: "creditBirthday",
    info: "今天是您的生日。爱奇艺祝您生日快乐"
  }, {key: "creditRegisterday", info: "今天是您注册爱奇艺周年纪念日"}, {key: "creditRegister", info: "成功注册爱奇艺"}, {
    key: "creditLogin",
    info: "登录爱奇艺"
  }, {key: "creditVideo", info: "观看视频"}, {key: "creditAdd", info: "签到"}, {
    key: "creditAd",
    info: "观看广告"
  }], g = ['<div class="no-login1114"><div class="no-login1114pop">', '<span class="no-loginarrow"></span>', '<a href="javascript:void(0)" class="shut-btn" data-credit-tip="closebtn"></a>', '<p data-credit-tip="info"></p>', "</div></div>"].join(""), y = 1e3, v = ['<div class="point_add1121">', '<div class="point_add1121_cont">', '<span class="p_aleft"></span>', '<em class="p_aright" data-credit-flytip="info">积分+1</em>', "</div>", "</div>"].join("");
  l.create("creditRecordV2", {
    check: function () {
      return !0
    }, init: function () {
      t = Q.$("#widget-credit") || Q.$("body"), i = t.down("*[data-credit=tip]"), n = t.down("*[data-credit=flytip]"), a = t.down("*[data-widget-score=name]"), r = t.down("*[data-widget-score=score]");
      var e = this;
      e.displayNameFirst = a.css("display"), e.displayScoreFirst = r.css("display"), r.hide(), Q.event.customEvent.on("swf_uploadJiFenResult", function (t) {
        (1 == t || "1" == t) && e.setCreditNum()
      }), Q.event.customEvent.on("login", function () {
        e.numCon && e.numCon.html("加载中..."), U && U.on("ready", function () {
          Q.player.loadSuccess || U.get().uploadJiFen()
        }), window.setTimeout(function () {
          e.setCreditNum()
        }, 1e3), e.changeCreditUrl()
      }), Q.event.customEvent.on("logout", function () {
        e.setCreditNum(), e.changeCreditUrl()
      }), Q.event.customEvent.on("creditNumChanged", function () {
        c.clearInfo(), e.setCreditNum()
      }), window.setTimeout(function () {
        e.getTipInfo({from: "js_login"})
      }, 1e3), Q.event.customEvent.on("qianDaoEnd", function (t) {
        t.data.d.data.creditAdd && e.getTipInfoCallBack({creditSum: t.data.d.data.creditAdd})
      }), Q.event.customEvent.on("showUserCenterBox", function () {
        e.floater && e.floater.hide()
      }), Q.event.customEvent.on("pcUserRegistLoginShow", function () {
        c.clearInfo(), e.setCreditNum(), e.changeCreditUrl()
      }), Q.event.customEvent.on("pcUserBoxDomReady", function () {
        e.numCon = t.down("*[data-credit=topcreditnumber]"), e.linkCon = t.down("*[data-credit=topcreditlink]"), e.setCreditNum(), e.changeCreditUrl(), e.pingbackCon = t.down("*[data-credit-num=pingback]"), e.bindPingBack()
      })
    }, exec: function () {
      var e = this;
      if (d.isLogin()) {
        var t = d.getUid(), i = Q.cookie.get("QC025");
        if (i) {
          var n = i.split("-");
          if (t == n[0]) {
            var a = Q.date.format(new Date, "yyyyMMdd");
            parseInt(a, 10) > parseInt(n[1], 10) && (e.doOftenLoginToSetCookie({uid: t}), e.doOftenLoginAccess(), e.doFromJsLogin())
          } else e.doOftenLoginToSetCookie({uid: t}), e.doOftenLoginAccess(), e.doFromJsLogin()
        } else e.doOftenLoginToSetCookie({uid: t}), e.doOftenLoginAccess(), e.doFromJsLogin()
      }
    }, _getCredit: function (e) {
      var t = this, i = 9999999, n = Q.string.divideNumber(i) + "+";
      d.isLogin() ? c.getBrief(function (a) {
        if (a) {
          var r = a.creditRest > i ? n : Q.string.divideNumber(a.creditRest);
          e && (t.numCon.attr("title", Q.string.divideNumber(a.creditRest)), t.numCon.html(r)), Q.event.customEvent.fire({
            type: "apiCreditBriefInterfaceEnd",
            data: {num: a.creditRest, creditedNum: a.creditExpire, creditSoonNum: a.creditExpireSoon}
          })
        }
      }) : Q.browser.iPad && e ? t.numCon && t.numCon.html("0") : U.on("ready", function () {
        var e = U.get().getJiFen();
        if (t.numCon)if (e) {
          var a = e > i ? n : Q.string.divideNumber(e);
          t.numCon.attr("title", Q.string.divideNumber(e)), t.numCon.html(a)
        } else t.numCon.attr("title", "0"), t.numCon.html("0")
      })
    }, setCreditNum: function () {
      this.numCon ? this._getCredit(!0) : this._getCredit(!1)
    }, changeCreditUrl: function () {
      var e = this.linkCon;
      e && (d.isLogin() ? e.attr("href", "http://www.iqiyi.com/u/jifen?lefttitlesign=credit#type=phtr2divstat20121204&act=pointclk&jsuid=" + Q.cookie.get("QC006") + "&flshuid=" + Q.cookie.get("QC005") + "&ppuid=" + d.getUid()) : e.attr("href", "http://www.iqiyi.com/common/wdjfwzz.html?lefttitlesign=credit#type=phtr2divstat20121204&act=pointclk&jsuid=" + Q.cookie.get("QC006") + "&flshuid=" + Q.cookie.get("QC005") + "&ppuid=" + d.getUid()))
    }, bindPingBack: function () {
      var e = this.pingbackCon;
      e && e.on("click", function (t) {
        t = Q.event.get(t), t.stop(), s(function (t) {
          var i = e.attr("href") + "&weid=" + t;
          f.href(i)
        })
      })
    }, getTipInfo: function () {
      if (d.isLogin())c.getTip(this.getTipInfoCallBack.bind(this)); else {
        var e = this;
        U && U.on && U.on("ready", function () {
          var t = U.get().getJiFen();
          t > 0 && e.getTipInfoCallBack({code: "A00000", data: {creditVideo: t}})
        })
      }
    }, getTipInfoCallBack: function (e) {
      if (e) {
        for (var t = null, o = null, s = 0, l = V.length; l > s; s++)if (o = V[s].key, t = e[o]) {
          i && n && this.showTipTemp({key: o, num: t, info: V[s].info}), n && this.showFlyTip({
            key: o,
            num: e,
            info: V[s].info
          }), a && r && this.showNameAndAcoreTip({key: o, num: e, info: V[s].info});
          break
        }
        this.setCreditNum()
      }
    }, showTipTemp: function (e) {
      if ("creditBirthday" == e.key || "creditRegisterday" == e.key)this.showTip(e); else {
        var t = d.isLogin() ? d.getUid() : "", i = Q.cookie.get("showCreditTip" + t), n = Q.cookie.get("showCreditTipTimes" + t) || 0;
        n = parseInt(n, 10), !i && 5 > n && (Q.cookie.set("showCreditTipTimes" + t, n + 1, {
          expires: 31536e6,
          path: "/",
          domain: o.SITE_DOMAIN
        }), Q.cookie.set("showCreditTip" + t, "true", {
          expires: 864e5 * (5 * Math.random() + 1),
          path: "/",
          domain: o.SITE_DOMAIN
        }), this.showTip(e))
      }
    }, showTip: function (e) {
      d.isLogin() ? (this.showFloater(e), e.key == V[0].key || e.key == V[1].key ? this.tipInfo.html(d.getName() + "，您好，" + e.info + "，并赠送您" + e.num + "个积分，可以用来抽奖、兑换奖品，快去看看吧") : this.tipInfo.html("恭喜您，" + e.info + "获取" + e.num + "个积分，积分可以抽奖、兑换奖品，快去试试运气吧")) : Q.browser.CHROME || (this.showFloater(e), this.tipInfo.html("恭喜您，" + e.info + "获取" + e.num + "个积分，我们帮您暂时保存。登录后可以用积分抽奖、兑换奖品，快去看看吧&nbsp;&nbsp;" + '<a j-delegate="loginscroll" href="javascript:void(0)">请登录</a>'))
    }, showFloater: function () {
      if (this.floater)this.floater.reShow(); else {
        var e = new m({
          view: new u({
            pos: function () {
              return {top: n.top() + n.height() - 2, left: n.left() - 32}
            }, isResize: !0
          })
        });
        e.show({html: g});
        var t = e.getFloater().down("*[data-credit-tip=closebtn]");
        t && t.on("click", this.hideTip.bind(this)), this.floater = e, this.tipInfo = e.getFloater().down("*[data-credit-tip=info]")
      }
      Q.event.customEvent.fire({type: "showCreditTip", data: {}})
    }, hideTip: function (e) {
      Q.event.get(e).stop(), this.floater.hide(), Q.event.customEvent.fire({type: "hideCreditTip", data: {}})
    }, showFlyTip: function (e) {
      if ("creditRegister" == e.key || "creditLogin" == e.key || "creditAdd" == e.key) {
        if (this.fFloater)this.fFloater.reShow(); else {
          var t = this.fTop = 10, i = this.fLeft = -60, a = new m({
            view: new u({
              pos: function () {
                return {top: n.top() + n.height() + t, left: n.left() + i}
              }, noOverflowHidden: !0
            })
          });
          a.show({html: v}), this.fFloater = a, this.flyTipInfo = a.getFloater().down("*[data-credit-flytip=info]")
        }
        var r = 0;
        for (var o in e.num)r += e.num[o];
        this.flyTipInfo.html("积分+" + r), this.anim()
      }
    }, showNameAndAcoreTip: function (e) {
      var t = this;
      ("creditRegister" == e.key || "creditLogin" == e.key || "creditAdd" == e.key) && e.num.creditSum && t.showNameAnim({num: e.num.creditSum})
    }, showNameAnim: function (e) {
      var t = this, i = e.num;
      h({
        elem: a, style: "opacity", from: 1, to: 0, ease: "Linear", duration: 500, done: function () {
          a.hide(), r.html("积分+" + i).css("display", t.displayNameFirst), h({
            elem: r,
            style: "opacity",
            from: 0,
            to: 1,
            ease: "Linear",
            duration: 500,
            done: function () {
              setTimeout(function () {
                h({
                  elem: r, style: "opacity", from: 1, to: 0, ease: "Linear", duration: 500, done: function () {
                    r.hide(), a.css("display", t.displayNameFirst), h({
                      elem: a,
                      style: "opacity",
                      from: 0,
                      to: 1,
                      ease: "Linear",
                      duration: 500
                    })
                  }
                })
              }, 4e3)
            }
          })
        }
      })
    }, anim: function () {
      var e = this;
      h({
        style: "top",
        elem: this.fFloater.getFloater(),
        from: n.top() + n.height() + this.fTop,
        to: n.top(),
        ease: "Linear",
        duration: y,
        done: function () {
          h({
            style: "left",
            elem: e.fFloater.getFloater(),
            from: n.left() + e.fLeft,
            to: n.left(),
            ease: "Linear",
            duration: y,
            done: function () {
              e.fFloater.hide()
            }
          }), h({style: "opacity", elem: e.fFloater.getFloater(), from: 1, to: 0, ease: "Linear", duration: y})
        }
      }), h({style: "opacity", elem: e.fFloater.getFloater(), from: 0, to: 1, ease: "Linear", duration: y})
    }, doFromJsLogin: function () {
      var e = this;
      window.setTimeout(function () {
        e.getTipInfo({from: "js_login"})
      }, 2e3)
    }, doOftenLoginAccess: function () {
      var e = new p;
      e.request({eventid: "first_logon"})
    }, doOftenLoginToSetCookie: function (e) {
      var t = e.uid + "-" + Q.date.format(new Date, "yyyyMMdd");
      Q.cookie.set("QC025", t, {expires: 31536e6, path: "/", domain: o.SITE_DOMAIN})
    }
  }), l.add("creditRecordV2")
});
define("../../action/creditInfo", ["../interfaces/apiCreditInfoInterface", "../kit/userInfo"], function (e, t, i) {
  var n = new Q.ic.InfoCenter({moduleName: "action/creditInfo"}), a = Q.event.customEvent, r = e("../interfaces/apiCreditInfoInterface"), o = [];
  e("../kit/userInfo");
  var s = Q.Class("CreditInfoModel", {
    properties: {}, construct: function () {
      this.creditInfo = null
    }, methods: {
      init: function () {
        o.length = 0, this.bindEvent()
      }, bindEvent: function () {
        a.on("logout", this.doLogout.bind(this))
      }, doLogout: function () {
        this.clearCreditInfo()
      }, checkCreditInfo: function (e, t) {
        this.creditInfo ? e && t && this[t] && this[t](e) : this.getInfoFromInterface(e, t)
      }, clearCreditInfo: function () {
        this.creditInfo = null
      }, setCreditInfo: function (e) {
        this.creditInfo = e
      }, getInfoFromInterface: function (e, t) {
        var i = this;
        if (i.creditInfo)e && e(t ? i[t] : ""); else if (o && o.length)o.push({cb: e, param: t}); else {
          o.push({cb: e, param: t});
          var a = new r;
          a.request({}, function (e) {
            "A00000" == e.code && e.data ? i.setCreditInfo(e.data) : (n.warn("调用接口（http://api.credit.iqiyi/services/credit/navstatus）失败。"), i.clearCreditInfo());
            for (var t; o && o.length > 0;)try {
              var a = o.shift();
              t = "A00000" == e.code ? a.param ? i[a.param] : "" : !1, a.cb && t && t.call(i, a.cb)
            } catch (r) {
              n.log(r)
            }
          })
        }
      }, getSignInStatus: function (e) {
        e(this.creditInfo.signStatus)
      }, getBrief: function (e) {
        e(this.creditInfo.userCredit)
      }, getTip: function (e) {
        e(this.creditInfo.creditTip)
      }
    }
  }), l = new s;
  l.init(), i.exports = {
    getSignInStatus: function (e) {
      return l.checkCreditInfo(e, "getSignInStatus")
    }, getTip: function (e) {
      return l.checkCreditInfo(e, "getTip")
    }, getBrief: function (e) {
      return l.checkCreditInfo(e, "getBrief")
    }, clearInfo: function () {
      return l.clearCreditInfo()
    }
  }
});
define("../../interfaces/apiCreditInfoInterface", ["../kit/remoteInterface", "../kit/userInfo"], function (e, t, i) {
  var n = e("../kit/remoteInterface"), a = e("../kit/userInfo");
  i.exports = Q.Class("CreditInfoInterFace", {
    construct: function () {
      this._remoteInterface = new n({apiCreditInfo: {url: "http://api.credit.iqiyi.com/services/credit/navstatus"}})
    }, methods: {
      request: function (e, t) {
        e = e || {}, e.auth = a.getAuthCookies(), e.cb = "apiCreditInto_" + (new Date).getTime(), this._remoteInterface.send({
          ifname: "apiCreditInfo",
          param: e
        }, function (i) {
          t && t(i, e)
        })
      }
    }
  })
});
define("../../components/view/floaterCustomView", ["./floaterNoCoverView"], function (e, t, i) {
  var n = e("./floaterNoCoverView");
  i.exports = Q.Class("FloaterCustomView", {
    ns: Q.view, extend: n, construct: function (e) {
      this.callsuper(e), this._opt = e || {}
    }, methods: {
      adjustPosition: function () {
        if (this._opt.pos) {
          var e = this._opt.pos();
          this._elem.css("top", e.top + "px"), this._elem.css("left", e.left + "px")
        }
        if (this._opt.boxSize) {
          var t = this._opt.boxSize();
          this._elem.css("width", t.width + "px"), this._elem.css("height", t.height + "px")
        }
        this._opt.isFlag && (this._elem.css("width", "100%"), this._elem.css("height", "100%"))
      }, pos: function (e) {
        this._opt.pos = e
      }
    }
  })
});
define("../../components/view/floaterNoCoverView", ["./floaterView"], function (e, t, i) {
  var n = e("./floaterView");
  i.exports = Q.Class("FloaterNoCoverView", {
    ns: Q.view, extend: n, construct: function (e) {
      e = e || {}, this.callsuper(e)
    }, methods: {
      showCover: function () {
      }, hideCover: function () {
      }, hidePlayer: function () {
      }, showPlayer: function () {
      }
    }
  })
});
define("../../interfaces/userEventInterface", ["../kit/remoteInterface", "../config/siteDomain"], function (e, t, i) {
  var n = e("../kit/remoteInterface"), a = e("../config/siteDomain");
  i.exports = Q.Class("UserEventInterFace", {
    construct: function () {
      this._remoteInterface = new n({userEventData: {url: "http://api.credit." + a.SITE_DOMAIN + "/services/user/event"}})
    }, methods: {
      request: function (e, t) {
        e = e || {}, e.eventid = e.eventid || "sign_up", e.pid = e.pid || "0", e.cid = e.cid || "0", e.cb = "varName_userEventData", this._remoteInterface.send({
          ifname: "userEventData",
          param: e
        }, function (e) {
          t && t(e)
        })
      }
    }
  })
});
define("../../units/thirdPartNoLogin", ["../components/units/pageJob", "../components/action/checkDoms", "../components/action/floater", "../components/view/floaterView", "../kit/userInfo", "../interfaces/thirdPartRegistInterface", "../action/qipaLogin"], function (e) {
  var t = e("../components/units/pageJob");
  e("../components/action/checkDoms");
  var i = e("../components/action/floater"), n = e("../components/view/floaterView"), a = e("../kit/userInfo"), r = e("../interfaces/thirdPartRegistInterface"), o = e("../action/qipaLogin"), s = "thirdPartNoLogin", l = "<div class='login-quick' style='width:462px;' data-thirdpart-message='floaterBox'><div class='login-quick-hd'><a class='pop-closeBtn' style='cursor:pointer;' data-thirdpart-message='close' rseat='1504012_4'>×</a><p class='quick-hd-tit'>登录爱奇艺，悦享品质生活</p></div><div class='login-quick-main'><div class='login-q-name'><p>您正在使用<span class='q-nameColor' data-thirdpart-message='source'></span>登录</p><p class='q-userPic'><img data-thirdpart-message='pic' src='http://www.qiyipic.com/common/fix/headicons/male-70.png'></p><p class='q-userName' data-thirdpart-message='name'></p></div><div class='login-quick-fd'><div class='q-fd-btn'><a style='cursor:pointer;' class='site-btn site-btn-green' data-thirdpart-message='login' rseat='1504012_2'>立即登录</a></div><p class='bind-emailAndPhone'><a style='cursor:pointer;' rseat='1504012_3' data-thirdpart-message='bind'>绑定手机&gt;</a></p></div></div></div>", d = null, c = "http://passport.iqiyi.com/pages/thirdparty/bind_account.action", h = window.location.href, m = {
    authcookie: a.getAuthCookies(),
    agent_type: 1
  };
  t.create(s, {
    getDependentDoms: function () {
    }, check: function () {
      return !0
    }, init: function () {
      var e = this;
      Q.event.customEvent.on("thirdTypeBind", function (t) {
        "1" == t.data.type ? e.createfloater(t.data.icon, t.data.type, t.data.name) : window.location.href = c + "?href=" + h
      }), Q(document).delegate("[data-thirdpart-message=close]", "click", function () {
        d.destroy(), d = null
      }), Q(document).delegate("[data-thirdpart-message=bind]", "click", function () {
        window.location.href = c + "?href=" + h
      }), Q(document).delegate("[data-thirdpart-message=login]", "click", function () {
        e.floaterLogin()
      })
    }, createfloater: function (e, t, a) {
      var r = this;
      if (Q.$("#qipaLoginIfr") && o.closeLoginWindow(), !d) {
        d = new i({view: new n({isResize: !0, zIndex: 4850})}), d.show({html: l}), r.pingbackShow();
        var s = Q.$("[data-thirdpart-message=pic]"), c = Q.$("[data-thirdpart-message=source]"), h = Q.$("[data-thirdpart-message=name]");
        s && "null" != e && s.attr("src", e), c && "1" == t && c.html("百度帐号"), h && a && h.html(a)
      }
    }, floaterLogin: function () {
      h.indexOf("/pages/register/index.action") > -1 && (h = -1 != h.indexOf("pps.tv") ? "http://www.pps.tv/" : "http://www.iqiyi.com/");
      var e = {authcookie: a.getAuthCookies(), agent_type: 1, fromurl: h}, t = new r;
      t.login(e, function (e) {
        window.location.href = e.data.redirect
      })
    }, pingbackShow: function () {
      var e = {
        t: "21",
        pf: 1,
        p: 10,
        p1: 101,
        p2: "1_10_101",
        jsuid: Q.cookie.get("QC005"),
        u: Q.cookie.get("QC005"),
        pu: Q.cookie.get("P00003"),
        block: "1504012_1"
      };
      Q.object.extend(e, m), Q.log.server(e, "http://msg.71.am/b")
    }
  }), t.add(s)
});
define("../../interfaces/thirdPartRegistInterface", ["../kit/remoteInterface", "../config/siteDomain", "../kit/rsa", "../kit/fdlKit"], function (e, t, i) {
  var n = e("../kit/remoteInterface"), a = e("../config/siteDomain"), r = e("../kit/rsa"), o = a.getDomain(), s = e("../kit/fdlKit");
  i.exports = Q.Class("thirdPartRegisterInterface", {
    construct: function () {
      this._remoteInterface = new n({
        mobileRegister: {url: "http://kylin." + o + "/validate"},
        emailRegister: {url: "https://passport.iqiyi.com/apis/thirdparty/bind_account.action"},
        setLogin: {url: "https://passport.iqiyi.com/apis/thirdparty/login_by_token.action"}
      })
    }, methods: {
      mobileRegister: function (e, t) {
        var i = this;
        e = e || {}, e.passwd = r.rsaFun(e.passwd), e.server = "BEA3AA1908656AABCCFF76582C4C6660", e.url_src = "/apis/thirdparty/bind_account.action?", e.bird_src = "bfc434ba2fa1457f8c42f824ff26aa7d", s.getToken(e, function (e) {
          "A00000" === e.code ? i._remoteInterface.send({
            dataType: "jsonp",
            param: e.param,
            ifname: "mobileRegister",
            cors: !0,
            withCredentials: !0,
            domain: o
          }, function (e) {
            t && t(e)
          }) : t && t(e)
        })
      }, emailRegister: function (e, t) {
        e = e || {}, e.passwd = r.rsaFun(e.passwd), this._remoteInterface.send({
          dataType: "jsonp",
          ifname: "emailRegister",
          param: e,
          cors: !0,
          method: "GET",
          withCredentials: !0
        }, function (i) {
          t && t(i, e)
        })
      }, login: function (e, t) {
        e = e || {}, this._remoteInterface.send({
          dataType: "jsonp",
          ifname: "setLogin",
          param: e,
          cors: !0,
          method: "GET",
          withCredentials: !0
        }, function (i) {
          t && t(i, e)
        })
      }
    }
  })
});
define("../../units/thirdPartyLogin", ["../components/units/pageJob", "../components/action/checkDoms", "../kit/thirdPartLogin"], function (e) {
  var t = e("../components/units/pageJob"), i = e("../components/action/checkDoms"), n = e("../kit/thirdPartLogin"), a = "thirdPartyLogin";
  t.create(a, {
    getDependentDoms: function () {
      return {}
    }, check: function () {
      return i(this.getDependentDoms()), !0
    }, init: function () {
      Q.$(document).delegate("authLoginBtn", function (e) {
        Q.event.get(e.event).preventDefault();
        var t = Q.event.get(e), i = Q.$(t.target), a = i.attr("data-sourceId");
        if (a) {
          var r = i.attr("href");
          n.show(a, r)
        }
      })
    }, exec: function () {
    }
  }), t.add(a)
});
define("../../units/userInfoCenterMailSuggest", ["../components/units/pageJob", "../components/action/suggestCore", "../action/mailSuggest", "../model/mailSuggestModel", "../view/mailSuggestView", "../model/staticMailSuggestModel", "../components/action/input", "../components/model/inputModel", "../components/view/inputView", "../components/action/menu", "../components/model/menuModel", "../components/view/menuView", "../kit/accountHistory"], function (e) {
  new Q.ic.InfoCenter({moduleName: "units/userInfoCenterMailSuggest"});
  var t = e("../components/units/pageJob"), i = e("../components/action/suggestCore"), n = e("../action/mailSuggest"), a = e("../model/mailSuggestModel");
  e("../view/mailSuggestView");
  var r = e("../model/staticMailSuggestModel"), o = e("../components/action/input"), s = e("../components/model/inputModel"), l = e("../components/view/inputView"), d = e("../components/action/menu"), c = e("../components/model/menuModel"), h = e("../components/view/menuView"), m = e("../kit/accountHistory"), u = function (e) {
    return new o({model: new s, view: new l({doms: {input: e}})})
  }, p = function (e, t) {
    var i = (t ? ['<ul class="mailType-list">', "{{#items}}", "{{#desc}}", '<li data-index="{{index}}" data-mailsuggest-elem="item">{{desc}}</li>', "{{/desc}}", "{{#mail}}", '<li data-index="{{index}}" data-mailsuggest-elem="item" title="{{mail}}">', '<span class="userLong">{{mail}}</span>', Q.browser.iPad ? "" : '<a href="javascript:;" j-delegate="removehistory" data-account="{{mail}}" ', Q.browser.iPad ? "" : 'class="sEmail-closeBtn">×</a>', "</li>", "{{/mail}}", "{{/items}}", "</ul>"] : ['<ul class="mailType-list">', "{{#items}}", "{{#desc}}", '<li data-index="{{index}}" data-mailsuggest-elem="item">{{desc}}</li>', "{{/desc}}", "{{#mail}}", '<li data-index="{{index}}" data-mailsuggest-elem="item">{{mail}}</li>', "{{/mail}}", "{{/items}}", "</ul>"]).join("");
    return new d({model: new c, view: new h({doms: {wrapper: e}, tpl: i})})
  }, f = function (e, t, i, o, s) {
    var l = s ? new r({
      mails: m.get(),
      max: e.attr("data-mail-max") ? parseInt(e.attr("data-mail-max"), 10) : 3
    }) : new a({
      mails: ["qq.com", "163.com", "126.com", "sina.com", "sina.cn", "hotmail.com", "gmail.com", "yahoo.cn", "139.com"],
      prompt: "请选择或继续输入...",
      max: e.attr("data-mail-max") ? parseInt(e.attr("data-mail-max"), 10) : 4
    });
    return new n({
      model: l,
      inputObject: t,
      menuObject: i,
      referenceElement: e.attr("data-mail-refresh") ? e : e.parent(),
      autoPos: o
    })
  }, U = function (e, t, n) {
    var a = "true";
    t || (t = document.createElement("div"), t.className = "mailType-box", document.body.insertBefore(t, null), t = Q.$(t), a = "false"), Q.event.customEvent.on("hideUserCenterBox", function () {
      r.blur(), l.hide()
    }), Q.event.customEvent.on("showPlayHistoryBox", function () {
      r.blur(), l.hide()
    }), Q.event.customEvent.on("showUserCenterBox", function () {
      r.blur(), l.hide()
    }), Q.event.customEvent.on("showUpdateRecordBox", function () {
      r.blur(), l.hide()
    }), Q.event.customEvent.on("pcUserRegistLoginShow", function () {
      r.blur(), l.hide()
    }), Q.event.customEvent.on("bindAccountWrapperShow", function () {
      r.blur(), l.hide()
    }), Q.$("body").on("click", function (t) {
      t = Q.event.get(t), t.target != e[0] && l.hide()
    }), t.on("click", function (t) {
      if (!l.disabled) {
        t = Q.event.get(t), t.stop();
        var i = Q.$(t.target);
        if ("li" !== i[0].nodeName.toLowerCase()) {
          if ("a" === i[0].nodeName.toLowerCase())return;
          if (i = i.parent(), "li" !== i[0].nodeName.toLowerCase())return
        }
        var n = i.attr("data-index"), a = o.getItemByIndex(parseInt(n, 10));
        a && "false" != a.canselected && (e.value(a.mail), r.blur(), l.hide(), Q.event.customEvent.fire({
          type: "mailSuggestHide",
          data: {input: e}
        }))
      }
    }), t.on("mouseover", function (e) {
      var t = Q.$(Q.event.get(e).target);
      if ("li" === t[0].nodeName.toLowerCase() || (t = t.parent(), "li" === t[0].nodeName.toLowerCase())) {
        var i = t.attr("data-index"), n = o.getItemByIndex(parseInt(i, 10));
        n && "false" != n.canselected && (l.disabled || l.focus(parseInt(i, 10)))
      }
    });
    var r = u(e), o = p(t, n), s = f(e, r, o, a, n), l = new i({viewObject: s});
    return l.init(), n && (s.getData("", function (e) {
      o.redraw(e), o.hide()
    }), Q.event.customEvent.on("logout", function () {
      var e = m.get();
      s.setList(e)
    }), t.delegate("removehistory", function (e) {
      Q.event.get(e.event).preventDefault(), m.remove(Q.$(e.target).attr("data-account")), l.viewObject._model._mails = m.get(), setTimeout(function () {
        r.fire({type: "focusin"}).fire({type: "input", data: {after: ""}})
      }, 0)
    })), l
  };
  t.create("userInfoCenterMailSuggest", {
    check: function () {
      return !0
    }, init: function () {
      Q.event.customEvent.on("pcUserRegDomReady", function () {
      }), Q.event.customEvent.on("pcUserLoginDomReady", function (e) {
        var t = e.data.input || e.data.wrapper.down("*[data-elem=emailInput]"), i = U(t, e.data.wrapper, !0), n = U(t, e.data.wrapper), a = function (e) {
          var a = t.value();
          a ? (i.disable(e), n.enable(a, e)) : (n.disable(e), i.enable(a, e))
        };
        n.disable();
        var r = {13: "enter", 27: "esc", 37: "left", 38: "up", 39: "right", 40: "down", 9: "tab"};
        t.on("keydown", function (e) {
          e = Q.event.get(e), e.keyCode + ""in r || setTimeout(function () {
            a(!0)
          }, 50)
        }), n._input.on("input", function () {
          t.value() || a(!0)
        }), t.on("focus", function () {
          a(!0)
        }), Q.event.customEvent.on("pcLoginBoxShow", function () {
          n.show(), n.hide(), i.show(), i.hide()
        }), Q.event.customEvent.on("loginInputBegin", function (e) {
          e.data.input[0] !== t[0] && i.hide()
        })
      })
    }, exec: function () {
    }
  }), t.add("userInfoCenterMailSuggest")
});
define("../../components/action/suggestCore", ["./nonMVCWidget"], function (e, t, i) {
  var n = e("./nonMVCWidget");
  i.exports = Q.Class("SuggestCore", {
    extend: n, construct: function (e) {
      e = e || {}, this.callsuper(e), this.viewObject = e.viewObject, this._input = this.viewObject.getInput(), this._menu = this.viewObject.getMenu()
    }, methods: {
      init: function () {
        this.initEvt()
      }, bind: function (e, t, i) {
        this._binds = this._binds || [], e.on(t, i), this._binds.push({elem: e, event: t, callback: i})
      }, enable: function (e, t) {
        this.disabled && this.initEvt();
        var i = this;
        return this.viewObject.getData(e, function (e) {
          i._menu.redraw(e), t && i.show(), i.disabled = !1
        }), this
      }, disable: function (e) {
        return e && this.hide(), this.disabled ? this : (this._binds && (this._binds.forEach(function (e) {
          e.elem.un(e.event, e.callback)
        }), this.disabled = !0), this)
      }, initEvt: function () {
        this.bind(this._input, "up", this.prev.bind(this)), this.bind(this._input, "down", this.next.bind(this)), this.bind(this._input, "esc", this.hide.bind(this)), this.bind(this._input, "enter", this.apply.bind(this)), this.bind(this._input, "input", this.input.bind(this)), this.bind(this._input, "tab", this.hide.bind(this)), this.bind(this._input, "focusin", this.show.bind(this)), this.bind(this._menu, "selected", this.selected.bind(this))
      }, show: function () {
        this.viewObject.show()
      }, hide: function () {
        this.viewObject.hide()
      }, apply: function (e) {
        Q.event.get(e.data.evt).stop(), this._menu.apply(), this._input.blur()
      }, prev: function (e) {
        Q.event.get(e.data.evt).stop(), this._menu.prev()
      }, next: function (e) {
        Q.event.get(e.data.evt).stop(), this._menu.next()
      }, focus: function (e) {
        return this.disabled ? this : (this._menu.focus(e), void 0)
      }, selected: function (e) {
        this.viewObject.focus(e.data)
      }, input: function (e) {
        var t = this;
        this.viewObject.input(e.data) && this.viewObject.getData(e.data.after, function (e) {
          t._menu.redraw(e)
        })
      }
    }
  })
});
define("../../action/mailSuggest", ["../components/action/widget", "../model/mailSuggestModel", "../view/mailSuggestView"], function (e, t, i) {
  var n = e("../components/action/widget"), a = e("../model/mailSuggestModel"), r = e("../view/mailSuggestView");
  i.exports = Q.Class("MailSuggest", {
    extend: n, construct: function (e) {
      e = e || {}, e.model = e.model || new a, e.view = e.view || new r(e), this.callsuper(e)
    }, methods: {
      focus: function (e) {
        this._view.focus(e)
      }, input: function () {
        return !0
      }, getData: function (e, t) {
        var i = this._model.set({curStr: e});
        t(i.cacheData)
      }, show: function () {
        this._view.show()
      }, hide: function () {
        this._view.hide()
      }, getInput: function () {
        return this._view._input
      }, getMenu: function () {
        return this._view._menu
      }, fixPos: function () {
        this._view.fixPos()
      }, setList: function () {
        this._model.setList && this._model.setList.apply(this._model, arguments)
      }
    }
  })
});
define("../../model/mailSuggestModel", ["../components/model/model"], function (e, t, i) {
  var n = e("../components/model/model");
  i.exports = Q.Class("MailSuggestModel", {
    extend: n, construct: function (e) {
      e = e || {}, this.callsuper(e), this._mails = e.mails || [], this._max = e.max || 0, this._prompt = e.prompt || "", this._data.curStr = ""
    }, methods: {
      set: function (e) {
        return this.callsuper("set", e), this.assemble(this.parseMail()), this._data
      }, parseMail: function () {
        var e = this._mails.concat(), t = this._data.curStr.match(/(@)(.*)/);
        return t && t[2] && (e = e.filter(function (e) {
          return e.indexOf(t[2]) > -1
        })), this._max && e.length > this._max && (e.length = this._max), e
      }, assemble: function (e) {
        var t = e.concat(), i = this._data.curStr.replace(/@.*/, "");
        t.length && (t = t.map(function (e) {
          return {mail: i + "@" + e, canselected: "true"}
        }), this._data.curStr && this._data.curStr != t[0].mail && t.unshift({
          mail: this._data.curStr,
          canselected: "true"
        }), this._prompt && t.unshift({desc: this._prompt, canselected: "false"}), t.forEach(function (e, t) {
          e.index = t
        })), this._data.cacheData = t
      }
    }
  })
});
define("../../view/mailSuggestView", ["../components/view/widgetView"], function (e, t, i) {
  var n = e("../components/view/widgetView");
  i.exports = Q.Class("MailSuggestView", {
    extend: n, construct: function (e) {
      this._input = e.inputObject, this._menu = e.menuObject, this._reference = e.referenceElement || this._input.getDom(), this.autoPos = e.autoPos || "false"
    }, methods: {
      init: function (e) {
        this.callsuper("init", e)
      }, update: function () {
      }, focus: function (e) {
        var t = this, i = this._menu.getDom().down("*[data-mailsuggest-elem=item]");
        i.removeClass("selected"), i.forEach(function (n, a) {
          a == e.index && (Q.$(i[a]).addClass("selected"), "refresh" != e.ctrl && "focus" !== e.ctrl && t._input.val(e.item.mail))
        }), "apply" == e.ctrl && (this.hide(), Q.event.customEvent.fire({
          type: "mailSuggestHide",
          data: {input: t._input.getDom()}
        }))
      }, show: function () {
        return this._show ? !1 : ("false" === this.autoPos ? this._menu.show(this.getPosotion()) : "true" === this.autoPos && this._menu.show({}), this._show = !0, void 0)
      }, hide: function () {
        if (!this._show)return !1;
        var e = this;
        e._menu.hide(), e._show = !1
      }, fixPos: function () {
        this._menu.pos(this.getPosotion())
      }, getPosotion: function () {
        var e = this._reference, t = e.getPosition(), i = e.width(), n = e.height(), a = function () {
          for (var t, i, n = e; n[0] !== document.body;)i = parseInt(n.css("zIndex"), 10), !isNaN(i) && (void 0 === t || i > t) && (t = i), n = n.parent();
          return t
        }();
        return {width: i + "px", zIndex: (a || 0) + 1, top: t.top + n + "px", left: t.left + "px", position: "absolute"}
      }
    }
  })
});
define("../../model/staticMailSuggestModel", ["../components/model/model"], function (e, t, i) {
  var n = e("../components/model/model");
  i.exports = Q.Class("StaticMailSuggestModel", {
    extend: n, construct: function (e) {
      e = e || {}, this.callsuper(e), this._mails = e.mails || [], this._max = e.max || 0, this._prompt = e.prompt || "", this._data.curStr = ""
    }, methods: {
      set: function (e) {
        return this.callsuper("set", e), this.assemble(this.parseMail()), this._data
      }, setList: function (e) {
        this._mails = e
      }, parseMail: function () {
        var e = this, t = this._mails.slice().filter(function (t) {
          return !e._data.curStr || 0 === t.indexOf(e._data.curStr)
        });
        return this.max && (t = t.slice(0, this.max)), t
      }, assemble: function (e) {
        var t = e.concat();
        t.length && (t = t.map(function (e) {
          return {mail: e, canselected: "true"}
        }), this._prompt && t.unshift({desc: this._prompt, canselected: "false"}), t.forEach(function (e, t) {
          e.index = t
        })), this._data.cacheData = t
      }
    }
  })
});
define("../../components/action/input", ["./widget", "../../kit/eventPlugin"], function (e, t, i) {
  var n = e("./widget"), a = e("../../kit/eventPlugin");
  i.exports = Q.Class("input", {
    extend: n, plugins: [new a], construct: function (e) {
      e = e || {}, this.callsuper(e)
    }, properties: {
      events: {
        ctrlKey: function (e) {
          this.fire({type: e.data.key, data: {evt: e.data.evt}})
        }, checkInput: function (e) {
          var t = this._model.get().cacheStr, i = this.compareValue(t, e.text);
          i || (this._model.set({cacheStr: e.text}), this._fireInput(t, e.text))
        }, focusout: function (e) {
          this.fire({type: "focusout", data: {evt: e.data.evt}})
        }, focusin: function (e) {
          this.fire({type: "focusin", data: {evt: e.data.evt}})
        }
      }
    }, methods: {
      _fireInput: function (e, t) {
        this.fire({type: "input", data: {before: e, after: t}})
      }, val: function (e) {
        return arguments.length && this.syncSet({cacheStr: e}), this._model.get().cacheStr
      }, compareValue: function (e, t) {
        return !(e !== t)
      }, getDom: function () {
        return this._view.getDom()
      }, blur: function () {
        this.getDom()[0].blur()
      }
    }
  })
});
define("../../components/model/inputModel", ["./model"], function (e, t, i) {
  var n = e("./model");
  i.exports = Q.Class("inputModel", {
    extend: n, construct: function (e) {
      e = e || {}, this._data = {cacheStr: e.defaultStr || ""}
    }
  })
});
define("../../components/view/inputView", ["./widgetView"], function (e, t, i) {
  var n = e("./widgetView");
  new Q.ic.InfoCenter({moduleName: "inputView"}), i.exports = Q.Class("inputView", {
    extend: n, construct: function (e) {
      this.callsuper(e), this._keyMap = {
        _13: "enter",
        _27: "esc",
        _37: "left",
        _38: "up",
        _39: "right",
        _40: "down",
        _9: "tab"
      }, this.checkValueTimerId = null, this.checkDelay = e.checkDelay || 250
    }, methods: {
      init: function (e) {
        this.callsuper("init", e), this._initEvt()
      }, update: function (e) {
        this._doms.input.value(e.cacheStr)
      }, _initEvt: function () {
        var e = this, t = this._doms.input;
        t.on("keydown", function (t) {
          var i = Q.event.get(t), n = e._checkRegType(i);
          if (!n)return !1;
          e.checkValueTimerId && clearInterval(e.checkValueTimerId);
          var a = e._keyMap["_" + t.keyCode];
          a ? e._ctrl.notice({
            type: "ctrlKey",
            data: {key: a, evt: t}
          }) : e.checkValueTimerId = setInterval(e._checkValue.bind(e), e.checkDelay)
        }), t.on("focus", function (t) {
          var i = Q.event.get(t), n = e._checkRegType(i);
          return n ? (e.checkValueTimerId && clearInterval(e.checkValueTimerId), e.checkValueTimerId = setInterval(e._checkValue.bind(e), e.checkDelay), e._ctrl.notice({
            type: "focusin",
            data: {evt: t}
          }), void 0) : !1
        }), t.on("blur", function (t) {
          clearInterval(e.checkValueTimerId), e._ctrl.notice({type: "focusout", data: {evt: t}})
        })
      }, _checkValue: function () {
        this._ctrl.notice({type: "checkInput", text: this._doms.input.value()})
      }, getDom: function () {
        return this._doms.input
      }, _checkRegType: function (e) {
        var t = !0, i = Q(e.target).parents("tr");
        if (i.length > 0) {
          var n = i.attr("data-type");
          "phone" === n && (t = !1)
        }
        return t
      }
    }
  })
});
define("../../components/action/menu", ["./widget", "../../kit/eventPlugin"], function (e, t, i) {
  var n = e("./widget"), a = e("../../kit/eventPlugin");
  i.exports = Q.Class("Menu", {
    extend: n, plugins: [new a], construct: function (e) {
      e = e || {}, this.callsuper(e)
    }, properties: {
      events: {
        pre: function () {
          this.pre()
        }, next: function () {
          this.next()
        }, selected: function (e) {
          this.fire({type: "selected", data: e.data})
        }
      }
    }, methods: {
      init: function () {
        this.syncSet({ctrl: "refresh"})
      }, prev: function () {
        this._model.prev(), this.syncGet()
      }, next: function () {
        this._model.next(), this.syncGet()
      }, focus: function (e) {
        this._model.focus(e), this.syncGet()
      }, redraw: function (e) {
        this._model.refresh(e), this.syncGet()
      }, show: function (e) {
        this._view.setStyle(e), this.syncSet({ctrl: "show"})
      }, hide: function (e) {
        this._view.setStyle(e), this.syncSet({ctrl: "hide"})
      }, apply: function () {
        this.syncSet({ctrl: "apply"})
      }, pos: function (e) {
        this._view.setStyle(e)
      }, getDom: function () {
        return this._view._doms.wrapper
      }, getItemByIndex: function (e) {
        return this._model.get().data[e]
      }
    }
  })
});
define("../../components/model/menuModel", ["./model"], function (e, t, i) {
  var n = e("./model");
  i.exports = Q.Class("MenuModel", {
    extend: n, construct: function (e) {
      e = e || {}, this._data = {
        focus: -1,
        total: (e.datas || []).length,
        data: e.datas || [],
        item: null,
        ctrl: "apply"
      }
    }, methods: {
      prev: function () {
        if (this._data.total) {
          var e = arguments, t = this._data.focus;
          if (t > -1) {
            var i = t - 1;
            t = 0 > i ? this._data.total - 1 : i
          } else t = 0;
          this._data.focus = t, this._data.item = this._data.data[t], this._data.ctrl = "prev", "false" === this._data.item.canselected && e.callee.call(this)
        }
      }, next: function () {
        if (this._data.total) {
          var e = arguments, t = this._data.focus;
          if (t > -1) {
            var i = t + 1;
            t = i >= this._data.total ? 0 : i
          } else t = 0;
          this._data.focus = t, this._data.item = this._data.data[t], this._data.ctrl = "next", "false" === this._data.item.canselected && e.callee.call(this)
        }
      }, focus: function (e) {
        if (this._data.total) {
          var t = arguments;
          e %= this._data.total, 0 > e && (e += this._data.total), this._data.focus = e, this._data.item = this._data.data[e], this._data.ctrl = "focus", "false" === this._data.item.canselected && t.callee.call(this)
        }
      }, refresh: function (e) {
        this._data.total = e.length, this._data.data = e, e.length ? (this._data.focus = 0, this._data.item = e[0], "false" === this._data.item.canselected && this.next()) : (this._data.focus = -1, this._data.item = null), this._data.ctrl = "refresh"
      }
    }
  })
});
define("../../components/view/menuView", ["./widgetView"], function (e, t, i) {
  var n = e("./widgetView");
  new Q.ic.InfoCenter({moduleName: "MenuView"}), i.exports = Q.Class("MenuView", {
    extend: n, construct: function (e) {
      this.callsuper(e), this._tpl = e.tpl || ""
    }, methods: {
      update: function (e) {
        "refresh" == e.ctrl && this.draw(e.data), "prev" != e.ctrl && "next" != e.ctrl && "apply" != e.ctrl && "refresh" != e.ctrl && "focus" != e.ctrl || !e.data.length || this._ctrl.notice({
          type: "selected",
          data: {index: e.focus, item: e.item, data: e.data, ctrl: e.ctrl}
        }), "show" == e.ctrl && this.show(e.data), "hide" == e.ctrl && this.hide(e.data)
      }, draw: function (e) {
        this._doms.wrapper.html(Q.plugins.Mustache.render(this._tpl, {items: e})), e.length ? this.show(e) : this.hide(e)
      }, show: function (e) {
        e.length && this._doms.wrapper.css("display", "")
      }, hide: function () {
        this._doms.wrapper.css("display", "none")
      }, setStyle: function (e) {
        for (var t in e)this._doms.wrapper.css(t, e[t])
      }
    }
  })
});
define("../../units/loginNoticeToFlash", ["../components/units/pageJob", "../components/action/checkDoms", "../kit/qiyiPlayer", "../action/qipaLogin", "../kit/userInfo"], function (e) {
  function t(e) {
    var t = r.isLogin(), i = Q.$("#flash");
    e = e || {};
    var n = function () {
      Q.kit.QiyiPlayer.getPlayer("video").setUserLogin({
        P00001: r.getAuthCookies(),
        profileID: Q.cookie.get("P00PRU"),
        profileCookie: Q.cookie.get("P00PRU"),
        source: e.source,
        login: t.toString(),
        passportId: r.getUid(),
        nickname: r.getName()
      })
    };
    i ? i[0].userLogined ? i[0].userLogined(t, r.getUid()) : n() : n()
  }

  var i = e("../components/units/pageJob");
  e("../components/action/checkDoms");
  var n = e("../kit/qiyiPlayer"), a = e("../action/qipaLogin"), r = e("../kit/userInfo"), o = Q.event.customEvent;
  i.create("loginNoticeToFlash", {
    check: function () {
      return !0
    }, exec: function () {
      this.bindEvent()
    }, bindEvent: function () {
      var e = !1;
      n.getPlayer("video").on("showLoginPanel", function (i) {
        a.openLoginWindow({}, function () {
          e = !0, t({source: i.data.source})
        })
      }), o.on("login", function () {
        return e ? (e = !1, void 0) : (t(), void 0)
      }), o.on("logout", function () {
        t()
      })
    }
  }), i.add("loginNoticeToFlash")
});
define("../../units/navControls", ["../components/units/pageJob", "../components/action/checkDoms", "../config/siteDomain", "../kit/anim", "../kit/checkI18nType", "../action/underframe", "../interfaces/getDownloadUrlInterface"], function (e) {
  var t = e("../components/units/pageJob"), i = e("../components/action/checkDoms");
  e("../config/siteDomain"), e("../kit/anim");
  var n = e("../kit/checkI18nType"), a = e("../action/underframe"), r = e("../interfaces/getDownloadUrlInterface"), o = "navControls", s = Q.$("*[data-widget-toplinefloater=blackFloater]"), l = Q.$('*[data-navctrl-elem="underframe"]'), d = Q.$("[data-widget-navctrl-elem=first]"), c = Q.$("[data-widget-navctrl-elem=padfirst]");
  Q.browser.iPad && c && (d = c);
  var h = {
    navWidget: Q.$("[data-widget-navctrl=player]") || Q.$("[data-widget-navctrl=channel]"),
    guide: Q.$("[data-widget-navctrl-elem=guide]"),
    firstnav: d
  }, m = "", u = !1, p = 0, f = 0;
  t.create(o, {
    check: function () {
      return i(h), !0
    }, init: function () {
      this.class_c = "dhGuide_hover";
      var e = Q.$("#ppsGuide");
      e && (this.class_c = "dhBox-hover"), this.timer = null, s || (this.underFrame = new a({elem: h.firstnav}));
      var t = d.down('*[data-widget-getURl="layerDownloadUrl"]');
      t && t.forEach(function (e) {
        var t = Q.$(e), i = {pubarea: t.attr("pubarea"), srcchannel: document.referrer};
        t.attr("href", r.getDownloadUrl(i))
      })
    }, exec: function () {
      var e = this;
      e.bindEvent();
      var t = h.guide.attr("data-showtime") || 500;
      t = 0;
      var i = function (i) {
        p = i.clientX, f = i.clientY, e.timer && (window.clearTimeout(e.timer), e.timer = null), u || (e.showSpreadtime && (window.clearTimeout(e.showSpreadtime), e.showSpreadtime = null), e.showSpreadtime = setTimeout(function () {
          e.showOne(), e.doShowHandler()
        }, t))
      }, n = function () {
        window.clearTimeout(e.timer), e.timer = setTimeout(function () {
          e.hideOne()
        }, 0)
      }, a = function (t) {
        t = t >= 0 ? t : 1e3, window.clearTimeout(e.timer), e.timer = setTimeout(function () {
          e.hideOne()
        }, t)
      }, r = function () {
        u && window.clearTimeout(e.timer)
      };
      h.guide.on("click", function (e) {
        u ? n(e) : i(e)
      }), Q.$(document).on("click", function (e) {
        e = Q.event.get(e);
        var t = e.target;
        !u || h.guide.contains(t) || h.firstnav.contains(t) || n(e)
      }), Q.event.customEvent.on("updateRecordsShow", function () {
        n()
      }), h.guide.on("mouseenter", r), h.guide.on("mouseleave", a), h.firstnav.on("mouseenter", r), h.firstnav.on("mouseleave", a), Q.browser.iPad && Q.$("body").on("touchstart", function (e) {
        e = Q.event.get(e);
        var t = e.target;
        h.guide[0] === t || h.guide.contains(t) || h.firstnav.contains(t) || a(0)
      })
    }, showOne: function () {
      var e = this;
      h.guide.addClass(e.class_c), h.firstnav.css("display", "block"), s ? !Q.browser.iPad && l && l.show() : (e.underFrame.distWidth = -2, e.underFrame.show()), Q.event.customEvent.fire({type: "navOneShow"}), u = !0
    }, hideOne: function () {
      var e = this;
      h.guide.removeClass(e.class_c), h.firstnav.hide(), s ? l && l.hide() : e.underFrame.hide(), u = !1
    }, bindEvent: function () {
      var e = this;
      h.pbParam = {
        block: "A",
        rseat: "daohangfc131213",
        w: Q.page.getWidth(),
        h: Q.page.getHeight(),
        logServerUrl: "http://msg.71.am/b?t=20&pf=1&p=10&p1=101"
      }, h.alist = h.firstnav.down("a"), h.alist && h.alist.length && (h.alist || []).forEach(function (t) {
        var i = Q.$(t);
        i.on("click", function (t) {
          t = Q.event.get(t), t.preventDefault();
          var a = i.attr("href"), r = {
            weid: m,
            block: h.pbParam.block,
            rseat: h.pbParam.rseat,
            mod: n.mod,
            rt: "a",
            r: i.attr("title") || "",
            rlink: a,
            re: h.pbParam.w + "*" + h.pbParam.h,
            clkx: t.clientX,
            clky: t.clientY,
            rn: +new Date
          };
          e.doSendPingback(r), setTimeout(function () {
            location.href = a
          }, 300)
        })
      })
    }, doShowHandler: function (e) {
      e = e || {}, p = e.clientX || p, f = e.clientY || f;
      var t = this;
      m = Q.crypto.md5(Math.floor(999999999 * Math.random()).toString());
      var i = {
        weid: m,
        block: h.pbParam.block,
        rseat: h.pbParam.rseat,
        mod: n.mod,
        rt: "e",
        r: "",
        rlink: "",
        re: h.pbParam.w + "*" + h.pbParam.h,
        clkx: p,
        clky: f,
        rn: +new Date
      };
      t.doSendPingback(i)
    }, doSendPingback: function (e) {
      var t = h.pbParam.logServerUrl;
      t += -1 == t.indexOf("?") ? "?" : "&";
      for (var i in e)e.hasOwnProperty(i) && (t += encodeURIComponent(i) + "=" + encodeURIComponent(e[i]) + "&");
      "&" === t[t.length - 1] && (t = t.slice(0, -1));
      var n = new Image;
      n.src = t
    }
  }), t.add(o)
});
define("../../units/suggest", ["../components/units/pageJob", "../components/action/checkDoms", "../widgets/searchsuggest/searchSuggest", "../widgets/searchsuggest/simpleSearchSuggest", "../widgets/searchsuggest/ppsSearchSuggest", "../widgets/searchsuggest/mall/mallSearchSuggest", "../widgets/searchinput/searchInput", "../kit/getSuggestConfig", "../kit/userInfo", "../kit/parentByProp", "../kit/anim", "../interfaces/locationInterface", "../kit/responsive", "../interfaces/getDownloadUrlInterface"], function (e) {
  var t = e("../components/units/pageJob"), i = e("../components/action/checkDoms"), n = e("../widgets/searchsuggest/searchSuggest"), a = e("../widgets/searchsuggest/simpleSearchSuggest"), r = e("../widgets/searchsuggest/ppsSearchSuggest"), o = e("../widgets/searchsuggest/mall/mallSearchSuggest"), s = e("../widgets/searchinput/searchInput"), l = e("../kit/getSuggestConfig");
  e("../kit/userInfo"), e("../kit/parentByProp");
  var d = e("../kit/anim"), c = new (e("../interfaces/locationInterface")), h = e("../kit/responsive"), m = e("../interfaces/getDownloadUrlInterface"), u = "suggest", p = null;
  t.create(u, {
    getDependentDoms: function () {
      var e = Q.$("[data-widget-suggest=suggest]");
      return e && e.length > 0 && (p = [], e.forEach(function (e) {
        e = Q.$(e), p.push({widget: e, input: e.down("[data-suggest-elem=input]")})
      })), p
    }, check: function (e) {
      return e && e.forEach(function (e) {
        i(e)
      }), !0
    }, init: function () {
      function e(e) {
        var t = Q.event.customEvent, i = "dn";
        p.forEach(function (c, u) {
          var p = c.widget, f = p.down("[data-suggest-elem=body]"), U = p.down("[data-suggest-elem=list]"), V = p.down("[data-suggest-elem=btn]"), g = p.down("[data-suggest-elem=form]"), y = p.down("[data-suggest-elem=container]") || p;
          try {
            var v = '{"call_type":"request", "cmd":"get_app_ver", "cmd_context":"", "cmd_data":""}', b = JSON.parse(window.external.js_app_service(v));
            if (parseFloat(b.cmd_data.ver.split(".").join("")) >= 38152253)return Q.$(".mod_search_header").hide(), void 0
          } catch (k) {
          }
          Q.browser.iPad && c.input.removeAttr("autocomplete"), c.form = g, c.btn = V, c.container = y;
          var x = {doms: c};
          if (f && U) {
            c.body = f, c.list = U, x.doms = c, x.simple = e, Q.object.extend(x, l(p, 0, u));
            var w = n;
            x.nospecshow && (w = a), x.pps && (w = r), "iqiyi-mall" == x.site && (w = o), delete x.nospecshow;
            var _ = new w(x);
            _.init(), window.searchSuggestInited = !0, _.on("show", function () {
              t.fire({type: "suggestShow", data: {}})
            });
            var L = ["navOneShow", "updateRecordsShow", "hideHeaderBoxFromVipHeader", "playHistoryShow", "showUserCenterBox", "pcLoginBoxShow"];
            L.forEach(function (e) {
              t.on(e, function () {
                var e = {visible: !1}, t = _.input.syncGet();
                "none" != p.css("display") && (e.focusIn = !1, t.value || (e.autoFill = !0)), _.syncSet(e)
              })
            });
            var I = p.down("[data-suggest-elem=soguide]"), W = 1, X = 300;
            if (I) {
              var C = I.down(".tip_content"), K = function () {
                var e = 864e5, t = W;
                t = parseInt(Q.cookie.get("QC140") || 0, 10) + 1, Q.cookie.set("QC140", t, {
                  expires: e,
                  path: "/",
                  domain: "iqiyi.com"
                }), new d({
                  elem: Q.$(I.children()[0]),
                  style: "height",
                  from: 38,
                  to: 0,
                  ease: "Linear",
                  duration: X,
                  done: function () {
                    I.addClass(i)
                  }
                })
              }, T = function () {
                function e() {
                  I.hasClass(i) && parseInt(Q.cookie.get("QC140") || 0, 10) < W && (I.removeClass(i), new d({
                    elem: Q.$(I.children()[0]),
                    style: "height",
                    from: 0,
                    to: 38,
                    ease: "Linear",
                    duration: X
                  }))
                }

                function t() {
                  if (Q.PageInfo && Q.PageInfo.respInfo) {
                    var e = Q.PageInfo.respInfo.cnf[Q.PageInfo.respInfo.curLayout];
                    "qypage-980" === e.cls ? C.html("使Mac客户端，看片更有范！") : C.html("使用Mac客户端，拒绝卡顿、发热，看片更有范！")
                  } else"qypage-980" === document.body.className && C.html("使Mac客户端，看片更有范！");
                  setTimeout(function () {
                    K(!0)
                  }, 6e3)
                }

                "Mac" == Q.browser.getOS() && (t(), h.on("bodyClassChange", function () {
                  t()
                }), e())
              };
              I.delegate("close", function () {
                K(!0)
              }), I.delegate("getDownloadUrl", function (e) {
                var t = Q.event.get(e.event);
                t.preventDefault();
                var i = {
                  pubarea: I.down("[j-delegate=getDownloadUrl]").attr("pubarea"),
                  srcchannel: document.referrer
                }, n = m.getDownloadUrl(i);
                window.location.href = n
              }), T()
            }
          } else {
            var E = new s(Q.object.extend(x, l(p, 1, u)));
            E.init()
          }
        })
      }

      var t = (Q.cookie.get("QC005") || "").toUpperCase(), i = t.substr(t.length - 1), u = Q.url.parse(window.location.href);
      "0" != i && "5" != i && "9" != i || "www.iqiyi.com" != u.host || "/" != u.path ? e(!1) : c.request(function (t) {
        var i = t.province, n = t.city;
        "北京" != i && "上海" != i && "广州" != n ? e(!0) : e(!1)
      })
    }
  }), t.add(u)
});
define("../../widgets/searchsuggest/searchSuggest", ["../../action/suggest", "./searchSuggestModel", "./searchSuggestView", "./searchSuggestListModel", "./searchSuggestList", "../../kit/getSearchUrl", "../../action/form", "../../kit/userInfo"], function (e, t, i) {
  var n = e("../../action/suggest"), a = e("./searchSuggestModel"), r = e("./searchSuggestView"), o = e("./searchSuggestListModel"), s = e("./searchSuggestList"), l = e("../../kit/getSearchUrl"), d = e("../../action/form"), c = e("../../kit/userInfo"), h = "input";
  i.exports = Q.Class("SearchSuggest", {
    extend: n, construct: function (e) {
      var t = e.doms, i = t.form, n = t.list, o = e.maxCount, l = e.maxSearchHistoryCount, c = e.searchTarget, h = e.suggestTarget, m = e.layout, u = e.responsive, p = e.pps, f = e.searchType, U = e.from;
      i && (this.form = new d({doms: {form: i}}), this.form.init());
      var V = t.input.value();
      this.keyWords = e.keyWords, this.userValue = V, V ? (e.defaultValue = V, this._inputValue = !0) : (e.defaultValue = V || this._selectKeyWord(e.keyWords).value, this._inputValue = !1), e.body || (e.body = new s({
        doms: {list: n},
        maxCount: o,
        maxSearchHistoryCount: l,
        searchTarget: c,
        layout: m,
        vvfrom: e.vvfrom,
        suggestTarget: h,
        responsive: u,
        searchType: f,
        from: U,
        pps: p,
        simple: e.simple
      })), e.model = new a(e), e.view || (e.view = new r(e)), this.callsuper(e)
    }, methods: {
      init: function () {
        this._setForm(), this.callsuper("init"), this.initSearchInput();
        var e = this;
        Q.event.customEvent.on("changeInputType", function (t) {
          h = t.data.inputType, e._setForm()
        })
      }, fini: function () {
        this.form && this.form.fini(), this.callsuper("fini")
      }, initSearchInput: function () {
        if (this._inputValue) {
          this.syncSet({autoFill: !1, inputValue: this._inputValue});
          var e = this.input;
          e._view._setTextRange(), this.checkUserValueInKeyWord(this.keyWords, this.userValue) || (this.syncSet({visible: !0}), e._model.get().likePlaceHolder = !1, this._setForm(), this.callsuper("onFocusIn"), e._view._setFocusBg(!0))
        }
      }, syncSet: function (e) {
        e.visible === !1 && this.syncGet().visible && this.fire({
          type: "hide",
          data: {}
        }), void 0 !== e.focusIn && (this.input.syncSet({focusIn: e.focusIn}), delete e.focusIn), e.autoFill && (this.input.syncSet({
          value: this._selectKeyWord(this._model.get().keyWords).value.trim(),
          autoFill: !0
        }), delete e.autoFill), e.inputValue && this.input.syncSet({autoFill: !1}), this.callsuper("syncSet", e)
      }, getLinkInfo: function () {
        var e, t = !1, i = this, n = i._model.get(), a = n.body, r = i.input.syncGet(), s = r.value, d = l(s, n.searchType, h, n.from), c = n.searchTarget;
        if (r.autoFill && !i._inputValue) {
          var m = n.keyWords.list[n.keyWords.curSn];
          d = m.href, c = m.target, d || (d = l(m.value, n.searchType, h, n.from), c = n.searchTarget)
        }
        if (a && (a = a._model, a.data && a.data.isZhidahaoSuggest))if (a && a.data && Q.array.isArray(a.data.itemsData) && void 0 !== a.data.curSn) {
          if (t = !0, a.data.curSn > -1)e = i.form.syncGet(), d = e.action || "", c = "_blank"; else for (var u = 0, p = a.data.itemsData; u < p.length; u++)if (s.slice(1) === p[u].name) {
            d = p[u].link || d, c = "_blank";
            break
          }
        } else t = !1;
        return this.form.syncSet({
          isZhidahaoSuggest: o.isZhidahaoSuggest(s),
          zhidaohaoDataReady: t
        }), {isZhidahaoSuggest: o.isZhidahaoSuggest(s), zhidaohaoDataReady: t, href: d, target: c}
      }, _selectKeyWord: function (e) {
        for (var t = e.list, i = Math.floor(Math.random() * t.length), n = 0; n < t.length; n++)if (t[n].selected) {
          i = n;
          break
        }
        return e.curSn = i, t[i].selected = !0, t[i]
      }, checkUserValueInKeyWord: function (e, t) {
        for (var i = e.list, n = 0; n < i.length; n++)if (i[n].value === t)return !0;
        return !1
      }, _setForm: function (e) {
        var t = this.form;
        if (t)if (e)t.syncSet({
          action: e.formatData.href,
          target: e.formatData.target,
          valid: !0
        }); else if (this.input.syncGet().value) {
          var i = this.getLinkInfo();
          t.syncSet({action: i.href, target: i.target, valid: !0})
        } else t.syncSet({valid: !1})
      }, onValueChange: function (e) {
        this._setForm(), this.callsuper("onValueChange", e)
      }, onFocusIn: function (e) {
        var t = this.input, i = t.syncGet();
        i.autoFill && i.focusInClear && t.syncSet({
          value: "",
          autoFill: !1
        }), this._setForm(), this.callsuper("onFocusIn", e)
      }, onFocusOut: function (e) {
        var t = this.input, i = t.syncGet();
        i.value || t.syncSet({
          value: this._selectKeyWord(this._model.get().keyWords).value.trim(),
          autoFill: !0
        }), this._setForm(), this.callsuper("onFocusOut", e)
      }, onHide: function () {
        var e = this.body, t = e.syncGet();
        t.items && t.items.length && e.syncSet({curSn: -1}), this._setForm()
      }, onItemSel: function () {
        this._setForm()
      }, _doSendPingback: function () {
        try {
          var e = this.body.syncGet(), t = e.curSn, i = e.items[t].syncGet(), n = i.data, a = i.formatData.href, r = "3-1";
          if ("so.iqiyi.com" != Q.url.parse(a).host && (r = "3-2"), n.name) {
            var o = {
              t: 5,
              pf: 1,
              p: 10,
              p1: 101,
              c1: n.cid || "",
              s1: 1,
              s2: 6,
              e: n.event_id,
              r: 6,
              u: Q.cookie.get("QC005"),
              pu: c.getUid(),
              a: 0,
              rn: Math.floor((new Date).getTime() * Math.random()),
              pos: i.pos,
              ptype: r,
              target: encodeURIComponent(n.name),
              keyword: encodeURIComponent(i.key)
            }, s = [];
            for (var l in o)s.push(l + "=" + o[l]);
            var d = "http://msg.iqiyi.com/b?" + s.join("&"), h = new Image;
            h.src = d
          }
        } catch (m) {
        }
      }, onSubmit: function (e) {
        this._doSendPingback();
        var t = Q.$(e.data.target).attr("type").toUpperCase(), i = e.data.type.toUpperCase(), n = this.form, a = this.input.syncGet(), r = this.body.syncGet(), o = "";
        if (r.isZhidahaoSuggest && Q.array.isArray(r.itemsData)) {
          for (var s = 0, l = r.itemsData; s < l.length; s++)if (a.value.slice(1) === l[s].name) {
            o = l[s].link;
            break
          }
          o && n.syncSet({action: o, target: "_blank"})
        }
        var d = r.items[r.curSn];
        if (Q.event.customEvent.fire({type: "wholeNetSearch", data: {}}), !n || "BUTTON" == t && "CLICK" == i) {
          var c = null;
          if (d && a.focusIn) {
            var h = d.syncGet();
            c = h.formatData.href, "_self" == h.formatData.target ? window.location.href = c : window.open(c)
          } else if (a.value) {
            var m = this.getLinkInfo();
            c = m.href, "_self" == m.target ? window.location.href = c : window.open(c)
          }
        }
      }, onKeyDown: function (e) {
        var t = e.data.keyCode, i = null, n = null;
        if (37 == t ? (i = 1, n = -1) : 39 == t ? (i = 1, n = 1) : 38 == t ? (i = 0, n = -1) : 40 == t && (i = 0, n = 1), null !== n && null !== i) {
          var a = this.body, r = a.syncGet(), o = r.isZhidahaoSuggest, s = r.curSn, l = null, d = null, c = "";
          if (0 === i) {
            var h = r.items.length;
            s >= 0 && h > s || (s = n > 0 ? -1 : 0), s = (s + n + h) % h, a.syncSet({curSn: s}), l = r.items[s], l && (l.syncSet({curSn: -1}), d = l.syncGet(), o && (c += "@"), c += d.formatData.name.trim(), d.key = c, this.input.syncSet({
              value: c,
              autoFill: !1
            }), this._setForm(d), e.data.preventDefault())
          } else if (l = r.items[r.curSn]) {
            d = l.syncGet();
            var m = d.formatData.len;
            s = d.curSn, void 0 !== m && void 0 !== s && m > 0 && (s >= 0 && m > s || (s = n > 0 ? -1 : 0), s = (s + n + m) % m, l.syncSet({curSn: s}), this._setForm(l.syncGet()), e.data.preventDefault())
          }
        }
      }
    }, properties: {
      events: {
        onHoverOver: function () {
          this._model.set({hoverOver: !0})
        }, onHoverOut: function () {
          this._model.set({hoverOver: !1}), this.input.syncGet().focusIn && !Q.browser.iPad || !this.syncGet().visible || (Q.browser.iPad && this.input.syncGet().focusIn ? this.input._view._doms.input[0].blur() : (this.syncSet({visible: !1}), this.fire({
            type: "hide",
            data: {}
          })))
        }, onHoverOverBtn: function () {
          !this.input.syncGet().focusIn && this.syncGet().visible && (this.syncSet({visible: !1}), this.fire({
            type: "hide",
            data: {}
          }))
        }
      }
    }
  })
});
define("../../action/suggest", ["../components/action/widget", "../view/suggestView", "../model/listModel", "../action/list", "../action/input", "../kit/eventPlugin", "../kit/responsive"], function (e, t, i) {
  var n = e("../components/action/widget"), a = e("../view/suggestView"), r = e("../model/listModel"), o = e("../action/list"), s = e("../action/input"), l = e("../kit/eventPlugin"), d = e("../kit/responsive"), c = {};
  i.exports = Q.Class("Suggest", {
    extend: n, plugins: [new l], construct: function (e) {
      var t = e.doms, i = t.btn, n = t.input, l = t.container, d = e.hoverCls, h = e.focusCls, m = e.defaultValue, u = e.focusInClear, p = e.likePlaceHolder, f = e.focusIn, U = e.focusBg, V = e.placeHolderColor, g = t.list;
      this.body = e.body ? e.body : new o({doms: {list: g}}), this.body.init(), this.input = e.input ? e.input : new s({
        doms: {
          input: n,
          btn: i,
          container: l
        },
        defaultValue: m,
        hoverCls: d,
        focusIn: f,
        focusCls: h,
        focusInClear: u,
        likePlaceHolder: p,
        focusBg: U,
        placeHolderColor: V
      }), this.input.init(), e.model = e.model || new r(e), e.view = e.view || new a(e);
      var y = e.name;
      y && (c[y] ? c[y].push(this) : c[y] = [this]);
      var v = this;
      Q.$(window).on("blur", function () {
        v.syncGet().visible && v.syncSet({visible: !1})
      }), this.callsuper(e)
    }, statics: {
      getSuggest: function (e) {
        return c[e]
      }
    }, methods: {
      init: function () {
        this.bindEvents()
      }, fini: function () {
        this.body.fini(), this.input.fini(), this._view.fini(), this.unbindEvents()
      }, syncGet: function (e) {
        return this._model.get(e)
      }, syncSet: function (e) {
        this._view.update(this._model.set(e))
      }, onSubmit: function () {
      }, onKeyDown: function () {
      }, onFocusIn: function () {
        this.body.asyncGet({key: this.input.syncGet().value})
      }, onFocusOut: function () {
        !this._model.get().hoverOver && this.syncGet().visible && (this.syncSet({visible: !1}), this.fire({
          type: "hide",
          data: {}
        }))
      }, onValueChange: function (e) {
        this.body.asyncGet({key: e.data.value})
      }, onSizeChange: function () {
        this._view.update({sizeChange: !0})
      }, onListReady: function (e) {
        var t = this.syncGet().visible, i = !1;
        e.data.count > 0 && (this.input.syncGet().focusIn || t) && (i = !0), i != t && (this.syncSet({visible: i}), i ? this.fire({
          type: "show",
          data: {}
        }) : this.fire({type: "hide", data: {}}))
      }, onItemSel: function () {
      }, onLayoutChange: function () {
        this.syncSet({visible: !1}), this.body.syncSet({itemsData: []})
      }, onShow: function () {
      }, onHide: function () {
      }, bindEvents: function () {
        var e = this.input, t = this.body;
        this._focusInHandler || (this._focusInHandler = this.onFocusIn.bind(this)), this._focusOutHandler || (this._focusOutHandler = this.onFocusOut.bind(this)), this._valueChangeHandler || (this._valueChangeHandler = this.onValueChange.bind(this)), this._keyDownHandler || (this._keyDownHandler = this.onKeyDown.bind(this)), this._submitHandler || (this._submitHandler = this.onSubmit.bind(this)), this._sizeChangeHandler || (this._sizeChangeHandler = this.onSizeChange.bind(this)), this._listReadyHandler || (this._listReadyHandler = this.onListReady.bind(this)), this._itemSelHandler || (this._itemSelHandler = this.onItemSel.bind(this)), this._layoutChangeHandler || (this._layoutChangeHandler = this.onLayoutChange.bind(this)), this._showHandler || (this._showHandler = this.onShow.bind(this)), this._hideHandler || (this._hideHandler = this.onHide.bind(this)), e.on("focusIn", this._focusInHandler), e.on("focusOut", this._focusOutHandler), e.on("valueChange", this._valueChangeHandler), e.on("keyDown", this._keyDownHandler), e.on("submit", this._submitHandler), t.on("sizeChange", this._sizeChangeHandler), t.on("listReady", this._listReadyHandler), t.on("selItem", this._itemSelHandler), d.addListener(this._layoutChangeHandler), this.on("show", this._showHandler), this.on("hide", this._hideHandler)
      }, unbindEvents: function () {
        var e = this.body, t = this.input;
        this._focusInHandler && t.un("focusIn", this._focusInHandler), this._focusOutHandler && t.un("focusOut", this._focusOutHandler), this._onValueChangeHandler && t.un("valueChange", this._valueChangeHandler), this._keyDownHandler && t.un("keyDown", this._keyDownHandler), this._submitHandler && t.un("submit", this._submitHandler), this._sizeChangeHandler && e.un("sizeChange", this._sizeChangeHandler), this._listReadyHandler && e.un("listReady", this._listReadyHandler), this._itemSelHandler && e.un("selItem", this._itemSelHandler), this._showHandler && this.un("show", this._showHandler), this._hideHandler && this.un("hide", this._hideHandler)
      }
    }, properties: {
      events: {
        onHoverOver: function () {
          this._model.set({hoverOver: !0})
        }, onHoverOut: function () {
          this._model.set({hoverOver: !1}), !this.input.syncGet().focusIn && this.syncGet().visible && (this.syncSet({visible: !1}), this.fire({
            type: "hide",
            data: {}
          }))
        }
      }
    }
  })
});
define("../../view/suggestView", ["../components/view/widgetView", "../action/underframe", "../kit/getBindTool"], function (e, t, i) {
  var n = e("../components/view/widgetView"), a = e("../action/underframe"), r = e("../kit/getBindTool");
  i.exports = Q.Class("SuggestView", {
    extend: n, construct: function (e) {
      this.callsuper(e)
    }, methods: {
      init: function (e) {
        this._ctrl = e, this.update(e._model.get()), this.bindEvents()
      }, update: function (e) {
        this._setVisible(e.visible), e.sizeChange && this._setUnderFrame()
      }, _setVisible: function (e) {
        if (void 0 !== e && this._visible != e) {
          this._visible = e;
          var t = this._doms.body;
          e ? t.show() : t.hide(), this._setUnderFrame()
        }
      }, _setUnderFrame: function () {
        if (this._needUnderFrame())if (this._visible) {
          if (!this._underFrame) {
            var e = this._doms;
            this._underFrame = new a({elem: e.body, target: e.widget})
          }
          this._underFrame.show()
        } else this._underFrame && this._underFrame.hide()
      }, _needUnderFrame: function () {
        for (var e = !1, t = this._ctrl._model.get().ufBrowsers, i = 0; i < t.length; i++)if (Q.browser[t[i]]) {
          e = !0;
          break
        }
        return e
      }, onHoverOver: function () {
        this._ctrl.notice({type: "onHoverOver", data: {}})
      }, onHoverOut: function (e) {
        if (e = Q.event.get(e), Q.browser.iPad) {
          var t = Q.$(e.target);
          if (!t || this._doms.widget.contains(t))return
        }
        this._ctrl.notice({type: "onHoverOut", data: {}})
      }, bindEvents: function () {
        var e = this._doms, t = e.widget;
        this._hoverOverHandler || (this._hoverOverHandler = this.onHoverOver.bind(this)), this._hoverOutHandler || (this._hoverOutHandler = this.onHoverOut.bind(this)), r(t).on("mouseenter", this._hoverOverHandler), r(t).on("mouseleave", this._hoverOutHandler)
      }, unbindEvents: function () {
        var e = this._doms, t = e.widget;
        this._hoverOverHandler && r(t).un("mouseenter", this._hoverOverHandler), this._hoverOutHandler && r(t).un("mouseleave", this._hoverOutHandler)
      }, fini: function () {
        this.unbindEvents()
      }
    }
  })
});
define("../../kit/getBindTool", [], function (e, t, i) {
  function n(e) {
    var t = e[0].uuid;
    return t || (t = Math.floor(2147483648 * Math.random()).toString(36), e[0].uuid = t), o[t] ? o[t] : (this._elem = e, o[t] = this, this.on = function (e, t) {
      "mouseenter" != e && "mouseleave" != e || !r ? this._elem.on(e, t) : "mouseenter" == e ? this._elem.on("touchstart", t) : a.on("touchstart", t)
    }, this.un = function (e, t) {
      "mouseenter" != e && "mouseleave" != e || !r ? this._elem.un(e, t) : "mouseenter" == e ? this._elem.un("touchstart", t) : a.un("touchstart", t)
    }, this)
  }

  var a = Q.$("body"), r = Q.browser.iPad, o = {};
  i.exports = function (e) {
    return new n(e)
  }
});
define("../../action/input", ["../components/action/widget", "../view/inputView", "../model/inputModel", "../kit/eventPlugin"], function (e, t, i) {
  var n = e("../components/action/widget"), a = e("../view/inputView"), r = e("../model/inputModel"), o = e("../kit/eventPlugin"), s = {};
  i.exports = Q.Class("Input", {
    extend: n, plugins: [new o], construct: function (e) {
      e.model = e.model || new r(e), e.view = e.view || new a(e);
      var t = e.name;
      t && (s[t] ? s[t].push(this) : s[t] = [this]), this.callsuper(e)
    }, methods: {
      init: function () {
        this.bindEvents()
      }, fini: function () {
        this._view.fini(), this.unbindEvents()
      }, syncGet: function (e) {
        return this._model.get(e)
      }, syncSet: function (e) {
        this._view.update(this._model.set(e))
      }, bindEvents: function () {
      }, unbindEvents: function () {
      }
    }, statics: {
      getInput: function (e) {
        return s[e]
      }
    }, properties: {
      events: {
        onValueChange: function (e) {
          this._model.set(Q.object.extend({autoFill: !1}, e.data)), this.fire({type: "valueChange", data: e.data})
        }, onFocusIn: function (e) {
          var t = e.data.evt.type.toUpperCase();
          delete e.data.evt, this._model.set(e.data), "CLICK" == t && this.fire({type: "focusIn", data: e.data})
        }, onFocusOut: function (e) {
          this._model.set(e.data), this.fire({type: "focusOut", data: e.data})
        }, onKeyDown: function (e) {
          13 == e.data.keyCode && this.fire({type: "submit", data: e.data}), this.fire({type: "keyDown", data: e.data})
        }, onSubmit: function (e) {
          this.fire({type: "submit", data: e.data})
        }
      }
    }
  })
});
define("../../view/inputView", ["../components/view/widgetView"], function (e, t, i) {
  var n = e("../components/view/widgetView");
  i.exports = Q.Class("InputView", {
    extend: n, construct: function (e) {
      this.callsuper(e)
    }, methods: {
      init: function (e) {
        this._ctrl = e;
        var t = e._model.get();
        this._initDom(t), this.update(t), this.bindEvents()
      }, fini: function () {
        this.unbindEvents()
      }, _initDom: function (e) {
        this._setAutoFill(e.autoFill);
        var t = this._doms.input, i = e.defaultValue.trim();
        t.value(i), this._value = i, this._ctrl._model.set({value: i}), e.focusIn ? t[0].focus() : t[0].blur(), this._focusIn = e.focusIn, this._setTextRange(), this._check = !0, this._setFocusBg(e.focusBg)
      }, update: function (e) {
        this._setAutoFill(e.autoFill), this._setFocusIn(e.focusIn), this._setValue(e.value), this._setFocusBg(e.focusBg)
      }, _setFocusIn: function (e, t) {
        if (void 0 !== e && this._focusIn != e) {
          this._focusIn = e;
          var i = this._doms.input;
          t || (e ? Q.browser.iPad || i[0].focus() : i[0].blur()), this._setFocusBg(e), this._checkValueChange()
        }
      }, _setCheck: function (e) {
        this._check != e && (this._check = e, this._checkValueChange())
      }, _setFocusBg: function (e) {
        if (void 0 !== e && this._focusBg != e) {
          this._focusBg = e, this._ctrl._model._data.focusBg = e;
          var t = this._ctrl._model.get().focusCls, i = this._doms.container;
          i && (e ? i.addClass(t) : i.removeClass(t))
        }
      }, _setAutoFill: function (e) {
        if (void 0 !== e && this._autoFill != e && (this._autoFill = e, this._ctrl._model._data.autoFill = e, this._ctrl._model.get().likePlaceHolder)) {
          var t = this._doms.input;
          e ? t.css("color", this._ctrl._model._data.placeHolderColor) : t.css("color", "")
        }
      }, _setTextRange: function () {
        if (this._focusIn) {
          var e = this._doms.input[0], t = e.value.length;
          if (this._autoFill && this._ctrl._model.get().likePlaceHolder && (t = 0), e.createTextRange) {
            var i = e.createTextRange();
            i.move("character", t), i.collapse(), i.select()
          } else e.setSelectionRange(t, t), e.focus()
        }
      }, _setValue: function (e) {
        if (void 0 !== e && this._value != e) {
          var t = this._check;
          this._setCheck(!1);
          var i = this._doms.input;
          i.value(e), this._value = e, this._setTextRange(), this._setCheck(t)
        }
      }, onFocusIn: function (e) {
        e = Q.event.get(e);
        var t = Q.$(e.target).attr("type").toUpperCase();
        "TEXT" != t && "PASSWORD" != t && "TEXTAREA" != t || this._focusIn || (this._setFocusIn(!0, !0), this._setTextRange(), this._ctrl.notice({
          type: "onFocusIn",
          data: {focusIn: !0, evt: e}
        }))
      }, onFocusOut: function (e) {
        e = Q.event.get(e);
        var t = Q.$(e.target).attr("type").toUpperCase();
        "TEXT" != t && "PASSWORD" != t && "TEXTAREA" != t || !this._focusIn || (this._setFocusIn(!1, !0), this._ctrl.notice({
          type: "onFocusOut",
          data: {focusIn: !1}
        }))
      }, onKeyDown: function (e) {
        e = Q.event.get(e);
        var t = Q.$(e.target).attr("type").toUpperCase();
        if (("TEXT" == t || "PASSWORD" == t || "TEXTAREA" == t) && this._autoFill && this._ctrl._model.get().likePlaceHolder) {
          var i = e.keyCode;
          (37 == i || 39 == i) && e.preventDefault()
        }
        this._ctrl.notice({type: "onKeyDown", data: e})
      }, onValueChange: function () {
        var e = this._doms.input.value().trim();
        if (e != this._value) {
          this._setFocusBg(!0);
          var t = this._ctrl._model.get(), i = t.defaultValue.trim();
          this._autoFill && t.likePlaceHolder && e != i && e.lastIndexOf(i) > 0 ? (this._setAutoFill(!1), e = e.substr(0, e.lastIndexOf(i)), this._setValue(e)) : this._value = e, this._ctrl.notice({
            type: "onValueChange",
            data: {value: e}
          })
        }
      }, onClick: function (e) {
        e = Q.event.get(e);
        var t = e.target, i = Q.$(t).attr("type").toUpperCase();
        if ("TEXT" == i || "PASSWORD" == i || "TEXTAREA" == i)if (this._setFocusBg(!0), this._autoFill && this._ctrl._model.get().likePlaceHolder) {
          this._setAutoFill(!1);
          var n = "";
          this._setValue(n), this._ctrl.notice({type: "onValueChange", data: {value: n}})
        } else this._setFocusIn(!0), this._ctrl.notice({
          type: "onFocusIn",
          data: {focusIn: !0, evt: e}
        }); else this._ctrl.notice({type: "onSubmit", data: e})
      }, onHoverOver: function () {
        this._setFocusBg(!0)
      }, onHoverOut: function () {
        this._focusIn || this._setFocusBg(!1)
      }, _checkValueChange: function () {
        this._check && this._focusIn ? this._checkValueTimer || (this._checkValueTimer = setInterval(this.onValueChange.bind(this), 150)) : this._checkValueTimer && (clearTimeout(this._checkValueTimer), this._checkValueTimer = null)
      }, bindEvents: function () {
        this._focusInHandler || (this._focusInHandler = this.onFocusIn.bind(this)), this._focusOutHandler || (this._focusOutHandler = this.onFocusOut.bind(this)), this._keyDownHandler || (this._keyDownHandler = this.onKeyDown.bind(this)), this._clickHandler || (this._clickHandler = this.onClick.bind(this)), this._hoverOverHandler || (this._hoverOverHandler = this.onHoverOver.bind(this)), this._hoverOutHandler || (this._hoverOutHandler = this.onHoverOut.bind(this)), this._valueChangeHandler || (this._valueChangeHandler = this.onValueChange.bind(this));
        var e = this._doms, t = e.input, i = "change";
        Q.browser.SAFARI && (i = "input"), t.on(i, this._valueChangeHandler);
        var n = [t], a = e.btn;
        a && n.push(a);
        var r = this;
        n.forEach(function (e) {
          e.on("focus", r._focusInHandler), e.on("blur", r._focusOutHandler), e.on("keydown", r._keyDownHandler), e.on("click", r._clickHandler)
        });
        var o = e.container;
        o && (o.on("mouseenter", this._hoverOverHandler), o.on("mouseleave", this._hoverOutHandler)), this._checkValueChange()
      }, unbindEvents: function () {
        var e = this._doms, t = e.input;
        if (this._valueChangeHandler) {
          var i = "change";
          Q.browser.SAFARI && (i = "input"), t.un(i, this._valueChangeHandler)
        }
        var n = [t], a = e.btn;
        a && n.push(a);
        var r = this;
        n.forEach(function (e) {
          r._focusInHandler && e.un("focus", r._focusInHandler), r._focusOutHandler && e.un("blur", r._focusOutHandler), r._keyDownHandler && e.un("keydown", r._keyDownHandler), r._clickHandler && e.un("click", r._clickHandler)
        });
        var o = e.container;
        o && (this._hoverOverHandler && o.un("mouseenter", this._hoverOverHandler), this._hoverOutHandler && o.un("mouseleave", this._hoverOutHandler)), this._checkValueTimer && (clearTimeout(this._checkValueTimer), this._checkValueTimer = null)
      }
    }
  })
});
define("../../model/inputModel", ["../components/model/widgetModel"], function (e, t, i) {
  var n = e("../components/model/widgetModel");
  i.exports = Q.Class("InputModel", {
    extend: n, construct: function (e) {
      this.callsuper(e), this._data = Q.object.extend({
        defaultValue: "",
        value: "",
        focusIn: !1,
        hoverCls: "",
        focusCls: "",
        focusInClear: !1,
        autoFill: !0,
        likePlaceHolder: !0,
        focusBg: !1,
        placeHolderColor: "#999"
      }, e)
    }, methods: {
      init: function (e) {
        this.callsuper("init", e)
      }
    }
  })
});
define("../../widgets/searchsuggest/searchSuggestModel", ["../../model/suggestModel"], function (e, t, i) {
  var n = e("../../model/suggestModel");
  i.exports = Q.Class("SearchSuggestModel", {
    extend: n, construct: function (e) {
      e = Q.object.extend({
        searchTarget: "_blank",
        suggestTarget: "_self",
        keyWords: {list: [], curSn: 0},
        searchType: 0,
        from: ""
      }, e), this.callsuper(e)
    }, methods: {
      init: function (e) {
        this.callsuper("init", e)
      }
    }
  })
});
define("../../model/suggestModel", ["../components/model/widgetModel"], function (e, t, i) {
  var n = e("../components/model/widgetModel");
  i.exports = Q.Class("SuggestModel", {
    extend: n, construct: function (e) {
      this._data = Q.object.extend({visible: !1, hoverOver: !1, ufBrowsers: ["ff"]}, e)
    }, methods: {
      init: function (e) {
        this.callsuper("init", e)
      }
    }
  })
});
define("../../widgets/searchsuggest/searchSuggestView", ["../../view/suggestView"], function (e, t, i) {
  var n = e("../../view/suggestView");
  i.exports = Q.Class("SuggestView", {
    extend: n, construct: function (e) {
      this.callsuper(e)
    }, methods: {
      onHoverOverBtn: function (e) {
        this._ctrl.notice({type: "onHoverOverBtn", data: Q.event.get(e)})
      }, bindEvents: function () {
        this._hoverOverBtnHandler || (this._hoverOverBtnHandler = this.onHoverOverBtn.bind(this)), this._doms.btn.on("mouseenter", this._hoverOverBtnHandler), this.callsuper("bindEvents")
      }, unbindEvents: function () {
        this._hoverOverBtnHandler && this._doms.btn.un("mouseenter", this._hoverOverBtnHandler), this.callsuper("unbindEvents")
      }
    }
  })
});
define("../../widgets/searchsuggest/searchSuggestListModel", ["../../model/listModel", "../../interfaces/suggestV3Interface", "../../interfaces/zhidahaoInterface", "../../interfaces/hotWordInterface", "../../kit/userInfo"], function (e, t, i) {
  var n = e("../../model/listModel"), a = e("../../interfaces/suggestV3Interface"), r = e("../../interfaces/zhidahaoInterface"), o = e("../../interfaces/hotWordInterface"), s = e("../../kit/userInfo"), l = Q.Class("SearchSuggestListModel", {
    extend: n,
    construct: function (e) {
      e = Q.object.extend({
        tpl: "",
        maxSearchHistoryCount: 5,
        maxCount: 10,
        key: "",
        searchTarget: "_blank",
        suggestTarget: "_self",
        layout: 0,
        vvfrom: "",
        responsive: !1,
        cachedSuggestData: {},
        selItemCls: "keyBg",
        searchType: 0,
        from: "",
        simple: !1
      }, e), this.callsuper(e)
    },
    statics: {
      isZhidahaoSuggest: function (e) {
        var t = /^@/gi;
        return t.test(e)
      }
    },
    methods: {
      init: function (e) {
        this.callsuper("init", e)
      }, asyncGet: function (e, t) {
        var i = this, n = e.key;
        this.set({key: n, isZhidahaoSuggest: l.isZhidahaoSuggest(n)}), this.checkTpl(function () {
          var e = null;
          n ? i.getSuggest(n, function (a) {
            e = Q.object.extend({}, i.get()), e.key === n && t(Q.object.extend(e, {
              itemsData: a.map(function (e) {
                return e.searchKey = n, e
              }), curSn: -1
            }))
          }) : i._getSearchHistory(n, function (n) {
            e = Q.object.extend({}, i.get()), e.key || t(Q.object.extend(e, {itemsData: n, curSn: -1}))
          })
        })
      }, getSuggest: function (e, t) {
        var i, n = this, o = new a, l = new r;
        i = /ipad/.test(navigator.userAgent.toLowerCase()) ? 21 : Q.browser.android || Q.browser.iPhone || Q.browser.WP ? 31 : 11;
        var d = 11 == i ? Q.cookie.get("QC005") : Q.cookie.get("QC006"), c = n.get();
        n.data = c;
        var h = {key: e, platform: i, rltnum: c.maxCount, uid: d || "", ppuid: s.getUid() || ""};
        if (c.pps && (h["if"] = "pps"), c.cachedSuggestData[e])t(c.cachedSuggestData[e]); else {
          var m = this;
          "@" === e ? l.request({page: 1, rows: c.maxCount}, function (i) {
            var n = [];
            if ("A00000" == i.code) {
              try {
                n = i.data.list, n.forEach(function (e) {
                  e.isZhidahaoSuggest = !0, e.titleHref = e.link, e.titleTarget = "_blank", e.name = e.accountName, e.logo = e.logo
                })
              } catch (a) {
              }
              m.get().cachedSuggestData[e] = n, t(n)
            } else t(n)
          }) : o.request(h, function (i) {
            var a = [];
            if ("A00000" == i.code) {
              a = i.data;
              try {
                a.forEach(function (e) {
                  e.event_id = i.attributes.event_id, n.data.isZhidahaoSuggest && (e.isZhidahaoSuggest = !0, e.titleHref = e.link, e.titleTarget = "_blank", e.name = e.accountName, e.logo = e.logo)
                })
              } catch (r) {
              }
              m.get().cachedSuggestData[e] = a, t(a)
            } else t(a)
          })
        }
      }, _getSearchHistory: function (e, t) {
        var i = JSON.parse(Q.cookie.get("QC021")) || [];
        i.forEach(function (e) {
          e.search = !0
        });
        var n = this.get(), a = n.maxSearchHistoryCount;
        i.length > a && (i = i.slice(0, a));
        var r = n.maxCount, s = i.length;
        r > s ? (new o).fetch({cb: "cb_" + Math.floor(2147483648 * Math.random()).toString(36)}, function (n) {
          if ("A00000" == n.code) {
            for (var a = 0; a < n.data.length; a++) {
              for (var o = n.data[a].query, s = !1, l = 0; l < i.length; l++)if (i[l].searchKey = e, i[l].key == o) {
                s = !0;
                break
              }
              if (!s && (i.push({key: o, search: !0, searchKey: e}), i.length >= r))break
            }
            t(i)
          }
        }) : t(i)
      }, checkTpl: function (e) {
        this.get().tpl || this.set({
          tpl: {
            varietyTpl: ['<li class="soItem soItem_on clearfix">', "<!--带向下箭头追加class名soItem_on 详细信息显示追加soItem_detail-->", '<a href="{{titleHref}}" target="{{titleTarget}}" class="soRow" rebuildUrl="true">', '<div class="simple clearfix"> <span class="so_txt" ptype="1-2">{{=showName}}<span class="so_channel">（{{cname}}）</span></span> <span class="so_arrow"></span> </div>', "</a>", '<div class="so_detail so_detail-zy" data-suggest-elem="itemcontent">', "<!--综艺显示追加class名so_detail-zy-->", '<p class="mediumNone"><a href="{{titleHref}}" target="{{titleTarget}}" rebuildUrl="true"><img src="{{picture_url}}" style="display:{{imgDisplay}};" height="62" width="100"></a></p>', '<ul class="ulR ulR_pd10">', '<li><a href="{{serie0.href}}" title="{{serie0.title}}" target="{{serie0.target}}" style="display:{{serie0.display}};">{{serie0.name}}</a></li>', '<li><a href="{{serie1.href}}" title="{{serie1.title}}" target="{{serie1.target}}" style="display:{{serie1.display}};">{{serie1.name}}</a></li>', '<li><a href="{{serie2.href}}" title="{{serie2.title}}" target="{{serie2.target}}" style="display:{{serie2.display}};">{{serie2.name}}</a></li>', "</ul>", "</div>", "</li>"].join(""),
            movieTpl: ['<li class="soItem soItem_on clearfix"> <a href="{{titleHref}}" target="{{titleTarget}}" class="soRow" rebuildUrl="true">', '<div class="simple clearfix"> <span class="so_txt" ptype="1-2">{{=showName}}<span class="so_channel">（电影）</span></span> <span class="so_arrow"></span> </div>', "</a>", '<div class="so_detail so_detail-movie" data-suggest-elem="itemcontent">', "<!--电影显示追加class名so_detail-movie-->", '<p><a href="{{titleHref}}" target="{{titleTarget}}" rebuildUrl="true"><img src="{{picture_url}}" height="62" width="100"></a></p>', '<ul class="ulR ulR_pd10">', '<li class="l-dy"><span notjump="true">导演：</span>{{=director}}</li><span notjump="true" class="movieYear" style="display:{{yearDisplay}};">{{year}}</span>', '<li><span notjump="true">主演：</span>{{=main_actor}}</li>', '<li class="watchBtn"><a class="btn_new btn_green_s" target="{{playTarget}}" href="{{playHref}}"><span class="left_pd">立即观看</span></a></li>', "</ul>", "</div>", "</li>"].join(""),
            tvTpl: ['<li class="soItem soItem_on clearfix"> <a href="{{titleHref}}" target="{{titleTarget}}" class="soRow" rebuildUrl="true">', '<div class="simple clearfix"> <span class="so_txt" ptype="1-2">{{=showName}}<span class="so_channel">（{{cname}}）</span></span> <span class="so_arrow"></span> </div>', "</a>", '<div class="so_detail so_detail-dsj" data-suggest-elem="itemcontent">', "<!--电影显示追加class名so_detail-dsj-->", '<p><a href="{{titleHref}}" target="{{titleTarget}}" rebuildUrl="true"><img src="{{picture_url}}" height="62" width="100"></a></p>', '<ul class="ulR ulR_pd10">', '<li><span notjump="true">导演：</span>{{=director}}</li>', '<li><span notjump="true">主演：</span>{{=main_actor}}</li>', '<li class="watchBtn">', '<ul class="jujiArea">', "<li>{{=seriesHtml}}</li>", "</ul>", "</li>", "</ul>", "</div>", "</li>"].join(""),
            cartoonTpl: ['<li class="soItem soItem_on clearfix"> <a href="{{titleHref}}" target="{{titleTarget}}" class="soRow" rebuildUrl="true">', '<div class="simple clearfix"> <span class="so_txt" ptype="1-2">{{=showName}}<span class="so_channel">（{{cname}}）</span></span> <span class="so_arrow"></span> </div>', "</a>", '<div class="so_detail so_detail-dsj" data-suggest-elem="itemcontent">', "<!--电影显示追加class名so_detail-dsj-->", '<p><a href="{{titleHref}}" target="{{titleTarget}}" rebuildUrl="true"><img src="{{picture_url}}" height="62" width="100"></a></p>', '<ul class="ulR ulR_pd10">', '<li><span notjump="true">地区：{{region}}</span></li>', '<li><span notjump="true">类型：{{video_type}}</span></li>', '<li class="watchBtn">', '<ul class="jujiArea" style="display:{{seriesDisplay}};">', "<li>{{=seriesHtml}}</li>", "</ul>", '<a class="btn_new btn_green_s" target="{{playTarget}}" href="{{playHref}}" style="display:{{watchBtnDisplay}};"><span class="left_pd">立即观看</span></a>', "</li>", "</ul>", "</div>", "</li>"].join(""),
            suggestTpl: ['<li class="soItem clearfix"> <a href="{{titleHref}}" target="{{titleTarget}}" class="soRow" rebuildUrl="true">', '<div class="simple clearfix"> <span class="so_txt" ptype="1-2">{{=showName}}<span class="so_channel"></span></span> <span class="so_arrow"></span> </div>', "</a>", '<div class="so_detail"></div>', "</li>"].join(""),
            suggestZhidahaoTpl: ['<li class="soItem clearfix">', '<a href="{{titleHref}}" target="{{titleTarget}}" class="soRow">', '<div class="user clearfix">', '<div class="userAvatar">', '<img src="{{logo}}" width="20" height="20" />', "</div>", '<em class="so_to">@</em>', '<p class="so_uname">{{=showName}}</p>', "</div>", "</a>", '<div class="so_detail"></div>', "</li>"].join(""),
            searchTpl: ['<li class="soItem clearfix"> <a href="{{titleHref}}" target="{{titleTarget}}" class="soRow" rebuildUrl="true">', '<div class="simple clearfix"><span class="so_txt">{{=showName}}</span></div>', "</a>", '<div class="so_detail"></div>', "</li>"].join("")
          }
        }), e()
      }
    }
  });
  i.exports = l
});
define("../../interfaces/suggestV3Interface", ["../kit/remoteInterface", "./config.js"], function (e, t, i) {
  var n = e("../kit/remoteInterface"), a = e("./config.js");
  i.exports = Q.Class("SuggestV3Interface", {
    construct: function () {
      this._remoteInterface = new n({suggestV3: {url: a.interfaces.suggest}})
    }, methods: {
      request: function (e, t) {
        var i = {dataType: "jsonp", ifname: "suggestV3", param: e};
        this._remoteInterface.send(i, function (e) {
          t && t(e)
        })
      }
    }
  })
});
define("../../interfaces/zhidahaoInterface", ["../kit/remoteInterface", "./config.js"], function (e, t, i) {
  var n = e("../kit/remoteInterface"), a = e("./config.js");
  i.exports = Q.Class("ZhidahaoInterface", {
    construct: function () {
      this._remoteInterface = new n({suggestZhidahao: {url: a.interfaces.suggestZhidahao}})
    }, methods: {
      request: function (e, t) {
        var i = {dataType: "jsonp", ifname: "suggestZhidahao", param: e};
        this._remoteInterface.send(i, function (e) {
          t && t(e)
        })
      }
    }
  })
});
define("../../interfaces/hotWordInterface", ["../kit/remoteInterface", "./config", "../kit/generateRandomString"], function (e, t, i) {
  var n = e("../kit/remoteInterface"), a = e("./config"), r = e("../kit/generateRandomString").generate;
  i.exports = Q.Class("HotWordInterface", {
    construct: function () {
      this._remoteInterface = new n({fetch: {url: a.interfaces.hotWord}})
    }, methods: {
      request: function (e, t) {
        var i = {ifname: e.ifname, method: e.method || "GET", param: e};
        e.jsonp ? i.dataType = "jsonp" : i.encodeFn = function (e) {
          return encodeURIComponent(e)
        }, delete e.ifname, delete e.method, delete e.jsonp, this._remoteInterface.send(i, t)
      }, fetch: function (e, t) {
        this.request(Q.object.extend({ifname: "fetch", "if": "hotQuery", p: "global", cb: "cb_" + r(36)}, e), t)
      }, fetchTest: function (e, t) {
        this.request(Q.object.extend({
          ifname: "fetch",
          "if": "video_library",
          pageSize: 10,
          key: "0|全部",
          jsonp: !0,
          video_library_type: "billboard"
        }, e), t)
      }
    }
  })
});
define("../../widgets/searchsuggest/searchSuggestList", ["../../action/list", "./searchSuggestListView", "./searchSuggestListModel", "../../kit/responsive", "../../action/item", "./suggestItemModel", "./suggestItemView"], function (e, t, i) {
  var n = e("../../action/list"), a = e("./searchSuggestListView"), r = e("./searchSuggestListModel"), o = e("../../kit/responsive"), s = e("../../action/item"), l = e("./suggestItemModel"), d = e("./suggestItemView");
  i.exports = Q.Class("SearchSuggestList", {
    extend: n, construct: function (e) {
      e = e || {}, e.model = e.model || new r(e), e.view = e.view || new a(e), this.callsuper(e)
    }, methods: {
      _isSuggest: function (e) {
        if (e) {
          var t = e.syncGet().data.cid;
          if (1 == t || 2 == t || 3 == t || 4 == t || 6 == t)return !0
        }
        return !1
      }, update: function (e) {
        for (var t = e.curSn, i = 0; i < this.items.length; i++) {
          var n = this.items[i], a = !1, r = n.syncGet().select;
          if (t === i)r || (n.syncSet({select: !0}), a = !0), n.syncSet({highLightContent: !0}); else {
            if (-1 == t && 0 === i && this._isSuggest(this.items[0])) {
              n.syncSet({select: !0, highLightContent: !1, curSn: -1}), a = !0;
              continue
            }
            r && (this._isSuggest(this.items[t]) || -1 == t ? (n.syncSet({
              select: !1,
              curSn: -1
            }), a = !0) : n.syncSet({highLightContent: !1, curSn: -1}))
          }
          a && this.fire({type: "sizeChange", data: {}})
        }
        this._view.update(e)
      }, buildItems: function (e) {
        var t = [], i = "";
        e.tpl && (i = e.tpl.suggestTpl || "");
        var n = e.layout;
        e.responsive && (n = o.getCurrentLayout().layout, 0 !== n && (n = 1));
        var a = {
          tpl: i,
          layout: n,
          vvfrom: e.vvfrom,
          searchTarget: e.searchTarget,
          suggestTarget: e.suggestTarget,
          searchType: e.searchType,
          from: e.from,
          key: e.key
        };
        return e.itemsData.forEach(function (n, r) {
          var o = i, c = null, h = null;
          delete a.selectCls, Q.object.extend(a, {
            data: n,
            select: 0 === e.curSn,
            pos: r + 1
          }), e.isZhidahaoSuggest ? (o = e.tpl.suggestZhidahaoTpl, h = new d, Q.object.extend(a, {searchTarget: "_blank"})) : (o = e.tpl.searchTpl, h = new d), c = new l(Q.object.extend(a, {tpl: o}));
          var m = new s({model: c, view: h});
          m.init(), t.push(m)
        }), t
      }, syncGet: function (e) {
        return Q.object.extend({items: this.items}, this._model.get(e))
      }
    }
  })
});
define("../../widgets/searchsuggest/searchSuggestListView", ["../../view/listView"], function (e, t, i) {
  var n = e("../../view/listView");
  i.exports = Q.Class("SuggestView", {
    extend: n, construct: function (e) {
      this.callsuper(e)
    }, methods: {
      selItem: function (e, t) {
        if (void 0 !== e && this._curSn != e)if (t)this.callsuper("selItem", e); else {
          this.unbindItemsEvents(), this.callsuper("selItem", e), this._timer && (clearTimeout(this._timer), this._timer = null);
          var i = this;
          this._timer = setTimeout(function () {
            i.bindItemsEvents(), i._timer = null
          }, 100)
        }
      }, doSelItem: function (e) {
        e = Q.event.get(e);
        var t = parseInt(Q.$(e.currentTarget || e.target).attr("index"), 10);
        this.selItem(t, !0), this._ctrl.notice({type: "onSelItem", data: {curSn: t}})
      }
    }
  })
});
define("../../widgets/searchsuggest/suggestItemModel", ["../../model/itemModel"], function (e, t, i) {
  var n = e("../../model/itemModel");
  i.exports = Q.Class("SuggestItemModel", {
    extend: n, construct: function (e) {
      e = Q.object.extend({
        searchTarget: "_blank",
        suggestTarget: "_self",
        layout: 0,
        vvfrom: "",
        highLightContent: !0,
        searchType: 0,
        from: ""
      }, e), this.callsuper(e)
    }, methods: {
      init: function (e) {
        this.callsuper("init", e)
      }
    }
  })
});
define("../../widgets/searchsuggest/suggestItemView", ["../../view/itemView", "../../kit/getSearchUrl", "../../kit/getPicUrl", "../../kit/userInfo", "../../kit/parentByProp"], function (e, t, i) {
  var n = e("../../view/itemView"), a = e("../../kit/getSearchUrl"), r = e("../../kit/getPicUrl"), o = e("../../kit/userInfo"), s = e("../../kit/parentByProp"), l = "input";
  i.exports = Q.Class("SuggestItemView", {
    extend: n, construct: function (e) {
      this.callsuper(e)
    }, statics: {
      registEvents: function () {
        Q.event.customEvent.on("changeInputType", function (e) {
          l = e.data.inputType
        })
      }
    }, methods: {
      init: function (e) {
        this.callsuper("init", e)
      }, update: function (e) {
        if (void 0 !== e.select || void 0 !== e.highLightContent) {
          var t = !1;
          e.select && (t = !0), void 0 !== e.highLightContent && (t = e.highLightContent), this._setHighLightContent(t)
        }
        this.callsuper("update", e)
      }, _setHighLightContent: function (e) {
        if (this._doms && void 0 !== e && this._highLightContent !== e) {
          var t = this._doms.con, i = t.down("[data-suggest-elem=itemcontent]"), n = "def-f2f2f2";
          i && (e ? (t.removeClass(n), i.removeClass(n)) : (t.addClass(n), i.addClass(n))), this._highLightContent = e
        }
      }, bindEvents: function () {
        if (this._conClickHandler || (this._conClickHandler = this.onConClick.bind(this)), this._doms) {
          var e = this._doms.con;
          e.on("click", this._conClickHandler)
        }
      }, unbindEvents: function () {
        this._conClickHandler && this._doms && this._doms.con.un("click", this._conClickHandler)
      }, _check: function (e) {
        var t = this._doms.con;
        t.attr("checking", "true");
        for (var i = Q.$(e.target); i.attr("checking") != t.attr("checking");) {
          var n = "A" == i[0].nodeName.toUpperCase() && i.attr("href");
          if (n || i.attr("notjump")) {
            if (t.removeAttr("checking"), n) {
              var a = i.attr("href");
              if ("_blank" != i.attr("target")) {
                e.preventDefault();
                try {
                  Q.url.isUrl(a) && setTimeout(function () {
                    window.location.href = a
                  }, 300)
                } catch (r) {
                }
              }
              this._doSendPingback(Q.$(e.target), a)
            }
            return !1
          }
          i = i.parent()
        }
        return t.removeAttr("checking"), !0
      }, _checkUrl: function (e) {
        var t, i = this._doms.con;
        i.attr("checking", "true");
        for (var n = Q.$(e.target); n.attr("checking") != i.attr("checking");) {
          var a = "A" == n[0].nodeName.toUpperCase() && n.attr("href").indexOf("hot") < 0 && n.attr("rebuildUrl"), r = "A" == n[0].nodeName.toUpperCase() && n.attr("href").indexOf("hot") > 0 && n.attr("rebuildUrl");
          if (a)return t = "suggest", i.removeAttr("checking"), t;
          if (r)return t = "hot", i.removeAttr("checking"), t;
          n = n.parent()
        }
        return i.removeAttr("checking"), !1
      }, _doSendPingback: function (e, t) {
        var i = this._ctrl._model.get(), n = i.data, a = "1-5";
        if ("so.iqiyi.com" != Q.url.parse(t).host ? a = "2-1" : (e = s(e, "ptype") || e, e.attr("ptype") ? a = e.attr("ptype") : "IMG" == e[0].nodeName.toUpperCase() && (a = "1-1")), n.name) {
          var r = {
            t: 5,
            pf: 1,
            p: 10,
            p1: 101,
            c1: n.cid || "",
            s1: 1,
            s2: 6,
            e: n.event_id,
            r: 6,
            u: Q.cookie.get("QC005"),
            pu: o.getUid(),
            a: 0,
            rn: Math.floor((new Date).getTime() * Math.random()),
            pos: i.pos,
            ptype: a,
            target: encodeURIComponent(n.name),
            keyword: encodeURIComponent(i.key)
          }, l = [];
          for (var d in r)l.push(d + "=" + r[d]);
          var c = "http://msg.iqiyi.com/b?" + l.join("&"), h = new Image;
          h.src = c
        }
      }, onConClick: function (e) {
        e = Q.event.get(e);
        var t = this._ctrl._model.get(), i = t.data, n = i.name || i.key, r = a(n, t.searchType, ("input" === l ? "" : "second") + "suggest", t.from), o = t.searchTarget, s = this._checkUrl(e);
        this._check(e) ? ("_blank" != o ? setTimeout(function () {
          window.location.href = r
        }, 300) : window.open(r), this._doSendPingback(Q.$(e.target), r)) : s && (e.preventDefault(), "hot" == s && (r = a(n, t.searchType, ("input" === l ? "" : "second") + "hot", t.from)), "_blank" != o ? setTimeout(function () {
          window.location.href = r
        }, 300) : window.open(r, "_blank"), this._doSendPingback(Q.$(e.target), r))
      }, _getTextMaxLength: function () {
        var e = this._ctrl._model.get().layout, t = 12;
        switch (e) {
          case 0:
            t = 12;
            break;
          case 1:
            t = 34;
            break;
          case 2:
            t = 38;
            break;
          default:
            t = 12
        }
        return t
      }, getNamesHtml: function (e, t, i, n) {
        e = e || [], t = t || 2, i = i || 0, t = Math.min(t, e.length);
        for (var r = this._getTextMaxLength() - i, o = this._ctrl._model.get(), s = o.searchTarget, d = 0, c = "", h = 0; t > h; h++) {
          h > 0 && (c += "/", d++);
          var m = e[h], u = r - d, p = a(m, o.searchType, ("input" === l ? "" : "second") + "suggest", o.from), f = Q.string.getLength(m);
          if (f > u) {
            c += '<a ptype="' + n + '" title="' + e[h] + '" href="' + p + '" target="' + s + '">' + Q.string.truncate(m, u, "...") + "</a>";
            break
          }
          if (c += '<a ptype="' + n + '" href="' + p + '" target="' + s + '">' + m + "</a>", d += f, d + 1 >= r)break
        }
        return c
      }, getformatSearchUrl: function (e, t, i) {
        var n = "input" === l ? "suggest" : "secondsuggest";
        return a(e, t, n, i)
      }, getPictureUrl: function () {
        var e = this._ctrl._model.get(), t = e.data.source_code, i = e.data.picture_url, n = i.match(/(\S.+qiyipic\S.+)\/(\S.+)_195_260.jpg/);
        if (n)i = n[1] + "/" + n[2] + "_160_90.jpg"; else {
          var a = "";
          (!t || 13e8 > t || t > 15e8) && (a = "_160_90"), i = r(i, a)
        }
        return i
      }, appendVVFromForUrl: function (e) {
        var t = this._ctrl._model.get().vvfrom;
        return t && (e += "#vfrm=" + t), e
      }, formatData: function (e) {
        var t = e.name || e.key;
        e.searchKey = e.searchKey.replace(/^@/i, "");
        var i = {
          name: t,
          showName: t.replace(e.searchKey, '<i class="green">' + e.searchKey + "</i>")
        }, n = this._ctrl._model.get();
        return i.titleTarget = n.searchTarget, i.target = n.searchTarget, e.isZhidahaoSuggest === !0 ? (i.logo = e.logo, i.titleHref = e.link) : i.titleHref = a(t, n.searchType, ("input" === l ? "" : "second") + (e.key ? "hot" : "suggest"), n.from), i.href = i.titleHref, i
      }
    }
  })
});
define("../../kit/getSearchUrl", [], function (e, t, i) {
  var n = "http://index.iqiyi.com/q/?";
  i.exports = function (e, t, i, a) {
    t = t || 0;
    var r = "", o = !1;
    if (0 === t)r = Q.browser.IE6 ? "http://so.iqiyi.com/so/q_" + e : "http://so.iqiyi.com/so/q_" + encodeURIComponent(e), i && (r += "?source=" + i, o = !0); else if (1 == t)r = "http://so.iqiyi.com/pps/?k=" + encodeURIComponent(e), i && (r += "&source=" + i), o = !0; else if (2 == t)r = "http://client.so.pps.tv/search/client_index.php?q=" + encodeURIComponent(e), i && (r += "&source=" + i), o = !0; else {
      if (3 == t) {
        for (var s, l = {
          "电影": 1,
          "电视剧": 2,
          "纪录片": 3,
          "动漫": 4,
          "音乐": 5,
          "综艺": 6,
          "娱乐": 7,
          "旅游": 9,
          "片花": 10,
          "教育": 12,
          "体育": 17,
          "资讯": 25,
          "微电影": 16,
          "生活": 21,
          "少儿": 15,
          "母婴": 29,
          "游戏": 8,
          "搞笑": 22,
          "时尚": 13,
          "原创": 27,
          "财经": 24,
          "军事": 28,
          "科技": 30,
          "广告": 20,
          "汽车": 26
        }, d = e.split(/;|；/g), c = [], h = [], m = 0, u = d.length; u > m; m++)0 !== d[m].trim().length && (s = /(.*)（(综艺|电视剧|电影|纪录片|动漫|娱乐|体育|资讯|片花|微电影|脱口秀|生活|少儿|母婴|游戏|教育|音乐|搞笑|时尚|原创|旅游|拍客|财经|军事|科技|广告|汽车|特色频道|爱奇艺出品)）$/gi.exec(d[m]), s && 3 == s.length ? (c.push(encodeURIComponent(s[1])), h.push(l[s[2]] || "")) : (c.push(encodeURIComponent(d[m])), h.push("")));
        var p = ["name=" + c.join(";")];
        return h.join("").length > 0 && p.push("cid=" + h.join(";")), n + p.join("&")
      }
      5 == t && (r = "http://so.iqiyi.com/mall?keyword=" + encodeURIComponent(e), o = !0, i && (r += "&source=" + i))
    }
    if (a && (o ? r += "&" + a : (r += "?" + a, o = !0)), 0 === t) {
      var f = Math.floor((new Date).getTime() * Math.random());
      r += o ? "&sr=" + f : "?sr=" + f
    }
    return r
  }
});
define("../../action/form", ["../components/action/widget", "../view/formView", "../model/formModel", "../kit/eventPlugin"], function (e, t, i) {
  var n = e("../components/action/widget"), a = e("../view/formView"), r = e("../model/formModel"), o = e("../kit/eventPlugin");
  i.exports = Q.Class("Form", {
    extend: n, plugins: [new o], construct: function (e) {
      e = e || {}, e.model = e.model || new r(e), e.view = e.view || new a(e), this.callsuper(e), this.bindEvents()
    }, methods: {
      init: function () {
        this.callsuper("init"), this.bindEvents()
      }, fini: function () {
        this._view.fini(), this.unbindEvents()
      }, syncGet: function (e) {
        return this._model.get(e)
      }, syncSet: function (e) {
        this._view.update(this._model.set(e))
      }, bindEvents: function () {
      }, unbindEvents: function () {
      }
    }
  })
});
define("../../view/formView", ["../components/view/widgetView"], function (e, t, i) {
  var n = e("../components/view/widgetView");
  i.exports = Q.Class("FormView", {
    extend: n, construct: function (e) {
      this.callsuper(e)
    }, methods: {
      init: function (e) {
        this.callsuper("init", e), this.update(e._model.get()), this.bindEvents()
      }, fini: function () {
        this.unbindEvents()
      }, update: function (e) {
        var t = this._doms.form;
        void 0 !== e.target && t.attr("target", e.target), void 0 !== e.action && this._setAction(e.action), void 0 !== e.method && t.attr("method", e.method)
      }, _setAction: function (e) {
        var t = this._doms.form, i = e.lastIndexOf("?");
        if (-1 == i ? t.attr("action", e) : t.attr("action", e.substring(0, i)), this._inputs && this._inputs.forEach(function (e) {
            t.remove(e)
          }), t.down("[data-elems=input]") && t.down("[data-elems=input]").forEach(function (e) {
            t.remove(e)
          }), this._inputs = [], -1 != i) {
          var n = Q.url.queryToJson(e);
          for (var a in n) {
            var r = Q.element.Element.create({tagName: "input"});
            r.css("display", "none"), r.attr("type", "hidden"), r.attr("name", a), r.value(decodeURIComponent(n[a])), t.append(r), this._inputs.push(r)
          }
        }
      }, _onSubmit: function () {
        return this._ctrl._model.get().valid
      }, bindEvents: function () {
        var e = this._doms.form;
        this._submitHandler || (this._submitHandler = this._onSubmit.bind(this)), e[0].onsubmit = this._submitHandler
      }, unbindEvents: function () {
        this._doms.form[0].onsubmit = null
      }
    }
  })
});
define("../../model/formModel", ["../components/model/widgetModel"], function (e, t, i) {
  var n = e("../components/model/widgetModel");
  i.exports = Q.Class("FormModel", {
    extend: n, construct: function (e) {
      this.callsuper(e), this._data = Q.object.extend({valid: !1, action: "", target: "_self", method: "GET"}, e)
    }, methods: {
      init: function (e) {
        this.callsuper("init", e)
      }
    }
  })
});
define("../../widgets/searchsuggest/simpleSearchSuggest", ["./searchSuggest", "./simpleSearchSuggestList", "../../kit/getSearchUrl", "./simpleSearchSuggestView"], function (e, t, i) {
  var n = e("./searchSuggest"), a = e("./simpleSearchSuggestList"), r = e("../../kit/getSearchUrl"), o = e("./simpleSearchSuggestView");
  i.exports = Q.Class("SimpleSearchSuggest", {
    extend: n, construct: function (e) {
      var t = e.doms, i = t.list, n = Q.object.extend({}, e);
      e.body = e.body || new a(Q.object.extend(n, {doms: {list: i}})), e.view = new o(e), this.callsuper(e)
    }, methods: {
      _setForm: function (e) {
        if (4 == this._model.get().searchType)this.form.syncSet({valid: !1}); else {
          var t = this.form;
          if (t)if (e)t.syncSet({
            action: e.formatData.href,
            target: e.formatData.target,
            valid: !0
          }); else if (this.input.syncGet().value) {
            var i = this.getLinkInfo();
            t.syncSet({action: i.href, target: i.target, valid: !0})
          } else t.syncSet({valid: !1})
        }
      }, onSubmit: function (e) {
        var t = this._model.get().searchType;
        return 4 == t ? (this.syncSet({visible: !1}), void 0) : (3 == t && this.input.syncGet().autoFill || this.callsuper("onSubmit", e), void 0)
      }, onKeyDown: function (e) {
        var t = this._model.get();
        if (4 == t.searchType) {
          if (!t.visible)return;
          if (9 == e.data.keyCode)return this.syncSet({visible: !1}), void 0
        }
        this.callsuper("onKeyDown", e)
      }, getLinkInfo: function () {
        var e = this._model.get(), t = this.input.syncGet(), i = t.value, n = r(i, e.searchType, "input", e.from), a = e.searchTarget;
        if (t.autoFill) {
          var o = e.keyWords.list[e.keyWords.curSn];
          n = o.href, a = o.target, n || (n = r(o.value, e.searchType, "input", e.from), a = e.searchTarget)
        }
        return {href: n, target: a}
      }
    }
  })
});
define("../../widgets/searchsuggest/simpleSearchSuggestList", ["./searchSuggestList", "./simpleSearchSuggestListModel", "../../kit/responsive", "../../action/item", "./suggestItemModel", "./simpleSuggestItemView"], function (e, t, i) {
  var n = e("./searchSuggestList"), a = e("./simpleSearchSuggestListModel"), r = e("../../kit/responsive"), o = e("../../action/item"), s = e("./suggestItemModel"), l = e("./simpleSuggestItemView");
  i.exports = Q.Class("SimpleSearchSuggestList", {
    extend: n, construct: function (e) {
      e = e || {}, e.model = e.model || new a(e), this.callsuper(e)
    }, methods: {
      buildItems: function (e) {
        var t = [], i = 0;
        return e.itemsData.forEach(function (n) {
          var a = e.layout;
          e.responsive && (a = r.getCurrentLayout().layout, 0 !== a && (a = 1));
          var d = new o({
            model: new s({
              data: n,
              tpl: e.tpl.suggestTpl,
              select: i == e.curSn,
              layout: a,
              searchTarget: e.searchTarget,
              suggestTarget: e.suggestTarget,
              searchType: e.searchType,
              from: e.from
            }), view: new l
          });
          d.init(), t.push(d)
        }), t
      }
    }
  })
});
define("../../widgets/searchsuggest/simpleSearchSuggestListModel", ["./searchSuggestListModel", "../../interfaces/videoIndexInterface", "../../kit/userInfo"], function (e, t, i) {
  var n = e("./searchSuggestListModel"), a = e("../../interfaces/videoIndexInterface"), r = e("../../kit/userInfo");
  i.exports = Q.Class("SimpleSearchSuggestListModel", {
    extend: n, construct: function (e) {
      this.callsuper(e)
    }, methods: {
      asyncGet: function (e, t) {
        var i = e.key;
        this.set({key: i});
        var n = this;
        this.checkTpl(function () {
          var e = null;
          i && n.getSuggest(i, function (a) {
            e = Q.object.extend({}, n.get()), e.key === i && t(Q.object.extend(e, {itemsData: a, curSn: -1}))
          })
        })
      }, getSuggest: function (e, t) {
        var i = new a({ifname: "suggestIf"}), n = /ipad/.test(navigator.userAgent.toLowerCase()) ? 21 : Q.browser.android || Q.browser.iPhone || Q.browser.WP ? 31 : 11, o = 11 == n ? Q.cookie.get("QC005") : Q.cookie.get("QC006"), s = this.get(), l = {
          key: e,
          platform: n,
          rltnum: s.maxCount,
          uid: o || "",
          ppuid: r.getUid() || ""
        };
        if (s.pps && (l["if"] = "pps"), s.cachedSuggestData[e])t(s.cachedSuggestData[e]); else {
          var d = this;
          i.request(l, function (i) {
            var n = [];
            "A00000" == i.code ? (i.data.forEach(function (e) {
              e.cid && e.cname && (e.name += e.cname && "（" + e.cname + "）", n.push(e))
            }), d.get().cachedSuggestData[e] = n, t(n)) : t(n)
          })
        }
      }, checkTpl: function (e) {
        this.get().tpl || this.set({tpl: {suggestTpl: ['<li class="soItem clearfix"> <a href="javascript:void(0);" class="soRow">', '<div class="simple clearfix"><span class="so_txt">{{name}}</span></div>', "</a>", '<div class="so_detail"></div>', "</li>"].join("")}}), e()
      }
    }
  })
});
define("../../interfaces/videoIndexInterface", ["../kit/remoteInterface"], function (e, t, i) {
  var n = e("../kit/remoteInterface");
  i.exports = Q.Class("VideoIndexInterface", {
    construct: function (e) {
      e = e || {}, this._ifname = e.ifname, this._remoteInterface = new n({
        videoLocationIf: {url: "http://uaa.iqiyi.com/video_index/v1/get_province_distribution"},
        videoUserProfileIf: {url: "http://uaa.iqiyi.com/video_index/v1/get_user_profile"},
        videoTrendIf: {url: "http://uaa.iqiyi.com/video_index/v1/get_index_trend"},
        hasIndexStatIf: {url: "http://uaa.iqiyi.com/video_index/v1/is_album_empty"},
        suggestIf: {url: "http://uaa.iqiyi.com/video_index/v1/filtered_suggest_album"}
      })
    }, methods: {
      request: function (e, t) {
        e = e || {};
        var i = e.ifname || this._ifname || "videoUserProfileIf", n = e.timeout || 5e3;
        delete e.ifname, delete e.timeout, this._remoteInterface.send({
          ifname: i,
          param: e,
          dataType: "jsonp",
          timeout: n
        }, function (i) {
          t && t(i, e)
        })
      }
    }
  })
});
define("../../widgets/searchsuggest/simpleSuggestItemView", ["./suggestItemView"], function (e, t, i) {
  var n = e("./suggestItemView"), a = "http://index.iqiyi.com/q/?";
  i.exports = Q.Class("SimpleSuggestItemView", {
    extend: n, construct: function (e) {
      this.callsuper(e)
    }, methods: {
      formatData: function (e) {
        var t = e.name || e.key, i = e.cname, n = e.cid, r = e.aid, o = {
          name: t,
          cname: i,
          aid: r,
          cid: n
        }, s = this._ctrl._model.get(), l = ["aid=" + encodeURIComponent(r), "cid=" + encodeURIComponent(n), "name=" + encodeURIComponent(this.trimCnameSuffix(t))];
        return o.titleHref = a + l.join("&"), o.titleTarget = s.searchTarget, o.href = o.titleHref, o.target = s.searchTarget, o
      }, trimCnameSuffix: function (e) {
        var t = /(.*)（(综艺|电视剧|电影|纪录片|动漫|娱乐|体育|资讯|片花|微电影|脱口秀|生活|少儿|母婴|游戏|教育|音乐|搞笑|时尚|原创|旅游|拍客|财经|军事|科技|广告|汽车|特色频道|爱奇艺出品)）$/gi, i = t.exec(e);
        return i && 3 == i.length ? i[1] : e
      }, onConClick: function () {
      }
    }
  })
});
define("../../widgets/searchsuggest/simpleSearchSuggestView", ["./searchSuggestView"], function (e, t, i) {
  var n = e("./searchSuggestView");
  i.exports = Q.Class("SimpleSearchSuggestView", {
    extend: n, construct: function (e) {
      this.callsuper(e)
    }, methods: {
      bindEvents: function () {
        this._onClickHandler || (this._onClickHandler = this.onClick.bind(this)), this._onBodyClickHandler || (this._onBodyClickHandler = this.onBodyClick.bind(this)), this._doms.widget.on("click", this._onClickHandler), this._doms.body.on("click", this._onBodyClickHandler), this.callsuper("bindEvents")
      }, unbindEvents: function () {
        this._onClickHandler && this._doms.widget.un("click", this._onClickHandler), this._onBodyClickHandler && this._doms.body.un("click", this._onBodyClickHandler), this.callsuper("unbindEvents")
      }, onClick: function (e) {
        var t = Q.$(Q.event.get(e).target), i = this._doms;
        t.contains(i.container) || t.contains(i.body) ? this._ctrl.notice({
          type: "onHoverOut",
          data: {}
        }) : this._ctrl._model.set({hoverOver: !0})
      }, onBodyClick: function () {
        var e = this._ctrl, t = e.body.syncGet(), i = t.items[t.curSn].syncGet();
        e.input.syncSet({value: i.formatData.name.trim(), autoFill: !1}), e.notice({type: "onHoverOut", data: {}})
      }
    }
  })
});
define("../../widgets/searchsuggest/ppsSearchSuggest", ["./searchSuggest", "./ppsSearchSuggestList", "../../kit/getSearchUrl", "./ppsSearchSuggestView"], function (e, t, i) {
  var n = e("./searchSuggest"), a = e("./ppsSearchSuggestList"), r = e("../../kit/getSearchUrl"), o = e("./ppsSearchSuggestView");
  i.exports = Q.Class("PpsSearchSuggest", {
    extend: n, construct: function (e) {
      var t = e.doms, i = t.list, n = Q.object.extend({}, e);
      e.body = e.body || new a(Q.object.extend(n, {doms: {list: i}})), e.view = new o(e), this.callsuper(e)
    }, methods: {
      getLinkInfo: function () {
        var e = this._model.get(), t = this.input.syncGet(), i = t.value, n = r(i, e.searchType, "input", e.from), a = e.searchTarget;
        if (t.autoFill) {
          var o = e.keyWords.list[e.keyWords.curSn];
          n = o.href, a = o.target, n || (n = r(o.value, e.searchType, "input", e.from), a = e.searchTarget)
        }
        return {href: n, target: a}
      }
    }
  })
});
define("../../widgets/searchsuggest/ppsSearchSuggestList", ["./searchSuggestList", "./ppsSearchSuggestListModel", "../../kit/responsive", "../../action/item", "./suggestItemModel", "./ppsSuggestItemView"], function (e, t, i) {
  var n = e("./searchSuggestList"), a = e("./ppsSearchSuggestListModel"), r = e("../../kit/responsive"), o = e("../../action/item"), s = e("./suggestItemModel"), l = e("./ppsSuggestItemView");
  i.exports = Q.Class("PpsSearchSuggestList", {
    extend: n, construct: function (e) {
      e = e || {}, e.model = e.model || new a(e), this.callsuper(e)
    }, methods: {
      buildItems: function (e) {
        var t = [], i = 0;
        return e.itemsData.forEach(function (n) {
          var a = e.layout;
          e.responsive && (a = r.getCurrentLayout().layout, 0 !== a && (a = 1));
          var d = new o({
            model: new s({
              data: n,
              tpl: e.tpl.suggestTpl,
              select: i == e.curSn,
              layout: a,
              searchTarget: e.searchTarget,
              suggestTarget: e.suggestTarget,
              searchType: e.searchType,
              from: e.from
            }), view: new l
          });
          d.init(), t.push(d)
        }), t
      }
    }
  })
});
define("../../widgets/searchsuggest/ppsSearchSuggestListModel", ["./searchSuggestListModel", "../../interfaces/suggestV3Interface", "../../kit/userInfo"], function (e, t, i) {
  var n = e("./searchSuggestListModel"), a = e("../../interfaces/suggestV3Interface"), r = e("../../kit/userInfo");
  i.exports = Q.Class("PpsSearchSuggestListModel", {
    extend: n, construct: function (e) {
      this.callsuper(e)
    }, methods: {
      getSuggest: function (e, t) {
        var i = new a, n = /ipad/.test(navigator.userAgent.toLowerCase()) ? 21 : Q.browser.android || Q.browser.iPhone || Q.browser.WP ? 31 : 11, o = 11 == n ? Q.cookie.get("QC005") : Q.cookie.get("QC006"), s = this.get(), l = {
          key: e,
          platform: n,
          "if": "pps",
          rltnum: s.maxCount,
          uid: o || "",
          ppuid: r.getUid() || ""
        };
        if (s.cachedSuggestData[e])t(s.cachedSuggestData[e]); else {
          var d = this;
          i.request(l, function (i) {
            var n = [];
            "A00000" == i.code ? (n = i.data, d.get().cachedSuggestData[e] = n, t(n)) : t(n)
          })
        }
      }, checkTpl: function (e) {
        this.get().tpl || this.set({tpl: {suggestTpl: ['<li class="soItem clearfix"> <a href="{{titleHref}}" target="{{titleTarget}}" class="soRow">', '<div class="simple clearfix"><span class="so_txt">{{name}}</span></div>', "</a>", '<div class="so_detail"></div>', "</li>"].join("")}}), e()
      }
    }
  })
});
define("../../widgets/searchsuggest/ppsSuggestItemView", ["./suggestItemView", "../../kit/getSearchUrl"], function (e, t, i) {
  var n = e("./suggestItemView"), a = e("../../kit/getSearchUrl");
  i.exports = Q.Class("PpsSuggestItemView", {
    extend: n, construct: function (e) {
      this.callsuper(e)
    }, methods: {
      formatData: function (e) {
        var t = e.name || e.key, i = {name: t}, n = this._ctrl._model.get();
        return i.titleHref = a(t, n.searchType, e.key ? "hot" : "suggest", n.from), i.titleTarget = n.searchTarget, i.href = i.titleHref, i.target = n.searchTarget, i
      }
    }
  })
});
define("../../widgets/searchsuggest/ppsSearchSuggestView", ["./searchSuggestView"], function (e, t, i) {
  var n = e("./searchSuggestView");
  i.exports = Q.Class("PpsSearchSuggestView", {
    extend: n, construct: function (e) {
      this.callsuper(e)
    }, methods: {
      bindEvents: function () {
        this._onClickHandler || (this._onClickHandler = this.onClick.bind(this)), this._doms.widget.on("click", this._onClickHandler), this.callsuper("bindEvents")
      }, unbindEvents: function () {
        this._onClickHandler && this._doms.widget.un("click", this._onClickHandler), this.callsuper("unbindEvents")
      }, onClick: function (e) {
        var t = Q.$(Q.event.get(e).target), i = this._doms;
        t.contains(i.container) || t.contains(i.body) ? this._ctrl.notice({
          type: "onHoverOut",
          data: {}
        }) : this._ctrl._model.set({hoverOver: !0})
      }
    }
  })
});
define("../../widgets/searchsuggest/mall/mallSearchSuggest", ["../searchSuggest", "./mallSearchSuggestList", "../../../kit/getSearchUrl", "./mallSearchSuggestView"], function (e, t, i) {
  var n = e("../searchSuggest"), a = e("./mallSearchSuggestList"), r = e("../../../kit/getSearchUrl"), o = e("./mallSearchSuggestView");
  i.exports = Q.Class("MallSearchSuggest", {
    extend: n, construct: function (e) {
      var t = e.doms, i = t.list, n = Q.object.extend({}, e);
      e.body = e.body || new a(Q.object.extend(n, {doms: {list: i}})), e.view = new o(e), this.callsuper(e)
    }, methods: {
      _setForm: function (e) {
        if (4 == this._model.get().searchType)this.form.syncSet({valid: !1}); else {
          var t = this.form;
          if (t)if (e)t.syncSet({
            action: e.formatData.href,
            target: e.formatData.target,
            valid: !0
          }); else if (this.input.syncGet().value) {
            var i = this.getLinkInfo();
            t.syncSet({action: i.href, target: i.target, valid: !0})
          } else t.syncSet({valid: !1})
        }
      }, onSubmit: function (e) {
        var t = this._model.get().searchType;
        return 4 == t ? (this.syncSet({visible: !1}), void 0) : (3 == t && this.input.syncGet().autoFill || this.callsuper("onSubmit", e), void 0)
      }, onKeyDown: function (e) {
        var t = this._model.get();
        if (4 == t.searchType) {
          if (!t.visible)return;
          if (9 == e.data.keyCode)return this.syncSet({visible: !1}), void 0
        }
        this.callsuper("onKeyDown", e)
      }, getLinkInfo: function () {
        var e = this._model.get(), t = this.input.syncGet(), i = t.value, n = r(i, e.searchType, "input", e.from), a = e.searchTarget;
        if (t.autoFill) {
          var o = e.keyWords.list[e.keyWords.curSn];
          n = o.href, a = o.target, n || (n = r(o.value, e.searchType, "input", e.from), a = e.searchTarget)
        }
        return {href: n, target: a}
      }
    }
  })
});
define("../../widgets/searchsuggest/mall/mallSearchSuggestList", ["../searchSuggestList", "./mallSearchSuggestListModel", "../../../kit/responsive", "../../../action/item", "../suggestItemModel", "./mallSearchSuggestItemView"], function (e, t, i) {
  var n = e("../searchSuggestList"), a = e("./mallSearchSuggestListModel"), r = e("../../../kit/responsive"), o = e("../../../action/item"), s = e("../suggestItemModel"), l = e("./mallSearchSuggestItemView");
  i.exports = Q.Class("SimpleSearchSuggestList", {
    extend: n, construct: function (e) {
      e = e || {}, e.model = e.model || new a(e), this.callsuper(e)
    }, methods: {
      buildItems: function (e) {
        var t = [], i = 0;
        return e.itemsData.forEach(function (n) {
          var a = e.layout;
          e.responsive && (a = r.getCurrentLayout().layout, 0 !== a && (a = 1));
          var d = new o({
            model: new s({
              data: n,
              tpl: e.tpl.suggestTpl,
              select: i == e.curSn,
              layout: a,
              searchTarget: e.searchTarget,
              suggestTarget: e.suggestTarget,
              searchType: e.searchType,
              from: e.from
            }), view: new l
          });
          d.init(), t.push(d)
        }), t
      }
    }
  })
});
define("../../widgets/searchsuggest/mall/mallSearchSuggestListModel", ["../searchSuggestListModel", "../../../interfaces/suggestV3Interface", "../../../kit/userInfo"], function (e, t, i) {
  var n = e("../searchSuggestListModel"), a = e("../../../interfaces/suggestV3Interface"), r = e("../../../kit/userInfo");
  i.exports = Q.Class("MallSearchSuggestListModel", {
    extend: n, construct: function (e) {
      this.callsuper(e)
    }, methods: {
      asyncGet: function (e, t) {
        var i = e.key;
        this.set({key: i});
        var n = this;
        this.checkTpl(function () {
          var e = null;
          i && n.getSuggest(i, function (a) {
            e = Q.object.extend({}, n.get()), e.key === i && t(Q.object.extend(e, {itemsData: a, curSn: -1}))
          })
        })
      }, getSuggest: function (e, t) {
        var i = new a, n = /ipad/.test(navigator.userAgent.toLowerCase()) ? 21 : Q.browser.android || Q.browser.iPhone || Q.browser.WP ? 31 : 11, o = 11 == n ? Q.cookie.get("QC005") : Q.cookie.get("QC006"), s = this.get(), l = {
          "if": "mall",
          key: e,
          platform: n,
          rltnum: s.maxCount,
          uid: o || "",
          ppuid: r.getUid() || ""
        };
        if (s.cachedSuggestData[e])t(s.cachedSuggestData[e]); else {
          var d = this;
          i.request(l, function (i) {
            var n = [];
            "A00000" == i.code ? (i.data.forEach(function (e) {
              n.push(e)
            }), d.get().cachedSuggestData[e] = n, t(n)) : t(n)
          })
        }
      }, checkTpl: function (e) {
        this.get().tpl || this.set({tpl: {suggestTpl: '<li class=""><a href="{{href}}" class="in_Suggest_link" target="{{titleTarget}}"><span class="in_Suggest_n">{{name}}</span>{{if (item_cnt)}}<span class="in_Suggest_info">约{{item_cnt}}个商品</span>{{/if}}</a></li>'}}), e()
      }
    }
  })
});
define("../../widgets/searchsuggest/mall/mallSearchSuggestItemView", ["../suggestItemView", "../../../kit/getSearchUrl"], function (e, t, i) {
  var n = e("../suggestItemView"), a = e("../../../kit/getSearchUrl");
  i.exports = Q.Class("MallSearchSuggestItemView", {
    extend: n, construct: function (e) {
      this.callsuper(e)
    }, methods: {
      formatData: function (e) {
        var t = e.name || e.key, i = {name: t, item_cnt: e.item_cnt}, n = this._ctrl._model.get();
        return i.titleHref = a(t, n.searchType, "suggest", n.from), i.titleTarget = n.searchTarget, i.href = i.titleHref, i.target = n.searchTarget, i
      }, onConClick: function () {
      }
    }
  })
});
define("../../widgets/searchsuggest/mall/mallSearchSuggestView", ["../searchSuggestView"], function (e, t, i) {
  var n = e("../searchSuggestView");
  i.exports = Q.Class("SimpleSearchSuggestView", {
    extend: n, construct: function (e) {
      this.callsuper(e)
    }, methods: {
      bindEvents: function () {
        this._onClickHandler || (this._onClickHandler = this.onClick.bind(this)), this._onBodyClickHandler || (this._onBodyClickHandler = this.onBodyClick.bind(this)), this._doms.widget.on("click", this._onClickHandler), this._doms.body.on("click", this._onBodyClickHandler), this.callsuper("bindEvents")
      }, unbindEvents: function () {
        this._onClickHandler && this._doms.widget.un("click", this._onClickHandler), this._onBodyClickHandler && this._doms.body.un("click", this._onBodyClickHandler), this.callsuper("unbindEvents")
      }, onClick: function (e) {
        var t = Q.$(Q.event.get(e).target), i = this._doms;
        t.contains(i.container) || t.contains(i.body) ? this._ctrl.notice({
          type: "onHoverOut",
          data: {}
        }) : this._ctrl._model.set({hoverOver: !0})
      }, onBodyClick: function () {
        var e = this._ctrl, t = e.body.syncGet(), i = t.items[t.curSn].syncGet();
        e.input.syncSet({value: i.formatData.name.trim(), autoFill: !1}), e.notice({type: "onHoverOut", data: {}})
      }
    }
  })
});
define("../../widgets/searchinput/searchInput", ["../../action/input", "./searchInputModel", "../../view/inputView", "../../kit/getSearchUrl", "../../action/form"], function (e, t, i) {
  var n = e("../../action/input"), a = e("./searchInputModel"), r = e("../../view/inputView"), o = e("../../kit/getSearchUrl"), s = e("../../action/form");
  i.exports = Q.Class("SearchInput", {
    extend: n, construct: function (e) {
      e.doms && e.doms.form && (this.form = new s({doms: {form: e.doms.form}}), this.form.init()), e.defaultValue = this._selectKeyWord(e.keyWords).value, e.model = e.model || new a(e), e.view = e.view || new r(e), this.callsuper(e)
    }, methods: {
      init: function () {
        this._setForm(), this.callsuper("init")
      }, fini: function () {
        this.form && this.form.fini(), this.callsuper("fini")
      }, _getLinkInfo: function () {
        var e = this._model.get(), t = e.value, i = o(t, e.searchType, "input", e.from), n = e.target;
        if (e.autoFill) {
          var a = e.keyWords.list[e.keyWords.curSn];
          i = a.href, n = a.target, i || (i = o(a.value, e.searchType, "input", e.from), n = e.target)
        }
        return {href: i, target: n}
      }, _selectKeyWord: function (e) {
        for (var t = e.list, i = Math.floor(Math.random() * t.length), n = 0; n < t.length; n++)if (t[n].selected) {
          i = n;
          break
        }
        return e.curSn = i, t[i].selected = !0, t[i]
      }, _setForm: function () {
        var e = this.form;
        if (e)if (this._model.get().value) {
          var t = this._getLinkInfo();
          e.syncSet({action: t.href, target: t.target, valid: !0})
        } else e.syncSet({valid: !1})
      }, submitHandler: function (e) {
        var t = this.form, i = Q.$(e.data.target).attr("type").toUpperCase(), n = e.data.type.toUpperCase(), a = this._model.get().value;
        if (a && (!t || "BUTTON" == i && "CLICK" == n)) {
          var r = this._getLinkInfo(), o = r.href;
          "_self" == r.target ? window.location.href = o : window.open(o)
        }
      }, focusInHandler: function () {
        var e = this._model.get();
        e.autoFill && e.focusInClear && this.syncSet({value: "", autoFill: !1}), this._setForm()
      }, focusOutHandler: function () {
        var e = this._model.get();
        e.value || this.syncSet({value: this._selectKeyWord(e.keyWords).value.trim(), autoFill: !0}), this._setForm()
      }, valueChangeHandler: function () {
        this._setForm()
      }, bindEvents: function () {
        this._submitHandler || (this._submitHandler = this.submitHandler.bind(this)), this._focusInHandler || (this._focusInHandler = this.focusInHandler.bind(this)), this._focusOutHandler || (this._focusOutHandler = this.focusOutHandler.bind(this)), this._valueChangeHandler || (this._valueChangeHandler = this.valueChangeHandler.bind(this)), this.on("submit", this._submitHandler), this.on("valueChange", this._valueChangeHandler), this.on("focusIn", this._focusInHandler), this.on("focusOut", this._focusOutHandler)
      }, unbindEvents: function () {
        this._submitHandler && this.un("submit", this._submitHandler), this._focusInHandler && this.un("focusIn", this._focusInHandler), this._focusOutHandler && this.un("focusOut", this._focusOutHandler), this._valueChangeHandler && this.un("valueChange", this._valueChangeHandler)
      }
    }
  })
});
define("../../widgets/searchinput/searchInputModel", ["../../model/inputModel"], function (e, t, i) {
  var n = e("../../model/inputModel");
  i.exports = Q.Class("SearchInputModel", {
    extend: n, construct: function (e) {
      e = Q.object.extend({
        target: "_blank",
        keyWords: {list: [], curSn: 0},
        searchType: 0,
        from: ""
      }, e), this.callsuper(e)
    }
  })
});
define("../../kit/getSuggestConfig", ["./iframeLocation", "./responsive", "./getKeyWordFromReferrer", "./getSearchUrl", "../interfaces/locationInterface"], function (e, t, i) {
  function n(e, t, i, n) {
    var a = (e.attr("data-suggest-tip") || "").trim(), r = "true" === (e.attr("data-suggest-showemptyval") || "").trim(), o = c(), s = [], l = null;
    if (o ? a = o : r ? a = "" : l = e.down("[data-suggest-elem=keyword]"), l)l.forEach(function (e) {
      e = Q.$(e);
      var t = (e.attr("title") || "").trim(), i = e.attr("target") || "_self", a = (Q.browser.IE6 ? e[0].getAttribute("href", 2) : e.attr("href")) || "";
      try {
        if (-1 != Q.url.parse(a).host.indexOf("so.iqiyi.com")) {
          var r = Math.floor((new Date).getTime() * Math.random());
          a += -1 != a.indexOf("?") ? "&sr=" + r : "?sr=" + r, n && (a += "&" + n)
        }
      } catch (o) {
      }
      s.push({value: t, target: i, href: a})
    }); else {
      var d = "", m = "_blank";
      o && (d = h(a, t, "se", n), m = i), s.push({value: a, target: m, href: d})
    }
    return {list: s, curSn: 0}
  }

  function a(e) {
    for (var t = window.location.hostname, i = 0; i < e.length; i++)if (e[i] && -1 != t.indexOf(e[i]))return !0;
    return !1
  }

  function r(e, t) {
    return l.check() ? "_blank" : a(t) ? "_blank" == e ? "_self" : "_blank" : e
  }

  function o(e, t, i) {
    var o = e.attr("data-suggest-hoverclass") || "srchHover", s = {
      hoverCls: o,
      name: e.attr("data-suggest-name") || "suggest"
    }, l = e.attr("data-suggest-site");
    if (0 === t) {
      var c = e.attr("data-suggest-maxcount") || 10, h = e.attr("data-suggest-maxsearchhistorycount") || 5, m = "";
      m = 1 == i ? "2-3-0-1" : "3-6-3-1";
      var u = Q.url.parse(window.location.href), p = "so.iqiyi.com" == u.host && "/" == u.path, f = e.attr("data-suggest-searchtarget") || "_blank", U = (e.attr("data-suggest-searchtargetblacklist") || "so.iqiyi.com").split(",");
      f = r(f, U);
      var g = e.attr("data-suggest-suggesttarget") || "_self", V = (e.attr("data-suggest-suggesttargetblacklist") || "so.iqiyi.com").split(",");
      g = r(g, V);
      var y = (e.attr("data-suggest-focusoutblacklist") || "so.iqiyi.com").split(","), v = a(y) && "none" != e.css("display") && !Q.browser.iPad, b = (e.attr("data-suggest-placeholderblacklist") || "so.iqiyi.com").split(","), k = !a(b) || p, x = p, w = e.attr("data-suggest-selItemCls") || "keyBg", _ = "www.iqiyi.com" == u.host && "/" == u.path ? "" : "#999", L = (e.attr("data-suggest-focusinclearblacklist") || "so.iqiyi.com").split(","), I = !a(L) || p, W = (e.attr("data-suggest-ufbrwosers") || "ff,IE,CHROME").split(","), X = d.enable;
      "false" == e.attr("data-suggest-responsive") && (X = !1);
      var C = parseInt(e.attr("data-suggest-layout"), 10);
      C = C || 0, d.respInfo && X && (C = d.respInfo.curLayout);
      var K = o, S = 0, T = !1;
      "pps.tv" === l && (S = 1);
      var E = !1;
      ("pps" === l || "true" == e.attr("data-suggest-nospecshow")) && (E = !0, o = "", K = "", v = !0, f = "_self", I = !1, W = [], S = 1, "ppsclient" === l && (S = 2), T = !0), "iqiyi-index" === l && (E = !0, v = !e.attr("data-suggest-focusIn"), f = e.attr("data-suggest-brainsearchtarget") || "_self", I = !0, W = [], S = 3), "iqiyi-index-compare" === l && (E = !0, v = !1, f = "_self", I = !0, W = [], S = 4), "iqiyi-mall" === l && (E = !0, v = !location.hash, g = f, W = [], S = 5), Q.object.extend(s, {
        maxCount: c,
        maxSearchHistoryCount: h,
        suggestTarget: g,
        searchTarget: f,
        layout: C,
        vvfrom: m,
        focusIn: v,
        focusInClear: I,
        focusCls: K,
        focusBg: x,
        selItemCls: w,
        ufBrowsers: W,
        responsive: X,
        likePlaceHolder: k,
        placeHolderColor: _,
        hoverCls: o,
        site: l,
        searchType: S,
        pps: T,
        nospecshow: E
      })
    } else Q.object.extend(s, {target: "_self", focusInClear: !0, searchType: "ppsclient" === l ? 2 : 0});
    return s.from = e.attr("data-suggest-refersource") || "", s.keyWords = n(e, s.searchType, s.searchTarget || s.target, s.from), s
  }

  function s(e, t, i, n) {
    {
      e.down("[data-suggest-elem=conf]")
    }
    return n
  }

  var l = e("./iframeLocation"), d = e("./responsive"), c = e("./getKeyWordFromReferrer"), h = e("./getSearchUrl");
  e("../interfaces/locationInterface"), i.exports = function (e, t, i) {
    var n = o(e, t, i);
    return s(e, t, i, n)
  }
});
define("../../kit/getKeyWordFromReferrer", [], function (e, t, i) {
  var n = [{host: "v.baidu.com", key: "word"}, {host: "www.baidu.com", key: "wd"}, {
    host: "www.soku.com",
    key: "keyword"
  }];
  i.exports = function () {
    try {
      for (var e = document.referrer, t = Q.url.parse(e).host, i = 0; i < n.length; i++) {
        var a = n[i];
        if (-1 != t.indexOf(a.host))return decodeURIComponent(Q.url.getQueryValue(e, a.key))
      }
    } catch (r) {
    }
    return ""
  }
});
define("../../units/vipAdPop", ["../components/units/pageJob", "../components/action/checkDoms", "../interfaces/adPopInterface", "../kit/userInfo", "../kit/generateRandomString", "../kit/artTemplate", "../kit/anim"], function (e) {
  var t = e("../components/units/pageJob");
  e("../components/action/checkDoms");
  var i = e("../interfaces/adPopInterface"), n = e("../kit/userInfo"), a = e("../kit/generateRandomString");
  e("../kit/artTemplate");
  var r = e("../kit/anim"), o = "vipadPop", s = "http://msg.71.am/tmpstats.gif", l = 0, d = 0, c = null, h = null, m = {};
  t.create(o, {
    check: function () {
      return !0
    }, init: function () {
      var e = this, t = Q.cookie.get("QILINPUSH"), i = Q.$("#data-vip-remindbox"), a = n.isLogin();
      if (!t && i) {
        var r = {};
        a ? r.authcookie = Q.cookie.get("P00001") : r.device_id = Q.cookie.get("QC005"), r.agent_type = 1, setTimeout(function () {
          Q.$(".J_pop-window") || e.getData(a, r)
        }, 500)
      }
    }, createPopup: function (e) {
      var t = this;
      t.createFloat(e);
      var i = {act: 0}, n = Q.$("[data-vipadpop-click]"), a = Q.$("#data-vip-remindbox").attr("data-Boss-categoryid"), r = Q.$(c).down("[data-vipadpop-qpid]"), o = r && r.attr("data-vipadpop-qpid"), s = o && o.join(",");
      a && (i.c1 = a), s && (i.mqpid = s), t.sendPingback(i), t.sendGroupPingback({
        t: 21,
        block: "508282_01"
      }), n.on("click", function () {
        var e = Q.$(this).attr("data-vipadpop-fr"), i = Q.$(this).attr("data-vipadpop-qpid"), n = {act: 1, fr: e};
        i > 0 && (n.qpid = i), t.sendPingback(n), t.sendGroupPingback({t: 20, rseat: "508282_01"})
      })
    }, getData: function (e, t) {
      var n = this, a = new i;
      a.getData(e, t, function (e) {
        if ("A00000" == e.code) {
          if (!e.data)return Q.event.customEvent.fire({type: "oldpopup", data: {}}), void 0;
          if (m.data = e.data, e = e.data.content, !e)return;
          e = JSON.parse(e), m.msgname = e.popupTitle, m.originCode = e.originCode, m.mid = e.pushId, Q.loadTemplate("pc/vipopup", function (t) {
            var i = e.templateId;
            6 == i ? (e.firstTitle = e.metadataList[0] && e.metadataList[0].longTitle, e.firstImageLinkUrl = e.metadataList[0] && e.metadataList[0].imageLinkUrl, e.firstImageUrl = e.metadataList[0] && e.metadataList[0].imageUrl, e.metadataList.splice(0, 1)) : e.metadataList = e.metadataList[0];
            var a = t(e);
            return Q.$(".J_pop-window") ? !1 : (n.createPopup(a), void 0)
          }, {
            jobFile: "jobs/pc/safeCenterV2",
            projectName: "qiyiV2",
            projectDebug: !1,
            templateVersion: "20160126172644"
          })
        }
      })
    }, resize: function () {
      var e = this;
      Q.$(window).on("resize", function () {
        e.showPop(Q.$(c), "div"), e.showPop(Q.$(h), "iframe")
      })
    }, createFloat: function (e) {
      var t = this, i = !0;
      c = document.createElement("div"), Q(c).attr("id", "J_vip-ad-pop"), h = document.createElement("iframe"), Q.$(c).html(e), document.body.appendChild(c), document.body.appendChild(h), l = c.children[0].offsetWidth, d = c.children[0].offsetHeight, t.showPop(Q.$(c), "div"), t.showPop(Q.$(h), "iframe"), t.resize();
      var n = Q.$(c).down("*[data-Close=close]");
      n && n.on("click", function () {
        i = !1, Q.$(c).hide(), Q.$(h).hide(), t.sendPingback({act: 2})
      }), setTimeout(function () {
        i && (Q.$(c).hide(), Q.$(h).hide(), t.sendPingback({act: 2}))
      }, 18e5)
    }, scrollActive: function (e, t) {
      Q.$(window).on("scroll", function () {
        Q.page.getScrollTop() > 0 ? Q.browser.IE6 ? (e.css("position", "absolute"), setTimeout(function () {
          e.css("top", Q.page.getScrollTop() + t + "px")
        }, 100)) : (e.css("position", "fixed"), e.css("top", t + "px")) : e.css("top", t + "px")
      })
    }, showPop: function (e, t) {
      var i = this;
      switch (t) {
        case"div":
          e.css("zIndex", "4200");
          break;
        case"iframe":
          e.css("zIndex", "4199"), e.css("backgroundColor", "#fff"), e.css("width", l + "px"), e.css("height", d + "px")
      }
      e.css("position", "absolute");
      var n = document.documentElement.clientWidth - l, a = document.documentElement.clientHeight - d, o = document.documentElement.clientHeight;
      i.scrollActive(e, a), e.css("left", n + "px");
      var s = Q.page.getScrollTop();
      new r({elem: e, style: "top", from: o + s, to: a + s, ease: "Linear", duration: 200})
    }, sendGroupPingback: function (e) {
      var t = m.data, i = [t.id, t.group_id, t.type, t.sub_type, t.source].join(":"), r = {
        t: e.type,
        bstp: "31_msg",
        pf: 1,
        p: 10,
        p1: 101,
        msgid: i,
        pu: n.getUid(),
        u: Q.cookie.get("QC006"),
        rn: a.generate(10)
      };
      Q.object.extend(r, e), Q.log.server(r, "http://msg.71.am/b")
    }, sendPingback: function (e) {
      var t = {};
      t.type = "141204yxx", t.svtype = m.originCode, t.mid = m.mid, t.msgname = m.msgname, t.subtype = "1", t.flshuid = Q.cookie.get("QC005"), t.qtcurl = window.location.href, t.p1 = "1_10_101", t.act = e.act, t.rn = (new Date).getTime(), t.u = Q.cookie.get("QC006"), t.pu = n.getUid(), t.fr = e.fr, Q.object.extend(t, e), Q.log.server(t, s)
    }, clearDoblue: function (e) {
      for (var t = [], i = {}, n = 0, a = e.length; a > n; n++)i[e[n]] || (t.push(e[n]), i[e[n]] = 1);
      return t.join(",")
    }
  }), t.add(o)
});
define("../../interfaces/adPopInterface", ["../kit/remoteInterface"], function (e, t, i) {
  var n = e("../kit/remoteInterface");
  i.exports = Q.Class("adPop", {
    construct: function () {
      this._remoteInterface = new n({
        oldadPop: {url: "http://info.vip.iqiyi.com/promotion/push.action"},
        adPopLogin: {url: "http://notice.iqiyi.com/apis/msg/lego/get_msg.action"},
        adPopUnLogin: {url: "http://nl.notice.iqiyi.com/apis/msg/lego/get_msg.action"}
      })
    }, methods: {
      getData: function (e, t, i) {
        var n = "adPopUnLogin";
        e && (n = "adPopLogin"), t = t || {}, t.cb = t.cb || "getAdPop", t.t = (new Date).getTime(), this._remoteInterface.send({
          param: t,
          ifname: n
        }, function (e) {
          i && i(e)
        })
      }, getOldData: function (e, t) {
        e = e || {}, e.cb = e.cb || "getOldAdPop", e.t = (new Date).getTime(), this._remoteInterface.send({
          param: e,
          ifname: "oldadPop"
        }, function (e) {
          t && t(e)
        })
      }
    }
  })
});
define("../../units/vipAdPop_old", ["../components/units/pageJob", "../components/action/checkDoms", "../interfaces/adPopInterface", "../kit/userInfo", "../kit/anim"], function (e) {
  var t = e("../components/units/pageJob");
  e("../components/action/checkDoms");
  var i, n, a, r, o, s = e("../interfaces/adPopInterface"), l = e("../kit/userInfo"), d = e("../kit/anim"), c = "vipadPopOld", h = "http://msg.71.am/tmpstats.gif", m = "http://msg.71.am/tmpstats.gif", u = 0, p = 0, f = null, U = null, g = "", V = !1, y = null;
  t.create(c, {
    check: function () {
      return !0
    }, init: function () {
      var e = this;
      Q.event.customEvent.on("oldpopup", function () {
        Q.cookie.get("QILINPUSH");
        var t = Q.$("#data-vip-remindbox");
        if (t) {
          var i = {};
          i.channel_id = "aca56ec7d4f9b128";
          var n = document.referrer;
          n && (n = n.split("http://")[1], n = n.split("?")[0], n = n.split("/")[0], i.refer = n);
          var a = t.attr("data-Boss-categoryid") || "", r = t.attr("data-Boss-player") || "";
          i.pindao = a, i.player = r, i.cid = a, e.getData(i)
        }
      })
    }, getData: function (e) {
      var t = this, l = new s;
      l.getOldData(e, function (s) {
        if ("A00000" == s.code) {
          var l = s.data[0];
          l.pingdao = e.pindao;
          var d = l.description;
          t.createFloat(d, l);
          var c = {}, h = Q.$("[data-vipadPop-act]");
          i = l.area, n = l.bkt, a = l.event_id, r = l.mid, o = l.unitid;
          var m = l.type;
          if (2 == m) {
            c.area = i, c.bkt = n, c.event_id = a, c.area = i, c.cid = e.cid || "";
            for (var u = [], p = 0, f = h.length; f > p; p++) {
              var U = Q.$(h[p]).attr("data-vipadPop-taid");
              U && u.push(U)
            }
            c.albumlist = encodeURI(u.join(",")), t.showPingback(c), h.on("click", function () {
              if ("close" != Q.$(this).attr("data-close")) {
                V = !0;
                var s = Q.$(this).attr("data-vipadPop-rank");
                c.taid = Q.$(this).attr("data-vipadPop-taid"), c.taid && (c.tcid = Q.$(this).attr("data-vipadPop-tcid"), c.rank = s, t.showClickPingback(c)), c = {}, c.act = Q.$(this).attr("data-vipadPop-act"), c.cid = e.cid || "", c.area = i, c.bkt = n, c.event_id = a, c.area = i, y = Q.$("#flashbox"), y && (c.aid = y.attr("data-player-albumid") || ""), c.taid = Q.$(this).attr("data-vipadPop-taid"), c.tcid = Q.$(this).attr("data-vipadPop-tcid"), c.unitid = o, c.mid = r, g = Q.$(this).attr("data-vipadPop-fr"), c.fr = g, t.clickPingback(c)
              }
            })
          } else h.on("click", function () {
            "close" != Q.$(this).attr("data-close") && (V = !0, c = {}, c.act = Q.$(this).attr("data-vipadPop-act"), c.cid = e.cid || "", y = Q.$("#flashbox"), y && (c.aid = y.attr("data-player-albumid") || ""), c.taid = Q.$(this).attr("data-vipadPop-taid"), c.unitid = o, c.mid = r, g = Q.$(this).attr("data-vipadPop-fr"), c.fr = g, t.clickPingback(c))
          })
        }
      })
    }, resize: function () {
      var e = this;
      Q.$(window).on("resize", function () {
        e.showPop(Q.$(f), "div"), e.showPop(Q.$(U), "iframe")
      })
    }, createFloat: function (e, t) {
      var i = this;
      f = document.createElement("div"), U = document.createElement("iframe"), Q.$(f).html(e), document.body.appendChild(f), document.body.appendChild(U), u = f.children[0].offsetWidth, p = f.children[0].offsetHeight, i.showPop(Q.$(f), "div"), i.showPop(Q.$(U), "iframe"), i.resize();
      var n = Q.$(f).down("*[data-Close=close]");
      n && n.on("click", function () {
        Q.$(f).hide(), Q.$(U).hide();
        var e = {mid: t.mid, unitid: t.unitid, cid: t.pindao};
        e.act = Q.$(this).attr("data-vipadPop-act") || "2", e.fr = "POP_DIRECT_CLOSE", V && (e.fr = "POP_CLOSE"), i.clickPingback(e)
      })
    }, scrollActive: function (e, t) {
      Q.$(window).on("scroll", function () {
        Q.page.getScrollTop() > 0 ? Q.browser.IE6 ? (e.css("position", "absolute"), setTimeout(function () {
          e.css("top", Q.page.getScrollTop() + t + "px")
        }, 100)) : (e.css("position", "fixed"), e.css("top", t + "px")) : e.css("top", t + "px")
      })
    }, showPop: function (e, t) {
      var i = this;
      switch (t) {
        case"div":
          e.css("zIndex", "4200");
          break;
        case"iframe":
          e.css("zIndex", "4199"), e.css("backgroundColor", "#fff"), e.css("width", u + "px"), e.css("height", p + "px")
      }
      e.css("position", "absolute");
      var n = document.documentElement.clientWidth - u, a = document.documentElement.clientHeight - p, r = document.documentElement.clientHeight;
      i.scrollActive(e, a), e.css("left", n + "px");
      var o = Q.page.getScrollTop();
      new d({elem: e, style: "top", from: r + o, to: a + o, ease: "Linear", duration: 200})
    }, clickPingback: function (e) {
      var t = {};
      t.type = "vipmb140429", t.svtype = "1", t.subtype = "1", t.act = e.act, t.pt = "b6c13e26323c537d", t.t = (new Date).getTime(), t.jsid = Q.cookie.get("QC006"), t.uid = l.getUid(), t.cid = e.cid || "", t.url = window.location.href, t.aid = e.aid || "", t.taid = e.taid || "", t.unitid = e.unitid || "", t.mid = e.mid || "", t.fr = e.fr, Q.log.server(t, h)
    }, showPingback: function (e) {
      var t = this, i = {};
      i.type = "showlizard20130613", i.usract = "1", i.ppuid = l.getUid() || "", i.uid = Q.cookie.get("QC005"), i.event_id = e.event_id || "", i.cid = e.cid || "", i.bkt = e.bkt || "", i.area = e.area || "", i.platform = "11", i.albumlist = t.clearDoblue(e.albumlist.split(",")), Q.log.server(i, m)
    }, showClickPingback: function (e) {
      var t = {};
      t.type = "recctplay20121226", t.usract = "userclick ", t.ppuid = l.getUid() || "", t.uid = Q.cookie.get("QC005"), t.event_id = e.event_id || "", t.bkt = e.bkt || "", t.area = e.area || "", t.rank = e.rank || "", t.platform = "11", t.taid = e.taid, t.tcid = e.tcid || "", Q.log.server(t, m)
    }, clearDoblue: function (e) {
      for (var t = [], i = {}, n = 0, a = e.length; a > n; n++)i[e[n]] || (t.push(e[n]), i[e[n]] = 1);
      return t.join(",")
    }
  }), t.add(c)
});
define("../../units/vipNewHeader", ["../components/units/pageJob", "../components/action/checkDoms", "../kit/userInfo", "../kit/iframeLocation"], function (e) {
  var t, i, n = e("../components/units/pageJob"), a = e("../components/action/checkDoms"), r = e("../kit/userInfo"), o = e("../kit/iframeLocation"), s = "vipNewHeader", l = Q.event.customEvent;
  n.create(s, {
    getDependentDoms: function () {
      var e = Q.$("#widget-vipheader");
      return e && (i = {doms: e, menu: e.down("*[data-vipheader-elem=menucontainer]")}), {doms: e}
    }, check: function (e) {
      return a(e), !0
    }, init: function () {
      var e = this;
      e._menuDom = i.menu, e._wrapperDom = i.doms, e._wrapperDomCls = e._wrapperDom.attr("data-vipheader-cls") || "", l.on("login", e._loginAfter.bind(this)), l.on("logout", e._updateDom.bind(this)), e._initData()
    }, _initData: function () {
      t = 0;
      var e = this;
      r.isLogin() ? e._loginAfter() : e._updateDom()
    }, _loginAfter: function () {
      var e = this;
      r.getIsValidVip(function (i) {
        i ? r.isAutoRenew(function (i) {
          (parseInt(i, 10) || parseInt(r.getPayType(), 10)) && (t = 1), r.checkVipInfo(e._updateDom)
        }) : e._updateDom()
      })
    }, _updateDom: function () {
      var e, n, a, s = i.doms.down("*[data-vipheader-elem=menu]"), l = i.doms.down("*[data-vipheader-elem=header]");
      if (l && !(l.length < 1)) {
        var d = Q.cookie.get("HZ00011"), c = Q.$("a[j-data-elem=zjuser]");
        c && !r.isLogin() && d && "11" == d && c.on("click", function (e) {
          e = Q.event.get(e), e.stop();
          var t = Q.url.parse(window.location.href), i = t.protocol + "://" + t.host + t.path, n = "http://v.139site.com/pretrade.do?spid=13&preurl=" + i + "&ucode=HZ00011&keystr=bf49359a5e0ef6eb0d75b0906c3c4f36";
          o.href(n)
        }), r.isLogin() ? 2 == parseInt(r.getStatus(), 10) ? e = 3 : r.getIsValidVip() ? (n = r.getVipType(), 3 == n && (e = 1), 1 == t && 1 == n && (e = 3), t || 4 != n || (e = 4), (1 == t && (4 == n || 1 == n) || 2 == n) && (e = 3), t || 1 != n || (e = 2)) : e = 0 : e = 0, s && s.hide(), l.hide(), a = Q.$(l[e]), a && a.css("display", "block")
      }
    }
  }), n.add(s)
});
define("../../units/topLineFloaterV2", ["../components/units/pageJob", "../components/action/checkDoms", "../kit/userInfo", "../kit/getWebEventID", "../config/siteDomain", "../kit/checkI18nType"], function (e) {
  var t, i, n, a, r, o = new Q.ic.InfoCenter({moduleName: "units/topLineFloaterV2"}), s = e("../components/units/pageJob"), l = e("../components/action/checkDoms"), d = e("../kit/userInfo"), c = e("../kit/getWebEventID"), h = e("../config/siteDomain"), m = e("../kit/checkI18nType"), u = "default", p = "topLineFloaterV2";
  s.create(p, {
    getDependentDoms: function () {
      return t = Q.$("*[data-widget-toplinefloater=blackFloater]"), {con: t}
    }, check: function (e) {
      return l(e), !0
    }, init: function () {
      var e = this;
      this.hasFixedStyleInited = t.hasClass("topNav-fixed"), this.isSendLoginSucPingBack = !1, this.shownFloater = !1, Q.browser.IE6 || Q.browser.iPad ? t.css("position", "relative") : Q.$(window).on("onresize", function () {
        e.doFloatTop()
      });
      var o = Q.url.getQueryValue(location.href, "source");
      if (o)u = o.split(".").slice(-2, -1); else {
        var s = Q.url.parse(document.referrer);
        s && (u = s.host.split(".").slice(-2, -1))
      }
      i && (a = i.down("*[data-topnavloginbar-tpl='" + u + "']"), a && n && (n.html(a.value()), d.isLogin() || (e.showFloater(), r = setTimeout(function () {
        e.hideFloater()
      }, 6e4)))), this.scrollmarker = Q.$("[data-toplinefloater-elem=scrollmarker]"), this.bindEvent(), this.doWindowScroll()
    }, exec: function () {
    }, destroy: function () {
    }, bindEvent: function () {
      if (Q.$(window).on("scroll", this.doWindowScroll.bind(this)), Q.event.customEvent.on("login", this.doLogin.bind(this)), Q.event.customEvent.on("loginIframeClosed", this.doLoginIframeClosed.bind(this)), n) {
        var e = n.down("*[data-topnavloginbar-loginbtn]");
        e && e.on("click", this.doClickLoginBtn.bind(this));
        var t = n.down("*[data-topnavloginbar-sinabtn]");
        t && t.on("click", this.doClickSinaLoginBtn.bind(this));
        var i = n.down("*[data-topnavloginbar-qqbtn]");
        i && i.on("click", this.doClickQQLoginBtn.bind(this));
        var a = n.down("*[data-topnavloginbar-renrenbtn]");
        a && a.on("click", this.doClickRenrenLoginBtn.bind(this))
      }
    }, doFloatTop: function () {
      var e = !0;
      if (!this.hasFixedStyleInited) {
        var i = Q.page.getScrollTop(), n = 502;
        t.attr("data-toplinefloater-scrolltop") && (n = t.attr("data-toplinefloater-scrolltop")), this.scrollmarker && (n = this.scrollmarker.top() + this.scrollmarker.height()), n >= i && (e = !1)
      }
      var a = Q.page.getViewWidth();
      Q.page.getViewWidth() > Q.page.getWidth() && (a = Q.page.getWidth()), 980 > a && (e = !1), e ? (t.addClass("topNav-fixed"), t.css("position", "fixed")) : (t.removeClass("topNav-fixed"), t.css("position", "relative")), t.attr("data-toplinefloater-needchangeavatar") && Q.event.customEvent.fire({
        type: "indexNavClassChange",
        data: {top: e}
      })
    }, doWindowScroll: function () {
      Q.browser.IE6 || Q.browser.iPad || this.doFloatTop();
      var e = Q.page.getScrollTop();
      "absolute" === t.css("position") && (o.log("css position is absolute"), t.css("top", e + "px"), o.log("reset css position ..")), d.isLogin() || (a ? (r && clearTimeout(r), this.hideFloater()) : e > 150 ? this.showFloater() : this.hideFloater())
    }, doWindowResize: function () {
    }, doLogin: function () {
      var e = this;
      this.hideFloater(), c(function (t) {
        var i = Q.cookie.get("QILINPUSH");
        null !== i && Q.cookie.remove("QILINPUSH", {
          path: "/",
          domain: h.getDomain()
        }), e.isSendLoginSucPingBack && Q.log.server({
          type: "baidupopdiv",
          jsuid: Q.cookie.get("QC006"),
          qtcurl: location.href,
          usract: "loginsuc",
          weid: t,
          mod: m.mod,
          pru: Q.cookie.get("P00PRU") || "",
          ppuid: d.getUid()
        }, "http://msg.71.am/tmpstats.gif")
      })
    }, doLogout: function () {
    }, doLoginIframeClosed: function () {
      var e = this;
      this.isSendLoginSucPingBack = !1, window.setTimeout(function () {
        e.showFloater()
      }, 200)
    }, doClickLoginBtn: function (e) {
      e = Q.event.get(e), e.preventDefault(), c(function (e) {
        Q.log.server({
          type: "baidupopdiv",
          jsuid: Q.cookie.get("QC006"),
          qtcurl: location.href,
          usract: "cllogin",
          weid: e,
          mod: m.mod,
          pru: Q.cookie.get("P00PRU") || "",
          ppuid: d.getUid()
        }, "http://msg.71.am/tmpstats.gif")
      }), this.isSendLoginSucPingBack = !0
    }, doClickTopRegisterBtn: function (e) {
      e = Q.event.get(e), e.preventDefault(), c(function (e) {
        Q.log.server({
          type: "baidupopdiv",
          jsuid: Q.cookie.get("QC006"),
          qtcurl: location.href,
          usract: "clreg",
          weid: e,
          mod: m.mod,
          pru: Q.cookie.get("P00PRU") || "",
          ppuid: d.getUid()
        }, "http://msg.71.am/tmpstats.gif")
      })
    }, doClickTopLoginBtn: function (e) {
      e = Q.event.get(e), e.preventDefault(), c(function (e) {
        Q.log.server({
          type: "baidupopdiv",
          jsuid: Q.cookie.get("QC006"),
          qtcurl: location.href,
          usract: "cllogin",
          weid: e,
          mod: m.mod,
          pru: Q.cookie.get("P00PRU") || "",
          ppuid: d.getUid()
        }, "http://msg.71.am/tmpstats.gif")
      })
    }, doClickSinaLoginBtn: function (e) {
      e = Q.event.get(e), e.preventDefault(), a ? this.thirdLoginPingBack() : c(function (e) {
        Q.log.server({
          type: "baidupopdiv",
          jsuid: Q.cookie.get("QC006"),
          qtcurl: location.href,
          usract: "weiboclcooplog",
          weid: e,
          mod: m.mod,
          pru: Q.cookie.get("P00PRU") || "",
          ppuid: d.getUid()
        }, "http://msg.71.am/tmpstats.gif")
      })
    }, doClickRenrenLoginBtn: function (e) {
      e = Q.event.get(e), e.preventDefault(), a && this.thirdLoginPingBack()
    }, doClickQQLoginBtn: function (e) {
      e = Q.event.get(e), e.preventDefault(), a ? this.thirdLoginPingBack() : c(function (e) {
        Q.log.server({
          type: "baidupopdiv",
          jsuid: Q.cookie.get("QC006"),
          qtcurl: location.href,
          usract: "qqclcooplog",
          weid: e,
          mod: m.mod,
          pru: Q.cookie.get("P00PRU") || "",
          ppuid: d.getUid()
        }, "http://msg.71.am/tmpstats.gif")
      })
    }, showFloater: function () {
      this.shownFloater || (n && n.show(), this.shownFloater = !0, a ? c(function (e) {
        Q.log.server({
          type: "snsusrlog20121112",
          jsuid: Q.cookie.get("QC006"),
          sns: u,
          flashuid: Q.cookie.get("QC005"),
          act: "showdiv",
          weid: e,
          mod: m.mod,
          pru: Q.cookie.get("P00PRU") || "",
          ppuid: d.getUid()
        }, "http://msg.71.am/tmpstats.gif")
      }) : c(function (e) {
        Q.log.server({
          type: "baidupopdiv",
          jsuid: Q.cookie.get("QC006"),
          qtcurl: location.href,
          jsact: "show",
          weid: e,
          mod: m.mod,
          pru: Q.cookie.get("P00PRU") || "",
          ppuid: d.getUid()
        }, "http://msg.71.am/tmpstats.gif")
      }))
    }, hideFloater: function () {
      this.shownFloater && (this.shownFloater = !1, n && n.hide(), a || c(function (e) {
        Q.log.server({
          type: "baidupopdiv",
          jsuid: Q.cookie.get("QC006"),
          qtcurl: location.href,
          jsact: "hide",
          weid: e,
          mod: m.mod,
          pru: Q.cookie.get("P00PRU") || "",
          ppuid: d.getUid()
        }, "http://msg.71.am/tmpstats.gif")
      }))
    }, thirdLoginPingBack: function () {
      c(function (e) {
        Q.log.server({
          type: "snsusrlog20121112",
          jsuid: Q.cookie.get("QC006"),
          sns: u,
          flashuid: Q.cookie.get("QC005"),
          act: "clklogin",
          weid: e,
          mod: m.mod,
          pru: Q.cookie.get("P00PRU") || "",
          ppuid: d.getUid()
        }, "http://msg.71.am/tmpstats.gif")
      })
    }
  }), s.add(p)
});
define("../../units/userUpgrade/upgrade", ["../../components/action/checkDoms", "../../components/units/pageJob", "../../components/action/floater", "../../components/view/floaterView", "../../kit/juicer", "../../units/userUpgrade/upgradeViewTpl", "../../units/userUpgrade/upgradeMobileReg", "../../interfaces/profileNav", "../../kit/userInfo"], function (e, t, i) {
  var n = e("../../components/action/checkDoms"), a = e("../../components/units/pageJob"), r = e("../../components/action/floater"), o = e("../../components/view/floaterView");
  e("../../kit/juicer"), e("../../units/userUpgrade/upgradeViewTpl");
  var s = e("../../units/userUpgrade/upgradeMobileReg"), l = e("../../interfaces/profileNav"), d = e("../../kit/userInfo"), c = new l;
  Q.event.customEvent;
  var h = null, m = {}, u = "upgrade";
  a.create(u, {
    getDependentDoms: function () {
      m.check = Q('[data-widget-topnavloginbar="loginbar"]')
    }, check: function () {
      return n(m), !0
    }, init: function () {
      var e = this;
      e.setDom(), e.bindEvent(), d.isLogin() ? e._getUserInfo() : (m.$tipPop1.addClass("dn"), m.$tipPop2.addClass("dn"), m.$tipPop3.removeClass("dn")), Q.event.customEvent.on("upgradeInit", function (t) {
        e._callback(t.data)
      })
    }, bindEvent: function () {
      var e = this;
      e._scrollEvent(), e._loginBtnEvent()
    }, _getUserInfo: function () {
      var e = this;
      c.getProfile({fields: "prus,userinfo,qiyi_vip", authcookie: Q.cookie.get("P00007")}, function (t) {
        "A00000" === t.code && e._callback(t)
      })
    }, _callback: function (e) {
      var t = this, i = Q.cookie.get("upgradeTime"), n = null;
      if (!e.data.qiyi_vip_info)return m.$box.hide(), m.$underFrame.css("display", "none"), !1;
      if (n = parseInt(e.data.qiyi_vip_info.vipType, 10), !e.data.qiyi_vip_info || !i || 3 !== n)return m.$box.hide(), m.$underFrame.css("display", "none"), !1;
      var a = e.data.qiyi_vip_info.deadline.t - new Date, r = a / 1e3 / 60 / 60 / 24;
      t._setNavTipStyle(Math.ceil(r))
    }, _setNavTipStyle: function (e) {
      return 7 == e ? (m.$tipPop1.removeClass("dn"), m.$tipPop2.addClass("dn"), m.$tipPop3.addClass("dn"), m.$box.show(), m.$underFrame.css("display", "block"), !1) : e >= 0 && 3 >= e ? (m.$tipPop1.addClass("dn"), m.$tipPop2.removeClass("dn"), m.$tipPop3.addClass("dn"), m.$tipPop2.find(".c-day-hy").html(e + "天"), m.$box.show(), m.$underFrame.css("display", "block"), !1) : (m.$box.hide(), m.$underFrame.css("display", "none"), !1)
    }, _scrollEvent: function () {
      var e = this, t = null, i = !0;
      m.$vido && Q(window).scroll(function () {
        var n = m.$vido.position().top, a = Q(window).scrollTop(), r = m.$vido.height();
        clearInterval(t), t = setInterval(function () {
          var t = n + r / 2;
          if (a >= t) {
            m.$tipBox.css("display"), m.$tipBox.css("display", "block"), "none" !== m.$box.css("display") && m.$underFrame.css("display", "block");
            var o = m.$tipPop3.hasClass("dn");
            i && !o && e._sendPingBack("1504011_1"), i = !1
          } else m.$tipBox.css("display", "none"), m.$underFrame.css("display", "none"), i = !0
        }, 30)
      })
    }, _createfloater: function (e) {
      if (!h) {
        h = new r({
          view: new o({
            isResize: !0,
            zIndex: 4850
          })
        }), h.show({html: e}), m.$gradeBox = Q("#J_upgrade-box"), m.$timerBox = Q("#J_grade-timer"), m.$num = Q("#J_grade-timerNum"), m.$inputs = Q(".J_phone-inp"), m.$warnInfos = Q(".J_phone-inp-warn");
        var t = {dom: m, floater: h};
        new s(t).bindEvent(), Q.event.customEvent.on("upgradeHide", function () {
          h.hide()
        })
      }
    }, _loginBtnEvent: function () {
    }, _sendPingBack: function (e) {
      var t = {
        t: 21,
        rn: Math.random(),
        p: 10,
        pf: 1,
        p1: 101,
        bstp: 0,
        jsuid: Q.cookie.get("QC006") || "",
        ve: Q.getVideoEventID() || "",
        ce: "",
        u: Q.cookie.get("QC005") || "",
        block: e
      };
      Q.log.server(t, "http://msg.71.am/b")
    }, setDom: function () {
      m = {
        $box: Q('[data-widget-topnavloginbar="loginbar"]'),
        $con: Q('[data-topnavloginbar-elem="container"]'),
        $underFrame: Q('[data-topnavloginbar-elem="underframe"]'),
        $vido: Q('[data-widget-videoarea="videoarea"]'),
        $tipBox: Q("#J_grade-tip-box"),
        $tipPop1: Q("#J_grade-tip-pop1"),
        $tipPop2: Q("#J_grade-tip-pop2"),
        $tipPop3: Q("#J_grade-tip-pop3"),
        $tipRegbtn: Q("#J_grade-tip-regBtn")
      }
    }
  }), i.exports = u
});
define("../../units/userUpgrade/upgradeViewTpl", [], function (e, t, i) {
  var n = {tpl01: ['<div class="phone-pop-hy" data-widget-registbox="upgrade-registbox">', '<div class="hd">', '<a href="#" class="pop-closeBtn J_upgrade-pop-closeBtn">×</a>', "</div>", '<div class="bd " id="J_upgrade-box">', '<div class="prompt_hd">已有账号？<a href="javascript:void(0)" class="green" id="upgrade-loginscroll" rseat="1504011_5">立即登录&gt;</a></div>', '<div class="phone-list J_grade-phone-list">', '<label class="set-item">手机号：</label>', '<input type="text" class="inputComm J_phone-inp" placeholder="请输入手机号码" data-flag="false" id="J_grade-reg-phone" tabindex="1">', '<span class="registered J_phone-inp-warn"></span>', "</div>", '<div class="phone-list J_grade-phone-list">', '<label class="set-item">密&nbsp;&nbsp;&nbsp;码：</label>', '<input type="password" class="inputComm J_phone-inp" placeholder="8~20位字母、数字或字符，至少包含两种" data-flag="false" id="J_grade-reg-pwd" tabindex="2">', '<div class="mod-passwordStrength dn" id="J_pw-strength">', '<div class="passwordStrength_results">', '<span style="vertical-align:top;" class="dn" id="J_strength-t1">弱</span>', '<span style="vertical-align:top;" class="dn" id="J_strength-t2">中</span>', '<span style="vertical-align:top;" class="dn" id="J_strength-t3">强</span>', "</div>", '<div class="passwordStrength passwordStrength_level2">', '<div class="passwordStrength_blocks" id="J_grade-strength">', '<span class="strengthBlock_1 dn" id="J_strength-1"></span>', '<span class="strengthBlock_2 dn" id="J_strength-2"></span>', '<span class="strengthBlock_3 dn" id="J_strength-3"></span>', "</div>", "</div>", "</div>", '<span class="registered J_phone-inp-warn"></span>', "</div>", '<div class="phone-list phone-list-yzm J_grade-phone-list">', '<label class="set-item">验证码：</label>', '<div class="phone-list-yzmCon phone-list-yzmCon-img">', '<input type="text" class="inputComm1 J_phone-inp" placeholder="请输入验证码" data-flag="false" id="J_grade-reg-code" tabindex="3">', '<span class="free-msg-img free-yzm-get" data-registbox-elem="sms">', '<a href="javascript:void(0)" class="J_grade-get-code">获取验证码</a>', '<span style="" id="J_grade-timer" class="getSms_already dn">', '<span id="J_grade-timerNum">29</span>秒后重新获得', "</span>", "</span>", "</div>", '<span class="registered J_phone-inp-warn"></span>', "</div>", '<div class="logAuto">', '<span class="selected J_grade-pro-btn" data-flag="true">我同意<a href="http://passport.iqiyi.com/register/protocol.php" class="green">《用户服务协议》</a></span>', "</div>", '<div class="bindBlock"><a class="site-btn site-btn-green J_grade-phone-submit" rseat="1504011_4" href="javascript:void(0)">注册</a></div>', '<div class="divide-line-ico">使用合作帐号一键登录</div>', '<div class="otherBind-big clearfix">', '<a href="http://passport.iqiyi.com/apis/thirdparty/nlogin.action?type=2&isiframe=1&_pos=1&agenttype=1" data-sourceid="2" class="weibo" j-delegate="authLoginBtn"', 'rseat="1504011_6"></a>', '<a href="http://passport.iqiyi.com/apis/thirdparty/nlogin.action?type=4&isiframe=1&_pos=1&agenttype=1" data-sourceid="4" class="qq" j-delegate="authLoginBtn"', 'rseat="1504011_6"></a>', '<a href="http://passport.iqiyi.com/apis/thirdparty/nlogin.action?type=29&isiframe=1&_pos=1&agenttype=1" data-sourceid="29" class="weixin"', 'j-delegate="authLoginBtn" rseat="1504011_6"></a>', '<a href="http://passport.iqiyi.com/apis/thirdparty/nlogin.action?type=1&isiframe=1&_pos=1&agenttype=1" data-sourceid="1" class="baidu" j-delegate="authLoginBtn"', 'rseat="1504011_6"></a>', '<a href="http://passport.iqiyi.com/apis/thirdparty/nlogin.action?type=5&isiframe=1&_pos=1&agenttype=1" data-sourceid="5" class="zhifubao"', 'j-delegate="authLoginBtn" rseat="1504011_6"></a>', '<a href="http://passport.iqiyi.com/apis/thirdparty/nlogin.action?type=3&isiframe=1&_pos=1&agenttype=1" data-sourceid="3" class="renren"', 'j-delegate="authLoginBtn" rseat="1504011_6"></a>', '<a href="http://passport.iqiyi.com/apis/thirdparty/nlogin.action?type=30&amp;isiframe=1&amp;_pos=1&amp;agenttype=1" class="xiaomi" data-sourceid="30"', ' j-delegate="authLoginBtn" rseat="1504011_6"> </a>', '<a href="http://passport.iqiyi.com/apis/thirdparty/nlogin.action?type=31&amp;isiframe=1&amp;_pos=1&amp;agenttype=1" class="jd" data-sourceid="31"', ' j-delegate="authLoginBtn" rseat="1504011_6"> </a>', "</div>", "</div>", "</div>"].join("")};
  i.exports = n
});
define("../../units/userUpgrade/upgradeMobileReg", ["../../kit/pcUserRegistKit", "../../kit/validate", "../../kit/validate", "../../interfaces/verifyMobileInterface", "../../interfaces/mobileRegistInterface", "../../kit/setPwStrong", "../../kit/juicer", "../../units/userUpgrade/upgradeViewTpl"], function (e, t, i) {
  e("../../kit/pcUserRegistKit"), e("../../kit/validate");
  var n = e("../../kit/validate"), a = e("../../interfaces/verifyMobileInterface"), r = e("../../interfaces/mobileRegistInterface"), o = e("../../kit/setPwStrong"), s = e("../../kit/juicer"), l = e("../../units/userUpgrade/upgradeViewTpl"), d = Q.event.customEvent, c = {}, h = {};
  i.exports = Q.Class("upgradeMobileReg", {
    construct: function (e) {
      this.wrapper = e.wrapper, this.opt = e.dom || {}, this.floater = e.floater, this.init()
    }, methods: {
      init: function () {
        if (this.wrapper) {
          var e = s(l.tpl02, null);
          this.wrapper.html(e), this.bindEvent()
        } else c = this.opt, h = this.floater
      }, bindEvent: function () {
        var e = this;
        e._closeEvent(), e._tabKeyDownEvent(), e._inpBlurEvent(), e._proEvent(), e._getCodeEvent(), e._submitEvent(), e._loginBox()
      }, _submitEvent: function () {
        var e = this;
        Q(document).delegate(".J_grade-phone-submit", "click", function () {
          var t = Q(this).hasClass("site-btn-gray");
          t || e._submitCallback()
        })
      }, _submitCallback: function () {
        for (var e = this, t = Q(".J_phone-inp"), i = Q(".J_phone-inp-warn"), n = 0, a = t.length; a > n; n++) {
          var o = Q(i[n]), s = Q(t[n]).val(), l = Q(t[n]).attr("id");
          "J_grade-reg-phone" === l ? e._validatePhone(Q(t[n]), o, s) : "J_grade-reg-pwd" === l ? e._validatePwd(Q(t[n]), o, s) : "J_grade-reg-code" === l && e._validateCode(Q(t[n]), o, s)
        }
        var h = !0;
        if (t.each(function (e, t) {
            var i = Q(t).attr("data-flag");
            "true" != i && (h = !1)
          }), h) {
          var m = e.passwordRSA(Q(t[1]).val()), u = {
            authCode: Q(t[2]).val(),
            agenttype: 1,
            cellphoneNumber: Q(t[0]).val(),
            password: m,
            _pos: 1,
            serviceId: 2
          };
          (new r).register(u, function (e) {
            if ("A00000" === e.code) {
              if (e.data._loginName = u.cellphoneNumber, d.fire({type: "registed", data: e.data}), c.$tipPop1) {
                c.$tipPop1.removeClass("dn"), c.$tipPop2.addClass("dn"), c.$tipPop3.addClass("dn");
                var t = (new Date).getTime() + 6048e5;
                Q.cookie.set("upgradeTime", t)
              }
            } else Q(i[0]).html(e.msg)
          })
        }
      }, passwordRSA: function (e) {
        var t = "ab86b6371b5318aaa1d3c9e612a9f1264f372323c8c0f19875b5fc3b3fd3afcc1e5bec527aa94bfa85bffc157e4245aebda05389a5357b75115ac94f074aefcd", i = "10001", n = Q.crypto.rsa.RSAUtils.getKeyPair(i, "", t), a = Q.crypto.rsa.RSAUtils.encryptedString(n, encodeURIComponent(e)).replace(/\s/g, "-");
        return a
      }, _getCodeEvent: function () {
        var e = this;
        Q(document).delegate(".J_grade-get-code", "click", function (t) {
          var i = t.target, n = Q(Q(".J_phone-inp")[0]), r = n.val(), o = Q(Q(".J_phone-inp-warn")[0]);
          e._validatePhone(n, o, r);
          var s = n.attr("data-flag");
          if ("true" != s)return !1;
          var l = {requestType: 1, cellphoneNumber: r, serviceId: 2};
          (new a).getCaptchaNum(l, function (t) {
            "A00000" === t.code ? e._timer(i) : o.html(t.msg)
          })
        })
      }, _closeEvent: function () {
        Q(document).delegate(".J_upgrade-pop-closeBtn", "click", function () {
          h.hide()
        })
      }, _tabKeyDownEvent: function () {
        var e = this;
        Q(window).keydown(function (t) {
          var i = t.which, n = t.target, a = Q(".J_phone-inp");
          Q(".J_phone-inp-warn");
          var r = Q(n).attr("tabindex");
          if (r && (r = parseInt(r, 10), 9 === i && (t.preventDefault(), 3 === r && (r = 0), a[r].focus()), 13 === i)) {
            Q(a[r - 1]).val();
            var o = Q(a[r - 1]).attr("data-flag");
            if ("true" != o)3 === r && (r = 0), a[r].focus(), t.preventDefault(); else {
              var s = !0;
              a.each(function (e, t) {
                var i = Q(t).attr("data-flag");
                "true" != i && (s = !1)
              }), s ? e._submitCallback() : a[r].focus()
            }
          }
        })
      }, _inpBlurEvent: function () {
        var e = this;
        Q(document).delegate(".J_phone-inp", "blur", function (t) {
          e._callback(t)
        }), Q(document).delegate(".J_phone-inp", "keyup", function (t) {
          var i = t.which;
          9 != i && 13 != i && e._callback(t)
        })
      }, _callback: function (e) {
        var t = this, i = e.target, n = Q(i).attr("id"), a = Q(i).val(), r = Q(i).parents(".J_grade-phone-list"), o = r.find(".J_phone-inp-warn");
        "J_grade-reg-phone" === n ? t._validatePhone(i, o, a) : "J_grade-reg-pwd" === n ? t._validatePwd(i, o, a) : "J_grade-reg-code" === n && t._validateCode(i, o, a)
      }, _validatePhone: function (e, t, i) {
        if (!n.mobile(i))return n.empty(i) ? t.html("手机号格式错误") : t.html("手机号不能为空"), Q(e).attr("data-flag", "false"), !1;
        var r = {account: i, agenttype: 1};
        (new a).verifyNum(r, function (i) {
          return i.data !== !1 ? (t.html("该手机号已被注册"), Q(e).attr("data-flag", "false"), !1) : (t.html(""), Q(e).attr("data-flag", "true"), void 0)
        })
      }, _validatePwd: function (e, t, i) {
        n.empty(i) ? n.pwd(i) ? n.getIsTooSimple(i) ? (Q("#J_pw-strength").addClass("dn"), t.html("密码过于简单"), Q(e).attr("data-flag", "false")) : (t.html(""), Q(e).attr("data-flag", "true"), o.getStrongGrade(n.getScore(i))) : (Q("#J_pw-strength").addClass("dn"), t.html("密码为8~20位"), Q(e).attr("data-flag", "false")) : (Q("#J_pw-strength").addClass("dn"), t.html("密码不能为空"), Q(e).attr("data-flag", "false"))
      }, _validateCode: function (e, t, i) {
        n.empty(i) ? (t.html(""), Q(e).attr("data-flag", "true")) : (t.html("验证码不能为空"), Q(e).attr("data-flag", "false"))
      }, _proEvent: function () {
        Q(document).delegate(".J_grade-pro-btn", "click", function () {
          Q(this).toggleClass("selected"), Q(this).hasClass("selected") ? (Q(this).attr("data-flag", "true"), Q(".J_grade-phone-submit").removeClass("site-btn-gray").addClass("site-btn-green")) : (Q(this).attr("data-flag", "false"), Q(".J_grade-phone-submit").removeClass("site-btn-green").addClass("site-btn-gray"))
        })
      }, _timer: function (e) {
        var t = null;
        clearInterval(t), Q(e).addClass("dn");
        var i = 29, n = Q("#J_grade-timer");
        n.removeClass("dn"), t = setInterval(function () {
          i > 0 ? (i--, c.$num.html("" + i)) : (clearInterval(t), n.addClass("dn"), Q(e).removeClass("dn"), c.$num.html("29"))
        }, 1e3)
      }, _loginBox: function () {
        Q(document).delegate("#upgrade-loginscroll", "click", function (e) {
          e.preventDefault(), h.hide(), Q.external.openLoginBox()
        })
      }
    }
  })
});
define("../../interfaces/verifyMobileInterface", ["../kit/remoteInterface", "../config/siteDomain", "../kit/rsa", "../kit/fdlKit"], function (e, t, i) {
  var n = e("../kit/remoteInterface"), a = e("../config/siteDomain"), r = e("../kit/rsa"), o = a.getDomain(), s = e("../kit/fdlKit");
  i.exports = Q.Class("getAsideData", {
    construct: function () {
      this._remoteInterface = new n({
        verifyMobile: {url: "http://passport.iqiyi.com/apis/user/check_account.action"},
        getCaptchaNum: {url: "http://passport.iqiyi.com/apis/phone/send_cellphone_authcode.action"},
        checkMobileAndCaptcha: {url: "http://kylin." + o + "/validate"},
        checkPwAndCaptcha: {url: "http://passport.iqiyi.com/apis/phone/verify_cellphone_authcode.action"},
        checkSwitchAccount: {url: "https://passport.iqiyi.com/apis/phone/check_switch_account.action"},
        getSwitchInfo: {url: "https://passport.iqiyi.com/apis/phone/get_switch_info.action"},
        switchAcount: {url: "https://passport.iqiyi.com/apis/phone/switch_account.action"}
      })
    }, methods: {
      verifyNum: function (e, t) {
        e = e || {}, e.callback = e.callback || "verifyMobile", e.t = (new Date).getTime(), this._remoteInterface.send({
          param: e,
          ifname: "verifyMobile",
          dataType: "jsonp"
        }, function (e) {
          t && t(e)
        })
      }, getCaptchaNum: function (e, t) {
        e = e || {}, e.callback = e.callback || "getCaptchaNum", e.t = (new Date).getTime(), this._remoteInterface.send({
          param: e,
          ifname: "getCaptchaNum",
          dataType: "jsonp"
        }, function (e) {
          t && t(e)
        })
      }, checkMobileAndCaptcha: function (e, t) {
        var i = this;
        e = e || {}, e.passwd && (e.passwd = r.rsaFun(e.passwd)), e.agenttype = 1, e.t = (new Date).getTime(), e.server = "BEA3AA1908656AABCCFF76582C4C6660", e.url_src = "/apis/phone/bind_phone.action?", e.bird_src = "eb8d221bc0c04c5ab4ba735b6b1560a1", s.getToken(e, function (e) {
          "A00000" === e.code ? i._remoteInterface.send({
            dataType: "jsonp",
            ifname: "checkMobileAndCaptcha",
            param: e.param,
            domain: o
          }, function (e) {
            t && t(e)
          }) : t && t(e)
        })
      }, checkPwAndCaptcha: function (e, t) {
        e = e || {}, e.passwd && (e.passwd = r.rsaFun(e.passwd)), e.callback = e.callback || "checkPwAndCaptcha", e.t = (new Date).getTime(), this._remoteInterface.send({
          param: e,
          ifname: "checkPwAndCaptcha",
          dataType: "jsonp"
        }, function (e) {
          t && t(e)
        })
      }, checkSwitchAccount: function (e, t) {
        e = e || {}, e.callback = e.callback || "checkSwitchAccount", e.t = (new Date).getTime(), this._remoteInterface.send({
          param: e,
          ifname: "checkSwitchAccount",
          dataType: "jsonp"
        }, function (e) {
          t && t(e)
        })
      }, getSwitchInfo: function (e, t) {
        e = e || {}, e.callback = e.callback || "getSwitchInfo", e.t = (new Date).getTime(), this._remoteInterface.send({
          param: e,
          ifname: "getSwitchInfo",
          dataType: "jsonp"
        }, function (e) {
          t && t(e)
        })
      }, switchAcount: function (e, t) {
        e = e || {}, e.callback = e.callback || "switchAcount", e.t = (new Date).getTime(), this._remoteInterface.send({
          param: e,
          ifname: "switchAcount",
          dataType: "jsonp"
        }, function (e) {
          t && t(e)
        })
      }
    }
  })
});
define("../../kit/setPwStrong", [], function (e, t, i) {
  var n = {
    getStrong: function (e) {
      Q.$("#J_strength-1").removeClass("pw_low"), Q.$("#J_strength-2").removeClass("pw_mid"), Q.$("#J_strength-3").removeClass("pw_high"), 0 === e ? (Q.$("#J_strength-1").removeClass("pw_low"), Q.$("#J_strength-2").removeClass("pw_mid"), Q.$("#J_strength-3").removeClass("pw_high"), Q.$("#J_strength-t1").addClass("dn"), Q.$("#J_strength-t2").addClass("dn"), Q.$("#J_strength-t3").addClass("dn")) : 40 >= e ? (Q.$("#J_strength-1").addClass("pw_low"), Q.$("#J_strength-t1").removeClass("dn"), Q.$("#J_strength-t2").addClass("dn"), Q.$("#J_strength-t3").addClass("dn")) : e > 40 && 70 > e ? (Q.$("#J_strength-1").addClass("pw_low"), Q.$("#J_strength-2").addClass("pw_mid"), Q.$("#J_strength-1").addClass("pw_low"), Q.$("#J_strength-t1").addClass("dn"), Q.$("#J_strength-t2").removeClass("dn"), Q.$("#J_strength-t3").addClass("dn")) : e >= 70 && (Q.$("#J_strength-1").addClass("pw_low"), Q.$("#J_strength-2").addClass("pw_mid"), Q.$("#J_strength-3").addClass("pw_high"), Q.$("#J_strength-t1").addClass("dn"), Q.$("#J_strength-t2").addClass("dn"), Q.$("#J_strength-t3").removeClass("dn"))
    }, getStrongGrade: function (e) {
      Q("#J_pw-strength").removeClass("dn"), Q("#J_pw-strength").parents(".J_grade-phone-list"), 0 === e || (40 >= e ? (Q("#J_strength-1").removeClass("dn"), Q("#J_strength-2").addClass("dn"), Q("#J_strength-3").addClass("dn"), Q("#J_strength-t1").removeClass("dn"), Q("#J_strength-t2").addClass("dn"), Q("#J_strength-t3").addClass("dn")) : e > 40 && 70 > e ? (Q("#J_strength-1").removeClass("dn"), Q("#J_strength-2").removeClass("dn"), Q("#J_strength-3").addClass("dn"), Q("#J_strength-t1").addClass("dn"), Q("#J_strength-t2").removeClass("dn"), Q("#J_strength-t3").addClass("dn")) : e >= 70 && (Q("#J_strength-1").removeClass("dn"), Q("#J_strength-2").removeClass("dn"), Q("#J_strength-3").removeClass("dn"), Q("#J_strength-t1").addClass("dn"), Q("#J_strength-t2").addClass("dn"), Q("#J_strength-t3").removeClass("dn")))
    }
  };
  i.exports = n
});
define("../../units/lazyload", ["../components/units/pageJob", "../kit/lazyload"], function (e) {
  var t = e("../components/units/pageJob"), i = e("../kit/lazyload"), n = "lazyload";
  t.create(n, {
    getDependentDoms: function () {
      var e = {};
      return e
    }, check: function () {
      return !0
    }, exec: function () {
      i.init(), Q.event.customEvent.on("imagelazyload", function () {
        i.check()
      })
    }, destroy: function () {
      i.destroy()
    }
  }), t.add(n)
});
define("../../kit/lazyload", [], function (e, t, i) {
  var n, a, r = "data-lazy", o = function () {
  }, s = function () {
    a && clearTimeout(a), a = setTimeout(function () {
      n = null
    }, 100), l()
  }, l = function () {
    d(), n && n.length > 0 && n.forEach(function (e) {
      e = Q.$(e);
      var t = e.attr(r);
      t && e.isInScreen() && (e.attr("src", t), e.removeAttr(r), o(e))
    })
  }, d = function () {
    n || (n = Q.$("img[" + r + "]"))
  };
  i.exports = {
    init: function (e) {
      e = e || {}, r = e.flag || r, o = e.ready || o, Q.$(window).on("scroll", s), Q.$(window).on("resize", s), l()
    }, check: function () {
      n = null, l()
    }, destroy: function () {
      Q.$(window).un("scroll", s), Q.$(window).un("resize", s), n = null
    }
  }
});
define("../../units/dramaKingAddToDesktop", ["../components/units/pageJob", "../components/action/checkDoms", "../kit/yingyinPluginV2", "../kit/qiyiPlayer", "../kit/getWebEventID", "../kit/userInfo", "../kit/anim", "../config/siteDomain"], function (e) {
  var t = e("../components/units/pageJob"), i = e("../components/action/checkDoms"), n = e("../kit/yingyinPluginV2"), a = e("../kit/qiyiPlayer"), r = e("../kit/getWebEventID"), o = e("../kit/userInfo"), s = e("../kit/anim");
  e("../config/siteDomain");
  var l, d, c, h, m, u = new Q.ic.InfoCenter({moduleName: "dramaKingAddToDesktop"}), p = "dramaKingAddToDesktop", f = Q.plugins.clearSwf, g = a.getPlayer("video"), U = "QC029", V = !1, y = {}, v = window.info || {};
  v.data = v.data || {};
  var b, k = window.albumInfo || {}, x = [];
  t.create(p, {
    getDependentDoms: function () {
      var e = Q.$('*[data-widget-drama="desktop"]');
      return e && e.length > 0 && e.forEach(function (e) {
        var t = Q.$(e);
        x.push({
          doms: t,
          installWidget: t.down("[data-drama-check=install]"),
          installNoWidget: t.down("[data-drama-checkinstall=no]"),
          installYesWidget: t.down("[data-drama-checkinstall=yes]"),
          progressbarWidget: t.down("[data-drama-checkinstall=progressbar]"),
          titleWidget: t.down("[data-drama-elem=title]"),
          progressWidget: t.down("[data-drama-elem=progress]")
        })
      }), x
    }, check: function (e) {
      var t = !0;
      return e.forEach(function (e) {
        i(e)
      }), t
    }, init: function () {
      var e = this, t = Q.browser.getOS().toLowerCase().indexOf("win");
      return -1 == t ? !1 : (x.length && (V = n.checkDramaKing(), e.initDefaultData(), e.initStyle(), g.on("addToTable", function () {
        V ? (e.sendPingback({
          tvid: l,
          c1: b.ChannelID,
          url: b.VideoUrl,
          isInstall: 1,
          from: "suggest"
        }), e.installYingyinHandle({data: b})) : (e.sendPingback({
          tvid: l,
          c1: b.ChannelID,
          url: b.VideoUrl,
          isInstall: 0,
          from: "suggest"
        }), e.sendDataToFlash({data: b}), e.unInstallYingyinHandle({file: d}))
      }), g.on("videoChanged", function (e) {
        var t = e.data || {};
        b.AlbumID = parseInt(t.aid, 10) || 0, b.AlbumName = t.an || "", b.PicUrl = t.apic || "", b.TvYear = parseInt(t.ty, 10) || 0, b.VideoUrl = t.vu || "", l = t.tvid
      }), Q.$(document).delegate("installdrama", e.doDeskClickHander.bind(this)), setTimeout(function () {
        e.initStyle()
      }, 3e4), setTimeout(function () {
        e.initStyle()
      }, 6e4), setTimeout(function () {
        e.initStyle()
      }, 12e4)), void 0)
    }, initDefaultData: function () {
      switch (d || (d = x[0].installWidget.attr("data-drama-exefile") || "http://static.qiyi.com/ext/common/QYFollowVideo/QiyiInstaller.exe"), c || (c = x[0].installWidget.attr("data-drama-classno") || "addToDesk_btn--progress"), h || (h = x[0].installWidget.attr("data-drama-classyes") || "addToDesk_btn--complete"), m || (m = x[0].doms.attr("data-desktop-from")), m) {
        case"album":
          m = "album";
          break;
        case"searchlist":
          m = "search";
          break;
        default:
          m = "player"
      }
    }, initStyle: function () {
      var e = this;
      x.forEach(function (t) {
        var i = t.doms;
        if ("none" == i.css("display") && i.css("display", "block"), l || (l = t.installWidget.attr("data-drama-tvid") || k.tvId || 0), b = e.getInitParam(t.installWidget), V) {
          var a = b.AlbumID, r = {};
          if (y[a] && y[a].albumid)e.setStyleAdded(t); else {
            var o = n.sendInfoToDrama(b);
            o ? (e.setStyleAdded(t), r.albumid = a, r.isadd = !0) : (e.setStyleToAdd(t), r.isadd = !1)
          }
          y[a] = r
        }
      })
    }, doDeskClickHander: function (e) {
      var t = this;
      Q.event.get(e).preventDefault();
      var i = Q.$(e.target || e.srcElement), n = {
        installWidget: i,
        installNoWidget: i.down("[data-drama-checkinstall=no]"),
        installYesWidget: i.down("[data-drama-checkinstall=yes]"),
        progressbarWidget: i.down("[data-drama-checkinstall=progressbar]"),
        titleWidget: i.down("[data-drama-elem=title]"),
        progressWidget: i.down("[data-drama-elem=progress]")
      }, a = n.installWidget.attr("data-drama-tvid") || k.tvId || 0, r = n.installWidget.attr("data-drama-albumid") || k.albumId || 0, o = n.installWidget.attr("data-drama-categoryid") || k.albumType || 0;
      if (!(y[r] && y[r].albumid || y[r] && y[r].isadd))if (b && "search" != m || (b = t.getInitParam(n.installWidget)), V) {
        var s = {};
        s.albumid = r, s.isadd = !0, y[r] = s, t.sendPingback({
          tvid: a,
          c1: o,
          url: b.VideoUrl,
          isInstall: 1,
          from: m
        }), n.installNoWidget.hide(), n.progressbarWidget.show(), "search" == m ? t.setStyleAddedlist(n) : t.setStyleProgress(n), t.installYingyinHandle({data: b})
      } else t.sendPingback({
        tvid: a,
        c1: o,
        url: b.VideoUrl,
        isInstall: 0,
        from: m
      }), t.sendDataToFlash({data: b}), t.unInstallYingyinHandle({file: d})
    }, setPageCookieName: function (e) {
      var t = e.installWidget, i = t.attr("data-drama-albumid") || k.albumId || 0, n = t.attr("data-drama-tvid") || k.tvId || 0;
      U += "album" == m ? i : n
    }, getPageCookieValue: function () {
      return Q.cookie.get(U)
    }, getInitParam: function (e) {
      var t, i = e || {}, n = i.attr("data-drama-categoryid") || k.albumType || 0, a = i.attr("data-drama-albumid") || k.albumId || 0, r = i.attr("data-drama-albumname") || k.tvName || "", o = i.attr("data-drama-albumpicurl") || k.tvPictureUrl || "", s = i.attr("data-drama-sourcename") || "", l = i.attr("data-drama-sourceid") || 0, d = i.attr("data-drama-tvyear") || k.tvYear || 0, c = 0;
      return t = "search" == m ? i.attr("data-drama-currenturl") || "" : location.href, {
        ChannelID: parseInt(n, 10),
        AlbumID: parseInt(a, 10),
        AlbumName: r,
        PicUrl: o,
        SouceName: s,
        SouceCode: parseInt(l, 10),
        VideoUrl: t,
        TvYear: parseInt(d, 10),
        Type: c
      }
    }, setStyleAdded: function (e) {
      e.installNoWidget.hide(), e.progressbarWidget.hide(), e.installYesWidget.show(), e.installWidget.removeClass(c), e.installWidget.addClass(h)
    }, setStyleAddedlist: function (e) {
      e.progressbarWidget.hide(), e.installYesWidget.show(), e.installWidget.addClass(h)
    }, setStyleToAdd: function (e) {
      e.installNoWidget.show(), e.installYesWidget.hide()
    }, setStyleProgress: function (e) {
      var t = this, i = e.progressWidget.parent().width() - 2, n = e.progressWidget.attr("data-drama-progresstime") || 100, a = parseInt(n, 10) / 100;
      e.installWidget.addClass(c);
      var r = 0, o = setInterval(function () {
        if (100 > r) {
          e.titleWidget.html(r + "%");
          var n = parseFloat(r / 100 * i);
          e.progressWidget.css("width", n + "px"), r++
        } else clearInterval(o), t.setStyleAdded(e)
      }, a)
    }, doShowPopbox: function (e) {
      var t = e.popbox, i = e.animtime, n = e.loadtime, a = parseFloat(t.css("opacity"));
      Q.browser.IE ? setTimeout(function () {
        t.show()
      }, n) : (t.show(), setTimeout(function () {
        s({style: "opacity", elem: t, from: a, to: 1, ease: "Circ.easeIn", duration: i})
      }, n))
    }, doHidePopbox: function (e) {
      var t = e.popbox, i = e.animtime, n = e.loadtime;
      Q.browser.IE ? setTimeout(function () {
        t.hide()
      }, n) : setTimeout(function () {
        var e = parseFloat(t.css("opacity"));
        s({
          style: "opacity", elem: t, from: e, to: 0, ease: "Circ.easeInOut", duration: i, done: function () {
            t.hide()
          }
        })
      }, n)
    }, sendPingback: function (e) {
      var t, i, n = e.tvid, a = e.url, s = e.from, l = e.isInstall, d = e.c1;
      l ? (t = 31, i = n) : (t = 0, i = "download");
      var c = Q.date.format(new Date, "yyyyMMddHHmmss"), h = Q.crypto.md5(c), m = Q.cookie.get("QC005"), u = Math.floor(999999999 * Math.random()), p = o.getUid(), f = "http://msg.71.am/b";
      r(function (e) {
        var n = {
          t: 5,
          a: t,
          pf: 1,
          p: 11,
          p1: 102,
          c1: d,
          s1: 1,
          s2: s,
          s3: a,
          r: i,
          e: h,
          se: e,
          u: m,
          pu: p,
          rn: u
        }, r = decodeURIComponent(Q.url.jsonToQuery(n)), o = new Image(1, 1);
        o.src = f + "?" + r
      })
    }, installYingyinHandle: function (e) {
      var t = e.data;
      n.downDramaKing(t) ? u.warn("[ " + p + " ]" + 'access to "GetDeskFavorInfo" success !') : u.warn("[ " + p + " ]" + 'access to "GetDeskFavorInfo" failure !')
    }, unInstallYingyinHandle: function (e) {
      location.href = e.file, u.warn("[ " + p + " ]" + 'access to "GetDeskFavorInfo" failure !')
    }, sendDataToFlash: function (e) {
      var t = e.data;
      try {
        f.on("ready", function (e) {
          e.setDeskTVInfo(JSON.stringify(t))
        }), u.warn("[ " + p + " ]" + 'access to "setDeskTVInfo" success !')
      } catch (i) {
        u.warn("[ " + p + " ]" + 'access to "setDeskTVInfo" failure !')
      }
    }
  }), t.add(p)
});
define("../../kit/flashSnsAuth", ["../kit/qiyiPlayer", "../kit/snsWindowKit", "./flashCall"], function (e) {
  var t = e("../kit/qiyiPlayer");
  t.getPlayer("video");
  var i = e("../kit/snsWindowKit"), n = e("./flashCall");
  Q.event.customEvent.on("thirdPartSnsBinded", function (e) {
    n({
      flashID: "flash", callback: function () {
      }, functionName: "noticeBindInfo", parameter: e
    })
  }), Q.event.customEvent.on("swf_flashSnsAuth", function (e) {
    var t = e.data.type, n = e.data.url;
    i.open(t, n)
  })
});
define("../../kit/flashCall", [], function (e, t, i) {
  i.exports = function (e) {
    e = e || {};
    var t, i, n = Q.$("#" + (e.flashID || "")), a = e.functionName, r = e.parameter, o = e.tryTimes || 0, s = e.perTimes || 500, l = 0, d = e.callback || Q.fn.emptyMethod;
    n && a && (t = function () {
      try {
        return void 0 === r ? d(n[0][a]()) : "[object Object]" == Object.prototype.toString.apply(r) || "[object Array]" == Object.prototype.toString.apply(r) ? d(n[0][a](JSON.stringify(r))) : d(n[0][a](r)), !0
      } catch (e) {
        return !1
      }
    }, function () {
      return clearTimeout(i), t() ? void 0 : ((!o || o > l) && (i = setTimeout(arguments.callee, s), l++), void 0)
    }())
  }
});
define("../../units/iframeOpenWin", ["../components/units/pageJob", "../kit/iframeLocation"], function (e) {
  var t = e("../components/units/pageJob"), i = e("../kit/iframeLocation"), n = "iframeOpenWin";
  t.create(n, {
    check: function () {
      return !0
    }, init: function () {
      if (window.top !== window.self && i.test(document.referrer)) {
        var e = document.createElement("base");
        e.target = "_blank", document.getElementsByTagName("head")[0].appendChild(e)
      }
    }
  }), t.add(n)
});
define("../../units/pcYingYinDownload", ["../components/units/pageJob", "../components/action/checkDoms", "../kit/pcYingYinDownloadKit", "../interfaces/getDownloadUrlInterface"], function (e, t, i) {
  var n, a = e("../components/units/pageJob"), r = e("../components/action/checkDoms"), o = e("../kit/pcYingYinDownloadKit"), s = "pcYingYinDownload", l = e("../interfaces/getDownloadUrlInterface");
  a.create(s, {
    getDependentDoms: function () {
      return n = Q.$("*[data-widget-pcyingyingdownload]"), {pcdown: n}
    }, check: function (e) {
      return r(e), !0
    }, init: function () {
      n.forEach(function (e) {
        e = Q.$(e);
        var t = new o({doms: e});
        t.init();
        var i = {pubarea: e.attr("pubarea"), srcchannel: document.referrer};
        e.attr("href", l.getDownloadUrl(i))
      })
    }
  }), i.exports = s, a.add(s)
});
define("../../kit/pcYingYinDownloadKit", ["../kit/userInfo", "../kit/iframeLocation"], function (e, t, i) {
  var n = e("../kit/userInfo"), a = e("../kit/iframeLocation"), r = Q.Class("VideoDownload", {
    construct: function (e) {
      this._doms = e.doms
    }, methods: {
      init: function () {
        this.bindEvent()
      }, bindEvent: function () {
        var e = this._doms, t = this;
        e.on("click", function (e) {
          Q.event.get(e).preventDefault();
          var i = Q.$(this), n = i.attr("data-pcyingyingdownload-type"), r = i.attr("data-pcyingyingdownload-ptype"), o = i.attr("data-pcyingyingdownload-etype"), s = i.attr("data-pcyingyingdownload-pack");
          t.sendPingback({type: n, ptype: r, etype: o, packageType: s}), a.href(i.attr("href"), {time: 500})
        })
      }, sendPingback: function (e) {
        e = e || {}, Q.log.server({
          type: e.type || "yingyinentrencem20130813",
          ppuid: n.getUid(),
          pru: Q.cookie.get("P00PRU") || "",
          flshuid: Q.cookie.get("QC005"),
          jsuid: Q.cookie.get("QC006"),
          qtcurl: a.url() || "",
          pagetype: e.ptype || "",
          packgtype: e.packageType || "",
          enttype: e.etype || "",
          tn: (new Date).getTime() + Math.random()
        }, "http://msg.71.am/tmpstats.gif")
      }
    }
  });
  i.exports = r
});
define("../../units/videoDownloadSelectBox", ["../components/units/pageJob", "../components/action/checkDoms", "../action/videoDownloadSelectBox", "../interfaces/cache_avlistInterface"], function (e, t, i) {
  var n = e("../components/units/pageJob"), a = e("../components/action/checkDoms"), r = e("../action/videoDownloadSelectBox"), o = e("../interfaces/cache_avlistInterface"), s = "videoDownloadSelectBox", l = Q.PageInfo && Q.PageInfo.playPageInfo || {}, d = !1, c = null, h = !1;
  n.create(s, {
    getDependentDoms: function () {
      var e = Q.$("#data-widget-downloadSelect") || Q.$("*[data-downloadselect-elem=tab]");
      return c = {widget: e}
    }, check: function (e) {
      return a(e), !0
    }, generateBox: function (e, t) {
      var i = {
        bussinessPage: this.bussinessPage || "",
        list: this.dataChecker,
        total: this.total_page,
        count: this.total_count,
        vipSilde: this.vipSilde,
        doms: c,
        aid: e
      };
      t && (i.pageNum = t), new r(i)
    }, requestData: function (e, t, i) {
      var n = new o, a = this, r = function (e) {
        for (var t in e)return !1;
        return !0
      }, s = {albumId: e, pageNo: t};
      !i || "quanwangyingshi" != a.bussinessPage && "search" != this.bussinessPage || (s.pageNum = i), n.request(s, function (t) {
        if ("A00000" === t.code) {
          if (d)r(a.dataChecker) || a.dataChecker[1].length || (a.dataChecker[parseInt(t.data.pg, 10)] = t.data.vlist); else {
            a.total_page = t.data.pgt, a.total_count = t.data.pt ? t.data.pt : t.data.pm;
            for (var n = 1; n <= a.total_page; n++)a.dataChecker || (a.dataChecker = {}), a.dataChecker[n] = [];
            a.dataChecker[parseInt(t.data.pg, 10)] = t.data.vlist
          }
          a.loadFlag--, a.loadFlag || a.generateBox(e, i)
        }
      })
    }, init: function () {
      this.total_page = 0, this.list = null, this.loadFlag = 0, this.dataChecker = null;
      var e, t = 0;
      c.downloadBtn = Q.$("#data-videodownload-downBtn"), c.downloadBtn && (e = c.downloadBtn.attr("data-videodownload-albumid") || l.albumId, t = parseInt(e, 10));
      var i = this;
      Q.event.customEvent.on("generate_download_pager", function (e) {
        t = e.data.data.data.aid;
        for (var n = 1; n <= e.data.data.data.pgt; n++)i.dataChecker || (i.dataChecker = {}), i.dataChecker[n] || (i.dataChecker[n] = []), n === parseInt(e.data.data.data.pg, 10) && (i.dataChecker[n] = e.data.data.list);
        i.total_page = parseInt(e.data.data.data.pgt, 10), i.total_count = parseInt(e.data.data.data.pt, 10), d = !0
      }), Q.event.customEvent.on("open_videodownload_box", function (e) {
        i.loadFlag = 0, i.dataChecker = null, i.bussinessPage = e.data.bussinessPage || "", i.pageNum = e.data.pageNum || 75, i.vipSilde = e.data.vipSilde || !1, e.data && (e.data.aid || e.data.vid) && (h = !0, t = e.data.aid, i.dataChecker = null), Q.__clientDownLoad = {}, Q.__clientDownLoad.title = e.data.title.replace(/第\d+集$/, ""), Q.__clientDownLoad.aid = e.data.aid, i.dataChecker && i.dataChecker[1].length || (i.loadFlag++, i.requestData(t, 1, i.pageNum)), i.loadFlag = 1, i.loadFlag || i.generateBox(t, i.pageNum)
      })
    }
  }), i.exports = s, n.add(s)
});
define("../../action/videoDownloadSelectBox", ["../components/action/widget", "../kit/eventPlugin", "../view/videoDownloadSelectBoxView", "../components/view/floaterNoCoverView", "../components/action/floater", "../kit/flashCall", "../action/slideWidgetV2"], function (e, t, i) {
  var n = e("../components/action/widget"), a = e("../kit/eventPlugin"), r = e("../view/videoDownloadSelectBoxView"), o = e("../components/view/floaterNoCoverView"), s = e("../components/action/floater"), l = e("../kit/flashCall"), d = e("../action/slideWidgetV2"), c = null, h = null, m = {};
  i.exports = Q.Class("VideoDownloadSelectWidget", {
    extend: n, plugins: [new a], construct: function (e) {
      this.showFloater(e), l({flashID: "flash", functionName: "pauseQiyiVideo"})
    }, statics: {
      getBox: function () {
        return this
      }
    }, properties: {
      events: {
        next: function () {
          this.next()
        }
      }
    }, methods: {
      init: function () {
      }, insertAfter: function (e, t) {
        e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t)
      }, matchDownloadBox: function (e) {
        var t = Q.$("#data-widget-downloadSelectWrap");
        if (t)return t;
        for (var i = Q.$('[data-widget-downloadselectwrap="wrap"]'), n = 0, a = i.length; a > n; n++) {
          var r = Q.$(i[n]);
          if (r.attr("data-downloadselect-albumid") == e)return r
        }
      }, slideFun: function (e) {
        var t = e.doms.widget, i = t.down('[data-widget-vipdown="vipdown"]'), n = 0, a = 0;
        if (i && (n = Number(i.attr("data-total")), a = Number(i.attr("data-min"))), i && !(a > n)) {
          var r = i.down("[data-slide-elem=vipslidelist]");
          i.attr("data-select-cls") || "selected";
          var o = {
            pbtn: i.down("[data-slide-elem=pbtn]"),
            nbtn: i.down("[data-slide-elem=nbtn]"),
            content: i.down("[data-slide-elem=vipslidecnt]"),
            list: r,
            item: r.down('[data-slide-elem="item"]'),
            widget: i
          }, s = d.getSlide("downList");
          if (s)s[0].focusTo(1), s[0].moveTo(1); else {
            var l = parseInt(i.attr("data-slide-step"), 10), c = i.attr("data-slide-useDefaultOffset"), h = {
              interval: parseInt(i.attr("data-slide-interval"), 10) || 3e3,
              name: i.attr("data-slide-name"),
              enableScroll: "true" === i.attr("data-slide-enableScroll"),
              enableTouch: "true" === i.attr("data-slide-enableTouch"),
              itemWidth: i.attr("data-slide-itemWidth") || 100,
              lBtnClass: i.attr("data-slide-lBtnClass") || "disable",
              disp: i.attr("data-slide-disp") || l,
              rBtnClass: i.attr("data-slide-rBtnClass") || "disable",
              doms: o,
              useDefaultOffset: c,
              total: Math.ceil(o.item.length / l) * l,
              itemfocusclass: "selected",
              step: l,
              style: i.attr("data-slide-style"),
              focus: 1,
              first: 1,
              offset: parseInt(i.attr("data-slide-offset"), 10) || 0
            }, m = new d(h);
            m.on("mousescroll", function (e) {
              "up" == e.data.act ? m.prev() : "down" == e.data.act && m.next()
            }), m.start()
          }
        }
      }, showFloater: function (e) {
        var t = this.matchDownloadBox(e.aid), i = Q.$(".J_downLoadSelectBoxWrap");
        i && i.css("display", "none"), e.doms = {
          widget: t.down('[data-downloadSelect-elem="tab"]') || Q.$("#data-widget-downloadSelect"),
          titleWrap: t.down('[data-downloadSelect-elem="titleWrap"]') || Q.$("#data-downloadSelect-titleWrap"),
          btnWrap: t.down('[data-downloadSelect-elem="btnWrap"]') || Q.$("#data-downloadSelect-btnWrap"),
          downloadBtn: t.down('[data-videodownload-elem="downBtn"]') || Q.$("#data-videodownload-downBtn")
        }, c = new s({
          view: new o({
            isResize: !0,
            noOverflowHidden: !0,
            zIndex: 500
          })
        }), e.floater = c, m[e.aid] = h = new r(e), Q.browser.ff && (t[0].style.borderWidth = "0px");
        var n = t[0], a = 0;
        if (window.getComputedStyle) {
          var l = window.getComputedStyle(n);
          a = parseInt(l.height, 10) + 2 * parseInt(l.borderTopWidth, 10)
        } else a = parseInt(n.clientHeight, 10) + 2 * parseInt(n.currentStyle.borderWidth, 10);
        var d = document.createElement("iframe");
        d.setAttribute("data-downloadselect-elem", "underframe"), d.style.height = (a || 0) + "px", Q.$(d).addClass("gasket520Box"), this.insertAfter(n, d), c.show({elem: t}), e.vipSilde && e.total > 7 && this.slideFun(e), t.parent().addClass("J_downLoadSelectBoxWrap")
      }
    }
  })
});
define("../../view/videoDownloadSelectBoxView", ["../components/view/view", "../action/tab", "../kit/qiyiPlayer", "../kit/yingyinPluginV2", "../interfaces/cache_avlistInterface", "../kit/userInfo"], function (e, t, i) {
  var n, a = e("../components/view/view"), r = e("../action/tab"), o = e("../kit/qiyiPlayer").getPlayer("video"), s = e("../kit/yingyinPluginV2"), l = e("../interfaces/cache_avlistInterface"), d = e("../kit/userInfo"), c = null, h = !1, m = 0, u = Q.Class("VideoDownloadPagerView", {
    extend: a,
    construct: function (e) {
      h = e.doms.widget.attr("data-downloadselect-inclient"), this.bussinessPage = e.bussinessPage || "", this.total_count = e.count, this.total_page = e.total, this.curTabPage = 1, this.pageNum = e.pageNum || 75;
      var t = e.doms.widget.down("[data-downloadSelect-tpl=tabtitle]")[0].value;
      c = e.doms.widget.down("[data-downloadSelect-tpl=item]")[0].value;
      var i = e.doms.widget.down('[data-downloadselect-elem="tabbody"]'), n = null;
      this.floater = e.floater;
      var a = parseInt(e.total, 10);
      e.doms.widget.down('[data-elem="tabbody"]') && e.doms.widget.down('[data-elem="tabbody"]').forEach(function (e) {
        e.parentNode.removeChild(e)
      }), e.doms.titleWrap[0].innerHTML = "";
      for (var r = 0; r < e.total; r++) {
        n = this.generateTabBody(0 === r ? !0 : !1), i ? (i.append(n), i.down(".popup-juji-list").removeClass("popup-juji-list")) : e.doms.widget[0].insertBefore(n, e.doms.btnWrap[0]), 0 === r && n.setAttribute("data-videodownload-elem", "selectedBody");
        var o = Q.plugins.Mustache.render(t, {
          seq: r,
          start: r * this.pageNum + 1,
          end: r + 1 === a ? e.count : (r + 1) * this.pageNum
        });
        if (e.doms.titleWrap.removeClass("dn"), e.doms.titleWrap[0].innerHTML += o, e.list[r + 1].length) {
          var s = e.doms.titleWrap.down("[data-seq=" + r + "]"), l = !0, d = "", m = "";
          s && s.attr("data-load", "true");
          var u = e.list[r + 1];
          this.removeForeEpsoide(u);
          for (var p = 0; p < u.length; p++) {
            var f = {pd: u[p].pd, tvid: u[p] ? u[p].id : 0};
            ("quanwangyingshi" === e.bussinessPage || "search" === e.bussinessPage) && (1 === u[p].mdown ? (d = this.isVip() ? "" : "album_item_vip", l = this.isVip() && 1 == u[p].plcdown["17"] ? !0 : !1, m = "album_juji_vip") : (d = "", l = !0, m = ""), f.candown = l, f.candownico = d, f.vipico = m), n.innerHTML += Q.plugins.Mustache.render(c, f)
          }
        }
      }
      this.callsuper(e), this.init(e.aid)
    },
    methods: {
      removeForeEpsoide: function (e) {
        if (e && e.length)for (var t = 0; t < e.length; t++)"" === e[t].pubTime && e.splice(t--, 1)
      }, generateTabBody: function (e) {
        var t = document.createElement("ul");
        return t.setAttribute("data-elem", "tabbody"), Q.$(t).addClass("popup-juji-list clearfix"), e || (t.style.display = "none"), t
      }, resetDoms: function () {
        this.doms = {
          widget: n,
          items: n.down("[data-downloadSelect-elem=item]"),
          counterWrap: Q.$("#data-downloadSelect-counterWrap") || n.down("*[data-downloadSelect-elem=counterWrap]"),
          counter: Q.$("#data-downloadSelect-counter") || n.down("*[data-downloadSelect-elem=counter]"),
          selectAll: Q.$("#data-videodownload-selectAll") || n.down("*[data-videodownload-elem=selectAll]"),
          warn: Q.$("#data-videodownload-warn") || n.down("*[data-videodownload-elem=warn]"),
          emptyWarn: Q.$("#data-videodownload-empty") || n.down("*[data-videodownload-elem=empty]"),
          closeBtn: Q.$("#data-videodownload-close") || n.down("*[data-videodownload-elem=close]"),
          title: Q.$("#data-videodownload-title") || n.down("*[data-videodownload-elem=title]"),
          downloadBtn: Q.$("#data-videodownload-downBtn") || n.down("*[data-videodownload-elem=downBtn]")
        }
      }, matchDownloadBox: function (e) {
        var t = Q.$("#data-widget-downloadSelectWrap");
        if (t)return t;
        for (var i = Q.$("*[data-widget-downloadselectwrap=wrap]"), n = 0, a = i.length; a > n; n++) {
          var r = Q.$(i[n]);
          if (r.attr("data-downloadselect-albumid") == e)return r
        }
      }, init: function (e) {
        n = this.matchDownloadBox(e), this.resetDoms(), this.doms.title[0].innerHTML = Q.__clientDownLoad.title, this.counter = 0, this.initTab(), this.bindEvent()
      }, initTab: function () {
        var e = Q.$("#data-widget-downloadSelect") || n.down("*[data-downloadSelect-elem=tab]"), t = {
          widget: e,
          titles: e.down("[data-elem=tabtitle]"),
          bodies: e.down("[data-elem=tabbody]")
        }, i = this;
        i.updataConter();
        for (var a in t)if (!t[a])return;
        this.tab = new r({doms: t}), o._player ? o.getVideoInfo(function (e) {
          for (var t = e.pd, a = 0; a < i.total_page; a++) {
            var r = a * i.pageNum + 1, o = (a + 1) * i.pageNum;
            if (o >= t && t >= r) {
              i.curTabPage = a + 1, i.tab.select(a + 1);
              var s = n.down("[data-videodownload-elem=selectedBody]");
              s.attr("data-videodownload-elem", "");
              var l = i.tab._model._data.focus, d = i.tab._view._doms.bodies[l - 1];
              return d.setAttribute("data-videodownload-elem", "selectedBody"), void 0
            }
          }
          i.tab.select(1)
        }) : i.tab.select(1)
      }, updataConter: function () {
        this.total_count <= this.pageNum && this.counter <= this.pageNum ? this.doms.counterWrap[0].style.display = "none" : 0 === this.counter ? this.doms.counterWrap[0].style.display = "none" : (this.doms.counterWrap[0].style.display = "block", this.doms.counter[0].innerHTML = this.counter), this.doms.emptyWarn && (this.doms.emptyWarn[0].style.display = "none")
      }, selectItem: function (e) {
        if (!e.attr("data-candown") || "false" != e.attr("data-candown")) {
          e.addClass("selected"), e.attr("data-downloadSelect-selected", "true");
          var t = n.down("*[data-downloadSelect-selected=true]");
          this.counter = t ? t.length : 0, this.counter > this.pageNum && this.counterOverWarn(), this.updataConter()
        }
      }, cancelSelectItem: function (e) {
        if (!e.attr("data-candown") || "false" != e.attr("data-candown")) {
          this.cancelSelectAllStyle(), e.removeClass("selected"), e.attr("data-downloadSelect-selected", "false");
          var t = n.down("*[data-downloadSelect-selected=true]");
          this.counter = t ? t.length : 0, this.counter <= this.pageNum && this.cancelCounterWarn(), this.updataConter()
        }
      }, cancelSelectAllStyle: function () {
        var e = this;
        e.doms.selectAll && e.doms.selectAll.removeClass(e.doms.selectAll.attr("checkcls"))
      }, counterOverWarn: function () {
        this.doms.warn[0].style.display = "inline"
      }, cancelCounterWarn: function () {
        this.doms.warn[0].style.display = "none"
      }, reset: function (e) {
        n = this.matchDownloadBox(e), this.resetDoms();
        var t = n.down("[data-downloadSelect-selected=true]");
        if (this.tab) {
          this.tab.select(this.curTabPage);
          var i = n.down("[data-videodownload-elem=selectedBody]");
          i.attr("data-videodownload-elem", "");
          var a = this.doms.widget.down("[data-elem=tabbody]");
          a[this.curTabPage - 1].setAttribute("data-videodownload-elem", "selectedBody")
        }
        var r = this;
        t && t.forEach(function (e) {
          r.cancelSelectItem(Q.$(e))
        })
      }, updateUnderframe: function () {
        var e = n.parent().down("[data-downloadselect-elem=underframe]");
        if (e) {
          e = e[0];
          var t = n[0], i = 0;
          if (window.getComputedStyle) {
            var a = window.getComputedStyle(t);
            i = parseInt(a.height, 10) + 2 * parseInt(a.borderTopWidth, 10)
          } else i = parseInt(t.clientHeight, 10) + 2 * parseInt(t.currentStyle.borderWidth, 10);
          i = i || 0, e.style.height = i + "px"
        }
      }, download: function (e) {
        h ? s.downProtocol(e) : s.down(e)
      }, isVip: function () {
        return 1 === parseInt(d.getStatus(), 10)
      }, bindEvent: function () {
        function e() {
          var e = n.down("[data-videodownload-elem=selectedBody]"), i = e.down("li");
          i.length, t.doms.selectAll.hasClass(a) ? (a && t.doms.selectAll.removeClass(a), i.forEach(function (e) {
            t.cancelSelectItem(Q.$(e))
          })) : (a && t.doms.selectAll.addClass(a), i.forEach(function (e) {
            t.selectItem(Q.$(e))
          }))
        }

        var t = this, i = function () {
          var e = Q.$(this);
          e.attr("data-candown") && "false" == e.attr("data-candown") || (e.hasClass("selected") ? t.cancelSelectItem(e) : e.hasClass("selected") || t.selectItem(e))
        };
        t.doms.downloadBtn.on("mousedown", function () {
          "quanwangyingshi" === t.bussinessPage && t.counter > 0 ? t.doms.downloadBtn.attr("data-pb", "r=离线下载") : t.doms.downloadBtn.attr("data-pb", "")
        }), t.doms.downloadBtn[0].onclick = function () {
          var e = Q.$(this);
          if (t.counter = n.down("[data-downloadSelect-selected=true]") ? n.down("[data-downloadSelect-selected=true]").length : 0, 0 === t.counter || t.counter > t.pageNum)return 0 === t.counter && t.doms.emptyWarn && (t.doms.emptyWarn[0].style.display = "inline"), !1;
          var i = [], a = n.down("[data-downloadSelect-selected=true]");
          a.forEach(function (e) {
            i.push(e.getAttribute("data-downloadSelect-tvid"))
          });
          var r = Q.__clientDownLoad.aid, o = Q.__clientDownLoad.title, s = e.attr("data-mdown") || 0, l = !0;
          t.download({
            albumId: r,
            tvName: o,
            isCharge: l,
            tvId: i.join(","),
            offline: "true",
            startTime: "",
            mdown: s,
            definite: "2"
          }), n.hide(), t.floater.hide()
        }, this.doms.closeBtn.on("click", function () {
          t.floater.hide()
        }), this.tab && this.tab.on("itemclick", function (e) {
          t.updateUnderframe(), t.cancelSelectAllStyle();
          var a = e.data.body, r = e.data.title, o = n.down("[data-videodownload-elem=selectedBody]"), s = o.down("li");
          if (o.attr("data-videodownload-elem", ""), a.attr("data-videodownload-elem", "selectedBody"), o = n.down("[data-videodownload-elem=selectedBody]"), s && s.forEach(function (e) {
              t.cancelSelectItem(Q.$(e))
            }), "true" != r.attr("data-load")) {
            var d = Q.__clientDownLoad.aid, h = parseInt(r.attr("data-seq"), 10), m = new l, u = {
              albumId: d,
              pageNo: h
            };
            t.pageNum && t.bussinessPage && (u.pageNum = t.pageNum), m.request(u, function (e) {
              if ("A00000" == e.code) {
                o[0].innerHTML = "";
                for (var n = e.data.vlist, a = !0, r = "", s = "", l = 0; l < n.length; l++) {
                  var d = {pd: n[l].pd, tvid: n[l] ? n[l].id : 0};
                  ("quanwangyingshi" === t.bussinessPage || "search" === t.bussinessPage) && (1 === n[l].mdown ? (r = t.isVip() ? "" : "album_item_vip", a = t.isVip() && 1 == n[l].plcdown["17"] ? !0 : !1, s = "album_juji_vip") : (r = "", s = "", a = !0), d.candownico = r, d.candown = a, d.vipico = s), o[0].innerHTML += Q.plugins.Mustache.render(c, d);
                  var h = o.down("li");
                  h.on("click", i)
                }
                t.updateUnderframe()
              }
            })
          }
        });
        var a = t.doms.selectAll.attr("checkcls");
        this.doms.selectAll[0].onclick = e, this.doms.selectAll.removeClass(a), this.doms.items.on("click", i), m = 1
      }
    }
  });
  i.exports = u
});
define("../../interfaces/cache_avlistInterface", ["../kit/remoteInterface", "./config", "../kit/checkI18nType"], function (e, t, i) {
  var n, a = e("../kit/remoteInterface"), r = e("./config"), o = e("../kit/checkI18nType");
  o.type || (n = "zh_tw"), i.exports = Q.Class("CacheAvListInterFace", {
    construct: function () {
      this._remoteInterface = new a({cacheAvListData: {baseUrl: r.interfaces.avlist}})
    }, methods: {
      request: function (e, t) {
        e = e || {}, e.pageNo = e.pageNo || 1;
        var i = this._remoteInterface._remoteInterfaces.cacheAvListData;
        i.url = i.baseUrl + e.albumId + "/" + e.pageNo + "/", e.pageNum && (i.url += e.pageNum + "/"), n && (e.locale = n), this._remoteInterface.send({
          ifname: "cacheAvListData",
          param: e,
          dataType: "jsonp",
          memory: !0
        }, function (i) {
          t && t(i, e)
        })
      }
    }
  })
});
define("../../action/slideWidgetV2", ["../components/action/widget", "../kit/eventPlugin", "../model/slideWidgetModelV2", "../view/slideWidgetViewV2"], function (e, t, i) {
  var n = e("../components/action/widget"), a = e("../kit/eventPlugin"), r = e("../model/slideWidgetModelV2"), o = e("../view/slideWidgetViewV2"), s = {}, l = function (e) {
    var t = Q.$(e), i = "marginRight", n = "marginLeft", a = t.width();
    "vertical" === this.dir && (i = "marginTop", n = "marginBottom", a = t.height());
    var r = parseInt(t.css(i), 10), o = parseInt(t.css(n), 10);
    return isNaN(r) && (r = 0), isNaN(o) && (o = 0), a + r + o
  }, d = function (e, t, i) {
    if (!e)return 0;
    var n = l(e, t);
    return Math.floor(i.width() / n)
  };
  i.exports = Q.Class("SlideWidget", {
    extend: n, plugins: [new a], construct: function (e) {
      e = e || {}, e.disp = e.disp || d(e.doms.item[0], e.dir, e.doms.content) || 0, e.model = e.model || new r(e), e.view = e.view || new o(e), this._interval = e.interval || 6e3, this._autoPlay = e.autoPlay || !1;
      var t = e.name;
      this.status = "stop", t && (s[t] ? s[t].push(this) : s[t] = [this]), this.callsuper(e), this._autoPlay && this.resume(), 1 != e.first && (this.focusTo(e.first), this.moveTo(e.first));
      var i = this;
      e.navDotWrap && e.navDotWrap.attr("data-slide-dot") && (this.on("listMouseEnter", function () {
        i.pause()
      }), this.on("listMouseLeave", function () {
        i.resume()
      }))
    }, statics: {
      getSlide: function (e) {
        return s[e]
      }, delSlide: function (e) {
        delete s[e]
      }
    }, properties: {
      events: {
        next: function () {
          this.next()
        }, prev: function () {
          this.prev()
        }, touchstart: function (e) {
          this.pause(), this.fire({type: "touchstart", data: e.data})
        }, touchend: function (e) {
          this.resume(), this.fire({type: "touchend", data: e.data})
        }, slideToEnd: function () {
        }, itemclick: function (e) {
          this.fire({type: "itemclick", data: e.data})
        }, beforeitemclick: function (e) {
          this.fire({type: "beforeitemclick", data: e.data})
        }, mousescroll: function (e) {
          this.fire({type: "mousescroll", data: e.data})
        }, beforePreBtnClick: function (e) {
          this.fire({type: "beforePreBtnClick", data: e.data})
        }, afterPreBtnClick: function (e) {
          this.fire({type: "afterPreBtnClick", data: e.data})
        }, beforeNextBtnClick: function (e) {
          this.fire({type: "beforeNextBtnClick", data: e.data})
        }, afterNextBtnClick: function (e) {
          this.fire({type: "afterNextBtnClick", data: e.data})
        }
      }
    }, methods: {
      start: function () {
        this.play()
      }, reinit: function () {
        for (var e = this._model._data.total, t = this._model._data.first, i = 0; e - t > i; i++)this.next()
      }, play: function () {
        if ("play" == this.status) {
          var e = this;
          this._timer && clearTimeout(this._timer), this._timer = setTimeout(function () {
            e.next(), this.status = "stop"
          }, this._interval)
        }
      }, pause: function () {
        this.status = "stop", this._timer && clearTimeout(this._timer)
      }, resume: function () {
        this.status = "play", this.play()
      }, next: function () {
        var e = this;
        if (this._model.get().canMoveNext) {
          this.pause(), this._model.next();
          var t = e._model._data;
          this.fire({type: "beforePlayNext", data: t}), this.fire({
            type: "beforePlay",
            data: t
          }), this._view.update(this._model._data, function () {
            e.fire({type: "afterPlayNext", data: t}), e.fire({type: "afterPlay", data: t})
          }), this._autoPlay && this.resume()
        }
      }, prev: function () {
        var e = this;
        if (this._model.get().canMovePrev) {
          this.pause(), this._model.prev();
          var t = e._model._data;
          this.fire({type: "beforePlayPrev", data: t}), this.fire({
            type: "beforePlay",
            data: t
          }), this._view.update(t, function () {
            e.fire({type: "afterPlayPrev", data: t}), e.fire({type: "afterPlay", data: t})
          }), this._autoPlay && this.resume()
        }
      }, focusTo: function (e, t) {
        t && (e += this._model._data.prevCount), this._view.focus({focus: e})
      }, moveTo: function (e, t, i) {
        var n = this;
        this.pause(), t && (this._model._data.trend = t);
        var a = this._model._data.first;
        i ? (this._model._data.trend = a - (e + this._model._data.prevCount) > 0 ? "prev" : "next", this._model.setFirst(e + this._model._data.prevCount)) : (this._model._data.trend = a - e > 0 ? "prev" : "next", this._model.setFirst(e));
        var r = n._model._data;
        this.fire({type: "beforePlay", data: r}), this._view.update(r, function () {
          n.fire({type: "afterPlayNext", data: r}), n.fire({type: "afterPlay", data: r})
        }), this._autoPlay && this.resume()
      }, goStep: function () {
      }, reset: function (e) {
        e = e || {};
        var t = this;
        t.pause(), e.disp || (e.disp = Math.floor(t._view._doms.content.width() / t._view._itemWidth)), t._model.reset(e), t._view.reset(e), t._view.addItems(), t._view.bindAddedItemEvent(), t._view._setBtnStatic(t._model.get()), t._autoPlay && t.resume()
      }, getFirst: function () {
        var e = this;
        return e._model._data.first || 1
      }, getTotal: function () {
        var e = this;
        return e._model._data.total || 1
      }
    }
  })
});
define("../../model/slideWidgetModelV2", ["../components/model/model"], function (e, t, i) {
  var n = e("../components/model/model");
  i.exports = Q.Class("SlideWidgetModel", {
    extend: n, construct: function (e) {
      this.callsuper(), this._data = {
        first: e.first || 1,
        oriFirst: e.first || 1,
        focus: e.focus || 1,
        total: e.total || 0,
        disp: e.disp || 0,
        step: 0,
        trend: "next",
        oriTotal: e.total || 0,
        prevCount: 0,
        nextCount: 0,
        circelFirst: "none"
      }, e.step && (this._data.step = e.step < 0 ? this._data.disp + e.step + 1 : e.step), this._circle = !!e.circle
    }, methods: {
      init: function () {
        return 0 === this._data.total || this._data.disp < this._data.step ? !1 : (this.setLimit(), this._circle ? this.setFirst(this._data.prevCount + this._data.first) : this.setFirst(1), void 0)
      }, setPrevNextCount: function () {
        for (var e = this._data, t = e.first + e.disp - 1; t - e.step >= 1;)t -= e.step;
        e.prevCount = e.disp - t, 0 === e.prevCount && (e.specialSlide = !0, e.prevCount = e.disp);
        for (var i = e.first; i + e.step <= e.total;)i += e.step;
        e.nextCount = e.disp - (e.total - i + 1), 0 === e.nextCount && (e.specialSlide = !0, e.nextCount = e.disp)
      }, setLimit: function () {
        var e = this._data;
        this._circle && (this.setPrevNextCount(), e.total = e.oriTotal + e.prevCount + e.nextCount), e.maxFirst = e.total - e.disp + 1, e.maxFirst < e.first && (e.first = e.maxFirst), e.canMovePrev = this._circle || 1 != e.first, e.canMoveNext = this._circle || e.first < e.total - e.step + 1
      }, setFirst: function (e) {
        var t = this._data, i = this._data.maxFirst, n = 1, a = t.first;
        t.oriFirst = t.first, t.first = e, this._circle ? (t.circelFirst = "none", "next" == t.trend && (t.specialSlide ? e == i && (t.first = t.prevCount + 1, t.circelFirst = 1) : e > i && (t.first = e - t.oriTotal, t.circelFirst = t.first - t.step)), "prev" == t.trend && (t.specialSlide ? e == n && (t.first = t.total - t.nextCount + 1 - t.disp, t.circelFirst = t.first + t.disp) : n > e && (t.first = t.oriTotal + 1 - t.prevCount - (1 - e) + t.prevCount, t.circelFirst = t.first + t.step)), t.realIndex = t.first <= t.prevCount ? t.oriTotal - t.prevCount + t.first : t.first <= t.prevCount + t.oriTotal ? t.first - t.prevCount : t.firstVideo - t.oriTotal - t.prevCount) : (t.first = Math.max(Math.min(e, i), 1), t.canMoveNext = t.first < i, t.canMovePrev = t.first > 1, t.realIndex = t.first), t.moveStep = Math.abs(t.first - a)
      }, setFocus: function (e) {
        var t = this._data;
        t.focus = e
      }, next: function () {
        this._check();
        var e = this._data;
        e.trend = "next", this.setFirst(e.first + e.step)
      }, prev: function () {
        this._check();
        var e = this._data;
        e.trend = "prev", this.setFirst(e.first - e.step)
      }, move: function () {
        this._check();
        var e = this._data;
        e.focus > 0 && this.setFirst(e.focus - Math.floor(e.disp / 2)), Q.log.log(e)
      }, _check: function () {
        var e = this._data;
        if (0 === e.total || 0 === e.disp)throw new Error("[SlideModelWidget]Invalid data.")
      }, reset: function (e) {
        e && (this._data.oriTotal = e.total ? e.total : this._data.oriTotal, this._data.total = e.total ? e.total : this._data.oriTotal, this._data.first = e.first ? e.first : this._data.first, this._data.focus = e.focus ? e.focus : this._data.focus, this._data.disp = e.disp ? e.disp : this._data.disp, this._data.step = e.step ? e.step < 0 ? this._data.disp + e.step + 1 : e.step : this._data.step || this._data.disp, this.init())
      }
    }
  })
});
define("../../view/slideWidgetViewV2", ["../components/view/widgetView", "../kit/anim"], function (e, t, i) {
  var n, a = e("../components/view/widgetView"), r = e("../kit/anim"), o = new Q.ic.InfoCenter({moduleName: "SlideView"});
  i.exports = Q.Class("SlideView", {
    extend: a, construct: function (e) {
      this.callsuper(e), this._enableTouch = !!e.enableTouch, this._enableScroll = e.enableScroll === !0, this._useDefaultOffset = e.useDefaultOffset ? !0 : !1, this._circle = !!e.circle, this.lBtnClass = e.lBtnClass || "btn-ltno", this.rBtnClass = e.rBtnClass || "btn-rtno", this._offset = e.offset || 0, this._head = [], this._tail = [], this._itemWidth = e.itemWidth, this._curr = 1, this._navDotWrap = e.navDotWrap, this._navBarWrap = e.navBarWrap, this._navDotTpl = e.navDotTpl && e.navDotTpl.value(), this._style = e.style || "left", this._css3 = e.css3, this.dir = e.dir || "horizontal", this.itemfocusclass = e.itemfocusclass || "selected", this.disableWheel = e.disableWheel || !1, this.lazyLoadImage = e.lazyLoadImage, this._dura = isNaN(e.dura) ? 300 : e.dura
    }, methods: {
      init: function (e) {
        this.callsuper("init", e), this.initView(), this._bindEvent()
      }, initView: function (e) {
        this._doms.oriItem = this._doms.oriItem || this._doms.item, this.setItemInfo(e), this.addItems(e), this._resetListWidth(), this.setNavDot(e), this._initPosition(), this._setBtnStatic()
      }, _initOffset: function () {
        var e = this._doms, t = 0;
        t = "vertical" === this.dir ? e.content.height() : e.content.width() || parseInt(e.content[0].style.width, 10);
        var i = this._itemWidth * this._ctrl._model._data.disp, n = t - i;
        this._offset = Math.ceil(n / 2)
      }, addItems: function (e) {
        if (this._circle) {
          var t = this._doms, i = e || this._ctrl._model.get();
          if (i.oriTotal >= i.disp) {
            if (this._tail.length)for (var n = 0; n < this._tail.length; n++) {
              var a = this._tail[n];
              t.list.remove(a)
            }
            this._tail = [];
            for (var r = 0; r < i.nextCount; r++)this._tail.push(Q.$(t.oriItem[r]).clone(!0));
            if (this._head.length)for (var o = 0; o < this._head.length; o++) {
              var s = this._head[o];
              t.list.remove(s)
            }
            this._head = [];
            for (var l = 0; l < i.prevCount; l++)this._head.push(Q.$(t.oriItem[i.oriTotal - l - 1]).clone(!0));
            this._head.forEach(function (e) {
              t.list.insertBefore(e, t.list.first())
            }), this._tail.forEach(function (e) {
              t.list.append(e)
            }), t.item = t.list.down("*[data-slide-item]") || t.list.down("li"), this._curr += this._head.length
          }
        }
      }, addNextItem: function () {
        var e = this._doms;
        e.item = e.list.down("li"), this.setItemInfo()
      }, _initPosition: function () {
        if (this._enableScroll) {
          o.debug("Old offset : " + this._offset), this._useDefaultOffset || this._initOffset(), o.debug("New offset : " + this._offset), this._anim && this._anim.done();
          var e = this._offset - (this._curr - 1) * this._itemWidth, t = this._doms;
          return isNaN(e) ? !1 : (t.list.css(this._style, e + "px"), void 0)
        }
      }, setNavDot: function () {
        var e = this;
        if (this._navDotWrap) {
          var t = this._ctrl._model._data.oriTotal, i = this._ctrl._model._data.step, n = this._navDotWrap.attr("data-slide-dot"), a = "mouseenter";
          if (this._dotCount = Math.ceil(t / i), this._dotCount > 1) {
            if (!n) {
              for (var r = "", o = 0; o < this._dotCount; o++)e._navDotTpl ? r += Q.plugins.Mustache.render(e._navDotTpl, {
                index: o + 1,
                selected: 0 === o
              }) : (r += '<a href="javascript:void(0);"', 0 === o && (r += 'class="selected" '), r += ' data-slidewidget-navdotitem="item" data-slidewidget-navdotindex="' + (o + 1) + '"></a>');
              a = "click", this._navDotWrap.html(r), this._navBarWrap.show(), this.navDotItems = null
            }
            this.navDotItems = this._navDotWrap.down('[data-slidewidget-navdotitem="item"]'), this._currentDot = Q.$(this.navDotItems[0]), this.navDotItems.on(a, function (t) {
              for (var i = Q.$(Q.event.get(t).target), n = parseInt(i.attr("data-slidewidget-navdotindex") || i.parent("li").attr("data-slidewidget-navdotindex"), 10), a = parseInt(e._currentDot.attr("data-slidewidget-navdotindex"), 10), r = n - a, o = Math.abs(r), s = 0; o > s; s++)r > 0 ? e._ctrl.next() : e._ctrl.prev()
            })
          } else this._navBarWrap.hide()
        }
      }, setItemInfo: function (e) {
        if (e = e || this._ctrl._model.get()) {
          var t = this._doms, i = null;
          t.item.forEach(function (e, t) {
            e = Q.$(e), e.attr("data-seq", t + 1), e.attr("data-slide-elem", "item"), 0 === t && (i = e)
          }), this._itemWidth || this.setItemWidth(i)
        }
      }, setItemWidth: function (e) {
        var t = e || Q.$(this._doms.item[0]), i = "marginRight", n = "marginLeft", a = t.width() || parseInt(t.css("width"), 10) + parseInt(t.css("padding-left"), 10) + parseInt(t.css("padding-right"), 10);
        "vertical" === this.dir && (i = "marginTop", n = "marginBottom", a = t.height());
        var r = parseInt(t.css(i), 10), o = parseInt(t.css(n), 10);
        isNaN(r) && (r = 0), isNaN(o) && (o = 0), this._itemWidth = a + r + o
      }, getItemRightWidth: function () {
      }, reSetItemInfo: function (e) {
        this._doms.item = e, this.setItemInfo(e)
      }, update: function (e, t) {
        "none" !== e.circelFirst && this._move(e, !0), this._curr = e.first, this._move(e, !1, t), this._setBtnStatic(e)
      }, focus: function (e) {
        var t = this, i = e.focus, n = t._doms;
        n.item.removeClass(this.itemfocusclass);
        var a = n.item;
        a.forEach(function (e) {
          var n = Q.$(e), a = parseInt(n.attr("data-seq"), 10);
          a === i && n.addClass(t.itemfocusclass)
        })
      }, getItem: function (e) {
        var t = this._doms;
        return Q.$(t.item[e - 1])
      }, _resetListWidth: function () {
        var e = this._doms;
        if (this._enableScroll) {
          var t = "width";
          "vertical" === this.dir && (t = "height"), e.list.css(t, this._itemWidth * e.item.length + "px")
        }
      }, _move: function (e, t, i) {
        var a = this, o = this._doms, s = o.list.left(o.content);
        if ("vertical" === this.dir && (s = o.list.top(o.content)), !isNaN(e.first)) {
          var l = 0;
          if (t) {
            var d = parseInt(o.list.css(this._style), 10);
            l = (1 - e.oriFirst) * this._itemWidth + this._offset;
            var c = d - l;
            l = (1 - e.circelFirst) * this._itemWidth + this._offset + c
          } else l = (1 - e.first) * this._itemWidth + this._offset;
          if (a.lazyLoadImage && (clearTimeout(n), n = setTimeout(function () {
              for (var t = e.first, i = e.disp, n = 0; i > n; n++) {
                var a = Q.$(o.item[t - 1 + n]);
                if (a) {
                  var r = a.down("[data-slide-lazyimg]");
                  r && (r.attr("src", r.attr("data-slide-lazyimg")), r.removeAttr("data-slide-lazyimg"))
                }
              }
            }, 300)), this._listPos = this._listPos || 0, t)this._anim && this._anim.stop(), o.list.css(a._style, l + "px"); else {
            if (this._navDotWrap && this._currentDot) {
              var h = this._currentDot;
              h.removeClass("selected");
              var m, u = parseInt(h.attr("data-slidewidget-navdotindex"), 10);
              "next" == e.trend ? m = u == this._dotCount ? 1 : u + 1 : "prev" == e.trend && (m = 1 == u ? this._dotCount : u - 1), this._currentDot = Q.$(this._doms.widget.down('[data-slidewidget-navdotitem="item"]')[m - 1]) || Q.$(Q.$('[data-slidewidget-navdotitem="item"]')[m - 1]), this._currentDot.addClass("selected")
            }
            if (!a._css3 && this._dura) {
              var p = {elem: o.list, from: s, to: l, duration: this._dura, style: a._style};
              i && (p.done = i), this._anim = r(p)
            } else o.list.css(a._style, l + "px"), i()
          }
          this._listPos = 0
        }
      }, _setBtnStatic: function (e) {
        var t = this._doms;
        t.pbtn && (e = e || this._ctrl._model.get(), e.canMovePrev ? t.pbtn.removeClass(this.lBtnClass) : t.pbtn.addClass(this.lBtnClass)), t.nbtn && (e.canMoveNext ? t.nbtn.removeClass(this.rBtnClass) : t.nbtn.addClass(this.rBtnClass))
      }, _moveWithFinger: function (e) {
        this._anim && this._anim.stop();
        var t = this._doms, i = t.list.left(t.content), n = i + e.x;
        t.list.css(this._style, n + "px"), this._lastDir = e.x
      }, _touchend: function () {
        var e = this._doms, t = this, i = e.list.left(e.content), n = Math.ceil((0 - i) / this._itemWidth) + (this._lastDir < 0 ? 1 : 0);
        this._listPos = Math.abs((e.list.left(e.content) - this._offset) % this._itemWidth), setTimeout(function () {
          t._ctrl.notice({type: "touchend", data: {first: n, dir: t._lastDir > 0 ? "prev" : "next"}})
        }, 100), i >= this._offset;
        var a = Math.max(e.list.width() - e.content.width(), 0) + this._offset;
        Math.abs(i) >= a
      }, _bindEvent: function () {
        var e = this._doms, t = this;
        if (e.pbtn) {
          var i = e.pbtn.attr("j-delegate");
          i ? e.pbtn.delegate("pbtn", function () {
            t.pbtnEvent()
          }) : e.pbtn.on("click", function (e) {
            e = Q.event.get(e), t.pbtnEvent()
          })
        }
        if (e.nbtn) {
          var n = e.nbtn.attr("j-delegate");
          n ? e.nbtn.delegate("nbtn", function () {
            t.nbtnEvent()
          }) : e.nbtn.on("click", function (e) {
            e = Q.event.get(e), t.nbtnEvent()
          })
        }
        e.oriItem.on("click", function (i) {
          i = Q.event.get(i);
          var n = Q.$(i.target), a = n;
          for (t._ctrl.notice({
            type: "beforeitemclick",
            data: {item: a}
          }); a && "item" != a.attr("data-slide-elem");)a = a.parent();
          var r = a.attr("data-item-isclick");
          "false" !== r && (e.item.removeClass(t.itemfocusclass), a.addClass(t.itemfocusclass), t._ctrl.notice({
            type: "itemclick",
            data: {item: a}
          }))
        }), e.list.on("DOMMouseScroll", function (e) {
          t.disableWheel || t._wheel(e)
        }), e.list.on("mousewheel", function (e) {
          t.disableWheel || t._wheel(e)
        }), e.list.on("mouseenter", function () {
          t._ctrl.fire({type: "listMouseEnter", data: {}})
        }), e.list.on("mouseleave", function () {
          t._ctrl.fire({type: "listMouseLeave", data: {}})
        }), Q.$(window).on("onorientationchange", function () {
          o.debug("Resized."), setTimeout(function () {
            t._initPosition()
          }, 500)
        }), this._enableScroll && this._bindTouchEvent(), e.item && (e.oriItem.forEach(function (e) {
          e = Q.$(e), e.on("mouseenter", function (e) {
            e = Q.event.get(e);
            var i = Q.$(e.currentTarget || e.target);
            t._ctrl.fire({type: "itemMouseEnter", data: {item: i, index: parseInt(i.attr("data-seq"), 10) - 1}})
          })
        }), e.oriItem.forEach(function (e) {
          e = Q.$(e), e.on("mouseleave", function (e) {
            e = Q.event.get(e);
            var i = Q.$(e.currentTarget || e.target);
            t._ctrl.fire({type: "itemMouseLeave", data: {item: i, index: parseInt(i.attr("data-seq"), 10) - 1}})
          })
        })), t.bindAddedItemEvent()
      }, pbtnEvent: function () {
        var e = this, t = e._ctrl;
        t.notice({
          type: "beforePreBtnClick",
          data: t._model._data
        }), t._model._data.canMovePrev && t.prev(), t.notice({type: "afterPreBtnClick", data: t._model._data})
      }, nbtnEvent: function () {
        var e = this, t = e._ctrl;
        t.notice({
          type: "beforeNextBtnClick",
          data: t._model._data
        }), t._model._data.canMoveNext && (t.next(), t.getTotal() > 9 && Q.event.customEvent.fire({
          type: "getSlidesData",
          data: {widget: e._doms.widget, list: e._doms.list, index: t.getFirst()}
        })), t.notice({type: "afterNextBtnClick", data: t._model._data})
      }, bindAddedItemEvent: function () {
        for (var e = this, t = this._doms, i = this._head.concat(this._tail), n = 0; n < i.length; n++) {
          var a = i[n];
          a = Q.$(a), a.on("mouseenter", function (t) {
            t = Q.event.get(t);
            var i = Q.$(t.currentTarget || t.target);
            e._ctrl.fire({type: "itemMouseEnter", data: {item: i, index: parseInt(i.attr("data-seq"), 10) - 1}})
          }), a.on("mouseleave", function (t) {
            t = Q.event.get(t);
            var i = Q.$(t.currentTarget || t.target);
            e._ctrl.fire({type: "itemMouseLeave", data: {item: i, index: parseInt(i.attr("data-seq"), 10) - 1}})
          }), a.on("click", function (i) {
            i = Q.event.get(i);
            var n = Q.$(i.target), a = n;
            for (e._ctrl.notice({
              type: "beforeitemclick",
              data: {item: a}
            }), t.item.removeClass(e.itemfocusclass); a && "item" != a.attr("data-slide-elem");)a = a.parent();
            a.addClass(e.itemfocusclass), e._ctrl.notice({type: "itemclick", data: {item: a}})
          })
        }
      }, _bindTouchEvent: function () {
        var e = this._doms, t = this, i = 0;
        e.list.on("touchstart", function (e) {
          Q.event.get(e).stopPropagation(), t._ctrl.notice({type: "touchstart", data: {event: e}}), this._enableTouch
        }), e.list.on("fingermove", function () {
        }), e.list.on("touchend", function (e) {
          t._ctrl.notice({type: "touchend", data: {event: e}}), this._enableTouch, i = 0
        })
      }, reset: function (e) {
        e && (this._doms.item = this._doms.list.down("li") || this._doms.item, this.setItemInfo(), this.setItemWidth(), this._resetListWidth())
      }, _wheel: function (e) {
        Q.event.get(e).preventDefault();
        var t = e || window.event, i = 0;
        i = "Mac" == Q.browser.getOS() ? t.wheelDelta ? t.wheelDelta / 3 : 0 - t.detail / 3 : t.wheelDelta ? t.wheelDelta / 120 : 0 - t.detail / 3;
        var n = 0;
        i && (i > 0 ? n = "up" : -0 > i && (n = "down"), this._ctrl.notice({
          type: "mousescroll",
          data: {act: n, event: e, delta: i}
        }))
      }
    }
  })
});
define("../../units/videoDownloadForV1", ["../components/units/pageJob", "../components/action/checkDoms", "../action/videoDownload", "../kit/yingyinPluginV2"], function (e, t, i) {
  var n = e("../components/units/pageJob"), a = e("../components/action/checkDoms"), r = "videoDownloadForV1";
  e("../action/videoDownload");
  var o = e("../kit/yingyinPluginV2"), s = null;
  n.create(r, {
    getDependentDoms: function () {
      return s = {btn: Q.$("#j-offline"), widget: Q.$("#data-widget-downloadSelectWrap")}
    }, check: function (e) {
      return a(e), !0
    }, init: function () {
      this.bindEvent()
    }, bindEvent: function () {
      var e = Q.$("[data-widget-videodownload=download]");
      e && e.length || s.btn.on("click", function (e) {
        var t = o.check();
        t && Q.event.customEvent.fire({type: "open_videodownload_box"}), event.returnValue = !1, e.preventDefault && e.preventDefault()
      })
    }
  }), i.exports = r, n.add(r)
});
define("../../action/videoDownload", ["../kit/yingyinPluginV2", "../components/action/floater", "../kit/iframeLocation", "../components/view/floaterView", "../kit/qiyiPlayer", "../kit/userInfo", "../kit/videoInfo", "../kit/checkI18nType", "../kit/i18nLangTransform"], function (e, t, i) {
  function n() {
    return Math.max(document.body.scrollTop, document.documentElement.scrollTop) + document.documentElement.clientHeight / 2
  }

  function a() {
    var e = f;
    return e && e.position && "album" === e.position ? !0 : 0 === e.sourceId && e.albumId != e.tvId && v ? !1 : 0 === e.sourceId && e.albumId != e.tvId ? !0 : !1
  }

  function o() {
    if (l.check() && !I)return !1;
    if (setTimeout(function () {
        location.href = Q.$("[data-widget-" + s + "]").attr("data-uninstallUrl")
      }, 500), r) {
      var e = r.down('[data-ele="clientAppDownPop"]');
      e && e.css("top", n() - r.attr("data-height") / 2 + "px")
    }
    W.show()
  }

  var r, s = "videodownload", l = e("../kit/yingyinPluginV2"), d = e("../components/action/floater"), c = e("../kit/iframeLocation"), h = e("../components/view/floaterView"), m = null, u = e("../kit/qiyiPlayer").getPlayer("video"), p = e("../kit/userInfo");
  e("../kit/videoInfo");
  var f, g, U, V, y;
  f = Q.PageInfo && Q.PageInfo.playPageInfo || {}, g = f.tvId, U = f.albumId, V = f.cid, y = f.userId;
  var v = !1, b = !1, k = "disabled-btn", x = !1, w = e("../kit/checkI18nType"), _ = e("../kit/i18nLangTransform"), L = {disapperMsg: "秒后自动消失"};
  _(L);
  var I = Q.$("[data-videodownload-pps]"), W = {
    _flag: null, _auto: null, show: function () {
      var e, t = 5;
      r && (e = r.down(".app-download-dn"), e && e.html(t + L.disapperMsg), r.show()), this._flag = setInterval(function () {
        0 === --t && clearInterval(W._flag), r && (e = r.down(".app-download-dn"), e && e.html(t + L.disapperMsg))
      }, 1e3), this._auto = setTimeout(function () {
        W.hide()
      }, 5e3)
    }, hide: function () {
      clearInterval(this._flag), clearTimeout(this._auto), r && r.hide()
    }
  }, X = Q.Class("VideoDownload", {
    construct: function () {
      this.downloadBtn = Q.$("[data-widget-" + s + "]"), this.canDown = this.downloadBtn.attr("data-" + s + "-canDownload") || f.candownload, r = this.downloadTip = Q.$("[data-videodownload-elem=tip]"), v = f.isfeizhengpian
    }, methods: {
      init: function () {
        this.bindEvent(), this.updateDownloadInfo()
      }, bindEvent: function () {
        var e = this, t = Q.event.customEvent;
        if (r) {
          var i = r.down('[data-ele="close"]');
          i && i.on("click", function () {
            return W.hide(), !1
          })
        }
        Q.event.customEvent.on("swf_showDownLoadAppPop", function () {
          o()
        }), this.downloadBtn.on("click", function (t) {
          var i = Q.event.get(t);
          if (i.preventDefault(), b)return !1;
          var n = Q.$(this);
          if ("true" == e.canDown) {
            Q.$(i.target);
            var a = l.check();
            a && !I ? (Q.log.server({
              type: "yingyinentrencem20130813_offline",
              ppuid: p.getUid(),
              pru: Q.cookie.get("P00PRU") || "",
              flshuid: Q.cookie.get("QC005"),
              qtcurl: c.url() || "",
              pagetype: "endpage",
              enttype: "offlineview",
              mod: w.mod,
              tn: (new Date).getTime() + Math.random()
            }, "http://msg.71.am/tmpstats.gif"), e.doDownload()) : (e.sendPingback({
              ptype: n.attr("data-videodownload-ptype") || "endpage",
              etype: n.attr("data-videodownload-etype") || "offlineview"
            }), /mac/i.test(navigator.platform) ? setTimeout(function () {
              location.href = Q.$("[data-widget-" + s + "]").attr("href")
            }, 500) : (u.forceToSaveCurVideoInfo(), o()))
          }
          return !1
        }), u.on("downloadVideo", function (t) {
          e.doDownload(t)
        }), u.on("videoChanged", function (t) {
          e.setCanDown(t)
        }), e.getCurrentUserStatus();
        var n = e.downloadBtn.attr("data-issetprivate");
        "true" === n && (b = !1, Q.player.getVideoStatus && this.getIsSupportUse(Q.player.getVideoStatus()), Q.event.customEvent.on("swf_playerStateChange", e.getIsSupportUse.bind(this)), t.on("login", function () {
          e.doPirvateHandel()
        }), t.on("logout", function () {
          e.doPirvateHandel()
        }))
      }, getIsSupportUse: function (e) {
        var t = this;
        e = e || {}, e = e.data || {};
        var i = e.state || "", n = e.privateVideo;
        ("DataReady" == i || "Error" == i) && ("1" === n ? b = !0 : "0" === n && (b = !1), t.doPirvateHandel())
      }, doPirvateHandel: function () {
        var e = this;
        e.getCurrentUserStatus(), e.changeUseStatus()
      }, changeUseStatus: function () {
        var e = this, t = e.downloadBtn;
        b ? x ? t.hasClass(k) && t.removeClass(k) : t.addClass(k) : t.hasClass(k) && t.removeClass(k)
      }, getCurrentUserStatus: function () {
        var e = p.getUid();
        x = y == e ? !0 : !1
      }, setCanDown: function (e) {
        var t = 1 == e.data.idl;
        this.canDown = t.toString(), this.downloadBtn.attr("data-" + s + "-candownload", t.toString()), this.downloadBtn.attr("data-videodownload-albumid", e.data.aid), this.downloadBtn.attr("data-videodownload-tvname", e.data.an), this.downloadBtn.attr("data-videodownload-tvid", e.data.tvid), this.updateDownloadInfo()
      }, updateDownloadInfo: function () {
        var e = this.downloadBtn.attr("data-videodownload-candownloadclass"), t = this.downloadBtn.attr("data-videodownload-cantdownloadclass"), i = this.downloadBtn.attr("data-videodownload-candownloadtitle"), n = this.downloadBtn.attr("data-videodownload-cantdownloadtitle"), a = l.check();
        "true" == this.canDown ? (this.downloadBtn.removeClass(t).addClass(e), this.downloadBtn.attr("title", i), !a && this.downloadTip && this.downloadBtn.attr("title", "")) : (this.downloadBtn.removeClass(e).addClass(t), this.downloadBtn.attr("title", n))
      }, doDownload: function (e) {
        var t = e || {}, i = this;
        if (Q.$("#data-widget-downloadSelectWrap") || Q.$("*[data-widget-downloadSelectWrap=wrap]") || Q.$("#widget-videodownselectbox") || Q.$("#widget-videodownSource"), a()) {
          var n = {
            aid: i.downloadBtn.attr("data-videodownload-albumid") || U,
            title: i.downloadBtn.attr("data-videodownload-tvname") || f.tvName
          }, o = i.downloadBtn.attr("data-videodownload-cid") || V;
          return o && Q.object.extend(n, {cid: o}), Q.event.customEvent.fire({
            type: "open_videodownload_box",
            data: n
          }), !1
        }
        if (Q.$("#flash"))u.getVideoInfo(function (e) {
          e = e || {}, t.albumId = e.aid, t.tvName = e.vn, t.tvId = e.tvid, t.isCharge = "false", t.offline = "true", u.getPlayInfo(function (e) {
            t.definite = e.currentDefination || "1", t.albumId && l.down(t)
          })
        }); else {
          var r = i.downloadBtn.attr("data-videodownload-albumid") || U, s = i.downloadBtn.attr("data-videodownload-tvname") || f.tvName, d = i.downloadBtn.attr("data-videodownload-tvid") || g, c = !0;
          l.down({albumId: r, tvName: s, isCharge: c, tvId: d, offline: "true", startTime: "", definite: "2"})
        }
      }, showYingyinDownload: function () {
        var e = this;
        if (!m) {
          var t = new h({isResize: !0});
          m = new d({view: t});
          var i = ['<div class="yingyin_popup0904"><p><a href="javascript:void(0)" id="j-yingyinCloseBut" title="关闭" class="clobtn"></a></p><div class="yytxt"><p class="p1">安装爱奇艺视频桌面版，只需10秒</p><p class="p2">马上开始下载本片</p></div><div class="download"><a id="j-yingyinDownLoadBut" href="http://dispatcher.video.qiyi.com/dispn/QIYImedia.exe" class="downloadBtn" title="下载">确定</a></div></div>'];
          m.show({html: i.join("")});
          var n = function () {
            a.un("click"), o.un("click"), m.destroy(), m = null
          }, a = Q.$("#j-yingyinCloseBut");
          a.on("click", function () {
            n()
          });
          var o = Q.$("#j-yingyinDownLoadBut");
          o.on("click", function (t) {
            Q.event.get(t).preventDefault(), u.forceToSaveCurVideoInfo(), n();
            var i = Q.$(this), a = {
              ptype: i.attr("data-videodownload-ptype") || "endpage",
              etype: i.attr("data-videodownload-etype") || "popup"
            };
            e.sendPingback(a), c.href(i.attr("href"), {time: 100})
          })
        }
      }, sendPingback: function (e) {
        e = e || {}, Q.log.server({
          type: "yingyinentrencem20130813",
          ppuid: p.getUid(),
          pru: Q.cookie.get("P00PRU") || "",
          flshuid: Q.cookie.get("QC005"),
          qtcurl: c.url() || "",
          pagetype: e.ptype || "",
          enttype: e.etype || "",
          mod: w.mod,
          tn: (new Date).getTime() + Math.random()
        }, "http://msg.71.am/tmpstats.gif")
      }
    }
  });
  i.exports = X
});
define("../../kit/i18nLangTransform", [], function (e, t, i) {
  var n = Q.PageInfo || {}, a = n.i18nLang;
  i.exports = function (e) {
    if (a)for (var t in e)e[t] = a[t]
  }
});
define("../../units/externalLogin", ["../components/units/pageJob", "../kit/external", "../kit/userInfo", "../action/qipaLogin", "../config/siteDomain"], function (e) {
  function t(e, t) {
    this.name = e, this.list = [], Q.object.extend(this, t), this._exec = this._exec.bind(this)
  }

  function i(e) {
    var t = {};
    return e.split(";").forEach(function (e) {
      e = e.split("=");
      var i = e[0].replace(/\s+/, "");
      /Domain|Express|Path/.test(i) && (i = i.toLowerCase()), t[i] = e[1]
    }), t
  }

  var n = e("../components/units/pageJob"), a = e("../kit/external"), o = e("../kit/userInfo"), r = e("../action/qipaLogin"), s = Q.event.customEvent, l = e("../config/siteDomain"), d = "externalLogin", c = new Q.ic.InfoCenter({moduleName: d}), h = function (e, t, i) {
    e && setTimeout(function () {
      e.apply(t, i)
    }, 1)
  };
  Q.object.extend(t.prototype, {
    bind: function (e) {
      return this.list.indexOf(e) >= 0 || !!this.list.push(e)
    }, unbind: function (e) {
      var t = this.list.indexOf(e);
      return 0 > t || !!this.list.splice(t, 1)
    }, enable: function () {
      s.on(this.name, this._exec)
    }, disable: function () {
      s.un(this.name, this._exec)
    }, _exec: function () {
      h(this.exec, this, arguments)
    }, exec: function () {
      for (var e = this.list, t = 0, i = e.length; i > t; t++)try {
        e[t].apply(this, arguments)
      } catch (n) {
        c.error(n)
      }
    }
  });
  var m;
  n.create(d, {
    check: function () {
      return !0
    }, init: function () {
      var e = l.getDomain();
      m = {login: new t("login"), logout: new t("logout")}, a.add({
        on: function (e, t) {
          return !!(e = m[e]) && e.bind(t)
        }, un: function (e, t) {
          return !!(e = m[e]) && e.unbind(t)
        }, isLogin: function () {
          return o.isLogin()
        }, openLoginBox: function (e, t) {
          r.openLoginWindow(e, t && function () {
              h(t, this, arguments)
            })
        }, setLogin: function (e) {
          e = JSON.parse(e);
          var t = [], n = [];
          for (var a in e)e.hasOwnProperty(a) && (t.push(a), n.push(i(e[a])));
          t.forEach(function (e, t) {
            var i = decodeURIComponent(n[t][e]);
            delete n[t][e], Q.cookie.set(e, i, n[t])
          }), Q.event.customEvent.fire({type: "login", data: "client"})
        }, setLogout: function () {
          var t = ["P00001", "P00002", "P00003", "P00010", "P000email", "P01010"];
          t.forEach(function (t) {
            Q.cookie.remove(t, {domain: e, path: "/"})
          }), Q.event.customEvent.fire({type: "logout", data: "client"})
        }
      })
    }, exec: function () {
      m.login.enable(), m.logout.enable()
    }
  }), n.add(d)
});
define("../../units/qipaLogin", ["../components/units/pageJob", "../components/action/checkDoms", "../kit/userInfo", "../action/qipaLogin", "../action/pcLoginBox", "../view/pcLoginBoxView", "../action/pcRegistBox", "../view/pcRegistBoxView"], function (e, t, i) {
  var n, a, o, r, s = e("../components/units/pageJob"), l = e("../components/action/checkDoms"), d = e("../kit/userInfo"), c = "qipaLogin", h = e("../action/qipaLogin"), m = e("../action/pcLoginBox"), u = e("../view/pcLoginBoxView"), p = e("../action/pcRegistBox"), f = e("../view/pcRegistBoxView"), g = Q.event.customEvent, U = encodeURIComponent("http://t.qiyi.com/opening/start.php?returnUrl=" + encodeURIComponent(document.location.href));
  s.create(c, {
    getDependentDoms: function () {
      return {}
    }, check: function () {
      return l(this.getDependentDoms()), !0
    }, init: function () {
      var e = this;
      g.on("login", e._loginSuccess.bind(e)), g.on("loginIframeClosed", e._dlgClose.bind(e)), g.on("qipaLoginIfrRendered", e._initLoginRegisterBox.bind(e)), g.on("qipaLoginIfrShown", e._showLoginBox.bind(e)), g.on("qipaLoginIfrHide", e._hideLoginRegistBox.bind(e)), g.on("qipaRegIfrShown", e._showRegistBox.bind(e));
      try {
        lib.component.login.show = function (e, t) {
          h.openLoginWindow(t, function () {
            e && e()
          }), e && d.isLogin() && e()
        }
      } catch (t) {
      }
    }, exec: function () {
      var e = this;
      Q.$(document).delegate("login", e._dlgLogin.bind(e)), Q.$(document).delegate("logout", e._dlgLogout.bind(e)), Q.$(document).delegate("regist", e._dlgRegist.bind(e))
    }, _dlgLogin: function (e) {
      var t = Q.event.get(e.event);
      t.preventDefault(), d.isLogin() || h.openLoginWindow({regUrl: U, btnId: Q.$(t.target).attr("id") || ""})
    }, _dlgRegist: function (e) {
      var t = Q.event.get(e.event);
      t.preventDefault(), d.isLogin() || h.openLoginWindow({from: "regist"})
    }, _dlgLogout: function () {
    }, _dlgClose: function () {
      h.closeLoginWindow(), h.clearTempCallback(), this._clearLoginRegisterBox()
    }, _dlgHide: function () {
      h.hideLoginWindow()
    }, _loginSuccess: function () {
      if (Q.cookie.get("P00011"))g.fire({type: "showVertifyEmailPanel", data: {wrapper: this.qipaLoginIfr}}); else {
        h.closeLoginWindow(), h.runTempCallback(), this._clearLoginRegisterBox();
        var e = "www.iqiyi.com/dianying/i.html", t = window.location.href;
        if (t.indexOf(e) >= 0)return window.location.reload(), !1;
        if (t.indexOf("passport.iqiyi.com/pages/secure") >= 0)return setTimeout(function () {
          return window.location.reload(), !1
        }, 200), !1
      }
    }, _initLoginRegisterBox: function (e) {
      var t = e.data.wrapper;
      if (n = t && t.down("[data-widget-loginbox]"), a = t && t.down("[data-widget-registbox]"), n && a) {
        var i = {
          initStatus: "show",
          alreadyRendered: !0,
          switchToQrCodeLoginRseat: "140711_tdenter_qipalgin",
          returnFromQrCodeLoginRseat: "140711_bkqipalgin"
        }, s = new u({wrapper: n}, i);
        o = new m({
          view: s,
          model: ""
        }), i.switchToQrCodeLoginRseat = "140711_tdenter_qipargst", i.returnFromQrCodeLoginRseat = "140711_bkqipargst";
        var l = new f({wrapper: a}, i);
        r = new p({
          view: l,
          model: ""
        }), e.data.isReg ? (r.hide(), this._showRegistBox()) : this._showLoginBox(), this._fixDelegate(t)
      }
    }, _fixDelegate: function (e) {
      function t(e) {
        e = Q.event.get(e.event || window.event), e.preventDefault(), e.stopPropagation();
        var t = e.target, n = t.getAttribute("j-delegate");
        n && ("loginscroll" == n ? i._showLoginBox() : "registerscroll" == n && i._showRegistBox())
      }

      var i = this;
      n && n.delegate("registerscroll", t), a && a.delegate("loginscroll", t), Q.$(e).delegate("hideloginiframe", i._dlgHide.bind(i))
    }, _showLoginBox: function () {
      o && (o.show(), g.fire({type: "qrCodeImgEffective", data: " "})), r && r.hide()
    }, _showRegistBox: function () {
      this._getPingBack("1411202_zcshw"), r && r.show(), o && o.hide()
    }, _hideLoginRegistBox: function () {
      r && r.hide(), o && o.hide()
    }, _clearLoginRegisterBox: function () {
      n = null, a = null, o = null, r = null
    }, _getPingBack: function (e) {
      var t = {
        t: 21,
        rn: Math.random(),
        p: 10,
        pf: 1,
        p1: 101,
        bstp: 0,
        jsuid: Q.cookie.get("QC006") || "",
        ve: Q.getVideoEventID() || "",
        u: Q.cookie.get("QC005") || "",
        block: e
      };
      Q.log.server(t, "http://msg.71.am/b")
    }
  }), s.add(c), i.exports = c
});
define("../../units/qrCodeLogin", ["../components/units/pageJob", "../kit/userInfo", "../components/action/checkDoms", "../action/qrCodeLoginAction", "../view/qrCodeLoginView"], function (e, t, i) {
  var n = e("../components/units/pageJob"), a = Q.event.customEvent;
  e("../kit/userInfo");
  var o, r = e("../components/action/checkDoms"), s = e("../action/qrCodeLoginAction"), l = e("../view/qrCodeLoginView"), d = "qrCodeLogin";
  n.create(d, {
    getDependentDoms: function () {
      var e = Q.$("[data-widget-qrcodelogin]");
      return e ? o = {
        widget: e,
        returnBtn: e.down('[data-qrcodelogin-elem="returnBtn"]'),
        loadingWrapper: e.down("[data-qrcodelogin-elem=loadingWrapper]"),
        loadedWrapper: e.down('[data-qrcodelogin-elem="loadedWrapper"]'),
        loadFailWrapper: e.down("[data-qrcodelogin-elem=loadFailWrapper]"),
        loginSuccessWrapper: e.down("[data-qrcodelogin-elem=loginSuccessWrapper]"),
        qrcodeImgCon: e.down("[data-qrcodelogin-elem=qrcodeImgCon]"),
        qrcodeImg: e.down("[data-qrcodelogin-elem=qrcodeImg]"),
        refreshTimerNum: e.down("[data-qrcodelogin-elem=refreshTimerNum]"),
        reloadBtn: e.down("[data-qrcodelogin-elem=reloadBtn]")
      } : !0
    }, check: function (e) {
      try {
        r(e)
      } catch (t) {
      }
      return !0
    }, init: function () {
    }, exec: function () {
      this.bindEvent()
    }, bindEvent: function () {
      var e = this;
      a.on("showQrcodeLoginFloater", function (t) {
        var i = t.data, n = i.qrcodeLoginDoms;
        n || (n = o), n._qrCodeLoginAction ? n._qrCodeLoginAction.show(i) : e.initLoginBox(n, function (e) {
          n._qrCodeLoginAction = e, e.show(i)
        })
      }), a.on("qrCodeLoginDomReady", function (t) {
        var i = t.data, n = i.qrcodeLoginDoms;
        n && e.initLoginBox(n, function (e) {
          n._qrCodeLoginAction = e
        })
      })
    }, initLoginBox: function (e, t) {
      var i = new l(e), n = new s({doms: e, view: i});
      t(n)
    }, doLogin: function () {
    }, doLogout: function () {
    }
  }), n.add(d), i.exports = d
});
define("../../action/qrCodeLoginAction", ["../components/action/adapter", "../config/siteDomain"], function (e, t, i) {
  var n = e("../components/action/adapter");
  e("../config/siteDomain");
  var a = Q.event.customEvent;
  i.exports = Q.Class("QrCodeLoginAction", {
    ns: Q.action, extend: n, construct: function (e) {
      this._doms = e.doms, this.callsuper(e), this.init(e), this.bindEvent()
    }, properties: {timer: null}, methods: {
      init: function () {
      }, bindEvent: function () {
        a.on("login", this._loginSuccess.bind(this)), a.on("login-failed", this._loginFailed.bind(this)), a.on("logout", this._logout.bind(this))
      }, show: function (e) {
        var t = this;
        this._view.show(), this._returnBtnClick && this._doms.returnBtn.un("click", this._returnBtnClick), this._returnEventNameHandler && this._doms.returnBtn.un("click", this._returnEventNameHandler), this._doms.returnBtn.attr("j-delegate", ""), this._doms.returnBtn.attr("rseat", e.returnBtnRseat || ""), e.returnDelegate && (this._doms.returnBtn.attr("j-delegate", e.returnDelegate), this._returnBtnClick = function () {
          t._view.hide()
        }, this._doms.returnBtn.on("click", this._returnBtnClick)), e.returnEventName && (this._returnEventNameHandler = function () {
          t._view.hide(), a.fire({type: e.returnEventName, data: e})
        }, this._doms.returnBtn.on("click", this._returnEventNameHandler))
      }, _loginSuccess: function () {
      }, _loginFailed: function () {
      }, _logout: function () {
      }
    }
  })
});
define("../../view/qrCodeLoginView", ["../components/view/view", "../kit/qrCoder", "../kit/qrcodeLoginKit", "../kit/userInfo", "../config/siteDomain"], function (e, t, i) {
  var n = e("../components/view/view"), a = e("../kit/qrCoder"), o = e("../kit/qrcodeLoginKit");
  e("../kit/userInfo"), e("../config/siteDomain");
  var r = Q.event.customEvent, s = "http://www.qiyipic.com/common/fix/site/refresh_invalid.png";
  i.exports = Q.Class("QrCodeLoginView", {
    ns: Q.view, extend: n, construct: function (e, t) {
      this._opt = t = t || {}, this._doms = e || {}, this.visible = t.visible || !0, this._pullInterval = t.pullInterval || 2e3, this.domReady = t.domReady || !1
    }, methods: {
      init: function () {
        var e = this;
        "hide" === this._opt.initStatus ? this.hide() : this._opt.alreadyRendered && (this.initLoginPanel(), this.resetTips()), r.on("pcLoginBoxHide", function () {
          e.hide()
        }), this._doms.reloadBtn && this._doms.reloadBtn.on("click", e.refreshQrcode.bind(e))
      }, show: function () {
        this.hiden = !1, this._doms.widget.show(), this.refreshQrcode()
      }, hide: function () {
        clearTimeout(this._pollTokenLoginTimer), this._doms.widget.hide(), this.hiden = !0
      }, refreshQrcode: function () {
        if (!this.hiden) {
          this._doms.loadingWrapper.show(), this._doms.loadedWrapper.hide(), this._doms.loadFailWrapper.hide(), this._doms.loginSuccessWrapper.hide();
          var e = this;
          e._agenttype = 1, e._device_name = "网页端";
          var t = {agenttype: e._agenttype, Code_type: 0, device_name: e._device_name};
          o.genLoginToken(t, function (t) {
            var i = "http://passport.iqiyi.com/apis/qrcode/token_login.action?";
            if ("A00000" === t.code) {
              e._loginToken = t.data.token, e._loginTokenExpire = t.data.expire;
              var n, o = ["token=" + encodeURIComponent(t.data.token), "Code_type=0", "agenttype=" + encodeURIComponent(e._agenttype)], r = {
                data: i + o.join("&"),
                width: 162
              }, s = a.getQrCoder(r) + "&_=" + Math.random(), l = e._doms.qrcodeImg[0];
              l.onload = function () {
                l.onload = l.onerror = function () {
                }, clearTimeout(n), e.qrcodeImgSrcChanged()
              }, l.onerror = function () {
                l.onload = l.onerror = function () {
                }, clearTimeout(n), e._doms.loadingWrapper.hide(), e._doms.loadedWrapper.hide(), e._doms.loadFailWrapper.show()
              }, n = setTimeout(function () {
                l.onerror()
              }, 1e4), e._doms.qrcodeImg.attr("src", s)
            } else e._doms.loadingWrapper.hide(), e._doms.loadedWrapper.hide(), e._doms.loadFailWrapper.show()
          })
        }
      }, qrcodeImgSrcChanged: function () {
        function e() {
          o.checkTokenLogin({agenttype: t._agenttype, token: t._loginToken}, function (a) {
            if ("A00000" === a.code) {
              r.fire({
                type: "qrcodeLoginSuccess",
                data: a.data
              }), t._doms.loadedWrapper.hide(), t._doms.loginSuccessWrapper.show();
              try {
                setTimeout(function () {
                  window.lib.__callbacks__.login_success(a.data)
                }, 3e3)
              } catch (o) {
              }
            } else if (clearTimeout(t._pollTokenLoginTimer), !n && !t.hiden)if (t._doms.widget.attr("data-floater-qrcodelogin") && i > 0) {
              if (t._pollTokenLoginTimer = setTimeout(e, 1e3), i--, 0 === i) {
                clearTimeout(t._pollTokenLoginTimer), clearInterval(t._refreshTipInterval);
                var l = Q.$("[data-loginbox-elem=qrCodeLogin1]"), d = Q.$("[data-loginbox-elem=qrCodeLogin2]");
                l && d && (d.removeClass("dn"), l.addClass("dn"), t._doms.qrcodeImg.attr("src", s))
              }
            } else t._pollTokenLoginTimer = setTimeout(e, t._pullInterval)
          })
        }

        var t = this, i = 60;
        t._doms.loadingWrapper.hide(), t._doms.loadFailWrapper.hide(), t._doms.loadedWrapper.show();
        var n = !1;
        t._pollTokenLoginTimer = setTimeout(e, t._pullInterval), setTimeout(function () {
          n = !0, clearTimeout(t._pollTokenLoginTimer), t._pollTokenLoginTimer = null
        }, 1e3 * t._loginTokenExpire);
        var a = 60;
        t._doms.refreshTimerNum.html(a), clearInterval(t._refreshTipInterval), t._refreshTipInterval = setInterval(function () {
          return a--, t._doms.refreshTimerNum.html(a), t.hiden ? (clearInterval(t._refreshTipInterval), void 0) : (0 >= a && (clearInterval(t._refreshTipInterval), t._refreshTipInterval = null, t.hiden || t.refreshQrcode()), void 0)
        }, 1e3)
      }, _bindEvent: function () {
      }
    }
  })
});
define("../../units/mobileActivityTip", ["../components/units/pageJob", "../config/siteDomain", "../kit/userInfo"], function (e) {
  var t = e("../components/units/pageJob"), i = e("../config/siteDomain"), n = "mobileActivityTip", a = e("../kit/userInfo");
  t.create(n, {
    getDependentDoms: function () {
      return !0
    }, check: function () {
      return !0
    }, init: function () {
      var e = '恭喜您注册成功！请查看 消息-系统消息 免费领取会员！<a data-mobileactivity-item="close" href="#" class="closeIco">×</a>', t = !1, n = "", o = "", r = function () {
        if (!t) {
          var i = document.createElement("div");
          i.className = "nav-mobile-tips", i.style.display = "none", i.setAttribute("data-mobileactivity-item", "successtip"), i.innerHTML = e;
          var a = Q.$(".topNavRt") || Q.$(".topNavRt_new");
          if (a) {
            var r = a[0];
            r && (r.appendChild(i), n = Q.$(i), o = n.down('[data-mobileactivity-item="close"]'), t = !0, o.on("click", function (e) {
              Q.event.get(e).preventDefault(), n.hide()
            }))
          }
        }
      }, s = function () {
        r(), n.show(), setTimeout(function () {
          Q.anim(n).duration(500).ease("Linear").from("top", 31).to("top", -30).onDone(function () {
          }).go()
        }, 5e3)
      }, l = Q.cookie.get("P_AWARD_VIP");
      1 == l && (a.isLogin() && s(), Q.cookie.remove("P_AWARD_VIP", {
        path: "/",
        domain: i.SITE_DOMAIN
      })), Q.event.customEvent.on("awardviptip", function () {
        s()
      }), Q.event.customEvent.on("registed", function (e) {
        1 == e.data.award_vip && s()
      })
    }
  }), t.add(n)
});
define("../../units/dotNewIcon", ["../components/units/pageJob", "../components/action/checkDoms", "../kit/userInfo", "../config/siteDomain", "../kit/anim"], function (e, t, i) {
  var n = e("../components/units/pageJob");
  e("../components/action/checkDoms"), e("../kit/userInfo");
  var a = e("../config/siteDomain");
  e("../kit/anim");
  var o = "dotNewIcon";
  n.create(o, {
    check: function () {
      return !0
    }, init: function () {
      var e = this;
      e.getIconDoms()
    }, getIconDoms: function () {
      var e = Q.$('*[data-widget="navdot"]');
      if (e && e.length) {
        var t = Q.cookie.get("QC911");
        t = t || "", e.forEach(function (e) {
          var i = Q.$(e), n = i.attr("data-dot-cid");
          if (n && -1 === t.indexOf("," + n + ",")) {
            var o = i.down("[data-newicon=" + n + "]") || i.down("[data-newicon]");
            o && (o.css("display", ""), function (e, t) {
              e.on("click", function () {
                var e = Q.cookie.get("QC911") || "";
                if (-1 === e.indexOf("," + t + ",")) {
                  e += "," + t + ",";
                  var i = a.getDomain() || a.SITE_DOMAIN;
                  Q.cookie.set("QC911", e, {path: "/", domain: i, expires: 31536e6})
                }
                o.hide()
              })
            }(i, n))
          }
        })
      }
    }
  }), n.add(o), i.exports = o
});
define("../../units/uc/rtSubUpUr", ["../../components/units/pageJob", "../../kit/parentByProp", "../../interfaces/ucSubInterface"], function (e) {
  var t = e("../../components/units/pageJob"), i = e("../../kit/parentByProp"), n = e("../../interfaces/ucSubInterface"), a = "rtSubUpUr";
  t.create(a, {
    check: function () {
      return !0
    }, init: function () {
      function e(e) {
        Q.$("[data-sub-elem=num]").forEach(function (t) {
          t = Q.$(t), a.forEach(function (n) {
            var a = i(t, n) || t, o = a.attr(n);
            o == e && (t.html("0"), t.removeAttr("data-sub-elem"), (i(t, "data-sub-elem", "numwrap") || t).hide())
          })
        })
      }

      function t(t) {
        (t || []).forEach(function (t) {
          t = Q.$(t), a.forEach(function (a) {
            var o = i(t, a) || t, r = o.attr(a);
            r && o.un("click").on("click", function () {
              n.rtUpUr({subType: 1, subKeys: r}, function (t) {
                "A00000" == t.code && e(r)
              })
            })
          })
        })
      }

      var a = ["uid", "data-id"], o = Q.event.customEvent;
      t(Q.$("[data-sub-elem=num]")), o.on("untitleSubscribe", function () {
        t(Q.$("[data-sub-elem=num]"))
      }).pcUserBoxDomReady.forEach(function (e) {
        o.on(e, function (e) {
          t(e.data.wrapper.down("[data-sub-elem=num]"))
        })
      }), o.on("subUpUrUpdate", function (t) {
        e(t.data.uid)
      })
    }
  }), t.add(a)
});
define("../../interfaces/ucSubInterface", ["../kit/remoteInterface", "./config"], function (e, t, i) {
  var n = e("../kit/remoteInterface"), a = e("./config"), o = Q.Class("UcSubInterface", {
    construct: function () {
      this._remoteInterface = new n({
        unSub: {url: a.interfaces.ucUnSub},
        rtUpUr: {url: a.interfaces.ucRtUpUr},
        followCountUr: {url: a.interfaces.followCountUr}
      })
    }, methods: {
      request: function (e, t) {
        var i = {ifname: e.ifname, method: e.method || "GET", param: e};
        e.jsonp ? i.dataType = "jsonp" : i.encodeFn = function (e) {
          return encodeURIComponent(e)
        }, delete e.ifname, delete e.method, delete e.jsonp, this._remoteInterface.send(i, t)
      }, unSub: function (e, t) {
        Q.object.extend(e, {
          agentType: Q.browser.iPad ? 10 : 1,
          source: Q.browser.iPad ? 8 : 4
        }), this.request(Q.object.extend({ifname: "unSub", jsonp: !0}, e), t)
      }, rtUpUr: function (e, t) {
        this.request(Q.object.extend({ifname: "rtUpUr", jsonp: !0}, e), t)
      }, getFollowCount: function (e, t) {
        this.request(Q.object.extend({ifname: "followCountUr", jsonp: !0}, e), t)
      }
    }
  });
  i.exports = new o
});
define("../../units/bindMobile_vip", ["../components/units/pageJob", "../components/action/checkDoms", "../kit/userInfo", "../action/qipaLogin", "../interfaces/bindMobile_vipInterface"], function (e, t, i) {
  var n = e("../components/units/pageJob"), a = e("../components/action/checkDoms"), o = e("../kit/userInfo");
  e("../action/qipaLogin");
  var r, s = e("../interfaces/bindMobile_vipInterface"), l = "bindMobile_vip", d = 23, c = "会员通知-帐号安全", h = "尊敬的会员用户，由于您尚未绑定手机号，帐号非常危险！为了保证您的会员权益，请尽快绑定手机号，我们会为您保障手机号的隐私及安全。", m = "检测到您的密码非常不安全，被盗号的风险极高，为保护您的会员权益，请您立即", u = "http://passport.iqiyi.com/pages/secure/password/modify_pwd.action", p = "QC136", f = "QC135", g = "QC138", U = "QC137", V = new s, y = "<div class='mod_vip_bindMobile'><a class='closeIco-bindMobile' style='cursor:pointer;' data-vip-bind='close' rseat='1503193_cls'>×</a><div class='vip_bindMobile_bd'><span class='vip-login_arrow'><i class='tip_outer'></i> <i class='tip_inner'></i></span><i class='bindMob-pic'></i><div data-vip-bind='bindType'><p class='bind_mob_main' data-vip-bind='bindText'><span data-vip-bind='tip'></span><a href='http://passport.iqiyi.com/pages/secure/account/bind_phone.action' style='cursor:pointer;' class='green' target='_blank' rseat='1503192_bnd' data-vip-bind='updatePass'>马上绑定</a></p></div></div></div><iframe class='mod_vip_bindMobile-iframe'></iframe>";
  n.create(l, {
    getDependentDoms: function () {
      var e = Q.$("[data-vip-bind=mobile]");
      return r = {widget: e}
    }, check: function (e) {
      return a(e), !0
    }, setDocument: function (e) {
      var t = r.widget.down("[data-vip-bind=tip]");
      t && t.html(e)
    }, isVip: function () {
      var e = this;
      o.checkVipInfo(function () {
        var t = parseInt(o.getVipType(), 10);
        (3 == t || 1 == t || 4 == t) && e.showMessageBox()
      })
    }, showMessageBox: function () {
      var e = this, t = {authcookie: o.getAuthCookies(), callback: "12"};
      V.checkUserHit(t, function (t) {
        "A00000" != t.code || "1" != t.data.insecure_account || Q.cookie.get(g) ? o.getPhone(function (t) {
          " " != t || Q.cookie.get(p) || (r.widget.html(y), (Q.browser.IE6 || Q.browser.IE7) && r.widget.removeClass("dn"), e.setDocument(h), e.checkCookie(p, f), e.showPingBack("1503191_msg"))
        }) : (r.widget.html(y), (Q.browser.IE6 || Q.browser.IE7) && r.widget.removeClass("dn"), r.widget.down("[data-vip-bind=updatePass]").html("修改密码"), r.widget.down("[data-vip-bind=updatePass]").attr("href", u), Q.$("[data-vip-bind=bindType]").addClass("bind_mob_main"), Q.$("[data-vip-bind=bindText]").removeClass("bind_mob_main").addClass("bind_mob_main_inner"), e.setDocument(m), e.checkCookie(g, U), e.showPingBack("508111_1"))
      })
    }, checkCookie: function (e, t) {
      var i = this, n = r.widget.down("[data-vip-bind=close]");
      n && n.on("click", function () {
        r.widget.html(" "), (Q.browser.IE6 || Q.browser.IE7) && r.widget.addClass("dn"), i.setState(e)
      }), Q.cookie.get(t) || (i.setMessageInfo(), i.setState(t))
    }, getUserType: function () {
      var e = this;
      o.isLogin() && window.setTimeout(function () {
        e.isVip()
      }, 1e3)
    }, init: function () {
      var e = this;
      e.getUserType(), Q.event.customEvent.on("logout", function () {
        r.widget.html(" "), (Q.browser.IE6 || Q.browser.IE7) && r.widget.addClass("dn")
      }), Q.event.customEvent.on("login", function () {
        e.getUserType()
      })
    }, setState: function (e) {
      Q.cookie.set(e, "1", {expires: 864e5, path: "/", domain: "iqiyi.com"})
    }, setMessageInfo: function () {
      var e = {authcookie: o.getAuthCookies(), source: d, title: c, content: h, expire_time: "", agent_type: 1};
      V.set(e, function () {
      })
    }, showPingBack: function (e) {
      var t = {authcookie: o.getAuthCookies(), agent_type: 1}, i = {
        t: "21",
        pf: 1,
        p: 10,
        p1: 101,
        p2: "1_10_101",
        jsuid: Q.cookie.get("QC005"),
        u: Q.cookie.get("QC005"),
        pu: Q.cookie.get("P00003"),
        block: e
      };
      Q.object.extend(i, t), Q.log.server(i, "http://msg.71.am/b")
    }
  }), i.exports = l, n.add(l)
});
define("../../interfaces/bindMobile_vipInterface", ["../kit/remoteInterface"], function (e, t, i) {
  var n = e("../kit/remoteInterface");
  i.exports = Q.Class("bindMobile_vipInterface", {
    construct: function () {
      this._remoteInterface = new n({
        setMobileMessage: {url: "http://notice.iqiyi.com/apis/msg/bind_phone_msg.action"},
        checkHitUser: {url: "https://passport.iqiyi.com/apis/user/info.action?fields=insecure_account"}
      })
    }, methods: {
      set: function (e, t) {
        e = e || {}, this._remoteInterface.send({
          dataType: "jsonp",
          ifname: "setMobileMessage",
          param: e,
          cors: !0,
          method: "GET",
          withCredentials: !0
        }, function (i) {
          t && t(i, e)
        })
      }, checkUserHit: function (e, t) {
        e = e || {}, this._remoteInterface.send({
          dataType: "jsonp",
          ifname: "checkHitUser",
          param: e,
          cors: !0,
          method: "GET",
          withCredentials: !0
        }, function (i) {
          t && t(i, e)
        })
      }
    }
  })
});
define("../../units/safe/abnormalLogin", ["../../components/action/checkDoms", "../../components/units/pageJob", "../../units/safe/abnormalLoginTpl", "../../kit/juicer", "../../kit/userInfo", "../../interfaces/safeV2/appeal"], function (e) {
  var t = e("../../components/action/checkDoms"), i = e("../../components/units/pageJob"), n = e("../../units/safe/abnormalLoginTpl"), a = e("../../kit/juicer"), o = e("../../kit/userInfo"), r = new (e("../../interfaces/safeV2/appeal")), s = {}, l = "abnormalLogin";
  return window.location.href.indexOf("passport.iqiyi.com") >= 0 ? !1 : (i.create(l, {
    getDependentDoms: function () {
      s.check = Q(document)
    }, check: function () {
      return t(s), !0
    }, init: function () {
      var e = this;
      e.initPop(), e.bindEvent(), e.customEvent()
    }, customEvent: function () {
      var e = this;
      Q.event.customEvent.on("abnormalLogin", function () {
        e.setCookie("c1", 1), e.setCookie("c24", 24), e.initPop()
      }), Q.event.customEvent.on("abnormalLogout", function () {
        e.removeCookie("c1"), e.removeCookie("c24"), Q(".J_pop-window").length > 0 && Q(".J_pop-window").remove()
      })
    }, bindEvent: function () {
      var e = this;
      Q(document).on("click", ".J_pop-close", function () {
        var t = Q(this).parents(".J_pop-window");
        t.addClass("dn"), e.setCookie("c24", 24), e.removeCookie("c1")
      })
    }, initPop: function () {
      if (Q("#J_vip-ad-pop").length > 0)return !1;
      var e = this;
      return o.isLogin() !== !0 ? !1 : (o.isVip(function (t) {
        if (t === !0) {
          var i = Q.cookie.get("c24" + Q.cookie.get("P00003")), n = Q.cookie.get("c1" + Q.cookie.get("P00003"));
          if (i && !n)return !1;
          n || i || (e.setCookie("c1", 1), e.setCookie("c24", 24)), n = Q.cookie.get("c1" + Q.cookie.get("P00003")), n && e.renderPop()
        }
      }), void 0)
    }, renderPop: function () {
      var e = this;
      r.abnormalLogin({fields: "ablogin"}, function (t) {
        if ("A00000" === t.code && 0 !== t.data.ablogin) {
          Q(".J_pop-window").length > 0 && Q(".J_pop-window").remove();
          var i = "";
          2 === t.data.ablogin ? (i = a(n.tpl01, t.data), e.setPingBack("506092_0")) : 1 === t.data.ablogin && (i = a(n.tpl02, t.data), e.setPingBack("506091_0")), Q("body").append(i)
        }
      })
    }, setCookie: function (e, t) {
      var i = e + "" + Q.cookie.get("P00003");
      Q.cookie.set(i, (new Date).getTime(), {path: "/", expires: 1e3 * 60 * 60 * t, domain: "iqiyi.com"})
    }, removeCookie: function (e) {
      Q.cookie.remove(e + "" + Q.cookie.get("P00003"), {path: "/", domain: "iqiyi.com"})
    }, setPingBack: function (e) {
      var t = {
        t: 21,
        rn: Math.random(),
        p: 10,
        pf: 1,
        p1: 101,
        bstp: 0,
        jsuid: Q.cookie.get("QC006") || "",
        ve: Q.getVideoEventID() || "",
        ce: "",
        u: Q.cookie.get("QC005") || "",
        block: e
      };
      Q.log.server(t, "http://msg.71.am/b")
    }
  }), i.add(l), void 0)
});
define("../../units/safe/abnormalLoginTpl", [], function (e, t, i) {
  var n = {
    tpl01: ['<div class="vip_rec_pop_wrapper J_pop-window" style="right:0px; bottom:0px; position:fixed; z-index:1000;">', '<div class="vip_rec_pop">', '<div class="vip_rec_b"></div>', '<div class="vip_rec_main">', '<div class="vip_rec_hd mb10">', "<h2>您的帐号登录异常</h2>", "</div>", '<div class="vip_rec_main_inner_closeBtn" href="javascript:void(0);"><a href="javascript:void(0);" rseat="506092_1" class="vip_rec_close J_pop-close"></a></div>', '<div class="vip_rec_bd">', '<div class="f14 mt15">帐号登录地点异常，且在其他设备更改过信息。若非本人操作，请尽快修改密码。</div>', '<div class="vip_pop_btn2 mt15 clearfix">', '<a href="http://passport.iqiyi.com/pages/secure/password/modify_pwd.action" rseat="506092_2" target="_blank">立即修改密码</a></div>', "</div>", "</div>", "</div>", "</div>"].join(""),
    tpl02: ['<div class="vip_rec_pop_wrapper J_pop-window" style="right:0px; bottom:0px; position:fixed; z-index:1000;">', '<div class="vip_rec_pop" >', '<div class="vip_rec_b"></div>', '<div class="vip_rec_main">', '<div class="vip_rec_hd mb10">', "<h2>您的帐号登录异常</h2>", "</div>", '<div class="vip_rec_main_inner_closeBtn" href="javascript:void(0);"><a href="javascript:void(0);" rseat="506091_1" class="vip_rec_close J_pop-close"></a></div>', '<div class="vip_rec_bd">', '<div class="f14 mt15">帐号登录地点异常，建议尽快修改密码或设置常用登录地点。', '<a href="http://passport.iqiyi.com/pages/secure/login_history.action" rseat="506091_4" target="_blank">查看详情&gt;</a></div>', '<div class="vip_pop_btn1 mt15 clearfix">', '<a href="http://passport.iqiyi.com/pages/secure/logincheck/modify_addresses.action" rseat="506091_3" target="_blank">设置常用登录地点</a>', '<a href="http://passport.iqiyi.com/pages/secure/password/modify_pwd.action" rseat="506091_2" target="_blank" class="ml30">修改密码</a></div>', "</div>", "</div>", "</div>", "</div>"].join("")
  };
  i.exports = n
});
define("../../interfaces/safeV2/appeal", ["../../kit/remoteInterface", "../../config/siteDomain", "../../kit/rsa"], function (e, t, i) {
  var n = e("../../kit/remoteInterface"), a = e("../../config/siteDomain");
  a.getDomain();
  var o = e("../../kit/rsa");
  i.exports = Q.Class("appeal", {
    construct: function () {
      this._remoteInterface = new n({
        submitAppeal: {url: "http://passport.iqiyi.com/pages/secure/appeal/submit_appeal.action"},
        submitDetailAppeal: {url: "http://passport.iqiyi.com/pages/secure/appeal/submit_appeal_detail.action"},
        modifyEm: {url: "http://passport.iqiyi.com/pages/secure/account/modify_em.action"},
        sendActivationEmail: {url: "http://passport.iqiyi.com/pages/secure/account/send_activation_email.action"},
        saveQa: {url: "http://passport.iqiyi.com/pages/secure/account/save_qa.action"},
        checkQa: {url: "http://passport.iqiyi.com/pages/secure/password//check_qa.action"},
        changeQa: {url: "http://passport.iqiyi.com/pages/secure/account/save_change_qa.action"},
        historyList: {url: "http://passport.iqiyi.com/pages/secure/login_history_list.action"},
        getQuestions: {url: "http://passport.iqiyi.com/pages/secure/account/getQuestions.action"},
        bindEmail: {url: "http://passport.iqiyi.com/apis/secure/bind_account.action"},
        getProvinces: {url: "https://passport.iqiyi.com/apis/user/get_province_list.action"},
        getCity: {url: "https://passport.iqiyi.com/apis/user/get_city_list.action"},
        setAddress: {url: "https://passport.iqiyi.com/pages/secure/logincheck/set_addresses.action"},
        abnormalLogin: {url: "https://passport.iqiyi.com/apis/user/info.action?fields=ablogin"}
      })
    }, methods: {
      submitAppeal: function (e, t) {
        e = e || {}, this._remoteInterface.send({
          method: "post",
          dataType: "jsonp",
          ifname: "submitAppeal",
          param: e
        }, function (e) {
          t && t(e)
        })
      }, submitDetailAppeal: function (e, t) {
        e = e || {}, this._remoteInterface.send({
          method: "post",
          dataType: "jsonp",
          ifname: "submitDetailAppeal",
          param: e
        }, function (e) {
          t && t(e)
        })
      }, modifyEm: function (e, t) {
        e = e || {}, this._remoteInterface.send({
          method: "get",
          dataType: "jsonp",
          ifname: "modifyEm",
          param: e
        }, function (e) {
          t && t(e)
        })
      }, sendActivationEmail: function (e, t) {
        e = e || {}, this._remoteInterface.send({
          method: "get",
          dataType: "jsonp",
          ifname: "sendActivationEmail",
          param: e
        }, function (e) {
          t && t(e)
        })
      }, saveQa: function (e, t) {
        e = e || {}, this._remoteInterface.send({
          method: "post",
          dataType: "jsonp",
          ifname: "saveQa",
          param: e
        }, function (e) {
          t && t(e)
        })
      }, checkQa: function (e, t) {
        e = e || {}, this._remoteInterface.send({
          method: "post",
          dataType: "jsonp",
          ifname: "checkQa",
          param: e
        }, function (e) {
          t && t(e)
        })
      }, changeQa: function (e, t) {
        e = e || {}, this._remoteInterface.send({
          method: "post",
          dataType: "jsonp",
          ifname: "changeQa",
          param: e
        }, function (e) {
          t && t(e)
        })
      }, historyList: function (e, t) {
        e = e || {}, this._remoteInterface.send({
          method: "post",
          dataType: "jsonp",
          ifname: "historyList",
          param: e
        }, function (e) {
          t && t(e)
        })
      }, getQuestions: function (e, t) {
        e = e || {}, this._remoteInterface.send({
          method: "post",
          dataType: "jsonp",
          ifname: "getQuestions",
          param: e
        }, function (e) {
          t && t(e)
        })
      }, bindEmail: function (e, t) {
        e = e || {}, e.passwd && (e.passwd = o.rsaFun(e.passwd)), this._remoteInterface.send({
          method: "post",
          dataType: "jsonp",
          ifname: "bindEmail",
          param: e
        }, function (e) {
          t && t(e)
        })
      }, getProvinces: function (e, t) {
        e = e || {}, this._remoteInterface.send({
          method: "post",
          dataType: "jsonp",
          ifname: "getProvinces",
          param: e
        }, function (e) {
          t && t(e)
        })
      }, getCity: function (e, t) {
        e = e || {}, this._remoteInterface.send({
          method: "post",
          dataType: "jsonp",
          ifname: "getCity",
          param: e
        }, function (e) {
          t && t(e)
        })
      }, setAddress: function (e, t) {
        e = e || {}, this._remoteInterface.send({
          method: "post",
          dataType: "jsonp",
          ifname: "setAddress",
          param: e
        }, function (e) {
          t && t(e)
        })
      }, abnormalLogin: function (e, t) {
        e = e || {}, this._remoteInterface.send({
          method: "post",
          dataType: "jsonp",
          ifname: "abnormalLogin",
          param: e
        }, function (e) {
          t && t(e)
        })
      }
    }
  })
});
define("../../units/abnormalVerifyPhone", ["../components/units/pageJob", "../components/action/checkDoms", "../kit/placeholder", "../kit/validate", "../kit/userInfo", "../interfaces/mobileRegistInterface", "../kit/iframeRequest", "../config/siteDomain"], function (e) {
  var t = e("../components/units/pageJob");
  e("../components/action/checkDoms");
  var i = e("../kit/placeholder"), n = e("../kit/validate"), a = e("../kit/userInfo"), o = e("../interfaces/mobileRegistInterface"), r = e("../kit/iframeRequest"), s = e("../config/siteDomain"), l = s.getDomain(), d = "abnormalVerifyPhone", c = {}, h = {
    mobile1: "手机号不能为空",
    mobile2: "手机号格式错误",
    mobile3: "手机号重复",
    imgcode: "图文验证码不能为空",
    imgcode1: "图文验证码错误",
    smscode: "短信验证码不能为空",
    tip: "您正在异地登录，请完成手机验证"
  }, m = new o;
  t.create(d, {
    getDependentDoms: function () {
      return !0
    }, check: function () {
      return !0
    }, init: function () {
      var e = this;
      Q.event.customEvent.on("abnormal_verifyPhone", function (t) {
        Q("[data-loginbox-elem=loginTable]")[0] ? (e.showfloater(e.getVerifyList()), e.showPingBack("512251_1"), e._setDOM(t.data), c.warnErr.html(h.tip)) : t.data && t.data.redirect && (window.location.href = t.data.redirect)
      })
    }, showfloater: function (e) {
      var t = this;
      Q("[data-loginbox-elem=loginTable]").html(e), t.bindEvent()
    }, bindEvent: function () {
      var e = this;
      Q(document).delegate("[data-loginbind-elem]", "focus", function (e) {
        e.preventDefault();
        var t = e.currentTarget, i = Q(t).attr("data-loginbind-elem"), n = "[data-loginbind-wrap=" + i + "]";
        Q(n).addClass("acountIn")
      }), Q(document).delegate("[data-loginbind-elem]", "blur", function (t) {
        t.preventDefault();
        var i = t.currentTarget, n = Q(i).attr("data-loginbind-elem"), a = "[data-loginbind-wrap=" + n + "]";
        Q(a).removeClass("acountIn"), "mobile" == Q(i).attr("data-loginbind-elem") && e.validatePhone(Q(i).val())
      }), Q(document).delegate("[data-loginbind-smscode=btn]", "click", function (t) {
        t.preventDefault();
        var i = c.mobileInp.val();
        if (e.validatePhone(i)) {
          var n = c.imgInp;
          e.validateInput(n, "imgcode") && e.sendPhoneCode(i)
        }
      }), Q(document).delegate("[data-loginbind-refresh]", "click", function (t) {
        t.preventDefault(), e.refreshPiccode()
      }), Q(document).delegate("[data-loginbind-submit=btn]", "click", function (t) {
        t.preventDefault();
        var i = !1;
        Q("[data-loginbind-elem]").each(function (t, n) {
          return i = e.validateInput(n, null), i ? void 0 : !1
        }), i && e.abVerifyPhone()
      }), e.placeSimulate()
    }, validateInput: function (e, t) {
      var i = this, a = t || Q(e).attr("data-loginbind-elem"), o = c.warnErr, r = Q(e).val(), s = !0;
      return "mobile" == a && (s = i.validatePhone(r, o)), ("imgcode" == a || "smscode" == a) && (n.empty(r) ? o.html("") : (o.html(h[a]), s = !1)), s
    }, validatePhone: function (e, t) {
      var i = t || c.warnErr;
      return n.mobile(e) ? (i.html(""), !0) : (n.empty(e) ? i.html(h.mobile2) : i.html(h.mobile1), !1)
    }, sendPhoneCode: function (e) {
      var t = this, i = c.warnErr, n = {
        requestType: 15,
        cellphoneNumber: e,
        authcookie: a.getAuthCookies(),
        serviceId: 2,
        agenttype: 1,
        vcode: c.imgInp.val().trim()
      };
      m.sendCodeNew(n, function (e) {
        "A00000" == e.code ? t.ecountDown() : "P00107" == e.code ? (i.html(h.imgcode1), t.refreshPiccode()) : (i.html(e.msg), t.refreshPiccode())
      })
    }, ecountDown: function () {
      var e = 89, t = null;
      clearInterval(t), c.smsBtn.addClass("dn"), c.smsTimer.removeClass("dn");
      var i = c.smsTimer.find("em");
      t = setInterval(function () {
        0 === e ? (c.smsBtn.removeClass("dn"), c.smsTimer.addClass("dn"), i.html("89"), clearInterval(t)) : (e--, i.html(e))
      }, 1e3)
    }, getParamData: function () {
      var e = {cellphoneNumber: c.mobileInp.val(), authCode: c.smsInp.val(), agenttype: 1, serviceId: 2};
      return e
    }, abVerifyPhone: function () {
      var e = this, t = c.warnErr, i = e.getParamData();
      m.tokenlogin(i, function (e) {
        if ("A00000" === e.code) {
          if (e.data.hasLogined) {
            var i = new r;
            i.request(e.data.hasLogined, null)
          }
          c.from && (e.data.from = c.from), e.data._loginName = c._loginName, window.lib.__callbacks__.login_success(e.data)
        } else t.html(e.msg), Q.event.customEvent.fire({
          type: "login-failed",
          data: {code: e.code, msg: e.msg, needCode: e.data.needcode}
        })
      })
    }, refreshPiccode: function () {
      var e = "http://passport." + l + "/register/vcode.php?r=" + Math.random();
      c.imgCode.attr("src", e), c.imgInp.val("")
    }, placeSimulate: function () {
      Q("[data-loginbind-elem]").each(function (e, t) {
        i.simulate(t)
      })
    }, showPingBack: function (e) {
      var t = {
        t: "21",
        bstp: 0,
        pf: 1,
        p: 10,
        p1: 101,
        p2: "1_10_101",
        u: Q.cookie.get("QC005"),
        jsuid: Q.cookie.get("QC006"),
        pu: Q.cookie.get("P00003"),
        block: e
      };
      Q.log.server(t, "http://msg.71.am/b")
    }, _setDOM: function (e) {
      c = {
        mobileInp: Q("[data-loginbind-elem=mobile]"),
        imgInp: Q("[data-loginbind-elem=imgcode]"),
        smsInp: Q("[data-loginbind-elem=smscode]"),
        imgCode: Q("[data-loginbind-refresh=img]"),
        smsBtn: Q("[data-loginbind-smscode=btn]"),
        smsTimer: Q("[data-loginbind-smscode=timer]"),
        warnErr: Q("[data-loginbox-elem=errDom]"),
        _loginName: e._loginName,
        from: e.from
      }
    }, getVerifyList: function () {
      var e = '<tbody><tr><th>手&nbsp;&nbsp;&nbsp;机：</th><td><div class="acountBorder" data-loginbind-wrap="mobile"><input type="text" placeholder="请输入手机号码" class="in-txt txt230" data-loginbind-elem="mobile" tabindex="1"></div></td></tr><tr><th>验证码：</th><td><div class="acountCode acountBorder acountYzm" data-loginbind-wrap="imgcode"><input placeholder="请输入右侧字母" class="in-txt" data-loginbind-elem="imgcode" tabindex="3" type="text"><span class="in-xline"></span><span class="yzimg"><img src="http://passport.' + l + '/register/vcode.php?r=0.8545576247216254" data-loginbind-refresh="img"> </span>' + "</div>" + '<a class="refreshContent" href="javaScript:;" data-loginbind-refresh="icon">' + '<i class="loginIcon refreshIcon"></i>' + "</a>" + "</td>" + "</tr>" + "<tr>" + "<th></th>" + '<td><div class="acountCode acountBorder fl" data-loginbind-wrap="smscode">' + '<input type="text" placeholder="请输入验证码" data-loginbind-elem="smscode" class="in-txt" tabindex="3">' + '<span class="free-yzm-get">' + '<a href="javaScript:;" data-loginbind-smscode="btn">免费获取短信</a>' + '<a class="reget dn" href="javaScript:;" data-loginbind-smscode="timer"><em>89</em>s后重新获取</a>' + "</span>" + "</div>" + "</td>" + "</tr>" + "<tr>" + "<th></th>" + '<td><div class="login_submitV3">' + '<a data-loginbind-elem="loginBtn" class="submitV3Btn" href="javascript:;" data-loginbind-submit="btn">验&nbsp;&nbsp;证</a></div></td>' + "</tr>" + "</tbody>";
      return e
    }
  }), t.add(d)
});
define("../../units/vip/vipUnFreeze", ["../../components/units/pageJob", "../../components/action/checkDoms", "../../components/action/floater", "../../components/view/floaterView", "../../interfaces/vipUnFreeze"], function (e, t, i) {
  var n = e("../../components/units/pageJob");
  e("../../components/action/checkDoms");
  var a = e("../../components/action/floater"), o = e("../../components/view/floaterView"), r = e("../../interfaces/vipUnFreeze"), s = "vipUnFreeze", l = new r, d = null;
  n.create(s, {
    check: function () {
      return !0
    }, init: function () {
      var e = this;
      e.bindEvent()
    }, bindEvent: function () {
      var e = this;
      Q(document).delegate("[data-vipuser-ele=freeTips]", "click", function () {
        e.getFreeHtml()
      }), Q(document).delegate("[data-delegate=d-btn-close]", "click", function () {
        d.destroy(), d = null
      })
    }, createfloater: function (e) {
      d || (d = new a({view: new o({isResize: !0, zIndex: 4850})}), d.show({html: e}))
    }, getFreeHtml: function () {
      var e = this, t = Q.cookie.get("P00001");
      l.getVipUnFreeze(t, function (t) {
        if ("A00000" == t.code) {
          var i = t.data.html.replace("J_pop-vip", "J_pop-vip play-hy-pop-unfixed").replace("close dn", "close");
          e.createfloater(i)
        }
      })
    }
  }), n.add(s), i.exports = s
});
define("../../interfaces/vipUnFreeze", ["../kit/remoteInterface", "../config/siteDomain"], function (e, t, i) {
  var n = e("../kit/remoteInterface");
  e("../config/siteDomain"), i.exports = Q.Class("vipUnFreeze", {
    construct: function () {
      this._remoteInterface = new n({vipUnFreeze: {url: "http://passport.iqiyi.com/pages/fragment/vip_unfreeze.action"}})
    }, methods: {
      getVipUnFreeze: function (e, t) {
        e = e || {}, this._remoteInterface.send({dataType: "jsonp", ifname: "vipUnFreeze", param: e}, function (e) {
          t && t(e)
        })
      }
    }
  })
});
define("../../units/checkWebSel", ["../components/units/pageJob", "../components/action/checkDoms", "../kit/checkI18nType"], function (e) {
  var t = e("../components/units/pageJob");
  e("../components/action/checkDoms");
  var i, n, a, o, r = "checkWebSel", s = {
    path: "/",
    domain: "iqiyi.com",
    expires: 31536e6
  }, l = e("../kit/checkI18nType");
  t.create(r, {
    getDependentDoms: function () {
      i = Q.$("#footer-websel-menu"), n = Q.$("#i18n-selweb-wrap"), a = Q.$("#i18n-selweb-text"), o = Q.$("#i18n-selweb-footer")
    }, check: function () {
      return i && n && a && o ? !0 : !1
    }, init: function () {
      if (l.type) {
        if (!Q.cookie.get("i18n"))return i.addClass("dn"), void 0;
        i.removeClass("dn")
      } else i.removeClass("dn");
      Q.$(document).on("click", function () {
        o.removeClass("region-opt-hover")
      }), i.delegate("i18n-change-btn", function (e) {
        e = Q.event.get(e.event), e.preventDefault(), e.stopPropagation(), o.hasClass("region-opt-hover") ? o.removeClass("region-opt-hover") : o.addClass("region-opt-hover")
      }), n.delegate("i18n-change-web", function (e) {
        n.children().forEach(function (e) {
          Q.$(e).removeClass("selected")
        }), e = Q.event.get(e.event), e.preventDefault();
        var t = Q.$(e.target), i = t.attr("i18n-web-type"), r = t.html();
        if (t.parent().addClass("selected"), a.html(r), "cn" === i) {
          if (Q.cookie.set("i18n", "cn_s", s), l.type)return
        } else if ("tw" === i && (Q.cookie.set("i18n", "tw_t", s), !l.type))return;
        o.removeClass("region-opt-hover"), window.location.reload()
      })
    }
  }), t.add(r)
});
define("../../units/pcLoginNewPage", ["../components/units/pageJob", "../kit/iframeLocation", "../action/pcLoginBox", "../view/pcLoginBoxView"], function (e, t, i) {
  var a = e("../components/units/pageJob"), n = e("../kit/iframeLocation"), o = e("../action/pcLoginBox"), r = e("../view/pcLoginBoxView"), s = "pcLoginNewPage", l = {};
  a.create(s, {
    getDependentDoms: function () {
      return l.wrapper = Q.$("[data-widget-loginbox=loginbox]"), l
    }, check: function (e) {
      return !!e
    }, exec: function () {
      this.initLogin()
    }, initLogin: function () {
      var e = l.wrapper;
      if (e) {
        var t = {
          initStatus: "show",
          alreadyRendered: !0,
          inputFocusClass: "text_on",
          switchToQrCodeLoginRseat: "140711_tdenter_lginpage",
          returnFromQrCodeLoginRseat: "140711_bklginpage"
        }, i = new r({wrapper: e}, t);
        new o({view: i, model: ""})
      }
      Q.event.customEvent.on("login-failed", this._loginFailed.bind(this)), Q.event.customEvent.on("login", this.login_success.bind(this))
    }, login_success: function (e) {
      var t = "passport.iqiyi.com/pages/secure/index.action";
      e.data && e.data.redirect && e.data.redirect.indexOf(t) < 0 ? setTimeout(function () {
        n.href(e.data.redirect)
      }, 1e3) : setTimeout(function () {
        var e = "http://www.iqiyi.com/", i = Q.url.queryToJson(location.search);
        i && i.url && (e = decodeURIComponent(i.url)), location.href.indexOf(t) >= 0 && (e = "http://" + t), n.href(e)
      }, 100)
    }, _loginFailed: function () {
    }
  }), i.exports = s
});
define("../../units/pcRegistNewPage", ["../components/units/pageJob", "../kit/iframeLocation", "../action/pcRegistBox", "../view/pcRegistBoxView"], function (e, t, i) {
  var a = e("../components/units/pageJob"), n = e("../kit/iframeLocation"), o = e("../action/pcRegistBox"), r = e("../view/pcRegistBoxView"), s = "pcRegistNewPage", l = {};
  a.create(s, {
    getDependentDoms: function () {
      return l.wrapper = Q.$("[data-widget-registbox=registbox]"), l
    }, check: function (e) {
      return !!e
    }, exec: function () {
      this.initRegist(), this._getPingBack("1411203_ldshw")
    }, initRegist: function () {
      var e = l.wrapper;
      if (e) {
        var t = {
          initStatus: "show",
          alreadyRendered: !0,
          submitBtnDisabledClass: "disabled-btn",
          inputFocusClass: " ",
          accountType: "mobile",
          switchToQrCodeLoginRseat: "140711_tdenter_rgstpage",
          returnFromQrCodeLoginRseat: "140711_bkrgstpage"
        }, i = new r({wrapper: e}, t);
        new o({view: i, model: ""})
      }
      this._registedCb = this._registed.bind(this), Q.event.customEvent.on("registFail", this._registFailed.bind(this)), Q.event.customEvent.on("registed", this._registedCb), Q.event.customEvent.on("login", this._registedCb)
    }, _registed: function (e) {
      "login" === e.type ? Q.event.customEvent.un("login", this._registedCb) : window.lib.__callbacks__.login_success(e.data || {}), e.data && e.data.data && e.data.data.redirect ? setTimeout(function () {
        n.href(e.data.data.redirect)
      }, 1e3) : "login" === e.type && setTimeout(function () {
        if (-1 != location.hostname.indexOf("pps.tv"))n.href("http://www.pps.tv/"); else {
          var e = "http://www.iqiyi.com/", t = Q.url.queryToJson(location.search);
          t && t.url && (e = decodeURIComponent(t.url)), n.href(e)
        }
      }, 1e3)
    }, _registFailed: function () {
    }, _getPingBack: function (e) {
      var t = {
        t: 21,
        rn: Math.random(),
        p: 10,
        pf: 1,
        p1: 101,
        bstp: 0,
        jsuid: Q.cookie.get("QC006") || "",
        ve: Q.getVideoEventID() || "",
        u: Q.cookie.get("QC005") || "",
        block: e
      };
      Q.log.server(t, "http://msg.71.am/b")
    }
  }), i.exports = s
});
define("../../units/safe/verifyEmail", ["../../components/action/checkDoms", "../../kit/validate", "../../components/units/pageJob", "../../units/safe/safeTool", "../../interfaces/validateEmailInterface", "../../interfaces/mobileRegistInterface", "../../interfaces/verifyMobileInterface"], function (e, t, i) {
  var a = e("../../components/action/checkDoms"), n = e("../../kit/validate"), o = e("../../components/units/pageJob"), r = e("../../units/safe/safeTool"), s = e("../../interfaces/validateEmailInterface");
  new (e("../../interfaces/mobileRegistInterface"));
  var l = e("../../interfaces/verifyMobileInterface"), d = Q.browser.iPad ? "touchstart" : "click", c = {}, u = {};
  new r;
  var p = "verifyEmail";
  o.create(p, {
    getDependentDoms: function () {
      c.check = Q.$("#J_verify-email")
    }, check: function () {
      return a(c), !0
    }, init: function () {
      this._setDOM(), this._setWarnInfo(), this.bindEvent(), this.keyEmailUp()
    }, bindEvent: function () {
      this.EsubmitEvent()
    }, EsubmitEvent: function () {
      var e = this;
      c.emailSubmitElem.on(d, function (t) {
        Q.event.get(t).preventDefault();
        var i = Q.event.get(t).target;
        e.submitEmailFun(i)
      });
      var t = c.emailInfo.attr("type");
      "text" === t && c.emailInfo.on("blur", function () {
        e._checkEmail(!1)
      })
    }, submitEmailFun: function (e) {
      var t = this, i = Q.$(e).attr("type") || Q.$(e).attr("data-type"), a = Q.$(e).attr("from") || "", n = parseInt(i, 10);
      t.EsubmitAjax(n, a)
    }, EsubmitAjax: function (e, t) {
      var i = this, a = null, n = Q.cookie.get("P00001"), o = null;
      n && (o = Q.crypto.md5(n));
      var r = c.emailInfo.attr("data-type") || c.emailInfo.attr("type");
      "html" === r ? a = c.emailInfo.attr("data-email-info") : "text" === r && (a = c.emailInfo.value(), i._checkEmail(!0));
      var l = null, d = null;
      if (c.warnInfoElem && (l = c.warnInfoElem.hasClass("error_warnning"), d = c.warnInfoElem.hasClass("dn")), !l || d) {
        var u = {type: e, antiCsrf: o, email: a, authcookie: n, from: t || ""}, p = new s;
        p.verifyEmail(u, function (e) {
          return "A00000" == e.code ? (window.location.href = e.data.redirect, !1) : ("A10002" == e.code ? c.mailToPhone.removeClass("dn").addClass("mt_3") : c.warnInfoElem ? (c.emailInfo.addClass("invalid_num"), c.warnInfoElem.removeClass("dn success_hint pp_icon").addClass("error_warnning"), c.warnInfoElem.html(e.msg)) : alert(e.msg), void 0)
        })
      }
    }, _checkEmail: function (e) {
      var t = this, i = c.emailInfo.value(), a = n.newMail(i), o = null;
      if (a) {
        if (e)return !1;
        var r = c.emailInfo.value(), s = {account: r.replace(/(^\s*)|(\s*$)/g, ""), agenttype: 1};
        (new l).verifyNum(s, function (e) {
          var i = c.emailSubmitElem.attr("type");
          e.data === !1 ? 16 === parseInt(i, 10) ? t._setStyle("mailE", u.mailNotRge) : t._setStyle("mailT") : e.data === !0 ? 16 != parseInt(i, 10) ? t._setStyle("mailE", u.mailIsReg) : t._setStyle("mailT") : "A00000" == e.code ? t._setStyle("mailE", "点击过于频繁") : t._setStyle("mailE", e.msg)
        })
      } else o = "" === i || null === i ? u.mailNull : u.mailError, t._setStyle("mailE", o)
    }, _setStyle: function (e, t) {
      "mailT" === e ? (c.emailInfo.removeClass("invalid_num"), c.warnInfoElem.removeClass("dn error_warnning").addClass("success_hint pp_icon").html("")) : "mailE" === e && (c.emailInfo.addClass("invalid_num"), c.warnInfoElem.removeClass("dn success_hint pp_icon").addClass("error_warnning").html(t))
    }, keyEmailUp: function () {
      var e = this;
      Q.$("input").on("keyup", function (t) {
        if (13 == t.keyCode) {
          var i = c.emailSubmitElem[0];
          Q.$("#J_change-passwd") || (e._checkEmail(!1), e.submitEmailFun(i))
        }
      })
    }, _setWarnInfo: function () {
      u = {
        mailError: "邮箱格式错误",
        mailNull: "邮箱不能为空",
        mailIs: "邮箱已经存在",
        mailCode: "验证码错误",
        mailIsReg: "该邮箱已被注册",
        mailNotRge: "该帐号未注册"
      }
    }, _setDOM: function () {
      c = {
        box: Q.$("#J_email-box"),
        emailSubmitElem: Q.$("#J_email-submit"),
        emailInfo: Q.$("#J_email-info"),
        warnInfoElem: Q.$("#J_warn-info"),
        mailToPhone: Q.$("#J_mail-bindPhone")
      }
    }
  }), i.exports = p
});
define("../../units/safe/safeTool", ["../../kit/easyEventPlugin"], function (e, t, i) {
  e("../../kit/easyEventPlugin");
  var n = Q.Class("safeTool", {
    construct: function () {
    }, methods: {
      EcountDown: function (e, t) {
        var i = e, n = t, a = null;
        clearInterval(a), n.timeoutResendElem.removeClass("dn"), n.emailResendSubmitElem.addClass("dn"), a = setInterval(function () {
          return n.timeoutRElem.html(""), n.timeoutRElem.html(i), 0 === i ? (n.timeoutResendElem.addClass("dn"), n.emailResendSubmitElem.removeClass("dn"), clearInterval(a), n.timeoutRElem.html(i), !1) : (i--, void 0)
        }, 1e3)
      }
    }
  });
  i.exports = n
});
define("../../interfaces/validateEmailInterface", ["../kit/remoteInterface", "../config/siteDomain"], function (e, t, i) {
  var n = e("../kit/remoteInterface"), a = e("../config/siteDomain"), o = a.getDomain();
  i.exports = Q.Class("validateEmailInterface", {
    construct: function () {
      this._remoteInterface = new n({
        verifyEmail: {url: "http://passport." + o + "/apis/secure/send_verify_email.action"},
        reVerifyEmail: {url: "http://passport." + o + "/apis/secure/resend_verify_email.action"}
      })
    }, methods: {
      verifyEmail: function (e, t) {
        this._remoteInterface.send({ifname: "verifyEmail", param: e, method: "get", dataType: "jsonp"}, function (i) {
          t && t(i, e)
        })
      }, reVerifyEmail: function (e, t) {
        this._remoteInterface.send({ifname: "reVerifyEmail", param: e, method: "get", dataType: "jsonp"}, function (i) {
          t && t(i, e)
        })
      }
    }
  })
});
define("../../units/safe/verifyPhone", ["../../components/action/checkDoms", "../../kit/validate", "../../components/units/pageJob", "../../interfaces/validateEmailInterface", "../../interfaces/mobileRegistInterface", "../../interfaces/verifyMobileInterface", "../../kit/userInfo", "../../components/action/floater", "../../components/view/floaterView", "../../kit/pcVCodeKit"], function (e, t, i) {
  var a = e("../../components/action/checkDoms"), n = e("../../kit/validate"), o = e("../../components/units/pageJob");
  e("../../interfaces/validateEmailInterface");
  var r, s = new (e("../../interfaces/mobileRegistInterface")), l = e("../../interfaces/verifyMobileInterface"), d = e("../../kit/userInfo"), c = e("../../components/action/floater"), u = e("../../components/view/floaterView"), p = Q.browser.iPad ? "touchstart" : "click", m = e("../../kit/pcVCodeKit"), h = {}, f = {}, g = "0", v = null, b = !1, y = "<div class='passport-pop'><div class='pp-title'><span>手机迁移信息确认</span><a class='icon-pop pp-close' data-widget-pop='cancleBtn' href='#'></a></div><div class='pp-content-wrapper'><div class='pp-mobile-migrate'><div class='migrate-l'><dl><dt><img data-widget-pop='icon2' src='http://www.qiyipic.com/common/fix/headicons/male-130.png'></dt><dd>原帐号：<span data-widget-pop='num2'></span></dd><dd class='uid'>UID：<span data-widget-pop='uid2'></span></dd></dl></div><div class='migrate-r'><dl><dt><img data-widget-pop='icon1' src='http://www.qiyipic.com/common/fix/headicons/male-130.png'></dt><dd>当前帐号：<span data-widget-pop='num1'></span></dd><dd class='uid'>UID：<span data-widget-pop='uid1'></span></dd></dl></div><div class='migrate-m'><div class='migrate-mobile'><i class='icon-mobile'></i><span data-widget-pop='phoneNum'></span></div><div class='migrate-arrow'></div></div></div><div class='migrate-foot'><div data-widget-pop='phoneMessage'></div><!--当选中复选框时，追加 selected --><div class='migrate-confirm'><i class='icon-pop icon-select' data-widget-pop='sureBtn'></i>我已确认以上迁移信息，将手机号迁移至当前账号（30天内仅可改绑一次）</div><div class='migrate-btn'><a class='btn btn-disabled' data-widget-pop='submitBtn' href='#' rseat='507271_2'>确定迁移</a><a class='btn btn-gray' data-widget-pop='cancleBtn' href='#'>取消</a></div></div></div></div>", w = "phoneInfo";
  o.create(w, {
    getDependentDoms: function () {
      h.check = Q.$("#J_verify-phone")
    }, check: function () {
      return a(h), !0
    }, init: function () {
      this.isMobile(), this._setDOM(), this._setWarnInfo(), this.bindEvent(), this.keyPhoneUp()
    }, isMobile: function () {
      b = Q("#J_verify-phone").is("section") ? !0 : !1
    }, bindEvent: function () {
      var e = this;
      e.PgetCodeEvent(), e.PsubmitEvent(), e.PcheckNumEvent(), e._bindEvent(), e.picCodeEvent()
    }, PgetCodeEvent: function () {
      var e = this;
      h.PgetCodeBtn.on(p, function (t) {
        Q.event.get(t).preventDefault();
        var i = Q.event.get(t).target, a = Q.$(i).attr("type"), n = Q.$(i).attr("needvcode"), o = !1, r = !1, s = !1, l = !1;
        if (h.PwarnInfo && (o = h.PwarnInfo.hasClass("error_warnning"), r = h.PwarnInfo.hasClass("dn")), h.piccodeValue && (s = h.piccodeValue.hasClass("error_warnning"), l = h.piccodeValue.hasClass("dn")), o && !r || s && !l) {
          if (h.piccodeValue && !h.piccodeValue.value())return e._setPicCodeForSmsStyle(f.tx401), void 0;
          e._removePicCodeForSmsStyle()
        } else {
          var d = !0, c = Q(h.PnumInp).val();
          if (("" === c.trim() || c != h.lastPhone) && (d = e._PvalidateNum()), d === !1)return;
          if (h.piccodeValue && !h.piccodeValue.value())return e._setPicCodeForSmsStyle(f.tx401), void 0;
          e._PhoneGetCode(a, n)
        }
      })
    }, PsubmitEvent: function () {
      var e = this;
      h.PbindBtn.on(p, function (t) {
        Q.event.get(t).preventDefault();
        var i = Q.event.get(t).target;
        e.submitFun(i)
      })
    }, refreshPiccode: function () {
      r = m.getVcode(), h.piccode ? h.piccode.html("<img src='" + r + "'/> ") : h.RefreshPiccode && h.RefreshPiccode.html("<img src='" + r + "'/> ")
    }, picCodeEvent: function () {
      var e = this;
      h.piccodeInput && h.piccodeInput.on("focus", function () {
        r != h.piccode.down("img").attr("src") && e.refreshPiccode()
      }), h.piccode && h.piccode.on("click", function (t) {
        Q.event.get(t).preventDefault(), setTimeout(function () {
          e.refreshPiccode()
        }, 0)
      }), h.RefreshPiccode && h.RefreshPiccode.on("click", function (t) {
        Q.event.get(t).preventDefault(), setTimeout(function () {
          e.refreshPiccode()
        }, 0)
      })
    }, submitFun: function (e) {
      var t = this;
      h.PcodeInp && h.PwarnInfoCode && t._removeCodeStyle(), h.PiccodeInp && h.PicwarnInfoCode && t._removePicCodeStyle();
      var i = parseInt(Q.$(e).attr("type"), 10), a = i, o = null;
      3 === i || 4 === i || 2 === i || 12 === i || 14 === i ? o = h.PnumInp.value() : (6 === i || 5 === i || 9 === i || 11 === i || 13 === i) && (o = h.PnumInp.attr("data-line-val"));
      var r, s = h.PcodeInp.value();
      if (h.PiccodeInp && (r = h.PiccodeInp.value(), !n.empty(r)))return t._setPicCodeStyle(f.tx401), !1;
      var l = Q.$(e).attr("from");
      if (!n.empty(s))return t._setCodeStyle(f.tx401), !1;
      var d = {
        cellphoneNumber: o,
        authCode: s,
        requestType: a,
        authcookie: Q.cookie.get("P00001"),
        serviceId: 2,
        picCode: r || "",
        agenttype: 1,
        from: l || ""
      };
      14 === i && (d.passwd = h.PassInp.value()), h.PnumInp.hasClass("invalid_num") || t._PsubmitAjax(d)
    }, PcheckNumEvent: function () {
      var e = this, t = null;
      h.PnumInp && (t = h.PnumInp.attr("type"), "text" === t && (h.PnumInp.on("focus", function (e) {
        e.preventDefault(), h.lastPhone = Q(h.PnumInp).val()
      }), h.PnumInp.on("blur", function (t) {
        t.preventDefault();
        var i = Q(h.PnumInp).val();
        ("" === i.trim() || i != h.lastPhone) && e._PvalidateNum()
      })))
    }, _PvalidateNum: function () {
      var e = this, t = h.PnumInp.attr("type"), i = null;
      if ("html" === t)return !0;
      var a = h.PnumInp.value(), o = n.mobile(a) || /^09\d{8}$/.test(a);
      if (!o)return i = "" === a || null === a ? f.tx00 : f.txError, e._setPhoneWarnStyle(i), !1;
      var r = h.PnumInp.attr("data-find-pw"), s = {account: h.PnumInp.value(), agenttype: 1};
      (new l).verifyNum(s, function (t) {
        if (t.data === !1)return r ? (e._setPhoneWarnStyle("该帐号未注册"), !1) : (e._setPhoneTureStyle(), !0);
        if (t.data === !0) {
          if (r)return e._setPhoneTureStyle(), !0;
          "shegong" === Q("#J_bind-submit").attr("from") ? e._setPhoneWarnStyle(f.txPeTransfer2) : e.checkSwitchAccount()
        }
      })
    }, checkSwitchAccount: function () {
      var e = this, t = {
        authcookie: d.getAuthCookies(),
        cellphoneNumber: h.PnumInp.value(),
        serviceId: 2,
        requestType: 14,
        agenttype: 1
      };
      (new l).checkSwitchAccount(t, function (t) {
        "A00000" == t.code ? (e._setPhoneWarnStyle(f.txPeTransfer), h.PwarnInfo.addClass("bindMTip"), g = t.data.showPwd, Q(document).delegate("#J_switch-mobile", "click", function (t) {
          return Q.event.get(t).preventDefault(), h.piccodeValue && !h.piccodeValue.value() ? (e._setPicCodeForSmsStyle(f.tx401), !1) : (e.switchMobile(), void 0)
        })) : e._setPhoneWarnStyle(f.txPexist)
      })
    }, createfloater: function () {
      var e = this;
      v || (v = new c({view: new u({isResize: !0, zIndex: 4850})}), v.show({html: y}), e.showPingBack())
    }, showPingBack: function () {
      var e = {authcookie: d.getAuthCookies(), agent_type: 1}, t = {
        t: "21",
        pf: 1,
        p: 10,
        p1: 101,
        p2: "1_10_101",
        jsuid: Q.cookie.get("QC005"),
        u: Q.cookie.get("QC005"),
        pu: Q.cookie.get("P00003"),
        block: "507271_1"
      };
      Q.object.extend(t, e), Q.log.server(t, "http://msg.71.am/b")
    }, getUserMessage: function () {
      var e = this, t = {authcookie: d.getAuthCookies(), cellphoneNumber: h.PnumInp.value(), agenttype: 1};
      (new l).getSwitchInfo(t, function (t) {
        if ("A00000" === t.code) {
          e.createfloater();
          var i = t.data, a = h.PnumInp.value().substring(0, 3), n = h.PnumInp.value().substring(7, 11), o = a + "****" + n;
          Q.$("[data-widget-pop=num1]").html(i.account), Q.$("[data-widget-pop=num2]").html(i.oldAccount), i.icon && Q.$("[data-widget-pop=icon1]").attr("src", i.icon), i.oldIcon && Q.$("[data-widget-pop=icon2]").attr("src", i.oldIcon), Q.$("[data-widget-pop=uid1]").html(i.uid), Q.$("[data-widget-pop=uid2]").html(i.oldUid), Q.$("[data-widget-pop=phoneNum]").html(o), Q.$("[data-widget-pop=phoneMessage]").html(i.message)
        }
      })
    }, _bindEvent: function () {
      var e = this;
      Q(document).delegate("[data-widget-pop=cancleBtn]", "click", function () {
        window.location.reload()
      }), Q(document).delegate("[data-widget-pop=sureBtn]", "click", function (e) {
        Q.event.get(e).preventDefault(), Q.$(this).hasClass("selected") ? (Q.$(this).removeClass("selected"), Q.$("[data-widget-pop=submitBtn]").removeClass("btn-green").addClass("btn-disabled")) : (Q.$(this).addClass("selected"), Q.$("[data-widget-pop=submitBtn]").addClass("btn-green").removeClass("btn-disabled"))
      }), Q(document).delegate("[data-widget-pop=submitBtn]", "click", function (t) {
        Q.event.get(t).preventDefault(), Q.$("[data-widget-pop=sureBtn]").hasClass("selected") && Q.$(this).hasClass("btn-green") && e.switchAcount()
      })
    }, switchAcount: function () {
      var e = {
        authcookie: d.getAuthCookies(),
        cellphoneNumber: h.PnumInp.value(),
        serviceId: 2,
        requestType: 14,
        agenttype: 1
      };
      (new l).switchAcount(e, function (e) {
        return "A00000" === e.code ? (window.location.href = e.data.redirect, !1) : (v.destroy(), v = null, h.PwarnInfo.html(f.txPeWarn), h.PnumInp.addClass("invalid_num"), h.PwarnInfo[0].className = "", void 0)
      })
    }, switchMobile: function () {
      var e = this, t = Q.$("#passwdSure");
      e._setPhoneTureStyle(), h.PwarnInfo.removeClass().addClass("ppNotice"), h.PwarnInfo.html(f.txPeTransferS), h.lastPhone = Q(h.PnumInp).val(), e._PhoneGetCode("14"), "1" == g && t && t.removeClass("dn"), h.PbindBtn.attr("type", "14"), h.PreGetCodeBtn.attr("type", "14"), h.PgetCodeBtn.attr("type", "14")
    }, _setPhoneWarnStyle: function (e) {
      h.PnumInp.addClass("invalid_num"), h.PwarnInfo.removeClass("pp_icon success_hint bindMTip").addClass("error_warnning").html(e), h.PwarnInfo.removeClass("dn"), b && h.PwarnInfo.css("display", "block")
    }, _setPhoneTureStyle: function () {
      h.PnumInp.removeClass("invalid_num"), h.PwarnInfo.removeClass("dn error_warnning bindMTip").addClass("pp_icon success_hint").html("")
    }, _PhoneGetCode: function (e, t) {
      var i = this, a = 0, o = parseInt(e, 10) || 6;
      1 === o || 3 === o || 4 === o || 2 === o || 12 === o || 14 === o ? a = h.PnumInp.value() : (6 === o || 5 === o || 9 === o || 11 === o || 13 === o) && (a = h.PnumInp.attr("data-line-val"));
      var r = {requestType: o, cellphoneNumber: a, serviceId: 2};
      return t && "1" === t ? (i._removeCodeStyle(), i._removePicCodeStyle(), r.vcode = h.PiccodeInp.value(), n.empty(r.vcode) ? (i.PgetCodeNewAjax(r, t), void 0) : (i._setCodeStyle(f.txPiccodeFirst), !1)) : (h.piccodeValue && i._removePicCodeForSmsStyle(), h.piccodeValue && (r.vcode = h.piccodeValue.value(), r.agenttype = 1), 12 === o ? i.PbindPhoneGetCodeAjax(r) : i.PoldPhoneGetCodeAjax(r), void 0)
    }, PbindPhoneGetCodeAjax: function (e) {
      var t = this, i = new l;
      i.getCaptchaNum(e, function (e) {
        "A00000" === e.code ? (h.timeInfoElem.removeClass("dn"), h.PgetCodeBtn.addClass("dn"), t._EcountDown()) : ("html" === h.PnumInp.attr("type") ? t._setCodeStyle(e.msg) : t._setPhoneStyle(e.msg), h.RefreshPiccode && t.refreshPiccode())
      })
    }, PoldPhoneGetCodeAjax: function (e) {
      var t = this;
      s.sendCodeNew(e, function (e) {
        "A00000" === e.code ? (h.timeInfoElem.removeClass("dn"), h.PgetCodeBtn.addClass("dn"), t._EcountDown(), h.PcodeInp && h.PwarnInfoCode && t._removeCodeStyle(), h.PiccodeInp && h.PicwarnInfoCode && t._removePicCodeStyle()) : (t.refreshPiccode(), "html" === h.PnumInp.attr("type") ? "P00107" == e.code ? (t._setPicCodeForSmsStyle(e.msg), h.PcodeInp && h.PwarnInfoCode && t._removeCodeStyle()) : e.msg ? t._setCodeStyle(e.msg) : t._setCodeStyle(f.txE00) : "P00107" == e.code ? t._setPicCodeForSmsStyle(e.msg) : t._setPhoneStyle(e.msg))
      })
    }, PgetCodeNewAjax: function (e, t) {
      var i = this;
      s.sendCodeNew(e, function (e) {
        "A00000" === e.code ? (h.timeInfoElem.removeClass("dn"), h.PgetCodeBtn.addClass("dn"), i._EcountDown()) : "P00107" === e.code ? (t && "1" === t && i.refreshPiccode(), h.PcodeInp.value(""), h.PiccodeInp && h.PiccodeInp.value(""), i._setPicCodeStyle(e.msg)) : (t && "1" === t && i.refreshPiccode(), "html" === h.PnumInp.attr("type") ? i._setCodeStyle(e.msg) : i._setPhoneStyle(e.msg))
      })
    }, _PsubmitAjax: function (e) {
      var t = this, i = e.requestType;
      3 === i || 12 === i ? s.bindPhone(e, function (e) {
        return "A00000" === e.code ? (window.location.href = e.data.redirect, !1) : (h.PcodeInp.value(""), t._setCodeStyle(e.msg), void 0)
      }) : 4 === i ? s.replacePhone(e, function (e) {
        return "A00000" === e.code ? (window.location.href = e.data.redirect, !1) : (h.PcodeInp.value(""), t._setCodeStyle(e.msg), void 0)
      }) : 5 === i || 2 === i || 11 === i || 13 === i || 14 === i ? (new l).checkPwAndCaptcha(e, function (e) {
        if ("A00000" === e.code) {
          if (14 !== i)return window.location.href = e.data.redirect, !1;
          t.getUserMessage()
        } else 14 === i ? Q(h.PassInp).is(":visible") ? (h.PassInp.value(""), t._setPassStyle(e.msg)) : (h.PcodeInp.value(""), t._setCodeStyle(e.msg)) : (h.PcodeInp.value(""), t._setCodeStyle(e.msg))
      }) : (6 === i || 9 === i) && s.validate(e, function (e) {
        return "A00000" === e.code ? (window.location.href = e.data.redirect, !1) : ("P00107" === e.code ? (h.piccode && t.refreshPiccode(), h.PcodeInp.value(""), h.PiccodeInp && h.PiccodeInp.value(""), t._setPicCodeStyle(e.msg)) : (h.piccode && t.refreshPiccode(), h.PcodeInp.value(""), h.PiccodeInp && h.PiccodeInp.value(""), t._setCodeStyle(e.msg)), void 0)
      })
    }, _setPhoneStyle: function (e) {
      h.PnumInp.addClass("invalid_num"), h.PwarnInfo[0].className = "", h.PwarnInfo.addClass("error_warnning").html(e), b && h.PwarnInfo.css("display", "block")
    }, _setCodeStyle: function (e) {
      h.PcodeInp.addClass("invalid_num"), h.PwarnInfoCode[0].className = "", h.PwarnInfoCode.addClass("error_warnning").html(e), b && h.PwarnInfoCode.css("display", "block")
    }, _removeCodeStyle: function () {
      h.PcodeInp.removeClass("invalid_num"), h.PwarnInfoCode[0].className = "", h.PwarnInfoCode.removeClass("error_warnning").html("")
    }, _setPicCodeStyle: function (e) {
      h.PiccodeInp.addClass("invalid_num"), h.PicwarnInfoCode[0].className = "", h.PicwarnInfoCode.addClass("error_warnning").html(e)
    }, _removePicCodeStyle: function () {
      h.PiccodeInp.removeClass("invalid_num"), h.PicwarnInfoCode[0].className = "", h.PicwarnInfoCode.removeClass("error_warnning").html("")
    }, _setPassStyle: function (e) {
      h.PassInp.addClass("invalid_num"), h.PasswarnInfo[0].className = "", h.PasswarnInfo.addClass("error_warnning").html(e)
    }, _setPicCodeForSmsStyle: function (e) {
      h.piccodeValue.addClass("invalid_num"), h.PicCodeWarn[0].className = "", h.PicCodeWarn.addClass("error_warnning").html(e), b && h.PicCodeWarn.css("display", "block")
    }, _removePicCodeForSmsStyle: function () {
      h.piccodeValue.removeClass("invalid_num"), h.PicCodeWarn[0].className = "", h.PicCodeWarn.removeClass("error_warnning").html("")
    }, _setDOM: function () {
      h = {
        PnumInp: Q.$("#J_phone-num"),
        PsubBtn: Q.$("#J_phone-submit"),
        PcodeInp: Q.$("#J_code-inp"),
        PiccodeInp: Q.$("#picCodeinput"),
        PwarnInfo: Q.$("#J_phone-warnInfo"),
        PwarnInfoCode: Q.$("#J_warn-code"),
        PicwarnInfoCode: Q.$("#J_warn-piccode"),
        PcheckInp: Q.$("#J_check-val"),
        PbindBtn: Q.$("#J_bind-submit") || Q.$("#J_modify-submit"),
        PassInp: Q.$("#J_warn-code-pass"),
        PasswarnInfo: Q.$("#J_pass-inp-pass"),
        PgetCodeBtn: Q.$("#J_getCode"),
        timeInfoElem: Q.$("#J_time-info"),
        PreGetCodeBtn: Q.$("#J_timeout-resend"),
        numInfoElem: Q.$("#J_num-time"),
        piccodeInput: Q.$("#picCodeinput"),
        piccode: Q.$("#piccodeimg"),
        piccodeValue: Q.$("#J_code-piccode"),
        PicCodeWarn: Q.$("#J_piccode-warnInfo"),
        RefreshPiccode: Q.$("#J_code-refreshPiccode"),
        lastPhone: ""
      }
    }, keyPhoneUp: function () {
      var e = this;
      Q.$("input").on("keyup", function (t) {
        if (13 == t.keyCode) {
          var i = h.PbindBtn[0];
          Q.$("#J_change-passwd") || e.submitFun(i)
        }
      })
    }, _setWarnInfo: function () {
      f = {
        txError: "无效的手机号",
        txA00101: "禁止该手机号接收短信",
        tx00: "手机号不能为空",
        tx400: "验证码错误",
        tx401: "请输入验证码",
        tx402: "手机号不存在",
        tx410: "每次获取验证码的时间间隔不能小于30s",
        tx411: "每天最多获取3次",
        txPexist: "该手机号已被注册",
        txPeTransfer: "该手机号已被绑定<br><em>想继续绑定？<a href='' id='J_switch-mobile'>点此改绑</a></em>",
        txPeTransfer2: "该手机号已被绑定",
        txPeTransferS: "该手机号将被迁移至当前帐号",
        txPeWarn: "咦？系统抽风了，请您再试~",
        txPiccodeFirst: "请先输入图文验证码",
        txE00: "点击太频繁了，请稍等片刻再点击。"
      }
    }, _EcountDown: function () {
      var e = 58, t = null;
      clearInterval(t), h.PgetCodeBtn.addClass("dn"), h.timeInfoElem.removeClass("dn"), t = setInterval(function () {
        return h.numInfoElem.html(""), h.numInfoElem.html(e), 0 === e ? (h.PgetCodeBtn.removeClass("dn").html("重新获取验证码"), h.timeInfoElem.addClass("dn"), h.numInfoElem.html("59"), clearInterval(t), !1) : (e--, void 0)
      }, 1e3)
    }
  }), i.exports = w
});
define("../../units/safe/abVerifyPwdEmail", ["../../components/action/checkDoms", "../../kit/validate", "../../components/units/pageJob", "../../kit/userInfo", "../../interfaces/validateOriginalInterface", "../../interfaces/validateEmailInterface", "../../config/siteDomain"], function (e, t, i) {
  var a = e("../../components/action/checkDoms"), n = e("../../kit/validate"), o = e("../../components/units/pageJob");
  e("../../kit/userInfo");
  var r = new (e("../../interfaces/validateOriginalInterface")), s = new (e("../../interfaces/validateEmailInterface")), l = e("../../config/siteDomain"), d = l.getDomain(), c = {}, u = {}, p = "ab_verifyPwdEmail";
  o.create(p, {
    getDependentDoms: function () {
      c.check = Q("#J_abnormal-verifyPwdEmail")[0]
    }, check: function () {
      return a(c), !0
    }, init: function () {
      var e = this;
      Q("[data-verifyPwd-elem=pwd]")[0] ? (e._setDOM(), e._setWarnInfo(), e.bindEvent(), e.keySetNewUp(), e.refreshPiccode(), e.showPingBack("512251_3")) : Q("[data-abverify-elem=email]")[0] && (e._setEmailDom(), e._setWarnInfo(), e.bindEmailEvent(), e.showPingBack("512251_2"))
    }, bindEmailEvent: function () {
      var e = this;
      c.emailInp.on("blur", function (t) {
        t.preventDefault(), e.validateEmail()
      }), c.subBtn.on("click", function (t) {
        t.preventDefault(), e.validateEmail() && e.submitEmail()
      })
    }, bindEvent: function () {
      this.validateInpEvent(), this.submitPwEvent()
    }, validateInpEvent: function () {
      var e = this;
      c.pwdInp.on("blur", function (t) {
        t.preventDefault();
        var i = t.currentTarget;
        e.validatePw(i)
      }), c.imgCode.on("click", function (t) {
        t.preventDefault(), e.refreshPiccode()
      })
    }, validateEmail: function () {
      var e = c.emailInp.val();
      return e ? n.mail(e) ? (c.emailInp.removeClass("invalid_num"), c.warnEmail.addClass("dn"), !0) : (c.emailInp.addClass("invalid_num"), c.warnEmail.removeClass("dn").html(u.warnE2), !1) : (c.emailInp.addClass("invalid_num"), c.warnEmail.removeClass("dn").html(u.warnE1), !1)
    }, submitPwEvent: function () {
      var e = this;
      c.subBtn.on("click", function (t) {
        t.preventDefault(), e.submitVerify()
      })
    }, submitEmail: function () {
      var e = Q.cookie.get("P00001"), t = null, i = "http://passport." + d + "/apis/secure/secure_login_bind.action?token=" + encodeURIComponent(Q.cookie.get("P00031"));
      e && (t = Q.crypto.md5(e));
      var a = {type: 27, antiCsrf: t, email: c.emailInp.val().trim(), agenttype: 1, redirect: i};
      s.verifyEmail(a, function (e) {
        return "A00000" == e.code ? (window.location.href = e.data.redirect, !1) : (c.emailInp.addClass("invalid_num"), c.warnEmail.removeClass("dn").html(e.msg), void 0)
      })
    }, submitVerify: function () {
      var e = this, t = e.validatePw(c.pwdInp) && e.validateImgCode();
      if (t) {
        var i = {agenttype: 1, passwd: c.pwdInp.val().trim(), vcode: c.imgInp.val().trim()};
        r.verifyPassword(i, function (t) {
          return "A00000" === t.code ? (window.location.href = "http://passport." + d + t.data.redirect, !1) : ("P00107" === t.code ? (e.refreshPiccode(), c.imgInp.addClass("invalid_num"), c.warnImg.removeClass("dn").html(t.msg)) : (e.refreshPiccode(), c.pwdInp.addClass("invalid_num"), c.warnPwd.removeClass("dn").html(t.msg)), void 0)
        })
      }
    }, validateImgCode: function () {
      return c.imgInp.val() ? (c.imgInp.removeClass("invalid_num"), c.warnImg.addClass("dn").html(""), !0) : (c.imgInp.addClass("invalid_num"), c.warnImg.removeClass("dn").html(u.warnPicc), !1)
    }, refreshPiccode: function () {
      var e = "http://passport." + d + "/register/vcode.php?r=" + Math.random();
      c.imgCode.attr("src", e), c.imgInp.val("")
    }, validatePw: function (e) {
      var t = Q(e).val(), i = !0;
      return i = n.specialPwd(t), i ? t && n.pwd(t) ? (c.warnRight.removeClass("dn"), c.warnPwd.addClass("dn"), c.pwdInp.removeClass("invalid_num"), !0) : (c.warnRight.addClass("dn"), c.warnPwd.removeClass("dn").html(u.warn2), c.pwdInp.addClass("invalid_num"), !1) : (c.warnRight.addClass("dn"), c.warnPwd.removeClass("dn").html(u.warn3), c.pwdInp.addClass("invalid_num"), !1)
    }, keySetNewUp: function () {
      var e = this;
      Q("input").on("keyup", function (t) {
        t.preventDefault(), 13 == t.keyCode && e.submitVerify()
      })
    }, _setEmailDom: function () {
      c = {
        subBtn: Q("[data-Abverify-elem=send]"),
        emailInp: Q("[data-Abverify-elem=email]"),
        warnEmail: Q("[data-Abverify-elem=warn]")
      }
    }, _setDOM: function () {
      c = {
        subBtn: Q("[data-verifyPwd-submit=btn]"),
        pwdInp: Q("[data-verifyPwd-elem=pwd]"),
        imgInp: Q("[data-verifyPwd-elem=img]"),
        imgCode: Q("[data-verifyPwd-refresh=imgCode]"),
        warnPwd: Q("[data-verifyPwd-warn=pwd]"),
        warnImg: Q("[data-verifyPwd-warn=img]"),
        warnRight: Q("[data-verifyPwd-warn=right]")
      }
    }, _setWarnInfo: function () {
      u = {
        warn1: "当前密码错误",
        warn2: "密码格式不正确",
        warn3: "密码包含无效字符",
        warnPicc: "验证码不能为空",
        warnE1: "邮箱不能为空",
        warnE2: "邮箱格式错误"
      }
    }, showPingBack: function (e) {
      var t = {
        t: "21",
        bstp: 0,
        pf: 1,
        p: 10,
        p1: 101,
        p2: "1_10_101",
        u: Q.cookie.get("QC005"),
        jsuid: Q.cookie.get("QC006"),
        pu: Q.cookie.get("P00003"),
        block: e
      };
      Q.log.server(t, "http://msg.71.am/b")
    }
  }), i.exports = p
});
define("../../interfaces/validateOriginalInterface", ["../kit/remoteInterface", "../kit/rsa", "../config/siteDomain"], function (e, t, i) {
  var a = e("../kit/remoteInterface"), n = e("../kit/rsa"), o = e("../config/siteDomain"), r = o.getDomain();
  i.exports = Q.Class("validateOriginalInterface", {
    construct: function () {
      this._remoteInterface = new a({verifyPassword: {url: "http://passport." + r + "/apis/secure/verify_passwd.action"}})
    }, methods: {
      verifyPassword: function (e, t) {
        e.passwd && (e.passwd = n.rsaFun(e.passwd)), this._remoteInterface.send({
          ifname: "verifyPassword",
          param: e,
          method: "get",
          dataType: "jsonp"
        }, function (i) {
          t && t(i, e)
        })
      }
    }
  })
});
define("../../units/safe/abBindPhone", ["../../components/units/pageJob", "../../components/action/checkDoms", "../../components/action/floater", "../../components/view/floaterView", "../../kit/placeholder", "../../kit/validate", "../../kit/userInfo", "../../kit/iframeRequest", "../../interfaces/verifyMobileInterface", "../../interfaces/mobileRegistInterface", "../../config/siteDomain"], function (e, t, i) {
  var a = e("../../components/units/pageJob"), n = e("../../components/action/checkDoms");
  e("../../components/action/floater"), e("../../components/view/floaterView");
  var o = e("../../kit/placeholder"), r = e("../../kit/validate"), s = e("../../kit/userInfo"), l = e("../../kit/iframeRequest"), d = e("../../interfaces/verifyMobileInterface"), c = e("../../interfaces/mobileRegistInterface"), u = "ab_bindPhone", p = {}, m = {}, h = new c, f = e("../../config/siteDomain"), g = f.getDomain();
  a.create(u, {
    getDependentDoms: function () {
      p.check = Q("#J_abnormal-bindPhone")[0]
    }, check: function (e) {
      return n(e), !0
    }, init: function () {
      var e = this;
      e._setDOM(), e._setWarnInfo(), e.bindEvent(), e.keySetNewUp(), e.refreshPiccode()
    }, bindEvent: function () {
      var e = this;
      Q(document).delegate("[data-abbindphone-elem]", "blur", function (t) {
        t.preventDefault(), t.stopPropagation();
        var i = t.currentTarget, a = Q(i).attr("data-abbindphone-elem");
        if ("mobile" == a) {
          var n = e.validateInput(i, a), o = !Q(i).attr("data-verify-flag");
          n && o && e.checkAccount()
        }
      }), Q(document).delegate("[data-abbindphone-sms=btn]", "click", function (t) {
        t.preventDefault();
        var i = Q("[data-abbindphone-elem=mobile]").val().trim();
        if (e.validatePhone(i)) {
          var a = Q("[data-abbindphone-elem=img]");
          e.validateInput(a, "img") && e.sendPhoneCode(i)
        }
      }), Q(document).delegate("[data-abbindphone-refresh]", "click", function (t) {
        t.preventDefault(), e.refreshPiccode()
      }), Q(document).delegate("[data-abbindphone-submit=btn]", "click", function (t) {
        t.preventDefault(), e.submitCheck()
      }), e.placeSimulate()
    }, submitCheck: function () {
      var e = this, t = !1;
      Q("[data-abbindphone-elem]").each(function (i, a) {
        return t = e.validateInput(a, null), t ? void 0 : !1
      });
      var i = p.mobileInp.attr("data-verify-flag");
      t && (i ? e.abVerifyPhone() : e.checkAccount(e.submitBindPhone))
    }, checkAccount: function (e) {
      var t, i = this, a = {account: p.mobileInp.val().trim(), agenttype: 1}, n = new d;
      t && clearTimeout(t), t = setTimeout(function () {
        n.verifyNum(a, function (t) {
          "A00000" == t.code && (t.data === !0 ? (p.mobileInp.addClass("invalid_num"), p.warnMob.removeClass("dn").html(m.mobile3)) : t.data === !1 && (p.mobileInp.removeClass("invalid_num"), p.warnMob.addClass("dn"), e && e(i)))
        })
      }, 300)
    }, validateInput: function (e, t) {
      var i = this, a = t || Q(e).attr("data-abbindphone-elem"), n = Q(e).val(), o = !0;
      return "mobile" == a && (o = i.validatePhone(n)), "img" == a && (r.empty(n) ? (p.imgInp.removeClass("invalid_num"), p.warnImg.addClass("dn")) : (p.imgInp.addClass("invalid_num"), p.warnImg.removeClass("dn").html(m.imgcode), o = !1)), "sms" == a && (r.empty(n) ? (p.imgInp.removeClass("invalid_num"), p.warnImg.addClass("dn")) : (p.imgInp.addClass("invalid_num"), p.warnImg.removeClass("dn").html(m.smscode), o = !1)), o
    }, validatePhone: function (e) {
      return r.mobile(e) ? (p.mobileInp.removeClass("invalid_num"), p.warnMob.addClass("dn"), !0) : (r.empty(e) ? (p.mobileInp.addClass("invalid_num"), p.warnMob.removeClass("dn").html(m.mobile2)) : (p.mobileInp.addClass("invalid_num"), p.warnMob.removeClass("dn").html(m.mobile1)), !1)
    }, sendPhoneCode: function (e) {
      var t = this, i = 3;
      p.mobileInp.attr("data-verify-flag") && (i = 15);
      var a = {
        requestType: i,
        cellphoneNumber: e,
        authcookie: s.getAuthCookies(),
        serviceId: 2,
        agenttype: 1,
        vcode: p.imgInp.val().trim()
      };
      h.sendCodeNew(a, function (e) {
        "A00000" == e.code ? (p.imgInp.removeClass("invalid_num"), p.warnImg.addClass("dn"), p.mobileInp.removeClass("invalid_num"), p.warnMob.addClass("dn"), p.smsInp.removeClass("invalid_num"), p.warnSms.addClass("dn"), t.ecountDown()) : "P00107" == e.code ? (p.imgInp.addClass("invalid_num"), p.warnImg.removeClass("dn").html(m.imgcode1), t.refreshPiccode()) : "P00404" == e.code ? (p.mobileInp.addClass("invalid_num"), p.warnMob.removeClass("dn").html(m.mobile3), t.refreshPiccode()) : (p.smsInp.addClass("invalid_num"), p.warnSms.removeClass("dn").html(e.msg), t.refreshPiccode())
      })
    }, ecountDown: function () {
      var e = 89, t = null;
      clearInterval(t), p.smsbtn.addClass("dn"), p.smstimer.removeClass("dn");
      var i = p.smstimer.find("em");
      t = setInterval(function () {
        0 === e ? (p.smsbtn.removeClass("dn"), p.smstimer.addClass("dn"), i.html("89"), clearInterval(t)) : (e--, i.html(e))
      }, 1e3)
    }, getParamData: function () {
      var e = {cellphoneNumber: p.mobileInp.val().trim(), authCode: p.smsInp.val().trim(), agenttype: 1, serviceId: 2};
      return e
    }, abVerifyPhone: function () {
      var e = this, t = e.getParamData();
      h.tokenlogin(t, function (e) {
        if ("A00000" === e.code) {
          if (p.mobileInp.removeClass("invalid_num"), p.warnMob.addClass("dn"), e.data.hasLogined) {
            var t = new l;
            t.request(e.data.hasLogined, null)
          }
          window.lib.__callbacks__.login_success(e.data);
          var i = "http://www.iqiyi.com/";
          f.isPPS() && (i = "http://www.pps.tv/"), setTimeout(function () {
            window.location.href = i
          }, 100)
        } else p.mobileInp.addClass("invalid_num"), p.warnMob.removeClass("dn").html(e.msg), Q.event.customEvent.fire({
          type: "login-failed",
          data: {code: e.code, msg: e.msg, needCode: e.data.needcode}
        })
      })
    }, submitBindPhone: function (e) {
      var t = e, i = t.getParamData();
      i.type = 27, h.newBindPhone(i, function (e) {
        return "A00000" == e.code ? (window.location.href = "http://passport." + g + e.data.redirect, !1) : ("P00107" == e.code ? (p.imgInp.addClass("invalid_num"), p.warnImg.removeClass("dn").html(e.msg)) : (p.mobileInp.addClass("invalid_num"), p.warnMob.removeClass("dn").html(e.msg)), void 0)
      })
    }, refreshPiccode: function () {
      var e = "http://passport." + g + "/register/vcode.php?r=" + Math.random();
      p.imgCode.attr("src", e), p.imgInp.val("")
    }, placeSimulate: function () {
      Q("[data-abbindphone-elem]").each(function (e, t) {
        o.simulate(t)
      })
    }, keySetNewUp: function () {
      var e = this;
      Q("input").on("keyup", function (t) {
        t.preventDefault(), 13 == t.keyCode && e.submitCheck()
      })
    }, _setDOM: function () {
      p = {
        subBtn: Q("[data-abbindphone-submit=btn]"),
        mobileInp: Q("[data-abbindphone-elem=mobile]"),
        imgInp: Q("[data-abbindphone-elem=img]"),
        smsInp: Q("[data-abbindphone-elem=sms]"),
        imgCode: Q("[data-abbindphone-refresh=imgCode]"),
        smsbtn: Q("[data-abbindphone-sms=btn]"),
        smstimer: Q("[data-abbindphone-sms=timer]"),
        warnMob: Q("[data-abbindphone-warn=mobile]"),
        warnImg: Q("[data-abbindphone-warn=img]"),
        warnSms: Q("[data-abbindphone-warn=sms]")
      }
    }, _setWarnInfo: function () {
      m = {
        mobile1: "手机号不能为空",
        mobile2: "手机号格式错误",
        mobile3: "手机号重复",
        imgcode: "图文验证码不能为空",
        imgcode1: "图文验证码错误",
        smscode: "短信验证码不能为空"
      }
    }
  }), i.exports = u
});
define("../../units/safe/changePassword", ["../../components/action/checkDoms", "../../kit/validate", "../../components/units/pageJob", "../../interfaces/validateEmailInterface", "../../interfaces/mobileRegistInterface", "../../interfaces/verifyMobileInterface", "../../kit/pcVCodeKit"], function (e, t, i) {
  var a = e("../../components/action/checkDoms"), n = e("../../kit/validate"), o = e("../../components/units/pageJob");
  e("../../interfaces/validateEmailInterface");
  var r = new (e("../../interfaces/mobileRegistInterface"));
  e("../../interfaces/verifyMobileInterface"), e("../../kit/pcVCodeKit"), Q.browser.iPad ? "touchstart" : "click";
  var s = {}, l = "changePassword";
  o.create(l, {
    getDependentDoms: function () {
      s.check = Q.$("#J_change-passwd")
    }, check: function () {
      return a(s), !0
    }, init: function () {
      this._setDom(), this.bindEvent()
    }, bindEvent: function () {
      var e = this;
      e._selectEvent()
    }, _selectEvent: function () {
      s.selectBtn.on("click", function () {
        var e = s.selectUl.hasClass("dn");
        e ? s.selectUl.removeClass("dn") : s.selectUl.addClass("dn")
      }), s.select.delegate("list", function (e) {
        var t = e.target, i = Q.$(t).attr("data-val"), a = Q.$(t).html(), n = Q.$(t).attr("data-type");
        s.checkVal.attr("data-line-elem", i), s.checkVal.html(a), s.selectUl.addClass("dn"), "phone" === n ? (s.sphone.removeClass("dn"), s.semail.addClass("dn"), s.sQa.addClass("dn")) : "email" === n ? (s.semail.removeClass("dn"), s.sphone.addClass("dn"), s.sQa.addClass("dn")) : "qa" === n && (s.semail.addClass("dn"), s.sphone.addClass("dn"), s.sQa.removeClass("dn"))
      })
    }, _phoneEvent: function () {
      var e = this;
      s.getCodeBtn.on("click", function () {
        var t = s.checkVal.attr("data-line-elem"), i = {requestType: 6, cellphoneNumber: t, serviceId: 2};
        r.sendCode(i, function (t) {
          "A00000" === t.code && e._EcountDown()
        })
      })
    }, _submitPhoneCodeEvent: function () {
      s.PsubmitBtn.on("click", function (e) {
        Q.event.get(e).preventDefault();
        var t = s.PcodeInp.value(), i = n.empty(t);
        if (s.checkVal.attr("data-line-elem"), !i)return s.PcodeInp.addClass("invalid_num"), s.codeWarnElem.addClass("error_warnning").html("请输入验证码"), void 0;
        var a = {authCode: t, requestType: 6, serviceId: 2};
        r.validate(a, function (e) {
          "A00000" === e.code || (s.PcodeInp.addClass("invalid_num"), s.codeWarnElem.addClass("error_warnning").html(e.msg))
        })
      })
    }, _setDom: function () {
      s = {
        box: Q.$("#J_changepw-step1"),
        select: Q.$("#J_select-list"),
        selectBtn: Q.$("#J_select-btn"),
        selectUl: Q.$("#J_select-box"),
        checkVal: Q.$("#J_check-val"),
        sphone: Q.$("#J_select-phone-box"),
        semail: Q.$("#J_select-mail-box"),
        sQa: Q.$("#J_select-qa-box"),
        getCodeBtn: Q.$("#J_getCode"),
        timeInfoBtn: Q.$("#J_time-info"),
        reGetCodeBtn: Q.$("#J_timeout-resend"),
        numInfoElem: Q.$("#J_num-time"),
        PcodeInp: Q.$("#J_code-inp"),
        PsubmitBtn: Q.$("#J_code-submit"),
        codeWarnElem: Q.$("#J_warn-code")
      }
    }, _EcountDown: function () {
      var e = 58, t = null;
      clearInterval(t), s.getCodeBtn.addClass("dn"), s.timeInfoBtn.removeClass("dn"), t = setInterval(function () {
        return s.numInfoElem.html(""), s.numInfoElem.html(e), 0 === e ? (s.getCodeBtn.removeClass("dn").html("重新获取验证码"), s.timeInfoBtn.addClass("dn"), s.numInfoElem.html("59"), clearInterval(t), !1) : (e--, void 0)
      }, 1e3)
    }
  }), i.exports = l
});
define("../../units/safe/emailSendSuccess", ["../../components/action/checkDoms", "../../kit/validate", "../../components/units/pageJob", "../../units/safe/safeTool", "../../interfaces/validateEmailInterface", "../../interfaces/mobileRegistInterface", "../../interfaces/verifyMobileInterface", "../../config/siteDomain"], function (e, t, i) {
  var a = e("../../components/action/checkDoms");
  e("../../kit/validate");
  var n = e("../../components/units/pageJob"), o = e("../../units/safe/safeTool"), r = e("../../interfaces/validateEmailInterface");
  new (e("../../interfaces/mobileRegistInterface")), e("../../interfaces/verifyMobileInterface"), Q.browser.iPad ? "touchstart" : "click";
  var s = {};
  new o;
  var l = "emailSendSuccess", d = e("../../config/siteDomain"), c = d.getDomain();
  n.create(l, {
    getDependentDoms: function () {
      s.check = Q.$("#J_send-emailSuc")
    }, check: function () {
      return a(s), !0
    }, init: function () {
      this._setDOM(), this._EcountDown(), this._initEmailUrl(), this.bindEvent()
    }, bindEvent: function () {
      var e = this;
      s.resendEmail.on("click", function (t) {
        Q.event.get(t).preventDefault();
        var i = Q.event.get(t).target, a = Q.$(i).attr("type"), n = Q(i).attr("data-abnormal-login");
        e.EResubmitAjax(a, n)
      })
    }, _initEmailUrl: function () {
      var e = s.email.html(), t = null;
      e && (t = e.split("@")[1], s.enterEmail.attr("href", "http://mail." + t))
    }, EResubmitAjax: function (e, t) {
      var i = this, a = {type: e};
      if (t) {
        var n = "http://passport." + c + "/apis/secure/secure_login_bind.action?token=" + encodeURIComponent(Q.cookie.get("P00031"));
        a.redirect = n
      }
      var o = new r;
      o.reVerifyEmail(a, function (e) {
        "A00000" == e.code ? (s.resendEmail.addClass("dn"), s.timeoutResend.removeClass("dn"), i._EcountDown()) : alert(e.msg)
      })
    }, _EcountDown: function () {
      var e = 58, t = null;
      clearInterval(t), s.resendEmail.addClass("dn"), s.timeoutResend.removeClass("dn"), t = setInterval(function () {
        return s.timeNum.html(""), s.timeNum.html(e), 0 === e ? (s.resendEmail.removeClass("dn"), s.timeoutResend.addClass("dn"), s.timeNum.html("59"), clearInterval(t), !1) : (e--, void 0)
      }, 1e3)
    }, _setDOM: function () {
      s = {
        enterEmail: Q.$("#J_enter-email"),
        resendEmail: Q.$("#J_email-resendSubmit"),
        timeoutResend: Q.$("#J_email-timeoutResend"),
        timeNum: Q.$("#J_timeoutR-num"),
        email: Q.$("#J_email")
      }
    }
  }), i.exports = l
});
define("../../units/safe/setNewpw", ["../../components/action/checkDoms", "../../kit/validate", "../../kit/setPwStrong", "../../components/units/pageJob", "../../kit/userInfo", "../../interfaces/validateEmailInterface", "../../interfaces/mobileRegistInterface", "../../interfaces/safeV2/appeal", "../../interfaces/verifyMobileInterface", "../../kit/iframeRequest"], function (e, t, i) {
  var a = e("../../components/action/checkDoms"), n = e("../../kit/validate"), o = e("../../kit/setPwStrong"), r = e("../../components/units/pageJob"), s = e("../../kit/userInfo");
  e("../../interfaces/validateEmailInterface");
  var l = new (e("../../interfaces/mobileRegistInterface")), d = new (e("../../interfaces/safeV2/appeal"));
  e("../../interfaces/verifyMobileInterface");
  var c = e("../../kit/iframeRequest"), u = Q.browser.iPad ? "touchstart" : "click", p = !1, m = {}, h = {}, f = "setNewpw";
  r.create(f, {
    getDependentDoms: function () {
      m.check = Q.$("#J_set-newpw")
    }, check: function () {
      return a(m), !0
    }, init: function () {
      this.isMobile(), this._setDOM(), this._setWarnInfo(), this.bindEvent(), this.keySetNewUp()
    }, isMobile: function () {
      p = Q("#J_set-newpw").is("section") ? !0 : !1
    }, bindEvent: function () {
      this.validateInpEvent(), this.submitNewPwEvent()
    }, validateInpEvent: function () {
      var e = this;
      m.newPWInp.on("blur", function (t) {
        var i = Q.event.get(t).target;
        e.validatePw(i)
      }), m.newPw.on("keyup", function (e) {
        var t = Q.event.get(e).target, i = Q.$(t).value();
        m.warnPwd.addClass("dn"), i ? (m.pwStrength.removeClass("dn"), o.getStrong(n.getScore(i))) : m.pwStrength.addClass("dn")
      })
    }, checkPasswdRepeat: function (e) {
      var t = {authcookie: s.getAuthCookies(), agenttype: 1, passwd: e};
      l.checkPasswdRepeat(t, function (e) {
        return "P00151" === e.code ? (m.pwStrength.addClass("dn"), m.newPw.addClass("invalid_num"), m.warnPwd.removeClass("dn").addClass("error_warnning").html(e.msg), !0) : void 0
      })
    }, submitNewPwEvent: function () {
      var e = this;
      m.setBtn.on(u, function (t) {
        Q.event.get(t).preventDefault();
        var i = Q.event.get(t).target;
        e.setNewpwFun(i)
      })
    }, setNewpwFun: function (e) {
      var t = this, i = Q.$(e).attr("data-type"), a = "", n = Q.$(e).attr("from"), o = !0, r = !0;
      m.oldPw && m.warnOldpwd && (t.validatePw(m.oldPw), a = m.oldPw.value(), o = m.warnOldpwd.down(".success_hint")), m.warnPwd.hasClass("error_warnning") && !m.warnPwd.hasClass("dn") && (r = !1), t.validatePw(m.newPw), t.validatePw(m.newRePw);
      var s = m.warnRepwd.down(".success_hint");
      if (o && s && r) {
        var u = m.newRePw.value() || "", p = {
          authcookie: Q.cookie.get("P00001") || "",
          oldpass: a,
          newpass: u,
          agenttype: 1,
          token: Q.cookie.get("P00014") || ""
        };
        if (m.oldPw)l.resetPasswd(p, function (e) {
          if ("A00000" === e.code) {
            var t = new c;
            return e.data.passwordChanged && t.request(e.data.passwordChanged, null), window.location.href = e.data.redirect, !1
          }
          "P00149" === e.code ? (m.warnPwd.removeClass("dn").addClass("error_warnning").html(e.msg), m.pwStrength.addClass("dn")) : m.warnOldpwd && (e.msg ? m.warnOldpwd.removeClass("dn").addClass("error_warnning").html(e.msg) : m.warnOldpwd.removeClass("dn").addClass("error_warnning").html(h.warnold4))
        }); else if ("bindEmail" === i) {
          var f = window.location.href;
          p = Q.url.queryToJson(f), p.passwd = m.newRePw.value(), p.agenttype = 1, d.bindEmail(p, function (e) {
            return "A00000" === e.code ? (window.location.href = e.data.redirect, !1) : (m.warnPwd.removeClass("dn").addClass("error_warnning").html(e.msg), m.pwStrength.addClass("dn"), void 0)
          })
        } else if ("shegong" === n) {
          var g = {newpass: p.newpass || "", agenttype: p.agenttype || ""};
          l.resetNewPwd(g, function (e) {
            return "A00000" === e.code ? (window.location.href = e.data.redirect, !1) : (m.warnPwd.removeClass("dn").addClass("error_warnning").html(e.msg), m.pwStrength.addClass("dn"), void 0)
          })
        } else l.savePwd(p, function (e) {
          return "A00000" === e.code ? (window.location.href = e.data.redirect, !1) : (m.warnPwd.removeClass("dn").addClass("error_warnning").html(e.msg), m.pwStrength.addClass("dn"), void 0)
        })
      }
    }, validatePw: function (e) {
      var t = this, i = Q.$(e).value(), a = Q.$(e).attr("id"), o = null, r = !0, s = !1;
      if ("J_old-pw" === a) {
        if (!i)return t._setWarnOldpwdStyle(h.warnold2), void 0;
        if (o = n.oldPwd(i), !o)return t._setWarnOldpwdStyle(h.warnold3), void 0;
        var d = {agenttype: 1, passwd: i};
        l.vertifyPwd(d, function (e) {
          "A00000" === e.code ? (m.warnOldpwd.removeClass("error_warnning dn"), m.warnOldpwd.html('<i class="pp_icon success_hint mr5 mt5" href="#"></i>'), m.oldPw.removeClass("invalid_num")) : ("密码错误" === e.msg && (e.msg = "当前密码错误"), t._setWarnOldpwdStyle(e.msg))
        })
      } else if ("J_new-pw" === a)if (o = n.pwd(i), r = n.specialPwd(i), s = n.getIsTooSimple(i), o && r) {
        var c = null;
        if (m.oldPw && (c = m.oldPw.value()), s || i === c)m.pwStrength.addClass("dn"), s ? t._setWarnPwdStyle(h.warnnew3) : t._setWarnPwdStyle("新旧密码不能相同"), m.newPw.addClass("invalid_num"); else {
          if ("true" == t.checkPasswdRepeat(i))return;
          m.warnPwd.addClass("dn").html(""), m.newPw.removeClass("invalid_num")
        }
      } else {
        if (m.pwStrength.addClass("dn"), !r)return t._setWarnPwdStyle(h.warnnew4), void 0;
        if (!o)return null !== i && "" !== i ? t._setWarnPwdStyle(h.warnnew2) : t._setWarnPwdStyle(h.warnnew1), void 0;
        t._setWarnPwdStyle(h.warnnew1)
      } else if ("J_new-repw" === a) {
        if (m.newPw.hasClass("invalid_num"))return !1;
        i = m.newPw.value();
        var u = m.newRePw.value();
        u !== i && null !== u && "" !== u ? t._setWarnRepwdStyle(h.warnrenew3) : n.empty(u) ? u === i ? (m.warnRepwd.removeClass("error_warnning dn"), m.warnRepwd.html('<i class="pp_icon success_hint mr5 mt5" href="#"></i>'), m.newRePw.removeClass("invalid_num")) : t._setWarnRepwdStyle(h.warnrenew3) : t._setWarnRepwdStyle(h.warnrenew4)
      }
    }, keySetNewUp: function () {
      var e = this;
      Q.$("input").on("keyup", function (t) {
        if (13 == t.keyCode) {
          var i = m.setBtn[0];
          Q.$("#J_change-passwd") || e.setNewpwFun(i)
        }
      })
    }, _setDOM: function () {
      m = {
        box: Q.$("#J_set-newpw"),
        oldPw: Q.$("#J_old-pw"),
        newPw: Q.$("#J_new-pw"),
        newRePw: Q.$("#J_new-repw"),
        setBtn: Q.$("#J_setpw-submit"),
        newPWInp: Q.$(".J_new-pw"),
        warnOldpwd: Q.$("#J_warn-oldpwd"),
        warnRepwd: Q.$("#J_warn-repwd"),
        warnPwd: Q.$("#J_warn-pwd"),
        pwStrength: Q.$("#J_pw-strength")
      }
    }, _setWarnPwdStyle: function (e) {
      m.warnPwd.addClass("error_warnning").removeClass("dn").html(e), m.newPw.addClass("invalid_num"), p && m.warnPwd.css("display", "block")
    }, _setWarnRepwdStyle: function (e) {
      m.warnRepwd.addClass("error_warnning").removeClass("dn").html(e), m.newRePw.addClass("invalid_num"), p && m.warnRepwd.css("display", "block")
    }, _setWarnOldpwdStyle: function (e) {
      m.warnOldpwd.addClass("error_warnning").removeClass("dn").html(e), m.oldPw.addClass("invalid_num"), p && m.warnOldpwd.css("display", "block")
    }, _setWarnInfo: function () {
      h = {
        pwOldWarn: "4-20位数字、字母或字符",
        warnold1: "请输入当前帐号的密码",
        warnold2: "请输入当前密码",
        warnold3: "当前密码错误",
        warnold4: "点击太频繁，清空内容后重试",
        warnnew1: "请输入新密码",
        warnnew2: "8~20位字母、数字或字符，至少包含两种",
        warnnew3: "密码过于简单",
        warnnew4: "密码包含无效字符",
        warnrenew1: "请再次输入密码",
        warnrenew2: "请再次输入密码",
        warnrenew3: "两次密码不相同",
        warnrenew4: "请再次输入密码"
      }
    }
  }), i.exports = f
});
define("../../units/safe/appeal", ["../../components/action/checkDoms", "../../kit/validate", "../../components/units/pageJob", "../../interfaces/validateEmailInterface", "../../interfaces/mobileRegistInterface", "../../interfaces/safeV2/appeal", "../../interfaces/verifyMobileInterface", "../../units/safe/phoneInfo", "../../kit/findParent"], function (e, t, i) {
  var a = e("../../components/action/checkDoms"), n = e("../../kit/validate"), o = e("../../components/units/pageJob");
  e("../../interfaces/validateEmailInterface"), new (e("../../interfaces/mobileRegistInterface"));
  var r = new (e("../../interfaces/safeV2/appeal"));
  e("../../interfaces/verifyMobileInterface"), Q.browser.iPad ? "touchstart" : "click", e("../../units/safe/phoneInfo");
  var s = e("../../kit/findParent"), l = {}, d = "appeal";
  o.create(d, {
    getDependentDoms: function () {
      l.check = Q.$("#J_appeal-box")
    }, check: function () {
      return a(l), !0
    }, init: function () {
      this._setDom(), this.bindEvent()
    }, bindEvent: function () {
      var e = this;
      e._selectEvent(), e._formEvent(), e._verifyEvent()
    }, _selectEvent: function () {
      l.select.on("click", function () {
        var e = l.selectUl.hasClass("dn");
        e ? l.selectUl.removeClass("dn") : l.selectUl.addClass("dn")
      }), l.select.delegate("list", function (e) {
        var t = e.target, i = Q.$(t).attr("data-val"), a = Q.$(t).html();
        l.checkVal.attr("data-val", i), l.checkVal.html(a), l.selectUl.addClass("dn")
      }), l.stepBox1.delegate("radio", function (e) {
        var t = e.target, i = Q.$(t).attr("type");
        "1" === i ? (l.popElem.addClass("dn"), Q.$(".J_radio").removeClass("radio-selected")) : "2" === i ? (l.popElem.removeClass("dn"), Q.$(".J_radio").removeClass("radio-selected")) : ("3" === i || "4" === i || "5" === i) && Q.$(".J_vip-radio").removeClass("radio-selected"), Q.$(t).addClass("radio-selected")
      })
    }, _verifyEvent: function () {
      var e = this;
      Q.$("#J_form-zh").on("blur", function () {
        e._vInfo(this, "zh")
      }), Q.$("#J_form-name").on("blur", function () {
        e._vInfo(this, "name")
      }), Q.$("#J_form-phone").on("blur", function () {
        e._vInfo(this, "phone")
      })
    }, _vInfo: function (e, t) {
      var i = Q.$(e).value(), a = n.empty(i), o = s(Q.$(e), ".pp_account_form_item").down(".error_warnning");
      return a ? "zh" !== t || n.mail(i) || n.mobile(i) ? "phone" !== t || n.mobile(i) ? (o.addClass("dn"), !0) : (o.removeClass("dn").html("帐号格式错误"), !1) : (o.removeClass("dn").html("帐号格式错误"), !1) : ("zh" === t ? o.removeClass("dn").html("帐号不能为空") : "name" === t ? o.removeClass("dn").html("真实姓名不能为空") : "phone" === t && o.removeClass("dn").html("手机不能为空"), !1)
    }, _formEvent: function () {
      var e = this;
      l.formBtn.on("click", function (t) {
        Q.event.get(t).preventDefault();
        var i = Q.$("#J_form-zh").value(), a = Q.$("#J_form-name").value(), n = Q.$("#J_check-val").attr("data-val"), o = Q.$("#J_form-id").value(), s = Q.$("#J_form-mail").value(), l = Q.$("#J_form-phone").value(), d = Q.$("#J_form-code").value(), c = !1, u = null, p = Q.$("#J_vip-false"), m = Q.$("#J_vip-true");
        p.hasClass("radio-selected") ? c = !1 : m.hasClass("radio-selected") && (c = !0, u = e._getVipType());
        var h = {
          account: i,
          realname: a,
          cardtype: n,
          cardno: o,
          isvip: c,
          viptype: u,
          email: s,
          phone: l,
          verifycode: d
        }, f = e._vInfo(Q.$("#J_form-zh"), "zh"), g = e._vInfo(Q.$("#J_form-name"), "name"), v = e._vInfo(Q.$("#J_form-phone"), "phone");
        return f && g && v ? (r.submitAppeal(h, function (e) {
          "A00000" === e.code && (window.location.href = e.data.redirect_url)
        }), void 0) : !1
      })
    }, _getVipType: function () {
      for (var e = Q.$(".J_viptype"), t = !1, i = 0; i < e.length; i++)if (t = Q.$(e[i]).hasClass("radio-selected"))return Q.$(e[i]).attr("viptype");
      return !1
    }, _setDom: function () {
      l = {
        stepBox1: Q.$("#J_form-step1"),
        select: Q.$("#J_select-list"),
        selectBtn: Q.$("#J_select-btn"),
        selectUl: Q.$("#J_select-box"),
        checkVal: Q.$("#J_check-val"),
        selectRadio: Q.$("#J_select-radio"),
        popElem: Q.$("#J_appeal-pop"),
        formBtn: Q.$("#J_form-submit")
      }
    }
  }), i.exports = d
});
define("../../units/safe/phoneInfo", ["../../components/action/checkDoms", "../../kit/validate", "../../components/units/pageJob", "../../interfaces/validateEmailInterface", "../../interfaces/mobileRegistInterface", "../../interfaces/verifyMobileInterface"], function (e, t, i) {
  var a = e("../../components/action/checkDoms"), n = e("../../kit/validate"), o = e("../../components/units/pageJob");
  e("../../interfaces/validateEmailInterface");
  var r = new (e("../../interfaces/mobileRegistInterface")), s = e("../../interfaces/verifyMobileInterface"), l = Q.browser.iPad ? "touchstart" : "click", d = {}, c = {}, u = "phoneInfo";
  o.create(u, {
    getDependentDoms: function () {
      d.check = Q.$("#J_phone-box")
    }, check: function () {
      return a(d), !0
    }, init: function () {
      this._setDOM(), this._setWarnInfo(), this.bindEvent()
    }, bindEvent: function () {
      var e = this;
      e._PgetCodeEvent(), e._PcheckNumEvent(), e._PsubmitEvent()
    }, _PcheckNumEvent: function () {
      var e = this;
      d.PnumInp.on("blur", function () {
        e._PvalidateNum()
      })
    }, _PvalidateNum: function () {
      var e = d.PnumInp.value(), t = n.mobile(e);
      return t ? (d.PnumInp.removeClass("invalid_num"), d.PwarnInfo.removeClass("error_warnning").addClass("pp_icon success_hint").html(""), !0) : (d.PnumInp.addClass("invalid_num"), d.PwarnInfo.removeClass("pp_icon success_hint").addClass("error_warnning").html(c.txError), !1)
    }, _PvalidateCode: function () {
    }, _PgetCodeEvent: function () {
      var e = this;
      d.PgetCodeBtn.on(l, function (t) {
        Q.event.get(t).preventDefault(), e._PvalidateNum() === !0 && e._PhoneGetCode()
      })
    }, _PhoneGetCode: function () {
      var e = this, t = 0, i = 0;
      d.checkValElem ? (t = d.checkValElem.attr("data-line-val"), i = 6) : d.PnumInp && (t = d.PnumInp.value(), i = 3);
      var a = {requestType: i, cellphoneNumber: t, serviceId: 2};
      3 == i ? e.PbindPhoneGetCodeAjax(a) : 6 == i && e.PoldPhoneGetCodeAjax(a)
    }, PbindPhoneGetCodeAjax: function (e) {
      var t = this, i = new s;
      i.getCaptchaNum(e, function (e) {
        "A00000" === e.code ? (d.timeInfoElem.removeClass("dn"), d.PgetCodeBtn.addClass("dn"), t._EcountDown()) : t._setPhoneStyle(e.msg)
      })
    }, PoldPhoneGetCodeAjax: function (e) {
      r.sendCode(e, function (e) {
        "A00000" === e.code && (d.timeInfoElem.removeClass("dn"), d.PgetCodeBtn.addClass("dn"))
      })
    }, _PsubmitEvent: function () {
      var e = this;
      d.PbindBtn.on(l, function (t) {
        Q.event.get(t).preventDefault();
        var i = null;
        d.checkValElem ? i = d.checkValElem.attr("data-line-val") : d.PnumInp && (i = d.PnumInp.value());
        var a = d.PcodeInp.value(), o = e._PvalidateNum(i);
        if (!o)return !1;
        if (!n.empty(a))return e._setCodeStyle(c.tx401), !1;
        var r = {cellphoneNumber: i, authCode: a, agenttype: 1, authcookie: Q.cookie.get("P00001"), serviceId: 2};
        e._PsubmitAjax(r)
      })
    }, _PsubmitAjax: function (e) {
      var t = this;
      r.bindPhone(e, function (e) {
        "A00000" === e.code ? window.location.href = e.data.redirect : (d.PcodeInp.value(""), t._setCodeStyle(e.msg))
      })
    }, _setPhoneStyle: function (e) {
      d.PnumInp.addClass("invalid_num"), d.PwarnInfo.attr("class", ""), d.PwarnInfo.addClass("error_warnning").html(e)
    }, _setCodeStyle: function (e) {
      d.PcodeInp.addClass("invalid_num"), d.PwarnInfoCode.attr("class", ""), d.PwarnInfoCode.addClass("error_warnning").html(e)
    }, _setDOM: function () {
      d = {
        PnumInp: Q.$("#J_phone-num"),
        PsubBtn: Q.$("#J_phone-submit"),
        PcodeInp: Q.$("#J_code-inp"),
        PwarnInfo: Q.$("#J_phone-warnInfo"),
        PwarnInfoCode: Q.$("#J_warn-code"),
        PcheckInp: Q.$("#J_check-val"),
        PbindBtn: Q.$("#J_bind-submit") || Q.$("#J_code-submit"),
        PgetCodeBtn: Q.$("#J_getCode"),
        timeInfoElem: Q.$("#J_time-info"),
        PreGetCodeBtn: Q.$("#J_timeout-resend"),
        numInfoElem: Q.$("#J_num-time")
      }
    }, _setWarnInfo: function () {
      c = {
        txError: "无效的手机号",
        txA00101: "禁止该手机号接收短信",
        tx400: "验证码错误",
        tx401: "请输入验证码",
        tx402: "手机号不存在",
        tx410: "每次获取验证码的时间间隔不能小于30s",
        tx411: "每天最多获取3次"
      }
    }, _EcountDown: function () {
      var e = 58, t = null;
      clearInterval(t), d.PgetCodeBtn.addClass("dn"), d.timeInfoElem.removeClass("dn"), t = setInterval(function () {
        return d.numInfoElem.html(""), d.numInfoElem.html(e), 0 === e ? (d.PgetCodeBtn.removeClass("dn").html("重新获取验证码"), d.timeInfoElem.addClass("dn"), d.numInfoElem.html("59"), clearInterval(t), !1) : (e--, void 0)
      }, 1e3)
    }
  }), i.exports = u
});
define("../../units/safe/pwprotection", ["../../components/action/checkDoms", "../../components/units/pageJob", "../../kit/userInfo", "../../kit/validate", "../../action/qipaLogin", "../../interfaces/safeV2/appeal", "../../kit/findParent", "../../interfaces/verifyMobileInterface"], function (e, t, i) {
  var a = e("../../components/action/checkDoms"), n = e("../../components/units/pageJob");
  e("../../kit/userInfo");
  var o = e("../../kit/validate");
  e("../../action/qipaLogin");
  var r = new (e("../../interfaces/safeV2/appeal")), s = e("../../kit/findParent"), l = e("../../interfaces/verifyMobileInterface"), d = {}, c = "pwprotection";
  n.create(c, {
    getDependentDoms: function () {
      d.check = Q.$("#J_pw-protection")
    }, check: function () {
      return a(d), !0
    }, init: function () {
      this.setDom(), this.bindEvent(), this.keyPwUp()
    }, bindEvent: function () {
      var e = this;
      Q.$(".J_select-btn") && e.selectEvent(), e.blurEvent(), e._submitFormEvent()
    }, selectEvent: function () {
      var e = this;
      Q.$(".J_select-btn").on("click", function () {
        var e = s(Q.$(this), ".J_select-box"), t = e.down(".J_select-ul"), i = t.hasClass("dn");
        Q.$(".J_select-ul").addClass("dn"), Q.$(".J_select-box").removeClass("checkBox_wrap-selected"), i ? (e.addClass("checkBox_wrap-selected"), t.removeClass("dn")) : t.addClass("dn")
      }), Q.$(document).on("click", function (e) {
        var t = Q.event.get(e).target, i = Q.$(t).hasClass("J_select-btn");
        i || Q.$(".J_select-ul").addClass("dn")
      }), Q.$(document).delegate("list", function (t) {
        var i = t.target, a = Q.$(i).down("a").html(), n = Q.$(i).attr("data-val"), o = s(Q.$(i), ".J_select-box"), r = o.down(".J_select-ul"), l = o.down(".J_select-val");
        r.addClass("dn"), l.html(a), l.attr("data-val", n);
        for (var d = e._getQuestionsVal(), c = Q.$(".J_select-ul").down("li"), u = 0; u < c.length; u++) {
          Q.$(c[u]).removeClass("dn");
          for (var p = Q.$(c[u]).attr("data-val"), m = 0; m < d.length; m++)parseInt(p, 10) === parseInt(d[m], 10) && Q.$(c[u]).addClass("dn")
        }
      })
    }, blurEvent: function () {
      var e = this;
      Q.$(".J_inp-val").on("blur", function () {
        var e = Q.$(this).value(), t = s(Q.$(this), ".J_input-box");
        t.down(".J_select-val");
        var i = t.down(".J_val-warn");
        o.empty(e) ? (Q.$(this).removeClass("invalid_num"), i.addClass("dn")) : (Q.$(this).addClass("invalid_num"), i.removeClass("dn"))
      }), d.$zhInp && d.$zhInp.on("blur", function () {
        e._vInfo()
      })
    }, _submitFormEvent: function () {
      var e = this;
      d.$btnSubmit.on("click", function (t) {
        Q.event.get(t).preventDefault();
        var i = Q.event.get(t).target;
        e.submitPwFun(i)
      })
    }, submitPwFun: function (e) {
      var t = this, i = Q.$(e).attr("type"), a = Q.$(".J_inp-val"), n = [], l = null;
      if (d.$zhInp) {
        t._vInfo();
        var c = d.$zhInp.hasClass("invalid_num");
        if (l = d.$zhInp.value().replace(/(^\s*)|(\s*$)/g, ""), c)return !1
      }
      for (var u = 0; u < a.length; u++) {
        var p = s(Q.$(a[u]), ".J_input-box"), m = p.down(".J_select-val"), h = p.down(".J_val-warn"), f = Q.$(a[u]).value();
        o.empty(f) ? (Q.$(a[u]).removeClass("invalid_num"), h.addClass("dn")) : (Q.$(a[u]).addClass("invalid_num"), h.removeClass("dn"));
        var g = m.attr("data-val");
        n[u] = {sort: u + 1, qid: g, answer: f}
      }
      for (var v = 0; v < a.length; v++)if (Q.$(a[v]).hasClass("invalid_num"))return !1;
      var b = {type: i, account: l, qas: JSON.stringify(n)};
      d.$zhInp ? r.checkQa(b, function (e) {
        if ("A00000" === e.code)return window.location.href = e.data.redirect, !1;
        if (e.data)t.setWarnInfo(e.data); else {
          var i = e.msg;
          b = {1: i, 2: i, 3: i}, t.setWarnInfo(b)
        }
      }) : r.saveQa(b, function (e) {
        return "A00000" === e.code ? (window.location.href = e.data.redirect, !1) : (alert(e.msg), void 0)
      })
    }, _vInfo: function () {
      var e = d.$zhInp.value(), t = o.empty(e);
      if (!t)return d.$zhWarn.removeClass("dn pp_icon success_hint").addClass("error_warnning").html("帐号不能为空"), d.$zhInp.addClass("invalid_num"), !1;
      if (!o.mail(e) && !o.mobile(e))return d.$zhWarn.removeClass("dn pp_icon success_hint").addClass("error_warnning").html("帐号格式错误"), d.$zhInp.addClass("invalid_num"), !1;
      var i = {account: e.replace(/(^\s*)|(\s*$)/g, ""), agenttype: 1};
      (new l).verifyNum(i, function (e) {
        return e.data === !1 ? (d.$zhWarn.removeClass("dn pp_icon success_hint").addClass("error_warnning").html("该帐号未注册"), d.$zhInp.addClass("invalid_num"), !1) : (e.data === !0 && (d.$zhWarn.removeClass("dn error_warnning").addClass("pp_icon success_hint"), d.$zhWarn.html(""), d.$zhInp.removeClass("invalid_num")), void 0)
      })
    }, _getQuestionsVal: function () {
      for (var e = Q.$(".J_select-val"), t = [], i = 0, a = e.length; a > i; i++) {
        var n = Q.$(e[i]).attr("data-val");
        t.push(n)
      }
      return t
    }, keyPwUp: function () {
      var e = this;
      Q.$("input").on("keyup", function (t) {
        if (13 == t.keyCode) {
          var i = d.$btnSubmit[0];
          Q.$("#J_change-passwd") || e.submitPwFun(i)
        }
      })
    }, setWarnInfo: function (e) {
      for (var t = 0; 3 > t; t++) {
        var i = e[t + 1];
        i && (Q.$(Q.$(".J_inp-val")[t]).addClass("invalid_num"), Q.$(Q.$(".J_val-warn")[t]).removeClass("dn"), Q.$(Q.$(".J_val-warn")[t]).html(i))
      }
    }, setDom: function () {
      d = {
        $zhInp: Q.$("#J_zh-num") || Q.$("#J_phone-num"),
        $zhWarn: Q.$("#J_phone-warnInfo"),
        $btnSubmit: Q.$("#J_btn-submit")
      }
    }
  }), i.exports = c
});
define("../../units/safe/changeQa", ["../../components/action/checkDoms", "../../components/units/pageJob", "../../kit/validate", "../../interfaces/safeV2/appeal"], function (e, t, i) {
  var a = e("../../components/action/checkDoms"), n = e("../../components/units/pageJob"), o = e("../../kit/validate"), r = new (e("../../interfaces/safeV2/appeal")), s = {}, l = "changeQa";
  n.create(l, {
    getDependentDoms: function () {
      s.check = Q.$("#J_set-qa")
    }, check: function () {
      return a(s), !0
    }, init: function () {
      this.setDom(), this.bindEvent()
    }, bindEvent: function () {
      var e = this;
      s.$submit.on("click", function (t) {
        Q.event.get(t).preventDefault();
        var i = s.$oldQa.value(), a = s.$newQa.value();
        if (e.validateInp(i, a), s.$oldWarn.hasClass("dn") && s.$newWarn.hasClass("dn")) {
          var n = s.$qaId.attr("data-id"), o = {q_id: n, old_answer: i, answer: a};
          r.changeQa(o, function (e) {
            return "A00000" === e.code ? (window.location.href = e.data.redirect, s.$oldQa.removeClass("invalid_num"), s.$oldWarn.addClass("dn"), !1) : (s.$oldQa.addClass("invalid_num"), s.$oldWarn.removeClass("dn").html(e.msg), void 0)
          })
        }
      })
    }, validateInp: function (e, t) {
      var i = !o.empty(e), a = !o.empty(t);
      i ? (s.$oldQa.addClass("invalid_num"), s.$oldWarn.removeClass("dn").html("答案不能为空")) : (s.$oldQa.removeClass("invalid_num"), s.$oldWarn.addClass("dn")), a ? (s.$newQa.addClass("invalid_num"), s.$newWarn.removeClass("dn").html("答案不能为空")) : (s.$newQa.removeClass("invalid_num"), s.$newWarn.addClass("dn"))
    }, setDom: function () {
      s = {
        $setQa: Q.$("#J_set-qa"),
        $oldQa: Q.$("#J_old-qa"),
        $newQa: Q.$("#J_new-qa"),
        $oldWarn: Q.$("#J_old-warn"),
        $newWarn: Q.$("#J_new-warn"),
        $submit: Q.$("#J_update-submit"),
        $qaId: Q.$("#J_qa-id")
      }
    }
  }), i.exports = l
});
define("../../units/safe/loginWarn", ["../../components/action/checkDoms", "../../components/units/pageJob", "../../kit/userInfo", "../../action/qipaLogin", "../../interfaces/safeV2/appeal"], function (e, t, i) {
  var a = e("../../components/action/checkDoms"), n = e("../../components/units/pageJob"), o = e("../../kit/userInfo"), r = e("../../action/qipaLogin"), s = new (e("../../interfaces/safeV2/appeal")), l = {}, d = "loginWarn";
  n.create(d, {
    getDependentDoms: function () {
      l.check = Q.$(document)
    }, check: function () {
      return a(l), !0
    }, init: function () {
      Q.event.customEvent.on("logout", function () {
        return window.location.href = "http://passport.iqiyi.com/pages/secure/index.action", !1
      }), this.bindEvent()
    }, bindEvent: function () {
      Q.$(document).delegate("J_safe-login-warn", function (e) {
        Q.event.get(e.event).preventDefault();
        var t = Q.event.get(e).target, i = Q.$(t).attr("data-url"), a = Q.$(t).attr("data-type"), n = "/pages/secure/password/modify_pwd.action", l = "/pages/secure/password/find_pwd_index.action", d = "/pages/secure/account/switch_qa.action";
        if (o.isLogin() !== !0) {
          if (i === l)return window.location.href = i, !1;
          r.openLoginWindow(i, function () {
            return i === n ? (window.location.href = i, !1) : i === d ? (window.location.href = d, !1) : void 0
          })
        } else {
          if (Boolean(a) !== !0)return window.location.href = i, !1;
          s.sendActivationEmail(null, function (e) {
            return "A00000" === e.code ? (window.location.href = e.data.redirect, !1) : (alert("您点击频率过高！"), void 0)
          })
        }
      })
    }
  }), i.exports = d
});
define("../../units/safe/index", ["../../components/action/checkDoms", "../../components/units/pageJob", "../../kit/userInfo", "../../action/qipaLogin", "../../interfaces/safeV2/appeal"], function (e, t, i) {
  var a = e("../../components/action/checkDoms"), n = e("../../components/units/pageJob");
  e("../../kit/userInfo"), e("../../action/qipaLogin");
  var o = new (e("../../interfaces/safeV2/appeal")), r = {}, s = "index";
  n.create(s, {
    getDependentDoms: function () {
      r.check = Q.$("#J_safe-indexBox")
    }, check: function () {
      return a(r), !0
    }, init: function () {
      Q.$(".J_btn-info").on("click", function (e) {
        Q.event.get(e).preventDefault();
        var t = Q.$(this).attr("data-href"), i = Q.$(this).attr("data-type");
        if ("change-email" !== i)return window.location.href = "http://passport.iqiyi.com" + t, !1;
        var a = null;
        o.sendActivationEmail(a, function (e) {
          return "A00000" === e.code ? (window.location.href = e.data.redirect, !1) : (alert("您点击频率过高！"), void 0)
        })
      })
    }
  }), i.exports = s
});
define("../../units/safe/loginRecord", ["../../components/action/checkDoms", "../../components/units/pageJob", "../../kit/userInfo", "../../action/qipaLogin", "../../interfaces/safeV2/appeal", "../../kit/qitan/setpage", "../../kit/qiyiPlayer", "../../components/action/floater", "../../components/view/floaterView"], function (e, t, i) {
  var a = e("../../components/action/checkDoms"), n = e("../../components/units/pageJob");
  e("../../kit/userInfo"), e("../../action/qipaLogin");
  var o = new (e("../../interfaces/safeV2/appeal")), r = e("../../kit/qitan/setpage");
  e("../../kit/qiyiPlayer");
  var s = null, l = e("../../components/action/floater"), d = e("../../components/view/floaterView"), c = {}, u = "loginRecord";
  n.create(u, {
    getDependentDoms: function () {
      c.check = Q.$("#J_record-list")
    }, check: function () {
      return a(c), !0
    }, init: function () {
      this.setDom(), o.historyList(null, function (e) {
        if ("A00000" === e.code) {
          var t = e.data.size, i = e.data.total, a = Math.ceil(i / t);
          a > 1 && r(c.$modPage[0], a, 1)
        }
      }), this.bindEvent()
    }, bindEvent: function () {
      var e = this;
      Q.$(document).delegate("reviewpage", function (t) {
        Q.event.get(t.event).preventDefault();
        var i = Q.event.get(t).target, a = Q.$(i).attr("data-page"), n = c.$modPage.attr("data-value");
        a = parseInt(a, 10);
        var s = {start: a, lastTime: n};
        o.historyList(s, function (t) {
          if ("A00000" === t.code) {
            var i = e.getHtml(t.data.loginlist);
            c.$box.html(i), c.$modPage.html(""), c.$modPage.attr("data-value", t.data.lastTime);
            var n = t.data.size, o = t.data.total, s = Math.ceil(o / n);
            r(c.$modPage[0], s, a), document.documentElement.scrollTop = document.body.scrollTop = 0
          }
        })
      }), c.$popWarnBtn.on("click", function () {
        s || (s = new l({view: new d({isResize: !0, zIndex: 4850})})), s.show({elem: c.$popLog})
      }), c.$closeBtn.on("click", function () {
        s.hide()
      })
    }, getHtml: function (e) {
      for (var t = this, i = e, a = '<table class=""><tbody><tr><th colspan="2">时间</th><th>省份</th><th>城市</th><th>IP</th><th>登录设备</th><th class="border">状态</th></tr>', n = "", o = "</tbody></table >", r = 0, s = i.length; s > r; r++) {
        var l = new Date(i[r].loginTime);
        n += '<tr><td width="15%">' + t.formatDateYMD(l) + "</td>" + '<td width="9%" class="noborder">' + t.formatDateHMS(l) + "</td>" + '<td width="10%">' + i[r].province + "</td>" + '<td width="17%">' + i[r].city + "</td>" + '<td width="16%">' + i[r].ip + "</td>" + '<td width="18%" class="border">' + i[r].deviceName + "</td>" + '<td width="15%" class="border">' + i[r].status + "</td>" + "</tr>"
      }
      return [a, n, o].join("")
    }, formatDateYMD: function (e) {
      var t = e.getFullYear(), i = e.getMonth() + 1, a = e.getDate();
      return t + "-" + i + "-" + a
    }, formatDateHMS: function (e) {
      var t = e.getHours(), i = e.getMinutes(), a = e.getSeconds();
      return t + ":" + i + ":" + a
    }, setDom: function () {
      c = {
        $box: Q.$("#J_record-list"),
        $modPage: Q.$("#J_mod-page"),
        $popWarnBtn: Q.$("#J_login-warn-pop"),
        $popLog: Q.$("#J_records-log-pop"),
        $closeBtn: Q.$("#J_records_close")
      }
    }
  }), i.exports = u
});
define("../../kit/qitan/setpage", [], function (e, t, i) {
  function a(e, t, i, a) {
    function n() {
      r[r.length] = i == o ? '<span href="' + u + '" data-elem="curpage" class=' + d + ">" + o + "</span>" : '<a href="' + u + '" data-page=' + o + " data-delegate=" + c + ' rseat="511191_5">' + o + "</a>"
    }

    a = a || {}, e = e, t = t, i = Number(i);
    var o, r = [], s = a.unclick || "noPage", l = a.click || "a1", d = a.curpage || "curPage", c = a.clickelem || "reviewpage", u = a.towhere || "";
    if (r[r.length] = 1 == i ? "<span class=" + s + ">上一页</span>" : '<a href="' + u + '" data-page=' + (i - 1) + " data-delegate=" + c + " class=" + l + '  rseat="511191_5">上一页</a>', 5 >= t)for (o = 1; t >= o; o++)n(); else if (4 >= i) {
      for (o = 1; 5 >= o; o++)n();
      r[r.length] = '<span>...</span><a href="' + u + '" data-page=' + t + " data-delegate=" + c + ' rseat="511191_5">' + t + "</a>"
    } else if (i >= t - 3)for (r[r.length] = '<a href="' + u + '" data-delegate=' + c + ' data-page="1" rseat="511191_5">1</a><span>...</span>', o = t - 4; t >= o; o++)n(); else {
      for (r[r.length] = '<a href="' + u + '" data-page=1 data-delegate=' + c + ' rseat="511191_5">1</a><span>...</span>', o = i - 1; i + 1 >= o; o++)n();
      r[r.length] = '<span>...</span><a href="' + u + '" data-page=' + t + " data-delegate=" + c + ' rseat="511191_5">' + t + "</a>"
    }
    r[r.length] = i == t ? '<span href="' + u + '" class=' + s + ">下一页</span>" : '<a href="' + u + '" data-page=' + (i + 1) + " data-delegate=" + c + " class=" + l + ' rseat="511191_5">下一页</a>', e.innerHTML = r.join("")
  }

  i.exports = a
});
define("../../units/safe/setLoginPlace", ["../../components/action/checkDoms", "../../components/units/pageJob", "../../interfaces/safeV2/appeal"], function (e, t, i) {
  var a = e("../../components/action/checkDoms"), n = e("../../components/units/pageJob"), o = e("../../interfaces/safeV2/appeal"), r = {}, s = "setLoginPlace";
  n.create(s, {
    getDependentDoms: function () {
      r.check = Q.$("#J_set-login-place")
    }, check: function () {
      return a(r), !0
    }, init: function () {
      var e = this;
      e.setDoms(), e.bindEvent()
    }, bindEvent: function () {
      var e = this;
      e.chooseBtnEvent(), e.chooseLiEvent(), e.submitBtn(), e.documentEvent(), e.setPingBack("506093_0")
    }, documentEvent: function () {
      Q(document).on("click", function (e) {
        var t = Q(e.target), i = t.parents(".J_select-box"), a = i.find(".J_choose-ul"), n = a.hasClass("dn");
        Q(".J_choose-ul").addClass("dn"), n || a.removeClass("dn")
      })
    }, chooseLiEvent: function () {
      var e = this;
      Q(document).on("click", ".J_choose-li", function () {
        var t = Q(this).attr("data-city-code"), i = Q(this).parents(".J_select-box"), a = Q(this).find("a").text(), n = i.find(".J_choose-ul"), o = i.find(".J_choose-btn"), r = i.find(".J_choose-elem"), s = Q(this).parents(".J_login-place"), l = s.find(".J_choose-ul")[1], d = s.find(".J_choose-elem")[1];
        r.attr("data-city-code", t), r.html(a);
        var c = o.attr("data-type");
        n.addClass("dn");
        var u = {province: t};
        "provinces" === c && (e.getCity({param: u, $ul: Q(l)}), Q(d).html("--请选择--"), Q(d).attr("data-city-code", "0"))
      })
    }, chooseBtnEvent: function () {
      var e = this;
      Q(document).on("click", ".J_choose-btn", function () {
        var t = Q(this).parents(".J_select-box"), i = Q(this).attr("data-type"), a = t.find(".J_choose-ul"), n = t.find(".J_choose-elem").attr("data-city-code"), o = a.hasClass("dn"), r = a.find("li");
        if (e.checkBoxZindex(t), "provinces" === i)r.length <= 0 && e.getProvinces({
          $ul: a,
          code: n
        }); else if ("city" === i) {
          var s = Q(this).parents(".J_login-place"), l = s.find(".J_choose-elem").attr("data-city-code"), d = s.find(".J_choose-ul")[1], c = {province: l};
          e.getCity({param: c, $ul: Q(d)})
        }
        e.setUlDn(o, a)
      })
    }, checkBoxZindex: function (e) {
      for (var t = Q(".checkBox_wrap-selected"), i = 0; i < t.length; i++)Q(t[i]).removeClass("checkBox_wrap-selected");
      e.addClass("checkBox_wrap-selected")
    }, submitBtn: function () {
      var e = this;
      r.$submit.on("click", function () {
        var t = e.getChooseCityInfo(), i = Q(this).attr("type");
        ("" === t || "," === t) && r.$modbox.find(".J_city-warnInfo").remove(), e.setWarnInfo();
        var a = r.$modbox.find(".J_city-warnInfo").length;
        return a > 0 ? !1 : ((new o).setAddress({address: t, type: i}, function (e) {
          return "A00000" === e.code ? (window.location.href = e.data.redirect, !1) : void 0
        }), void 0)
      })
    }, getProvinces: function (e) {
      var t = this, i = "";
      (new o).getProvinces(null, function (a) {
        if ("A00000" === a.code) {
          var n = {data: a.data, code: e.code};
          i = t.renderHtml(n)
        }
        e.$ul.html(i)
      })
    }, getCity: function (e) {
      var t = this;
      (new o).getCity(e.param, function (i) {
        if ("A00000" === i.code) {
          var a = {data: i.data, code: e.param.province, flag: !0}, n = t.renderHtml(a);
          e.$ul.html(n)
        }
      })
    }, getChooseCityInfo: function () {
      for (var e = this, t = Q(".J_choose-elem"), i = "", a = 0, n = t.length; n > a; a++) {
        var o = Q(t[a]).attr("data-city-code");
        if (0 === a % 2) {
          if ("0" === o || "" === o)continue;
          i += o + "|"
        } else if (1 === a % 2) {
          if ("0" === o || "" === o) {
            i = e.getStr(i);
            continue
          }
          i += o + ","
        }
      }
      return i
    }, setWarnInfo: function () {
      for (var e = this, t = Q(".J_login-place"), i = 0; i < t.length; i++) {
        var a = Q(t[i]).find(".J_choose-elem")[0], n = Q(t[i]).find(".J_choose-elem")[1], o = Q(a).attr("data-city-code"), r = Q(n).attr("data-city-code");
        "0" !== o && "" !== o ? "" === r || "0" === r ? e.setWarnInfoCss(Q(t[i])) : e.removeWarnInfoClass(Q(t[i])) : e.removeWarnInfoClass(Q(t[i]))
      }
    }, setWarnInfoCss: function (e) {
      var t = '<span class="selectCity J_city-warnInfo">请选择城市</span>', i = e.find(".J_city-warnInfo");
      0 === i.length && e.append(t)
    }, removeWarnInfoClass: function (e) {
      var t = e.find(".J_city-warnInfo");
      t.length > 0 && e.find(".J_city-warnInfo").remove()
    }, getStr: function (e) {
      var t = e.split(",");
      return t.length = t.length - 1, t.join(",") + ","
    }, renderHtml: function (e) {
      var t = this, i = e.data, a = e.code, n = !1, o = '<li class="J_choose-li" data-city-code="0"><a href="javascript:void(0)">--请选择--</a></li>';
      if (i)for (var r in i) {
        var s = a + "|" + r, l = t.getChooseCityInfo(), d = l.split(",");
        if (e.flag) {
          for (var c = 0; c < d.length - 1; c++)d[c] === s && (n = !0);
          n || (o += '<li class="J_choose-li"  data-city-code="' + r + '">' + '<a href="javascript:void(0)">' + i[r] + "</a>" + "</li>"), n = !1
        } else o += '<li class="J_choose-li"  data-city-code="' + r + '">' + '<a href="javascript:void(0)">' + i[r] + "</a>" + "</li>"
      }
      return o
    }, setUlDn: function (e, t) {
      e ? t.removeClass("dn") : t.addClass("dn")
    }, setDoms: function () {
      r = {$modbox: Q("#J_set-login-place"), $submit: Q("#J_submit-btn")}
    }, setPingBack: function (e) {
      var t = {
        t: 21,
        rn: Math.random(),
        p: 10,
        pf: 1,
        p1: 101,
        bstp: 0,
        jsuid: Q.cookie.get("QC006") || "",
        ve: Q.getVideoEventID() || "",
        ce: "",
        u: Q.cookie.get("QC005") || "",
        block: e
      };
      Q.log.server(t, "http://msg.71.am/b")
    }
  }), i.exports = s
});
define("../../units/safe/helpPublic", ["../../components/action/checkDoms", "../../components/units/pageJob"], function (e, t, i) {
  var a = e("../../components/action/checkDoms"), n = e("../../components/units/pageJob");
  Q.browser.iPad ? "touchstart" : "click";
  var o = {}, r = "helpPublic";
  n.create(r, {
    getDependentDoms: function () {
    }, check: function () {
      return a(o), !0
    }, init: function () {
      this._setDom(), this.bindEvent()
    }, bindEvent: function () {
      var e = this;
      e._helpEvent()
    }, _helpEvent: function () {
      o.helpbtn && o.helpbtn.length && o.helpbtn.on("click", function (e) {
        Q.event.get(e).preventDefault(), Q("#tippopup").removeClass("dn")
      }), o.closebtn && o.closebtn.length && o.closebtn.on("click", function (e) {
        Q.event.get(e).preventDefault(), Q("#tippopup").addClass("dn")
      }), o.changenum && o.changenum.length && o.changenum.on("click", function () {
        window.location.href = ""
      })
    }, _setDom: function () {
      o = {helpbtn: Q("#helpbutton"), closebtn: Q("#closepopup"), changenum: Q("#changePhone")}
    }
  }), i.exports = r
});
define("../../units/safe/originalPassword", ["../../components/action/checkDoms", "../../components/units/pageJob", "../../kit/validate", "../../interfaces/validateOriginalInterface", "../../kit/pcVCodeKit"], function (e, t, i) {
  var a, n = e("../../components/action/checkDoms"), o = e("../../components/units/pageJob"), r = e("../../kit/validate"), s = e("../../interfaces/validateOriginalInterface"), l = e("../../kit/pcVCodeKit"), d = {}, c = "originalPassword";
  o.create(c, {
    getDependentDoms: function () {
      d.check = Q.$("#J_original-passwd")
    }, check: function () {
      return n(d), !0
    }, init: function () {
      this._setDom(), this.bindEvent()
    }, bindEvent: function () {
      this._submitEvent(), this.picCodeEvent()
    }, refreshPiccode: function () {
      a = l.getVcode(), d.piccode.html("<img src='" + a + "'/> ")
    }, picCodeEvent: function () {
      var e = this;
      d.piccodeInput && d.piccodeInput.on("focus", function () {
        a != d.piccode.down("img").attr("src") && e.refreshPiccode()
      }), d.piccode && d.piccode.on("click", function (t) {
        Q.event.get(t).preventDefault(), setTimeout(function () {
          e.refreshPiccode()
        }, 0)
      })
    }, _submitEvent: function () {
      var e = this;
      d.PsubmitBtn.on("click", function (t) {
        Q.event.get(t).preventDefault(), e.clearTip();
        var i = d.Opsw.value(), a = d.piccodeInput.value(), n = r.empty(i);
        if (!n)return d.Opsw.addClass("invalid_num"), d.codeWarnElem.removeClass("dn"), d.codeWarnElem.addClass("error_warnning").html("请输入原始密码"), void 0;
        if (n = r.empty(a), !n)return d.piccodeInput.addClass("invalid_num"), d.picWarnElem.removeClass("dn"), d.picWarnElem.addClass("error_warnning").html("请输入正确的图文码"), void 0;
        var o = {agenttype: 1, passwd: i, authcookie: Q.cookie.get("P00001") || "", vcode: a};
        (new s).verifyPassword(o, function (t) {
          return "A00000" === t.code ? (window.location.href = t.data.redirect, !1) : ("P00107" === t.code ? (d.piccode && e.refreshPiccode(), d.piccodeInput.addClass("invalid_num"), d.picWarnElem.addClass("error_warnning").removeClass("dn").html(t.msg)) : (d.piccode && e.refreshPiccode(), d.Opsw.addClass("invalid_num"), d.codeWarnElem.addClass("error_warnning").removeClass("dn").html(t.msg)), void 0)
        })
      })
    }, clearTip: function () {
      d.codeWarnElem && d.codeWarnElem.addClass("dn"), d.picWarnElem && d.picWarnElem.addClass("dn"), d.Opsw && d.Opsw.removeClass("invalid_num"), d.piccodeInput && d.piccodeInput.removeClass("invalid_num")
    }, _setDom: function () {
      d = {
        Opsw: Q.$("#origpassword"),
        PsubmitBtn: Q.$("#J_code-submit"),
        codeWarnElem: Q.$("#J_warn-code"),
        picWarnElem: Q.$("#J_warn-piccode"),
        piccodeInput: Q.$("#picCodeinput"),
        piccode: Q.$("#piccodeimg")
      }
    }
  }), i.exports = c
});
//# buildBy serverV2-UglifyJS2-FullCache at Sun Jan 31 2016 17:04:22 GMT+0800 (CST) take time: 1605 ms