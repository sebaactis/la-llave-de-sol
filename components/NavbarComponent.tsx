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
import { useState } from "react";

import logo from "@/public/logo.webp"

export const NavbarComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { title: "HOME", link: "/" },
        { title: "BENEFICIOS", link: "/productos" },
        { title: "TESTIMONIOS", link: "/who" },
        { title: "EXPERIENCIA", link: "/where" },
        { title: "CONTACTO", link: "/contact" },
    ];

    return (
        <Navbar
            className="bg-transparent"
            isBlurred={false}
            maxWidth="full"
            position="sticky"
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent>
                <NavbarBrand className="mt-20 ml-3">
                    <Link href="/">
                        <Image src={logo} width={60} />
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
                <NavbarMenu className="flex flex-col items-center sm:hidden pt-5 gap-2 bg-pink-900/70">
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