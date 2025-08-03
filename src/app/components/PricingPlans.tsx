import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Sale from "./Sale";

export default function PricingPlans() {
  const plans = [
    {
      title: "استخدام لمرة واحدة",
      price: "99.99",
      currency: "USD",
      buttonText: "جرّب الآن",
      features: [""],
      highlighted: false,
      icon: [""],
      packageId: "once",
    },
    {
      title: "اشتراك سنوي VIP",
      price: "999",
      oldPrice: "1199",
      currency: "USD",
      features: ["12 مرة استخدام سنويًا (مرتين لكل شهر)"],
      buttonText: "اشترك الآن",
      highlighted: true,
      badge: "الخيار الأفضل",
      mzaya: " 💡 مزايا الاشتراك",
      icon: (
        <Check className="bg-pink-100 rounded-lg text-black w-6 h-5 font-extrabold" />
      ),
      packageId: "vip",
    },
    {
      title: "اشتراك نصف سنوي",
      price: "399",
      oldPrice: "599",
      currency: "USD",
      features: ["6 مرات استخدام (مرة لكل شهر)"],
      buttonText: "اشترك الآن",
      highlighted: false,
      badge: "الأكثر استخدامًا",
      mzaya: "💡 مزايا الاشتراك",
      icon: (
        <Check className="bg-white rounded-lg text-blue-500 w-6 h-5 font-extrabold" />
      ),
      packageId: "half",
    },
  ];

  return (
    <section className="bg-blue-50 mt-16">
      <div className="text-center pb-14 bg-white">
        <p className="font-semibold text-base text-gray-500">بأسعار معقولة</p>
        <div className="flex justify-center gap-9">
          <Image src="/Pricing/Arrow2.svg" alt="#" width={91} height={55} />
          <h2 className="text-3xl font-bold mb-4 mt-5 text-gray-800">
            اختر خطتك الآن
          </h2>
          <Image src="/Pricing/Arrow5.svg" alt="#" width={91} height={55} />
        </div>
        <p className="text-gray-500 text-lg">
          نسبة النجاح في هذا البرنامج تصل لـ 95% في حال التزام الزوجين بجميع
          التوصيات المذكورة.
        </p>
      </div>

      <Sale />

      <p className="font-extrabold text-2xl text-gray-800 text-center mt-12">
        باقات تحديد جنس المولود
      </p>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 py-16 px-20">
        {plans.map((plan, index) => {
          const isHalf = plan.packageId === "half";
          const isHighlighted = plan.highlighted;

          return (
            <div
              key={index}
              className={`relative rounded-xl p-6 flex flex-col justify-between ${
                isHalf
                  ? "bg-blue-500 text-white"
                  : isHighlighted
                  ? "text-white vib"
                  : "bg-white"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className={`absolute top-[-20px] right-[-8px] left-[-12px] text-center mx-32 
                  border-2 text-blue-500 text-base font-semibold px-3 py-1 rounded-2xl bg-white 
                  ${isHighlighted ? "btn-vib" : ""}`}
                >
                  {plan.badge}
                </div>
              )}

              {/* Title & Price */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">{plan.title}</h3>
                <hr
                  className={`mb-8 ${
                    isHalf
                      ? "border-white"
                      : isHighlighted
                      ? "text-yellow-600"
                      : "text-blue-500"
                  }`}
                />
                <p
                  className={`text-lg font-semibold mb-4 ${
                    isHalf ? "text-white" : ""
                  }`}
                >
                  : تشمل
                </p>
                <div className="mb-4 flex justify-between font-semibold text-xl">
                  <p className={`${isHalf ? "text-white" : ""}`}>
                    تحديد جنس المولود
                  </p>
                  <div className="text-left " dir="ltr">
                    {plan.price}/{plan.currency}
                    <br />
                    {plan.oldPrice && (
                      <span
                        className={`${
                          isHalf
                            ? "text-white opacity-60 line-through"
                            : "text-gray-500 line-through"
                        } font-semibold text-xl`}
                      >
                        {plan.oldPrice}/{plan.currency}
                      </span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <p className="font-semibold text-lg mb-7">{plan.mzaya}</p>
                <div className="flex justify-between">
                  <ul
                    className={`space-y-4 mb-15 font-normal ${
                      isHalf ? "text-white" : ""
                    }`}
                  >
                    {plan.features.map((feature, i) => (
                      <li key={i}> {feature}</li>
                    ))}
                  </ul>
                  <div>{plan.icon}</div>
                </div>
              </div>

              {/* زر الاشتراك */}
              <Link
                href={`/signup-page?package=${plan.packageId}`}
                className={`w-full text-center block py-3 rounded-lg font-semibold text-xl mt-6 ${
                  isHalf
                    ? "bg-white text-blue-500 hover:bg-gray-100"
                    : isHighlighted
                    ? "btn-vib"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                {plan.buttonText}
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}


