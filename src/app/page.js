
import SlideOne from "./components/slide-one/SlideOne";
import SlideTwo from "./components/slide-two/SlideTwo";

export default function Home() {
  return (
    <div className=" flex flex-col min-h-screen items-center justify-center bg-[#fff]">
      <SlideOne />

      <SlideTwo />
    </div>
  );
}
