"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState({
    name: false,
    email: false,
    password: false,
  });

  return (
    <section className="bg-blue-50 pb-10 px-24">
      <div className="flex justify-center items-center min-h-screen bg-sky-50 pt-38">
        <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-2 text-gray-800">
            تسجيل مستخدم جديد
          </h2>
          <p className="text-center text-gray-500 font-normal text-lg mb-6 mt-3">
            يرجى إدخال بياناتك لإنشاء حساب جديد.
          </p>

          {/* Google Sign In */}
          <button className="flex items-center justify-center w-full border-2 border-gray-300 rounded-xl py-6 mb-4 hover:border-blue-600 transition gap-2">
            <span className="font-semibold text-lg text-gray-700">
              المتابعة بحساب جوجل
            </span>
            <div>
              <Image
                src={"/Riad/google.svg"}
                alt="#"
                width={24}
                height={24}
              />
            </div>
          </button>

          <div className="flex justify-center items-center">
            <div className="h-px bg-gray-200 flex-1 mb-4"></div>
            <p className="text-center text-gray-500 mb-4 mx-5 text-sm font-normal">
              المتابعة باستخدام البريد الإلكتروني
            </p>
            <div className="h-px bg-gray-200 flex-1 mb-4"></div>
          </div>

          {/* Input Fields */}
          <form className="space-y-4">
            {/* الاسم */}
            <input
              type="text"
              placeholder="أدخل اسمك"
              onFocus={() => setIsFocused({ ...isFocused, name: true })}
              onBlur={() => setIsFocused({ ...isFocused, name: false })}
              className={`w-full px-4 py-5 font-normal text-sm border border-gray-200 text-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 ${
                isFocused.name ? "bg-gray-50" : "bg-gray-50"
              }`}
            />

            {/* البريد */}
            <input
              type="email"
              placeholder="عنوان البريد الإلكتروني"
              onFocus={() => setIsFocused({ ...isFocused, email: true })}
              onBlur={() => setIsFocused({ ...isFocused, email: false })}
              className={`w-full px-4 py-5 border border-gray-200 text-sm font-normal text-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 ${
                isFocused.email ? "bg-gray-50" : "bg-gray-50"
              }`}
            />

            {/* كلمة المرور */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="كلمة المرور"
                onFocus={() => setIsFocused({ ...isFocused, password: true })}
                onBlur={() => setIsFocused({ ...isFocused, password: false })}
                className={`w-full px-10 py-5 border border-gray-200 rounded-lg text-sm text-gray-700 font-normal focus:outline-none focus:ring-1 focus:ring-blue-300 ${
                  isFocused.password ? "bg-gray-50" : "bg-gray-50"
                } [&::-ms-reveal]:hidden`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>

            {/* زر إنشاء حساب */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2.5 rounded-2xl text-lg hover:bg-blue-700 transition"
            >
              إنشاء حساب جديد
            </button>
          </form>
        </div>
      </div>

      {/* رابط تسجيل الدخول */}
      <div>
        <p className="mt-6 text-center text-lg text-gray-700">
          لديك حساب بالفعل؟{" "}
          <a href="/sign-in" className="text-blue-600 hover:underline">
            سجل الدخول الآن!
          </a>
        </p>
      </div>

      <div className="flex justify-between mt-24">
        <p className="text-gray-500 font-semibold text-base">
          ©جميع الحقوق محفوظة. رياض عيد 2025.
        </p>
        <div className="flex gap-4">
          <Link href="/terms" className="text-gray-500 font-semibold text-base">
            شروط
          </Link>
          <Link
            href="/privacy-policy"
            className="text-gray-500 font-semibold text-base"
          >
            الخصوصية
          </Link>
          <Link
            href="/cookies"
            className="text-gray-500 font-semibold text-base"
          >
            ملفات تعريف الارتباط
          </Link>
        </div>
      </div>
    </section>
  );
}
