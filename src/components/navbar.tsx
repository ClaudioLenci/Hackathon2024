import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useState } from "react";

export function Navbar() {
    const roots: Array<{page: string, path: string}> = [
        {page: "Aziende", path: "/companies"},
        {page: "Studenti", path: "/students"},
        {page: "Scuola", path: "/schools"},
        {page: "Ricerca Azienda", path: "/searchCompany"}
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-secondary-green font-medium gap-6 px-4 flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-3">
                <Link to="/" className="flex flex-row items-center gap-3">
                    <img src={logo} className="h-12 my-2" />
                    <h1 className="font-semibold text-2xl text-black">CareerLink</h1>
                </Link>
                {/* Desktop Navigation */}
                <div className="hidden md:flex flex-row items-center gap-4 ml-6 py-6">
                    {roots.map((root, index) => (
                        <Link 
                            to={root.path} 
                            key={index} 
                            className="text-primary-charcoal text-center"
                        >
                            {root.page}
                        </Link>
                    ))}
                </div>
            </div>
            {/* Mobile Navigation Button (Hamburger) */}
            <button 
                className="md:hidden text-white p-2"
                onClick={toggleMenu}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-secondary-green flex flex-col items-center py-6 md:hidden z-50 shadow-md">
                    {roots.map((root, index) => (
                        <Link 
                            to={root.path} 
                            key={index} 
                            className="text-primary-charcoal"
                            onClick={() => setIsMenuOpen(false)} // Close the menu on item click
                        >
                            {root.page}
                        </Link>
                    ))}
                    <Link 
                        to="/login" 
                        className="bg-primary-charcoal text-neutral-white rounded-lg py-2 px-5 hover:bg-primary-charcoal-light shadow-lg transition-all mt-4"
                    >
                        Login
                    </Link>
                </div>
            )}

            {/* Desktop Login Button */}
            <Link 
                to="/login" 
                className="hidden md:block bg-primary-charcoal text-neutral-white rounded-lg py-2 px-5 hover:bg-primary-charcoal-light shadow-lg transition-all"
            >
                Login
            </Link>
        </div>
    );
}
