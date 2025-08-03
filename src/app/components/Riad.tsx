"use client";
import Image from "next/image";
import { useState } from "react";
import ServiceModal from "app/components/ServiceModal"; 
export default function Riad() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className="flex justify-between pt-10 pb-20 px-20 mt-16">
      <div className=" w-lg ">
        <h3 className="font-semibold text-2xl ">
          بفضل الله وخبرة 50 عامًا، أصبح بإمكانك التخطيط لمستقبل عائلتك بثقة!
        </h3>
        <p className="font-normal text-lg text-gray-500 mt-4 mb-16">
          .ﺞﻣﺎﻧﺮﺒﻟا ﻲﻓ هرﻮﻛﺬﻤﻟا تﺎﻴﺻﻮﺘﻟا ﻊﻴﻤﺠﺑ ﻦﻴﺟوﺰﻟا ماﺰﺘﻟا لﺎﺣ ﻲﻓ %95 ﻰﻟإ ﻞﺼﺗ
          ﺮﻣﺎﻟا اﺬﻫ ﻲﻓ حﺎﺠﻨﻟا ﺔﺒﺴﻧو ةﺪﻴﺴﻟا ىﺪﻟ ﺔﻳﺮﻬﺸﻟا ةروﺪﻟا ﺔﺒﻗاﺮﻣو تﺎﺑﺎﺴﺤﻟا
          لﺎﻠﺧ ﻦﻣ ، ﺎﺛﺎﻧإو ارﻮﻛذ ﻦﻴﺴﻨﺠﻟا ﺎﻠﻛ ﻦﻣ ﺪﻴﻟاﻮﻣ ﻰﻠﻋ لﻮﺼﺤﻠﻟ ةﺮﺳﺎﻟا ﻢﻴﻈﻨﺗ
          ﻲﻓ جاوزﺄﻟا ةﺪﻋﺎﺴﻣ ﻰﻠﻋ ﻞﻤﻌﻳ ﻞﻔﺳﺎﻟا ﻞﻴﻠﺠﻟا ﻲﻓ نﻮﺒﻠﻴﻋ ﺔﻳﺮﻗ ﻦﻣ ، ﺪﻴﻋ ضﺎﻳر
        </p>
        <div>
        <button
          className="bg-blue-600 text-white px-16 py-6   rounded-2xl font-semibold text-xl hover:bg-blue-700 transition "
          onClick={() => setModalOpen(true)}
        >
          ابدا الآن{" "}
        </button>
        </div>
      </div>
      <div>
        <Image src="/Riad/riad.svg" alt="#" width={280} height={320}></Image>
      </div>
      <ServiceModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
