$(()=>{function e(){var e;1199<$(window).width()?particlesJS("particles-js",{particles:{number:{value:70,density:{enable:!0,value_area:400}},color:{value:$("body").hasClass("dark")?"#ffffff":"#615c5c"},shape:{type:"edge",polygon:{sides:4}},opacity:{value:.7},size:{value:3,random:!0},move:{enable:!0,speed:5,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!0},line_linked:{enable:!1}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1},onclick:{enable:!1},resize:!0}},retina_detect:!0}):0<(e=$("#particles-js")).children().length&&e.empty()}var t;function a(){$("body").addClass("dark").removeClass("light"),localStorage.setItem("theme","dark"),e()}function o(){$("body").addClass("light").removeClass("dark"),localStorage.setItem("theme","light"),e()}VanillaTilt.init(document.querySelectorAll("[data-tilt]"),{max:25,speed:400,scale:1.1}),e(),$(window).on("resize",function(){e()}),$(".protfolio-container").imagesLoaded(function(){t=$(".protfolio-container").isotope({itemSelector:".data",layoutMode:"fitRows"})}),$(".portfolioe .buttons button").on("click",function(){$(".portfolioe .buttons button").removeClass("active"),$(this).addClass("active");var e=$(this).data("filter");t.isotope({filter:e})}),$(".img").on("click",function(){let e=$("<div></div>",{class:"popup-overlay"}),t=$("<div></div>",{class:"popUp"});var a=$("<img>",{src:$(this.children).attr("src")});t.append(a),$("body").append(e).append(t),e.on("click",function(){t.remove(),e.remove()})}),$("#customButton").on("click",function(){$("#attachment").click()}),$("#attachment").on("change",function(){var e=this.files[0]?this.files[0].name:"No file chosen";$("#file-chosen").text(e)}),$(".links li a").on("click",function(){$(this).addClass("active").parent().siblings().find("a").removeClass("active")}),"dark"===localStorage.getItem("theme")?(a(),$("#website-control-toggle").prop("checked",!0)):(o(),$("#website-control-toggle").prop("checked",!1)),$("#website-control-toggle").on("change",function(){($(this).is(":checked")?a:o)()});var n=$("#loader"),i=gsap.timeline();i.to(".loader-container .loaded",{delay:2,y:-50,opacity:0,duration:.2}),i.to(n[0],{duration:.8,attr:{d:"M0 502S175 272 500 272s500 230 500 230V0H0Z"},ease:"power1.easeIn"}).to(n[0],{duration:.8,attr:{d:"M0 2S175 1 500 1s500 1 500 1V0H0Z"},ease:"power1.easeOut"}),i.to(".preloader",{y:-1e3,duration:1}).to(".preloader",{zIndex:-1,display:"none"})}),$(".animateText").textition({speed:1.2,animation:"ease-out",map:{x:200,y:100,z:0},autoplay:!0,interval:4});let currDate=new Date,$year=$("span#year"),myComingBday=currDate.getFullYear()-2003,myComingBdayLastChar=myComingBday.toString().slice(-1),countDownDate=new Date(`Dec 3, ${currDate.getFullYear()} 00:00:01`),timer=setInterval(()=>{var e=new Date;countDownDate.getTime()-e.getTime()<=0&&(myComingBday++,countDownDate=new Date(`Dec 3, ${e.getFullYear()+1} 00:00:01`)),$year.text(myComingBday-1)},1e3);function generateVerificationCode(){return Math.floor(1e4+9e4*Math.random())}$(()=>{emailjs.init("p3wVWaiD4N8cQo05V")}),document.addEventListener("DOMContentLoaded",()=>{var e=document.getElementById("button");let t=document.getElementById("contactForm"),a=document.querySelector(".sent"),o=document.getElementById("basic-addon1"),n=generateVerificationCode();o.textContent=n,t&&e&&t.addEventListener("submit",function(e){e.preventDefault(),document.getElementById("verification").value!==n.toString()?alert("Verification code is incorrect."):emailjs.sendForm("service_sc7q2mg","template_5fk5ua8",this).then(()=>{a&&a.classList.add("active"),t.reset(),n=generateVerificationCode(),o.textContent=n},e=>{alert(JSON.stringify(e))})})});
//# sourceMappingURL=../../sourcemaps/plugins.js.map