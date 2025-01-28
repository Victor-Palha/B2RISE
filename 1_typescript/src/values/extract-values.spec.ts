import {describe, expect, it} from "vitest";
import { extractValues } from "./extract-values";

type Client = {
    id: number;
    name: string;
    age?: number;
}

describe("extract values from datasource", () => {

    it("should be able to extract all names from clients", () => {
        const clients: Client[] = [
            {id: 1, name: "John", age: 30},
            {id: 2, name: "Jane", age: 25},
            {id: 3, name: "Jim", age: 35}
        ]

        const names = extractValues<Client>(clients, "name");
        expect(names).toEqual(["John", "Jane", "Jim"]);
    });

    it("should be able to extract all ages from clients even if they are optional", ()=>{
        const clients: Client[] = [
            {id: 1, name: "John", age: 30},
            {id: 2, name: "Jane", age: undefined},
            {id: 3, name: "Jim", age: 35}
        ]

        const ages = extractValues<Client>(clients, "age");
        expect(ages).toEqual([30, undefined, 35]);
    })

    it("should be able to extract all ids from clients even if there are no types", () => {
        const clients = [
            {id: 1, name: "John", age: 30},
            {id: 2, name: "Jane", age: undefined},
            {id: 3, name: "Jim", age: 35}
        ]

        const ids = extractValues(clients, "id");
        expect(ids).toEqual([1, 2, 3]);
    })
});