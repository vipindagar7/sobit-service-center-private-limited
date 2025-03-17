import { BentoCard, BentoGrid } from "../../components/magicui/bento-grid";
import Image from "next/image";

import { WifiIcon, HomeIcon, CreditCardIcon, ShoppingCartIcon, BriefcaseIcon } from "lucide-react";

const features = [
    {
        Icon: WifiIcon,
        name: "Seamless Digital Solutions",
        description: "Get fast internet, effortless online bill payments, and expert-led digital literacy programs to stay ahead in the digital era.",
        href: "/services",
        cta: "Explore Now",
        className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
        Icon: HomeIcon,
        name: "Your Dream Home Awaits",
        description: "Discover top-tier property buying, selling, and rental services to find a place you truly call home.",
        href: "/services",
        cta: "View Listings",

        className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
        Icon: CreditCardIcon,
        name: "Smart Financial Solutions",
        description: "From banking and insurance to secure money transfers—empower your financial future with ease.",
        href: "/services",
        cta: "Get Started",

        className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
        Icon: ShoppingCartIcon,
        name: "Fast-Moving Consumer Goods",
        description: "Access a wide range of high-quality, everyday essentials with seamless distribution and sales support.",
        href: "/services",
        cta: "Shop Now",
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
        Icon: BriefcaseIcon,
        name: "Expert Business Consulting",
        description: "Accelerate your business growth with professional insights, strategic planning, and industry-leading expertise.",
        href: "/services",
        cta: "Book a Consultation",

        className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
];


export function Services() {
    return (
        <BentoGrid className="lg:grid-rows-3">
            {features.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
            ))}
        </BentoGrid>
    );
}
