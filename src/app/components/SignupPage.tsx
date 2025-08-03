"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Eye, EyeOff, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type PackageType = {
  title: string;
  price: string;
  oldPrice?: string;
  currency: string;
  features: string[];
};

const packageDetails: Record<string, PackageType> = {
  once: {
    title: "تحديد جنس المولود",
    price: "99.99",
    currency: "USD",
    features: [
      "دقة تصل إلى 95%",
      "اشترك الان وستحصل علي خدمة تحديد جنس المولود بتقنية متقدمة للحصول علي افضل النتائج",
    ],
  },
  half: {
    title: "تحديد جنس المولود",
    price: "399",
    oldPrice: "599",
    currency: "USD",
    features: ["6 مرات استخدام", "دعم فني جزئي", "ميزة متابعة الحمل"],
  },
  vip: {
    title: "تحديد جنس المولود2",
    price: "999",
    oldPrice: "1199",
    currency: "USD",
    features: ["12 مرة استخدام سنويًا", "أولوية الدعم", "هدايا موسمية"],
  },
};

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState({
    name: false,
    email: false,
    password: false,
  });

  const searchParams = useSearchParams();
  const packageKey = searchParams.get("package");
  const details =
    packageKey && packageDetails[packageKey]
      ? packageDetails[packageKey]
      : null;

  return (
    <section className="bg-blue-50 min-h-screen px-14 py-40">
      <h3 className="font-semibold text-2xl text-gray-800 mr-6 mb-6">
        استكمال بيانات الطلب
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 items-start">
        {/* استكمال الطلب */}
        <div className="bg-white p-8 rounded-lg w-full max-w-xl mx-auto">
          <div className="flex gap-4 mb-8 items-center">
            <p className="font-semibold text-xl text-blue-500">تسجيل الحساب</p>
            <div className="w-6 h-px bg-blue-500"></div>
            <p className="bg-gray-800 rounded-full text-white p-0.5 ">
              <Check className="w-4 h-4" />
            </p>
            <div className="w-6 h-px bg-blue-500"></div>
            <p className="font-semibold text-xl text-gray-800">الدفع</p>
          </div>

          {/* Google Sign In */}
          <button className="flex items-center justify-center w-full border-2 border-gray-300 rounded-xl py-6 mb-4 hover:border-blue-600 transition gap-2">
            <span className="font-semibold text-lg text-gray-700">
              المتابعة بحساب جوجل
            </span>
            <Image src="/Riad/google.svg" alt="google" width={24} height={24} />
          </button>

          <div className="flex justify-center items-center mb-3 mt-6">
            <div className="h-px bg-gray-200 flex-1 mb-4"></div>
            <p className="text-center text-gray-500 mb-4 mx-5 text-sm font-normal">
              المتابعة باستخدام البريد الإلكتروني
            </p>
            <div className="h-px bg-gray-200 flex-1 mb-4"></div>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <input
              type="text"
              placeholder="الاسم الكامل "
              onFocus={() => setIsFocused({ ...isFocused, name: true })}
              onBlur={() => setIsFocused({ ...isFocused, name: false })}
              className="w-full px-4 py-5 font-normal text-sm border border-gray-200 text-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 bg-gray-50"
            />
            <input
              type="email"
              placeholder="عنوان البريد الإلكتروني"
              onFocus={() => setIsFocused({ ...isFocused, email: true })}
              onBlur={() => setIsFocused({ ...isFocused, email: false })}
              className="w-full px-4 py-5 font-normal text-sm border border-gray-200 text-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 bg-gray-50"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="كلمة المرور"
                onFocus={() => setIsFocused({ ...isFocused, password: true })}
                onBlur={() => setIsFocused({ ...isFocused, password: false })}
                className="w-full px-10 py-5 font-normal text-sm border border-gray-200 text-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 bg-gray-50"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-2xl text-lg hover:bg-blue-700 transition"
            >
              إنشاء حساب جديد
            </button>
          </form>

          <p className="mt-6 text-center text-lg text-gray-700">
            لديك حساب بالفعل؟{" "}
            <Link href="/sign-in" className="text-blue-600 hover:underline">
              سجل الدخول الآن!
            </Link>
          </p>
        </div>

        {/* تفاصيل الباقة */}
        <div className="bg-white p-8 rounded-lg w-full max-w-xl mx-auto">
          {details ? (
            <>
              <p className="font-semibold text-xl text-gray-800 mb-8">
                تفاصيل الطلب
              </p>
              <div className="bg-sky-50 rounded-lg p-8 mb-16">
                <p className="text-2xl font-bold text-blue-500 mb-8">
                  {details.title}
                </p>

                <ul className="list-disc text-gray-500 mr-4 space-y-2 font-medium text-lg">
                  {details.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>

              <hr className="text-blue-500 mx-16" />
              <div className="mb-34 flex items-baseline justify-between mt-16">
                <p className="font-semibold text-gray-800 text-lg">الاجمالي</p>
                <span className="text-lg font-bold text-gray-800" dir="ltr">
                  {details.price} {details.currency}
                </span>
              </div>
            </>
          ) : (
            <p className="text-gray-500">لم يتم اختيار أي باقة حتى الآن.</p>
          )}
        </div>
      </div>
    </section>
  );
}
