import { getMongoDb } from "@/lib/mongodb";

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
          </tr>
        </thead>

        <tbody>
          {quotes.map((quote: any) => (
            <tr key={quote._id}>
              <td>{quote.name}</td>
              <td>{quote.phone}</td>
              <td>{quote.pickup}</td>
              <td>{quote.pickupDate}</td>
              <td>{quote.delivery}</td>
              <td>{quote.truckType}</td>
              <td>{quote.serviceNeeded}</td>
              <td>{quote.details}</td>
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
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact: any) => (
            <tr key={contact._id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>{contact.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}