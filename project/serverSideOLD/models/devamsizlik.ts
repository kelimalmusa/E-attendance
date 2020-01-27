export class Devamsizlik {
    private _studentId!: number;
    private _coursId!: number;
    private _tweetId!: string;
    private _procDate!: string;
    private _procLocation!: string;

    /**
     * Getter studentId
     * @return {number}
     */
    public get studentId(): number {
        return this._studentId;
    }

    /**
     * Getter coursId
     * @return {number}
     */
    public get coursId(): number {
        return this._coursId;
    }

    /**
     * Getter tweetId
     * @return {string}
     */
    public get tweetId(): string {
        return this._tweetId;
    }

    /**
     * Getter procDate
     * @return {string}
     */
    public get procDate(): string {
        return this._procDate;
    }

    /**
     * Getter procLocation
     * @return {string}
     */
    public get procLocation(): string {
        return this._procLocation;
    }

    /**
     * Setter studentId
     * @param {number} value
     */
    public set studentId(value: number) {
        this._studentId = value;
    }

    /**
     * Setter coursId
     * @param {number} value
     */
    public set coursId(value: number) {
        this._coursId = value;
    }

    /**
     * Setter tweetId
     * @param {string} value
     */
    public set tweetId(value: string) {
        this._tweetId = value;
    }

    /**
     * Setter procDate
     * @param {string} value
     */
    public set procDate(value: string) {
        this._procDate = value;
    }

    /**
     * Setter procLocation
     * @param {string} value
     */
    public set procLocation(value: string) {
        this._procLocation = value;
    }

}