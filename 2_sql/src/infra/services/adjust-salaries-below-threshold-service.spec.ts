import { beforeEach } from "node:test";
import { describe, it } from "vitest";
import { drop } from "../../lib/drop";
import { migrate } from "../../lib/migrate";
import { seed } from "../../lib/seed";

describe("AdjustSalariesBelowThresholdService", () => {
    beforeEach(() => {
        // Reset database and seed
        drop();
        migrate();
        seed();
    })

    it("should adjust salaries below threshold", () => {
        console.log(process.env.NODE_ENV);
    });
});