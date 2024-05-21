import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Header from "./components/Header";
import MainTitle from "./components/MainTitle";
import Reviews from "./components/Reviews";
import CuresorEffect from "./components/CursorEffect";
import ApplySection from "./components/ApplySection";
import BrowserSupport from "./components/BrowserSupport";
import PowerfulFeatures from "./components/PowerfulFeatures";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="font-sans antialiased text-white text-base leading-relaxed font-normal bg-gray-900">
			<canvas
				className="fixed top-0 left-0 h-full w-full"
				width="1519"
				height="182"
			></canvas>
			<Header />
			<MainTitle />
			<Reviews />
			<CuresorEffect />
			<ApplySection />
			<BrowserSupport />
			<PowerfulFeatures />
			<Footer />
		</div>
	);
}

export default App;
