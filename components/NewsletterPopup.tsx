"use client";

import { useState, useEffect } from "react";

const NewsletterPopup = () => {
    const [isVisible, setIsVisible] = useState(false);

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
                <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md relative">
                    <button
                        className="absolute top-2 right-3 text-gray-600 hover:text-gray-800 focus:outline-none"
                        onClick={handleClose}
                    >
                        ✕
                    </button>

                    <h2 className="text-xl font-bold text-center mb-4">¡Suscríbete a nuestro Newsletter!</h2>
                    <p className="text-gray-600 text-center mb-6">
                        Recibe las últimas novedades, promociones y eventos directamente en tu correo.
                    </p>
                    <form className="flex flex-col gap-4">
                        <input
                            required
                            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Tu correo electrónico"
                            type="email"
                        />
                        <button
                            className="bg-[#f48e22] text-white font-bold py-2 px-4 rounded-md hover:bg-[#f48e22cb] transition-all"
                            type="submit"
                        >
                            Suscribirme
                        </button>
                    </form>
                </div>
            </div>
        )
    );
};

export default NewsletterPopup;