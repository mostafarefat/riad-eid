"use client";
import { useState } from "react";
import ServiceModal from "app/components/ServiceModal"; 
import Image from "next/image"
import Link from "next/link"
export default function Press(){
  const [modalOpen, setModalOpen] = useState(false);
    return(
        <section className="mt-36">
            <ul >
                <li className="text-center font-semibold text-3xl  text-gray-800 mb-3">الصحافة</li>
                <div className="flex justify-center">
                <li className="text-center font-normal text-gray-500 text-lg w-3xl">فى هذا الصفحة ستجد مقالات وحوارات صحفية نشرت عن الخبير رياض عيد وخدماته المتقدمة فى تحديد جنس المولود ومعرفة نوع الجنين ز تعرف على ما قالته الصحافة العربية والعالمية عن البرنامج كيف ساعد الاف الاسر حول العالم ولماذا اصبح اسمه مرتبطا بالدقة والثقة فى هذا المجال</li>
                </div>
            </ul>
            <div className="flex justify-between items-center bg-blue-50 mt-10 px-10 mx-56 py-16 rounded-2xl">
                <ul>
                    <li className="font-semibold text-2xl text-blue-500 mb-8">مقابلات رائجة</li>
                    <li className="font-semibold text-2xl text-gray-800 mb-8">جريدة المبتدأ عن برنامج الخبير رياض عيد</li>
                    <li className="font-normal text-sm text-gray-500">الخبير رياض عيد</li>
                </ul>
                <div>
                    <Image src="/Riad/scr.jpeg" alt="#" width={350} height={198}></Image>
                </div>
            </div>
                  <div className="bg-blue-50 mx-20 flex justify-between items-center py-16 px-8 rounded-2xl my-16">
        <ul className="w-2/3">
          <li className="font-semibold text-gray-800 text-xl mb-4">
            بفضل الله وخبرة 50 عامًا، أصبح بإمكانك التخطيط لمستقبل عائلتك بثقة
          </li>
          <li className="text-gray-500 text-base font-normal  ">
            بفضل الله وخبرة تتجاوز 50 عامًا، نقدّم لك أدق وأفضل طرق تحديد جنس
            المولود ومعرفة نوع الجنين بطرق طبيعية، تحت إشراف الخبير رياض عيد –
            بأعلى نسبة نجاح{" "}
          </li>
        </ul>
        <div className="flex gap-3">
        <button
          className="bg-blue-600 text-white px-8 py-3   rounded-xl font-semibold   transition "
          onClick={() => setModalOpen(true)}
        >
          ابدا الآن{" "}
        </button>
          <Link href={"/sign-in"} className="w-34 py-3 rounded-xl text-blue-500 border font-semibold text-center">
            تسجيل الدخول
          </Link>
        </div>
      </div>
      <ServiceModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </section>
    )
}