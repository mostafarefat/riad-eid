import Image from "next/image";
export default function WhyUs() {
  const items = [
    {
      title: "خبرة تتجاوز 50 عامًا",
      description:
        "تحت إشراف الخبير رياض عيد، نقدم لك المعرفة التي تُحدث فرقًا في حياتك الأسرية",
      img: <Image src="/WhyUs/flat3.svg" alt="#" width={50} height={50} />,
    },

    {
      title: "أدق النتائج بفضل الله",
      description:
        "أعلى نسبة نجاح موثوقة بفضل العلم والخبرة والتقنيات المتقدمة",
      img: <Image src="/WhyUs/flat2.svg" alt="#" width={50} height={50} />,
    },
    {
      title: "خصوصية وأمان",
      description: "سرية تامة لجميع البيانات، وراحة كاملة للمستخدم",
      img: <Image src="/WhyUs/flat1.svg" alt="#" width={50} height={50} />,
    },
  ];

  return (
    <section  className="bg-white py-12 px-4">
      <h2 className="text-center text-2xl font-semibold text-gray-800  mb-8">
        لماذا نحن؟
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-right">
        {items.map((item, idx) => (
          <div key={idx} className="bg-blue-50 p-6 shadow rounded-xl  h-80">
            <div>{item.img}</div>
            <h3 className="font-bold mb-6 mt-4 text-blue-500 text-2xl underline underline-offset-16">
              {item.title}
            </h3>
            <p id="price" className="text-gray-600 font-semibold text-lg">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
