import { Park } from "@/lib/actions/Park";
import { DisneylandResort } from "@/lib/actions/DisneylandResort"
import { Land } from "@/lib/actions/Land";
import LandCard from "./LandCard";

/**
 * Create and display a message string containing the Disneyland Resort data.
 * @returns The message string.
 */
export default async function ParkRetrieval() {
    const DLR: DisneylandResort = new DisneylandResort();
    let message: string = "Waiting...";
    await DLR.setDisneyland();
    const Disneyland: Park = DLR.getDisneyland();
    if (Disneyland) {
        const lands: Land[] = Disneyland.getLands();

        return (
            <div className="p-4">
                {lands.map((land, index) => (
                    <LandCard key={index} land={land} />
                ))}
            </div>
        );
    } else {
        message = "Failed to fetch Disneyland data.";

        return (
            <div>
                <p>{message}</p>
            </div>
        );
    }

}