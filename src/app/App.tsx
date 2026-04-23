import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Instagram,
    Twitter,
    Facebook,
    BookOpen,
    Search,
    Users,
    Award,
    ArrowRight,
    Menu,
    X,
    Target,
    Lightbulb,
    Library,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Button } from "./components/ui/button";

const images = [
    {
        url: "/gallery (1).jpg",
        title: "Ruang Baca Utama",
    },
    {
        url: "/gallery (2).jpg",
        title: "Koleksi Buku Klasik",
    },
    {
        url: "/gallery (3).jpg",
        title: "Area Diskusi Siswa",
    },
    {
        url: "/gallery (4).jpg",
        title: "Sudut Literasi Digital",
    },
    {
        url: "/gallery (5).jpg",
        title: "Koleksi Referensi",
    },
    {
        url: "/gallery (6).jpg",
        title: "Fasilitas Modern",
    },
    {
        url: "/gallery (7).jpg",
        title: "Lingkungan Nyaman",
    },
];

const partners = [
    { name: "Erlangga", logo: "/erlangga.png" },
    { name: "Mediatama", logo: "/mediatama.png" },
    { name: "Gramedia", logo: "/gramedia.png" },
    { name: "Medtra", logo: "/medtra.png" },
    { name: "Esensi", logo: "/esensi.png" },
    { name: "Liniswara", logo: "/liniswara.png" },
    { name: "Penerbit Andi", logo: "/andi.png" },
];

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#fcfbf7]">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-[#fcfbf7]/95 backdrop-blur-sm z-50 border-b border-[#c5a84b]/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-2">
                            <img
                                src="/logo-smk.svg"
                                alt="Logo"
                                className="w-10 h-10 object-cover"
                            />
                            <span className="text-xl font-semibold text-[#0d0b04]">
                                KanesaPedia
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            <a
                                href="#beranda"
                                className="text-[#0d0b04]/70 hover:text-[#c5a84b] transition-colors"
                            >
                                Beranda
                            </a>
                            <Link
                                to="/layanan"
                                className="text-[#0d0b04]/70 hover:text-[#c5a84b] transition-colors"
                            >
                                Layanan
                            </Link>
                            <Link
                                to="/tentang"
                                className="text-[#0d0b04]/70 hover:text-[#c5a84b] transition-colors"
                            >
                                Tentang
                            </Link>
                            <Link
                                to="/artikel"
                                className="text-[#0d0b04]/70 hover:text-[#c5a84b] transition-colors"
                            >
                                Artikel
                            </Link>
                            <Link
                                to="/kontak"
                                className="text-[#0d0b04]/70 hover:text-[#c5a84b] transition-colors"
                            >
                                Kontak
                            </Link>
                            <a
                                href="#ebook"
                                className="text-[#0d0b04]/70 hover:text-[#c5a84b] transition-colors"
                            >
                                E-Book
                            </a>
                            <a
                                href="#digilib"
                                className="text-[#0d0b04]/70 hover:text-[#c5a84b] transition-colors"
                            >
                                Digilib
                            </a>
                            <button className="px-6 py-2 bg-[#c5a84b] text-[#fcfbf7] rounded-lg hover:bg-[#b39742] transition-all">
                                Masuk
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-[#0d0b04]"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                        <div className="md:hidden pb-4 space-y-3">
                            <a
                                href="#beranda"
                                className="block text-[#0d0b04]/70 hover:text-[#c5a84b] transition-colors"
                            >
                                Beranda
                            </a>
                            <Link
                                to="/tentang"
                                className="block text-[#0d0b04]/70 hover:text-[#c5a84b] transition-colors"
                            >
                                Tentang
                            </Link>
                            <a
                                href="#galeri"
                                className="block text-[#0d0b04]/70 hover:text-[#c5a84b] transition-colors"
                            >
                                Galeri
                            </a>
                            <Link
                                to="/artikel"
                                className="block text-[#0d0b04]/70 hover:text-[#c5a84b] transition-colors"
                            >
                                Artikel
                            </Link>
                            <button className="w-full px-6 py-2 bg-[#c5a84b] text-[#fcfbf7] rounded-lg hover:bg-[#b39742] transition-all">
                                Masuk
                            </button>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <section id="beranda" className="pt-32 pb-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-7">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c5a84b]/10 border border-[#c5a84b]/20 rounded-full text-xs font-bold uppercase tracking-wider text-[#c5a84b]">
                                <Library className="w-3.5 h-3.5" />
                                <span>Teman Setia Eksplorasi Ilmu</span>
                            </div>
                            <h1 className="text-5xl lg:text-6xl font-bold text-[#0d0b04] leading-tight">
                                Buka Kunci Pengetahuan, Raih Prestasi Tanpa
                                Batas di KanesaPedia.
                            </h1>
                            <p className="text-xl text-[#0d0b04]/60 leading-relaxed">
                                Bebaskan rasa ingin tahumu. Akses ribuan buku
                                unggulan, jurnal interaktif, dan literatur
                                terkini dalam satu sentuhan. Mari wujudkan masa
                                depan cerah melalui kebiasaan membaca tiada
                                henti.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-2">
                                <button className="px-8 py-3.5 bg-[#c5a84b] text-[#fcfbf7] rounded-full hover:bg-[#b39742] transition-all flex items-center gap-2 group font-semibold shadow-lg shadow-[#c5a84b]/20">
                                    Mulai Eksplorasi
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="px-8 py-3.5 bg-[#fcfbf7] text-[#0d0b04] rounded-full hover:bg-white transition-all border border-[#0d0b04]/10 font-semibold">
                                    Halaman Masuk
                                </button>
                            </div>
                            <div className="flex gap-10 pt-6">
                                <div>
                                    <div className="text-3xl font-bold text-[#c5a84b]">
                                        5.000+
                                    </div>
                                    <div className="text-[#0d0b04]/60">
                                        Koleksi Buku
                                    </div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-[#8cdada]">
                                        2.500+
                                    </div>
                                    <div className="text-[#0d0b04]/60">
                                        Pengguna Aktif
                                    </div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-[#6e84d0]">
                                        24/7
                                    </div>
                                    <div className="text-[#0d0b04]/60">
                                        Akses
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Right Visual Dashboard Abstract */}
                        <motion.div
                            className="relative w-full h-[500px] rounded-[2rem] overflow-hidden glass shadow-2xl flex items-center justify-center p-8 border border-white/40 backdrop-blur-xl"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2,
                                ease: "easeOut",
                            }}
                        >
                            <div className="absolute inset-0 bg-[url(/hero.jpg)] bg-cover bg-center mix-blend-overlay"></div>

                            {/* Floating UI Elements matching modern dashboard vibe */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 6,
                                    ease: "easeInOut",
                                }}
                                className="absolute top-12 left-8 bg-white/90 backdrop-blur rounded-2xl p-4 shadow-xl border border-white/50"
                            >
                                <div className="flex gap-4 items-center">
                                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                                        <BookOpen
                                            size={20}
                                            className="text-accent"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-foreground">
                                            Buku Terpopuler
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            Dipinjam 2.4K kali
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [10, -10, 10] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 7,
                                    ease: "easeInOut",
                                }}
                                className="absolute bottom-16 right-8 bg-white/90 backdrop-blur rounded-2xl p-4 shadow-xl border border-white/50 flex flex-col gap-3"
                            >
                                <p className="text-xs font-medium text-muted-foreground">
                                    Aktivitas Hari Ini
                                </p>
                                <div className="flex gap-2">
                                    <div className="w-2 h-12 bg-primary/20 rounded-full">
                                        <div className="w-full h-8 bg-primary rounded-full mt-4"></div>
                                    </div>
                                    <div className="w-2 h-12 bg-primary/20 rounded-full">
                                        <div className="w-full h-6 bg-primary rounded-full mt-6"></div>
                                    </div>
                                    <div className="w-2 h-12 bg-primary/20 rounded-full">
                                        <div className="w-full h-10 bg-primary rounded-full mt-2"></div>
                                    </div>
                                    <div className="w-2 h-12 bg-primary/20 rounded-full">
                                        <div className="w-full h-4 bg-primary rounded-full mt-8"></div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section
                id="tentang"
                className="w-full py-24 px-6 md:px-12 lg:px-24 bg-white relative"
            >
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    {/* Abstract Image Concept */}
                    <motion.div
                        className="relative aspect-square w-full max-w-[500px] mx-auto"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="absolute inset-0 bg-secondary/30 rounded-[3rem] transform -rotate-6"></div>
                        <div className="absolute inset-0 bg-primary/20 rounded-[3rem] transform rotate-3"></div>
                        <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-xl border border-border bg-muted">
                            <img
                                src="/about.jpg  "
                                alt="Students studying in library"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        className="flex flex-col items-start gap-6"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="flex items-center gap-2 px-4 py-2 bg-[#8cdada]/10 border border-[#8cdada]/20 rounded-full w-fit">
                            <Users className="w-4 h-4 text-[#8cdada]" />
                            <span className="text-sm font-bold uppercase tracking-wider text-[#8cdada]">
                                Mengenal KanesaPedia
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                            Lebih Dari Sekadar{" "}
                            <span className="text-[#8cdada]">
                                Perpustakaan Biasa.
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            KanesaPedia hadir bukan sekadar sebagai ruang
                            penyimpanan tumpukan buku, melainkan sebuah
                            ekosistem belajar hidup yang didesain secara
                            revolusioner untuk memicu imajinasimu. Kami
                            menyatukan literasi klasik dengan kekuatan teknologi
                            terkini untuk pengalaman belajar yang luar biasa.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6 mt-6">
                            <div className="flex flex-col gap-2">
                                <h4 className="text-4xl font-bold text-secondary-foreground">
                                    10K+
                                </h4>
                                <p className="text-sm text-foreground font-medium">
                                    Buku Digital & Jurnal
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-4xl font-bold text-primary">
                                    24/7
                                </h4>
                                <p className="text-sm text-foreground font-medium">
                                    Akses Kapan Saja
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Section */}
            <section id="galeri" className="py-20 px-4 bg-[#fcfbf7]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#6e84d0]/10 border border-[#6e84d0]/20 rounded-full mb-6 text-xs font-bold uppercase tracking-wider text-[#6e84d0]">
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>Titik Inspirasi</span>
                        </div>
                        <h2 className="text-4xl font-bold text-[#0d0b04] mb-4">
                            Sudut Ruang yang Menghidupkan Potensimu
                        </h2>
                        <p className="text-xl text-[#0d0b04]/60 max-w-2xl mx-auto">
                            Tiap sudut kami rancang secara detil dengan penuh
                            estetika, agar kamu selalu merasa nyaman dan tak
                            henti terinspirasi menimba setiap tetes ilmu.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                        {images.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                                    i === 0
                                        ? "col-span-2 row-span-2"
                                        : i === 3
                                          ? "col-span-2"
                                          : i === 5
                                            ? "col-span-2"
                                            : ""
                                }`}
                            >
                                <img
                                    src={item.url}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b04]/90 via-[#0d0b04]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <h3 className="text-[#fcfbf7] font-bold text-lg md:text-xl">
                                            {item.title}
                                        </h3>
                                        <p className="text-[#fcfbf7]/70 text-sm mt-1">
                                            Jelajahi Fasilitas Kanesa
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed About Section */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c5a84b]/10 border border-[#c5a84b]/20 rounded-full mb-6 text-xs font-bold uppercase tracking-wider text-[#c5a84b]">
                            <Target className="w-3.5 h-3.5" />
                            <span>Tujuan Utama</span>
                        </div>
                        <h2 className="text-4xl font-bold text-[#0d0b04]">
                            Kompas Arah Perjalanan Kami
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-[#fcfbf7] rounded-2xl p-8 border border-[#0d0b04]/5 hover:border-[#c5a84b]/20 transition-all">
                            <div className="w-14 h-14 bg-[#c5a84b] rounded-xl flex items-center justify-center mb-6">
                                <Target className="w-7 h-7 text-[#fcfbf7]" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#0d0b04] mb-4">
                                Visi
                            </h3>
                            <p className="text-[#0d0b04]/60 leading-relaxed">
                                Memimpin transformasi digital dalam dunia
                                pendidikan, merajut asa, dan memberdayakan
                                generasi pembelajar tanpa batas sekat agar
                                mereka siap menghadapi panggung emas dunia masa
                                depan.
                            </p>
                        </div>
                        <div className="bg-[#fcfbf7] rounded-2xl p-8 border border-[#0d0b04]/5 hover:border-[#6e84d0]/20 transition-all">
                            <div className="w-14 h-14 bg-[#6e84d0] rounded-xl flex items-center justify-center mb-6">
                                <Lightbulb className="w-7 h-7 text-[#fcfbf7]" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#0d0b04] mb-4">
                                Misi
                            </h3>
                            <ul className="space-y-3 text-[#0d0b04]/60">
                                <li className="flex gap-3">
                                    <span className="text-[#c5a84b] mt-1">
                                        •
                                    </span>
                                    <span>
                                        Menyediakan akses koleksi digital
                                        berkualitas tinggi untuk semua kalangan
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#c5a84b] mt-1">
                                        •
                                    </span>
                                    <span>
                                        Mendorong budaya literasi dan
                                        pembelajaran sepanjang hayat
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#c5a84b] mt-1">
                                        •
                                    </span>
                                    <span>
                                        Membangun komunitas pembelajar yang
                                        kolaboratif dan inovatif
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#c5a84b] mt-1">
                                        •
                                    </span>
                                    <span>
                                        Mengintegrasikan teknologi modern untuk
                                        pengalaman belajar yang optimal
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-10 bg-[#fcfbf7] rounded-2xl p-8 border border-[#0d0b04]/5">
                        <h3 className="text-2xl font-bold text-[#0d0b04] mb-8 text-center">
                            Peran Perpustakaan di Sekolah
                        </h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-[#c5a84b] rounded-lg mx-auto mb-4 flex items-center justify-center">
                                    <BookOpen className="w-6 h-6 text-[#fcfbf7]" />
                                </div>
                                <h4 className="font-semibold text-[#0d0b04] mb-2">
                                    Sumber Pembelajaran
                                </h4>
                                <p className="text-[#0d0b04]/60">
                                    Menyediakan beragam referensi untuk
                                    mendukung kegiatan belajar mengajar
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-[#8cdada] rounded-lg mx-auto mb-4 flex items-center justify-center">
                                    <Users className="w-6 h-6 text-[#fcfbf7]" />
                                </div>
                                <h4 className="font-semibold text-[#0d0b04] mb-2">
                                    Pusat Literasi
                                </h4>
                                <p className="text-[#0d0b04]/60">
                                    Membangun kebiasaan membaca dan budaya
                                    literasi di lingkungan sekolah
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-[#6e84d0] rounded-lg mx-auto mb-4 flex items-center justify-center">
                                    <Search className="w-6 h-6 text-[#fcfbf7]" />
                                </div>
                                <h4 className="font-semibold text-[#0d0b04] mb-2">
                                    Riset & Eksplorasi
                                </h4>
                                <p className="text-[#0d0b04]/60">
                                    Mendukung penelitian dan pengembangan
                                    keterampilan informasi siswa
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="w-full py-16 border-y border-border bg-background overflow-hidden flex flex-col gap-8">
                <div className="text-center">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                        Bekerja Sama Dengan
                    </p>
                </div>

                {/* Marquee Effect */}
                <div className="relative w-full overflow-hidden flex whitespace-nowrap">
                    <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-background to-transparent z-10" />
                    <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-background to-transparent z-10" />

                    <motion.div
                        className="flex gap-16 px-8 items-center"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 20,
                            ease: "linear",
                        }}
                    >
                        {/* Double array to create seamless loop */}
                        {[...partners, ...partners].map((partner, i) => (
                            <div key={i} className="flex-shrink-0 group">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="h-15 md:h-17 w-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Blog Section */}
            <section id="blog" className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#6e84d0]/10 border border-[#6e84d0]/20 rounded-full mb-6 text-xs font-bold uppercase tracking-wider text-[#6e84d0]">
                            <Lightbulb className="w-3.5 h-3.5" />
                            <span>Artikel & Blog</span>
                        </div>
                        <h2 className="text-4xl font-bold text-[#0d0b04] mb-4">
                            Wawasan & Inspirasi
                        </h2>
                        <p className="text-xl text-[#0d0b04]/60 max-w-2xl mx-auto">
                            Tips, tren literasi, dan update terbaru seputar
                            dunia pendidikan
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                image: "https://images.unsplash.com/photo-1771765780945-c788a6ce4b33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
                                title: "Teknologi VR dalam Pembelajaran Modern",
                                description:
                                    "Bagaimana teknologi virtual reality mengubah cara kita belajar dan mengakses informasi di era digital.",
                                date: "15 April 2026",
                            },
                            {
                                image: "https://images.unsplash.com/photo-1645363308298-3a949c8bfd86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
                                title: "Membangun Kebiasaan Membaca Digital",
                                description:
                                    "Tips praktis untuk mengembangkan rutinitas membaca yang efektif menggunakan platform digital.",
                                date: "12 April 2026",
                            },
                            {
                                image: "https://images.unsplash.com/photo-1745162829464-c3487261f90d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
                                title: "Peran Literasi dalam Pendidikan Abad 21",
                                description:
                                    "Mengapa literasi digital menjadi keterampilan penting untuk masa depan generasi muda.",
                                date: "8 April 2026",
                            },
                        ].map((post, index) => (
                            <div
                                key={index}
                                className="bg-[#fcfbf7] rounded-2xl overflow-hidden border border-[#0d0b04]/5 hover:border-[#c5a84b]/30 transition-all group cursor-pointer"
                            >
                                <div className="relative overflow-hidden h-48">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="text-sm text-[#c5a84b] mb-2">
                                        {post.date}
                                    </div>
                                    <h3 className="font-bold text-[#0d0b04] mb-3 group-hover:text-[#c5a84b] transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-[#0d0b04]/60 mb-4">
                                        {post.description}
                                    </p>
                                    <button className="text-[#0d0b04] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                                        Baca Selengkapnya
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
                {/* Decorative Blur Backgrounds */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-primary/20 blur-[100px] rounded-full z-0 pointer-events-none" />
                <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-secondary/30 blur-[80px] rounded-full z-0 pointer-events-none" />

                <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                            Siap Memulai Petualangan <br />{" "}
                            <span className="text-primary italic">Barumu?</span>
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Jangan biarkan asa dan potensimu terkurung. Buka
                            jendela dunia lebar-lebar, akses literatur istimewa
                            tak terhingga, dan kepakkan sayap kesuksesanmu kini
                            juga.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <Button
                            size="lg"
                            className="h-14 px-8 text-lg rounded-full font-semibold gap-2 shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1 group"
                        >
                            Mulai
                            <ArrowRight
                                size={20}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
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
                                Perpustakaan digital terdepan untuk generasi
                                pembelajar Indonesia.
                            </p>
                            <div className="flex gap-3">
                                {[Instagram, Twitter, Facebook].map(
                                    (Icon, i) => (
                                        <a
                                            key={i}
                                            href="#"
                                            className="w-9 h-9 rounded-full bg-[#fcfbf7]/10 hover:bg-[#c5a84b] transition-colors flex items-center justify-center"
                                        >
                                            <Icon className="w-4 h-4" />
                                        </a>
                                    ),
                                )}
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
                                    {
                                        label: "E-Book",
                                        to: "http://103.174.114.107:6060/dashboard",
                                    },
                                    {
                                        label: "Digilib",
                                        to: "http://103.174.114.107/slims/index.php",
                                    },
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
                            © 2026 KanesaPedia. Perpustakaan Digital Kanesa. All
                            rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
