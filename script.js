// =====================================
// AC Template - Main Script
// =====================================

// Init Lucide Icons
if (typeof lucide !== "undefined") {
    lucide.createIcons();
}


// =====================================
// Smooth Scroll
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
        const target = document.querySelector(link.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// =====================================
// Scroll Reveal Animation
// =====================================

const revealElements = document.querySelectorAll(
    ".card, .glass-card, .feature, section"
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

            observer.unobserve(entry.target);
        }

    });

},{
    threshold:0.15
});


revealElements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});


// =====================================
// Cursor Glow
// =====================================

const cursor = document.querySelector(".cursor-glow");

if(cursor){

    document.addEventListener("mousemove", e => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    });

}


// =====================================
// Download AC.html
// =====================================

function downloadAC(){

    const file =
    "https://raw.githubusercontent.com/louisoff84/AcWebSitePRESET/main/ac.html";


    fetch(file)

    .then(response => response.blob())

    .then(blob => {

        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");

        a.href = url;
        a.download = "AC.html";

        document.body.appendChild(a);

        a.click();

        a.remove();

        URL.revokeObjectURL(url);

    })

    .catch(() => {

        window.open(file, "_blank");

    });

}


// =====================================
// FAQ System
// =====================================

document.querySelectorAll(".faq-question")
.forEach(question => {

    question.addEventListener("click",()=>{

        const item = question.parentElement;

        item.classList.toggle("active");

    });

});


// =====================================
// Navbar Blur On Scroll
// =====================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(!navbar) return;


    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});


// =====================================
// Loading Animation
// =====================================

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});


// =====================================
// Console Branding
// =====================================

console.log(
`
%cAC Template
%cAdvanced Minecraft AntiCheat Website

Github:
https://github.com/louisoff84/AcWebSitePRESET
`,
"color:#22c55e;font-size:25px;font-weight:bold",
"color:white;font-size:14px"
);
