import ParkRetrival from "../components/ParkDisplay/ParkRetrival";
import LandCard from "@/components/ParkDisplay/LandCard";

/**
 * The home page for the app.
 * @returns The home tsx component.
 */
export default function Home() {
  return (
    <div className="text-3xl font-figtree flex flex-col items-center">
      <ParkRetrival />
      <LandCard />
    </div>
  )
}