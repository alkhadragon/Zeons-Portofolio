// ===============================
// Smooth Scroll (for older browsers)
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth"
        });

    });
});

// ===============================
// Scroll Reveal
// ===============================

const sections = document.querySelectorAll(
".section,.stat-card,.project-card,.review-card,.why-card,.contact-card"
);

sections.forEach(section=>{
    section.classList.add("hidden");
});

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

},{
    threshold:.15
});

sections.forEach(section=>{
    observer.observe(section);
});

// ===============================
// Navbar Background
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>60){

        navbar.style.background="rgba(10,15,25,.88)";
        navbar.style.boxShadow="0 15px 40px rgba(0,0,0,.25)";

    }else{

        navbar.style.background="rgba(20,25,40,.55)";
        navbar.style.boxShadow="none";

    }

});

// ===============================
// Hero Buttons Hover Glow
// ===============================

document.querySelectorAll(".primary-btn,.secondary-btn").forEach(btn=>{

    btn.addEventListener("mousemove",e=>{

        const rect=btn.getBoundingClientRect();

        btn.style.setProperty("--x",(e.clientX-rect.left)+"px");
        btn.style.setProperty("--y",(e.clientY-rect.top)+"px");

    });

});

// ===============================
// Animated Stats Counter
// ===============================

const counters=document.querySelectorAll(".stat-card h1");

let counted=false;

function countUp(){

    if(counted) return;

    if(window.scrollY<200) return;

    counted=true;

    counters.forEach(counter=>{

        const original=counter.innerText;

        const number=parseInt(original.replace(/\D/g,""));

        let current=0;

        const speed=Math.max(1,Math.ceil(number/50));

        const interval=setInterval(()=>{

            current+=speed;

            if(current>=number){

                counter.innerText=original;

                clearInterval(interval);

            }else{

                if(original.includes("%")){

                    counter.innerText=current+"%";

                }else{

                    counter.innerText=current+"+";

                }

            }

        },25);

    });

}

window.addEventListener("scroll",countUp);

// ===============================
// Skill Bar Animation
// ===============================

const bars=document.querySelectorAll(".fill");

bars.forEach(bar=>{

    const width=bar.style.width || getComputedStyle(bar).width;

    bar.dataset.width=width;

    bar.style.width="0";

});

const skillSection=document.querySelector("#skills");

const skillObserver=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            bars.forEach(bar=>{

                if(bar.classList.contains("build"))
                    bar.style.width="70%";

                if(bar.classList.contains("lua"))
                    bar.style.width="2%";

                if(bar.classList.contains("ui"))
                    bar.style.width="5%";

                if(bar.classList.contains("communication"))
                    bar.style.width="45%";

            });

        }

    });

},{
    threshold:.4
});

skillObserver.observe(skillSection);

// ===============================
// Floating Background Glow
// ===============================

const glow1=document.querySelector(".glow1");
const glow2=document.querySelector(".glow2");

document.addEventListener("mousemove",(e)=>{

    let x=e.clientX/window.innerWidth;
    let y=e.clientY/window.innerHeight;

    glow1.style.transform=`translate(${x*40}px,${y*40}px)`;
    glow2.style.transform=`translate(${-x*40}px,${-y*40}px)`;

});

// ===============================
// Project Card Tilt
// ===============================

document.querySelectorAll(".project-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;
        const y=e.clientY-rect.top;

        const rotateY=((x/rect.width)-0.5)*10;
        const rotateX=((y/rect.height)-0.5)*-10;

        card.style.transform=
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-10px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});

// ===============================
// Footer Year
// ===============================

const footer=document.querySelector("footer p");

footer.innerHTML=
`Made with ❤️ by <strong>alkha_dragon</strong> • ${new Date().getFullYear()}`;

// ===============================
// Console Message 😎
// ===============================

console.log("%cWelcome to alkha_dragon's Portfolio!",
"color:#60a5fa;font-size:18px;font-weight:bold;");