import { ChevronDown } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="w-full bg-gray-colors">
            <div className="md:max-w-7xl w-full mx-auto text-secondary flex items-center justify-center px-4 py-3">
                <ul className="flex items-center gap-8 font-medium">
                    <li className="group flex cursor-pointer items-center gap-1.5 transition-colors duration-200 hover:text-secondary/80">
                        Podcasts 
                        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </li>
                    <li className="flex cursor-pointer items-center gap-1.5 transition-colors duration-200 hover:text-secondary/80">
                        Newsletter
                    </li>
                    <li className="flex cursor-pointer items-center gap-1.5 transition-colors duration-200 hover:text-secondary/80">
                        Events 
                    </li>
                    <li className="flex cursor-pointer items-center gap-1.5 transition-colors duration-200 hover:text-secondary/80">
                        About 
                    </li>
                </ul>
            </div>
        </nav>
    );
}