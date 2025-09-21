import React, { useRef } from 'react'
import AnimatedHeaderSection from '../components/AnimatedHeaderSection'
import AnimatedTextLines from '../components/AnimatedTextLines'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)
const About = () => {
    const text = `
        Passionate about clean architecture
        I build scalable, high-performance solutions 
        from protoype to production
    `
    const aboutText = `
        Passionate about crafting lightning-fast, user-friendly apps — from sleek React interfaces to rock-solid serverless backends. To me, every line of code is more than syntax — it’s a promise of quality users can feel
        When I’m not pushing code, you’ll probably find me:
            ⚡ Sharing experiments in open source (or contributing to yours)
            🧗 Tackling real-world “bugs”
        `
    const imgRef = useRef(null)

    useGSAP(() => {
        gsap.to("#about", {
            scale: 0.95,
            scrollTrigger: {
                trigger: "#about",
                start: "bottom 80%",
                end: "bottom 20%",
                scrub: true,
            },
            ease: "power1.inOut"
        })

        gsap.set(imgRef.current, {
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
        });

        gsap.to(imgRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 2,
            ease: "power4.out",
            scrollTrigger: { trigger: imgRef.current },
        });
    }, [])
    return (
        <section
            id="about"
            className="min-h-screen bg-black rounded-b-4xl"
        >
            <AnimatedHeaderSection
                subTitle={"Code with purpose, Built to scale"}
                text={text}
                title={"About"}
                textColor={"text-white"}
            />

            <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
                <img
                    ref={imgRef}
                    src="images/self.jpeg"
                    alt=""
                    className='w-md rounded-3xl'
                />
                <AnimatedTextLines
                    text={aboutText}
                    className={"w-full"}
                />
            </div>
        </section>
    )
}

export default About