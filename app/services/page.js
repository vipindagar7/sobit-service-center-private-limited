import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BorderBeam } from "../../components/magicui/border-beam";
import {
    Phone,
    Banknote,
    ShoppingBag,
    Globe,
    Truck,
    Cog,
    HeartPulse,
    GraduationCap,
    Home,
    Lightbulb,
    IdCard,
    Store,
} from "lucide-react";

const services = [
    { icon: Phone, title: "Telecom Services", description: "Mobile phone sales, repair, and recharge services to keep you connected." },
    { icon: Banknote, title: "Financial Services", description: "Banking, insurance, and money transfer services for your financial needs." },
    { icon: ShoppingBag, title: "E-commerce Services", description: "Online shopping, delivery, and returns for a seamless shopping experience." },
    { icon: Globe, title: "Digital Services", description: "Internet access, online bill payments, and digital literacy training." },
    { icon: Truck, title: "Logistics Services", description: "Courier, parcel, and package delivery services." },
    { icon: Cog, title: "Agricultural Services", description: "Farm equipment sales, repair, and maintenance." },
    { icon: HeartPulse, title: "Healthcare Services", description: "Medical consultations, lab tests, and medicine sales." },
    { icon: GraduationCap, title: "Education Services", description: "Online courses, tuition, and skill development training." },
    { icon: IdCard, title: "Government Services", description: "Assistance with government schemes, applications, and documentation." },
    { icon: Store, title: "FMCG Services", description: "Sales and distribution of fast-moving consumer goods." },
    { icon: Home, title: "Real Estate Services", description: "Property buying, selling, and rental services." },
    { icon: Lightbulb, title: "Consulting Services", description: "Expert advice and guidance for businesses and individuals." },
];

export default function Service() {
    return (
        <div className="min-h-screen py-24 bg-background text-foreground">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="my-8">
                    <h2 className="text-4xl text-center font-semibold tracking-tight">Our Services</h2>
                </div>
                <p className="text-lg text-center text-muted-foreground">
                    We offer a range of services to meet your diverse needs.
                </p>
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (

                        <Card
                            key={index}
                            className="shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
                        >

                            <CardHeader className="flex flex-col items-center">
                                <service.icon className="w-12 h-12 text-primary" />
                                <CardTitle className="mt-4 text-xl">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center text-muted-foreground">
                                {service.description}
                            </CardContent>

                        </Card>

                    ))}

                </div>
            </div>
        </div>
    );
}