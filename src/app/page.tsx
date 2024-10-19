import Footer from "../components/Footer/Footer";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import MakeSomething from "../components/MakeSomething/MakeSomething";
import NowAvailable from "../components/NowAvailable/NowAvailable";
import PersonalizedServices from "../components/PersonalizedServices/PersonalizedServices";
import PickTheSun from "../components/PickTheSun/PickTheSun";
import PowerfulFeatures from "../components/PowerfulFeatures/PowerfulFeatures";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <PickTheSun />
      <PersonalizedServices />
      <PowerfulFeatures />
      <MakeSomething />
      <NowAvailable />
      <Footer />
    </>
  );
}
