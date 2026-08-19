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