import { beforeAll } from "vitest";


beforeAll(() => {
    process.env.DB_NAME = "test.sqlite";
})

// beforeEach(() => {
//     migrate(DATABASE);
//     seed(DATABASE);
// })

// afterEach(() => {
//     drop(DATABASE);
// })