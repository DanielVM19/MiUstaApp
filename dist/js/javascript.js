 var firstVar;
 var secondVar;

  function firstFunction() {
    firstVar = setTimeout(showLoader, 2000);
    secondVar = setTimeout(showPage, 5000);
  }

  function showLoader() {
    document.getElementById("start").style.display = "none";
    document.getElementById("loader").style.display = "flex";
  }

   function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("onboarding").style.display = "block";
  }

  

 $(document).ready(function () {
   $(".animsition").animsition({
     inClass: 'fade-in',
     outClass: 'fade-out',
     inDuration: 1500,
     outDuration: 800,
     linkElement: '.animsition-link',
     // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
     loading: true,
     loadingParentElement: 'body', //animsition wrapper element
     loadingClass: 'animsition-loading',
     loadingInner: '', // e.g '<img src="loading.svg" />'
     timeout: false,
     timeoutCountdown: 5000,
     onLoadEvent: true,
     browser: ['animation-duration', '-webkit-animation-duration'],
     // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
     // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
     overlay: false,
     overlayClass: 'animsition-overlay-slide',
     overlayParentElement: 'body',
     transition: function (url) {
       window.location.href = url;
     }
   });
 });

 $(document).ready(function () {
   $(".animsition").animsition({
     inClass: 'fade-in-up',
     outClass: 'fade-out-up',
     inDuration: 1500,
     outDuration: 800,
     linkElement: '.animsition-link',
     // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
     loading: true,
     loadingParentElement: 'body', //animsition wrapper element
     loadingClass: 'animsition-loading',
     loadingInner: '', // e.g '<img src="loading.svg" />'
     timeout: false,
     timeoutCountdown: 5000,
     onLoadEvent: true,
     browser: ['animation-duration', '-webkit-animation-duration'],
     // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
     // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
     overlay: false,
     overlayClass: 'animsition-overlay-slide',
     overlayParentElement: 'body',
     transition: function (url) {
       window.location.href = url;
     }
   });
 });

 $(document).ready(function () {
   $(".animsition").animsition({
     inClass: 'fade-in-right',
     outClass: 'fade-out-right',
     inDuration: 1500,
     outDuration: 800,
     linkElement: '.animsition-link',
     // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
     loading: true,
     loadingParentElement: 'body', //animsition wrapper element
     loadingClass: 'animsition-loading',
     loadingInner: '', // e.g '<img src="loading.svg" />'
     timeout: false,
     timeoutCountdown: 5000,
     onLoadEvent: true,
     browser: ['animation-duration', '-webkit-animation-duration'],
     // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
     // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
     overlay: false,
     overlayClass: 'animsition-overlay-slide',
     overlayParentElement: 'body',
     transition: function (url) {
       window.location.href = url;
     }
   });
 });
 
 var back = document.getElementById('back');
 back.addEventListener("click", function () {
   window.history.back();
 }, false);
