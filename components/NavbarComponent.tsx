"use client";

import {
    Navbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarMenuItem,
} from "@nextui-org/navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import logo from "@/public/logo.png"
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
                        <Image alt="logo" className={`transition-all ${isScrolled ? "w-[60%]" : "w-[50%]"} duration-400 ${isScrolled ? 'pb-6 md:pb-3.5' : isMenuOpen ? "pb-20 md:pb-3.5" : ""}`} src={logo} width={isScrolled ? 100 : isMenuOpen ? 100 : 140} />
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