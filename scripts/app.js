!function(e){"use strict";var o=e.querySelector("#app");o.baseUrl="/",""===window.location.port&&(o.baseUrl="misc-projects/tree/gh-pages"),o.displayInstalledToast=function(){Polymer.dom(e).querySelector("platinum-sw-cache").disabled||Polymer.dom(e).querySelector("#caching-complete").show()},o.addEventListener("dom-change",function(){console.log("Our app is ready to rock!")}),window.addEventListener("WebComponentsReady",function(){}),window.addEventListener("paper-header-transform",function(o){var r=Polymer.dom(e).querySelector("#mainToolbar .app-name"),a=Polymer.dom(e).querySelector("#mainToolbar .middle-container"),n=Polymer.dom(e).querySelector("#mainToolbar .bottom-container"),t=o.detail,l=t.height-t.condensedHeight,s=Math.min(1,t.y/l),c=.5,i=l-t.y,m=l/(1-c),d=Math.max(c,i/m+c),p=1-s;Polymer.Base.transform("translate3d(0,"+100*s+"%,0)",a),Polymer.Base.transform("scale("+p+") translateZ(0)",n),Polymer.Base.transform("scale("+d+") translateZ(0)",r)}),o.scrollPageToTop=function(){o.$.headerPanelMain.scrollToTop(!0)},o.closeDrawer=function(){o.$.paperDrawerPanel.closeDrawer()}}(document);