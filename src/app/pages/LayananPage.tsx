import { motion } from "framer-motion";
import {
    BookOpen,
    Laptop,
    Search,
    Users,
    Star,
    Zap,
    Shield,
    Download,
    ArrowRight,
    Library,
    Globe,
    Clock,
} from "lucide-react";
import Layout from "../components/Layout";

const services = [
    {
        icon: BookOpen,
        color: "#c5a84b",
        title: "Koleksi Buku Digital",
        description:
            "Akses ribuan judul buku digital dari berbagai genre, mulai dari buku pelajaran, ilmu pengetahuan, hingga karya sastra. Selalu diperbarui setiap bulan.",
        features: ["5.000+ judul buku", "Format ePub & PDF", "Update bulanan"],
    },
    {
        icon: Search,
        color: "#8cdada",
        title: "Pencarian Cerdas",
        description:
            "Temukan buku, jurnal, dan artikel dengan sistem pencarian berbasis AI yang memahami konteks dan memberikan rekomendasi relevan.",
        features: ["Pencarian semantik", "Filter canggih", "Rekomendasi AI"],
    },
    {
        icon: Laptop,
        color: "#6e84d0",
        title: "E-Learning Interaktif",
        description:
            "Modul pembelajaran interaktif yang menggabungkan teks, video, dan kuis untuk pengalaman belajar yang lebih efektif dan menyenangkan.",
        features: [
            "Video pembelajaran",
            "Kuis interaktif",
            "Sertifikat digital",
        ],
    },
    {
        icon: Users,
        color: "#c5a84b",
        title: "Ruang Diskusi",
        description:
            "Forum diskusi komunitas tempat siswa, guru, dan pecinta buku bisa berbagi pengetahuan, ulasan buku, dan inspirasi literasi.",
        features: ["Forum terbuka", "Kelompok belajar", "Sesi tanya jawab"],
    },
    {
        icon: Download,
        color: "#8cdada",
        title: "Unduh & Baca Offline",
        description:
            "Unduh konten favorit dan baca kapan saja tanpa koneksi internet. Aktif belajar meski di daerah dengan akses internet terbatas.",
        features: ["Baca offline", "Sinkronisasi otomatis", "Multi-perangkat"],
    },
    {
        icon: Shield,
        color: "#6e84d0",
        title: "Akun Aman & Privasi",
        description:
            "Keamanan data anggota dijamin dengan enkripsi tingkat tinggi. Kontrol penuh atas privasi dan histori aktivitas membaca Anda.",
        features: ["Enkripsi data", "Privasi terlindungi", "Kontrol penuh"],
    },
];

const highlights = [
    { icon: Zap, label: "Akses Instan", value: "< 1 detik" },
    { icon: Globe, label: "Cakupan Koleksi", value: "50+ Kategori" },
    { icon: Clock, label: "Dukungan", value: "24/7 Online" },
    { icon: Star, label: "Rating Pengguna", value: "4.9/5" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function LayananPage() {
    return (
        <Layout>
            {/* Hero */}
            <section className="relative py-24 px-4 overflow-hidden">
                {/* Background blobs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c5a84b]/8 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8cdada]/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c5a84b]/10 border border-[#c5a84b]/20 rounded-full text-xs font-bold uppercase tracking-wider text-[#c5a84b] mb-6">
                            <Library className="w-3.5 h-3.5" />
                            <span>Layanan Kami</span>
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-[#0d0b04] leading-tight mb-6">
                            Fasilitas Ekosistem,{" "}
                            <span className="text-[#c5a84b]">
                                Semua Dalam Genggamanmu
                            </span>
                        </h1>
                        <p className="text-xl text-[#0d0b04]/60 max-w-2xl mx-auto leading-relaxed">
                            KanesaPedia hadir membawa transformasi nyata bagi perjalanan belajarmu — 
                            menghapus batasan jarak dan waktu melalui ragam layanan digital unggulan yang selalu siap menemanimu.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Highlights Bar */}
            <section className="py-8 px-4 bg-[#fcfbf7]">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#c5a84b]/10 blur-[80px] rounded-full" />
                </div>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {highlights.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="flex flex-col items-center gap-2 py-4"
                            >
                                <div className="w-10 h-10 rounded-xl bg-[#c5a84b]/20 flex items-center justify-center">
                                    <item.icon className="w-5 h-5 text-[#c5a84b]" />
                                </div>
                                <span className="text-2xl font-bold text-foreground">
                                    {item.value}
                                </span>
                                <span className="text-xs text-foreground uppercase tracking-wider">
                                    {item.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#0d0b04] mb-4">
                            Layanan Inovatif, Dirancang Khusus Untukmu
                        </h2>
                        <p className="text-lg text-[#0d0b04]/60 max-w-xl mx-auto">
                            Eksplorasi kumpulan fitur canggih yang siap mempercepat laju pertumbuhan kualitas belajarmu secara impresif.
                        </p>
                    </div>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                    >
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className="group bg-[#fcfbf7] rounded-2xl p-8 border border-[#0d0b04]/5 hover:border-[#c5a84b]/30 hover:shadow-lg hover:shadow-[#c5a84b]/5 transition-all duration-300 cursor-pointer relative overflow-hidden"
                            >
                                {/* Hover glow */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                                    style={{
                                        background: `radial-gradient(circle at top left, ${service.color}08 0%, transparent 60%)`,
                                    }}
                                />

                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10"
                                    style={{
                                        backgroundColor: `${service.color}20`,
                                    }}
                                >
                                    <service.icon
                                        className="w-7 h-7"
                                        style={{ color: service.color }}
                                    />
                                </div>

                                <h3 className="text-xl font-bold text-[#0d0b04] mb-3 relative z-10">
                                    {service.title}
                                </h3>
                                <p className="text-[#0d0b04]/60 leading-relaxed mb-5 relative z-10">
                                    {service.description}
                                </p>

                                <ul className="space-y-2 relative z-10">
                                    {service.features.map((f, j) => (
                                        <li
                                            key={j}
                                            className="flex items-center gap-2 text-sm text-[#0d0b04]/70"
                                        >
                                            <span
                                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                                style={{
                                                    backgroundColor:
                                                        service.color,
                                                }}
                                            />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-20 px-4 bg-background relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-primary/20 blur-[100px] rounded-full z-0 pointer-events-none" />
                <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-secondary/30 blur-[80px] rounded-full z-0 pointer-events-none" />
                <motion.div
                    className="max-w-3xl mx-auto text-center relative z-10"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-[#0d0b04] mb-4">
                        Siap Membuka Keajaiban Baru?
                    </h2>
                    <p className="text-lg text-[#0d0b04]/60 mb-8">
                        Raih lompatan prestasi yang belum pernah kamu bayangkan sebelumnya. 
                        Jadilah bagian dari langkah maju jutaan pembelajar.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <button className="px-8 py-3.5 bg-[#c5a84b] text-[#fcfbf7] rounded-full hover:bg-[#b39742] transition-all flex items-center gap-2 group font-medium">
                            Daftar Sekarang
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-3.5 bg-white text-[#0d0b04] rounded-full border border-[#0d0b04]/10 hover:border-[#c5a84b]/30 transition-all font-medium">
                            Lihat Demo
                        </button>
                    </div>
                </motion.div>
            </section>
        </Layout>
    );
}
