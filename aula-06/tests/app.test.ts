import supertest from "supertest";

import app from "./../src/app";

const api = supertest(app);

describe("API test", () => {
  it("should return 200 when ask /health", async () => {
    const { status, text } = await api.get("/health");
    expect(status).toBe(200);
    expect(text).toBe("OK!");
  })
  it("should be return stauts 200", async()=>{
    const result = await api.get("/event")
    expect(result.body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        image: expect.any(String),
        date: expect.any(String)
      })
    )
    expect(result.status).toBe(200) 
  });
});