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

import logo from "@/public/logo.webp"

export const NavbarComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const menuItems = [
        { title: "HOME", link: "#home" },
        { title: "BENEFICIOS", link: "#benefits" },
        { title: "TESTIMONIOS", link: "/who" },
        { title: "EXPERIENCIA", link: "/where" },
        { title: "CONTACTO", link: "/contact" },
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
            className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/40 md:bg-black/10 backdrop-blur-md py-2" : "bg-transparent"
                }`}
            isBlurred={false}
            maxWidth="full"
            position="sticky"
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent>
                <NavbarBrand className={`${isScrolled ? "mt-5 md:mt-2" : "mt-20"} `}>
                    <Link href="/">
                        <Image alt="logo" src={logo} width={isScrolled ? 40 : 70}/>
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
                            <Link className="text-lg font-extrabold" href={item.link}>
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
                <NavbarMenu className="flex flex-col items-center sm:hidden pt-5 gap-2 bg-black/40">
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link className="text-xl italic text-white" href={item.link}>
                                {item.title}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            )}
        </Navbar>
    );
};