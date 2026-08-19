"use client";

import Image from "next/image";
import { useState } from "react";

export default function EstimateBuilder({
  language = "en",
}: {
  language?: "en" | "es";
}) {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const [squares, setSquares] = useState(29);
  const [pricePerSquare, setPricePerSquare] = useState(551);

  const total = squares * pricePerSquare;

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
              width={300}
              height={120}
            />

            <h1>
              {language === "es"
                ? "Generador de Estimados"
                : "Estimate Builder"}
            </h1>
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
              onChange={(e) =>
                setSquares(Number(e.target.value))
              }
            />

            <input
              type="number"
              value={pricePerSquare}
              onChange={(e) =>
                setPricePerSquare(Number(e.target.value))
              }
            />
          </div>

          <div
            style={{
              marginTop: 32,
              padding: 24,
              border: "1px solid #ddd",
            }}
          >
            <h2>SPA Roofing Estimate</h2>

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

            <h2>
              Total: ${total.toLocaleString()}
            </h2>

            <hr />

            <h3>
              {language === "es"
                ? "Materiales Incluidos"
                : "Materials Included"}
            </h3>

            <ul>
              <li>Ridge Cap</li>
              <li>Rake</li>
              <li>Drip Edge</li>
              <li>Fascia</li>
              <li>Boards</li>
            </ul>

            <p style={{ marginTop: 40 }}>
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
              ? "Imprimir"
              : "Print Estimate"}
          </button>
        </div>
      </div>
    </main>
  );
}