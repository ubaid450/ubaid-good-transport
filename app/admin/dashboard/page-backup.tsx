import { getMongoDb } from "@/lib/mongodb";

export default async function DashboardPage() {
  const db = await getMongoDb();

  const quotes = await db
    .collection("quote_submissions")
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  return (
    <div style={{ padding: "40px" }}>
      <h1>Admin Dashboard</h1>

      <table border={1} cellPadding={10} style={{ marginTop: "20px" }}>
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
    </div>
  );
}