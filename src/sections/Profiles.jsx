import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Tilt from "react-parallax-tilt";
import { profiles } from "../constants";

const ProfileCard = ({
    index,
    testimonial,
    name,
    profile_link,
    image,
    color,
}) => (
    <Tilt
        options={{
            max: 45,
            scale: 1,
            speed: 450,
        }}
    >
        <div
            className="relative bg-white p-8 rounded-2xl max-w-[400px] w-full 
             backdrop-blur-sm duration-300 group min-h-[400px] 
             flex flex-col justify-evenly shadow-lg 
             hover:shadow-2xl hover:shadow-black/40 
             transform hover:-translate-y-2 transition-all 
             border-t-4 overflow-hidden"
            style={{ borderColor: color }}
        >
            {/* Tech grid hover effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="w-full h-full bg-[linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:20px_20px]" />
            </div>
            {/* Quote mark */}
            <div className="text-black font-black text-[42px] leading-none mb-4">
                "
            </div>

            {/* Testimonial / Profile text */}
            <div className="mb-6">
                <p className="text-black tracking-wide text-[20px] leading-relaxed">
                    {testimonial.split(" ").map((word, i) =>
                        /\d/.test(word) ? (
                            <span key={i} className="text-[#cfa355]">
                                {word + " "}
                            </span>
                        ) : (
                            word + " "
                        )
                    )}
                </p>
            </div>

            {/* Profile Link + Image */}
            <div className="flex justify-between items-center">
                <div className="flex-1">
                    <a
                        href={profile_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black font-medium text-[18px] hover:text-[#cfa355] 
                       transition-colors duration-300 font-amiamie 
                       group-hover:scale-105 inline-block transform"
                    >
                        <span className="text-[#cfa355]">@</span> {name}
                    </a>
                </div>

                <a
                    href={profile_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group-hover:scale-110 transition-transform duration-300"
                >
                    <img
                        src={image}
                        alt={`profile-${name}`}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                </a>
            </div>
        </div>
    </Tilt>
);

const About = () => {
    const text = `My online profiles where I code.`;
    const imgRef = useRef(null);

    useGSAP(() => {
        gsap.to("#about", {
            scale: 0.95,
            scrollTrigger: {
                trigger: "#about",
                start: "bottom 80%",
                end: "bottom 20%",
                scrub: true,
                markers: false,
            },
            ease: "power1.inOut",
        });

        gsap.set(imgRef.current, {
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
        });
        gsap.to(imgRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 2,
            ease: "power4.out",
            scrollTrigger: { trigger: imgRef.current },
        });
    });

    return (
        <section
            id="about"
            className="min-h-screen bg-black rounded-b-4xl rounded-t-4xl mt-10 w-full"
        >
            <AnimatedHeaderSection
                subTitle={"my online presence"}
                title={"Profiles."}
                text={text}
                textColor={"text-white"}
                withScrollTrigger={true}
            />

            <section className="md:px-8 flex flex-col justify-center pb-16">
                <div className="flex flex-wrap gap-8 justify-center items-stretch">
                    {profiles.map((profile, index) => (
                        <ProfileCard key={profile.name} index={index} {...profile} />
                    ))}
                </div>
            </section>
        </section>
    );
};

export default About;
