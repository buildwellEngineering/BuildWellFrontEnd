
import React, { useState, useEffect, useRef } from 'react';
import menu from '../assests/Images/menu.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Offcanvas } from 'bootstrap';
import './styles/Navigation.css';
import logo123 from '../assests/Images/download.png';

export default function Navigation() {
    const [navBackground, setNavBackground] = useState('transparent');
    const [activeSection, setActiveSection] = useState(null);
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
    const offcanvasRef = useRef(null);
    const toggleButtonRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth <= 768) {
                setNavBackground(window.scrollY > 100 ? '#EDCD1F' : 'transparent');
            }

            const sections = document.querySelectorAll('.scroll-section');
            let currentSectionId = null;
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - sectionHeight / 2 && window.scrollY < sectionTop + sectionHeight / 2) {
                    currentSectionId = section.id;
                }
            });

            if (currentSectionId) {
                setActiveSection(currentSectionId);
            }
        };

        const initializeOffcanvas = () => {
            const offcanvasElement = offcanvasRef.current;
            const offcanvas = new Offcanvas(offcanvasElement);
            offcanvasElement.addEventListener('hidden.bs.offcanvas', () => {
                setIsOffcanvasOpen(false);
                document.body.style.overflow = 'auto'; // Ensure body scrollable after offcanvas hides
            });
            return offcanvas;
        };

        const handleToggle = () => {
            const offcanvas = initializeOffcanvas();
            if (!isOffcanvasOpen) {
                offcanvas.show();
                setIsOffcanvasOpen(true);
                document.body.style.overflow = 'hidden'; // Prevent scrolling when offcanvas is open
            } else {
                offcanvas.hide();
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check on mount

        const toggleButton = toggleButtonRef.current;
        toggleButton.addEventListener('click', handleToggle);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            toggleButton.removeEventListener('click', handleToggle);
        };
    }, [isOffcanvasOpen]);

    const handleOffcanvasItemClick = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                 behavior: 'smooth',
                 block: 'start',  // Align the top of the element with the top of the viewport
                 inline: 'start',  // Align the left side of the element with the left side of the viewport
                 blockOffset: 100  // Adjust this value as per your design and layout
            });

            const offcanvas = Offcanvas.getInstance(offcanvasRef.current);
            if (offcanvas) {
                offcanvas.hide();
                setIsOffcanvasOpen(false);
                document.body.style.overflow = 'auto'; // Ensure body scrollable after offcanvas hides
            }
        }
    };

    return (
        <>
            <nav className="fixed-top" style={{ height: 'auto' }}>
                <div className="nav-container container" style={{ background: navBackground }}>
                    <div className="row">
                        <ul className="nav nav-part-1 col-lg-3 col-8 col-sm-6">
                            <li className="nav-item nav-brand" style={{ background: '#EDCD1F' }}>
                                <a className="nav-link py-4 px-4" href="/" style={{ color: 'black' }}>
                                    <img src={logo123} alt="Logo" className="img-fluid" />
                                </a>
                            </li>
                        </ul>
                        <ul className="nav nav-part-2 d-none d-lg-flex col-lg-9 justify-content-end align-items-center">
                            {['Header', 'OurMission', 'AboutUs', 'Projects', 'ContactUs'].map(section => (
                                <li className="nav-item" key={section}>
                                    <a
                                        className={`nav-link px-3 py-3 ${activeSection === section ? 'active' : ''}`}
                                        href={`#${section}`}
                                        onClick={(e) => { e.preventDefault(); handleOffcanvasItemClick(section); }}
                                    >
                                        {section.replace(/([A-Z])/g, ' $1').trim()}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="menu-btn d-lg-none d-flex justify-content-end col-4 col-sm-6">
                            <button
                                ref={toggleButtonRef}
                                type="button"
                                className="btn"
                                aria-label="Toggle navigation"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#demo"
                            >
                                <img src={menu} className="img-fluid" id="off-nav-btn" alt="Menu" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="offcanvas offcanvas-start" data-bs-backdrop="false" tabIndex="-1" id="demo" ref={offcanvasRef} style={{ width: '100%', height: '100%', background: '#00345c', color: 'white' }}>
                <div className="offcanvas-header d-flex justify-content-end">
                    <button type="button" className="text-reset border border-0 bg-transparent" data-bs-dismiss="offcanvas" aria-label="Close">
                        <FontAwesomeIcon icon={faXmark} size="2xl" />
                    </button>
                </div>
                <div className="offcanvas-body">
                    <ul className="nav d-flex flex-column align-items-center">
                        {['Header', 'OurMission', 'AboutUs', 'Projects', 'ContactUs'].map(section => (
                            <li className="nav-item" key={section}>
                                <a
                                    className={`nav-link ${activeSection === section ? 'active' : ''}`}
                                    href={`#${section}`}
                                    onClick={(e) => { e.preventDefault(); handleOffcanvasItemClick(section); }}
                                >
                                    {section.replace(/([A-Z])/g, ' $1').trim()}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
