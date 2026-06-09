import Link from "next/link";
import { revalidatePath } from "next/cache";
import { ObjectId } from "mongodb";
import { getMongoDb } from "@/lib/mongodb";

async function deleteLead(formData: FormData) {
  "use server";

  const id = String(formData.get("id") || "");
  const type = String(formData.get("type") || "");

  if (!id || !ObjectId.isValid(id)) return;

  const collection =
    type === "quote"
      ? "quote_submissions"
      : type === "contact"
      ? "contact_submissions"
      : "";

  if (!collection) return;

  const db = await getMongoDb();

  await db.collection(collection).deleteOne({
    _id: new ObjectId(id),
  });

  revalidatePath("/admin/dashboard");
}

async function updateLeadStatus(formData: FormData) {
  "use server";

  const id = String(formData.get("id") || "");
  const type = String(formData.get("type") || "");
  const status = String(formData.get("status") || "new");

  if (!id || !ObjectId.isValid(id)) return;

  const allowedStatuses = ["new", "contacted", "closed"];

  if (!allowedStatuses.includes(status)) return;

  const collection =
    type === "quote"
      ? "quote_submissions"
      : type === "contact"
      ? "contact_submissions"
      : "";

  if (!collection) return;

  const db = await getMongoDb();

  await db.collection(collection).updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        status,
        updatedAt: new Date(),
      },
    }
  );

  revalidatePath("/admin/dashboard");
}

function buildSearchFilter(search: string, status: string, fields: string[]) {
  const filter: any = {};

  if (status && status !== "all") {
    filter.status = status;
  }

  if (search) {
    filter.$or = fields.map((field) => ({
      [field]: { $regex: search, $options: "i" },
    }));
  }

  return filter;
}

function StatCard({
  title,
  value,
  color,
}: {
  title: string;
  value: number;
  color: string;
}) {
  return (
    <div
      style={{
        background: "white",
        border: "1px solid #e2e8f0",
        borderLeft: `6px solid ${color}`,
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)",
      }}
    >
      <p style={{ margin: 0, color: "#64748b", fontWeight: 700 }}>{title}</p>
      <p
        style={{
          margin: "10px 0 0",
          fontSize: "34px",
          fontWeight: 900,
          color: "#0f172a",
        }}
      >
        {value}
      </p>
    </div>
  );
}

