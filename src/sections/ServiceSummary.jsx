import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

const ServiceSummary = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#services-section",
        start: "top top",       // mulai pin ketika section nyentuh atas viewport
        end: "+=" +(4*200),  // ini nanti disesuaikan otomatis sama durasi timeline
        scrub: true,
        pin: true,
      }
    })

    // Tambahin animasi ke timeline
    tl.from("#title-service-1", { xPercent: 20 })
      .from("#title-service-2", { xPercent: -30 })
      .from("#title-service-3", { xPercent: 100 })
      .from("#title-service-4", { xPercent: -100 })
  }, [])

  return (
    <section
      id="services-section"
      className="mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive"
    >
      <div id="title-service-1">
        <p>Architecture</p>
      </div>

      <div
        id="title-service-2"
        className="flex items-center justify-center gap-3 translate-x-16"
      >
        <p className="font-normal">Development</p>
        <div className="w-10 h-1 md:32 bg-gold"></div>
        <p>Development</p>
      </div>

      <div
        id="title-service-3"
        className="flex items-center justify-center gap-3 -translate-x-48"
      >
        <p>APIs</p>
        <div className="w-10 h-1 md:32 bg-gold"></div>
        <p className="italic">Frontends</p>
        <div className="w-10 h-1 md:32 bg-gold"></div>
        <p>Scalability</p>
      </div>

      <div id="title-service-4" className="translate-x-48">
        <p>Database</p>
      </div>
    </section>
  )
}

export default ServiceSummary
