/* eslint-disable @typescript-eslint/no-explicit-any */
import { Park } from "./Park";
import { Land } from "./Land";
import {Ride} from "./Ride";

/**
 * Class to handle JSON data fetching and deserialization.
 */
export class JsonTools {

    /**
     * Fetches JSON data from a URL and deserializes it into a Park object.
     * @param {RequestInfo | URL} url - The URL to fetch JSON data from.
     * @returns {Promise<Park>} - The deserialized Park object.
     */
    public async fetchAndDeserializePark(url: RequestInfo | URL) {
        try {
            
            const response = await fetch(url, {
                headers: {
                    "Access-Control-Allow-Origin" : "*"
                },
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();

            // Deserialize JSON data into Park, Land, and Ride objects
            const lands = data.lands.map((landData: { rides: any[]; id: number; name: string; }) => {
                const rides = landData.rides.map((rideData) => {
                    return new Ride(
                        rideData.id,
                        rideData.name,
                        rideData.last_updated,
                        rideData.is_open,
                        rideData.wait_time
                    );
                });

                return new Land(landData.id, landData.name, rides);
            });

            return new Park(lands);
        } catch (error) {
            console.error("Error fetching or deserializing data:", error);
            throw error;
        }
    }

    /**
     * Deserializes JSON data into a Park object.
     * @param {Object} data - The JSON data to deserialize.
     * @returns {Park} - The deserialized Park object.
     */
    public deserialize(data: { lands: any; rides?: { id: number; name: string; is_open: boolean; wait_time: number; last_updated: string; }[]; }): Park {
        const lands = data.lands.map((landData: { rides: any[]; id: number; name: string; }) => {
            const rides = landData.rides.map((rideData) => {
                return new Ride(
                    rideData.id,
                    rideData.name,
                    rideData.last_updated,
                    rideData.is_open,
                    rideData.wait_time
                );
            });

            return new Land(landData.id, landData.name, rides);
        });

        return new Park(lands);
    }

}