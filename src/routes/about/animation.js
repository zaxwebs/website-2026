import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, SplitText);
}

const wordRevealOnScroll = (selector) => {
    const paragraph = document.querySelector(selector);

    if (!paragraph) return;

    // Split text into words using SplitText
    const split = new SplitText(paragraph, { type: "words" });

    // Set initial state
    gsap.set(split.words, { opacity: 0.2 });

    // Animate each word as user scrolls through section
    gsap.to(split.words, {
        scrollTrigger: {
            trigger: paragraph,
            start: "top 90%",
            end: "bottom 70%",
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
            duration: 0.6,
            y: 100,
            opacity: 0,
            stagger: 0.1,
            ease: "power4.out"
        });
    });
}

export const runPageAnimations = () => {
    wordRevealOnScroll(".animate-word-reveal")
    animateTools()
}