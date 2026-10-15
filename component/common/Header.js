import Logo from "../icon/Logo";
import Search from "../icon/Search";
import Socials from "../icon/Socials";

export default function Header({ className = "" }) {
    return (
        <header className={`w-full ${className}`}>
            <div className="md:max-w-7xl w-full mx-auto flex items-center justify-between px-4 py-1">
                {/* Socials */}
                <div className="flex items-center cursor-pointer transition-opacity duration-200 hover:opacity-90">
                    <Socials className="h-18" />
                </div>

                {/* Logo */}
                <div className="flex items-center cursor-pointer transition-transform duration-200 hover:scale-[1.02]">
                    <Logo className="h-10" />
                </div>

                {/* Search Button */}
                <button 
                    type="button" 
                    className="group text-primary cursor-pointer flex items-center gap-2.5 font-medium transition-colors duration-200 hover:text-primary/95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/90 rounded-md px-2 py-1"
                >
                    <span>Kërko</span>
                    <Search className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
                </button>
            </div>
        </header>
    );
}