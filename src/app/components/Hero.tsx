"use client";
import { useState } from "react";
import Image from "next/image";
import ServiceModal from "app/components/ServiceModal"; // تأكد من المسار الصحيح

type HeroProps = {
  imageSrc?: string;
};

export default function Hero({ imageSrc = "/Hero/image2.png" }: HeroProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex justify-between px-20 Hero mt-25 w-full gap-18 relative">
      <div className="w-2/4 mt-20">
        <h1 className="font-bold text-3xl">
          {'{ "عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ" }'}
        </h1>

        <h3 className="font-bold text-2xl mt-12 mb-6">
          حدد مستقبل عائلتك بذكاء – اشترك الآن في خدمة تحديد جنس المولود ومعرفة
          نوع الجنين
        </h3>

        <p className="font-normal text-gray-500 text-xl mb-6">
          {
            "بفضل الله وخبرة تتجاوز 50 عامًا، نقدّم لك أدق وأفضل طرق تحديد جنس المولود ومعرفة نوع الجنين بطرق طبيعية، تحت إشراف الخبير رياض عيد – بأعلى نسبة نجاح "
          }
        </p>

        {/* زر فتح المودال */}
        <button
          className="bg-blue-600 text-white px-16 py-6 border-amber-400 border-1 rounded-2xl font-semibold text-xl hover:bg-blue-700 transition "
          onClick={() => setModalOpen(true)}
        >
          ابدا الآن{" "}
        </button>
      </div>

      <div className="ml-20 mt-10">
        <Image src={imageSrc} alt="Hero Image" width={400} height={500} />
      </div>

      {/* المودال */}
      <ServiceModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
