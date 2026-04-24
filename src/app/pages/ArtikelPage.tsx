import { useState } from "react";
import { motion } from "framer-motion";
import {
    Lightbulb,
    Search,
    Clock,
    ArrowRight,
    Tag,
    TrendingUp,
    BookOpen,
} from "lucide-react";
import Layout from "../components/Layout";

const categories = [
    "Semua",
    "Literasi",
    "Teknologi",
    "Pendidikan",
    "Inspirasi",
    "Review Buku",
];

const articles = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1771765780945-c788a6ce4b33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        title: "Teknologi VR dalam Pembelajaran Modern",
        description:
            "Bagaimana teknologi virtual reality mengubah cara kita belajar dan mengakses informasi di era digital yang terus berkembang.",
        date: "15 April 2026",
        readTime: "5 menit",
        category: "Teknologi",
        featured: true,
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1645363308298-3a949c8bfd86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        title: "Membangun Kebiasaan Membaca Digital",
        description:
            "Tips praktis untuk mengembangkan rutinitas membaca yang efektif menggunakan platform digital dan meningkatkan literasi.",
        date: "12 April 2026",
        readTime: "4 menit",
        category: "Literasi",
        featured: false,
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1745162829464-c3487261f90d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        title: "Peran Literasi dalam Pendidikan Abad 21",
        description:
            "Mengapa literasi digital menjadi keterampilan penting untuk masa depan generasi muda dan bagaimana mempersiapkannya.",
        date: "8 April 2026",
        readTime: "6 menit",
        category: "Pendidikan",
        featured: false,
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        title: "Review: 10 Buku Sains Terbaik Tahun Ini",
        description:
            "Rekomendasi buku sains yang wajib dibaca oleh para pelajar untuk memperluas wawasan dan memicu rasa ingin tahu.",
        date: "5 April 2026",
        readTime: "8 menit",
        category: "Review Buku",
        featured: false,
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        title: "Kisah Inspirasi: Dari Buku ke Inovasi",
        description:
            "Bagaimana membaca buku menginspirasi para pemuda Indonesia untuk menciptakan solusi inovatif bagi tantangan nyata.",
        date: "1 April 2026",
        readTime: "5 menit",
        category: "Inspirasi",
        featured: false,
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        title: "AI dan Masa Depan Perpustakaan",
        description:
            "Eksplorasi bagaimana kecerdasan buatan sedang merevolusi cara perpustakaan modern beroperasi dan melayani penggunanya.",
        date: "28 Maret 2026",
        readTime: "7 menit",
        category: "Teknologi",
        featured: false,
    },
];

