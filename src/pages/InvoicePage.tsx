import { PageLayout } from "@/components/PageLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useState, useEffect } from "react";

const InvoicePage = () => {

const [cliente, setCliente] = useState("");
const [concepto, setConcepto] = useState("");
const [total, setTotal] = useState("");

useEffect(() => {

const params = new URLSearchParams(window.location.search);

setCliente(params.get("cliente") || "");
setTotal(params.get("total") || "");

}, []);

return (

<PageLayout title="Factura">

<div className="card-elevated p-4 space-y-3">

<Input
placeholder="Cliente"
value={cliente}
onChange={(e)=>setCliente(e.target.value)}
/>

<Input
placeholder="Concepto"
value={concepto}
onChange={(e)=>setConcepto(e.target.value)}
/>

<Input
type="number"
placeholder="Total"
value={total}
onChange={(e)=>setTotal(e.target.value)}
/>

<Button className="w-full btn-gradient">
Emitir Factura
</Button>

</div>

</PageLayout>

);

};

export default InvoicePage;