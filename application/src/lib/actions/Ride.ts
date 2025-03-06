/**
 * Ride class.
 */
export class Ride {
    private id: number;
    private name: string;
    private last_updated: string;
    private is_open: boolean;
    private wait_time: number;

    /**
     * Constructor for Ride.
     * @param id 
     * @param name 
     * @param lastUpdated 
     * @param isOpen 
     * @param waitTime 
     */
    constructor(id: number, name: string, lastUpdated: string, isOpen: boolean, waitTime: number) {
        this.id = id || 0;
        this.name = name || '';
        this.last_updated = lastUpdated || '';
        this.is_open = isOpen || false;
        this.wait_time = waitTime || 0;
    }

    /**
     * Get the id of the ride.
     * @returns Number.
     */
    public getId(): number {
        return this.id
    }

    /**
     * Set the id of the ride.
     * @param id Number.
     */
    public sedId(id: number): void {
        this.id = id;
    }

    /**
     * Get the name of the ride.
     * @returns String.
     */
    public getName(): string {
        return this.name
    }

    /**
     * Set the name of the ride.
     * @param name String.
     */
    public setName(name: string): void {
        this.name = name;
    }

    /**
     * Get the last updated time of the ride.
     * @returns String.
     */
    public getLast_updated(): string {
        return this.last_updated
    }

    /**
     * Set the last updated time of the ride.
     * @param last_updated String.
     */
    public setLast_updated(last_updated: string): void {
        this.last_updated = last_updated
    }

    /**
     * Get the status of the ride.
     * @returns Boolean.
     */
    public getIsOpen(): boolean {
        return this.is_open
    }

    /**
     * Set the status of the ride.
     * @param isOpen Boolean.
     */
    public setIsOpen(isOpen: boolean): void {
        this.is_open = isOpen
    }

    /**
     * Get the wait time of the ride.
     * @returns Number.
     */
    public getWaitTime(): number {
        return this.wait_time
    }

    /**
     * Set the wait time of the ride.
     * @param wait_time Number.
     */
    public setWaitTime(wait_time: number): void {
        this.wait_time = wait_time
    }

    /**
     * Convert the ride to a string.
     * @returns String.
     */
    public toString(): string {
        let result = '';
        if (this.is_open) {
            result += `     ${this.name}\n`;
            result += `            Wait: ${this.wait_time}`;
        } else {
            result += `     ${this.name}\n`;
            result += `            Status: Closed`;
        }

        return result;
    }

}
