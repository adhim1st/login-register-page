import React from "react";

export default function Footer() {
  return (
    <footer className="footer bg-white relative">
      <div className="container mx-auto px-6 shadow-sm">
        <div className="mt-8 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-indigo-700 font-poppin font-bold mb-2">
              © 2021 by Eddra Adhim
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
