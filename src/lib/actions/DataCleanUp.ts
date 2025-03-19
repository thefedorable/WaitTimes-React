import { Land } from "../objects/Land";

/**
 * Remove water park rides.
 * @param park 
 * @returns Park object without water park rides.
 */
export function KnottsCleanUp(lands: Land[]): Land[] {
    const newLands: Land[] = [];
    for (const land of lands) {
        if (land.getName() != "Water Park") {
            newLands.push(land);
        }
    }

    return newLands;
}

/**
 * Remove Pavilions from lands.
 * @param park 
 * @returns Park object without Pavilion.
 */
export function EpcotCleanUp(lands: Land[]): Land[] {
    const newLands: Land[] = [];
    for (const land of lands) {
        if (!(land.getName()).includes("Pavilion")) {
            newLands.push(land);
        }
    }

    return newLands;
}