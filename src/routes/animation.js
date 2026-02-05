export function animateAbout() {
    const cards = document.querySelectorAll("#about .card");

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
            ease: "power3.out"

        });
    });
}

export const runPageAnimations = () => {
    animateAbout();
}