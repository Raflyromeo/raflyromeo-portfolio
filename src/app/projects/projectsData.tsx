import { Project } from "@/types/projectCard.type";
import { FaAndroid, FaFigma } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SlGlobe } from "react-icons/sl";

export const projects: Project[] = [
  {
    id: 1,
    title: "Oprec Volunteer BEM FIKTI UG 2025",
    slug: "/projects/oprec-volunteer",
    bgGradient: "from-cyan-200 via-cyan-300 to-cyan-500",
    description:
      "Open Recruitment Volunteer BEM FIKTI UG 2024/2025 adalah program yang mengajak mahasiswa/i aktif FIKTI UG untuk berkontribusi dan menciptakan dampak nyata melalui berbagai kegiatan organisasi.",
    images: ["/projects/oprec-volun.jpg"],
    tags: [
      { icon: <SlGlobe />, label: "Web App" },
      { icon: <FaFigma />, label: "Figma" },
    ],
    overview:
      "Saya berhasil merancang desain Open Recruitment VOLUNTEER BEM FIKTI UG Periode 2024/2025, bekerja sama dengan Biro Media dan Biro Humas untuk pembuatan aset visual dan copywriting.",
    solution:
      "Mengembangkan konsep desain web dan poster yang konsisten dengan branding BEM FIKTI UG.",
    result:
      "Website pendaftaran sukses digunakan oleh ratusan mahasiswa untuk mendaftar sebagai volunteer.",
  },

  {
    id: 2,
    title: "Gelar Budaya FIKTI UG 2025",
    slug: "/projects/gelar-budaya-fikti",
    bgGradient: "from-purple-300 via-purple-400 to-indigo-500",
    description:
      "Gelar Budaya 2025 adalah ajang seni tahunan BEM FIKTI Departemen Olahraga dan Seni Budaya yang menjadi wadah bagi mahasiswa untuk menyalurkan kreativitas, bakat, serta memperkenalkan beragam ekspresi seni.",
    images: ["/projects/gelbud.jpg"],
    tags: [
      { icon: <SlGlobe />, label: "Web App" },
      { icon: <FaFigma />, label: "Figma" },
    ],
    overview:
      "Merancang desain Gelar Budaya FIKTI UG 2025 melalui kolaborasi dengan Biro Media untuk visual dan Biro Humas untuk copywriting.",
    solution:
      "Membuat materi desain event dan publikasi yang menarik serta mudah dipahami audiens.",
    result:
      "Publikasi berhasil menarik antusiasme tinggi, meningkatkan partisipasi acara.",
  },

  {
    id: 3,
    title: "Pemira FIKTI UG 2025",
    slug: "/projects/pemira-fikti",
    bgGradient: "from-gray-800 via-gray-900 to-black",
    description:
      "Pemira FIKTI UG adalah ajang tahunan pemilihan Ketua Umum dan Wakil Ketua Umum BEM FIKTI Universitas Gunadarma sebagai wujud demokrasi mahasiswa di lingkungan FIKTI.",
    images: ["/projects/pemira-ug.jpg"],
    tags: [
      { icon: <SlGlobe />, label: "Web App" },
      { icon: <FaFigma />, label: "Figma" },
    ],
    overview:
      "Merancang desain Pemira FIKTI UG 2025 bersama Biro Media dan Biro Humas.",
    solution:
      "Menyediakan desain visual kampanye yang informatif dan mudah diakses mahasiswa.",
    result:
      "Proses kampanye dan pemilihan berjalan lancar dengan partisipasi yang signifikan.",
  },

  {
    id: 4,
    title: "Tedu Apps",
    slug: "/projects/tedu-apps",
    bgGradient: "from-purple-background via-purple-background to-[#c39eff]",
    description:
      "Teddu adalah aplikasi pembelajaran berbasis mobile yang menghadirkan pengalaman belajar interaktif, kolaboratif, dan adaptif.",
    images: ["/projects/tedu.jpg"],
    tags: [
      { icon: <FaAndroid />, label: "Mobile Apps" },
      { icon: <FaFigma />, label: "Figma" },
    ],
    overview:
      "Teddu menghadirkan ekosistem pembelajaran digital lengkap dengan fitur kuis, taskboard, e-book, chatbot, dan forum diskusi publik.",
    solution:
      "Merancang UI/UX aplikasi mobile dengan fokus pada kemudahan navigasi dan interaksi pengguna.",
    result:
      "Pengujian awal menunjukkan peningkatan keterlibatan siswa hingga 40%.",
  },
];
