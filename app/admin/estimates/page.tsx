import { supabase } from "@/lib/supabase/client";

export default async function EstimatesPage() {
  const { data } = await supabase
    .from("estimates")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main style={{ padding: 40 }}>
      <h1>Saved Estimates</h1>

      {data?.map((estimate) => (
        <div
          key={estimate.id}
          style={{
            border: "1px solid #ddd",
            padding: 16,
            marginBottom: 12,
          }}
        >
          <h3>{estimate.customer_name}</h3>

          <p>{estimate.address}</p>

          <p>${estimate.total}</p>
        </div>
      ))}
    </main>
  );
}

import Link from "next/link";

export default function AdminPage() {
  return (
    <main style={{ padding: 40 }}>
      <h1>SPA Roofing Admin</h1>

      <ul>
        <li>
          <Link href="/admin/estimates">
            Estimates
          </Link>
        </li>

        <li>
          <Link href="/admin/leads">
            Leads
          </Link>
        </li>

        <li>
          <Link href="/admin/settings">
            Settings
          </Link>
        </li>
      </ul>
    </main>
  );
}