const categoryColors: Record<string, string> = {
    Literasi: "var(--accent)",
    Teknologi: "var(--secondary)",
    Pendidikan: "var(--primary)",
    Inspirasi: "var(--accent)",
    "Review Buku": "var(--secondary)",
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ArtikelPage() {
    const [activeCategory, setActiveCategory] = useState("Semua");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredArticles = articles.filter((a) => {
        const matchCat =
            activeCategory === "Semua" || a.category === activeCategory;
        const matchSearch =
            a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            a.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCat && matchSearch;
    });

    const featured = articles.find((a) => a.featured);
    const rest = filteredArticles.filter(
        (a) => !a.featured || activeCategory !== "Semua" || searchQuery,
    );

    return (
        <Layout>
            {/* Hero */}
            <section className="relative py-24 px-4 overflow-hidden bg-white">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/8 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-xs font-bold uppercase tracking-wider text-secondary mb-6">
                            <Lightbulb className="w-3.5 h-3.5" />
                            <span>Artikel & Blog</span>
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                            Gudang Wawasan,{" "}
                            <span className="text-secondary">
                                Lentera Inspirasi
                            </span>
                        </h1>
                        <p className="text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed mb-10">
                            Selami lautan pengetahuan melalui rilis artikel
                            terkini, tren literasi digital, hingga segudang
                            kisah menyentuh yang akan selalu memompa semangat
                            belajarmu.
                        </p>

                        {/* Search */}
                        <div className="relative max-w-xl mx-auto">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                            <input
                                type="text"
                                placeholder="Cari artikel..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-6 py-4 bg-accent/3 border border-foreground/10 rounded-full text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Article */}
            {featured && activeCategory === "Semua" && !searchQuery && (
                <section className="px-4 pb-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center gap-2 mb-6">
                            <TrendingUp className="w-5 h-5 text-accent" />
                            <span className="font-bold text-foreground uppercase tracking-wider text-sm">
                                Artikel Unggulan
                            </span>
                        </div>
                        <motion.div
                            className="grid lg:grid-cols-2 gap-0 bg-accent/3 rounded-2xl overflow-hidden border border-foreground/5 hover:border-accent/20 transition-all group cursor-pointer shadow-sm hover:shadow-lg"
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="relative h-64 lg:h-auto overflow-hidden">
                                <img
                                    src={featured.image}
                                    alt={featured.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span
                                        className="px-3 py-1 rounded-full text-xs font-bold text-white"
                                        style={{
                                            backgroundColor:
                                                categoryColors[
                                                    featured.category
                                                ] || "var(--accent)",
                                        }}
                                    >
                                        {featured.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-8 lg:p-12 flex flex-col justify-center gap-4">
                                <div className="flex items-center gap-4 text-sm text-foreground/50">
                                    <span className="flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5" />
                                        {featured.readTime} baca
                                    </span>
                                    <span>{featured.date}</span>
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-accent transition-colors leading-tight">
                                    {featured.title}
                                </h2>
                                <p className="text-foreground/60 leading-relaxed">
                                    {featured.description}
                                </p>
                                <button className="flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all w-fit">
                                    Baca Selengkapnya{" "}
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Categories + Grid */}
            <section className="py-12 px-4 bg-accent/3">
                <div className="max-w-7xl mx-auto">
                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-3 mb-10">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                                    activeCategory === cat
                                        ? "bg-accent text-white border-accent"
                                        : "bg-white text-foreground/70 border-foreground/10 hover:border-accent/30 hover:text-accent"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Articles Grid */}
                    {filteredArticles.length === 0 ? (
                        <div className="text-center py-24">
                            <BookOpen className="w-16 h-16 text-foreground/20 mx-auto mb-4" />
                            <p className="text-foreground/50 text-lg">
                                Tidak ada artikel yang ditemukan.
                            </p>
                        </div>
                    ) : (
                        <motion.div
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            key={activeCategory + searchQuery}
                        >
                            {(activeCategory !== "Semua" || searchQuery
                                ? filteredArticles
                                : rest
                            ).map((article) => (
                                <motion.div
                                    key={article.id}
                                    variants={itemVariants}
                                    className="bg-background rounded-2xl overflow-hidden border border-foreground/5 hover:border-accent/30 hover:shadow-lg transition-all group cursor-pointer"
                                >
                                    <div className="relative overflow-hidden h-48">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span
                                                className="px-3 py-1 rounded-full text-xs font-bold text-white"
                                                style={{
                                                    backgroundColor:
                                                        categoryColors[
                                                            article.category
                                                        ] || "var(--accent)",
                                                }}
                                            >
                                                {article.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-4 text-xs text-foreground/50 mb-3">
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {article.readTime} baca
                                            </span>
                                            <span>{article.date}</span>
                                        </div>
                                        <h3 className="font-bold text-foreground mb-3 group-hover:text-accent transition-colors leading-snug">
                                            {article.title}
                                        </h3>
                                        <p className="text-foreground/60 text-sm mb-4 leading-relaxed line-clamp-2">
                                            {article.description}
                                        </p>
                                        <button className="text-foreground font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                                            Baca Selengkapnya{" "}
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {/* Tag cloud */}
                    <div className="mt-16 bg-white rounded-2xl p-8 border border-foreground/5">
                        <div className="flex items-center gap-2 mb-5">
                            <Tag className="w-5 h-5 text-accent" />
                            <h3 className="font-bold text-foreground">
                                Topik Populer
                            </h3>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {[
                                "Literasi Digital",
                                "Buku Anak",
                                "Review Buku",
                                "Tips Belajar",
                                "AI Pendidikan",
                                "Perpustakaan",
                                "E-Book",
                                "Jurnal Ilmiah",
                                "Motivasi",
                                "Teknologi Edukasi",
                            ].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-2 bg-accent/3 border border-foreground/10 rounded-full text-sm text-foreground/70 hover:border-accent/30 hover:text-accent cursor-pointer transition-all"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
