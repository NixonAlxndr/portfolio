import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Canvas } from '@react-three/fiber'
import { Planet} from "../components/Planet.jsx"
import { Environment, Float, Lightformer, OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import AnimatedHeaderSection from '../components/AnimatedHeaderSection.jsx'

const Hero = () => {
    const isMobile = useMediaQuery({ maxWidth: 853 })

    const contextRef = useRef(null)
    const headerRef = useState(null)
    const text = `
        I help growing brands and starups gain an 
        unfair advantage through premium 
        results driven webs/apps
    `

    useGSAP(() => {
        const tl = gsap.timeline()
        tl.from(contextRef.current, {
            y: "50vh",
            duration: 1,
            ease: "circ.out"
        })
        tl.from(headerRef.current, {
            opacity: 0,
            y: "200",
            duration: 1,
            ease: "circ.out"
        }, "<+0.2")
    }, [])

    return (
        <section
            id='home'
            className="flex flex-col justify-end min-h-screen pointer-events-none"
        >
            <AnimatedHeaderSection 
                title={"Nixon Alexander"}
                text={text}
                textColor={"text-black"}
                subTitle={"404 No Bugs Found"}
            />

            <figure 
                style={{ width: "100vw", height: "100vh"}}
                className="absolute inset-0 -z-50"
            >
                <Canvas 
                    shadows 
                    camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20}}
                >
                    <OrbitControls target={[0, 0, 0]} enableDamping/>
                    <ambientLight intensity={0.5}/>
                    <Environment 
                        resolution={256} 
                        preset='dawn'
                    >
                        <group rotation={[-Math.PI / 3, 4, 1]}>
                            <Lightformer
                                form={"circle"}
                                intensity={2}
                                position={[0, 5, -9]}
                                scale={10}
                            />
                            <Lightformer
                                form={"circle"}
                                intensity={2}
                                position={[0, 3, 1]}
                                scale={10}
                            />
                            <Lightformer
                                form={"circle"}
                                intensity={2}
                                position={[-5, -1, -1]}
                                scale={10}
                            />
                            <Lightformer
                                form={"circle"}
                                intensity={2}
                                position={[10, 1, 0]}
                                scale={16 }
                            />
                        </group>
                    </Environment>
                    <Float>
                        <Planet scale={isMobile ? 0.7 : 1}/> 
                    </Float>
                </Canvas>
            </figure>
        </section>
    )
}

export default Hero