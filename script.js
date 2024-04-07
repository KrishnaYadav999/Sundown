const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true,
    
});

// var elema = document.querySelector(".elem-container")
// var fixed = document.querySelector(".fix-image")
// elema.addEventListener("mouseenter", function () {
//     fixed.style.display = "block"
// })
// elema.addEventListener("mouseleave", function () {
//     fixed.style.display = "none"
// })

// // Select all elements with class ".three-p-root"
// var elems = document.querySelectorAll(".three-p-root")
// // Convert NodeList to an array
// elems = Array.from(elems)
// elems.forEach(function (e) {
//     e.addEventListener("mouseenter", function () {
//         var image = e.getAttribute("data-image")
//         fixed.style.backgroundImage = `url(${image})`
//         console.log(image)
//     })
// })


var elema = document.querySelector(".elem-container");
var fixed = document.querySelector(".fix-image");

elema.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
});
elema.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
});

// Select all elements with class ".three-p-root"
var elems = document.querySelectorAll(".three-p-root");

// Convert NodeList to an array
elems = Array.from(elems);

elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image");
        var video = e.getAttribute("data-video");

        if (video) {
            // If data-video exists, set the background image to none
            fixed.style.backgroundImage = "none";

            // Create video element
            var videoElement = document.createElement("video");
            videoElement.src = video;
            videoElement.autoplay = true;
            videoElement.loop = true;
            videoElement.muted = true;
            videoElement.style.width = "100%";
            videoElement.style.height = "100%";
            videoElement.style.objectFit = "cover";


            // Remove any existing content
            fixed.innerHTML = "";

            // Append the video element to fixed
            fixed.appendChild(videoElement);
        } else {
            // If data-image exists, set background image
            fixed.style.backgroundImage = `url(${image})`;

            // Remove any existing video element
            fixed.innerHTML = "";
        }
    });
});


var loader = document.querySelector(".loader")
setTimeout(function(){
    loader.style.top = "-100%"
},3200)


var mySwiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto', 
    spaceBetween: 0, 
});

var manu = document.querySelector(".ham-b"); 
var full = document.querySelector(".full-scr");
var navimg = document.querySelector("nav img");
var flag = 0

manu.addEventListener("click", function(){
    if(flag == 0){
        full.style.top = 0
        navimg.style.opacity = 0
        flag = 1
    }
    else{
        full.style.top = "-100%"
        navimg.style.opacity = 1
        flag = 0
    }
   
});



