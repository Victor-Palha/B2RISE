import { afterEach, beforeAll, beforeEach } from "vitest";
import { DATABASE } from "../infra/sqlite/connection";
import { migrate } from "../lib/migrate";
import { seed } from "../lib/seed";
import { drop } from "../lib/drop";

beforeAll(() => {
    process.env.DB_NAME = "test.sqlite";
})

beforeEach(() => {
    migrate(DATABASE);
    seed(DATABASE);
})

afterEach(() => {
    drop(DATABASE);
})