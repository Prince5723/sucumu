'use client'
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function CtaButton() {
  function handleButtonClick() {
    const phoneNumber = "8700398984"; // Replace with your phone number (with country code)
    const message = "Hi! I’m interested in ordering your roasted flaxseed snacks."; // Customize this
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(url, "_blank");
  }

  return (
    <Button
      onClick={handleButtonClick}
      className="group py-3 px-6 text-lg font-medium cursor-pointer h-auto flex items-center"
    >
      Order Now
      <ArrowRight
        className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
        size={20}
        strokeWidth={2}
        aria-hidden="true"
      />
    </Button>
  );
}

export { CtaButton };
