
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { 
  LayoutDashboard, 
  BookOpen, 
  GraduationCap, 
  FlaskConical, 
  Settings, 
  CreditCard,
  Search,
  UserCircle,
  FileText
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";

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
  {
    label: "Profile",
    icon: UserCircle,
    href: "/profile",
    color: "text-orange-500",
  },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <Logo />
          </div>
          <div className="p-4 border-b">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full rounded-md border border-input bg-background pl-8 pr-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
          </div>
          <div className="flex-1 overflow-auto p-4">
            <nav className="flex flex-col space-y-2">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  to={route.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-x-2 text-sm font-medium p-2 rounded-lg hover:bg-secondary",
                    location.pathname === route.href
                      ? "bg-secondary text-secondary-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  <route.icon className={cn("h-5 w-5", route.color)} />
                  {route.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
