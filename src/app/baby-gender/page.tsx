import BabyGenderRevealCard from "app/components/babyGenderReveaCard";
import DataGender from "app/components/DataGender";
import FAQ from "app/components/FAQ";
import Footer from "app/components/Footer";
import Hero from "app/components/Hero";
import Riad from "app/components/Riad";
import Sale from "app/components/Sale";
import TestimonialCarousel from "app/components/Testimonials";
import WhyUs from "app/components/WhyUs";
import Image from "next/image";
export default function babyGender() {
  return (
    <div>
      <Hero imageSrc="/Hero/image4.png" />
      <BabyGenderRevealCard />
      <WhyUs  />
      <div  className="text-center pb-14 bg-white mt-22">
        <p  className="font-semibold text-base text-gray-500">بأسعار معقولة</p>
        <div  className="flex justify-center  gap-9  ">
          <Image src="/Pricing/Arrow2.svg" alt="#" width={91} height={55} />
          <h2 className="text-3xl font-bold  mb-4 mt-5 text-gray-800">
            اختر خطتك الآن
          </h2>
          <Image src="/Pricing/Arrow5.svg" alt="#" width={91} height={55} />
        </div>
        <p className="text-gray-500 text-lg">
          نسبة النجاح في هذا البرنامج تصل لـ 95% في حال التزام الزوجين بجميع
          التوصيات المذكورة.
        </p>
      </div>
      <div className="bg-blue-50 pt-10 ">
        <h3 className="font-bold text-2xl text-blue-500 text-center">
          بفضل الله وخبرة 50 عامًا، أصبح بإمكانك التخطيط لمستقبل عائلتك بثقة!
        </h3>
      </div>
      <Sale />
      <DataGender pra="" />
      <TestimonialCarousel />
      <FAQ />
      <Riad />
      <Footer />
    </div>
  );
}
