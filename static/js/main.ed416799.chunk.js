(this["webpackJsonpmap-line-extractor"]=this["webpackJsonpmap-line-extractor"]||[]).push([[0],{119:function(e,t,n){},120:function(e,t,n){},122:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(23),o=n.n(s),i=n(63),l=(n(119),n(15)),r=n(13),j=n(175),b=n(171),u=n(176),p=n(166),d=n(177),O=n(174),h=n(178),x=n(162),m=n(172),f=n(179),g=n(169),v=n(180),C=n(181),k=n(182),N=n(183),y=n(167),S=n(184),L=n(55),F=n(84),w=n.n(F),I=n(85),E=n.n(I),B=n(83),D=n.n(B),J=n(87),A=n.n(J),M=n(88),R=n.n(M),P=n(86),z=n.n(P),T=Object.values({black:"#0C0C0C",blue:"#0037DA",cyan:"#3A96DD",green:"#13A10E",purple:"#881798",red:"#C50F1F",white:"#CCCCCC",yellow:"#C19C00",brightBlack:"#767676",brightBlue:"#3B78FF",brightCyan:"#61D6D6",brightGreen:"#16C60C",brightPurple:"#B4009E",brightRed:"#E74856"}),U=(n(120),n(2));var W=function(){var e=Object(i.b)().enqueueSnackbar,t=Object(c.useState)(void 0),n=Object(r.a)(t,2),a=n[0],s=n[1],o=Object(c.useState)(!1),F=Object(r.a)(o,2),I=F[0],B=F[1],J=Object(c.useState)(!1),M=Object(r.a)(J,2),P=M[0],W=M[1],q=Object(c.useState)(""),G=Object(r.a)(q,2),V=G[0],H=G[1],K=Object(c.useState)("back"),Q=Object(r.a)(K,2),X=Q[0],Y=Q[1],Z=Object(c.useState)([]),$=Object(r.a)(Z,2),_=$[0],ee=$[1],te=Object(c.useState)(0),ne=Object(r.a)(te,2),ce=ne[0],ae=ne[1];function se(e){return{name:e,points:[],counter:0===_.length?0:_.reduce((function(e,t){return e.counter<t.counter?t:e})).counter+1}}function oe(e){return(Math.round(100*e)/100).toFixed(2)}function ie(e){return function(){ae(e)}}function le(){W(!1)}function re(e,t){var n=document.createElement("a"),c=new Blob([[e]],{type:"text/plain"});n.href=URL.createObjectURL(c),n.download=t,document.body.appendChild(n),n.click(),document.body.removeChild(n)}return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("paths"));ee(null===e?[se("\uc774\ub984 \uc5c6\ub294 \uacbd\ub85c 1")]:e)}),[]),Object(U.jsxs)("div",{className:"App",children:[Object(U.jsxs)(L.b,{className:"app-map",center:{lat:37.5642135,lng:127.0016985},level:7,onClick:function(e,t){if(I){var n={lat:t.latLng.getLat(),lng:t.latLng.getLng()},c=Object(l.a)(_);"back"===X?c[ce].points.push(n):c[ce].points.unshift(n),console.log(c),ee(c)}},onRightClick:function(e,t){if(I&&0!==_[ce].length){var n=Object(l.a)(_);"back"===X?n[ce].points.pop():n[ce].points.shift(),console.log(n),ee(n)}},onMouseMove:function(e,t){s({lat:t.latLng.getLat(),lng:t.latLng.getLng()})},children:[void 0!==a&&Object(U.jsx)(L.a,{position:a,zIndex:2,children:Object(U.jsx)("div",{className:"app-mouse-info",children:Object(U.jsx)(j.a,{className:"app-mouse-paper",children:Object(U.jsx)(b.a,{variant:"subtitle2",children:"\uc704\ub3c4 ".concat(oe(a.lat),", \uacbd\ub3c4 ").concat(oe(a.lng))})})})},"mouse-position"),_.map((function(e){return Object(U.jsxs)(c.Fragment,{children:[Object(U.jsx)(L.c,{path:[e.points],strokeWeight:3,strokeColor:T[e.counter%T.length],strokeOpacity:1,strokeStyle:"solid"}),e.points.map((function(t){return Object(U.jsx)(L.a,{position:t,zIndex:1,children:Object(U.jsx)("div",{className:"app-map-point",style:{border:"3px solid ".concat(T[e.counter%T.length])}})})}))]})}))]}),Object(U.jsx)(j.a,{className:"app-panel",children:Object(U.jsxs)("div",{className:"app-panel-layout",children:[Object(U.jsx)(b.a,{variant:"h5",className:"app-panel-title",children:"\uacbd\ub85c \ubaa9\ub85d"}),Object(U.jsxs)("div",{className:"app-panel-controls",children:[Object(U.jsx)(u.a,{onClick:function(){for(var t=new Set(_.map((function(e){return e.name}))),n=1;t.has("\uc774\ub984 \uc5c6\ub294 \uacbd\ub85c ".concat(n));)++n;ee([].concat(Object(l.a)(_),[se("\uc774\ub984 \uc5c6\ub294 \uacbd\ub85c ".concat(n))])),e('"\uc774\ub984 \uc5c6\ub294 \uacbd\ub85c '.concat(n,'"\ub97c \ucd94\uac00\ud558\uc600\uc2b5\ub2c8\ub2e4.'),{variant:"success"})},children:"\uc0c8 \uacbd\ub85c \ucd94\uac00"}),Object(U.jsx)(u.a,{onClick:function(){H(_[ce].name),W(!0)},children:"\uc774\ub984 \uc218\uc815"}),Object(U.jsx)(u.a,{onClick:function(){if(1===_.length)e("\uacbd\ub85c\ub97c \uc0ad\uc81c\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uacbd\ub85c\ub294 \uc801\uc5b4\ub3c4 \ud55c \uac1c \uc874\uc7ac\ud574\uc57c \ud569\ub2c8\ub2e4.",{variant:"error"});else{var t=_[ce].name,n=Object(l.a)(_);n.splice(ce,1),ce>0&&ae(ce-1),ee(n),e('\uacbd\ub85c "'.concat(t,'"\ub97c \uc81c\uac70\ud558\uc600\uc2b5\ub2c8\ub2e4.'),{variant:"success"})}},children:"\uacbd\ub85c \uc0ad\uc81c"})]}),Object(U.jsx)("div",{className:"app-panel-button-container",children:_.map((function(e,t){return Object(U.jsxs)(u.a,{className:"app-panel-button",onClick:ie(t),style:{backgroundColor:t===ce?"silver":"transparent",color:T[e.counter%T.length]},children:[Object(U.jsx)(D.a,{}),Object(U.jsx)(b.a,{className:"app-panel-button-text",children:e.name})]})}))})]})}),Object(U.jsx)(j.a,{className:"app-toolbar",children:Object(U.jsxs)("div",{className:"app-toolbar-layout",children:[Object(U.jsxs)("div",{className:"app-toolbar-modes",children:[Object(U.jsx)(p.a,{title:"\uc9c0\ub3c4 \uc774\ub3d9",children:Object(U.jsx)(d.a,{onClick:function(){B(!1)},children:Object(U.jsx)(w.a,{color:I?"default":"primary"})})}),Object(U.jsx)(p.a,{title:"\uc704\uce58 \ucd94\uac00",children:Object(U.jsx)(d.a,{onClick:function(){B(!0)},children:Object(U.jsx)(E.a,{color:I?"primary":"default"})})})]}),Object(U.jsx)(O.a,{in:I,children:Object(U.jsxs)("div",{className:"app-toolbar-options",children:[Object(U.jsxs)(h.a,{component:"fieldset",children:[Object(U.jsx)(x.a,{component:"legend",children:"\uc218\uc815\ud560 \uc704\uce58"}),Object(U.jsxs)(m.a,{row:!0,"aria-label":"gender",name:"row-radio-buttons-group",value:X,onChange:function(e){Y(e.target.value)},children:[Object(U.jsx)(f.a,{value:"front",control:Object(U.jsx)(g.a,{}),label:"\uc55e"}),Object(U.jsx)(f.a,{value:"back",control:Object(U.jsx)(g.a,{}),label:"\ub4a4"})]})]}),Object(U.jsx)(b.a,{variant:"caption",children:"\uc67c\ucabd \ud074\ub9ad: \uc9c0\uc810 \ucd94\uac00"}),Object(U.jsx)(b.a,{variant:"caption",children:"\uc624\ub978\ucabd \ud074\ub9ad: \uc9c0\uc810 \uc81c\uac70"})]})})]})}),Object(U.jsx)(j.a,{className:"app-save",children:Object(U.jsxs)("div",{className:"app-save-layout",children:[Object(U.jsx)(u.a,{color:"secondary",onClick:function(){localStorage.setItem("paths",JSON.stringify(_)),e("\uc791\uc5c5 \ub0b4\uc5ed\uc744 \ube0c\ub77c\uc6b0\uc800(localStorage)\uc5d0 \uc800\uc7a5\ud558\uc600\uc2b5\ub2c8\ub2e4.",{variant:"success"})},startIcon:Object(U.jsx)(z.a,{}),children:Object(U.jsx)(b.a,{variant:"subtitle1",children:"\uc791\uc5c5 \ub0b4\uc5ed \uc800\uc7a5"})}),Object(U.jsx)(u.a,{onClick:function(){re(JSON.stringify(_),"paths.json")},startIcon:Object(U.jsx)(A.a,{}),children:Object(U.jsx)(b.a,{variant:"subtitle1",children:"JSON\uc73c\ub85c \ub2e4\uc6b4\ub85c\ub4dc"})}),Object(U.jsx)(u.a,{onClick:function(){var e=["datatype;x;y"];_.forEach((function(t){t.points.forEach((function(n){e.push("".concat(t.name,";").concat(n.lat,";").concat(n.lng))}))})),re(e.join("\n"),"paths.csv")},startIcon:Object(U.jsx)(R.a,{}),children:Object(U.jsx)(b.a,{variant:"subtitle1",children:"CSV\ub85c \ub2e4\uc6b4\ub85c\ub4dc"})})]})}),Object(U.jsxs)(v.a,{open:P,onClose:le,children:[Object(U.jsx)(C.a,{children:"\uacbd\ub85c \uc774\ub984 \uc218\uc815"}),Object(U.jsxs)(k.a,{children:[Object(U.jsx)(N.a,{children:"\uacbd\ub85c \uc774\ub984\uc744 \uc124\uc815\ud574\uc8fc\uc138\uc694."}),Object(U.jsx)(y.a,{autoFocus:!0,margin:"dense",label:"\uc0c8 \uacbd\ub85c \uc774\ub984",fullWidth:!0,variant:"standard",value:V,onChange:function(e){H(e.target.value)}})]}),Object(U.jsxs)(S.a,{children:[Object(U.jsx)(u.a,{onClick:le,children:"\ucde8\uc18c"}),Object(U.jsx)(u.a,{onClick:function(){var t=_[ce].name;Object(l.a)(_)[ce].name=V,W(!1),e('"'.concat(t,'"\uc744 "').concat(V,'"\uc73c\ub85c \uc218\uc815\ud558\uc600\uc2b5\ub2c8\ub2e4.'),{variant:"success"})},children:"\ud655\uc778"})]})]})]})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,185)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),s(e),o(e)}))};o.a.render(Object(U.jsx)(a.a.StrictMode,{children:Object(U.jsx)(i.a,{maxSnack:3,children:Object(U.jsx)(W,{})})}),document.getElementById("root")),q()}},[[122,1,2]]]);
//# sourceMappingURL=main.ed416799.chunk.js.map