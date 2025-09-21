import React from "react";

const topProducts = [
  { name: "Leather Jacket", price: 129.99, quantity: 10, amount: 1299.90 },
  { name: "Slim Waist Belt", price: 45.50, quantity: 15, amount: 682.50 },
  { name: "Running Shoes", price: 89.75, quantity: 12, amount: 1077.00 },
  { name: "Denim Jacket", price: 99.99, quantity: 8, amount: 799.92 },
  { name: "Sneakers", price: 75.25, quantity: 20, amount: 1505.00 },
  { name: "Leather Shoes", price: 120.00, quantity: 5, amount: 600.00 },
];

const TopSellingProducts = () => {
  return (
    <div className="p-4 rounded shadow w-full">
      <h2 className="text-lg font-semibold mb-4">Top Selling Products</h2>

      <table className="w-full text-left border-collapse font-inter text-[12px] leading-[18px] font-normal">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="pb-2 text-[#1C1C1C66]">Product</th>
            <th className="pb-2 text-[#1C1C1C66]">Price ($)</th>
            <th className="pb-2 text-[#1C1C1C66]">Quantity</th>
            <th className="pb-2 text-[#1C1C1C66]">Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          {topProducts.map((product, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="py-2">{product.name}</td>
              <td className="py-2">{product.price.toFixed(2)}</td>
              <td className="py-2">{product.quantity}</td>
              <td className="py-2">{product.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopSellingProducts;
