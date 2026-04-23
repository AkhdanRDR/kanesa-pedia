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

const categories = ["Semua", "Literasi", "Teknologi", "Pendidikan", "Inspirasi", "Review Buku"];

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
  Literasi: "#c5a84b",
  Teknologi: "#6e84d0",
  Pendidikan: "#8cdada",
  Inspirasi: "#c5a84b",
  "Review Buku": "#6e84d0",
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
    const matchCat = activeCategory === "Semua" || a.category === activeCategory;
    const matchSearch =
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = articles.find((a) => a.featured);
  const rest = filteredArticles.filter((a) => !a.featured || activeCategory !== "Semua" || searchQuery);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6e84d0]/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#6e84d0]/10 border border-[#6e84d0]/20 rounded-full text-xs font-bold uppercase tracking-wider text-[#6e84d0] mb-6">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Artikel & Blog</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-[#0d0b04] leading-tight mb-6">
              Gudang Wawasan,{" "}
              <span className="text-[#6e84d0]">Lentera Inspirasi</span>
            </h1>
            <p className="text-xl text-[#0d0b04]/60 max-w-2xl mx-auto leading-relaxed mb-10">
              Selami lautan pengetahuan melalui rilis artikel terkini, tren literasi digital, 
              hingga segudang kisah menyentuh yang akan selalu memompa semangat belajarmu.
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0d0b04]/40" />
              <input
                type="text"
                placeholder="Cari artikel..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-[#fcfbf7] border border-[#0d0b04]/10 rounded-full text-[#0d0b04] placeholder-[#0d0b04]/40 focus:outline-none focus:border-[#c5a84b]/50 focus:ring-2 focus:ring-[#c5a84b]/10 transition-all"
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
              <TrendingUp className="w-5 h-5 text-[#c5a84b]" />
              <span className="font-bold text-[#0d0b04] uppercase tracking-wider text-sm">
                Artikel Unggulan
              </span>
            </div>
            <motion.div
              className="grid lg:grid-cols-2 gap-0 bg-[#fcfbf7] rounded-2xl overflow-hidden border border-[#0d0b04]/5 hover:border-[#c5a84b]/20 transition-all group cursor-pointer shadow-sm hover:shadow-lg"
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
                    style={{ backgroundColor: categoryColors[featured.category] || "#c5a84b" }}
                  >
                    {featured.category}
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center gap-4">
                <div className="flex items-center gap-4 text-sm text-[#0d0b04]/50">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {featured.readTime} baca
                  </span>
                  <span>{featured.date}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#0d0b04] group-hover:text-[#c5a84b] transition-colors leading-tight">
                  {featured.title}
                </h2>
                <p className="text-[#0d0b04]/60 leading-relaxed">{featured.description}</p>
                <button className="flex items-center gap-2 text-[#c5a84b] font-semibold hover:gap-3 transition-all w-fit">
                  Baca Selengkapnya <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Categories + Grid */}
      <section className="py-12 px-4 bg-[#fcfbf7]">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                  activeCategory === cat
                    ? "bg-[#c5a84b] text-white border-[#c5a84b]"
                    : "bg-white text-[#0d0b04]/70 border-[#0d0b04]/10 hover:border-[#c5a84b]/30 hover:text-[#c5a84b]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          {filteredArticles.length === 0 ? (
            <div className="text-center py-24">
              <BookOpen className="w-16 h-16 text-[#0d0b04]/20 mx-auto mb-4" />
              <p className="text-[#0d0b04]/50 text-lg">Tidak ada artikel yang ditemukan.</p>
            </div>
          ) : (
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={activeCategory + searchQuery}
            >
              {(activeCategory !== "Semua" || searchQuery ? filteredArticles : rest).map(
                (article) => (
                  <motion.div
                    key={article.id}
                    variants={itemVariants}
                    className="bg-white rounded-2xl overflow-hidden border border-[#0d0b04]/5 hover:border-[#c5a84b]/30 hover:shadow-lg transition-all group cursor-pointer"
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
                            backgroundColor: categoryColors[article.category] || "#c5a84b",
                          }}
                        >
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs text-[#0d0b04]/50 mb-3">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime} baca
                        </span>
                        <span>{article.date}</span>
                      </div>
                      <h3 className="font-bold text-[#0d0b04] mb-3 group-hover:text-[#c5a84b] transition-colors leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-[#0d0b04]/60 text-sm mb-4 leading-relaxed line-clamp-2">
                        {article.description}
                      </p>
                      <button className="text-[#0d0b04] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                        Baca Selengkapnya <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )
              )}
            </motion.div>
          )}

          {/* Tag cloud */}
          <div className="mt-16 bg-white rounded-2xl p-8 border border-[#0d0b04]/5">
            <div className="flex items-center gap-2 mb-5">
              <Tag className="w-5 h-5 text-[#c5a84b]" />
              <h3 className="font-bold text-[#0d0b04]">Topik Populer</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                "Literasi Digital", "Buku Anak", "Review Buku", "Tips Belajar",
                "AI Pendidikan", "Perpustakaan", "E-Book", "Jurnal Ilmiah",
                "Motivasi", "Teknologi Edukasi",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-[#fcfbf7] border border-[#0d0b04]/10 rounded-full text-sm text-[#0d0b04]/70 hover:border-[#c5a84b]/30 hover:text-[#c5a84b] cursor-pointer transition-all"
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
