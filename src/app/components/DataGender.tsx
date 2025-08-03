import Image from "next/image";
import { Check } from "lucide-react";
import Link from "next/link";
export default function DataGender({ pra = "باقه معرفة نوع الجنين" }) {
  return (
    <div className="bg-blue-50">
      {/*باقة معرفة نوع الجنين*/}
      <h3 className="text-2xl font-extrabold text-gray-800 text-center  ">
        {pra}
      </h3>
      <div className="flex justify-between  mx-20 pb-24 pt-8">
        <div className="bg-white w-2/4 py-12 px-18 rounded-r-xl">
          <div>
            <div className="flex justify-between mb-10">
              <p className="font-bold text-2xl text-gray-800 ">
                معرفة نوع الجنين
              </p>
              <p className="text-3xl text-gray-800 font-semibold">
                <span className="text-blue-500 text-xs">شهرياََ</span>29.99${" "}
                <span className="font-normal line-through text-2xl ml-2 text-gray-500">
                  59.99$
                </span>
              </p>
            </div>
            <hr className="text-blue-300 h-0.5 bg-blue-500" />
          </div>
          <div>
            <p className="font-bold text-lg text-gray-800 mt-10 mb-4">
              💡 مزايا الاشتراك
            </p>
            <div className="flex justify-between ">
              <div>
                <p className="font-normal text-base text-gray-500 mb-4">
                  {" "}
                  مرتين استخدام الخدمة شهريا
                </p>
                <p className="font-normal text-base text-gray-500">
                  {" "}
                  2 مرة هدية
                </p>
              </div>
              <div>
                <Check className="w-4 h-3.5 text-gray-800 bg-blue-50 mb-6 mt-2" />
                <Check className="w-4 h-3.5 text-gray-800 bg-blue-50 " />
              </div>
            </div >
            <div className="w-full text-center py-2  bg-blue-500 rounded-xl mt-7">
            <Link href={"/sign-up"} className=" h-12  rounded-lg text-white font-semibold mt-12 ">
              اشترك الان
            </Link>              
            </div>
          </div>
        </div>
        <Image
          src="/Pricing/price.jpeg"
          alt="#"
          width={600}
          height={400}
          className="rounded-l-xl"
        ></Image>
      </div>
    </div>
  );
}
