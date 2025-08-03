"use client";

import Slider from "react-slick";
import Image from "next/image";

export default function TestimonialCarousel() {
  const testimonials = [
    {
      name: "منيرة، مصر",
      content:
        "بعد ست سنين من ولادة بنتين كان نفسي في ولد فقررت أتابع مع أستاذ رياض عيد، والحمدلله ربنا رزقني بولد بعد طول انتظار، الله يسعدك بارب زي ما اسعدتنا",
    },
    {
      name: "سعيد، السعودية",
      content:
        "بعد ست سنين من ولادة بنتين كان نفسي في ولد فقررت أتابع مع أستاذ رياض عيد، والحمدلله ربنا رزقني بولد بعد طول انتظار، الله يسعدك بارب زي ما اسعدتنا",
    },
    {
      name: "نجلاء، الإمارات",
      content:
        "بعد ست سنين من ولادة بنتين كان نفسي في ولد فقررت أتابع مع أستاذ رياض عيد، والحمدلله ربنا رزقني بولد بعد طول انتظار، الله يسعدك بارب زي ما اسعدتنا",
    },
    {
      name: "نجلاء، الإمارات",
      content:
        "بعد ست سنين من ولادة بنتين كان نفسي في ولد فقررت أتابع مع أستاذ رياض عيد، والحمدلله ربنا رزقني بولد بعد طول انتظار، الله يسعدك بارب زي ما اسعدتنا",
    },
    {
      name: "نجلاء، الإمارات",
      content:
        "بعد ست سنين من ولادة بنتين كان نفسي في ولد فقررت أتابع مع أستاذ رياض عيد، والحمدلله ربنا رزقني بولد بعد طول انتظار، الله يسعدك بارب زي ما اسعدتنا",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section className="bg-white ">
      <h3 className="text-2xl font-extrabold text-gray-800 text-center mb-4 mt-16">
        اراء العملاء
      </h3>
      <p className="font-normal text-center text-gray-500 mb-8 text-xl ">
        .ﺞﻣﺎﻧﺮﺒﻟا ﻲﻓ هرﻮﻛﺬﻤﻟا تﺎﻴﺻﻮﺘﻟا ﻊﻴﻤﺠﺑ ﻦﻴﺟوﺰﻟا ماﺰﺘﻟا لﺎﺣ ﻲﻓ %95 ﻰﻟإ ﻞﺼﺗ
        ﺮﻣﺎﻟا اﺬﻫ ﻲﻓ حﺎﺠﻨﻟا ﺔﺒﺴﻧ
      </p>
      <div className=" mb-36 mt-24 mx-18">
        <Slider {...settings}>
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-blue-50 rounded-xl py-7 px-6 ">
              <Image
                src="/Testimonials/Frame.png"
                alt="#"
                width={67.5}
                height={72}
              ></Image>
              <p className="text-gray-500 font-normal text-lg text-right mb-28">
                {testimonial.content}
              </p>
              <p className="text-gray-500 font-normal text-lg text-right">
                {testimonial.name}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
