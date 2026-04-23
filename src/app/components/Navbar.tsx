import { useState } from "react";
import { Link, useLocation } from "react-router";
import { BookOpen, Menu, X } from "lucide-react";

const navLinks = [
    { label: "Beranda", to: "/" },
    { label: "Layanan", to: "/layanan" },
    { label: "Tentang", to: "/tentang" },
    { label: "Artikel", to: "/artikel" },
    { label: "Kontak", to: "/kontak" },
    { label: "E-Book", to: "http://103.174.114.107:6060/dashboard" },
    { label: "Digilib", to: "http://103.174.114.107/slims/index.php" },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (to: string) =>
        to === "/"
            ? location.pathname === "/"
            : location.pathname.startsWith(to);

    return (
        <nav className="fixed top-0 w-full bg-[#fcfbf7]/95 backdrop-blur-sm z-50 border-b border-[#c5a84b]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <img
                            src="/logo-smk.svg"
                            alt="Logo"
                            className="w-10 h-10 object-cover"
                        />
                        <span className="text-xl font-semibold text-[#0d0b04]">
                            KanesaPedia
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`transition-colors font-medium ${
                                    isActive(link.to)
                                        ? "text-[#c5a84b]"
                                        : "text-[#0d0b04]/70 hover:text-[#c5a84b]"
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <button className="px-6 py-2 bg-[#c5a84b] text-[#fcfbf7] rounded-lg hover:bg-[#b39742] transition-all font-medium">
                            Masuk
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-[#0d0b04]"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden pb-4 space-y-3 border-t border-[#c5a84b]/10 pt-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block transition-colors font-medium ${
                                    isActive(link.to)
                                        ? "text-[#c5a84b]"
                                        : "text-[#0d0b04]/70 hover:text-[#c5a84b]"
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <button className="w-full px-6 py-2 bg-[#c5a84b] text-[#fcfbf7] rounded-lg hover:bg-[#b39742] transition-all font-medium">
                            Masuk
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}
