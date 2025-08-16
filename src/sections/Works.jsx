import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import AnimatedHeaderSection from "../components/AnimatedHeaderSection"
import { projects } from "../constants"
import { useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
const Works = () => {
    const [currentIndex, setCurrentIndex] = useState(null)
    const text = `Featured projects that have been meticulously
    crafted with passion to drive
    results and impact.`


    const moveX = useRef(null);
    const moveY = useRef(null);
    const mouse = useRef({ x: 0, y: 0 })
    const overlayRefs = useRef([]);

    useGSAP(() => {
        moveX.current = gsap.quickTo(previewRef.current, "x", {
            duration: 1.5,
            ease: "power3.out"
        })
        moveY.current = gsap.quickTo(previewRef.current, "y", {
            duration: 2,
            ease: "power3.out"
        })

        gsap.from('#project', {
            y: 100,
            opacity: 0,
            delay: 0.5,
            duration: 1,
            stagger: 0.3,
            ease: 'back.out',
            scrollTrigger: {
                trigger: '#project'
            }
        })
    }, [])


    const handleMouseEnter = (index) => {
        if (window.innerWidth < 768) return;
        setCurrentIndex(index);

        const el = overlayRefs.current[index];
        if (!el) return;

        gsap.killTweensOf(el)
        gsap.fromTo(el,
            {
                clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'
            },
            {
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
                duration: 0.15,
                ease: 'power2.out'
            }
        )

        gsap.to(previewRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        })
    }
    const handleMouseLeave = (index) => {
        if (window.innerWidth < 768) return;
        setCurrentIndex(null)


        const el = overlayRefs.current[index];
        if (!el) return;

        gsap.killTweensOf(el)
        gsap.to(el, {
            clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
            duration: 0.2,
            ease: 'power2.in'
        })

        gsap.to(previewRef.current, {
            opacity: 0,
            scale: 0.95,
            duration: 0.3,
            ease: 'power2.out'
        })
    }

    const handleMouseMove = (e) => {
        if (window.innerWidth < 768) return;
        mouse.current.x = e.clientX + 24;
        mouse.current.y = e.clientY + 24;
        moveX.current(mouse.current.x);
        moveY.current(mouse.current.y);
    }
    const previewRef = useRef(null);
    return (
        <section id="work" className="flex flex-col min-h-screen">
            <AnimatedHeaderSection
                subTitle={"Logic meets Aesthetics, Seamlessly"}
                title={"Works"}
                text={text}
                textColor={"text-black"}
                withScrollTrigger={true}
            />
            <div
                className="relative flex flex-col font-light"
                onMouseMove={handleMouseMove}
            >
                {projects.map((project, index) => (
                    <div key={project.id} id="project" className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"

                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        {/* overlay */}
                        <div
                            ref={(el) => { overlayRefs.current[index] = el }}
                            className="absolute inset-0 hidden md:block duration-200 bg-black -z-10 clip-path"
                        />
                        {/* title */}
                        <div className="flex justify-between px-10 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white" >
                            <h2 className="lg:text-[32px] text-[26px] leading-none">{project.name}</h2>
                            <FontAwesomeIcon icon={faExternalLinkAlt} className="md:size-6 size-5" />
                        </div>
                        {/* divider */}
                        <div className="w-full h-0.5 bg-black/80" />
                        {/* frameworks */}
                        <div className="flex px-10 text-xs leading-loose uppercase transition-all duration-500 md:text-sm gap-x-5 md:group-hover:px-12">{project.frameworks.map((framework) => (
                            <p key={framework.id} className="text-black transition-color duration-500 md:group-hover:text-white">{framework.name}</p>
                        ))}</div>

                        {/* mobile preview images */}
                        <div className="relative flex items-center justify-center px-10 md:hidden h-[250px]">
                            <img src={project.bgImage} alt={`${project.name}-bg-image`} className="object-cover w-full h-full rounded-md brightness-50" />
                            <img src={project.image} alt={`${project.name}-image`} className="absolute inset-0 object-contain w-full h-full p-8 rounded-xl" />
                        </div>
                    </div>
                ))
                }
                {/* desktop floating preview images */}
                <div ref={previewRef} className="fixed -top-2/6 left-0 z-50 overflow-hidden border-8 border-black pointer-events-none w-[960px] md:block hidden opacity-0">
                    {currentIndex !== null && (<img src={projects[currentIndex].image} alt="preview" className="object-cover w-full h-full" />)}
                </div>
            </div >

        </section >
    )
}

export default Works