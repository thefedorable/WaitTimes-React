import { Park } from "@/lib/actions/Park";
import { DisneylandResort } from "@/lib/actions/DisneylandResort"
import { Land } from "@/lib/actions/Land";
import LandCard from "./LandCard";

/**
 * Create and display a message string containing the Disneyland Resort data.
 * @returns The message string.
 */
export default async function ParkRetrival() {
    const DLR: DisneylandResort = new DisneylandResort();
    let message: string = "Waiting...";
    await DLR.setDisneyland();
    const Disneyland: Park = DLR.getDisneyland();
    if (Disneyland) {
        const lands: Land[] = Disneyland.getLands();

        return (
            <div>
                <LandCard land={lands[0]}/>
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