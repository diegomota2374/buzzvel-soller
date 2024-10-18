import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
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
    </>
  );
}
