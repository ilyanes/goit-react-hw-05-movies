"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[53],{5115:function(t,n,e){e.r(n),e.d(n,{default:function(){return s}});var r=e(8152),a=e(2791),c=e(171),u=e(6871),i=e(184);function s(){var t=(0,u.UO)().movieId,n=(0,a.useState)(null),e=(0,r.Z)(n,2),s=e[0],o=e[1];return console.log(s),(0,a.useEffect)((function(){(0,c.zv)(t).then((function(t){return t.cast})).then(o).catch((function(t){return console.log(t)}))}),[t]),(0,i.jsx)("div",{children:s&&0!==s.length?(0,i.jsx)("ul",{children:s.map((function(t){var n=t.id,e=t.character,r=t.name,a=t.profile_path;return(0,i.jsxs)("li",{children:[a&&(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(a),alt:r}),(0,i.jsxs)("h4",{children:["Actor: ",r.toUpperCase()]}),(0,i.jsxs)("p",{children:[" Character: ",e]})]},n)}))}):(0,i.jsx)("h4",{children:"Nothing Found"})})}},171:function(t,n,e){e.d(n,{Pg:function(){return h},Wf:function(){return p},ZP:function(){return s},tx:function(){return d},zv:function(){return g}});var r=e(8214),a=e(5861),c=e(4569),u=e.n(c);u().defaults.baseURL="https://api.themoviedb.org/3";var i="dee148e6b446613865015438b64a7496";function s(){return o.apply(this,arguments)}function o(){return(o=(0,a.Z)((0,r.Z)().mark((function t(){var n,e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("/trending/all/week?api_key=".concat(i));case 2:return n=t.sent,e=n.data.results,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,a.Z)((0,r.Z)().mark((function t(n){var e,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("/search/movie?api_key=".concat(i,"&query=").concat(n));case 2:return e=t.sent,a=e.data.results,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return l.apply(this,arguments)}function l(){return(l=(0,a.Z)((0,r.Z)().mark((function t(n){var e,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("/movie/".concat(n,"?api_key=").concat(i));case 2:return e=t.sent,a=e.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,a.Z)((0,r.Z)().mark((function t(n){var e,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("/movie/".concat(n,"/reviews?api_key=").concat(i));case 2:return e=t.sent,a=e.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)((0,r.Z)().mark((function t(n){var e,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("/movie/".concat(n,"/credits?api_key=").concat(i));case 2:return e=t.sent,a=e.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=cast-page.7f5eff60.chunk.js.map