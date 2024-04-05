"use client";
import UtahGrownImage from "../../../public/Website-Assets/UtahGrownLogo-Green@2x.png";

export default function HeroSection() {
  return (
    <div className="relative">
      {/* Background image */}
      <div
        className="bg-cover bg-center h-96 flex items-end"
        style={{ backgroundImage: `url('/TopHeaderImage.png')` }}
      >
        {/* Logo */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          <img
            src="/UtahGrownLogo-Green.png"
            alt="Logo"
            className="w-70 md:w-70 lg:w-70 xl:w-90 h-48 md:h-50 lg:h-50 xl:h-50 mb-4"
          />
        </div>
      </div>

      <div className="bg-green-900 h-9 w-full" />
    </div>
  );
}
