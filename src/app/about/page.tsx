
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "app/components/Footer";
export default function about() {
  const steps = [
    {
      num: 1,
      descrabtion:
        "عن طريق تحديد الأوقات المفضلة للجماع بين الزوجين للحصول على نوع المولود المرغوب به",
    },    

    {
      num: 2,
      descrabtion:
        "بحيث يوجد في الشهر أيام مناسبة للجماع لتكون نتيجة الحمل أنثى وأيام اخرى تكون نتيجة الحمل ذكر، وهذا يختلف من سيدة الى اخرى",
    },
    {
      num: 3,
      descrabtion:
        "وأيضًا يقوم الخبير رياض عيد بمساعدة من يعانون من مشكلة العقم وعدم الإنجاب بأن يرزقهم الله بالمولود الذي ينتظرونه دائمًا.",
    },

  ];
  return (
    <div className="mt-25">
      <div className="flex justify-between  px-20 py-16">
        <div className="w-2/4">
          <h3 className="font-semibold text-3xl text-gray-800 mb-8">
            عن البرنامج
          </h3>
          <p className="font-normal text-lg text-gray-500 mb-10">
            برنامج الخبير رياض لتحديد جنس المولود قبل الحمل عيد هو برنامج طبيعي
            100% وهو أنجح برنامج لتحديد جنس المولود قبل الحمل بنسبة نجاح 95%،
            وخبرة 50 عام جعلته بالفعل أفضل برنامج لتحديد جنس المولود في الوطن
            العربي بل في العالم كله وأفضل من كل الطرق الطبية الأخرى التي تتراوح
            نسبة نجاحها بين 15% و 40% يعمل برنامج تحديد جنس المولود قبل الحمل عن
            طريق تحديد الأوقات المفضلة للجماع بين الزوجين للحصول على نوع المولود
            المرغوب به، بحيث يوجد في الشهر أيام مناسبة للجماع لتكون نتيجة الحمل
            أنثى وأيام اخرى تكون نتيجة الحمل ذكر، وهذا يختلف من سيدة الى اخرى.
            وأيضًا يقوم الخبير رياض عيد بمساعدة من يعانون من مشكلة العقم وعدم
            الإنجاب بأن يرزقهم الله بالمولود الذي ينتظرونه دائمًا.
          </p>
          <div className="bg-green-300 flex justify-center items-center gap-3 py-4 px-4 rounded-2xl w-2/4">
            <a href="#" className="font-semibold text-lg text-gray-800 ">
              تواصل مع الخبير رياض عيد
            </a>
            <FaWhatsapp className="w-5 h-5 text-gray-800 " />
          </div>
        </div>
        <div>
          <Image src="/Riad/riad.svg" alt="#" width={350} height={450}></Image>
        </div>
      </div>
      <div className="py-8 px-20 bg-white mb-16">
        <h3 className="font-semibold text-3xl text-center mb-8">
          كيف يعمل البرنامج؟
        </h3>
        <div className="flex justify-center gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-sky-50 px-4 pt-4 pb-20  rounded-xl  w-2/5"
            >
              <p className="text-blue-500 font-semibold text-xl">{step.num}</p>
              <p className="font-semibold text-gray-500 mb-6 w-64 mt-5 text-lg">
                {step.descrabtion}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
