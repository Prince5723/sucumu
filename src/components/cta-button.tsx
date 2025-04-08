import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function CtaButton() {
  return (
    <Button className="group py-3 px-6 text-lg font-medium cursor-pointer h-auto flex items-center">
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