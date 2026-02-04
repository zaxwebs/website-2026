import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const animateIntro = () => {
    const introSection = document.querySelector("#intro");
    const paragraph = introSection?.querySelector("p");

    if (!paragraph) return;

    // Split text into words using SplitText
    const split = new SplitText(paragraph, { type: "words" });

    // Set initial state
    gsap.set(split.words, { opacity: 0.2 });

    // Animate each word as user scrolls through section
    gsap.to(split.words, {
        scrollTrigger: {
            trigger: introSection,
            start: "top 90%",
            end: "bottom 60%",
            scrub: true,
        },
        opacity: 1,
        stagger: 0.1,
        ease: "steps(1)",
    });
}

const animateTools = () => {
    const containers = document.querySelectorAll(".tool-container");

    containers.forEach((container) => {
        const tools = container.querySelectorAll(".tool-list > span");
        gsap.from(tools, {
            scrollTrigger: {
                trigger: container,
                start: "top 80%",
            },
            duration: 0.4,
            y: 100,
            opacity: 0,
            stagger: 0.05,
            ease: "power4.out"
        });
    });
}

export const runPageAnimations = () => {
    animateIntro()
    animateTools()
}