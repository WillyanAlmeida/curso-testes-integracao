import calculator from "./../src/calculator";

describe("quatro opereções básicas", ()=>{
    it("deveria retornar a soma de dois números", ()=>{
        expect(calculator.sum(1,2)).toBe(3)
    });
    it("deveria retornar a diferença entre dois números",()=>{
        expect(calculator.sub(1,2)).toBe(-1)
    });
    it("deveria retornar a multiplicação de dois números", ()=>{
      expect(calculator.mul(3,2)).toBe(6)
  });
    it("deveria retornar a razão entre dois números", ()=>{
        expect(calculator.div(4,2)).toBe(2);
    });
    
});