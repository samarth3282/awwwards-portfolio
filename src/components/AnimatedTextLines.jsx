import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react"


gsap.registerPlugin(ScrollTrigger)

const AnimatedTextLines = ({ text, className, firstWordColor }) => {
    const containerRef = useRef(null);
    const lines = text.split('\n').filter((line) => line.trim() !== "")
    const linesRef = useRef([]);
    useGSAP(() => {
        if (linesRef.current.length > 0) {
            gsap.from(linesRef.current, {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                ease: 'back.out',
                scrollTrigger: {
                    trigger: containerRef.current
                }
            })
        }
    }, [])
    return (
        <div ref={containerRef} className={className}>
            {lines.map((line, index) => {
                const words = line.trim().split(' ');
                const firstWord = words[0];
                const restOfLine = words.slice(1).join(' ');

                return (
                    <span
                        ref={(el) => (linesRef.current[index] = el)}
                        key={index} className="block leading-relaxed tracking-wide text-pretty">
                        <span className={firstWordColor}>{firstWord}</span>
                        {restOfLine && ` ${restOfLine}`}
                    </span>
                );
            })}
        </div>
    )
}

export default AnimatedTextLines