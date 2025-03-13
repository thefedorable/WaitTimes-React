import { Park } from "@/lib/actions/Park";
import { Land } from "@/lib/actions/Land";
import LandCard from "./LandCard";
import { JsonTools } from "@/lib/actions/JsonTools";
interface ParkProps {
    parkID: number;
  }

/**
 * Create and display a message string containing the Disneyland Resort data.
 * @returns The message string.
 */
export default async function ParkRetrieval({ parkID }: ParkProps) {
    let current: Park = new Park([]);
    
    /**
     * Get the park data for the park with the given id.
     * @param id Get the park data for the park with the given id.
     */
    const setPark = async (id: number) =>{
        await (async () => {
            const url = `https://queue-times.com/parks/${id}/queue_times.json`;
            try {
                const jsonHelper: JsonTools = new JsonTools();
                current = await jsonHelper.fetchAndDeserializePark(url);
            } catch (error) {
                console.error("Failed to fetch or process the park data:", error);
            }
        })();
    }

    await setPark(parkID);
    let message: string = "Waiting...";
    if (current) {
        const lands: Land[] = current.getLands();

        return (
            <div className="p-4">
                {lands.map((land, index) => (
                    <LandCard key={index} land={land} parkID={parkID} />
                ))}
            </div>
        );
    } else {
        message = "Failed to fetch park data.";

        return (
            <div>
                <p>{message}</p>
            </div>
        );
    }

}