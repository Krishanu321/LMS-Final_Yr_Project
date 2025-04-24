
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-white border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Logo />
            <p className="text-sm text-gray-500 mt-2">
              The AI-powered learning platform for students
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h3 className="font-semibold mb-2">Resources</h3>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>Help Center</li>
                <li>Documentation</li>
                <li>Community</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Legal</h3>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Cookies</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Company</h3>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>About Us</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} EasyStudy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
