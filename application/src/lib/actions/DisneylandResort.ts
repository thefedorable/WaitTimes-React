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
     * Returns a dummy Disneyland park data.
     * @returns {Park} - The dummy Disneyland park data.
     */
    public getDummyDisneyland(): Park {
        const data = {"lands":[{"id":109,"name":"Adventureland","rides":[{"id":12428,"name":"Adventureland Treehouse inspired by Walt Disney’s Swiss Family Robinson","is_open":true,"wait_time":0,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":326,"name":"Indiana Jones™ Adventure","is_open":true,"wait_time":65,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":296,"name":"Jungle Cruise","is_open":true,"wait_time":25,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":288,"name":"Walt Disney's Enchanted Tiki Room","is_open":true,"wait_time":0,"last_updated":"2024-12-14T23:57:04.000Z"}]},{"id":110,"name":"Bayou Country","rides":[{"id":304,"name":"Davy Crockett's Explorer Canoes","is_open":true,"wait_time":10,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":306,"name":"The Many Adventures of Winnie the Pooh","is_open":true,"wait_time":10,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":14168,"name":"Tiana's Bayou Adventure","is_open":true,"wait_time":50,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":14326,"name":"Tiana's Bayou Adventure Single Rider","is_open":true,"wait_time":0,"last_updated":"2024-12-14T23:57:04.000Z"}]},{"id":111,"name":"Fantasyland","rides":[{"id":307,"name":"\"it's a small world\" Holiday","is_open":true,"wait_time":50,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":285,"name":"Alice in Wonderland","is_open":true,"wait_time":15,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":303,"name":"Casey Jr. Circus Train","is_open":true,"wait_time":5,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":275,"name":"Dumbo the Flying Elephant","is_open":true,"wait_time":25,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":277,"name":"King Arthur Carrousel","is_open":true,"wait_time":5,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":278,"name":"Mad Tea Party","is_open":true,"wait_time":20,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":279,"name":"Matterhorn Bobsleds","is_open":true,"wait_time":75,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":6711,"name":"Meet Disney Princesses at Royal Hall","is_open":true,"wait_time":30,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":280,"name":"Mr. Toad's Wild Ride","is_open":true,"wait_time":25,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":281,"name":"Peter Pan's Flight","is_open":true,"wait_time":45,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":282,"name":"Pinocchio's Daring Journey","is_open":true,"wait_time":10,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":687,"name":"Sleeping Beauty Castle Walkthrough","is_open":false,"wait_time":0,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":283,"name":"Snow White's Enchanted Wish","is_open":false,"wait_time":0,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":305,"name":"Storybook Land Canal Boats","is_open":true,"wait_time":25,"last_updated":"2024-12-14T23:57:04.000Z"}]},{"id":112,"name":"Frontierland","rides":[{"id":323,"name":"Big Thunder Mountain Railroad","is_open":false,"wait_time":0,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":679,"name":"Frontierland Shootin' Exposition","is_open":true,"wait_time":0,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":456,"name":"Mark Twain Riverboat","is_open":true,"wait_time":0,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":331,"name":"Pirate's Lair on Tom Sawyer Island","is_open":true,"wait_time":5,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":328,"name":"Sailing Ship Columbia","is_open":false,"wait_time":0,"last_updated":"2024-12-14T23:57:04.000Z"}]},{"id":113,"name":"Main Street U.S.A","rides":[{"id":674,"name":"Disneyland Railroad","is_open":true,"wait_time":15,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":686,"name":"Main Street Cinema","is_open":true,"wait_time":0,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":691,"name":"Main Street Vehicles","is_open":true,"wait_time":0,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":695,"name":"The Disney Gallery","is_open":true,"wait_time":0,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":690,"name":"The Disneyland Story presenting Great Moments with Mr. Lincoln","is_open":false,"wait_time":0,"last_updated":"2024-12-14T23:57:04.000Z"}]},{"id":114,"name":"Mickey's Toontown","rides":[{"id":324,"name":"Chip 'n' Dale's GADGETcoaster","is_open":true,"wait_time":45,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":13814,"name":"Donald's Duck Pond","is_open":true,"wait_time":0,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":11980,"name":"Goofy's How-to-Play Yard","is_open":true,"wait_time":0,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":11526,"name":"Mickey & Minnie's Runaway Railway","is_open":false,"wait_time":0,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":709,"name":"Mickey's House and Meet Mickey Mouse","is_open":true,"wait_time":45,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":684,"name":"Minnie's House","is_open":true,"wait_time":0,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":332,"name":"Roger Rabbit's Car Toon Spin","is_open":true,"wait_time":55,"last_updated":"2024-12-14T23:57:04.000Z"}]},{"id":115,"name":"New Orleans Square","rides":[{"id":13958,"name":"Haunted Mansion Holiday","is_open":true,"wait_time":95,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":289,"name":"Pirates of the Caribbean","is_open":true,"wait_time":50,"last_updated":"2024-12-14T23:57:04.000Z"}]},{"id":332,"name":"Star Wars: Galaxy's Edge","rides":[{"id":6339,"name":"Millennium Falcon: Smugglers Run","is_open":true,"wait_time":25,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":10903,"name":"Millennium Falcon: Smugglers Run Single Rider","is_open":true,"wait_time":0,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":6340,"name":"Star Wars: Rise of the Resistance","is_open":true,"wait_time":80,"last_updated":"2024-12-14T23:57:04.000Z"}]},{"id":117,"name":"Tomorrowland","rides":[{"id":287,"name":"Astro Orbitor","is_open":true,"wait_time":10,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":317,"name":"Autopia","is_open":true,"wait_time":45,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":273,"name":"Buzz Lightyear Astro Blasters","is_open":true,"wait_time":40,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":274,"name":"Disneyland Monorail","is_open":true,"wait_time":5,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":276,"name":"Finding Nemo Submarine Voyage","is_open":true,"wait_time":25,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":284,"name":"Space Mountain","is_open":true,"wait_time":70,"last_updated":"2024-12-14T23:57:04.000Z"},{"id":286,"name":"Star Tours - The Adventures Continue","is_open":true,"wait_time":55,"last_updated":"2024-12-14T23:57:04.000Z"}]}],"rides":[{"id":14375,"name":"Holiday Fun with Santa & Friends!","is_open":true,"wait_time":0,"last_updated":"2024-12-14T23:57:04.000Z"}]}
        const jsonHelper: JsonTools = new JsonTools();
        return jsonHelper.deserialize(data);
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