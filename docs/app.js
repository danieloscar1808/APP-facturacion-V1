const params = new URLSearchParams(window.location.search)

const presupuesto = params.get("presupuesto")

console.log("Presupuesto recibido:", presupuesto)