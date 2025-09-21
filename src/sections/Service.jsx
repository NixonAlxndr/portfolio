import { useRef } from "react"
import AnimatedHeaderSection from "../components/AnimatedHeaderSection.jsx"
import { servicesData } from "../constants/index.js"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)
const Service = () => {
  const text = `
        I build secure, high performance full stack apps 
        with smoothUX to drive growth not headaches
    `
  const serviceRef = useRef([])
  const serviceWrapperRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: serviceWrapperRef.current,
        start: "top top",
        end: "bottom 60%",
        pin: true,
        scrub: 1,
        pinSpacing: false
      }

    })

    serviceRef.current.forEach((service, index) => {
      if (index < serviceRef.current.length - 1) {
        tl.to(service, { height: "5em" });
      } else {
        tl.to(service, { height: "auto" });
      }
    });

  }, [])

  return (
    <section id="services" className="rounded-t-4xl min-h-screen bg-black">
      <AnimatedHeaderSection
        title={"Service"}
        text={text}
        textColor={"text-white"}
        subTitle={"Behind the scene, Beyound the screen"}
        withScrollTrigger={true}
      />
      <div ref={serviceWrapperRef}>
        {
          servicesData.map((service, index) => (
            <div
              ref={(el) => serviceRef.current[index] = el}
              key={index}
              className="relative z-10 border-t-2 px-10 pt-6 pb-12 text-white bg-black border-white/30"
            >
              <div className="flex items-center font-light justify-between gap-4">
                <div className="flex flex-col gap-6">
                  <h2 className="text-4xl lg:text-5xl">{service.title}</h2>
                  <p className="tracking-widest text-pretty lg:text-2xl text-xl leading-relaxed text-white/60">{service.description}</p>

                  <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
                    {service.items.map((item, itemIndex) => (
                      <div key={`item-${index}-${itemIndex}`}>
                        <h3 className="flex">
                          <span className="mr-12 text-lg text-white/30">0{itemIndex + 1}</span> {item.title}
                        </h3>
                        {
                          itemIndex < service.items.length - 1 && (
                            <div className="w-full h-px my-2 bg-white/30" />
                          )
                        }
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Service