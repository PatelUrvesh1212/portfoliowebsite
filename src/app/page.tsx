import Image from "next/image";
import NavBar from "@/components/NavBar/page";
import About from "@/components/About/page";

export default function Home() {
  return (
    <>
      <NavBar />
      <About />
      <main className="flex justify-center gap-8 items-center">
        <h1>This is Home Page</h1>
      </main>
    </>
  );
}
