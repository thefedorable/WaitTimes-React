import ParkRetrieval from "../components/ParkDisplay/ParkRetrieval";

/**
 * The home page for the app.
 * @returns The home tsx component.
 */
export default function Home() {
  return (
    <div className="text-3xl font-figtree flex flex-col items-center">
      <ParkRetrieval />
    </div>
  )
}