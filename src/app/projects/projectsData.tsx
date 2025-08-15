import { Project } from "@/types/projectCard.type";
import { FaAndroid, FaFigma, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
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
      "Saya berhasil merancang desain Open Recruitment VOLUNTEER BEM FIKTI UG Periode 2024/2025, yang merupakan program untuk mengajak mahasiswa/i aktif FIKTI UG berkontribusi dan menciptakan dampak nyata melalui berbagai kegiatan organisasi. Proses ini dilakukan melalui kolaborasi dengan Biro Media dalam pembuatan aset visual dan Biro Humas dalam penyusunan copywriting.",
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
      "Saya berhasil merancang desain Gelar Budaya FIKTI UG 2025, sebuah ajang seni tahunan BEM FIKTI Departemen Olahraga dan Seni Budaya yang menjadi wadah bagi mahasiswa untuk menyalurkan kreativitas, bakat, serta memperkenalkan beragam ekspresi seni. Proyek ini dikerjakan melalui kolaborasi dengan Biro Media dalam pembuatan aset visual dan Biro Humas dalam penyusunan copywriting.",
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
      "Saya berhasil merancang desain Pemira FIKTI UG 2025, ajang tahunan pemilihan Ketua Umum dan Wakil Ketua Umum BEM FIKTI Universitas Gunadarma sebagai wujud demokrasi mahasiswa di lingkungan FIKTI. Proyek ini dikerjakan melalui kolaborasi dengan Biro Media untuk pembuatan aset visual dan Biro Humas untuk penyusunan copywriting.",
  },

  {
    id: 4,
    title: "Tedu Apps",
    slug: "/projects/tedu-apps",
    bgGradient: "from-purple-background via-purple-background to-[#c39eff]",
    description:
      "Teddu adalah aplikasi pembelajaran berbasis mobile yang menghadirkan pengalaman belajar interaktif, kolaboratif, dan adaptif. Dilengkapi fitur kuis, taskboard, e-book, chatbot, dan forum diskusi publik, Teddu dirancang untuk meningkatkan motivasi, keterlibatan, dan hasil belajar siswa melalui antarmuka yang intuitif dan mudah digunakan.",
    images: ["/projects/tedu.jpg"], // gunakan poster image dari video
    tags: [
      { icon: <FaAndroid />, label: "Mobile Apps" },
      { icon: <FaFigma />, label: "Figma" },
    ],
    overview:
      "Teddu menghadirkan ekosistem pembelajaran digital lengkap dengan fitur kuis, taskboard, e-book, chatbot, dan forum diskusi publik untuk mendukung proses belajar mengajar modern.",
  },
];
