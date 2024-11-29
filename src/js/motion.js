import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

export function motion() {
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger)
    gsap.to('.rocket-mo', {
        motionPath: {
            path: '.path',
            align: '.path',
            autoRotate: true,
            alignOrigin: [0.5, 0.5]
        },

        scrollTrigger: {
            trigger: '.intro',
            start: 'top top',
            end: '+=3000',
            pin: true,
            scrub: 1,
            snap: 'none'
        },
        ease: 'none'
    })

    gsap.to('.rocket-mo-1', {
        motionPath: {
            path: '.path-1',
            align: '.path-1',
            autoRotate: true,
            alignOrigin: [0.5, 0.5]
        },

        scrollTrigger: {
            trigger: '.works',
            start: 'top top',
            end: '+=3000',
            pin: true,
            scrub: 1,
            snap: 'none'
        },
        ease: 'none'
    })
}