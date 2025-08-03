// components/GenderSelectionCard.jsx
import Image from "next/image";
import Link from "next/link";
export default function GenderSelectionCard() {
  return (
    <div className="px-20 py-16 ">
      <h2 className="text-3xl text-gray-800 text-center  font-semibold mb-14 ">
        خدماتنا الحصرية – بخبرة 50 عامًا
      </h2>
      <div className="bg-blue-50 py-10 rounded-2xl shadow px-8 ">
        <div className="flex gap-3 mb-6 justify-center">
          <Image src="/Services/fr2.svg" alt="#" width={50} height={50} />
          <Image src="/Services/fr1.svg" alt="#" width={50} height={50} />
        </div>
        <h3 className="text-3xl font-bold mb-8 text-blue-500 text-center">
          تحديد جنس المولود
        </h3>
        <ul className="  w-2/3 mr-60">
          <li className="list-disc mx-5 text-gray-500 font-semibold text-lg">
            أحدث التقنيات الطبيعية لمساعدتك في تحقيق رغبتك في اختيار جنس مولودك
            قبل الحمل
          </li>
          <li className="list-disc mx-5 mt-3 mb-10 text-gray-500 font-semibold text-lg">
            أشترك الآن بخصم 50% واحصل على استشارة شخصية مع الخبير رياض عيد
          </li>
        </ul>
        <div className=" py-5 bg-blue-500 rounded-2xl text-lg text-white font-semibold text-center">
        <Link className="px-96 py-5 " href={"#price"} >
          ابدا الان
        </Link>          
        </div>

      </div>
    </div>
  );
}
