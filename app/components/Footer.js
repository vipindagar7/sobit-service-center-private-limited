import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import Link from "next/link";


export default function Footer() {
    return (
        <footer className="w-full bg-background border-t py-4 px-6 shadow-lg">
            <Card className="flex flex-col md:flex-row items-center justify-between p-4">
                {/* Left Side */}
                <div className="flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-primary" />
                    <span className="text-lg font-semibold">SOBIT</span>
                </div>

                {/* Middle Links */}
                <nav className="flex gap-4 text-muted-foreground text-sm">
                    <Link href="/about" className="hover:text-primary">About</Link>
                    <Link href="/services" className="hover:text-primary">Services</Link>
                    <Link href="/#contact" className="hover:text-primary">Contact</Link>
                </nav>

                {/* Right Side */}
                <Link href="/#contact" className="text-sm/6 font-semibold">
                    <Button variant="outline" size="sm">Subscribe</Button>
                </Link>
            </Card>
        </footer>
    );
}
