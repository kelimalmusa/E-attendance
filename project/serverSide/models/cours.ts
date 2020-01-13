export class Cours {
    private _id!: number;
    private _coursCode!: string;
    private _coursName!: string;
    private _substation!: string;
    private _coursHours!: number;
    private _isItPractice!: boolean;
    private _coursStartHour!: string;
    private _coursSaloon!: string;
    private _coursTeacherID!: number;


    /**
     * Getter id
     * @return {number}
     */
    public get id(): number {
        return this._id;
    }

    /**
     * Getter coursCode
     * @return {string}
     */
    public get coursCode(): string {
        return this._coursCode;
    }

    /**
     * Getter coursName
     * @return {string}
     */
    public get coursName(): string {
        return this._coursName;
    }

    /**
     * Getter substation
     * @return {string}
     */
    public get substation(): string {
        return this._substation;
    }

    /**
     * Getter coursHours
     * @return {number}
     */
    public get coursHours(): number {
        return this._coursHours;
    }

    /**
     * Getter isItPractice
     * @return {boolean}
     */
    public get isItPractice(): boolean {
        return this._isItPractice;
    }

    /**
     * Getter coursStartHour
     * @return {string}
     */
    public get coursStartHour(): string {
        return this._coursStartHour;
    }

    /**
     * Getter coursSaloon
     * @return {string}
     */
    public get coursSaloon(): string {
        return this._coursSaloon;
    }

    /**
     * Getter coursTeacherID
     * @return {number}
     */
    public get coursTeacherID(): number {
        return this._coursTeacherID;
    }

    /**
     * Setter id
     * @param {number} value
     */
    public set id(value: number) {
        this._id = value;
    }

    /**
     * Setter coursCode
     * @param {string} value
     */
    public set coursCode(value: string) {
        this._coursCode = value;
    }

    /**
     * Setter coursName
     * @param {string} value
     */
    public set coursName(value: string) {
        this._coursName = value;
    }

    /**
     * Setter substation
     * @param {string} value
     */
    public set substation(value: string) {
        this._substation = value;
    }

    /**
     * Setter coursHours
     * @param {number} value
     */
    public set coursHours(value: number) {
        this._coursHours = value;
    }

    /**
     * Setter isItPractice
     * @param {boolean} value
     */
    public set isItPractice(value: boolean) {
        this._isItPractice = value;
    }

    /**
     * Setter coursStartHour
     * @param {string} value
     */
    public set coursStartHour(value: string) {
        this._coursStartHour = value;
    }

    /**
     * Setter coursSaloon
     * @param {string} value
     */
    public set coursSaloon(value: string) {
        this._coursSaloon = value;
    }

    /**
     * Setter coursTeacherID
     * @param {number} value
     */
    public set coursTeacherID(value: number) {
        this._coursTeacherID = value;
    }

}