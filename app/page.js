import Episodes from "@/component/common/Episodes";
import Footer from "@/component/common/Footer";
import Header from "@/component/common/Header";
import Hero from "@/component/common/Hero";
import Navbar from "@/component/common/Navbar";
import Seasons from "@/component/common/Seasons";
import TopHeader from "@/component/common/TopHeader";
import UpcomingEvents from "@/component/common/UpcomingEvents";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center  ">
     <TopHeader/>
     <Header/>
     <Navbar/>
     <Hero/>
     <Episodes/>
     <UpcomingEvents/>
     <Seasons/>
     <Footer/>
    </div>
  );
}
