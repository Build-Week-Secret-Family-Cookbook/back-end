/* eslint-disable no-undef */
const request = require("supertest");
const server = require("../server");
const db = require("../../data/db-config");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});
beforeEach(async () => {
  await db.seed.run();
});
afterAll(async () => {
  await db.destroy();
});

describe("[GET] /recipes", () => {
  it("Should return a list of Recipes and where they come from", async () => {
    const res = await request(server).get("/api/recipes");
    console.log(res.type);
    expect(res.type).toBe("application/json");
  });
});

describe("[GET] /recipes by ID", () => {
  it("Should return a list of the Request ID and every component inside", async () => {
    const res = await request(server).get("/api/recipes/1");
    console.log(res.type);
    expect(res.type).toBe("application/json");
  });
});

describe("[POST]", () => {
    it("Should return a list of the Request ID and every component inside", async () => {
      const res = await request(server).get("/api/recipes/1");
      console.log(res.type);
      expect(res.type).toBe("application/json");
    });
  });