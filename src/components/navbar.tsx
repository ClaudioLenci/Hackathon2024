import { Link } from "react-router-dom";

export function Navbar() {
    const roots: Array<{page: string, path: string}> = [
        {page: "Cerca aziende", path: "/search"}
    ]
    return (
        <div className="bg-primary-moonstone text-black font-medium p-4 flex flex-row items-center justify-between">
            {roots.map((root, index) => (
                <Link className="" to={root.path} key={index}>{root.page}</Link>
            ))}
            <Link to="/login" className="bg-primary-charcoal text-neutral-white rounded-xl py-2 px-4 self-end">Login</Link>
        </div>
    );
}