import TexttoSpeech from "@/components/Text-To-Speech";

import { elevenlabs } from "@/lib/elevenlabs";
import About from "@/pages/About";
import Footer from "@/pages/Footer";
import Navbar from "@/pages/Navbar";


export default async function Home() {
const voicesRes = await elevenlabs.voices.getAll()

 const voices = voicesRes.voices;

 if (!voices) {
  return <div>Voices not found</div>;
 }

  return (
    <>
    <Navbar />
  <main className="flex flex-col items-center min-h-screen bg-black
   text-white p-4 md:p-8">
    <h1 className="text-3xl md:text-6xl font-bold text-center mb-2 text-gray-800">
      Bring <span className="text-red-500"> Text to Life With </span>
      <br/>
      <span className="text-red-500">AI Text To </span>Speech Converter
      </h1>
  <p className="text-lg text-muted-foreground mb-8 md:mb-16 text-center">
    Experience the Future of Voice with Seamless AI-Driven Text-to-Speech Solutions
  </p>
     <TexttoSpeech voices={voices} />
    </main>
    <About />
    <Footer />
    </>
  );
}
