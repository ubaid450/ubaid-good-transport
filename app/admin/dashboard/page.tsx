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

export default async function DashboardPage() {
  const db = await getMongoDb();

  const quotes = await db
    .collection("quote_submissions")
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  const contacts = await db
    .collection("contact_submissions")
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  return (
    <div style={{ padding: "40px" }}>
      <h1>Admin Dashboard</h1>

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
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {quotes.map((quote: any) => (
            <tr key={quote._id.toString()}>
              <td>{quote.name}</td>
              <td>{quote.phone}</td>
              <td>{quote.pickup}</td>
              <td>{quote.pickupDate}</td>
              <td>{quote.delivery}</td>
              <td>{quote.truckType}</td>
              <td>{quote.serviceNeeded}</td>
              <td>{quote.details}</td>
              <td>
                <form action={deleteLead}>
                  <input type="hidden" name="id" value={quote._id.toString()} />
                  <input type="hidden" name="type" value="quote" />
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
              </td>
            </tr>
          ))}
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
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact: any) => (
            <tr key={contact._id.toString()}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>{contact.message}</td>
              <td>
                <form action={deleteLead}>
                  <input type="hidden" name="id" value={contact._id.toString()} />
                  <input type="hidden" name="type" value="contact" />
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}