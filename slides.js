const slides = [
    { src: "/images/wmap.png",      alt: "wmap" },
    { src: "/images/hwreport.png",  alt: "hwreport" },
    { src: "/images/librewipe.png", alt: "librewipe" },
    { src: "/youxng/images/youxng.png",     alt: "youxng" },
    { src: "/images/blogs.png",     alt: "blogs" }
];

let slideIndex = 0;
const slideImg = document.getElementById("slide-img");

function showSlide(i) {
    slideIndex = (i + slides.length) % slides.length;
    slideImg.src = slides[slideIndex].src;
    slideImg.alt = slides[slideIndex].alt;
}

document.getElementById("slide-prev").addEventListener("click", () => showSlide(slideIndex - 1));
document.getElementById("slide-next").addEventListener("click", () => showSlide(slideIndex + 1));

showSlide(0);
