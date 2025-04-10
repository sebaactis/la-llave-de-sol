/* eslint-disable @next/next/no-img-element */
"use client";

import {
    Navbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarMenuItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import { useEffect, useState } from "react";

import { montserrat } from "@/utils/typographies";

export const NavbarComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const menuItems = [
        { title: "HOME", link: "/" },
        { title: "BENEFICIOS", link: "#benefits" },
        { title: "TESTIMONIOS", link: "#testimonials" },
        { title: "EXPERIENCIA", link: "#call-to-action" },
        { title: "CONTACTO", link: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 160) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Navbar
            className={`${montserrat.className} sticky top-0 transition-all duration-300 ${isScrolled ? "bg-black/40 md:bg-black/10 backdrop-blur-md py-3" : "bg-transparent"
                }`}
            isBlurred={false}
            isMenuOpen={isMenuOpen}
            maxWidth="full"
            position="sticky"
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent>
                <NavbarBrand className={`${isScrolled ? "mt-5 md:mt-2" : "mt-20"}`}>
                    <Link href="/">
                        <img
                            alt="logo"
                            className={`transition-all duration-400 ${isScrolled ? "w-[30%] md:w-[10%] pb-6 md:pb-3.5" : isMenuOpen ? "w-[30%] md:w-[50%] pb-16 md:pb-3.5" : "w-[40%] md:w-[15%]"}`}
                            src="/logo.png"
                        />
                    </Link>
                </NavbarBrand>

                <NavbarContent
                    className="hidden sm:flex"
                    justify="end"
                >
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem
                            key={`${item}-${index}`}
                            className="text-white px-2 py-2 2xl:px-2 transition-all duration-200 navbar-item"
                        >
                            <Link className="text-xl" href={item.link}>
                                {item.title}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarContent>
            </NavbarContent>

            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden text-white"
            />

            {isMenuOpen && (
                <NavbarMenu className={`bg-black/70 flex flex-col items-center sm:hidden pt-5 gap-2 mt-5`}>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link className="text-xl italic text-white" href={item.link} onClick={() => setIsMenuOpen(false)}>
                                {item.title}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            )}
        </Navbar>
    );
};