export class deneme {
    private _name= "sadad";
    private _age= 25;

    /**
     * Getter name
     * @return {string}
     */
    public get name(): string {
        return this._name;
    }

    /**
     * Getter age
     * @return {number}
     */
    public get age(): number {
        return this._age;
    }

    /**
     * Setter name
     * @param {string} value
     */
    public set name(value: string) {
        this._name = value;
    }

    /**
     * Setter age
     * @param {number} value
     */
    public set age(value: number) {
        this._age = value;
    }

}