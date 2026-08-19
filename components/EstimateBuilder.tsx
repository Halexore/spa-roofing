"use client";

import Image from "next/image";
import { useState } from "react";

export default function EstimateBuilder({
  language = "en",
}: {
  language?: "en" | "es";
}) {
  const [jobType, setJobType] = useState<"repair" | "replacement">(
    "replacement"
  );

  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const [squares, setSquares] = useState(29);
  const [pricePerSquare, setPricePerSquare] = useState(551);
  const [notes, setNotes] = useState("");

  const [materials, setMaterials] = useState([
    "Ridge Cap",
    "Rake",
    "Drip Edge",
    "Fascia",
    "Boards",
  ]);

  const total = squares * pricePerSquare;
  const today = new Date().toLocaleDateString();

  const addMaterial = () => {
    setMaterials([...materials, ""]);
  };

  const removeMaterial = (index: number) => {
    setMaterials(materials.filter((_, i) => i !== index));
  };

  const updateMaterial = (index: number, value: string) => {
    const copy = [...materials];
    copy[index] = value;
    setMaterials(copy);
  };

  return (
    <main className="section">
      <div className="container">
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: 32,
            boxShadow: "0 8px 24px rgba(0,0,0,.08)",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <Image
              src="/logo/logo-reference.png"
              alt="SPA Roofing"
              width={320}
              height={120}
            />

            <h1>
              {language === "es"
                ? "Generador de Estimados"
                : "Estimate Builder"}
            </h1>

            <p>501-549-8833</p>
            <p>sparoofing6@gmail.com</p>
            <p>Little Rock, Arkansas</p>
          </div>

          <hr />

          <div
            style={{
              display: "grid",
              gap: 12,
              marginTop: 20,
            }}
          >
            <input
              placeholder={
                language === "es"
                  ? "Nombre del Cliente"
                  : "Customer Name"
              }
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
            />

            <input
              placeholder={
                language === "es"
                  ? "Dirección"
                  : "Address"
              }
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <input
              type="number"
              value={squares}
              onChange={(e) => setSquares(Number(e.target.value))}
            />

            <input
              type="number"
              value={pricePerSquare}
              onChange={(e) =>
                setPricePerSquare(Number(e.target.value))
              }
            />

            <div style={{ marginTop: 20 }}>
              <h3>
                {language === "es"
                  ? "Tipo de Proyecto"
                  : "Project Type"}
              </h3>

              <label style={{ marginRight: 20 }}>
                <input
                  type="radio"
                  checked={jobType === "repair"}
                  onChange={() => setJobType("repair")}
                />
                {" "}
                {language === "es"
                  ? "Reparación"
                  : "Repair"}
              </label>

              <label>
                <input
                  type="radio"
                  checked={jobType === "replacement"}
                  onChange={() => setJobType("replacement")}
                />
                {" "}
                {language === "es"
                  ? "Reemplazo Completo"
                  : "Full Replacement"}
              </label>
            </div>

            <div style={{ marginTop: 20 }}>
              <h3>
                {language === "es"
                  ? "Materiales"
                  : "Materials"}
              </h3>

              {materials.map((material, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    gap: 8,
                    marginBottom: 8,
                  }}
                >
                  <input
                    value={material}
                    onChange={(e) =>
                      updateMaterial(index, e.target.value)
                    }
                    style={{
                      flex: 1,
                    }}
                  />

                  <button
                    type="button"
                    onClick={() => removeMaterial(index)}
                  >
                    X
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={addMaterial}
              >
                + Add Material
              </button>
            </div>

            <div style={{ marginTop: 20 }}>
              <h3>
                {language === "es"
                  ? "Notas"
                  : "Notes"}
              </h3>

              <textarea
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={
                  language === "es"
                    ? "Ingrese notas adicionales..."
                    : "Enter additional notes..."
                }
              />
            </div>
          </div>

          <div
            style={{
              marginTop: 32,
              padding: 24,
              border: "1px solid #ddd",
              borderRadius: 12,
            }}
          >
            <h2>SPA Roofing Estimate</h2>

            <p>
              <strong>
                {language === "es" ? "Fecha" : "Date"}:
              </strong>{" "}
              {today}
            </p>

            <p>
              <strong>
                {language === "es"
                  ? "Cliente"
                  : "Customer"}
                :
              </strong>{" "}
              {customer}
            </p>

            <p>
              <strong>
                {language === "es"
                  ? "Dirección"
                  : "Address"}
                :
              </strong>{" "}
              {address}
            </p>

            <p>
              <strong>
                {language === "es"
                  ? "Cuadrados"
                  : "Squares"}
                :
              </strong>{" "}
              {squares}
            </p>

            <p>
              <strong>
                {language === "es"
                  ? "Precio por Cuadrado"
                  : "Price Per Square"}
                :
              </strong>{" "}
              ${pricePerSquare}
            </p>

            <h2
              style={{
                fontSize: "2rem",
                color: "#244b35",
                marginTop: 16,
              }}
            >
              {language === "es" ? "Total" : "Total"}:
              {" "}
              ${total.toLocaleString()}
            </h2>

            <div style={{ marginTop: 20 }}>
              <h3>
                {language === "es"
                  ? "Términos de Pago"
                  : "Payment Terms"}
              </h3>

              <p>
                {jobType === "replacement"
                  ? language === "es"
                    ? "Se requiere un depósito del 50% antes de comenzar. El saldo restante se debe al completar el trabajo."
                    : "50% deposit required before work begins. Remaining balance due upon completion."
                  : language === "es"
                  ? "El pago se debe al completar la reparación."
                  : "Payment due upon completion of repair work."}
              </p>
            </div>

            <hr />

            <h3>
              {language === "es"
                ? "Materiales Incluidos"
                : "Materials Included"}
            </h3>

            <ul>
              {materials
                .filter((material) => material.trim())
                .map((material, index) => (
                  <li key={index}>{material}</li>
                ))}
            </ul>

            {notes && (
              <>
                <hr />

                <h3>
                  {language === "es"
                    ? "Notas"
                    : "Notes"}
                </h3>

                <p>{notes}</p>
              </>
            )}

            <p style={{ marginTop: 50 }}>
              __________________________
            </p>

            <p>
              {language === "es"
                ? "Firma del Cliente"
                : "Customer Signature"}
            </p>
          </div>

          <button
            className="btn btn-primary"
            style={{ marginTop: 24 }}
            onClick={() => window.print()}
          >
            {language === "es"
              ? "Imprimir Estimado"
              : "Print Estimate"}
          </button>
        </div>
      </div>
    </main>
  );
}