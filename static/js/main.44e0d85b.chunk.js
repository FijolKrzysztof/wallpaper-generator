(this["webpackJsonpwallpaper-generator"]=this["webpackJsonpwallpaper-generator"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(4),o=n(0),r=n.n(o),c=n(7),i=n.n(c),l=(n(17),n(8)),s=n(9),d=n(11),h=n(10),g=(n(18),n(22)),j=n(23),p=n(25),u=n(24),m=n(26),b=Math.floor(1001*Math.random()),O="https://picsum.photos/id/"+b+"/1600/900",f=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).onReload=function(){b=Math.floor(1001*Math.random()),O="https://picsum.photos/id/"+b+"/1600/900",e.setState({url:O})},e.onDownload=function(){var e=new Image;e.crossOrigin="anonymous",e.src=O,e.onload=function(){var t=document.createElement("canvas"),n=t.getContext("2d");t.width=e.width,t.height=e.height,n.drawImage(e,0,0);var a=document.createElement("a");a.download="image.png",a.href=t.toDataURL("image/png"),a.click()}},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)("header",{className:"App-header",children:Object(a.jsxs)(g.a,{children:[Object(a.jsx)(j.a,{style:{margin:0,marginBottom:10},children:Object(a.jsx)(p.a,{style:{color:"#000",margin:0},children:Object(a.jsx)(p.a.Img,{onError:this.onReload,src:O})})}),Object(a.jsxs)(j.a,{style:{margin:0},children:[Object(a.jsx)(u.a,{style:{padding:0,paddingRight:5},children:Object(a.jsx)(m.a,{onClick:this.onReload,block:!0,size:"lg",variant:"outline-primary",children:"Reload"})}),Object(a.jsx)(u.a,{style:{padding:0,paddingLeft:5},children:Object(a.jsx)(m.a,{onClick:this.onDownload,block:!0,size:"lg",variant:"warning",children:"Download"})})]})]})})})}}]),n}(o.Component),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),r(e),c(e)}))};n(19);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root")),w()}},[[20,1,2]]]);
//# sourceMappingURL=main.44e0d85b.chunk.js.map