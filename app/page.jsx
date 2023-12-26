import FirstContent from "@/components/first-content";
import HowToUse from "@/components/howToUse";
import ALitleBitAboutUs from "@/components/aLittleBitAboutUs";
import Terapizone from "@/components/terapizone";
import Faq from "@/components/faq";

export default function Home() {
  return (
    <div className="min-h-screen overflow-y-auto scroll-smooth w-screen overflow-x-hidden">
      <FirstContent />
      <HowToUse />
      <ALitleBitAboutUs />
      <Terapizone />
      <Faq />
    </div>
  );
}
