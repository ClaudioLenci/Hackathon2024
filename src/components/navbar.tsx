import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export function Navbar() {
    const roots: Array<{page: string, path: string}> = [
        {page: "Cerca aziende", path: "/search"}
    ]
    return (
        <div className="bg-secondary-green font-medium gap-6 px-4 flex flex-row">
            <Link to="/" className="flex flex-row items-center gap-3">
                <img src={logo} className="h-12"/>
                <h1 className="font-semibold text-2xl text-black">CareerLink</h1>
            </Link>
            <div className="flex flex-row items-center justify-between flex-1 py-4">
                {roots.map((root, index) => (
                    <Link className="text-primary-charcoal" to={root.path} key={index}>{root.page}</Link>
                ))}
                <Link to="/login" className="bg-primary-charcoal text-neutral-white rounded-xl py-2 px-4 self-end">Login</Link>
            </div>
        </div>
    );
}