
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Stats from "../components/Stats";
import FeaturedSolutions from "../components/FeaturedSolutions";
import Clients from "../components/Clients";
import CTA from "../components/CTA";
import Footer from "../components/Footer";


export default function Page() {
  return (
    <main>
      <Hero />
      <Categories />
      <Stats />
      <FeaturedSolutions />
      <Clients />
      <CTA />
    </main>
  );
}
