import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-sky-50 px-20 pb-12 pt-16">
      <div className="flex justify-between ">
        <div>
          <div className="mb-16 ">
            <Image
              src="/Navbar/logo-line.png"
              alt="#"
              width={138}
              height={30}
            />
          </div>
          <div className="flex gap-5">
            <Link
              href="/account"
              className="text-gray-500 font-semibold text-base"
            >
              حسابى
            </Link>
            <Link
              href="/privacy-policy"
              className="text-gray-500 font-semibold text-base"
            >
              سياسة الخصوصية
            </Link>
            <Link href="/faq" className="text-gray-500 font-semibold text-base">
              اسالة شائعة
            </Link>
            <Link
              href="/after-payment"
              className="text-gray-500 font-semibold text-base"
            >
              ماذا يحدث بعد الدفع
            </Link>
            <Link
              href="/cancel-subscription"
              className="text-gray-500 font-semibold text-base"
            >
              هل يمكنني الغاء الاشتراك؟
            </Link>
          </div>
        </div>
        <div>
          <p className="font-semibold text-gray-600 text-lg mb-4">الدعم</p>
          <div className="bg-green-300 flex justify-center items-center gap-3 py-6 px-10 rounded-2xl ">
            <a
              href="https://wa.me/201152033171"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-2xl text-gray-800"
            >
              اضغط هنا
            </a>
            <FaWhatsapp className="w-5 h-5 text-gray-800 " />
          </div>
        </div>
      </div>
      <div className="flex justify-between  mt-24">
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
    </footer>
  );
}
