"use client";

import { useState } from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ModeToggle } from "./ModeToggleButton";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full fixed p-4 shadow-md bg-transparent backdrop-blur-sm z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-blue-800">
                    SOBIT
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Navigation Menu */}
                <div
                    className={`${isOpen ? "flex flex-col items-center justify-center backdrop-blur-sm bg-white dark:bg-black z-50" : "hidden"} 
  fixed lg:flex lg:items-center lg:space-x-6 absolute lg:static w-full left-0 top-16 lg:w-auto p-4 lg:p-0 transition-all ease-in-out duration-300`}
                >

                    <NavigationMenu>
                        <NavigationMenuList className="flex flex-col lg:flex-row lg:gap-6 w-full">
                            <NavigationMenuItem className="w-full">
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-full text-center py-3`}>
                                        Home
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem className="w-full">
                                <Link href="/about" legacyBehavior passHref>
                                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-full text-center py-3`}>
                                        About
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem className="w-full">
                                <Link href="/services" legacyBehavior passHref>
                                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-full text-center py-3`}>
                                        Services
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem className="w-full">
                                <Link href="/#contact" legacyBehavior passHref>
                                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-full text-center py-3`}>
                                        Contact
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <div className="w-full flex justify-center py-3">
                                <ModeToggle />
                            </div>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
