import { Link } from "react-router";
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Instagram,
    Twitter,
    Facebook,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background text-foreground py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-10 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <img
                                src="/logo-smk.svg"
                                alt="Logo"
                                className="w-10 h-10 object-cover"
                            />
                            <span className="text-xl font-semibold">
                                KanesaPedia
                            </span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                            Membangun jembatan menuju masa depan; platform literasi digital revolusioner 
                            untuk memfasilitasi para pencipta inovasi sejati.
                        </p>
                        <div className="flex gap-3">
                            {[Instagram, Twitter, Facebook].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-9 h-9 rounded-full bg-[#fcfbf7]/10 hover:bg-[#c5a84b] transition-colors flex items-center justify-center"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigasi */}
                    <div>
                        <h4 className="font-semibold mb-5 text-[#c5a84b]">
                            Navigasi
                        </h4>
                        <ul className="space-y-3 text-muted-foreground text-sm">
                            {[
                                { label: "Beranda", to: "/" },
                                { label: "Layanan", to: "/layanan" },
                                { label: "Tentang", to: "/tentang" },
                                { label: "Artikel", to: "/artikel" },
                                { label: "Kontak", to: "/kontak" },
                            ].map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="hover:text-[#c5a84b] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Kontak */}
                    <div>
                        <h4 className="font-semibold mb-5 text-[#8cdada]">
                            Kontak
                        </h4>
                        <ul className="space-y-3 text-muted-foreground text-sm">
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-[#8cdada] shrink-0" />
                                <span>info@kanesapedia.sch.id</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-[#8cdada] shrink-0" />
                                <span>(021) 1234-5678</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 text-[#8cdada] shrink-0 mt-0.5" />
                                <span>
                                    Jl. Pendidikan No. 123, Jakarta Selatan
                                    12345
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Jam Operasional */}
                    <div>
                        <h4 className="font-semibold mb-5 text-[#6e84d0]">
                            Jam Operasional
                        </h4>
                        <ul className="space-y-3 text-muted-foreground text-sm">
                            <li className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-[#6e84d0] shrink-0" />
                                <span>Senin – Jumat: 07:00 – 15:30</span>
                            </li>
                            <li className="text-muted-foreground pl-6">
                                Sabtu – Minggu: Tutup
                            </li>
                            <li className="pl-6 text-[#c5a84b] font-medium">
                                Akses Digital: 24/7
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
                    <p>
                        © 2026 KanesaPedia. Ekosistem Edukasi Transformasional. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
