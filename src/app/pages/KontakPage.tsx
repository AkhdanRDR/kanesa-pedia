import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Instagram,
  Twitter,
  Facebook,
  CheckCircle,
} from "lucide-react";
import Layout from "../components/Layout";

const contactInfo = [
  {
    icon: Mail,
    color: "#c5a84b",
    label: "Email",
    value: "info@kanesapedia.sch.id",
    sub: "Kami membalas dalam 1×24 jam",
  },
  {
    icon: Phone,
    color: "#8cdada",
    label: "Telepon",
    value: "(021) 1234-5678",
    sub: "Senin–Jumat, 07:00–15:30 WIB",
  },
  {
    icon: MapPin,
    color: "#6e84d0",
    label: "Alamat",
    value: "Jl. Pendidikan No. 123",
    sub: "Jakarta Selatan 12345",
  },
  {
    icon: Clock,
    color: "#c5a84b",
    label: "Jam Buka",
    value: "07:00 – 15:30 WIB",
    sub: "Senin hingga Jumat (Digital: 24/7)",
  },
];

const faqs = [
  {
    q: "Bagaimana cara mendaftar sebagai anggota KanesaPedia?",
    a: "Kamu bisa mendaftar melalui halaman utama dengan mengklik tombol 'Daftar'. Gunakan email sekolah untuk proses verifikasi yang lebih cepat.",
  },
  {
    q: "Apakah layanan KanesaPedia gratis?",
    a: "Layanan dasar KanesaPedia tersedia gratis untuk seluruh sivitas sekolah. Beberapa koleksi premium mungkin memerlukan akses khusus dari pustakawan.",
  },
  {
    q: "Berapa lama saya bisa meminjam buku digital?",
    a: "Peminjaman buku digital berlaku selama 14 hari dan dapat diperpanjang hingga 2 kali selama tidak ada antrian peminjam lain.",
  },
  {
    q: "Apakah saya bisa mengakses dari luar sekolah?",
    a: "Ya! KanesaPedia bisa diakses dari mana saja dan kapan saja asalkan terhubung dengan internet menggunakan akun sekolah yang terdaftar.",
  },
];

