"use client";
import { useState } from "react";
import ServiceModal from "app/components/ServiceModal"; 
export default function HowMake(){
    const [modalOpen, setModalOpen] = useState(false);
    const steps=[
                       {
            num:3,
            title:"ابدا الاستفادة فورا",
            descrabtion:"فى حالة التزام الزوجين بجميع التوصيات فى البرنامج . عيد من قرية عيلبون فى الجليل الاسفل يعمل الى 95% رياض",
        },
        {
                
            num:2,
            title:"اختر خطتك المناسبة وادفع بامان",
            descrabtion:" فى حالة التزام الزوجين بجميع التوصيات فى البرنامج . عيد من قرية عيلبون فى الجليل الاسفل يعمل الى 95% رياض",
        },
        
         {
            num:1,
            title:"قم بانشاء حسابك مجانا",
            descrabtion:"فى حالة التزام الزوجين بجميع التوصيات فى البرنامج . عيد من قرية عيلبون فى الجليل الاسفل يعمل الى 95% رياض",
        },
    ];
    return(
        <section className="py-8 px-20 bg-blue-50">
            <h3 className="font-semibold text-3xl text-center mb-2">كيف يعمل الامر؟</h3>
            <p className="font-normal text-center text-gray-500 mb-8 text-xl ">.ﺞﻣﺎﻧﺮﺒﻟا ﻲﻓ هرﻮﻛﺬﻤﻟا تﺎﻴﺻﻮﺘﻟا ﻊﻴﻤﺠﺑ ﻦﻴﺟوﺰﻟا ماﺰﺘﻟا لﺎﺣ ﻲﻓ %95 ﻰﻟإ ﻞﺼﺗ ﺮﻣﺎﻟا اﺬﻫ ﻲﻓ حﺎﺠﻨﻟا ﺔﺒﺴﻧ</p>
            <div className="flex justify-center gap-8 ">
                {steps.map((step,idx) => (
                    <div key={idx} className="bg-white px-4 pt-4  rounded-xl shadow-lg w-1/3">
                        <p className="text-blue-500 font-semibold text-xl">{step.num}</p>
                        <h3 className="text-2xl font-semibold mb-4 mt-3">{step.title}</h3>
                        <p className="font-normal text-gray-500 mb-6 w-80">{step.descrabtion}</p>
                    </div>
                )
            )}
            </div>
            <div className="text-center my-8">
        <button
          className="bg-blue-600 text-white px-16 py-6   rounded-2xl font-semibold text-xl hover:bg-blue-700 transition "
          onClick={() => setModalOpen(true)}
        >
          ابدا الآن{" "}
        </button>
            </div>
            <ServiceModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </section>
    )
}