setTimeout(function(){function e(e){o.classList.toggle("header-barraBusca-visivel"),r.classList.toggle("navegacao-form-active"),e.preventDefault()}function t(){o.classList.remove("header-barraBusca-visivel"),r.classList.remove("navegacao-form-active")}function c(e){e.stopPropagation()}function a(){setTimeout(function(){document.documentElement.addEventListener("click",t),document.querySelector(".header-navegacao").addEventListener("click",c),document.querySelector(".header-barraBusca").addEventListener("click",c)},0),n.removeEventListener("click",a)}var n=document.querySelector(".header-busca"),o=document.body,r=document.querySelector(".header-navegacao-form");n&&"classList"in document.documentElement&&(n.addEventListener("click",e),n.addEventListener("click",a))},200);