export default function KontakPage() {
  const [form, setForm] = useState({ nama: "", email: "", subjek: "", pesan: "" });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#c5a84b]/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#6e84d0]/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c5a84b]/10 border border-[#c5a84b]/20 rounded-full text-xs font-bold uppercase tracking-wider text-[#c5a84b] mb-6">
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Hubungi Kami</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-[#0d0b04] leading-tight mb-6">
              Ada Pertanyaan?{" "}
              <span className="text-[#c5a84b]">Kami Siap Membantu</span>
            </h1>
            <p className="text-xl text-[#0d0b04]/60 max-w-2xl mx-auto leading-relaxed">
              Tim KanesaPedia selalu siap menjawab pertanyaan, menerima masukan,
              dan membantu kamu mendapatkan pengalaman membaca terbaik.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 bg-[#fcfbf7]">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 border border-[#0d0b04]/5 hover:shadow-md hover:border-[#c5a84b]/20 transition-all"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <p className="text-xs text-[#0d0b04]/40 uppercase tracking-wider font-semibold mb-1">
                  {item.label}
                </p>
                <p className="font-bold text-[#0d0b04] mb-1">{item.value}</p>
                <p className="text-xs text-[#0d0b04]/50">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map/Social */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#0d0b04] mb-2">Kirim Pesan</h2>
              <p className="text-[#0d0b04]/60 mb-8">
                Isi formulir di bawah dan kami akan menghubungimu segera.
              </p>

              {submitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center gap-4 py-16 bg-[#fcfbf7] rounded-2xl border border-[#c5a84b]/20 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle className="w-16 h-16 text-[#c5a84b]" />
                  <h3 className="text-2xl font-bold text-[#0d0b04]">
                    Pesan Terkirim!
                  </h3>
                  <p className="text-[#0d0b04]/60 max-w-sm">
                    Terima kasih sudah menghubungi kami. Tim kami akan membalas
                    dalam 1×24 jam kerja.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ nama: "", email: "", subjek: "", pesan: "" }); }}
                    className="px-6 py-2.5 bg-[#c5a84b] text-white rounded-full text-sm font-medium hover:bg-[#b39742] transition-all"
                  >
                    Kirim Pesan Lain
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#0d0b04] mb-2">
                        Nama Lengkap <span className="text-[#c5a84b]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Masukkan nama kamu"
                        value={form.nama}
                        onChange={(e) => setForm({ ...form, nama: e.target.value })}
                        className="w-full px-4 py-3 bg-[#fcfbf7] border border-[#0d0b04]/10 rounded-xl text-[#0d0b04] placeholder-[#0d0b04]/40 focus:outline-none focus:border-[#c5a84b]/50 focus:ring-2 focus:ring-[#c5a84b]/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0d0b04] mb-2">
                        Email <span className="text-[#c5a84b]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="email@sekolah.sch.id"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#fcfbf7] border border-[#0d0b04]/10 rounded-xl text-[#0d0b04] placeholder-[#0d0b04]/40 focus:outline-none focus:border-[#c5a84b]/50 focus:ring-2 focus:ring-[#c5a84b]/10 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0d0b04] mb-2">
                      Subjek <span className="text-[#c5a84b]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Perihal pesan kamu"
                      value={form.subjek}
                      onChange={(e) => setForm({ ...form, subjek: e.target.value })}
                      className="w-full px-4 py-3 bg-[#fcfbf7] border border-[#0d0b04]/10 rounded-xl text-[#0d0b04] placeholder-[#0d0b04]/40 focus:outline-none focus:border-[#c5a84b]/50 focus:ring-2 focus:ring-[#c5a84b]/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0d0b04] mb-2">
                      Pesan <span className="text-[#c5a84b]">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tulis pesanmu di sini..."
                      value={form.pesan}
                      onChange={(e) => setForm({ ...form, pesan: e.target.value })}
                      className="w-full px-4 py-3 bg-[#fcfbf7] border border-[#0d0b04]/10 rounded-xl text-[#0d0b04] placeholder-[#0d0b04]/40 focus:outline-none focus:border-[#c5a84b]/50 focus:ring-2 focus:ring-[#c5a84b]/10 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#c5a84b] text-white rounded-full hover:bg-[#b39742] transition-all flex items-center gap-2 justify-center font-medium group"
                  >
                    Kirim Pesan
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="lg:col-span-2 flex flex-col gap-6"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Social Media */}
              <div className="bg-[#fcfbf7] rounded-2xl p-6 border border-[#0d0b04]/5">
                <h3 className="font-bold text-[#0d0b04] mb-4">Temukan Kami di Sosmed</h3>
                <div className="flex flex-col gap-3">
                  {[
                    { Icon: Instagram, name: "@kanesapedia", color: "#c5a84b", handle: "Instagram" },
                    { Icon: Twitter, name: "@kanesapedia", color: "#6e84d0", handle: "Twitter / X" },
                    { Icon: Facebook, name: "KanesaPedia", color: "#8cdada", handle: "Facebook" },
                  ].map(({ Icon, name, color, handle }) => (
                    <a
                      key={handle}
                      href="#"
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-white transition-all group"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${color}20` }}
                      >
                        <Icon className="w-5 h-5" style={{ color }} />
                      </div>
                      <div>
                        <p className="font-medium text-[#0d0b04] text-sm group-hover:text-[#c5a84b] transition-colors">
                          {name}
                        </p>
                        <p className="text-xs text-[#0d0b04]/50">{handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-[#fcfbf7] rounded-2xl overflow-hidden border border-[#0d0b04]/5 flex-1">
                <div className="h-48 bg-gradient-to-br from-[#c5a84b]/10 to-[#6e84d0]/10 flex items-center justify-center relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-10 h-10 text-[#c5a84b] mx-auto mb-2" />
                      <p className="text-sm font-medium text-[#0d0b04]">Jl. Pendidikan No. 123</p>
                      <p className="text-xs text-[#0d0b04]/50">Jakarta Selatan 12345</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#c5a84b] font-medium hover:underline"
                  >
                    Buka di Google Maps →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-[#fcfbf7]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0d0b04] mb-3">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-[#0d0b04]/60">
              Temukan jawaban cepat untuk pertanyaan umum seputar KanesaPedia.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="bg-white rounded-2xl border border-[#0d0b04]/5 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-[#fcfbf7] transition-colors"
                >
                  <span className="font-semibold text-[#0d0b04]">{faq.q}</span>
                  <span
                    className={`text-[#c5a84b] text-xl flex-shrink-0 transition-transform duration-200 ${
                      openFaq === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-5 text-[#0d0b04]/60 leading-relaxed border-t border-[#0d0b04]/5"
                  >
                    <p className="pt-4">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
