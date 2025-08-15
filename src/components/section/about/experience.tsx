import Card from "@/components/fragments/card";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { GrFormNextLink } from "react-icons/gr";

export default function ExperienceSection() {
  return (
    <Card className="text-left">
      <h1 className="mb-4 text-2xl font-semibold">Pengalaman</h1>
      {/* WEBSITE BEM FIKTI UG 2025 */}
      <div className="flex flex-col items-start justify-center w-full pt-4 border-t border-black-border">
        <Link
          href="https://bemfikti-gunadarma.web.id/"
          target="_blank"
          className="flex items-center justify-center font-semibold gap-2 py-1 px-3 border-[2px] bg-[#262626] border-black-border rounded-[12px] hover:bg-green-background transition-all duration-200"
        >
          <span>BEM FIKTI UG </span>
          <GrFormNextLink size={25} className="-rotate-45" />
        </Link>
        <h1 className="font-semibold my-2">
          UI/UX Designer • November 2024 - Current
        </h1>
        <p>
          Merancang desain website resmi BEM FIKTI Universitas Gunadarma sebagai
          UI/UX Designer menggunakan Figma. Saya membuat konsep antarmuka yang
          modern, responsif, dan ramah pengguna, sehingga memudahkan mahasiswa
          mengakses informasi mengenai acara kampus, kegiatan organisasi, dan
          sumber daya lainnya. Dalam proyek ini, saya menerapkan prinsip desain
          yang bersih, konsisten, dan menarik, sekaligus memastikan pengalaman
          pengguna yang cepat, mudah dipahami, dan sesuai dengan kebutuhan
          mahasiswa.
        </p>
      </div>
      <div className="w-fit self-end">
        <Link
          href="/projects"
          className="mt-8 flex items-center  justify-end px-6 py-3 gap-4 border-[2px] bg-[#262626] border-black-border rounded-[12px] hover:bg-green-background transition-all duration-200"
        >
          <span>Lihat lebih banyak</span>
          <FaArrowRight size={20} />
        </Link>
      </div>
    </Card>
  );
}
