import { motion } from "framer-motion";
import {
    Users,
    Target,
    Lightbulb,
    BookOpen,
    Search,
    Award,
    Heart,
    ArrowRight,
    Shield,
} from "lucide-react";
import Layout from "../components/Layout";

const teamMembers = [
    {
        name: "Ibu Sari Dewi",
        role: "Kepala Perpustakaan",
        initials: "SD",
        color: "var(--accent)",
        desc: "15 tahun berpengalaman dalam manajemen perpustakaan dan literasi digital.",
    },
    {
        name: "Bapak Rahmat",
        role: "Koordinator Koleksi",
        initials: "RH",
        color: "var(--primary)",
        desc: "Spesialis kurasi dan pengelolaan koleksi buku digital berkualitas.",
    },
    {
        name: "Kak Dina",
        role: "Pustakawan Digital",
        initials: "DN",
        color: "var(--secondary)",
        desc: "Penghubung antara teknologi dan komunitas pembaca di KanesaPedia.",
    },
    {
        name: "Mas Arif",
        role: "Developer Platform",
        initials: "AF",
        color: "var(--accent)",
        desc: "Membangun infrastruktur digital yang andal dan ramah pengguna.",
    },
];

const milestones = [
    {
        year: "2020",
        title: "Berdiri",
        desc: "KanesaPedia diluncurkan sebagai perpustakaan digital pertama sekolah.",
    },
    {
        year: "2021",
        title: "1.000 Pengguna",
        desc: "Mencapai 1.000 pengguna aktif dalam setahun pertama.",
    },
    {
        year: "2022",
        title: "Koleksi 3.000+",
        desc: "Koleksi buku digital berkembang pesat hingga 3.000 judul.",
    },
    {
        year: "2023",
        title: "Penghargaan",
        desc: "Meraih penghargaan Perpustakaan Digital Terbaik tingkat provinsi.",
    },
    {
        year: "2024",
        title: "Platform Baru",
        desc: "Peluncuran platform modern dengan fitur AI dan e-learning.",
    },
    {
        year: "2026",
        title: "5.000+ Koleksi",
        desc: "Lebih dari 5.000 judul tersedia dengan 2.500+ pengguna aktif.",
    },
];

