export function graphic() {
    const articles = gsap.utils.toArray('.work__list')
    gsap.to(articles, {
        xPercent: -100 * (articles.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: '.grapich',
            start: 'top top',
            end: '+=3000',
            pin: true,
            scrub: 1,
            snap: 'none'
        }
    })
}