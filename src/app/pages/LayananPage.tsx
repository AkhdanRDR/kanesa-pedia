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
        color: "var(--accent)",
        title: "Koleksi Buku Digital",
        description:
            "Akses ribuan judul buku digital dari berbagai genre, mulai dari buku pelajaran, ilmu pengetahuan, hingga karya sastra. Selalu diperbarui setiap bulan.",
        features: ["5.000+ judul buku", "Format ePub & PDF", "Update bulanan"],
    },
    {
        icon: Search,
        color: "var(--primary)",
        title: "Pencarian Cerdas",
        description:
            "Temukan buku, jurnal, dan artikel dengan sistem pencarian berbasis AI yang memahami konteks dan memberikan rekomendasi relevan.",
        features: ["Pencarian semantik", "Filter canggih", "Rekomendasi AI"],
    },
    {
        icon: Laptop,
        color: "var(--secondary)",
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
        color: "var(--accent)",
        title: "Ruang Diskusi",
        description:
            "Forum diskusi komunitas tempat siswa, guru, dan pecinta buku bisa berbagi pengetahuan, ulasan buku, dan inspirasi literasi.",
        features: ["Forum terbuka", "Kelompok belajar", "Sesi tanya jawab"],
    },
    {
        icon: Download,
        color: "var(--primary)",
        title: "Unduh & Baca Offline",
        description:
            "Unduh konten favorit dan baca kapan saja tanpa koneksi internet. Aktif belajar meski di daerah dengan akses internet terbatas.",
        features: ["Baca offline", "Sinkronisasi otomatis", "Multi-perangkat"],
    },
    {
        icon: Shield,
        color: "var(--secondary)",
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
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-xs font-bold uppercase tracking-wider text-accent mb-6">
                            <Library className="w-3.5 h-3.5" />
                            <span>Layanan Kami</span>
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                            Fasilitas Ekosistem,{" "}
                            <span className="text-accent">
                                Semua Dalam Genggamanmu
                            </span>
                        </h1>
                        <p className="text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
                            KanesaPedia hadir membawa transformasi nyata bagi
                            perjalanan belajarmu — menghapus batasan jarak dan
                            waktu melalui ragam layanan digital unggulan yang
                            selalu siap menemanimu.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Highlights Bar */}
            <section className="py-8 px-4 bg-accent/3">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/10 blur-[80px] rounded-full" />
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
                                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                                    <item.icon className="w-5 h-5 text-accent" />
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
                        <h2 className="text-4xl font-bold text-foreground mb-4">
                            Layanan Inovatif, Dirancang Khusus Untukmu
                        </h2>
                        <p className="text-lg text-foreground/60 max-w-xl mx-auto">
                            Eksplorasi kumpulan fitur canggih yang siap
                            mempercepat laju pertumbuhan kualitas belajarmu
                            secara impresif.
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
                                className="group bg-accent/3 rounded-2xl p-8 border border-foreground/5 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 cursor-pointer relative overflow-hidden"
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
                                        backgroundColor: `color-mix(in srgb, ${service.color} 20%, transparent)`,
                                    }}
                                >
                                    <service.icon
                                        className="w-7 h-7"
                                        style={{ color: service.color }}
                                    />
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-3 relative z-10">
                                    {service.title}
                                </h3>
                                <p className="text-foreground/60 leading-relaxed mb-5 relative z-10">
                                    {service.description}
                                </p>

                                <ul className="space-y-2 relative z-10">
                                    {service.features.map((f, j) => (
                                        <li
                                            key={j}
                                            className="flex items-center gap-2 text-sm text-foreground/70"
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

            {/* Usulan Buku Form */}
            <section className="py-24 px-4 bg-background">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-xs font-bold uppercase tracking-wider text-accent mb-6">
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>Layanan Pengadaan</span>
                        </div>
                        <h2 className="text-4xl font-bold text-foreground mb-4">
                            Usulkan Buku Favoritmu
                        </h2>
                        <p className="text-lg text-foreground/60">
                            Punya buku impian yang belum ada di koleksi kami?
                            Beritahu kami, dan kami akan berusaha menyediakannya
                            untukmu.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-accent/3 p-8 md:p-10 rounded-[2rem] shadow-xl shadow-foreground/5 border border-foreground/5"
                    >
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-foreground">
                                        Nama Lengkap
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Masukkan nama lengkap"
                                        className="w-full px-5 py-3.5 bg-accent/3 border border-foreground/10 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/10 outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-foreground">
                                        No HP
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="Contoh: 08123456789"
                                        className="w-full px-5 py-3.5 bg-accent/3 border border-foreground/10 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/10 outline-none transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-foreground">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="nama@email.com"
                                    className="w-full px-5 py-3.5 bg-accent/3 border border-foreground/10 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/10 outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-foreground">
                                    Judul Buku Usulan
                                </label>
                                <input
                                    type="text"
                                    placeholder="Tuliskan judul lengkap buku"
                                    className="w-full px-5 py-3.5 bg-accent/3 border border-foreground/10 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/10 outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-foreground">
                                    Nama Pengarang
                                </label>
                                <input
                                    type="text"
                                    placeholder="Nama penulis atau pengarang"
                                    className="w-full px-5 py-3.5 bg-accent/3 border border-foreground/10 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/10 outline-none transition-all"
                                />
                            </div>
                            <button className="w-full py-4 bg-accent text-white rounded-xl font-bold hover:bg-accent/90 transition-all shadow-lg shadow-accent/20 flex items-center justify-center gap-2 group">
                                Kirim Usulan
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* CTA Banner */}

            <section className="py-20 px-4 bg-background relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-accent/20 blur-[100px] rounded-full z-0 pointer-events-none" />
                <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-secondary/30 blur-[80px] rounded-full z-0 pointer-events-none" />
                <motion.div
                    className="max-w-3xl mx-auto text-center relative z-10"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-foreground mb-4">
                        Siap Membuuka Keajaiban Baru?
                    </h2>
                    <p className="text-lg text-foreground/60 mb-8">
                        Raih lompatan prestasi yang belum pernah kamu bayangkan
                        sebelumnya. Jadilah bagian dari langkah maju jutaan
                        pembelajar.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <button className="px-8 py-3.5 bg-accent text-background rounded-full hover:bg-accent/90 transition-all flex items-center gap-2 group font-medium">
                            Daftar Sekarang
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-3.5 bg-white text-foreground rounded-full border border-foreground/10 hover:border-accent/30 transition-all font-medium">
                            Lihat Demo
                        </button>
                    </div>
                </motion.div>
            </section>
        </Layout>
    );
}
