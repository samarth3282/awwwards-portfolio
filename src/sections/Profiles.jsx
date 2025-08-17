import { useRef } from "react"
import Marquee from "../components/Marquee";
import { Icon } from "@iconify/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Profiles = () => {
    const items = ['Innovation', 'Precision', "Trust", 'Collaboration', 'Excellence']
    const items2 = ['contact us', 'contact us', 'contact us', 'contact us', 'contact us']
    const containerRef = useRef(null);


    useGSAP(() => {
        gsap.to(containerRef.current, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
                markers: false
            }
        })
    })
    return (
        <section ref={containerRef} className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16">
            <Marquee items={items} />
            <div className="overflow-hidden  text-center font-light contact-text-responsive">
                <p>" Let's build a <br />
                    <span className="font-normal">memorable</span> & <span className="italic">inspiring</span> <br />
                    web application <span className="text-gold">together</span> "</p>
            </div>

            {/* Test section - remove this later
            <div className="flex gap-4 p-4">
                {squareIcons.map((iconName, index) => (
                    <div key={index} className="flex flex-col items-center gap-2">
                        <Icon icon={iconName} className="w-6 h-6 text-gold" />
                        <span className="text-xs">{iconName}</span>
                    </div>
                ))}
            </div> */}

            <Marquee
                items={items2}
                reverse={true} className="text-black bg-transparent border-y-3"
            />
        </section>
    )
}
