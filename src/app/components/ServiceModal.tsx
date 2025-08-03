"use client";
import { useEffect } from "react";
import Link from "next/link";

type ServiceModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ServiceModal({ isOpen, onClose }: ServiceModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center ">
      <div className="bg-white rounded-xl w-[90%] max-w-6xl px-6 py-4 relative shadow-lg  ">
        {/* زر × */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-center text-2xl font-semibold mb-8 mt-4">
          اختر الخدمة التي ترغب في استكشافها
        </h2>
        


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* تحديد جنس المولود */}
          <div className="bg-sky-50 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold  text-blue-600 mb-4">
              💎 تحديد جنس المولود
            </h3>
            <p className=" mb-4 font-normal text-lg text-gray-500">
              أحدث التقنيات لمساعدتك في اختيار جنس طفلك قبل الحمل.
            </p>
            <ul className="list-disc list-inside text-sm font-normal text-gray-500 mb-8 ">
              <li>خبرة 50 عامًا مع رياض عيد</li>
              <li className="my-2">طرق طبيعية وآمنة</li>
              <li>إرشادات مفصلة خطوة بخطوة</li>
            </ul>
            <div className="w-full bg-blue-500  text-center py-5 rounded-2xl hover:bg-blue-800">
            <Link href={"/GenderSelection"} className="  text-lg font-medium text-white py-5   ">
              ابدأ التحديد
            </Link>              
            </div>

          </div>          
          {/* معرفة نوع الجنين */}
          <div className="bg-sky-50 p-6 rounded-2xl shadow-sm ">
            <h3 className="text-xl font-bold  text-blue-600 mb-4">
              💎 معرفة نوع الجنين
            </h3>
            <p className="font-normal text-lg text-gray-500 mb-4">
              اكشف جنس طفلك مبكرًا باستخدام أحدث الطرق.
            </p>
            <ul className="list-disc list-inside text-sm mb-8 text-gray-500 font-normal ">
              <li>كشف مبكر للجنس</li>
              <li className="my-2">نتائج دقيقة مبنية على خبرة علمية</li>
              <li>خصوصية كاملة مضمونة</li>
            </ul>
            <div className="w-full  bg-white border text-center border-blue-500 text-blue-600 py-5 font-medium text-xl rounded-2xl  hover:bg-blue-100">
            <Link href={"/baby-gender"} className="">
              ابدأ الاكتشاف
            </Link>              
            </div>

          </div>


        </div>

        {/* زر إغلاق أسفل المودال */}
        <div className="mt-8 text-center">
          <button
            onClick={onClose}
            className=" text-gray-600 font-medium px-6 py-2 rounded-md hover:text-gray-800"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
}


