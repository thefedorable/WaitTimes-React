import { Land } from "../objects/Land";
import { Ride } from "../objects/Ride";

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

/**
 * Remove single rider rides from universal.
 * @param park
 * @returns Park object without single rider rides.
 */
export function UniversalCleanUp(lands: Land[]): Land[] {
    const newLands: Land[] = [];
    for (const land of lands) {
        const newRides: Ride[] = [];
        for (const ride of land.getRides()) {

            if (!(ride.getName()).includes("Single Rider")) {
                newRides.push(ride);
            }
        }
        land.setRides(newRides);
        newLands.push(land);
    }

    return newLands;
}

/**
 * Remove First train to hogwarts rides from universal.
 * @param park
 * @returns Park object without single rider rides.
 */
export function UniversalOrlandoCleanUp(lands: Land[]): Land[] {
    const newLands: Land[] = [];
    for (const land of lands) {
        const newRides: Ride[] = [];
        for (const ride of land.getRides()) {

            if (!(ride.getName()).includes("First Train")) {
                newRides.push(ride);
            }
        }
        land.setRides(newRides);
        newLands.push(land);
    }

    return newLands;
}