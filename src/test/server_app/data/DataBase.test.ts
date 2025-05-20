import { DataBase } from "../../../app/server_app/data/DataBase"
import * as IdGenerator from "../../../app/server_app/data/IdGenerator";

type withId = {
    id: string,
    name: string,
    color: string
}

describe('DB Test suite', () => {
    let sut: DataBase<withId>;
    const someObj: withId = {
        id: "2463",
        name: "test obj",
        color: "test red"
    }
    const someObj2: withId = {
        id: "8406",
        name: "test obj2",
        color: "test red"
    }

    beforeEach(() => {
        sut = new DataBase<withId>();
        jest.spyOn(IdGenerator, "generateRandomId").mockReturnValue("1234");
    });

    it("should return id after insrt", async () => {
        const actual = await sut.insert({
            id: '',

        } as any);
        expect(actual).toBe("1234");
    });

    it("should get element after insrt", async () => {
        const id = await sut.insert(someObj);
        const actual = await sut.getBy('id', id);
        expect(actual).toEqual(actual);
    });

    it("should get all element with property", async () => {
        await sut.insert(someObj);
        await sut.insert(someObj2);
        const actual = await sut.findAllBy('color', 'test red')
        expect(actual).toEqual([someObj, someObj2]);
    });
})