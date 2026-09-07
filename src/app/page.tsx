import Hero from "@/components/Hero/Hero";
import Philosophy from "@/components/Philosophy/Philosophy";
import ServicesNav from "@/components/ServicesNav/ServicesNav";
import Locations from "@/components/Locations/Locations";
import Practitioners from "@/components/Practitioners/Practitioners";
import Testimonials from "@/components/Testimonials/Testimonials";
import Institutional from "@/components/Institutional/Institutional";
import Topics from "@/components/Topics/Topics";
import Insights from "@/components/Insights/Insights";
import Newsletter from "@/components/Newsletter/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <ServicesNav />
      <Locations />
      <Practitioners />
      <Testimonials />
      <Institutional />
      <Topics />
      <Insights />
      <Newsletter />
    </>
  );
}
