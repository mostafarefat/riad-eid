import Image from "next/image";
export default function account() {
  return (
    <section className="bg-sky-50 pb-18 pt-32">
      <h3 className="font-semibold text-2xl text-gray-800 text-center">مرحباً بك في رياض عيد</h3>
      <ul className="bg-white text-center mt-8 py-8 mx-20 rounded-2xl">
        <li className="font-semibold text-xl text-blue-500 mb-4">قم بتسجيل الدخول أو إنشاء حساب للوصول إلى ملفك الشخصي</li>
        <div className="flex justify-center">
        <li className="font-normal text-lg text-gray-500 w-2xl">اكتشف خدماتنا المتميزة لتحديد وكشف جنس الجنين. قم بالتسجيل الآن للوصول إلى لوحة التحكم الشخصية الخاصة بك.</li>
        </div>
        <li className="flex justify-center my-6"><Image src={"/Riad/scr1.jpeg"} alt="icon" width={150} height={150} /></li>
        <div className="flex gap-3 justify-center">
          <button className="w-36 h-18 bg-blue-500 rounded-xl text-white font-medium text-lg">
            تسجيل الدخول
          </button>
          <button className="w-36 h-18 rounded-xl text-blue-500 border font-medium text-lg">
            انشاء حساب
          </button>
        </div>
      </ul>
    </section>
  );
}
