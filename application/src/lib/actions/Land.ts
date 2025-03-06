import { Ride } from "./Ride";

/**
 * Land class.
 */
export class Land {
    private id: number;
    private name: string;
    private rides: Ride[];

    /**
     * Constructor for Land.
     * @param id The id of the land.
     * @param name The name of the land.
     * @param rides The rides in the land.
     */
    constructor(id: number, name: string, rides: Ride[]) {
        this.id = id;
        this.name = name;
        this.rides = rides;
    }

    /**
     * Get the id of the land.
     * @returns The id of the land.
     */
    public getID(): number {
        return this.id;
    }

    /**
     * Set the id of the land.
     * @param id The id of the land.
     */
    public setID(id: number): void {
        this.id = id;
    }

    /**
     * Get the name of the land.
     * @returns The name of the land.
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Set the name of the land.
     * @param name The name of the land.
     */
    public setName(name: string): void {
        this.name = name;
    }

    /**
     * Get the rides in the land.
     * @returns The rides in the land.
     */
    public getRides(): Ride[] {
        return this.rides;
    }

    /**
     * Set the rides in the land.
     * @param rides 
     */
    public setRides(rides: Ride[]): void {
        this.rides = rides;
    }

    // public shortestWait(): Ride {
    //      let ride: Ride = this.rides[0];
    //      let wait: number = ride.getWaitTime();
    //
    //      for (const curRide of this.rides) {
    //          let newWait: number = curRide.getWaitTime();
    //          if (newWait < wait && newWait != 0) {
    //              wait = newWait;
    //              ride = curRide
    //          }
    //      }
    //
    //      return ride
    // }
    //
    // public avWaitTime(): number {
    //     let add: number = 0;
    //     let rideNum: number = 0;
    //
    //     for (const ride of this.rides) {
    //         if (ride.getWaitTime() != 0) {
    //             add += ride.getWaitTime();
    //             rideNum++;
    //         }
    //     }
    //
    //     let average: number = 0
    //
    //     if (rideNum != 0) {
    //         average = add / rideNum;
    //         return average;
    //     }
    //     else {
    //         return 0
    //     }
    // }

    /**
     * Print out the class as a string.
     * @returns The class as a string.
     */
    public toString(): string {
        let result = `${this.name}:\n\n`;

        for (const ride of this.rides) {
            if (!ride.getName().includes("Single")) {
                result += ride.toString() + "\n\n";
            }
        }

        return result;
    }

}