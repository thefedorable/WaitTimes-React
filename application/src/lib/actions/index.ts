import { DisneylandResort } from "./DisneylandResort";
import {Park} from "./Park";

/**
 * The main function.
 */
async function main() {
    let disneyland: Park | undefined = undefined;
    //let dca: Park | undefined = undefined;
    const disneylandResort = new DisneylandResort();

    await disneylandResort.setDisneyland();
    //await disneylandResort.setDCA();

    disneyland = disneylandResort.getDisneyland();
    //dca = disneylandResort.getDCA();

    if (disneyland) {
        console.log("Disneyland:", disneyland.toString());
    } else {
        console.log("Failed to retrieve Disneyland data.");
    }

    // if (dca) {
    //     console.log("DCA:", dca.toString());
    // } else {
    //     console.log("Failed to retrieve DCA data.");
    // }
}

// Run the main function
main().catch((error) => {
    console.error("An error occurred:", error);
});



// (async () => {
//     await disneylandResort.setDisneyland();
//     disneyland = disneylandResort.getDisneyland();
// })();
//
// (async () => {
//     await disneylandResort.setDCA();
//     dca = disneylandResort.getDCA();
// })();
//
// await new Promise(f => setTimeout(f, 1000));
//
// if (disneyland) {
//     // @ts-ignore
//     console.log("Disneyland:", disneyland.toString());
// } else {
//     console.error("Failed to fetch Disneyland park data.");
// }
//
// if (dca) {
//     // @ts-ignore
//     console.log("Disneyland Park Data:", dca.toString());
// } else {
//     console.error("Failed to fetch Disneyland park data.");
// }