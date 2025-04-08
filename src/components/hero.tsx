import Image from "next/image";
import { RotateText } from "./text-rotate";
import { CtaButton } from "./cta-button";
import { AvatarCirclesDemo } from "./avatar";
import { RatingStars } from "./ui/rating";

export default function Hero() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-around w-full min-h-screen px-4 md:px-8 py-12 gap-8 ">
            <div className="w-full md:max-w-2xl">
                <RotateText />
                <p className="text-xl md:text-2xl font-medium text-gray-700 max-w-xl mt-6">
                    Enjoy premium roasted flaxseed snacks, loaded with omega-3s, fiber, and protein — a smart choice for a healthy lifestyle
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center gap-6">
                    <div>
                        <CtaButton />
                    </div>
                    <div className="flex items-center gap-4 mt-6 sm:mt-0">
                        <AvatarCirclesDemo />
                        <div>
                            <div className="flex items-center gap-2">
                                <RatingStars rating={5} />
                                <p className="text-lg font-semibold text-gray-800">4.8</p>
                            </div>
                            <p className="text-md text-gray-600">from 1000+ <span className="underline cursor-pointer">reviews</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/3 mt-8 md:mt-0">
                <Image
                    src="/sucumu-hero-bg.jpeg"
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover rounded-2xl shadow-lg"
                    alt="Flaxseed snacks product image"
                />
            </div>
        </div>
    );
}