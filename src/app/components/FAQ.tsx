"use client";

import { useState } from "react";
import { CircleMinus, CirclePlus } from "lucide-react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

type FAQ = {
  question: string;
  answer: string;
};

export default function FAQ() {
  const faqs: FAQ[] = [
    {
      question: "هل الطريقة طبية؟",
      answer: "لا، إنها طريقة طبيعية قائمة على أسس علمية.",
    },
    {
      question: "متى أبدأ في معرفة النتائج ؟",
      answer:
        "فور الاشتراك والدفع ، يمكنك اختيار الخدمة وإدخال بياناتك والحصول على النتائج مباشرة",
    },
    {
      question: "كيف يمكنني الاستفادة والاشتراك في الخدمات؟",
      answer:
        "تسجيل الدخول بحسابك على الموقع، ثم اختيار الخدمة المنشودة والاشتراك بها، ادخلِ بياناتك ثم اذهبِ للدفع وتظهر النتائج المنتظرة داخل حسابك ببساطة",
    },
    {
      question: "هل البرنامج آمن؟",
      answer:
        "برنامج تحديد جنس المولود قبل الحمل آمن تمامًا، ولا يتطلب أي تدخل جراحي أو نظام غذائي معين",
    },
    {
      question: "هل ينجح البرنامج مع من أعمارهم +45؟",
      answer:
        "نعم، بمشيئة الله تم نجاح برنامج تحديد جنس المولود قبل الحمل بالفعل مع حالات أعمارهم فوق الأربعين",
    },
  ];

  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFAQ = (idx: number) => {
    if (openIndexes.includes(idx)) {
      setOpenIndexes(openIndexes.filter((i) => i !== idx));
    } else {
      setOpenIndexes([...openIndexes, idx]);
    }
  };

  return (
    <section className="bg-white py-8 mb-16">
      <h2 className="font-semibold text-3xl text-center mb-2 text-gray-800">
        أسئلة شائعة
      </h2>
      <p className="font-normal text-center text-lg text-gray-500 mb-16">
        كل ما تريد معرفته
      </p>

      <div>
        {faqs.map((faq, idx: number) => {
          const isOpen = openIndexes.includes(idx);
          return (
            <div
              key={idx}
              className="flex flex-col max-w-3xl w-full m-auto mb-6 gap-6"
            >
              <div
                className="flex justify-between cursor-pointer"
                onClick={() => toggleFAQ(idx)}
              >
                <h3 className="font-semibold text-xl text-gray-800">
                  {faq.question}
                </h3>
                <div className="mt-1">
                  {isOpen ? (
                    <CircleMinus className="w-5 h-5 text-gray-500" />
                  ) : (
                    <CirclePlus className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-40 mt-4" : "max-h-0"
                }`}
              >
                <p className="font-normal text-lg text-gray-500 mb-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ✅ صندوق واتساب */}
      <div className="bg-blue-50 flex justify-center py-8 mt-16 mx-20 rounded-2xl">
        <div className="text-center">
          <div className="flex justify-center">
            <Image src="/Faq/Avatar.png" alt="#" width={120} height={56} />
          </div>
          <h3 className="font-semibold text-3xl mt-8 mb-2">
            مازال لديك اسئلة؟
          </h3>
          <p className="font-normal text-lg text-gray-500 mb-8 ">
            تحدث مع دعم العملاء الان
          </p>
          <div className="bg-green-300 flex justify-center items-center gap-3 py-6 px-10 rounded-2xl">
            <a href="#" className="font-semibold text-2xl text-gray-800 ">
              الدردشة معنا
            </a>
            <FaWhatsapp className="w-5 h-5 text-gray-800 " />
          </div>
        </div>
      </div>
    </section>
  );
}
