import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


export default function About() {


    return (
        <div className="min-h-screen py-24 bg-background text-foreground">

            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6">About Us</h1>
                <p className="text-lg my-4">
                    Welcome to Sobit Service Centre Pvt. Ltd., a company driven by the vision of empowering rural communities with accessible, high-quality services. We believe that everyone deserves access to essential services that can improve their quality of life, irrespective of where they live. Through our unique franchise model, we aim to bridge the gap between urban conveniences and rural realities, bringing a diverse range of offerings directly to villages across the country.
                </p>
                <p className="text-lg my-4">
                    From telecommunications and financial services to e-commerce, healthcare, and education, our offerings span multiple sectors that are critical to the socio-economic advancement of rural areas. Each service center is designed to be a hub of activity, providing villagers with easy access to resources and opportunities that were once out of reach. Whether it's enabling digital literacy, facilitating online shopping, or supporting small-scale agriculture, our services are crafted to meet the real needs of rural India.


                </p>
                <p className="text-lg my-4">
                    At Sobit Service Centre Pvt. Ltd., we are more than a service provider—we are a catalyst for change. We work hand-in-hand with local communities to understand their challenges and deliver solutions that make a lasting impact. Our approach is rooted in collaboration, innovation, and a deep commitment to uplifting rural lives, one village at a time.

                </p>
            </div>
            <div className="max-w-5xl mx-auto py-10">
                <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                <p className="text-lg my-4">
                    Our mission is to enhance the lives of rural citizens by providing them with reliable services that foster economic growth, convenience, and connectivity. By partnering with local entrepreneurs as franchisees, we create opportunities for employment and community development, ensuring that our services are delivered by people who understand the unique needs and aspirations of the communities they serve.

                </p>
            </div>

            <div className="max-w-5xl mx-auto py-10">
                <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
                <p className="text-lg">
                    To be the leading service provider known for exceptional quality, innovation, and a people-first approach. We envision a future where essential services are available to everyone, contributing to a more connected, informed, and prosperous community.


                </p>
            </div>

            <div className="max-w-5xl mx-auto py-10">
                <h2 className="text-3xl font-semibold mb-4">Our Core Values</h2>
                <ul className="text-lg list-disc list-inside space-y-4">
                    {[
                        { title: "Empowerment", text: "We believe in empowering rural communities by providing them with access to services that open doors to new opportunities and pathways for development." },
                        { title: "Integrity", text: "Transparency, honesty, and respect are the foundations of our work. We are committed to conducting business in a way that builds trust with our customers, franchise partners, and communities." },
                        { title: "Innovation", text: "We continuously explore new ways to improve and expand our offerings to meet the evolving needs of our rural customers, leveraging technology to make services more accessible and efficient." },
                        { title: "Community", text: "At Sobit Service Centre Pvt. Ltd., we put people first. We work closely with each community, tailoring our services to address their specific needs and creating local partnerships to deliver meaningful impact." },
                        { title: "Reliability", text: "Our customers depend on us for consistent and quality service. We are dedicated to maintaining high standards across all our service centers, ensuring that every interaction is marked by reliability and care." }
                    ].map((value, index) => (
                        <li key={index}>
                            <span className="font-semibold">{value.title}: </span>
                            {value.text}
                        </li>
                    ))}
                </ul>
            </div>


        </div>
    );
}