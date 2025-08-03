import Image from "next/image";
import Link from "next/link";
export default function ServicesSection() {
  return (
    <section className="text-center py-20 px-8 bg-white ">
      <h2 className="text-3xl text-gray-800  font-semibold mb-2">
        {" "}
        خدماتنا الحصرية – بخبرة 50 عامًا
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mt-8 max-w-6xl mx-auto">
        <div className="bg-blue-50 py-10 rounded-2xl shadow px-8 text-right">
          <div className="flex gap-3  mb-6">
            <Image
              src="/Services/fr2.svg"
              alt="#"
              width={50}
              height={50}
            ></Image>
            <Image
              src="/Services/fr1.svg"
              alt="#"
              width={50}
              height={50}
            ></Image>
          </div>
          <h3 className="text-3xl font-bold mb-8  text-blue-500">
            تحديد جنس المولود
          </h3>
          <ul>
            <li className="list-disc mx-5 text-gray-500 font-semibold text-xl">
              أحدث التقنيات الطبيعية لمساعدتك في تحقيق رغبتك في اختيار جنس
              مولودك قبل الحمل
            </li>
            <li className="list-disc mx-5 mt-3 mb-11 text-gray-500 font-semibold text-lg ">
              أشترك الآن بخصم 50% واحصل على استشارة شخصية مع الخبير رياض عيد
            </li>
          </ul>
          <div className="bg-blue-500 w-full py-6 rounded-2xl text-center" >
            <Link
              href={"/GenderSelection"}
              className="  rounded-2xl text-lg text-white  font-semibold"
            >
              ابدا الان
            </Link>
          </div>
        </div>
        <div className="bg-sky-50 p-6 rounded-2xl shadow text-right">
          <div className="mt-3  mb-6">
            <Image
              src="/Services/fr3.svg"
              alt="#"
              width={50}
              height={50}
            ></Image>
          </div>
          <h3 className="text-3xl font-bold mb-8 text-blue-500">
            {" "}
            معرفة نوع الجنين
          </h3>
          <ul>
            <li className="list-disc mx-5 text-gray-500 font-semibold text-xl">
              اكتشف نوع جنينك في وقت مبكر باستخدام أدق الطرق{" "}
            </li>
            <li className="list-disc mx-5 mt-3 mb-25 text-gray-500 font-semibold text-xl ">
              نتائج دقيقة، استشارة مباشرة، وخصوصية تامة
            </li>
          </ul>
          <div className="bg-white border-1 text-blue-500 w-full text-center py-6 rounded-2xl ">
          <Link href={"/baby-gender"} className="    text-lg font-semibold">
            تجربة لمرة واحدة
          </Link>            
          </div>
        </div>
      </div>
    </section>
  );
}
