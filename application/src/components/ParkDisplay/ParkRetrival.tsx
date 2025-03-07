import { Park } from "@/lib/actions/Park";
import { DisneylandResort } from "@/lib/actions/DisneylandResort"
//import { Land } from "@/lib/actions/Land";

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
        message = Disneyland.toString();
    } else {
        message = "Failed to fetch Disneyland data.";
    }

    //const lands: Land[] = Disneyland.getLands();

    return (
        <div>
            <p>{message}</p>
        </div>
    );

}