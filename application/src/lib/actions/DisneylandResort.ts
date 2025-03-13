import {Park} from "./Park";
import {JsonTools} from "./JsonTools";

/**
 * A class representing the Disneyland Resort.
 */
export class DisneylandResort {
    private Disneyland: Park;
    private DCA: Park;

    /**
     * Creates a new DisneylandResort object.
     */
    constructor() {
        this.Disneyland = new Park([]);
        this.DCA = new Park([]);
    }

    /**
     * Fetches and sets the Disneyland park data.
     * @returns {Promise<void>}
     */
    public async setDisneyland(): Promise<void> {
        await (async () => {
            const url = "https://queue-times.com/parks/16/queue_times.json";
            try {
                const jsonHelper: JsonTools = new JsonTools();
                this.Disneyland = await jsonHelper.fetchAndDeserializePark(url);
            } catch (error) {
                console.error("Failed to fetch or process the park data:", error);
            }
        })();
    }

    /**
     * Returns the Disneyland park data.
     * @returns {Park} - The Disneyland park data.
    */
    public getDisneyland(): Park {
        return this.Disneyland;
    }

    /**
     * Fetches and sets the Disney California Adventure park data.
     * @returns {Promise<void>}
     */
    public async setDCA(): Promise<void> {
        await (async () => {
            const url = "https://queue-times.com/parks/17/queue_times.json";
            try {
                const jsonHelper: JsonTools = new JsonTools();
                this.DCA = await jsonHelper.fetchAndDeserializePark(url)
            } catch (error) {
                console.error("Failed to fetch or process the park data:", error);
            }
        })();
    }

    /**
     * Returns the Disney California Adventure park data.
     * @returns {Park} - The Disney California Adventure park data.
    */
    public getDCA(): Park {
        return this.DCA;
    }

}