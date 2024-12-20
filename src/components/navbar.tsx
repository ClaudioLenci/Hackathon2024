import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export function Navbar() {
    const roots: Array<{page: string, path: string}> = [
        {page: "Aziende", path: "/companies"},
        {page: "Studenti", path: "/students"},
        {page: "Scuola", path: "/schools"}
    ];

    return (
        <div className="bg-secondary-green font-medium gap-6 px-4 flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-3">
                <Link to="/" className="flex flex-row items-center gap-3">
                    <img src={logo} className="h-12"/>
                    <h1 className="font-semibold text-2xl text-black">CareerLink</h1>
                </Link>
                <div className="flex flex-row items-center gap-4 ml-6 py-4">
                    {roots.map((root, index) => (
                        <Link 
                            to={root.path} 
                            key={index} 
                            className="text-primary-charcoal py-2 text-center"
                        >
                            {root.page}
                        </Link>
                    ))}
                </div>
            </div>
            <Link to="/login" className="bg-primary-charcoal text-neutral-white rounded-xl py-2 px-4 hover:bg-primary-charcoal-light shadow-lg transition-all">Login</Link>
        </div>
    );
}
