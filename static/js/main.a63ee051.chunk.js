(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{214:function(e,t,a){e.exports=a(414)},414:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),o=a(16),s=a(27),i=a(26),u=a(45),m=a(46),d=a(48),b=a(47),p=a(5),f=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(i.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state),e.props.signIn(e.state)},e}return Object(m.a)(a,[{key:"render",value:function(){return this.props.uid?r.a.createElement(s.a,{to:"/"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"container",autoComplete:"off",style:{marginTop:"30px"},onSubmit:this.handleSubmit},r.a.createElement("legend",null," ",r.a.createElement("h4",null,"Sign In")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Enter Email"),r.a.createElement("input",{type:"email",className:"form-control",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Enter Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"password",onChange:this.handleChange})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"SignIn")))}}]),a}(n.Component),h=Object(p.b)((function(e){return console.log(e),{uid:e.firebase.auth.uid}}),(function(e){return{signIn:function(t){return e(function(e){return function(t,a,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(e.email,e.password).then((function(){t({type:"SIGN_IN"})})).catch((function(e){t({type:"SIGN_IN_ERR"},e)}))}}(t))}}}))(f),E=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(i.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state),e.props.signUp(e.state)},e}return Object(m.a)(a,[{key:"render",value:function(){return this.props.uid?r.a.createElement(s.a,{to:"/"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"container",autoComplete:"off",style:{marginTop:"30px"},onSubmit:this.handleSubmit},r.a.createElement("legend",null," ",r.a.createElement("h4",null,"Sign Up")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Enter Email"),r.a.createElement("input",{type:"email",className:"form-control",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Enter Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"password",onChange:this.handleChange})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"SignUp")))}}]),a}(n.Component),g=Object(p.b)((function(e){return console.log(e),{uid:e.firebase.auth.uid}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){(0,n.getFirebase)().auth().createUserWithEmailAndPassword(e.email,e.password).then((function(){t({type:"SIGN_UP"})})).catch((function(e){t({type:"SIGN_UP_ERR"},e)}))}}(t))}}}))(E),k=a(60),O=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={task:"",checked:"false"},e.handleChange=function(t){e.setState(Object(i.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.addTask(e.state),document.getElementById("addTaskForm").reset(),console.log(e.state)},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{id:"addTaskForm",className:"container",autoComplete:"off",style:{marginTop:"30px"},onSubmit:this.handleSubmit},r.a.createElement("legend",null," "),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"task"},"Add a task"),r.a.createElement("input",{type:"text",className:"form-control",id:"task",onChange:this.handleChange})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Add")))}}]),a}(n.Component),v=Object(p.b)(null,(function(e){return{addTask:function(t){return e(function(e){return function(t,a,n){var r=(0,n.getFirebase)().firestore(),c=a().firebase.auth.uid;r.collection("tasks").add(Object(k.a)(Object(k.a)({},e),{},{authorId:c,date:new Date})).then((function(){t({type:"ADD_TASK",task:e})})).catch((function(e){t({type:"ADD_TASK_ERR",err:e})}))}}(t))}}}))(O),y=a(212),N=a.n(y),S=function(e){var t=e.checked,a=e.onClick;return!0===t?r.a.createElement("span",{className:"material-icons text-success",style:{cursor:"pointer"},onClick:a},"check_circle_outline"):r.a.createElement("span",{className:"material-icons text-muted",style:{cursor:"pointer"},onClick:a},"check_circle_outline")},j=Object(p.b)(null,(function(e){return{removeTask:function(t){return e(function(e){return function(t,a,n){(0,n.getFirebase)().firestore().collection("tasks").doc(e.id).delete().then((function(){t({type:"REMOVE_TASK"})})).catch((function(e){t({type:"REMOVE_TASK_ERR",err:e})}))}}(t))},toggleChecked:function(t){return e(function(e){return function(t,a,n){(0,n.getFirebase)().firestore().collection("tasks").doc(e.id).set(Object(k.a)(Object(k.a)({},e),{},{checked:!e.checked}),{merge:!0}).then((function(){t({type:"TOGGLE_CHECKED",task:e})})).catch((function(e){t({type:"TOGGLE_CHECKED_ERR",err:e})}))}}(t))}}}))((function(e){var t=e.task,a=e.removeTask,n=e.toggleChecked;return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("th",null,t.task),r.a.createElement("td",null,N()(t.date.toDate()).calendar()),r.a.createElement("td",null,r.a.createElement(S,{onClick:function(){return function(e){n(e)}(t)},checked:t.checked})),r.a.createElement("td",null,r.a.createElement("span",{className:"material-icons text-danger",style:{cursor:"pointer"},onClick:function(){return function(e){a(e)}(t)}},"delete"))))})),C=a(24),_=a(25),A=Object(C.d)(Object(p.b)((function(e){return console.log(e),{tasks:e.firestore.ordered.tasks,uid:e.firebase.auth.uid}})),Object(_.firestoreConnect)((function(e){return[{collection:"tasks",where:["authorId","==",e.uid],orderBy:["date","desc"]}]})))((function(e){var t=e.tasks;return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",{className:"table table-dark container",style:{marginTop:"30px"}},r.a.createElement("thead",null,r.a.createElement("tr",{className:"text-info"},r.a.createElement("th",{scope:"col"},"Tasks"),r.a.createElement("th",{scope:"col"},"Added On"),r.a.createElement("th",{scope:"col"},"Status"),r.a.createElement("th",{scope:"col"},"Delete"))),r.a.createElement("tbody",null,t&&t.map((function(e){return r.a.createElement(j,{task:e,key:e.id})})))))})),I=Object(p.b)((function(e){return{uid:e.firebase.auth.uid}}))((function(e){return e.uid?r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement(A,null)):r.a.createElement(s.a,{to:"/signin"})})),w=Object(p.b)((function(e){return{uid:e.firebase.auth.uid}}),(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGN_OUT"})}))}))}}}))((function(e){var t=e.signOut;return e.uid?r.a.createElement(o.b,{to:"/signin",className:"nav-link",onClick:t},"Sign Out"):r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{to:"/signup",className:"nav-link"},"Sign Up"),r.a.createElement(o.b,{to:"/signin",className:"nav-link"},"Sign In"))})),R=Object(p.b)((function(e){console.log(e)}))((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-light bg-light d-flex justify-content-center"},r.a.createElement(o.b,{to:"/",className:"navbar-brand"},r.a.createElement("h3",null,"TodoApp")),r.a.createElement(w,null)))})),F=a(8);a(371);var T=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement(F.a,null),r.a.createElement(R,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/signin",component:h}),r.a.createElement(s.b,{path:"/signup",component:g}),r.a.createElement(s.b,{path:"/",component:I}))))},D=(a(372),a(88)),G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TASK":return F.b.success("Added a task"),e;case"ADD_TASK_ERR":return F.b.error("An error occurred"),e;case"REMOVE_TASK":return F.b.warn("A task was removed..."),e;case"REMOVE_TASK_ERR":return F.b.error("A task remove error occured...."),e;case"TOGGLE_CHECKED":return F.b.info("A task status changed..."),e;case"TOGGLE_CHECKED_ERR":return F.b.error("A task status change error occured..."),e;default:return e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(F.b)("Welcome back.."),e;case"SIGN_IN_ERR":return F.b.error("Sign in error..."),e;case"SIGN_OUT":return Object(F.b)("You signed out.."),e;case"SIGN_UP":return Object(F.b)("Welcome.."),e;case"SIGN_UP_ERR":return F.b.error("Sign up error..."),e;default:return e}},K=Object(C.c)({firebase:_.firebaseReducer,firestore:D.firestoreReducer,task:G,auth:x}),U=a(213),P=a(89),L=a.n(P);a(408),a(412);L.a.initializeApp({apiKey:"AIzaSyB5nMtLlWC9TaNamN3SWO-1sozXbeih2do",authDomain:"todo-d1b7e.firebaseapp.com",databaseURL:"https://todo-d1b7e.firebaseio.com",projectId:"todo-d1b7e",storageBucket:"todo-d1b7e.appspot.com",messagingSenderId:"456019758360",appId:"1:456019758360:web:928bbecc2dab4b313d226d"}),L.a.firestore();var W=L.a,B=Object(C.e)(K,Object(C.a)(U.a.withExtraArgument({getFirebase:_.getFirebase}))),M={firebase:W,config:{},dispatch:B.dispatch,createFirestoreInstance:D.createFirestoreInstance};function H(e){var t=e.children,a=Object(p.c)((function(e){return e.firebase.auth}));return Object(_.isLoaded)(a)?t:r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"spinner-grow text-primary",style:{width:"7rem",height:"7rem"},role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))}l.a.render(r.a.createElement(p.a,{store:B},r.a.createElement(_.ReactReduxFirebaseProvider,M,r.a.createElement(H,null,r.a.createElement(T,null)))),document.getElementById("root"))}},[[214,1,2]]]);
//# sourceMappingURL=main.a63ee051.chunk.js.map