"use client";

import { useState, useEffect } from "react";

const NewsletterPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const emailInput = form.elements.namedItem("EMAIL") as HTMLInputElement;
        const email = emailInput.value;

        const formData = new FormData();
        
        formData.append("EMAIL", email);
        formData.append("u", "b53aeb6e2cf533144bd2d6f76");
        formData.append("id", "ada9892778");
        formData.append("f_id", "00d68ae2f0");

        await fetch("https://lallavedesol.us17.list-manage.com/subscribe/post", {
            method: "POST",
            mode: "no-cors",
            body: formData,
        });

        setSuccess(true);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        isVisible && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-white rounded-2xl shadow-lg p-6 w-[90%] max-w-md relative">
                    <button
                        className="absolute top-2 right-3 text-gray-600 hover:text-gray-800 focus:outline-none"
                        onClick={handleClose}
                    >
                        ✕
                    </button>

                    <h2 className="text-xl font-bold text-center mb-4">Regalo de bienvenida</h2>
                    <p className="text-gray-600 text-center mb-6">
                        7 desayunos sin azúcar y sin glúten
                        para que arranques tu día con medicina en tu cocina
                    </p>
                    {success ? (
                        <div className="text-center text-[#fd9ef8] font-semibold">
                            ¡Enviado! Gracias por suscribirte 💌
                        </div>
                    ) : (
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <input
                                required
                                className="border border-gray-300 rounded-2xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                name="EMAIL"
                                placeholder="Tu correo electrónico"
                                type="email"
                            />
                            <button
                                className="bg-[#fd9ef8] text-white font-bold py-2 px-4 rounded-2xl hover:bg-[#dd7fd8] active:scale-125 active:translate-y-2 active:translate-x-2 transition-all duration-300 transform"
                                type="submit"
                            >
                                LO QUIERO YA
                            </button>
                        </form>
                    )}
                </div>
            </div>
        )
    );
};

export default NewsletterPopup;