function StatusForm({
  id,
  type,
  status,
}: {
  id: string;
  type: "quote" | "contact";
  status?: string;
}) {
  return (
    <form action={updateLeadStatus}>
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="type" value={type} />
      <select
        name="status"
        defaultValue={status || "new"}
        style={{
          padding: "8px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      >
        <option value="new">New</option>
        <option value="contacted">Contacted</option>
        <option value="closed">Closed</option>
      </select>
      <button
        type="submit"
        style={{
          marginLeft: "8px",
          background: "#2563eb",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Save
      </button>
    </form>
  );
}

function DeleteForm({
  id,
  type,
}: {
  id: string;
  type: "quote" | "contact";
}) {
  return (
    <form action={deleteLead}>
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="type" value={type} />
      <button
        type="submit"
        style={{
          background: "#dc2626",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </form>
  );
}
function LeadQuickActions({ phone }: { phone?: string }) {
  const cleanPhone = String(phone || "").replace(/\D/g, "");
  const whatsappPhone = cleanPhone.startsWith("0")
    ? `92${cleanPhone.slice(1)}`
    : cleanPhone;

  if (!cleanPhone) return null;

  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <a
        href={`tel:${cleanPhone}`}
        style={{
          background: "#2563eb",
          color: "white",
          padding: "7px 10px",
          borderRadius: "6px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "13px",
        }}
      >
        Call
      </a>

      <a
        href={`https://wa.me/${whatsappPhone}`}
        target="_blank"
        style={{
          background: "#16a34a",
          color: "white",
          padding: "7px 10px",
          borderRadius: "6px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "13px",
        }}
      >
        WhatsApp
      </a>
    </div>
  );
}
export default async function DashboardPage({
  searchParams,
}: {
  searchParams?: Promise<{
    q?: string;
    status?: string;
  }>;
}) {
  const db = await getMongoDb();

  const params = await searchParams;
  const search = String(params?.q || "").trim();
  const status = String(params?.status || "all");

  const quoteFilter = buildSearchFilter(search, status, [
    "name",
    "phone",
    "pickup",
    "delivery",
    "truckType",
    "serviceNeeded",
    "details",
  ]);

  const contactFilter = buildSearchFilter(search, status, [
    "name",
    "email",
    "phone",
    "message",
  ]);

  const quotesCollection = db.collection("quote_submissions");
  const contactsCollection = db.collection("contact_submissions");

  const quotes = await quotesCollection
    .find(quoteFilter)
    .sort({ createdAt: -1 })
    .toArray();

  const contacts = await contactsCollection
    .find(contactFilter)
    .sort({ createdAt: -1 })
    .toArray();

  const totalQuotes = await quotesCollection.countDocuments({});
  const totalContacts = await contactsCollection.countDocuments({});

  const quoteNew = await quotesCollection.countDocuments({ status: "new" });
  const contactNew = await contactsCollection.countDocuments({ status: "new" });

  const quoteContacted = await quotesCollection.countDocuments({ status: "contacted" });
  const contactContacted = await contactsCollection.countDocuments({ status: "contacted" });

  const quoteClosed = await quotesCollection.countDocuments({ status: "closed" });
  const contactClosed = await contactsCollection.countDocuments({ status: "closed" });

  const totalNew = quoteNew + contactNew;
  const totalContacted = quoteContacted + contactContacted;
  const totalClosed = quoteClosed + contactClosed;

  return (
    <div style={{ padding: "40px" }}>
      <h1>Admin Dashboard</h1>
     <a
  href="/api/admin/export-leads"
  style={{
    display: "inline-block",
    marginTop: "16px",
    background: "#16a34a",
    color: "white",
    padding: "10px 16px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
       }}
>
        Download Excel
       </a>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "16px",
          marginTop: "24px",
        }}
      >
        <StatCard title="Total Quote Leads" value={totalQuotes} color="#2563eb" />
        <StatCard title="Total Contact Leads" value={totalContacts} color="#16a34a" />
        <StatCard title="New Leads" value={totalNew} color="#f59e0b" />
        <StatCard title="Contacted Leads" value={totalContacted} color="#7c3aed" />
        <StatCard title="Closed Leads" value={totalClosed} color="#dc2626" />
      </div>

      <form
        method="GET"
        style={{
          marginTop: "24px",
          display: "flex",
          gap: "12px",
          alignItems: "center",
          flexWrap: "wrap",
          background: "white",
          padding: "16px",
          border: "1px solid #ddd",
          borderRadius: "10px",
        }}
      >
        <input
          type="text"
          name="q"
          defaultValue={search}
          placeholder="Search name, phone, city, message..."
          style={{
            minWidth: "320px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        />

        <select
          name="status"
          defaultValue={status}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <option value="all">All Status</option>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="closed">Closed</option>
        </select>

        <button
          type="submit"
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "10px 16px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Search
        </button>

        <Link
          href="/admin/dashboard"
          style={{
            background: "#64748b",
            color: "white",
            padding: "10px 16px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Reset
        </Link>
      </form>

      <p style={{ marginTop: "16px", color: "#475569" }}>
        Showing Quote Leads: <b>{quotes.length}</b> | Showing Contact Leads:{" "}
        <b>{contacts.length}</b>
      </p>

      <h2 style={{ marginTop: "30px" }}>Quote Leads</h2>

      <table border={1} cellPadding={10} style={{ marginTop: "20px", width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Pickup</th>
            <th>Pickup Date</th>
            <th>Dropoff</th>
            <th>Truck</th>
            <th>Service</th>
            <th>Details</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {quotes.map((quote: any) => {
            const id = quote._id.toString();

            return (
              <tr key={id}>
                <td>{quote.name}</td>
                <td>
               <div>{quote.phone}</div>
               <LeadQuickActions phone={quote.phone} />
               </td>
                <td>{quote.pickup}</td>
                <td>{quote.pickupDate}</td>
                <td>{quote.delivery}</td>
                <td>{quote.truckType}</td>
                <td>{quote.serviceNeeded}</td>
                <td>{quote.details}</td>
                <td>
                  <StatusForm id={id} type="quote" status={quote.status} />
                </td>
                <td>
                  <DeleteForm id={id} type="quote" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h2 style={{ marginTop: "50px" }}>Contact Leads</h2>

      <table border={1} cellPadding={10} style={{ marginTop: "20px", width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact: any) => {
            const id = contact._id.toString();

            return (
              <tr key={id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>
               <div>{contact.phone}</div>
               <LeadQuickActions phone={contact.phone} />
               </td>
                <td>{contact.message}</td>
                <td>
                  <StatusForm id={id} type="contact" status={contact.status} />
                </td>
                <td>
                  <DeleteForm id={id} type="contact" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}