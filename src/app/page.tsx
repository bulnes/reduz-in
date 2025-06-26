import { Features } from "@/components/features/features";
import { Footer } from "@/components/footer/footer";
import { Heroe } from "@/components/heroe/heroe";
import { Navbar } from "@/components/navbar/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Heroe />
      <Features />
      <Footer />
    </>
  );
}
