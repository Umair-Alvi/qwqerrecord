import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-10 max-w-md w-full text-center">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-green-700 mb-4">
          Order Management System
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-8">
          This project was built during my early learning phase to manage
          customer orders, records, and statuses in a simple dashboard.
        </p>

        {/* Button */}
        <Link href="/allOrder">
          <button className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition">
            View All Orders
          </button>
        </Link>

        {/* Footer note */}
        <p className="text-sm text-gray-400 mt-6">
          Beginner Project • Real Dashboard Practice
        </p>
      </div>
    </div>
  );
}
