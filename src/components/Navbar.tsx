import { useState, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const navList = [
        { list: "Home", link: "#" },
        { list: "Projects", link: "#projects" },
        { list: "Skills", link: "#skills" },
        { list: "About", link: "#about" },
        { list: "Contact", link: "#contact" },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                setIsScrollingUp(false);
            } else {
                setIsScrollingUp(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <nav
            className={`fixed w-full z-50 transition-transform duration-300 ${isScrollingUp ? "translate-y-0" : "-translate-y-full"
                } py-5 px-8 bg-baseWhiteBg`}
        >
            <div className="container flex items-center justify-between relative">
                <div>
                    <h1 className="text-2xl font-extrabold gradient-text drop-shadow-sm">
                        <a href="#">DEVCASS</a>
                    </h1>
                </div>

                {/* Desktop Navbar */}
                <ul className="hidden lg:flex gap-8">
                    {navList.map(({ link, list }) => (
                        <li key={list} className="relative group">
                            <a
                                href={link}
                                className="text-sm hover:text-baseColor transition-colors duration-300"
                            >
                                {list}
                            </a>
                            {/* Animated underline */}
                            <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-baseColor transition-all duration-300 ease-in-out group-hover:w-full" />
                        </li>
                    ))}
                </ul>

                {/* Responsive Navbar */}
                <RiMenu3Fill
                    className="text-baseColor text-2xl cursor-pointer lg:hidden"
                    onClick={toggleMenu}
                />

                {isMenuOpen && (
                    <ul className={`${isScrollingUp ? "translate-y-0" : "-translate-y-full"
                        } w-full flex flex-col gap-5 items-center absolute py-5 top-[3.25rem]  left-0 bg-baseWhiteBg shadow-md rounded-b-full lg:hidden`}>
                        {navList.map(({ link, list }) => (
                            <li key={list}>
                                <a
                                    href={link}
                                    className="text-gray-800 hover:text-baseColor"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {list}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
};
