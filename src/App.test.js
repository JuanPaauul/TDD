import calcularTotal from "./App.js";

describe("Calcular total", () => {
  it("Deberia devolver el precio total mas el impuesto", () => {
    expect(calcularTotal(3, 2,"UT")).toEqual(6.3990);
  });
});
