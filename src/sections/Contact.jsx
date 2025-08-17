import { useGSAP } from "@gsap/react"
import AnimatedHeaderSection from "../components/AnimatedHeaderSection"
import Marquee from '../components/Marquee'
import BallPit from '../components/BallPit'
import { socials } from '../constants/index'
import gsap from "gsap"
const Contact = () => {
    const items = ["Just imagine, I code", "Just imagine, I code", "Just imagine, I code", "Just imagine, I code", "Just imagine, I code"]


    useGSAP(() => {
        gsap.from('.social-link', {
            y: 100,
            opacity: 0,
            delay: 0.5,
            duration: 1,
            stagger: 0.3,
            ease: 'back.out',
            scrollTrigger: {
                trigger: '.social-link'
            }
        })
    }, [])
    return (
        <section id="contact" className="relative flex flex-col justify-between min-h-screen bg-black overflow-hidden">
            {/* BallPit Background */}
            <div className="absolute inset-0 z-0">
                <BallPit className="w-full h-full"
                    count={500}
                    gravity={4}
                    friction={0.99}
                    wallBounce={0.3}
                    followCursor={false}
                    maxVelocity={1}
                    minSize={0.2}
                    maxSize={0.2}
                    maxZ={0.2}
                    colors={[0x000000, 0x000000, 0xFFFFFF, 0xFFFFFF]} />
            </div>

            {/* Content Layer */}
            <div className="relative z-10">
                <AnimatedHeaderSection
                    subTitle={"You Dream It, I Code it."}
                    title={"Works"}
                    text={`Got a question?
                        Just Ask.`}

                    textColor={"text-white"}
                    withScrollTrigger={true}
                />
                <div className="flex px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10">
                    <div className="flex flex-col w-full gap-10">
                        <div className="social-link">
                            <h2>Email</h2>
                            <div className="w-full h-px my-2 bg-white/30" />
                            <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">samarthnimeshkumarpatel@gmail.com</p>
                        </div>
                        <div className="social-link">
                            <h2>Phone</h2>
                            <div className="w-full h-px my-2 bg-white/30" />
                            <p className="text-xl lowercase md:text-2xl lg:text-3xl">+91 79909 40147</p>
                        </div>
                        <div className="social-link">
                            <h2>Social Media</h2>
                            <div className="w-full h-px my-2 bg-white/30" />
                            <div className="flex flex-wrap gap-2">{
                                socials.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="text-xs leading-loose tracking-widest uppercase md:text-sm hover:text-white/80 transition-colors duration-300"
                                    >
                                        {"{ "}{social.name}{" }"}</a>
                                ))}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-10">
                <Marquee items={items} className="text-white bg-transparent" />
            </div>
        </section>
    )
}

export default Contact