import Card from "@/components/fragments/card";
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  // FaXTwitter,
} from "react-icons/fa6";

export default function SocialMediaSection() {
  return (
    <Card className="text-left">
      <h1 className="mb-4 text-2xl font-semibold">Yuk, Mutualan!</h1>
      <div className="flex flex-col items-center justify-center gap-2 w-full  text-sm font-normal">
        <a
          href="https://www.instagram.com/rfly.romeo_"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center py-3 border border-black-border bg-[#262626] rounded-lg gap-2 text-white transition-all duration-300 hover:bg-[#E4405F]"
        >
          <FaInstagram size={20} /> @rfly.romeo_
        </a>
        <a
          href="https://www.linkedin.com/in/muhammadraflyromeonasution"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center py-3 border border-black-border bg-[#262626] rounded-lg gap-2 text-white transition-all duration-300 hover:bg-[#0077B5]"
        >
          <FaLinkedin size={20} /> MuhammadRaflyRomeoNasution
        </a>
        <a
          href="www.youtube.com/@raflyromeoo"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center py-3 border border-black-border bg-[#262626] rounded-lg gap-2 text-white transition-all duration-300 hover:bg-[#FF0000]"
        >
          <FaYoutube size={20} /> raflyromeoo
        </a>
        <a
          href="mailto:raflyromeonasution07@gmail.com"
          className="w-full flex items-center justify-center py-3 border border-black-border bg-[#262626] rounded-lg gap-2 text-white transition-all duration-300 hover:bg-[#D44638]"
        >
          <FaEnvelope size={20} /> raflyromeonasution07@gmail.com
        </a>
        {/* <a
          href="https://twitter.com/username"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center py-3 border border-black-border bg-[#262626] rounded-lg gap-2 text-white transition-all duration-300 hover:bg-[#000000]"
        >
          <FaXTwitter size={20} /> (Twitter)
        </a> */}
      </div>
    </Card>
  );
}
