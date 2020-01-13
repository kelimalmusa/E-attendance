export class Tweet {
    private _id!: number;
    private _tweet!: JSON;
    private _studentId!: number;
    private _coursId!: number;


    /**
     * Getter id
     * @return {number}
     */
    public get id(): number {
        return this._id;
    }

    /**
     * Getter tweet
     * @return {JSON}
     */
    public get tweet(): JSON {
        return this._tweet;
    }

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
     * Setter id
     * @param {number} value
     */
    public set id(value: number) {
        this._id = value;
    }

    /**
     * Setter tweet
     * @param {JSON} value
     */
    public set tweet(value: JSON) {
        this._tweet = value;
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

}