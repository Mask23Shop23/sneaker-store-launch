
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo = ({ className, size = 32 }: LogoProps) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-primary", className)}
    >
      {/* Голова */}
      <circle cx="12" cy="9" r="6" fill="currentColor" />
      
      {/* Маска */}
      <path 
        d="M7 9C7 9 8 11 12 11C16 11 17 9 17 9" 
        stroke="white" 
        strokeWidth="1.2" 
        strokeLinecap="round" 
      />
      <rect 
        x="7" 
        y="7.5" 
        width="10" 
        height="3" 
        rx="1.5" 
        fill="white" 
        opacity="0.9" 
      />
      
      {/* Тело */}
      <path 
        d="M6 14.5C6 14.5 6.5 19 9 20C11.5 21 12 20.5 12 20.5C12 20.5 12.5 21 15 20C17.5 19 18 14.5 18 14.5" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
      />
      
      {/* Завязки маски */}
      <path 
        d="M5 8.5C5 8.5 4 8 3.5 9.5" 
        stroke="currentColor" 
        strokeWidth="0.8" 
        strokeLinecap="round" 
      />
      <path 
        d="M19 8.5C19 8.5 20 8 20.5 9.5" 
        stroke="currentColor" 
        strokeWidth="0.8" 
        strokeLinecap="round" 
      />
    </svg>
  );
};

export default Logo;
