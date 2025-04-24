
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="bg-brand-blue p-1 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M22 12A10 10 0 1 1 12 2a10 10 0 0 1 10 10Z" />
          <path d="M16 12V8" />
          <path d="M12 16V8" />
          <path d="M8 12V8" />
        </svg>
      </div>
      <span className="font-bold text-xl text-brand-dark">EasyStudy</span>
    </div>
  );
};
