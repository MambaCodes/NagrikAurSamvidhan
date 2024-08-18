import { Link } from "react-router-dom";
import { ConfettiButton } from "@/components/magicui/confetti";

const products = [

    {
        title: "Samsung 65\" 4K Ultra HD Smart TV",
        description: "The customer reported that the TV screen had dead pixels and was cracked upon arrival.",
        label: "Damaged Product",
        href: "/analysis/samsung-65-tv",
    },
    {
        title: "Apple AirPods Pro",
        description: "The customer reported that the AirPods were not charging properly and one of the earbuds was defective.",
        label: "Faulty Product",
        href: "/analysis/apple-airpods-pro",
    },
    {
        title: "Fitbit Charge 5",
        description: "The customer ordered the wrong size band for the fitness tracker and would like to exchange it for a different size.",
        label: "Incorrect Size",
        href: "/analysis/fitbit-charge-5",
    },
    {
        title: "Samsonite Winfield 3 Hardside Luggage",
        description: "The customer received the luggage with a broken zipper and a cracked exterior.",
        label: "Damaged Product",
        href: "/analysis/samsonite-winfield-3-luggage",
    },
    {
        title: "Ninja Foodi 5-in-1 Indoor Grill",
        description: "The customer received the grill with a damaged heating element, making it unsafe to use.",
        label: "Damaged Product",
        href: "/analysis/ninja-foodi-grill",
    },
    {
        title: "Dyson V11 Torque Drive Cordless Vacuum",
        description: "The customer received the vacuum with a broken motor, causing it to lose suction power.",
        label: "Damaged Product",
        href: "/analysis/dyson-v11-vacuum",
    },
    {
        title: "Outdoor Research Men's Helium Rain Jacket",
        description: "The customer was not satisfied with the quality and functionality of the jacket and would like a refund.",
        label: "Didn't Meet Expectations",
        href: "/analysis/outdoor-research-jacket",
    },
];


export default function V0Products() {
    
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-primary text-primary-foreground py-4 px-6">
                <h1 className="text-2xl font-bold">Returned Products</h1>
            </header>
            <main className="flex-1 py-8 px-4 md:px-6">
                <div className="max-w-3xl mx-auto grid gap-6">
                    {products.map((product, index) => (
                        <div key={index} className="bg-card p-6 rounded-lg border shadow">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-semibold">{product.title}</h2>
                                <span className="bg-muted px-3 py-1 rounded-full text-sm text-muted-foreground">
                                    {product.label}
                                </span>
                            </div>
                            <p className="text-muted-foreground">{product.description}</p>
                            <div className="flex flex-row gap-4 mt-4">
                                <Link
                                    to={product.href}
                                    className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary text-sm " 
                                    prefetch={false}
                                >
                                    Get AI Analysis
                                </Link>
                                <div className="relative">
                                    <ConfettiButton
                                        options={{
                                            get angle() {
                                                return Math.random() * 360;
                                            },
                                        }}
                                        className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-secondary text-secondary-foreground font-medium transition-colors hover:bg-secondary/90 focus:outline-none focus:ring-1 focus:ring-secondary"
                                        // onClick={}
                                    >
                                        View Product Details
                                    </ConfettiButton>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
