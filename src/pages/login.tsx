import { useState } from "react";

export function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="h-full w-full flex justify-center items-center">
            <div className="bg-neutral-white text-primary-charcoal rounded-2xl px-8 py-10 flex flex-col gap-6 text-xl">
                <div className="flex flex-col gap-1">
                    <h3>Email</h3>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} className="rounded-xl px-4 py-2 outline-none"></input>
                </div>
                <div className="flex flex-col gap-1">
                    <h3>Password</h3>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="rounded-xl px-4 py-2 outline-none"></input>
                </div>
                <input type="submit" value="Login" className="bg-primary-charcoal text-white rounded-xl mx-6 py-2 text-2xl"></input>
            </div>
        </div>
    );
}