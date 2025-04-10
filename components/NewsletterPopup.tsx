"use client";

import { useState, useEffect } from "react";

const NewsletterPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [success, setSuccess] = useState(false);
    const [countdown, setCountdown] = useState(5);

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

        const res = await fetch("https://lallavedesol.us17.list-manage.com/subscribe/post", {
            method: "POST",
            mode: "no-cors", // necesario para evitar problemas de CORS
            body: formData,
        });

        // No hay forma de verificar respuesta con `no-cors`, así que asumimos que fue exitoso
        setSuccess(true);
        let counter = 5;
        setCountdown(counter);

        const interval = setInterval(() => {
            counter -= 1;
            setCountdown(counter);
            if (counter === 0) {
                clearInterval(interval);
                setIsVisible(false);
            }
        }, 1000);
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
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <input
                            required
                            className="border border-gray-300 rounded-2xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            disabled={success}
                            name="EMAIL"
                            placeholder="Tu correo electrónico"
                            type="email"
                        />
                        <button
                            className={`font-bold py-2 px-4 rounded-2xl transition-all duration-300 transform
                                ${success
                                    ? "bg-green-500 text-white"
                                    : "bg-[#fd9ef8] text-white hover:bg-[#dd7fd8] active:scale-125 active:translate-y-2 active:translate-x-2"
                                }`}
                            disabled={success}
                            type="submit"
                        >
                            {success ? `¡Enviado! Cerrando en ${countdown}s` : "LO QUIERO YA"}
                        </button>
                    </form>
                </div>
            </div>
        )
    );
};

export default NewsletterPopup;
