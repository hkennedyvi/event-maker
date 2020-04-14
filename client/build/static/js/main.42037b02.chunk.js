(this["webpackJsonpevent-maker"]=this["webpackJsonpevent-maker"]||[]).push([[0],{112:function(e,a,t){e.exports=t.p+"static/media/user-image-temporary.f728a412.png"},137:function(e,a,t){e.exports=t(205)},156:function(e,a,t){},157:function(e,a,t){},178:function(e,a,t){},197:function(e,a,t){},198:function(e,a,t){},199:function(e,a,t){},200:function(e,a,t){},201:function(e,a,t){},202:function(e,a,t){},203:function(e,a,t){},204:function(e,a,t){},205:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(8),o=t.n(r),c=t(263),i=t(264),s=t(265),m=t(11),u=t(56),d=t.n(u),g=t(75);t(156);const E={position:"absolute",width:"100%",height:"90%",zIndex:0};class p extends l.a.Component{constructor(e){super(e);const a=this.props.initialCenter,t=a.lat,n=a.lng;this.state={currentLocation:{lat:t,lng:n}}}componentDidUpdate(e,a){e.google!==this.props.google&&this.loadMap(),a.currentLocation!==this.state.currentLocation&&this.recenterMap()}recenterMap(){const e=this.map,a=this.state.currentLocation,t=this.props.google.maps;if(e){let n=new t.LatLng(a.lat-.01,a.lng);e.panTo(n)}}componentDidMount(){this.props.centerAroundCurrentLocation&&navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition(e=>{this.props.handleLocationGrab({lat:e.coords.latitude,lng:e.coords.longitude});const a=e.coords;this.setState({currentLocation:{lat:a.latitude,lng:a.longitude}})}),this.loadMap()}loadMap(){if(this.props&&this.props.google){const e=this.props.google.maps,a=this.refs.map,t=o.a.findDOMNode(a);let n=this.props.zoom;const l=this.state.currentLocation,r=l.lat,c=l.lng,i=new e.LatLng(r,c),s=Object.assign({},{center:i,zoom:n});this.map=new e.Map(t,s)}}renderChildren(){const e=this.props.children;if(e)return l.a.Children.map(e,e=>{if(e)return l.a.cloneElement(e,{map:this.map,google:this.props.google,mapCenter:this.state.currentLocation})})}render(){const e=Object.assign({},E);return l.a.createElement("div",{className:"map"},l.a.createElement("div",{style:e,ref:"map"},"Loading map..."),this.renderChildren())}}var v=p;p.defaultProps={zoom:14,initialCenter:{lat:-1.2884,lng:36.8233},centerAroundCurrentLocation:!1,visible:!0};var h=t(240),b=t(268),f=t(242),y=t(250),x=t(244),w=t(243),C=t(266),N=t(249),j=t(245),O=t(261),k=t(238);t(157);const S=Object(k.a)(e=>({root:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"rgba(46, 34, 68, 1)",height:48,padding:"0 30px"},root1:{background:"linear-gradient(45deg, #413691 30%, #e73387 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px"},root2:{background:"rgba(255, 255, 255, 0.3)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px"},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}));function L(e){const a=S(),t=l.a.useState(""),n=Object(m.a)(t,2),r=n[0],o=(n[1],l.a.useState(!1)),c=Object(m.a)(o,2),i=c[0],s=c[1],u=a=>{s(!1),e.handlePost(a)};return l.a.createElement("div",null,l.a.createElement(h.a,{id:"event-btn",className:a.root,onClick:()=>{s(!0)}},"Curate Event"),l.a.createElement(f.a,{open:i,onClose:u,"aria-labelledby":"form-dialog-title"},l.a.createElement(w.a,{id:"form-dialog-title"},"What's the haps?"),l.a.createElement(x.a,null,l.a.createElement(j.a,{variant:"outlined",id:"select",className:a.formControl},l.a.createElement(C.a,{id:"demo-simple-select-outlined-label"},"Category"),l.a.createElement(O.a,{labelId:"demo-simple-select-outlined-label",name:"category",value:r,onChange:a=>{e.handleChange(a)},label:"Category"},l.a.createElement(N.a,{value:"Sports"},"Sports"),l.a.createElement(N.a,{value:"Entertainment"},"Entertainment"),l.a.createElement(N.a,{value:"Music"},"Music"),l.a.createElement(N.a,{value:"Outdoors"},"Outdoors"),l.a.createElement(N.a,{value:"Errands"},"Errands"),l.a.createElement(N.a,{value:"Just Hanging"},"Just Hanging"),l.a.createElement(N.a,{value:"Other"},"Other"),l.a.createElement(N.a,{value:"None"},l.a.createElement("em",null,"None")))),l.a.createElement(b.a,{autoFocus:!0,margin:"dense",id:"name",label:"Event Name",type:"text",fullWidth:!0,onChange:a=>e.handleChange(a)}),l.a.createElement(b.a,{margin:"dense",id:"location",label:"Location (if same as current location leave blank)",type:"text",fullWidth:!0,onChange:a=>e.handleChange(a)}),l.a.createElement(j.a,{variant:"outlined",id:"select",className:a.formControl},l.a.createElement(C.a,{id:"demo-simple-select-outlined-label"},"Participants"),l.a.createElement(O.a,{labelId:"demo-simple-select-outlined-label",name:"participants",value:r,onChange:a=>{e.handleChange(a)},label:"Participants"},l.a.createElement(N.a,{value:"Any"},l.a.createElement("em",null,"Any")),l.a.createElement(N.a,{value:1},"1"),l.a.createElement(N.a,{value:2},"2"),l.a.createElement(N.a,{value:3},"3"),l.a.createElement(N.a,{value:4},"4"),l.a.createElement(N.a,{value:5},"5"),l.a.createElement(N.a,{value:6},"6"),l.a.createElement(N.a,{value:7},"7"),l.a.createElement(N.a,{value:8},"8"),l.a.createElement(N.a,{value:9},"9"),l.a.createElement(N.a,{value:10},"10"),l.a.createElement(N.a,{value:11},"11"),l.a.createElement(N.a,{value:12},"12"),l.a.createElement(N.a,{value:"12+"},"12+"))),l.a.createElement(j.a,{required:!0,variant:"outlined",id:"select",className:a.formControl},l.a.createElement(C.a,{id:"demo-simple-select-required-label"},"Duration"),l.a.createElement(O.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-required",name:"duration",value:r,onChange:a=>{e.handleChange(a)},label:"Duration"},l.a.createElement(N.a,{value:"Any"},l.a.createElement("em",null,"Any")),l.a.createElement(N.a,{value:"30 minutes"},"30 min"),l.a.createElement(N.a,{value:"45 minutes"},"45 min"),l.a.createElement(N.a,{value:"1 hour"},"1 hour"),l.a.createElement(N.a,{value:"1 1/2 hours"},"1.5 hours"),l.a.createElement(N.a,{value:"2 hours"},"2 hours"),l.a.createElement(N.a,{value:"2 1/2 hours"},"2.5 hours"),l.a.createElement(N.a,{value:"3 hours"},"3 hours"),l.a.createElement(N.a,{value:"3 1/2 hours"},"3.5 hours"),l.a.createElement(N.a,{value:"4 hours"},"4 hours"),l.a.createElement(N.a,{value:"4 1/2 hours"},"4.5 hours"),l.a.createElement(N.a,{value:"5 hours"},"5 hours"),l.a.createElement(N.a,{value:"5+ hours"},"5 + hours"))),l.a.createElement(b.a,{margin:"dense",id:"notes",label:"Notes",type:"text",fullWidth:!0,onChange:a=>e.handleChange(a)})),l.a.createElement(y.a,null,l.a.createElement(h.a,{className:a.root2,type:"submit",onClick:()=>{s(!1)}},"Cancel"),l.a.createElement(h.a,{className:a.root1,type:"submit",onClick:u},"Post"))))}var I=t(30),B=t.n(I),P={createEvent:function(e){return B.a.post("/api/events",e)},getPostedEvents:function(){return B.a.get("/api/events")},getEventsByCreator:function(e){return B.a.get("/api/events?creator="+e)},getEventsByAttendees:function(e){return B.a.get("/api/events?attendees="+e)},updateParticipants:function(e,a){return B.a.put("/api/events",e,a)},isLoggedIn:function(e){console.log("is logged in"),B.a.get("/api/auth/checkToken").then(e=>{200!==e.status&&this.logout(),200===e.status&&console.log(e)}).catch(e=>{this.logout()})},logout:function(){console.log("logged out"),B.a.get("/api/auth/logout").then(e=>{window.location="/"}).catch(e=>{console.log(e)})}},D=t(103),R=t.n(D);t(178);const W=Object(k.a)({root:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"rgba(46, 34, 68, 1)",height:48,padding:"0 30px"}});var T=function(e){const a=Object(n.useState)({}),t=Object(m.a)(a,2),r=(t[0],t[1]),o=W(),c=Object(n.useState)(0),i=Object(m.a)(c,2),s=i[0],u=i[1],d=unescape(document.cookie.split("=")[1]);return Object(n.useEffect)(()=>{P.getPostedEvents().then(e=>{console.log(e),r(e.data)}).catch(e=>console.log(e))},[]),l.a.createElement("div",{className:"event-card"},e.allEvents&&e.allEvents.length>0?l.a.createElement("div",null,l.a.createElement(w.a,null,l.a.createElement("h3",null,e.allEvents[s].name)),l.a.createElement("h6",null,e.allEvents[s].location),l.a.createElement("h5",null,l.a.createElement("strong",null,"# participants needed:")," ",e.allEvents[s].participants),l.a.createElement("h5",null,l.a.createElement("strong",null,"started:")," ",R()(e.allEvents[s].created_at).format("lll")),l.a.createElement("h5",null,l.a.createElement("strong",null,"duration:")," ",e.allEvents[s].duration),l.a.createElement("h6",null,e.allEvents[s].notes),l.a.createElement("br",null),l.a.createElement(h.a,{id:"join-btn",className:o.root,onClick:function(){window.confirm("Are you sure you would like to join this event?")&&(window.location.reload(!1),P.updateParticipants({_id:e.allEvents[s]._id,user:d}).then(e=>{console.log("Database updated.")}).catch(e=>console.log(e)))},disabled:e.allEvents[s].participants<=0||""},"Join"),l.a.createElement(h.a,{id:"next-btn",className:o.root,onClick:function(){u(s===e.allEvents.length-1?0:s+1)}},"Next Event")):"")};var A=Object(g.GoogleApiWrapper)({apiKey:"AIzaSyCRTz31ipS9i5nHfyWIs-mcSIQmWRxXTec"})((function(e){const a=Object(n.useState)({showingInfoWindow:!1,activeMarker:{},selectedPlace:{}}),t=Object(m.a)(a,2),r=t[0];return t[1],l.a.createElement("div",null,l.a.createElement(v,{handleLocationGrab:e.handleLocationGrab,centerAroundCurrentLocation:!0,google:e.google},l.a.createElement(g.Marker,{name:"current location"}),l.a.createElement(g.InfoWindow,{marker:r.activeMarker,visible:r.showingInfoWindow,onClose:e=>{this.state.showingInfoWindow&&this.setState({showingInfoWindow:!1,activeMarker:null})}},l.a.createElement("div",null,l.a.createElement("h4",null,r.selectedPlace.name)))),l.a.createElement(L,{handlePost:e.handlePost,handleChange:e.handleChange}),l.a.createElement(T,{event:e.event,allEvents:e.allEvents,handleEventJoin:e.handleEventJoin}))})),M=t(19);t(197);var G=()=>l.a.createElement("div",{className:"MDBContainer"},l.a.createElement(M.c,{id:"Carousel",activeItem:1,length:3,showControls:!1,showIndicators:!1,className:"Carousel"},l.a.createElement(M.e,null,l.a.createElement(M.f,{itemId:"1"},l.a.createElement(M.l,null,l.a.createElement("img",{className:"Carousel",src:"https://i.imgur.com/RV6evxq.png",alt:"First slide"}),l.a.createElement(M.h,{overlay:"black-light"})),l.a.createElement(M.d,null,l.a.createElement("h3",{className:"slide-1"},"You're in Cahoots!"))),l.a.createElement(M.f,{itemId:"2"},l.a.createElement(M.l,null,l.a.createElement("img",{className:"d-block w-100",src:"https://i.imgur.com/bN61ENB.png",alt:"Second slide"}),l.a.createElement(M.h,{overlay:"black-strong"})),l.a.createElement(M.d,null,l.a.createElement("h3",{className:"slide-2"},"Make your next get together alittle more neighborly!"))),l.a.createElement(M.f,{itemId:"3"},l.a.createElement(M.l,null,l.a.createElement("img",{className:"d-block w-100",src:"https://i.imgur.com/dzYcrMV.png",alt:"Third slide"}),l.a.createElement(M.h,{overlay:"black-slight"})),l.a.createElement(M.d,null,l.a.createElement("h3",{className:"slide-3"},"Spontaneously commit to something new!",l.a.createElement("br",null),"Click join!"))))));var q=function(){const e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)({}),c=Object(m.a)(o,2),i=c[0],s=c[1],u=Object(n.useState)(),g=Object(m.a)(u,2),E=g[0],p=g[1],v=Object(n.useState)(),h=Object(m.a)(v,2),b=h[0],f=h[1],y=Object(n.useState)(),x=Object(m.a)(y,2),w=x[0],C=x[1],N=Object(n.useState)(),j=Object(m.a)(N,2),O=j[0],k=j[1];return Object(n.useEffect)(()=>{P.isLoggedIn(),P.getPostedEvents().then(e=>{r(e.data)}).catch(e=>console.log(e))},[]),l.a.createElement(A,{handlePost:function(e){e.preventDefault(),P.createEvent({category:E,name:i.name,location:O,participants:b,duration:w,notes:i.notes,creator:"email"}).then(console.log("Event saved to database.")).catch(e=>console.log(e))},handleChange:function(e){"category"==e.target.name&&p(e.target.value);let a=document.getElementById("name"),t=document.getElementById("location");"participants"==e.target.name&&f(e.target.value),"duration"==e.target.name&&C(e.target.value);let n=document.getElementById("notes");s({name:a.value,location:t.value,notes:n.value})},handleLocationGrab:function(e){let a=e.lat,t=e.lng;d.a.setApiKey("AIzaSyCRTz31ipS9i5nHfyWIs-mcSIQmWRxXTec"),d.a.setLanguage("en"),d.a.setRegion("es"),d.a.enableDebug(),d.a.fromLatLng(a,t).then(e=>{const a=e.results[0].formatted_address;console.log(a),k(a)},e=>{console.error(e)})},event:i,allEvents:t})},U=t(260),F=t(251),z=t(252),J=t(63),H=t(253);t(198);const _=Object(k.a)(e=>({root:{"& > *":{marginTop:e.spacing(5),display:"flex",flexDirection:"column"}},cardRoot:{textAlign:"center",display:"flex",flexDirection:"column",flexWrap:"wrap"},textfield:{marginBottom:15},formRoot:{display:"flex",flexDirection:"column",flexWrap:"wrap"},submitBtn:{backgroundColor:"#051937",color:"ffffff"}}));var K=function(e){const a=_();return l.a.createElement("div",{className:a.root},l.a.createElement(U.a,{display:"flex"},l.a.createElement(F.a,{className:a.cardRoot},l.a.createElement(z.a,null,l.a.createElement(J.a,{variant:"h5",component:"h2"},"Sign Up"),l.a.createElement(H.a,null,l.a.createElement("form",{className:a.formRoot,onSubmit:a=>{e.handleSubmit(a)},action:"POST"},l.a.createElement(b.a,{className:a.textfield,required:!0,id:"outlined-required",type:"email",label:"Email",name:"email",variant:"outlined"}),l.a.createElement(b.a,{className:a.textfield,required:!0,id:"outlined-password-input",label:"Password",type:"password",name:"password",variant:"outlined"}),l.a.createElement(b.a,{className:a.textfield,required:!0,id:"outlined-password-input",label:"Confirm Password",type:"password",name:"confirm",variant:"outlined"}),l.a.createElement(h.a,{className:a.submitBtn,type:"submit",variant:"contained",color:"#051937"},"Sign Up")))),l.a.createElement(H.a,null,l.a.createElement(J.a,{variant:"p"},"Already a member?"),l.a.createElement(h.a,{className:a.submitBtn,type:"submit",variant:"contained",color:"#051937",href:"/login"},"Login")))))};var Q=function(){const e=Object(n.useState)({}),a=Object(m.a)(e,2),t=(a[0],a[1]);return l.a.createElement(K,{handleSubmit:e=>{e.preventDefault();const a={email:e.target.email.value,password:e.target.password.value,confirmPassword:e.target.confirm.value};t(a),a.password!==a.confirmPassword?alert("Passwords don't match"):B.a.post("api/auth/register",a).then(e=>{!0===e.data.success&&(window.location="/home")}).catch(e=>{console.log(e),console.log(e.response)})}})};t(199);const V=Object(k.a)(e=>({root:{"& > *":{marginTop:e.spacing(1),display:"flex",flexDirection:"column"}},cardRoot:{textAlign:"center",display:"flex",flexDirection:"column",flexWrap:"wrap",marginTop:"8%",[e.breakpoints.down("md")]:{marginTop:"15%"}},textfield:{marginBottom:15},formRoot:{display:"flex",flexDirection:"column",flexWrap:"wrap"},submitBtn:{backgroundColor:"#051937",color:"ffffff"}}));var X=function(e){const a=V();return l.a.createElement("div",{className:a.root},l.a.createElement(U.a,{display:"flex"},l.a.createElement(F.a,{className:a.cardRoot},l.a.createElement(z.a,null,l.a.createElement(J.a,{variant:"h5",component:"h2"},"Log In"),l.a.createElement(H.a,null,l.a.createElement("form",{className:a.formRoot,onSubmit:a=>{e.handleSubmit(a)},action:"POST"},l.a.createElement(b.a,{className:a.textfield,required:!0,id:"outlined-required",type:"email",label:"Email",name:"email",variant:"outlined"}),l.a.createElement(b.a,{className:a.textfield,required:!0,id:"outlined-password-input",label:"Password",type:"password",name:"password",variant:"outlined"}),l.a.createElement(h.a,{className:a.submitBtn,type:"submit",variant:"contained",color:"#051937"},"Login")))),l.a.createElement(H.a,null,l.a.createElement(J.a,{variant:"p"},"Not a member?"),l.a.createElement(h.a,{className:a.submitBtn,type:"submit",variant:"contained",color:"#051937",href:"/"},"Sign Up")))))};var Y=function(){const e=Object(n.useState)({}),a=Object(m.a)(e,2),t=(a[0],a[1]);return l.a.createElement("div",{className:"signUpForm"},l.a.createElement(X,{handleSubmit:e=>{e.preventDefault();const a={email:e.target.email.value,password:e.target.password.value};t(a),B.a.post("/api/auth/login",a).then(e=>{!0===e.data.success&&(window.location="/home")}).catch(e=>{console.log(e),console.log(e.response)})}}))};var Z=function(e){return Object(n.useEffect)(()=>{P.logout()},[]),l.a.createElement("div",null,"Logout")},$=t(67),ee=t.n($),ae=t(108),te=t(119),ne=t(121),le=t(262),re=t(254),oe=t(109),ce=t.n(oe),ie=t(110),se=t.n(ie),me=t(111),ue=t.n(me);t(200);const de=Object(k.a)(e=>({cards:{marginBottom:e.spacing(1),background:"linear-gradient(to right bottom, #051937, #2b275a, #5d2e77, #972d88, #d3208b);"},details:{marginLeft:e.spacing(3),marginBottom:e.spacing(1)}}));var ge=function(e){const a=de();return l.a.createElement("div",null,l.a.createElement(F.a,{className:a.cards},l.a.createElement(z.a,null,l.a.createElement("div",{className:""},l.a.createElement(w.a,{id:"simple-dialog-title"},e.name.toUpperCase()," ",l.a.createElement("i",{className:"fas fa-futbol"})),l.a.createElement("div",{className:a.details},l.a.createElement(J.a,{variant:"body1"},"Category: ",e.category.toUpperCase()),l.a.createElement(J.a,{variant:"body2"},"Location: ",e.location),l.a.createElement(J.a,{variant:"body2"},"Length: ",e.duration," hours"))))))};const Ee=Object(k.a)(e=>({cards:{marginBottom:e.spacing(1),background:"linear-gradient(to left top, #051937, #2b275a, #5d2e77, #972d88, #d3208b);"},details:{marginLeft:e.spacing(3),marginBottom:e.spacing(1)}}));var pe=function(e){const a=Ee();return l.a.createElement("div",null,l.a.createElement(F.a,{className:a.cards},l.a.createElement(z.a,null,l.a.createElement("div",{className:""},l.a.createElement(w.a,{id:"simple-dialog-title"},e.name.toUpperCase()," ",l.a.createElement("i",{className:"fas fa-futbol"})),l.a.createElement("div",{className:a.details},l.a.createElement(J.a,{variant:"body1"},"Category: ",e.category.toUpperCase()),l.a.createElement(J.a,{variant:"body2"},"Location: ",e.location),l.a.createElement(J.a,{variant:"body2"},"Length: ",e.duration," hours"))))))};const ve=Object(k.a)(e=>({cards:{marginBottom:e.spacing(1),background:"linear-gradient(0.85turn,  rgba(19, 34, 119, 0.9), rgba(231, 51, 156, 0.9), rgba(253, 160, 0, 0.9))"},details:{marginLeft:e.spacing(3),marginBottom:e.spacing(1)}}));var he=function(e){const a=ve();return l.a.createElement("div",null,l.a.createElement(F.a,{className:a.cards},l.a.createElement(z.a,null,l.a.createElement("div",{className:"content"},l.a.createElement(w.a,{id:"simple-dialog-title"},e.name.toUpperCase()," ",l.a.createElement("i",{className:"fas fa-futbol"})),l.a.createElement("div",{className:a.details},l.a.createElement(J.a,{variant:"body1"},"Category: ",e.category),l.a.createElement(J.a,{variant:"body2"},"Location: ",e.location),l.a.createElement(J.a,{variant:"body2"},"Length: ",e.duration," hours"))))))};const be=Object(k.a)(e=>({cards:a=>({marginBottom:e.spacing(1),background:a.background}),details:{marginLeft:e.spacing(3),marginBottom:e.spacing(1)}}));var fe=function(e){const a=be(e);return l.a.createElement("div",null,l.a.createElement(F.a,{className:a.cards},l.a.createElement(z.a,null,l.a.createElement("div",{className:a.details},l.a.createElement(J.a,{variant:"h4"},"No ",e.eventType),l.a.createElement(J.a,{variant:"body1"},"Return to the Dashboard to find or create an event!")))))};t(201);function ye(e){const a=e.children,t=e.value,n=e.index,r=Object(te.a)(e,["children","value","index"]);return l.a.createElement(J.a,Object.assign({component:"div",role:"tabpanel",hidden:t!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},r),t===n&&l.a.createElement(U.a,{p:3},a))}function xe(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}const we=Object(k.a)({section:{display:"flex",flexDirection:"column",flexGrow:1}});var Ce=function(e){const a=we(),t=l.a.useState(0),n=Object(m.a)(t,2),r=n[0],o=n[1];return l.a.createElement("div",{className:a.section},l.a.createElement(ne.a,{square:!0},l.a.createElement(le.a,{value:r,onChange:(e,a)=>{o(a)},variant:"fullWidth",indicatorColor:"secondary",textColor:"secondary","aria-label":"icon label tabs example"},l.a.createElement(re.a,Object.assign({icon:l.a.createElement(ce.a,null),label:"Current Event"},xe(0))),l.a.createElement(re.a,Object.assign({icon:l.a.createElement(se.a,null),label:"Previously Created"},xe(0))),l.a.createElement(re.a,Object.assign({icon:l.a.createElement(ue.a,null),label:"Previously Attended"},xe(0))))),l.a.createElement(ye,{className:a.tabPanel,value:r,index:0,currentEvent:e.currentEvent},(e=>0===e.currentEvent.length?l.a.createElement(fe,{eventType:"Current Events",background:"linear-gradient(0.85turn,  rgba(19, 34, 119, 0.9), rgba(231, 51, 156, 0.9), rgba(253, 160, 0, 0.9))"}):l.a.createElement(he,{category:e.currentEvent.category,name:e.currentEvent.name,location:e.currentEvent.location,duration:e.currentEvent.duration}))(e)),l.a.createElement(ye,{className:a.tabPanel,value:r,index:1,madeEvents:e.madeEvents},function(e){return 0===e.madeEvents.length?l.a.createElement(fe,{eventType:"Created Events",background:"linear-gradient(to right bottom, #051937, #2b275a, #5d2e77, #972d88, #d3208b);"}):e.madeEvents.map(e=>l.a.createElement(ge,{category:e.category,name:e.name,location:e.location,duration:e.duration}))}(e)),l.a.createElement(ye,{className:a.tabPanel,value:r,index:2,attendedEvents:e.attendedEvents},function(e){return 0===e.attendedEvents.length?l.a.createElement(fe,{eventType:"Attended Events",background:"linear-gradient(to left top, #051937, #2b275a, #5d2e77, #972d88, #d3208b);"}):e.attendedEvents.map(e=>l.a.createElement(pe,{category:e.category,name:e.name,location:e.location,duration:e.duration,creator:e.creator}))}(e)))},Ne=t(112),je=t.n(Ne);const Oe=Object(k.a)(e=>({rootUserInfo:{display:"flex",background:"linear-gradient(to top, #f17b41, #f4624f, #f14861, #e62f75, #d3208b);",flexGrow:.5,marginRight:e.spacing(3),[e.breakpoints.down("md")]:{marginTop:e.spacing(3),marginBottom:e.spacing(3),marginRight:0,display:"flex",flexDirection:"column",flexWrap:"wrap",flexGrow:1,justifyContent:"center",background:"linear-gradient(to right bottom, #f17b41, #f68338, #fa8c2c, #fc961d, #fda000);",padding:e.spacing(3)},[e.breakpoints.down("sm")]:{marginTop:e.spacing(3),marginBottom:e.spacing(3),marginRight:0,flexWrap:"wrap",flexGrow:1,justifyContent:"center",background:"linear-gradient(to right bottom, #f17b41, #f68338, #fa8c2c, #fc961d, #fda000);",padding:e.spacing(3)}},userInfoCard:{marginTop:e.spacing(3),marginRight:e.spacing(3),marginBottom:e.spacing(3),marginLeft:0,flexGrow:1,[e.breakpoints.down("md")]:{margin:0,display:"flex",flexDirection:"column",alignItems:"center",flexGrow:1},[e.breakpoints.down("sm")]:{margin:0,display:"flex",flexDirection:"column",alignItems:"center",flexGrow:1}},userImageDiv:{margin:e.spacing(1),display:"flex",flexGrow:1,justifyContent:"center"},userImage:{justifyContent:"center"}}));var ke=function(e){const a=Oe();return l.a.createElement("div",{className:a.rootUserInfo},l.a.createElement("div",{className:a.userImageDiv},l.a.createElement("img",{className:a.userImage,src:je.a,alt:"temporary profile",width:"200"})),l.a.createElement("div",{className:a.userInfoCard},l.a.createElement(J.a,{variant:"h4"},"Hello,"),l.a.createElement(J.a,{variant:"h5"},e.user,"!"),l.a.createElement("br",null),l.a.createElement(J.a,null,"Created ",e.madeEvents," Events"),l.a.createElement(J.a,null,"Attended ",e.attendedEvents," Events")))};const Se=Object(k.a)(e=>({rootProfile:{flexGrow:1,display:"flex",flexDirection:"row",margin:"2% 12%",[e.breakpoints.down("sm")]:{flexWrap:"wrap",margin:"2%"},alignItems:"flex-start"}}));var Le=function(){const e=Se(),a=Object(n.useState)([]),t=Object(m.a)(a,2),r=t[0],o=t[1],c=Object(n.useState)([]),i=Object(m.a)(c,2),s=i[0],u=i[1],d=Object(n.useState)([]),g=Object(m.a)(d,2),E=g[0],p=g[1],v=unescape(document.cookie.split("=")[1]);return Object(n.useEffect)(()=>{P.isLoggedIn(),P.getEventsByCreator(v).then(e=>{o(e.data)}).catch(e=>console.log(e)),P.getEventsByAttendees(v).then(e=>{u(e.data)}).catch(e=>console.log(e)),P.getPostedEvents(v).then(e=>{!function(){var a=Object(ae.a)(ee.a.mark((function a(){var t;return ee.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.data.filter(e=>e.creator===v||e.attendees.includes(v));case 2:0===(t=a.sent).length?p([]):p(t[t.length-1]);case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()()}).catch(e=>console.log(e))},[]),l.a.createElement("div",{className:e.rootProfile},l.a.createElement(ke,{madeEvents:r.length,attendedEvents:s.length,user:v}),l.a.createElement(Ce,{currentEvent:E,madeEvents:r,attendedEvents:s}))},Ie=(t(202),t(120)),Be=(t(203),t(248)),Pe=t(208),De=t(255),Re=t(256),We=t(257),Te=t(258),Ae=t(259),Me=t(269),Ge=t(118),qe=t.n(Ge),Ue=t(113),Fe=t.n(Ue),ze=t(114),Je=t.n(ze),He=t(115),_e=t.n(He),Ke=t(116),Qe=t.n(Ke),Ve=t(117),Xe=t.n(Ve);const Ye=Object(k.a)(e=>({root:{flexGrow:1},title:{flexGrow:1},list:{width:250,background:"transparent"}}));var Ze=function(){const e=Ye(),a=l.a.useState({right:!1}),t=Object(m.a)(a,2),n=t[0],r=t[1],o=(e,a)=>t=>{("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&r(Object(Ie.a)({},n,{[e]:a}))},c=e=>{switch(e.text){case"Dashboard":return{redirect:"/home",icon:l.a.createElement(Fe.a,null)};case"Events":return{redirect:"/home",icon:l.a.createElement(Je.a,null)};case"Profile":return{redirect:"/myprofile",icon:l.a.createElement(_e.a,null)};case"Logout":return{redirect:"/logout",icon:l.a.createElement(Qe.a,null)};default:return l.a.createElement(Xe.a,null)}};return l.a.createElement("div",{className:e.root},l.a.createElement(Te.a,{id:"NavBar"},l.a.createElement(J.a,{variant:"h6",className:e.title},"Cahoots"),["right"].map(a=>l.a.createElement(l.a.Fragment,{key:a},l.a.createElement(Ae.a,{edge:"start",className:e.menuButton,onClick:o(a,!0),"aria-label":"menu"},l.a.createElement(qe.a,{color:e.title})),l.a.createElement(Me.a,{className:e.drawer,anchor:a,open:n[a],onClose:o(a,!1)},(a=>l.a.createElement("div",{className:e.list,role:"presentation",onClick:o(a,!1),onKeyDown:o(a,!1)},l.a.createElement(Be.a,null,["Dashboard","Events","Profile"].map((e,a)=>l.a.createElement(Pe.a,{button:!0,key:e,component:"a",href:c({text:e}).redirect},l.a.createElement(De.a,null,c({text:e}).icon),l.a.createElement(Re.a,{primary:e})))),l.a.createElement(We.a,null),l.a.createElement(Be.a,null,["Logout"].map((e,a)=>l.a.createElement(Pe.a,{button:!0,key:e,component:"a",href:c({text:e}).redirect},l.a.createElement(De.a,null,c({text:e}).icon),l.a.createElement(Re.a,{primary:e}))))))(a))))))};t(204);var $e=function(){return l.a.createElement("div",null,l.a.createElement(G,null),l.a.createElement(Ze,null))};var ea=function(){return l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement($e,null),l.a.createElement(i.a,null,l.a.createElement(s.a,{exact:!0,path:"/"},l.a.createElement(Q,null)),l.a.createElement(s.a,{exact:!0,path:"/login"},l.a.createElement(Y,null)),l.a.createElement(s.a,{exact:!0,path:"/home"},l.a.createElement(q,null)),l.a.createElement(s.a,{exact:!0,path:"/myprofile"},l.a.createElement(Le,null)),l.a.createElement(s.a,{exact:!0,path:"/logout"},l.a.createElement(Z,null)))))};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ea,null)),document.getElementById("root"))}},[[137,1,2]]]);
//# sourceMappingURL=main.42037b02.chunk.js.map