const request = require("supertest");
const app = require("../server"); // Adjust if your app exports app

describe("GET /about", () => {
  it("should return About page message", async () => {
    const res = await request(app).get("/about");
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("About page");
  });
});
