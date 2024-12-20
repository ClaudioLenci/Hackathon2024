import { useState } from "react";

export function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="h-full flex justify-center items-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col gap-6 w-96">
                <h2 className="text-2xl font-semibold text-gray-800 text-center">Login</h2>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm font-medium text-gray-600">Email</label>
                        <input
                            id="email"
                            type="text"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-sm font-medium text-gray-600">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 transition-all focus:ring-2 focus:ring-blue-300"
                >
                    Login
                </button>
            </div>
        </div>
    );
}