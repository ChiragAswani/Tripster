(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{296:function(e,t,a){e.exports=a(613)},301:function(e,t,a){},317:function(e,t){},319:function(e,t){},350:function(e,t){},351:function(e,t){},400:function(e,t){},402:function(e,t){},425:function(e,t){},515:function(e,t,a){},593:function(e,t,a){},606:function(e,t,a){},613:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),s=a.n(r),o=(a(301),a(51)),l=a(52),c=a(54),d=a(53),u=a(55),m=a(81),p=a(41),h=a.n(p),v=a(618),g=a(70),f=a(619),b=(a(515),a(16)),E=a.n(b),y="http://ec2-3-14-1-163.us-east-2.compute.amazonaws.com:8888",_=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={trips:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"createNewTrip",value:function(){var e={method:"POST",url:"".concat(y,"/new-trip"),headers:{"Content-Type":"application/x-www-form-urlencoded"},form:{user_id:E.a.load("userID"),email:E.a.load("email")}};h()(e,function(e,t,a){if(e)throw new Error(e);var n=a.replace('"',"").replace('"',"");this.props.history.push("/plan-trip/".concat(n))}.bind(this))}},{key:"deleteTrip",value:function(e){var t={method:"POST",url:"".concat(y,"/delete-trip"),headers:{"Content-Type":"application/x-www-form-urlencoded"},form:{user_id:E.a.load("userID"),email:E.a.load("email"),trip_id:e},json:!0};h()(t,function(e,t,a){if(e)throw new Error(e);this.setState({trips:a.data})}.bind(this))}},{key:"viewTrip",value:function(e){this.props.history.push("/plan-trip/".concat(e))}},{key:"renderTrips",value:function(){var e=this,t=this.state.trips.map(function(t){return i.a.createElement("div",{className:"trip-item"},i.a.createElement("div",{className:"card"},i.a.createElement("header",{className:"card-header has-text-centered"},i.a.createElement("p",{className:"card-header-title is-size-5 has-text-weight-light"},t.trip_name),i.a.createElement("a",{href:"",className:"card-header-icon","aria-label":"more options"},i.a.createElement("span",{className:"icon"},i.a.createElement("i",{className:"fas fa-angle-down","aria-hidden":"true"})))),i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"content"},i.a.createElement("p",{className:"is-size-6 has-text-weight-light"},t.trip_date))),i.a.createElement("footer",{className:"card-footer"},i.a.createElement("a",{href:"",className:"card-footer-item",onClick:function(){return e.viewTrip(t._id)}},"View Trip"),i.a.createElement("a",{href:"",className:"card-footer-item",onClick:function(){return e.deleteTrip(t._id)}},"Delete"))))}),a=i.a.createElement("div",{className:"trip-item"},i.a.createElement("div",{className:"card"},i.a.createElement("header",{className:"card-header has-text-centered"},i.a.createElement("p",{className:"card-header-title is-size-5 has-text-weight-light"},"Add a new trip!"),i.a.createElement("a",{href:"",className:"card-header-icon","aria-label":"more options"},i.a.createElement("span",{className:"icon"},i.a.createElement("i",{className:"fas fa-angle-down","aria-hidden":"true"})))),i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"content"},i.a.createElement("p",{className:"is-size-6 has-text-weight-light"},"+"))),i.a.createElement("footer",{className:"card-footer"},i.a.createElement("a",{onClick:function(){return e.createNewTrip()},className:"card-footer-item"},"Click here to add a new trip!"))));return t.push(a),t}},{key:"componentDidMount",value:function(){if(E.a.load("isLoggedIn")){var e={method:"GET",url:"".concat(y,"/view-trips"),qs:{email:E.a.load("email"),user_id:E.a.load("userID")},json:!0};h()(e,function(e,t,a){if(e)throw new Error(e);this.setState({trips:a.data})}.bind(this))}else this.props.history.push("/")}},{key:"logout",value:function(){E.a.remove("isLoggedIn"),E.a.remove("userID"),E.a.remove("name"),E.a.remove("email"),E.a.remove("picture"),this.props.history.push("/")}},{key:"render",value:function(){var e=this,t=i.a.createElement(v.b,null,i.a.createElement(v.b.Item,null,i.a.createElement("p",null,"Email: ",E.a.load("email"))),i.a.createElement(v.b.Item,null,i.a.createElement(g.a,{onClick:function(){return e.logout()}},"Logout")));return i.a.createElement("section",{className:"hero is-light is-fullheight"},i.a.createElement("div",{className:"hero-head"},i.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},i.a.createElement("div",{className:"navbar-brand"},i.a.createElement("a",{className:"navbar-item"},i.a.createElement("img",{alt:"",src:"https://github.com/lrisTech/Tripster/blob/master/tripster-react/src/images/tripster.png?raw=true"}))),i.a.createElement("div",{className:"navbar-menu"}),i.a.createElement("div",{className:"navbar-end"},i.a.createElement("a",{className:"navbar-item"},i.a.createElement(f.a,{overlay:t},i.a.createElement("img",{src:E.a.load("picture"),alt:""})))))),i.a.createElement("div",{className:"hero-body"},i.a.createElement("div",{className:"trips-container"},this.renderTrips())))}}]),t}(i.a.Component),w=Object(m.e)(_),k=a(191),S=a(72),j=a(69),N=a.n(j),T=(a(592),a(621)),O=a(146),C=a(13),I=a(620),D=a(617),L=a(614),P=a(615),x=a(612),M=(a(593),a(79)),W=a.n(M),B=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={isPlaylistClicked:!1,isTopTenClicked:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"login",value:function(){var e=function(e){for(var t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<e;n+=1)t+=a.charAt(Math.floor(Math.random()*a.length));return t}(16);window.open("https://accounts.spotify.com/authorize?".concat(W.a.stringify({response_type:"code",client_id:"682367fe3a8a41a0b81f34dc5c6fe936",scope:"user-read-private user-read-email playlist-read-private playlist-modify-private playlist-modify-public playlist-read-collaborative",redirect_uri:"".concat(y,"/callback"),state:e}),")}"),"_self")}},{key:"componentDidMount",value:function(){var e=W.a.parse(this.props.location.search)["?refresh_token"];void 0!==e&&this.setState({refreshToken:e})}},{key:"getTopTenSongs",value:function(){var e={method:"GET",json:!0,url:"".concat(y,"/top-10"),qs:{refreshToken:this.state.refreshToken},headers:{"Postman-Token":"87b33f0a-d49f-42cc-b4f6-e8ec657df404","cache-control":"no-cache"}};h()(e,function(e,t,a){if(e)throw new Error(e);var n;if(this.state.isTopTenClicked)this.setState({renderedSongs:"",isTopTenClicked:!1});else{var r="https://open.spotify.com/embed/user/".concat(a.user_id,"/playlist/").concat(a.playlist_id);n=i.a.createElement("iframe",{title:"playlist",src:r,width:"300",height:"380",frameBorder:"0",allowTransparency:"true",allow:"encrypted-media"}),this.setState({renderedSongs:n,isTopTenClicked:!0})}}.bind(this))}},{key:"roadTripMe",value:function(){if(this.state.isPlaylistClicked)this.setState({renderedPlaylist:"",isPlaylistClicked:!1});else{var e=i.a.createElement("iframe",{title:"public-playlist",src:"https://open.spotify.com/embed/user/1215854297/playlist/0aAotlEvLxpi4QgWk97CZK",width:"280",height:"380",frameBorder:"0",allowTransparency:"true",allow:"encrypted-media"});this.setState({renderedPlaylist:e,isPlaylistClicked:!0})}}},{key:"render",value:function(){var e=this;return this.state.refreshToken?i.a.createElement("div",null,i.a.createElement(P.a,null,this.state.renderedSongs,this.state.renderedPlaylist,i.a.createElement(g.a,{type:"primary",onClick:function(){return e.getTopTenSongs()}},"Top 10 Songs"),i.a.createElement(g.a,{type:"primary",onClick:function(){return e.roadTripMe()}},"Road Trip Me"))):i.a.createElement("div",null,i.a.createElement(P.a,null,i.a.createElement(g.a,{type:"primary",onClick:function(){return e.login()}},"Spotifunk")))}}]),t}(i.a.Component),q=Object(m.e)(B),z=a(616),A=(a(606),z.a.Panel),R=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={isStepsShowing:!1,divStyle:{position:"absolute",left:"0",bottom:"0",width:"60%"},cardStyle:{width:"50%"},steps:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"calculate_distance_duration",value:function(e){var t=0,a=0;for(var n in e)for(var i in e[n].legs)t+=e[n].legs[i].distance.value,a+=e[n].legs[i].duration.value;return{duration:Math.round(.0166667*a),distance:Math.round(621371e-9*t)}}},{key:"showSteps",value:function(){this.state.isStepsShowing?this.setState({isStepsShowing:!1,divStyle:{position:"absolute",left:"0",bottom:"0",width:"60%"},cardStyle:{width:"50%"}}):this.setState({isStepsShowing:!0,divStyle:{left:"0",bottom:"0",width:"60%",height:"100%"},cardStyle:{width:"50%",height:"100%"}})}},{key:"renderTurns",value:function(e){return e.map(function(e){return i.a.createElement("div",{className:"stop-div"},i.a.createElement("p",{className:"stop-item-left"},e.distance.text),i.a.createElement("p",{className:"stop-item-right"},e.instructions.replace(/<[^>]+>/g,"")))})}},{key:"renderSteps",value:function(){console.log(this.props.driving_result);var e=[],t=i.a.createElement("div",{className:"stop-div",key:this.props.driving_result.request.origin.query},i.a.createElement(C.a,{type:"star",className:"stop-item-left"}),i.a.createElement("p",{className:"stop-item-right"},this.props.driving_result.request.origin.query));e.push(t);var a=this.props.driving_result.routes[0].legs,n=[];for(var r in a){console.log(a[r]);var s=i.a.createElement(A,{header:a[r].end_address,key:a[r].end_address+a[r].start_address},this.renderTurns(a[r].steps));n.push(s)}var o=i.a.createElement(z.a,null,n);e.push(o);var l=i.a.createElement("div",{className:"stop-div",key:this.props.driving_result.request.destination.query},i.a.createElement(C.a,{type:"star",className:"stop-item-left"}),i.a.createElement("p",{className:"stop-item-right"},this.props.driving_result.request.destination.query));return e.push(l),e}},{key:"render",value:function(){var e=this,t=this.calculate_distance_duration(this.props.driving_result.routes);return i.a.createElement("div",{style:this.state.divStyle},i.a.createElement(P.a,{style:this.state.cardStyle,className:"steps-card"},i.a.createElement("p",null,"~",t.duration," min (",t.distance," mi)"),this.state.isStepsShowing?this.renderSteps():"",i.a.createElement(g.a,{onClick:function(){return e.showSteps()}},"Steps")))}}]),t}(i.a.Component),F=Object(m.e)(R),G=a(35),$=a.n(G),J=T.a.Group,K=O.a.Option,V=[{label:"Active Life",value:"Active Life"},{label:"Entertainment",value:"Arts & Entertainment"}],Y=[{label:"Nightlife",value:"Nightlife"},{label:"Restaurants",value:"Restaurants"}];function Z(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}var Q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).handleChangeOrigin=function(e){a.setState({origin_address:e})},a.handleSelectOrigin=function(e){Object(j.geocodeByAddress)(e).then(function(e){return Object(j.getLatLng)(e[0])}).then(function(e){return a.setState({origin_obj:e})}).catch(function(e){return console.error("Error",e)}),a.setState({origin_address:e})},a.handleChangeDestination=function(e){a.setState({destination_address:e})},a.handleSelectDestination=function(e){Object(j.geocodeByAddress)(e).then(function(e){return Object(j.getLatLng)(e[0])}).then(function(e){return a.setState({destination_obj:e})}).catch(function(e){return console.error("Error",e)}),a.setState({destination_address:e})},a.state={trip_name:"",origin_address:"",destination_address:"",origin_obj:{},destination_obj:{},stops:[],addition_markers:void 0,sort_by:"best_match",price:"1",waypoints:[],waypoints_db_obj:[],driving_result:{},trip_id:"",trip_date:void 0},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.history.location.pathname.split("/")[2];console.log(e);var t={method:"GET",url:"".concat(y,"/view-trip"),qs:{email:E.a.load("email"),user_id:E.a.load("userID"),trip_id:e},json:!0};h()(t,function(t,a,n){if(t)throw new Error(t);var i={};try{(i=this.parseDBTrip(n)).trip_id=e,this.setState(i),this.calculate_distance()}catch(r){i.trip_id=e,this.setState(i)}}.bind(this))}},{key:"parseDBTrip",value:function(e){var t=e;for(var a in t.origin_obj.lat=parseFloat(t.origin_obj.lat),t.origin_obj.lng=parseFloat(t.origin_obj.lng),t.destination_obj.lat=parseFloat(t.destination_obj.lat),t.destination_obj.lng=parseFloat(t.destination_obj.lng),t.waypoints_db_obj=e.waypoints,delete t.waypoints,t.waypoints=[],t.waypoints_db_obj)t.waypoints_db_obj[a]={lat:parseFloat(t.waypoints_db_obj[a].lat),lng:parseFloat(t.waypoints_db_obj[a].lng)},t.waypoints[a]={location:new this.props.google.maps.LatLng(t.waypoints_db_obj[a].lat,t.waypoints_db_obj[a].lng),stopover:!0};return t}},{key:"calculate_distance",value:function(){var e=this;if(!Z(this.state.origin_obj)&&!Z(this.state.destination_obj)){(new this.props.google.maps.DirectionsService).route({origin:this.state.origin_address,destination:this.state.destination_address,waypoints:this.state.waypoints,optimizeWaypoints:!0,travelMode:this.props.google.maps.TravelMode.DRIVING},function(t,a){var n=new e.props.google.maps.LatLngBounds;try{var i=t.routes[0].overview_path;for(var r in i){var s=i[r].toJSON();n.extend(s)}e.setState({steps:t.routes[0].overview_path,bounds:n,driving_result:t})}catch(o){console.log("ERR")}});var t={method:"GET",url:"".concat(y,"/calculate-distance"),qs:{origin_lat:this.state.origin_obj.lat,origin_lng:this.state.origin_obj.lng,destination_lat:this.state.destination_obj.lat,destination_lng:this.state.destination_obj.lng,sort_by:this.state.sort_by,price:this.state.price,stops:this.state.stops},headers:{"Postman-Token":"172aa67b-54c6-4116-9000-9a22e9480045","cache-control":"no-cache"}};h()(t,function(e,t,a){var n=this;if(e)throw new Error(e);var r=a,s=JSON.parse(r).stops.map(function(e){return i.a.createElement(S.Marker,{onMouseover:function(e,t,a){return n.displayInfoWindow(e,t,a)},stop:e,key:e.image_url,position:{lat:e.coordinates.latitude,lng:e.coordinates.longitude},onClick:function(){return n.setWayPoint(e.coordinates.latitude,e.coordinates.longitude)}})});this.setState({additional_markers:s})}.bind(this))}}},{key:"displayInfoWindow",value:function(e,t,a){var n=i.a.createElement(S.InfoWindow,{marker:t,visible:!0},i.a.createElement("div",null,i.a.createElement("h3",null,i.a.createElement("a",{href:e.stop.url},e.stop.name)),i.a.createElement("img",{src:e.stop.image_url,alt:"",height:"20%",width:"20%"}),i.a.createElement("p",null,"Rating: ",e.stop.rating,"/5.0"),i.a.createElement("p",null,e.stop.phone),i.a.createElement(C.a,{type:"delete",theme:"twoTone",twoToneColor:"#eb2f96",onClick:function(){return console.log("DELETE STOP")}})));this.setState({infoWindow:n})}},{key:"setWayPoint",value:function(e,t){this.setState({waypoints:[].concat(Object(k.a)(this.state.waypoints),[{location:new this.props.google.maps.LatLng(e,t),stopover:!0}]),waypoints_db_obj:[].concat(Object(k.a)(this.state.waypoints_db_obj),[{lat:e,lng:t}])}),this.calculate_distance()}},{key:"saveTrip",value:function(){var e={trip_name:this.state.trip_name,origin_address:this.state.origin_address,destination_address:this.state.destination_address,origin_obj:this.state.origin_obj,destination_obj:this.state.destination_obj,trip_date:this.state.trip_date,price:this.state.price,sort_by:this.state.sort_by,stops:this.state.stops,waypoints:this.state.waypoints_db_obj},t={method:"POST",url:"".concat(y,"/save-trip"),qs:{trip_id:this.state.trip_id,email:E.a.load("email"),user_id:E.a.load("userID")},headers:{"Content-Type":"application/x-www-form-urlencoded"},form:e};h()(t,function(e,t,a){if(e)throw new Error(e);console.log(a)})}},{key:"render",value:function(){var e=this;console.log("STATE",this.state);var t=i.a.createElement("div",{style:{width:300,border:"1px solid #d9d9d9",borderRadius:4}},i.a.createElement(I.a,{fullscreen:!1,onChange:function(t){return e.setState({trip_date:t._d.toISOString()})},value:this.state.trip_date?$()(this.state.trip_date):$()("2019-04-11T15:13:58.867Z")}));return i.a.createElement("div",null,i.a.createElement(D.a,{style:{width:"90%",borderRight:"10px"},placeholder:"Enter a name of your trip",value:this.state.trip_name,onChange:function(t){return e.setState({trip_name:t.target.value})}}),i.a.createElement(L.a,{content:t,title:"Travel Date",trigger:"click"},i.a.createElement(C.a,{type:"calendar"})),i.a.createElement("div",{className:"flex-container"},i.a.createElement("div",{className:"flex-container-div-left"},i.a.createElement(P.a,{class:"is-size-1",title:"Tripster Stops",extra:i.a.createElement(C.a,{type:"save",theme:"twoTone",onClick:function(){return e.saveTrip()}})},i.a.createElement(N.a,{value:this.state.origin_address,onChange:this.handleChangeOrigin,onSelect:this.handleSelectOrigin},function(e){var t=e.getInputProps,a=e.suggestions,n=e.getSuggestionItemProps,r=e.loading;return i.a.createElement("div",null,i.a.createElement(D.a,t({placeholder:"Origin",className:"location-search-input"})),i.a.createElement("div",{className:"autocomplete-dropdown-container"},r&&i.a.createElement("div",null,"Loading..."),a.map(function(e){var t=e.active?"suggestion-item--active":"suggestion-item",a=e.active?{backgroundColor:"#fafafa",cursor:"pointer"}:{backgroundColor:"#ffffff",cursor:"pointer"};return i.a.createElement("div",n(e,{className:t,style:a}),i.a.createElement("span",null,e.description))})))}),i.a.createElement(N.a,{value:this.state.destination_address,onChange:this.handleChangeDestination,onSelect:this.handleSelectDestination},function(e){var t=e.getInputProps,a=e.suggestions,n=e.getSuggestionItemProps,r=e.loading;return i.a.createElement("div",null,i.a.createElement(D.a,t({placeholder:"Destination",className:"location-search-input"})),i.a.createElement("div",{className:"autocomplete-dropdown-container"},r&&i.a.createElement("div",null,"Loading..."),a.map(function(e){var t=e.active?"suggestion-item--active":"suggestion-item",a=e.active?{backgroundColor:"#fafafa",cursor:"pointer"}:{backgroundColor:"#ffffff",cursor:"pointer"};return i.a.createElement("div",n(e,{className:t,style:a}),i.a.createElement("span",null,e.description))})))}),i.a.createElement("br",null),i.a.createElement("div",null,i.a.createElement(J,{options:V,value:this.state.stops,onChange:function(t){return e.setState({stops:t})}}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(J,{options:Y,value:this.state.stops,onChange:function(t){return e.setState({stops:t})}})),i.a.createElement("br",null),i.a.createElement("p",{className:"sort-by"},"Sort By: "),i.a.createElement(O.a,{value:this.state.sort_by,style:{width:150},max:51,onChange:function(t){return e.setState({sort_by:t})}},i.a.createElement(K,{value:"best_match"},"Best Match"),i.a.createElement(K,{value:"rating"},"Rating"),i.a.createElement(K,{value:"review_count"},"Review Count"),i.a.createElement(K,{value:"distance"},"Distance")),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(x.a.Group,{value:this.state.price,buttonStyle:"solid",onChange:function(t){return e.setState({price:t.target.value})}},i.a.createElement(x.a.Button,{value:"1"},"$"),i.a.createElement(x.a.Button,{value:"2"},"$$"),i.a.createElement(x.a.Button,{value:"3"},"$$$"),i.a.createElement(x.a.Button,{value:"4"},"$$$$")),i.a.createElement("p",null),i.a.createElement(g.a,{onClick:function(){return e.calculate_distance()}},"Calculate")),i.a.createElement(q,null)),i.a.createElement("div",{className:"flex-container-div-right"},i.a.createElement(S.Map,{className:"googlemaps",google:this.props.google,zoom:5,bounds:this.state.bounds},i.a.createElement(S.Marker,{position:{lat:this.state.origin_obj.lat,lng:this.state.origin_obj.lng}}),i.a.createElement(S.Marker,{position:{lat:this.state.destination_obj.lat,lng:this.state.destination_obj.lng}}),this.state.additional_markers,i.a.createElement(S.Polyline,{path:this.state.steps,geodesic:!1,strokeColor:"#0000FF",strokeOpacity:3,strokeWeight:8}),this.state.infoWindow),i.a.createElement(F,{driving_result:this.state.driving_result}))))}}]),t}(i.a.Component),X=Object(S.GoogleApiWrapper)({apiKey:"AIzaSyChbG4vc4a01alWP7RYrMvWd911uhGzOdo"})(Object(m.e)(Q)),H=a(292),U=a.n(H),ee=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={isLoggedIn:!1,userID:"",name:"",email:"",picture:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"responseFacebook",value:function(e){var t={method:"POST",url:"".concat(y,"/authenticate"),headers:{"Content-Type":"application/x-www-form-urlencoded"},form:{email:e.email,name:e.name,picture:e.picture.data.url,user_id:e.userID}};h()(t,function(t,a,n){E.a.save("isLoggedIn",!0),E.a.save("userID",e.userID),E.a.save("name",e.name),E.a.save("email",e.email),E.a.save("picture",e.picture.data.url),this.setState({isLoggedIn:!0,userID:e.userID,name:e.name,email:e.email,picture:e.picture.data.url}),this.props.history.push("/trips")}.bind(this))}},{key:"componentDidMount",value:function(){E.a.load("isLoggedIn")&&this.props.history.push("/trips")}},{key:"render",value:function(){var e=this;return i.a.createElement("section",{class:"hero is-fullheight"},i.a.createElement("div",{class:"hero-head"},i.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},i.a.createElement("div",{className:"navbar-brand"},i.a.createElement("a",{className:"navbar-item"},i.a.createElement("img",{alt:"",src:"https://github.com/lrisTech/Tripster/blob/master/tripster-react/src/images/tripster.png?raw=true"}))),i.a.createElement("div",{className:"navbar-menu"}),i.a.createElement("div",{className:"navbar-end"},i.a.createElement("div",{className:"navbar-item"},i.a.createElement("div",{className:"buttons"},i.a.createElement("a",{className:"button is-link"},i.a.createElement("strong",null,"Sign up")),i.a.createElement("a",{className:"button is-light"},"Log in")))))),i.a.createElement("div",{class:"hero-body"},i.a.createElement("div",{className:"column is-6 is-offset-1 has-text-left"},i.a.createElement("h1",{className:"title has-text-weight-bold"},"Welcome to Tripster"),i.a.createElement("p",null),i.a.createElement("p",{class:"subtitle is-5"},"Tripster is a web-application that allows you to find fun places during your road trip. We use Yelp's API to give you the best possible options to visit."),i.a.createElement("a",null,i.a.createElement(U.a,{appId:"242487039919018",autoLoad:!1,fields:"name,email,picture",callback:function(t){return e.responseFacebook(t)},onFailure:function(){return e.props.history.push("/")}}))),i.a.createElement("div",{class:"column is-4"},i.a.createElement("h1",{class:"has-text-centered"},i.a.createElement("img",{alt:"",src:"https://images-na.ssl-images-amazon.com/images/I/61m0oPPL%2BKL._SX466_.jpg"})))))}}]),t}(i.a.Component),te=Object(m.e)(ee),ae=a(78);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(ae.a,null,i.a.createElement(m.c,null,i.a.createElement(m.a,{path:"/plan-trip/:trip_id",component:X}),i.a.createElement(m.a,{exact:!0,path:"/trips",component:w}),i.a.createElement(m.a,{path:"/",component:te}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[296,1,2]]]);
//# sourceMappingURL=main.6fb04278.chunk.js.map