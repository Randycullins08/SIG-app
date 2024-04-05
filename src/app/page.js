import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ThreeCardsSection from "./components/ThreeCardSection";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      <Navbar />
      <HeroSection />
      <ThreeCardsSection />
    </main>
  );
}