const values = [
    {
        icon: BookOpen,
        color: "var(--accent)",
        title: "Literasi",
        desc: "Mendorong budaya membaca dan cinta ilmu pengetahuan di semua kalangan.",
    },
    {
        icon: Heart,
        color: "var(--primary)",
        title: "Inklusif",
        desc: "Menyediakan akses pengetahuan yang setara untuk seluruh siswa.",
    },
    {
        icon: Lightbulb,
        color: "var(--secondary)",
        title: "Inovatif",
        desc: "Terus berinovasi dengan teknologi terkini demi pengalaman terbaik.",
    },
    {
        icon: Award,
        color: "var(--accent)",
        title: "Kualitas",
        desc: "Memastikan setiap koleksi berkualitas tinggi dan terpercaya.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TentangPage() {
    return (
        <Layout>
            {/* Hero */}
            <section className="relative py-24 px-4 overflow-hidden bg-white">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        className="grid lg:grid-cols-2 gap-16 items-center"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        {/* Image Side */}
                        <motion.div
                            variants={itemVariants}
                            className="relative aspect-square w-full max-w-[500px] mx-auto order-2 lg:order-1"
                        >
                            <div className="absolute inset-0 bg-primary/30 rounded-[3rem] transform -rotate-6" />
                            <div className="absolute inset-0 bg-accent/20 rounded-[3rem] transform rotate-3" />
                            <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl border border-accent/10">
                                <img
                                    src="/about.jpg"
                                    alt="Tim KanesaPedia"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Text Side */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col gap-6 order-1 lg:order-2"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full w-fit">
                                <Users className="w-4 h-4 text-primary" />
                                <span className="text-sm font-bold uppercase tracking-wider text-primary">
                                    Tentang Kami
                                </span>
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                                Ekosistem Belajar Modern,{" "}
                                <span className="text-accent">
                                    Harmoni Inovasi Tanpa Batas.
                                </span>
                            </h1>
                            <p className="text-lg text-foreground/60 leading-relaxed">
                                KanesaPedia bukan lagi sekadar laci penyimpanan
                                buku, melainkan saksi bisu lahirnya ide-ide
                                gemilang melalui fusi ekosistem interaktif dan
                                literasi digital berkelas rancangan inovator
                                pendidikan sejati.
                            </p>
                            <div className="grid grid-cols-2 gap-6 pt-2">
                                <div className="bg-background rounded-2xl p-5 border border-foreground/5">
                                    <div className="text-4xl font-bold text-accent mb-1">
                                        10K+
                                    </div>
                                    <div className="text-sm text-foreground/60 font-medium">
                                        Buku Digital & Jurnal
                                    </div>
                                </div>
                                <div className="bg-background rounded-2xl p-5 border border-foreground/5">
                                    <div className="text-4xl font-bold text-primary mb-1">
                                        24/7
                                    </div>
                                    <div className="text-sm text-foreground/60 font-medium">
                                        Akses Kapan Saja
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Visi & Misi */}
            <section className="py-24 px-4 bg-accent/3">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-foreground mb-4">
                            Visi & Misi Kami
                        </h2>
                        <p className="text-lg text-foreground/60 max-w-xl mx-auto">
                            Landasan nilai yang mengarahkan setiap langkah
                            KanesaPedia.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <motion.div
                            className="bg-white rounded-2xl p-8 border border-foreground/5 hover:border-accent/20 transition-all group"
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center mb-6">
                                <Target className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-4">
                                Visi
                            </h3>
                            <p className="text-foreground/60 leading-relaxed">
                                Menjadi perpustakaan digital terdepan yang
                                menginspirasi dan memberdayakan generasi
                                pembelajar melalui akses pengetahuan yang mudah,
                                inklusif, dan berkelanjutan.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white rounded-2xl p-8 border border-foreground/5 hover:border-secondary/20 transition-all"
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center mb-6">
                                <Lightbulb className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-4">
                                Misi
                            </h3>
                            <ul className="space-y-3 text-foreground/60">
                                {[
                                    "Menyediakan akses koleksi digital berkualitas tinggi untuk semua kalangan",
                                    "Mendorong budaya literasi dan pembelajaran sepanjang hayat",
                                    "Membangun komunitas pembelajar yang kolaboratif dan inovatif",
                                    "Mengintegrasikan teknologi modern untuk pengalaman belajar optimal",
                                ].map((m, i) => (
                                    <li key={i} className="flex gap-3">
                                        <span className="text-accent mt-1 flex-shrink-0">
                                            ●
                                        </span>
                                        <span>{m}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Tata Tertib */}
            <section className="py-24 px-4 bg-white relative overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold uppercase tracking-wider text-primary mb-6">
                            <Shield className="w-3.5 h-3.5" />
                            <span>Peraturan Perpustakaan</span>
                        </div>
                        <h2 className="text-4xl font-bold text-foreground mb-4">
                            Tata Tertib Pengunjung
                        </h2>
                        <p className="text-lg text-foreground/60">
                            Demi kenyamanan bersama, mohon perhatikan dan taati
                            peraturan yang berlaku di lingkungan KanesaPedia.
                        </p>
                    </div>

                    <motion.div
                        className="bg-background rounded-[2.5rem] p-8 md:p-12 border border-foreground/5 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="grid gap-6">
                            {[
                                "Sepatu Harus dilepas",
                                "Pengunjung wajib mengisi / menulis Daftar Pengunjung atau menggunakan kartu Pelajar",
                                "Tas, Jaket atau Helm, harap diletakkan di tempat yang telah disediakan.",
                                "Dilarang makan diruang perpustakaan.",
                                "Setelah membaca, Buku, Majalah, dan Koran, harap dikembalikan ketempat yang telah disediakan.",
                                "Dilarang memotong, merobek, menggunting buku, Surat kabar atau Majalah, tanpa seijin Petugas Perpustakaan.",
                                "Dilarang menggunakan Komputer atau menyalakan Televisi, tanpa seijin Petugas Perpustakaan.",
                                "Dilarang mencorat-coret atau merusak Property yang ada diruang Perpustakaan.",
                                "Usahakan suasana ruangan dalam keadaan Bersih, Tenang dan Menyenangkan.",
                            ].map((rule, index) => (
                                <div key={index} className="flex gap-5 group">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-foreground/5 flex items-center justify-center font-bold text-accent shadow-sm group-hover:bg-accent group-hover:text-white transition-all">
                                        {index + 1}
                                    </div>
                                    <p className="text-foreground/80 text-lg leading-relaxed pt-1.5 flex-1 border-b border-foreground/5 pb-4 group-last:border-0">
                                        {rule}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Nilai-nilai */}

            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-xs font-bold uppercase tracking-wider text-secondary mb-6">
                            <Heart className="w-3.5 h-3.5" />
                            <span>Nilai-Nilai Kami</span>
                        </div>
                        <h2 className="text-4xl font-bold text-foreground">
                            Nilai Inti yang Kami Perjuangkan
                        </h2>
                    </div>

                    <motion.div
                        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                    >
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className="text-center p-8 bg-accent/3 rounded-2xl border border-foreground/5 hover:shadow-md transition-all group"
                            >
                                <div
                                    className="w-14 h-14 rounded-2xl mx-auto mb-5 flex items-center justify-center"
                                    style={{
                                        backgroundColor: `color-mix(in srgb, ${v.color} 20%, transparent)`,
                                    }}
                                >
                                    <v.icon
                                        className="w-7 h-7"
                                        style={{ color: v.color }}
                                    />
                                </div>
                                <h4 className="text-lg font-bold text-foreground mb-3">
                                    {v.title}
                                </h4>
                                <p className="text-sm text-foreground/60 leading-relaxed">
                                    {v.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Sejarah / Timeline */}
            <section className="py-24 px-4 bg-accent/3">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-bold text-foreground mb-4">
                            Jejak Langkah Kami
                        </h2>
                        <p className="text-lg text-foreground/60">
                            Merangkai cerita dari inisiatif sederhana hingga
                            bertumbuh menjadi ekosistem literasi digital
                            mutakhir.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent/20 -translate-x-1/2 hidden md:block" />

                        <div className="space-y-8">
                            {milestones.map((m, i) => (
                                <motion.div
                                    key={i}
                                    className={`flex gap-8 items-start ${
                                        i % 2 === 0
                                            ? "md:flex-row"
                                            : "md:flex-row-reverse"
                                    }`}
                                    initial={{
                                        opacity: 0,
                                        x: i % 2 === 0 ? -24 : 24,
                                    }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: i * 0.05,
                                    }}
                                >
                                    <div
                                        className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                                    >
                                        <div className="bg-white rounded-2xl p-6 border border-foreground/5 hover:border-accent/20 transition-all">
                                            <div className="text-xs font-bold text-accent mb-2 uppercase tracking-wider">
                                                {m.year}
                                            </div>
                                            <h4 className="font-bold text-foreground text-lg mb-2">
                                                {m.title}
                                            </h4>
                                            <p className="text-foreground/60 text-sm leading-relaxed">
                                                {m.desc}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Dot (desktop center) */}
                                    <div className="hidden md:flex w-4 flex-shrink-0 items-start justify-center mt-6">
                                        <div className="w-4 h-4 rounded-full bg-accent border-4 border-background shadow-md" />
                                    </div>

                                    <div className="flex-1 hidden md:block" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Tim */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold uppercase tracking-wider text-primary mb-6">
                            <Users className="w-3.5 h-3.5" />
                            <span>Tim Kami</span>
                        </div>
                        <h2 className="text-4xl font-bold text-foreground">
                            Arsitek di Balik Layar KanesaPedia
                        </h2>
                    </div>

                    <motion.div
                        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {teamMembers.map((member, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className="bg-accent/3 rounded-2xl p-6 text-center border border-foreground/5 hover:shadow-md transition-all group"
                            >
                                <div
                                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl shadow-lg"
                                    style={{ backgroundColor: member.color }}
                                >
                                    {member.initials}
                                </div>
                                <h4 className="font-bold text-foreground text-lg mb-1">
                                    {member.name}
                                </h4>
                                <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-3">
                                    {member.role}
                                </p>
                                <p className="text-sm text-foreground/60 leading-relaxed">
                                    {member.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Struktur Organisasi */}
            <section className="py-24 px-4 bg-accent/3">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-xs font-bold uppercase tracking-wider text-secondary mb-6">
                            <Users className="w-3.5 h-3.5" />
                            <span>Struktur Organisasi</span>
                        </div>
                        <h2 className="text-4xl font-bold text-foreground mb-4">
                            Sistem Komando & Kemudi Ekosistem
                        </h2>
                        <p className="text-lg text-foreground/60">
                            Sinergi tim solid yang memastikan setiap inovasi dan
                            layanan berlayar tepat menuju satu visi besar.
                        </p>
                    </div>

                    <motion.div
                        className="bg-white rounded-[2rem] p-4 sm:p-8 border border-foreground/5 shadow-sm hover:border-secondary/20 transition-all"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            src="/struktur.png"
                            alt="Struktur Organisasi KanesaPedia"
                            className="w-full h-auto rounded-xl object-contain mx-auto"
                        />
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 bg-background relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-accent/20 blur-[100px] rounded-full z-0 pointer-events-none" />
                <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-secondary/30 blur-[80px] rounded-full z-0 pointer-events-none" />
                <motion.div
                    className="max-w-3xl mx-auto text-center relative z-10"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold text-foreground mb-4">
                        Ayo Berjalan Bersama Kami
                    </h2>
                    <p className="text-lg text-foreground mb-8">
                        Turut serta dan jadilah sang pionir dalam arus revolusi
                        literasi digital Nusantara.
                    </p>
                    <button className="px-8 py-3.5 bg-accent text-background rounded-full hover:bg-accent/90 transition-all flex items-center gap-2 mx-auto font-medium group">
                        Mulai Sekarang
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            </section>
        </Layout>
    );
}
