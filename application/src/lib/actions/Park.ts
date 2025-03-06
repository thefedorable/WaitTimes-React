import { Land } from "./Land";

/**
 * Class for Park.
 */
export class Park {
    private lands: Land[];

    /**
     * Constructor for Park.
     * @param lands The lands in the park.
    */
    constructor(lands: Land[]) {
        this.lands = lands;
    }

    /**
     * Get the lands in the park.
     * @returns The lands in the park.
     */
    public getLands(): Land[] {
        return this.lands
    }

    /**
     * Set the lands in the park.
     * @param lands The lands in the park.
     */
    public setLands(lands: Land[]): void {
        this.lands = lands;
    }

    // public getAverageWait(): number | undefined {
    //     return this.averageWait;
    // }
    //
    // public setAverageWait() {
    //     let averageWait: number = 0;
    //
    //     for (const land of this.lands) {
    //         averageWait = land.avWaitTime();
    //     }
    //
    //     this.averageWait = averageWait / this.lands.length
    // }
    //
    // public setShortestLand(): void {
    //     let shLand: Land = this.lands[0];
    //     let shWait: number = shLand.avWaitTime()
    //
    //     for (const land of this.lands) {
    //         let newWait: number = land.avWaitTime();
    //         if (newWait < shWait && newWait != 0) {
    //             shWait = newWait;
    //             shLand = land;
    //         }
    //     }
    //
    //     this.shortestLand = shLand;
    // }
    //
    // public getShortestLand(): Land | undefined {
    //     return this.shortestLand;
    // }

    /**
     * Convert the park to a string.
     * @returns The park as a string.
     */
    public toString(): string {
        let result = "";

        for (const land of this.lands) {
            result += land.toString() + "\n";
        }

        return result;
    }
}