// components/BabyGenderRevealCard.jsx
import Image from "next/image";
import Link from "next/link";
export default function BabyGenderRevealCard() {
  return (
    <div className="px-20 py-16 ">
      <h2 className="text-3xl text-gray-800 text-center  font-semibold mb-14 ">
        خدماتنا الحصرية – بخبرة 50 عامًا
      </h2>
      <div className="bg-sky-50 px-10 py-10 rounded-2xl shadow ">
        <div className="mt-3 mb-6 flex justify-center">
          <Image src="/Services/fr3.svg" alt="#" width={50} height={50} />
        </div>
        <h3 className="text-3xl font-bold mb-8 text-blue-500 text-center">
          معرفة نوع الجنين
        </h3>
        <ul className="w-fit  m-auto">
          <li className="list-disc mx-5 text-gray-500 font-semibold text-lg">
            اكتشف نوع جنينك في وقت مبكر باستخدام أدق الطرق
          </li>
          <li className="list-disc mx-5 mt-3 mb-10 text-gray-500 font-semibold text-lg">
            نتائج دقيقة، استشارة مباشرة، وخصوصية تامة
          </li>
        </ul>
        <div className="w-full py-5 rounded-2xl bg-white text-blue-500 border border-blue-500 text-xl font-semibold text-center">
      <Link className="px-96 py-5 " href="#price" >
          تجربة لمرة واحدة
        </Link>          
        </div>
  
      </div>
    </div>
  );
}
