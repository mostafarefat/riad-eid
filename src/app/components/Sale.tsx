export default function Sale() {
  return (
    <div className="bg-blue-50 pt-10">
    <div className="bg-white  py-6 mx-20 rounded-2xl">
      <h3 className="text-2xl font-extrabold text-gray-800 text-center mb-4 ">
        هدايا وعروض لوقت محدود... خصومات تصل لـ 50% 🔥
      </h3>
      <p className="text-gray-500 text-lg text-center font-bold mb-6">
        متبقي علي نهاية العرض{" "}
      </p>
      <div className="flex justify-center items-center gap-5 ">
        <div className="text-center">
          <div className="flex gap-1 mb-2">
            <p className="bg-blue-500 p-3 text-2xl text-white rounded-lg font-semibold">
              3
            </p>
            <p className="bg-blue-500 p-3 text-2xl text-white rounded-lg font-semibold ">
              3
            </p>
          </div>
          <span className=" text-gray-500 font-normal text-xl">ثوانى</span>
        </div>
        <div className="text-center">
          <div className="flex gap-1 mb-2">
            <p className="bg-blue-500 p-3 text-2xl text-white rounded-lg font-semibold">
              9
            </p>
            <p className="bg-blue-500 p-3 text-2xl text-white rounded-lg font-semibold ">
              5
            </p>
          </div>
          <span className=" text-gray-500 font-normal text-xl">دقائق</span>
        </div>
        <div className="text-center">
          <div className="flex gap-1 mb-2">
            <p className="bg-blue-500 p-3 text-2xl text-white rounded-lg font-semibold">
              4
            </p>
            <p className="bg-blue-500 p-3 text-2xl text-white rounded-lg font-semibold ">
              0
            </p>
          </div>
          <span className=" text-gray-500 font-normal text-xl">ساعات</span>
        </div>
      </div>
    </div>        
    </div>

  );
}
