import supertest from "supertest";

import app from "./../src/app";

const api = supertest(app);

describe("API test", () => {
  it("should return 200 when ask /health", async () => {
    const { status, text } = await api.get("/health");
    expect(status).toBe(200);
    expect(text).toBe("OK!");
  })
  it('should return 400 when ask/fibonacci has an invalid query', async () => {
    const result = await api.get("/fibonacci?elements=x");
    expect(result.status).toBe(400);

    const result2 = await api.get("/fibonacci?elements=0");
    expect(result2.status).toBe(400);
  
   
  })
  it("test return values /fibonacci", async () => {
    const result = await api.get("/fibonacci?elements=5");
    expect(result.body).toEqual([0, 1, 1, 2, 3]);
    
  })
})