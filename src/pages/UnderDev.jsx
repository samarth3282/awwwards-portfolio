import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const UnderDev = () => {
    const navigate = useNavigate();

    const handleBackToPortfolio = () => {
        const scrollPosition = sessionStorage.getItem('portfolioScrollPosition') || '0';
        navigate('/');
        setTimeout(() => {
            window.scrollTo({
                top: parseInt(scrollPosition),
                behavior: 'smooth'
            });
        }, 100);
    };

    return (
        <div className="font-amiamie font-light min-h-screen bg-white text-black flex flex-col items-center justify-center px-4">
            <div className="max-w-2xl mx-auto text-center">
                {/* Icon */}
                <div className="mb-8">
                    <Icon
                        icon="mdi:tools"
                        className="text-6xl md:text-8xl text-gold mx-auto mb-4 animate-pulse"
                    />
                </div>

                {/* Main Title */}
                <h1 className="font-amiamie text-4xl md:text-6xl mb-6 tracking-tight">
                    <span className="text-black">Under</span>{' '}
                    <span className="text-gold">Development</span>
                </h1>

                {/* Subtitle */}
                <p className="font-amiamie text-lg md:text-xl text-black mb-8 leading-relaxed">
                    This project is currently being crafted with{' '}
                    <span className="text-gold ">attention to detail</span>.
                    I'm working hard to bring you something{' '}
                    <span className="text-gold d">amazing</span>!
                </p>

                {/* Development Status */}
                <div className="bg-black rounded-lg p-6 mb-8 border border-yellow-500 shadow-lg">
                    <h3 className="font-amiamie text-xl  mb-4 text-gold">
                        What's Coming?
                    </h3>
                    <div className="space-y-3 text-left text-white font-amiamie">
                        <div className="flex items-center gap-3">
                            <Icon icon="mdi:check-circle" className="text-gold text-xl" />
                            <span>Project Architecture Planning</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Icon icon="mdi:loading" className="text-gold text-xl animate-spin" />
                            <span>Core Features Development</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Icon icon="mdi:clock-outline" className="text-gold text-xl" />
                            <span>Testing & Optimization</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Icon icon="mdi:clock-outline" className="text-gold text-xl" />
                            <span>Final Deployment</span>
                        </div>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-amiamie text-sm text-black">Development Progress</span>
                        <span className="font-amiamie text-sm text-gold ">65%</span>
                    </div>
                    <div className="w-full bg-black rounded-full h-2 border border-yellow-500">
                        <div
                            className="bg-gold h-2 rounded-full transition-all duration-1000 shadow-lg"
                            style={{ width: '65%' }}
                        ></div>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={handleBackToPortfolio}
                        className="font-amiamie px-8 py-3 bg-white text-black  rounded-lg hover:bg-gold hover:text-black transition-all duration-300 flex items-center gap-2 justify-center transform hover:scale-105 shadow-lg border-2 border-yellow-500"
                    >
                        <Icon icon="mdi:arrow-left" />
                        Back to Portfolio
                    </button>
                    <a
                        href="mailto:samarthnimeshkumarpatel@gmail.com?subject=Interested in Project Updates"
                        className="font-amiamie px-8 py-3 border-2 border-yellow-500 text-gold  rounded-lg hover:bg-gold hover:text-black transition-all duration-300 flex items-center gap-2 justify-center transform hover:scale-105"
                    >
                        <Icon icon="mdi:email-outline" />
                        Get Notified
                    </a>
                </div>

                {/* Footer Note */}
                <p className="font-amiamie text-sm text-black mt-8">
                    Expected completion: Coming Soon •
                    <a
                        href="https://github.com/samarth3282"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold hover:text-black ml-1"
                    >
                        Follow updates on GitHub
                    </a>
                </p>
            </div>

            {/* Background Animation */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold rounded-full animate-ping"></div>
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-gold rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-gold rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-gold rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
                <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-gold rounded-full animate-ping" style={{ animationDelay: '4s' }}></div>
            </div>
        </div>
    );
};

export default UnderDev;
