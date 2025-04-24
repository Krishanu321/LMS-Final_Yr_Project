
import { Logo } from "./logo";
import { MainNav } from "./main-nav";
import { UserNav } from "./user-nav";
import { MobileNav } from "./mobile-nav";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export function Header() {
  const isMobile = useIsMobile();

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 md:px-8">
        <Logo />
        {!isMobile && (
          <div className="ml-auto flex items-center space-x-4">
            <MainNav />
            <div className="relative ml-4">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search courses..."
                className="w-64 rounded-md border border-input bg-background pl-8 pr-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <UserNav />
          </div>
        )}
        {isMobile && (
          <div className="ml-auto flex items-center">
            <MobileNav />
          </div>
        )}
      </div>
    </div>
  );
}
