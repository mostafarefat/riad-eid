"use client";
import { useState } from "react";
import ServiceModal from "app/components/ServiceModal"; 
import Image from "next/image";
import Link from "next/link";
export default function Blog() {
    const [modalOpen, setModalOpen] = useState(false);
  const articles = [
    {
      img: (
        <Image
          src="/Blog/Rectangle12.svg"
          alt="#"
          width={400}
          height={400}
          className="rounded-2xl"
        />
      ),
      title: "تفضيل إنجاب الذكر على الأنثى - تباين آراء أم هذا هو السائد؟",
      discription:
        "تفضيل إنجاب الذكر على الأنثى فكرة مسيطرة على بعض المجتمعات منذ القدم، وما تزال مستمرة إلي يومنا هذا، فلا يزال الكثيرون يفضلون إنجاب الذكر على الأنثى",
    },
    {
      img: (
        <Image
          src="/Blog/Rectangle11.svg"
          alt="#"
          width={400}
          height={400}
          className="rounded-2xl"
        />
      ),
      title: "للحصول على مولود أنثى ناجحة بنسبة 95 - اتبعي الخطوات التالية",
      discription:
        "الأسر التى رزقها الله من فضله بأبناء ذكور ولم يرزقوا بعد بالاناث يريدوا أن يرزقهم الله بها فالاناث هم المؤنسات وفاكهة البيوت ونورها",
    },
    {
      img: (
        <Image
          src="/Blog/Rectangle13.svg"
          alt="#"
          width={400}
          height={400}
          className="rounded-2xl"
        />
      ),
      title: "نصائح لتحديد جنس المولود قبل الحمل – للحصول على مولود ذكر",
      discription:
        "تحديد جنس المولود قبل الحمل يعتبر عامل أساسي في تنظيم الأسرة وضمان استقراراها وثبات العلاقات الزوجية ومنعها من الانهيار في بعض الحالات",
    },
  ];
  return (
    <section className="mt-16">
      <ul className="py-16 px-20">
        <li className="text-2xl text-center font-semibold text-gray-800 mb-8">
          المدونة
        </li>
        <div className="flex justify-center mb-16">
          <li className="font-normal text-gray-500 text-center  text-lg w-2/3">
            في هذه المدونة ستجد مقالات مفيدة عن صحة الأطفال وبرنامج تحديد جنس
            المولود قبل الحمل يكتبها الخبير رياض عيد الخبير الأول في الوطن
            العربي في تحديد جنس المولود قبل الحمل واستشارات الحمل.
          </li>
        </div>
        <div className="bg-blue-50 flex justify-between items-center rounded-2xl py-16 px-8 ">
          <ul className="w-2/4">
            <li className="font-semibold text-2xl text-blue-500 ">
              مقالات رائجة
            </li>
            <li className="font-semibold text-3xl mt-8 mb-6 text-gray-800">
              نصائح لتحديد جنس المولود قبل الحمل – للحصول على مولود ذكر
            </li>
            <li className="font-normal text-lg text-gray-500 mb-7">
              تحديد جنس المولود قبل الحمل يعتبر عامل أساسي في تنظيم الأسرة وضمان
              استقراراها وثبات العلاقات الزوجية ومنعها من الانهيار في بعض
              الحالات
            </li>
            <li className="font-normal text-sm text-gray-500">
              دكتور رياض عيد - اكتوبر 2025
            </li>
          </ul>
          <h3>
            <Image
              src="/Blog/people.svg"
              alt="#"
              width={500}
              height={300}
              className="rounded-2xl"
            />
          </h3>
        </div>
      </ul>
      <h3 className="font-semibold text-2xl text-center text-gray-800 mb-12 mt-4">
        كل المقالات
      </h3>
      <div className="px-14">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div key={idx} className="grid grid-cols-3 gap-6 m-6">
            {articles.map((article, index) => (
              <ul key={index} className="bg-white p-2 rounded-xl ">
                <li>{article.img}</li>
                <li className="font-semibold text-gray-800 text-lg mt-2">
                  {article.title}
                </li>
                <li className="text-gray-500 text-base font-normal mt-1 h-18 mb-8">
                  {article.discription}
                </li>
                <button className="w-34 h-13 rounded-xl text-blue-500 border font-semibold">
                  قراءة المزيد
                </button>
              </ul>
            ))}
          </div>
        ))}
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
          <Link href={"/sign-in"} className="w-34 py-3 text-center rounded-xl text-blue-500 border font-semibold">
            تسجيل الدخول
          </Link>
        </div>
      </div>
       <ServiceModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
