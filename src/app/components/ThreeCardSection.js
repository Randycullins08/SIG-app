import React from "react";

const ThreeCardsSection = () => {
  return (
    <div className="container mx-auto mt-8 mb-12">
      {/* Header */}
      <h1 className="text-center text-3xl font-bold mb-6">
        Upcoming "Utah Medical Card Events"
      </h1>
      {/* Cards */}
      <div className="flex flex-col items-center">
        {/* Card 1 */}
        <div className="w-4/5 sm:w-40p mb-4">
          <div className="bg-gray-200 rounded-md shadow-lg p-6">
            {/* Row 1 */}
            <div className="flex justify-between items-center mb-4">
              {/* Column 1 */}
              <div>
                <p>Salt Lake City, UT</p>
              </div>
              {/* Column 2 */}
              <div className="text-center">
                <h2 className="font-bold">Tuesday, October 3rd 2023</h2>
                <p>9:00 am - 2:00 pm</p>
              </div>
              {/* Column 3 (Button) */}
              <div>
                <button
                  className="py-2 px-4 rounded-md"
                  style={{ backgroundColor: "#e7cbaf" }}
                >
                  Book Time
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="w-4/5 sm:w-65p mb-4">
          <div className="bg-gray-200 rounded-md shadow-lg p-6">
            {/* Row 1 */}
            <div className="flex justify-between items-center mb-4">
              {/* Column 1 */}
              <div>
                <p>Price, UT</p>
              </div>
              {/* Column 2 */}
              <div className="text-center">
                <h2 className="font-bold">Tuesday, October 3rd 2023</h2>
                <p>9:00 am - 2:00 pm</p>
              </div>
              {/* Column 3 (Button) */}
              <div>
                <button
                  className="py-2 px-4 rounded-md"
                  style={{ backgroundColor: "#e7cbaf" }}
                >
                  Book Time
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="w-4/5 sm:w-65p mb-4">
          <div className="bg-gray-200 rounded-md shadow-lg p-6">
            {/* Row 1 */}
            <div className="flex justify-between items-center mb-4">
              {/* Column 1 */}
              <div>
                <p>Salt Lake City, UT</p>
              </div>
              {/* Column 2 */}
              <div className="text-center">
                <h2 className="font-bold">Tuesday, October 3rd 2023</h2>
                <p>9:00 am - 2:00 pm</p>
              </div>
              {/* Column 3 (Button) */}
              <div>
                <button
                  className="py-2 px-4 rounded-md"
                  style={{ backgroundColor: "#e7cbaf" }}
                >
                  Book Time
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeCardsSection;
