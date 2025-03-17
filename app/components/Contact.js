"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MagicCard } from "../../components/magicui/magic-card";

export function Contact() {
    const { theme } = useTheme();

    // State for form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccess(true);
                setFormData({ name: "", email: "", mobile: "", message: "" });
            } else {
                alert("Failed to send email");
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card>
            <MagicCard gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
                <CardHeader>
                    <CardTitle className="text-2xl text-center ">Get in touch</CardTitle>
                    <CardDescription className="py-4">
                        Enter your message, and the admin will contact you back shortly.
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" type="text" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="name@example.com" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="mobile">Phone Number</Label>
                                <Input id="mobile" type="number" placeholder="+911234567890" value={formData.mobile} onChange={handleChange} required />
                            </div>
                            <div className="grid w-full gap-1.5">
                                <Label htmlFor="message">Your message</Label>
                                <Textarea id="message" placeholder="Type your message here." value={formData.message} onChange={handleChange} required />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" className="w-full my-4" disabled={loading}>
                            {loading ? "Sending..." : "Let's Connect"}
                        </Button>
                    </CardFooter>
                </form>
            </MagicCard>
        </Card>
    );
}
