webpackJsonp([10],{A2T9:function(n,t,e){"use strict";function o(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,0,"div",[],null,null,null,null,null))],null,null)}Object.defineProperty(t,"__esModule",{value:!0});var l=e("LMZF"),u=function(){},r=function(){function n(n,t,e,o){this.route=n,this.router=t,this.appService=e,this.http=o,JSON.parse(localStorage.getItem("SigninData"))}return n.prototype.ngOnInit=function(){var n=this;JSON.parse(localStorage.getItem("userCountry"));var t=this.appService.Url,e=JSON.parse(localStorage.getItem("SigninData"));this.http.post(t+"/get_branches",{AdminID:e.AdminID,SessionID:e.SessionID}).subscribe(function(t){var e=[];(e=t).success||(localStorage.setItem("userCountry",JSON.stringify(e)),n.router.navigate(["/dashboard","products",e[0].CountryName]))},function(n){alert(JSON.stringify(n))})},n}(),a=e("UHIZ"),i=e("Npun"),c=e("9iV4"),s=l["\u0275crt"]({encapsulation:2,styles:[],data:{}}),p=l["\u0275ccf"]("app-products",r,function(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"app-products",[],null,null,null,o,s)),l["\u0275did"](1,114688,null,0,r,[a.a,a.k,i.a,c.c],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]),d=e("Un6q");e.d(t,"ProductsModuleNgFactory",function(){return m});var m=l["\u0275cmf"](u,[],function(n){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[p]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,d.NgLocalization,d.NgLocaleLocalization,[l.LOCALE_ID,[2,d["\u0275a"]]]),l["\u0275mpd"](512,d.CommonModule,d.CommonModule,[]),l["\u0275mpd"](512,a.n,a.n,[[2,a.s],[2,a.k]]),l["\u0275mpd"](512,u,u,[]),l["\u0275mpd"](1024,a.i,function(){return[[{path:"",component:r}]]},[])])})}});