import getParks from "@/lib/actions/ParkList";
import ParkRetrieval from "../components/ParkDisplay/ParkRetrieval";
// <ParkRetrieval parkID={16} />
/**
 * The home page for the app.
 * @returns The home tsx component.
 */
export default function Home() {
  const items = getParks();

  return (
    <div className="p-6 text-3xl text-black font-figtree flex justify-center items-center min-h-screen w-full">
      <div className="grid grid-cols-2 gap-4 w-full max-w-6xl">
        {items.map((item) => (
          <div key={item.id} className="bg-accent shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-shadow">
            <h2 className="font-bold mb-2">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}