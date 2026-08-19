"use client";

import Image from "next/image";
import { useState } from "react";

export default function EstimateBuilder({
  language = "en",
}: {
  language?: "en" | "es";
}) {
  const [customer, setCustomer] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
const [representative, setRepresentative] =
  useState("Selvin Alvarez");

const [claimType, setClaimType] = useState<
  "retail" | "insurance"
>("retail");
  const [address, setAddress] = useState("");
  const [squares, setSquares] = useState("29");
const [pricePerSquare, setPricePerSquare] = useState("551");
  const [notes, setNotes] = useState("");

  const [jobType, setJobType] = useState<
    "repair" | "replacement"
  >("replacement");

  const [materials, setMaterials] = useState([
    "Ridge Cap",
    "Rake",
    "Drip Edge",
    "Fascia",
    "Boards",
  ]);

 const total =
  Number(squares || 0) *
  Number(pricePerSquare || 0);

  const today = new Date().toLocaleDateString();

  const estimateNumber =
    "SPA-" +
    new Date().getFullYear() +
    "-" +
    Date.now().toString().slice(-4);

  const addMaterial = () => {
    setMaterials([...materials, ""]);
  };

  const removeMaterial = (index: number) => {
    setMaterials(materials.filter((_, i) => i !== index));
  };

  const updateMaterial = (
    index: number,
    value: string
  ) => {
    const copy = [...materials];
    copy[index] = value;
    setMaterials(copy);
  };
const loadTemplate = (
  template: "shingle" | "metal" | "repair"
) => {
  if (template === "shingle") {
    setMaterials([
      "Architectural Shingles",
      "Synthetic Underlayment",
      "Ridge Cap",
      "Drip Edge",
      "Pipe Boots",
    ]);
  }

  if (template === "metal") {
    setMaterials([
      "Metal Panels",
      "Closure Strips",
      "Ridge Cap",
      "Trim",
      "Fasteners",
    ]);
  }

  if (template === "repair") {
    setMaterials([
      "Replacement Shingles",
      "Sealant",
      "Flashing",
    ]);
  }
};
  return (
    <main className="section">
      <div className="container">

        <div className="estimate-grid">

          <div className="editor-panel no-print">

            <h2>
              {language === "es"
                ? "Editor de Estimado"
                : "Estimate Editor"}
            </h2>

            <label>
              {language === "es"
                ? "Cliente"
                : "Customer"}
            </label>

            <input
              className="field"
              value={customer}
              onChange={(e) =>
                setCustomer(e.target.value)
              }
            />
<label>
  {language === "es"
    ? "Teléfono"
    : "Phone Number"}
</label>

<input
  className="field"
  value={customerPhone}
  onChange={(e) =>
    setCustomerPhone(e.target.value)
  }
/>
            <label>
              {language === "es"
                ? "Dirección"
                : "Address"}
            </label>

            <input
              className="field"
              value={address}
              onChange={(e) =>
                setAddress(e.target.value)
              }
            />
<label>
  {language === "es"
    ? "Representante"
    : "Sales Representative"}
</label>

<input
  className="field"
  value={representative}
  onChange={(e) =>
    setRepresentative(e.target.value)
  }
/>
            <label>
              {language === "es"
                ? "Cuadrados"
                : "Squares"}
            </label>

            <input
  className="field"
  type="number"
  value={squares}
  onChange={(e) =>
    setSquares(e.target.value)
  }
/>

            <label>
              {language === "es"
                ? "Precio por Cuadrado"
                : "Price Per Square"}
            </label>

            <input
  className="field"
  type="number"
  value={pricePerSquare}
  onChange={(e) =>
    setPricePerSquare(
      e.target.value
    )
  }
/>

            <h3 style={{ marginTop: 20 }}>
              {language === "es"
                ? "Tipo de Proyecto"
                : "Project Type"}
            </h3>
<h3 style={{ marginTop: 20 }}>
  {language === "es"
    ? "Tipo de Cliente"
    : "Customer Type"}
</h3>

<label>
  <input
    type="radio"
    checked={claimType === "retail"}
    onChange={() =>
      setClaimType("retail")
    }
  />
  {" "}
  {language === "es"
    ? "Cliente Directo"
    : "Retail Customer"}
</label>

<br />

<label>
  <input
    type="radio"
    checked={claimType === "insurance"}
    onChange={() =>
      setClaimType("insurance")
    }
  />
  {" "}
  {language === "es"
    ? "Reclamo de Seguro"
    : "Insurance Claim"}
</label>
            <label>
              <input
                type="radio"
                checked={jobType === "repair"}
                onChange={() =>
                  setJobType("repair")
                }
              />
              {" "}
              {language === "es"
                ? "Reparación"
                : "Repair"}
            </label>

            <br />

            <label>
              <input
                type="radio"
                checked={
                  jobType === "replacement"
                }
                onChange={() =>
                  setJobType("replacement")
                }
              />
              {" "}
              {language === "es"
                ? "Reemplazo Completo"
                : "Full Replacement"}
            </label>
<h3 style={{ marginTop: 20 }}>
  {language === "es"
    ? "Plantillas"
    : "Templates"}
</h3>

<div
  style={{
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
    marginBottom: 16,
  }}
>
  <button
    type="button"
    onClick={() =>
      loadTemplate("shingle")
    }
  >
    Architectural
  </button>

  <button
    type="button"
    onClick={() =>
      loadTemplate("metal")
    }
  >
    Metal
  </button>

  <button
    type="button"
    onClick={() =>
      loadTemplate("repair")
    }
  >
    Repair
  </button>
</div>
            <h3 style={{ marginTop: 20 }}>
              {language === "es"
                ? "Materiales"
                : "Materials"}
            </h3>

            {materials.map(
              (material, index) => (
                <div
                  className="material-row"
                  key={index}
                >
                  <input
                    className="field material-input"
                    value={material}
                    onChange={(e) =>
                      updateMaterial(
                        index,
                        e.target.value
                      )
                    }
                  />

                  <button
                    className="remove-btn"
                    type="button"
                    onClick={() =>
                      removeMaterial(index)
                    }
                  >
                    X
                  </button>
                </div>
              )
            )}

            <button
              type="button"
              onClick={addMaterial}
            >
              + Add Material
            </button>

            <h3 style={{ marginTop: 20 }}>
              {language === "es"
                ? "Notas"
                : "Notes"}
            </h3>

            <textarea
              className="field"
              rows={4}
              value={notes}
              onChange={(e) =>
                setNotes(e.target.value)
              }
            />

            <button
              style={{ marginTop: 20 }}
              onClick={() => window.print()}
            >
              {language === "es"
                ? "Imprimir"
                : "Print Estimate"}
            </button>

          </div>

          <div className="preview-panel">

            <div
              style={{
                textAlign: "center",
              }}
            >
              <Image
                src="/logo/logo-reference.png"
                alt="SPA Roofing"
                width={260}
                height={90}
              />

              <p>501-549-8833</p>
              <p>sparoofing6@gmail.com</p>
              <p>Little Rock, Arkansas</p>
            </div>

            <hr />

            <h2>SPA Roofing Estimate</h2>

            <p>
              <strong>
                {language === "es"
                  ? "Estimado #"
                  : "Estimate #"}
              </strong>{" "}
              {estimateNumber}
            </p>

            <p>
              <strong>
                {language === "es"
                  ? "Fecha"
                  : "Date"}
              </strong>{" "}
              {today}
            </p>

            <p>
              <strong>
                {language === "es"
                  ? "Cliente"
                  : "Customer"}
              </strong>{" "}
              {customer}
              <p>
  <strong>
    {language === "es"
      ? "Teléfono"
      : "Phone"}
  </strong>{" "}
  {customerPhone}
</p>
            </p>

            <p>
              <strong>
                {language === "es"
                  ? "Dirección"
                  : "Address"}
              </strong>{" "}
              {address}
              <p>
  <strong>
    {language === "es"
      ? "Representante"
      : "Representative"}
  </strong>{" "}
  {representative}
</p>
            </p>

            <p>
              <strong>
                {language === "es"
                  ? "Cuadrados"
                  : "Squares"}
              </strong>{" "}
              {squares}
            </p>

            <p>
              <strong>
                {language === "es"
                  ? "Precio por Cuadrado"
                  : "Price Per Square"}
              </strong>{" "}
              ${pricePerSquare}
            </p>
<p>
  <strong>
    {language === "es"
      ? "Tipo"
      : "Type"}
  </strong>{" "}
  {claimType === "insurance"
    ? language === "es"
      ? "Reclamo de Seguro"
      : "Insurance Claim"
    : language === "es"
    ? "Cliente Directo"
    : "Retail Customer"}
</p>
            <div className="total-box">
              <h2>
                $
                {total.toLocaleString()}
              </h2>

              <p>
                {language === "es"
                  ? "Total del Proyecto"
                  : "Project Total"}
              </p>
            </div>

            <h3>
              {language === "es"
                ? "Materiales Incluidos"
                : "Materials Included"}
            </h3>

            <ul>
              {materials
                .filter((m) =>
                  m.trim()
                )
                .map((material, i) => (
                  <li key={i}>
                    {material}
                  </li>
                ))}
            </ul>

            <h3>
              {language === "es"
                ? "Términos de Pago"
                : "Payment Terms"}
            </h3>

            <p>
              {jobType ===
              "replacement"
                ? language === "es"
                  ? "Se requiere un depósito del 50% antes de comenzar. El saldo restante se debe al completar el trabajo."
                  : "50% deposit required before work begins. Remaining balance due upon completion."
                : language === "es"
                ? "El pago se debe al completar la reparación."
                : "Payment due upon completion of repair work."}
            </p>

            {notes && (
              <>
                <h3>
                  {language === "es"
                    ? "Notas"
                    : "Notes"}
                </h3>

                <p>{notes}</p>
              </>
            )}

            <div
              className="signature-line"
            >
              {language === "es"
                ? "Firma del Cliente"
                : "Customer Signature"}
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}