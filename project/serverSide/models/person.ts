export abstract class Person {
    private _id!: number;
    private _name!: string;
    private _surname!: string;
    private _username!: string;



    public get id(): number {
        return this._id;
    }


    public get name(): string {
        return this._name;
    }

    public get surname(): string {
        return this._surname;
    }


    public get username(): string {
        return this._username;
    }

    public set id(value: number) {
        this._id = value;
    }

    public set name(value: string) {
        this._name = value;
    }

    public set surname(value: string) {
        this._surname = value;
    }

    public set username(value: string) {
        this._username = value;
    }

}