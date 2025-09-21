import React from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

const stats = [
  { title: "Customers", quantity: "3,781", change: 11.01, bg: "bg-[#E3F5FF]" },
  { title: "Orders", quantity: "1,219", change: -0.03, bg: "bg-[#F7F9FB]" },
  { title: "Revenue", quantity: "$695", change: 15.03, bg: "bg-[#F7F9FB]" },
  { title: "Growth", quantity: "30.1%", change: 6.08, bg: "bg-[#E5ECF6]" },
];

const Cards = () => {
    return (
        <div className="grid grid-cols-2 gap-4 p-4 ">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className={`relative ${item.bg} dark:bg-gray-500 p-4 rounded-[16px] shadow group cursor-pointer`}
            >
              {/* Title */}
              <div className="font-inter font-semibold text-[14px] leading-[20px]">
                {item.title}
              </div>
    
              {/* Front: Quantity */}
              <div className="flex items-center mt-2 justify-between transition-opacity duration-300 group-hover:opacity-0">
                <div className="font-inter font-semibold text-[24px] leading-[36px]">
                  {item.quantity}
                </div>
                <div className="flex items-center">
                  
                  <span className="font-inter font-normal text-[12px] leading-[18px] ml-1">
                    {item.change}%
                  </span>
                  {item.change >= 0 ? (
                    <ArrowUp className="w-4 h-4 " />
                  ) : (
                    <ArrowDown className="w-4 h-4 " />
                  )}
                </div>
              </div>
    
              {/* Back: Change */}
              <div className="absolute inset-4 flex items-center justify-between transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <div className="flex items-center">
                  
                  <span className="font-inter font-normal text-[12px] leading-[18px] ml-1">
                    {item.change}%
                  </span>
                  {item.change >= 0 ? (
                    <ArrowUp className="w-4 h-4 " />
                  ) : (
                    <ArrowDown className="w-4 h-4 " />
                  )}
                </div>
                <div className="font-inter font-semibold text-[24px] leading-[36px]">
                  {item.quantity}
                </div>
              </div>
            </div>
          ))}
        </div>
      );
};

export default Cards;
