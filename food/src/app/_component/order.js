import { Soup } from "../icons/soup";
import { Oclock } from "../icons/clock";
import { Location } from "../icons/location";
export const Order = () => {
  const text = `
  2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg |
  100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо,
  СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны
  хойд талд 4д ногоон20
  `;

  const words = text.trim(100).split(/\s+/);
  const isLong = words.length > 10;
  return (
    <div className="w-[369px] h-87 bg-white">
      <div>
        <h1 className="text-lg font-bold">Order history</h1>
      </div>
      <div className="px-3">
        <div className="flex justify-between">
          <p className="font-bold">
            $26.97<span>(#20156)</span>
          </p>
          <button className="border border-[red] text-xs w-17 h-7 rounded-2xl font-medium">
            Pending
          </button>
        </div>
        <div>
          <div className="flex justify-between">
            <p className="text-xs text-[#71717A] flex gap-2">
              <Soup />
              Sunshine Stackers
            </p>
            <p>x1</p>
          </div>
          <div className="flex justify-between">
            <p className="text-xs text-[#71717A] flex gap-2">
              <Soup />
              Sunshine Stackers
            </p>
            <p>x1</p>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-xs text-[#71717A] flex gap-2">
            <Oclock />
            2024/12/20
          </p>
        </div>
        <div className="text-xs text-[#71717A]">
          <p className="flex gap-2 leading-4">
            <Location />
            {text}
          </p>
          {isLong && (
            <div className="border-b border-dashed border-gray-300 mt-1"></div>
          )}
        </div>
      </div>
    </div>
  );
};
