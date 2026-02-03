import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    animateTools();
}