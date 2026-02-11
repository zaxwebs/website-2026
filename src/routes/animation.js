import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const animateAbout = () => {
    const container = document.querySelector("#about");

    if (!container) return () => { };

    const ctx = gsap.context(() => {
        const cards = container.querySelectorAll(".card");

        cards.forEach((card) => {
            const img = card.querySelector("img");
            gsap.from(img, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 70%",
                    end: "bottom 50%",
                    scrub: true,
                },
                duration: 0.6,
                y: 100,
                x: -200,
                scale: 0.5,
                ease: "power3.out"
            });
        });
    }, container);

    return () => ctx.revert();
}

export const runPageAnimations = () => {
    const cleanups = [
        animateAbout()
    ];

    return () => cleanups.forEach(cleanup => cleanup?.());
}