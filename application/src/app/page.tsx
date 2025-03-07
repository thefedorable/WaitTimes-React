import ParkRetrival from "../components/ParkDisplay/ParkRetrival";

/**
 * The home page for the app.
 * @returns The home tsx component.
 */
export default function Home() {
  return (
    <div className="text-3xl font-figtree flex flex-col items-center">
      <ParkRetrival />
    </div>
  )
}