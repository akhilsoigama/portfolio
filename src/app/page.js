import Hero from "./components/Hero";
import StarBackground from "./components/StarBackground";


export default function Home() {
  return (
    <div className="w-full h-screen no-scrollbar ">
      <Hero />
      <StarBackground/>
    </div>
  );
}
