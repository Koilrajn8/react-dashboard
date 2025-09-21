import BarGraph from "./bar-chart";
import Cards from "./cards";
import ContinuousDashedLineChart from "./revenue-week-line-chart";
import TopSellingProducts from "./top-selling-products";
import {ReactComponent as RevenueByLocation} from '../../icons/revenue_by_location.svg'
import {ReactComponent as TotalSales} from '../../icons/total_sales.svg'
export default function DashboardItems({}) {
  return (
    <div className="p-[28px]">
        <div className="flex flex-col w-full h-full space-y-4">
        <div className="w-max h-max font-inter font-semibold text-sm leading-[20px] p-4">
            {"eCommerce"}
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        <Cards />
      
        <div className=" p-6 shadow rounded h-64 lg:h-full">
          <BarGraph />
        </div>
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pb-12">
        <div className=" p-6 shadow rounded h-64 lg:col-span-2">
          <ContinuousDashedLineChart />
        </div>
        <div className=" p-6 shadow rounded h-64 ">
          <RevenueByLocation />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className=" p-6 shadow rounded h-64 lg:col-span-2">
          <TopSellingProducts />
        </div>
        <div className=" p-6 shadow rounded h-64">
          <TotalSales />
        </div>
      </div>

    </div>
    </div>
  );
}
