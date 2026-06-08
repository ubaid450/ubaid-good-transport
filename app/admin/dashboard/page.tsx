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

export default async function DashboardPage({
  searchParams,
}: {
  searchParams?: {
    q?: string;
    status?: string;
  };
}) {
  const db = await getMongoDb();

  const search = String(searchParams?.q || "").trim();
  const status = String(searchParams?.status || "all");

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

  const quotes = await db
    .collection("quote_submissions")
    .find(quoteFilter)
    .sort({ createdAt: -1 })
    .toArray();

  const contacts = await db
    .collection("contact_submissions")
    .find(contactFilter)
    .sort({ createdAt: -1 })
    .toArray();

  return (
    <div style={{ padding: "40px" }}>
      <h1>Admin Dashboard</h1>

      <form
        method="GET"
        style={{
          marginTop: "20px",
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
        Quote Leads: <b>{quotes.length}</b> | Contact Leads: <b>{contacts.length}</b>
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
                <td>{quote.phone}</td>
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
                <td>{contact.phone}</td>
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