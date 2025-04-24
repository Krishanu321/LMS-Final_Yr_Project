
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  BookOpen, 
  GraduationCap, 
  FlaskConical, 
  Settings, 
  CreditCard,
  FileText
} from "lucide-react";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
    color: "text-sky-500",
  },
  {
    label: "Courses",
    icon: BookOpen,
    href: "/courses",
    color: "text-violet-500",
  },
  {
    label: "Study Material",
    icon: GraduationCap,
    href: "/study-material",
    color: "text-pink-700",
  },
  {
    label: "AI Assistant",
    icon: FlaskConical,
    href: "/ai-assistant",
    color: "text-emerald-500",
  },
  {
    label: "Exam Prep",
    icon: FileText,
    href: "/exam-prep",
    color: "text-amber-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-gray-500",
  },
  {
    label: "Billing",
    icon: CreditCard,
    href: "/billing",
    color: "text-rose-500",
  },
];

export function MainNav() {
  const location = useLocation();
  
  return (
    <div className="flex gap-6 md:gap-10">
      <nav className="flex items-center space-x-6">
        {routes.map((route) => (
          <Link
            key={route.href}
            to={route.href}
            className={cn(
              "flex items-center text-sm font-medium transition-colors hover:text-brand-blue",
              location.pathname === route.href
                ? "text-brand-blue font-semibold"
                : "text-muted-foreground"
            )}
          >
            <div className="flex items-center gap-x-2">
              <route.icon className={cn("h-4 w-4", route.color)} />
              <span className="hidden md:block">{route.label}</span>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
}
