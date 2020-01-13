import { Person } from "./person";

export class Student extends Person {
    private _studentNo!: number;
    private _userId!: string;
    private _educationType!: string;


    /**
     * Getter studentNo
     * @return {number}
     */
    public get studentNo(): number {
        return this._studentNo;
    }

    /**
     * Getter userId
     * @return {string}
     */
    public get userId(): string {
        return this._userId;
    }

    /**
     * Getter educationType
     * @return {string}
     */
    public get educationType(): string {
        return this._educationType;
    }

    /**
     * Setter studentNo
     * @param {number} value
     */
    public set studentNo(value: number) {
        this._studentNo = value;
    }

    /**
     * Setter userId
     * @param {string} value
     */
    public set userId(value: string) {
        this._userId = value;
    }

    /**
     * Setter educationType
     * @param {string} value
     */
    public set educationType(value: string) {
        this._educationType = value;
    }

}