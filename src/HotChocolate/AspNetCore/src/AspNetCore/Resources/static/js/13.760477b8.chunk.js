(this["webpackJsonp@banana-cake-pop/main"]=this["webpackJsonp@banana-cake-pop/main"]||[]).push([[13],{632:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return L}));var c=n(386),r=n(432),i=n(389),a=n(486),o=n(383),u=n(11),s=n.n(u),d=n(392),l=n(382),b=n(385),j=n(395),h=n(405),f=n(407),O=n(394),v=n(404),p=n(390),m=n(408),x=n(148),S=n(548),g=n(620),w=n(629),k=(n(247),n(80)),E=n(68),V=n(88),C="schema-sdl",D=Object(E.memo)((function(e){var t=e.documentId,n=Object(o.c)(v.b.selectActive,(function(e,t){return(null===e||void 0===e?void 0:e.hash)===(null===t||void 0===t?void 0:t.hash)})),c=function(e,t){var n=Object(O.c)(p.c.selectActiveSchemaSdlEditorViewState),c=Object(b.i)(),r=Object(E.useRef)(null),i=Object(O.c)(p.c.selectActiveFocusedElement),a=Object(o.b)(),u=Object(h.a)((function(t){var n,c=null!==(n=t.saveViewState())&&void 0!==n?n:void 0;a(p.a.changeSchemaSdlEditorViewState({id:e,schemaSdlEditorViewState:c}))}),250,[e,a]);return Object(E.useEffect)((function(){var o=r.current,s=Object(l.a)(Object(l.a)({},f.a),{},{model:t,readOnly:!0,theme:"light"}),d=k.editor.create(o,s);return window.setTimeout((function(){return d.render()}),500),c.register(C,d),Object(j.f)(d),n&&d.restoreViewState(n),"schema-sdl-editor"===i&&d.focus(),d.onDidChangeCursorPosition((function(){return u(d)})),d.onDidChangeCursorSelection((function(){return u(d)})),d.onDidScrollChange((function(){return u(d)})),d.onDidFocusEditorText((function(){a(p.a.changeFocus({id:e,focusedElement:"schema-sdl-editor"}))})),function(){c.unregister(C),d.dispose()}}),[e,c,i,n,t,a,u]),Object(h.b)(C,r),r}(t,function(e,t){var n=Object(b.j)(),c=Object(E.useRef)(k.editor.createModel("","graphql"));return c.current.updateOptions({indentSize:2,insertSpaces:!0,tabSize:2}),Object(E.useEffect)((function(){(null===t||void 0===t?void 0:t.exists)?function(e){return I.apply(this,arguments)}(t.endpoint).then((function(e){c.current.setValue(e)})).catch((function(t){n.error(e,"Could not get SDL. Please reload the schema and try again.",Object(l.a)({},t))})):c.current.setValue("")}),[e,n,c,t]),c.current}(t,n));return x.api.schemaInfo=null!==n&&void 0!==n?n:null,Object(V.jsx)(i.o,{ref:c})}));function I(){return(I=Object(d.a)(s.a.mark((function e(t){var n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.a)(t);case 2:if(!(n=e.sent)){e.next=6;break}return c=Object(g.a)(Object(w.a)(n.result)).replace(/""""""/gi,""),e.abrupt("return",Object(m.g)(c));case 6:return e.abrupt("return","");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=n(399),A=n(483),F=n(393),z=function(e){var t=e.documentId,n=e.isFetchingSchema;return Object(V.jsxs)(i.c,{children:[Object(V.jsx)(i.i,{children:Object(V.jsx)(A.a,{documentId:t})}),Object(V.jsx)(i.h,{}),Object(V.jsx)(J,{disabled:n})]})},J=function(e){var t=e.disabled,n=Object(b.i)(),c=Object(o.c)(v.b.selectActive,(function(e,t){return(null===e||void 0===e?void 0:e.hash)===(null===t||void 0===t?void 0:t.hash)}));return Object(V.jsx)(y.c,{disabled:t||!c,title:"Download as SDL",onClick:function(){var e,t;if(null===c||void 0===c?void 0:c.exists){var r=null===(e=n.get("schema-sdl"))||void 0===e||null===(t=e.getModel())||void 0===t?void 0:t.getValue();if(r){var i=new Blob([r],{type:"text/plain"});Object(j.h)(i)}}},children:Object(V.jsx)(F.j,{})})},L=function(){var e=Object(o.c)(c.c.selectActiveId),t=Object(a.a)();return Object(V.jsx)(i.k,{children:Object(V.jsxs)(i.a,{children:[Object(V.jsx)(z,{documentId:e,isFetchingSchema:t}),t?Object(V.jsx)(r.a,{}):Object(V.jsx)(D,{documentId:e})]})})}}}]);