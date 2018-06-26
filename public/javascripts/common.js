"use strict";$(function(){function s(s){s.preventDefault();var e=$(this),t=e.attr("href"),n=$(".materials").find(".session[data-id="+t+"]");a.removeClass("materials__link--active"),e.addClass("materials__link--active"),i.removeClass("session--active"),n.addClass("session--active")}var a=$(".materials__link"),i=$(".session");a.on("click",s)});
//# sourceMappingURL=../javascripts/common.js.map
