import Link from "next/link";
import { revalidatePath } from "next/cache";
import { ObjectId } from "mongodb";
import { getMongoDb } from "@/lib/mongodb";

async function getCollection(type: string) {
  return type === "quote"
    ? "quote_submissions"
    : type === "contact"
    ? "contact_submissions"
    : "";
}

async function deleteLead(formData: FormData) {
  "use server";
  const id = String(formData.get("id") || "");
  const type = String(formData.get("type") || "");
  if (!id || !ObjectId.isValid(id)) return;

  const collection = await getCollection(type);
  if (!collection) return;

  const db = await getMongoDb();
  await db.collection(collection).deleteOne({ _id: new ObjectId(id) });
  revalidatePath("/admin/dashboard");
}

async function updateLeadStatus(formData: FormData) {
  "use server";
  const id = String(formData.get("id") || "");
  const type = String(formData.get("type") || "");
  const status = String(formData.get("status") || "new");
  if (!id || !ObjectId.isValid(id)) return;
  if (!["new", "contacted", "closed"].includes(status)) return;

  const collection = await getCollection(type);
  if (!collection) return;

  const db = await getMongoDb();
  await db.collection(collection).updateOne(
    { _id: new ObjectId(id) },
    { $set: { status, updatedAt: new Date() } }
  );
  revalidatePath("/admin/dashboard");
}

async function updateLeadNote(formData: FormData) {
  "use server";
  const id = String(formData.get("id") || "");
  const type = String(formData.get("type") || "");
  const note = String(formData.get("note") || "").trim();
  if (!id || !ObjectId.isValid(id)) return;

  const collection = await getCollection(type);
  if (!collection) return;

  const db = await getMongoDb();
  await db.collection(collection).updateOne(
    { _id: new ObjectId(id) },
    { $set: { note, updatedAt: new Date() } }
  );
  revalidatePath("/admin/dashboard");
}

async function updateFollowUp(formData: FormData) {
  "use server";
  const id = String(formData.get("id") || "");
  const type = String(formData.get("type") || "");
  const followUpDate = String(formData.get("followUpDate") || "");
  const followUpNote = String(formData.get("followUpNote") || "").trim();
  if (!id || !ObjectId.isValid(id)) return;

  const collection = await getCollection(type);
  if (!collection) return;

  const db = await getMongoDb();
  await db.collection(collection).updateOne(
    { _id: new ObjectId(id) },
    { $set: { followUpDate, followUpNote, updatedAt: new Date() } }
  );
  revalidatePath("/admin/dashboard");
}

function buildSearchFilter(search: string, status: string, fields: string[]) {
  const filter: any = {};
  if (status && status !== "all") filter.status = status;
  if (search) {
    filter.$or = fields.map((field) => ({
      [field]: { $regex: search, $options: "i" },
    }));
  }
  return filter;
}

function StatCard({ title, value, color }: { title: string; value: number; color: string }) {
  return (
    <div style={{ background: "white", border: "1px solid #e2e8f0", borderLeft: `6px solid ${color}`, borderRadius: 12, padding: 20, boxShadow: "0 10px 25px rgba(15,23,42,.08)" }}>
      <p style={{ margin: 0, color: "#64748b", fontWeight: 700 }}>{title}</p>
      <p style={{ margin: "10px 0 0", fontSize: 34, fontWeight: 900, color: "#0f172a" }}>{value}</p>
    </div>
  );
}

function StatusForm({ id, type, status }: { id: string; type: "quote" | "contact"; status?: string }) {
  return (
    <form action={updateLeadStatus}>
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="type" value={type} />
      <select name="status" defaultValue={status || "new"} style={{ padding: 8, borderRadius: 6, border: "1px solid #ccc" }}>
        <option value="new">New</option>
        <option value="contacted">Contacted</option>
        <option value="closed">Closed</option>
      </select>
      <button type="submit" style={{ marginLeft: 8, background: "#2563eb", color: "white", border: "none", padding: "8px 12px", borderRadius: 6, cursor: "pointer" }}>Save</button>
    </form>
  );
}

function NoteForm({ id, type, note }: { id: string; type: "quote" | "contact"; note?: string }) {
  return (
    <form action={updateLeadNote}>
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="type" value={type} />
      <textarea name="note" defaultValue={note || ""} placeholder="Add note..." rows={3} style={{ width: 220, padding: 8, borderRadius: 6, border: "1px solid #ccc", fontSize: 13 }} />
      <br />
      <button type="submit" style={{ marginTop: 6, background: "#0f766e", color: "white", border: "none", padding: "7px 12px", borderRadius: 6, cursor: "pointer", fontWeight: "bold" }}>Save Note</button>
    </form>
  );
}

function FollowUpForm({ id, type, followUpDate, followUpNote }: { id: string; type: "quote" | "contact"; followUpDate?: string; followUpNote?: string }) {
  return (
    <form action={updateFollowUp}>
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="type" value={type} />
      <input type="date" name="followUpDate" defaultValue={followUpDate || ""} style={{ width: 155, padding: 7, borderRadius: 6, border: "1px solid #ccc" }} />
      <br />
      <textarea name="followUpNote" defaultValue={followUpNote || ""} placeholder="Follow-up note..." rows={2} style={{ marginTop: 6, width: 220, padding: 7, borderRadius: 6, border: "1px solid #ccc", fontSize: 13 }} />
      <br />
      <button type="submit" style={{ marginTop: 6, background: "#9333ea", color: "white", border: "none", padding: "7px 12px", borderRadius: 6, cursor: "pointer", fontWeight: "bold" }}>Save Follow-up</button>
    </form>
  );
}

function DeleteForm({ id, type }: { id: string; type: "quote" | "contact" }) {
  return (
    <form action={deleteLead}>
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="type" value={type} />
      <button type="submit" style={{ background: "#dc2626", color: "white", border: "none", padding: "8px 12px", borderRadius: 6, cursor: "pointer" }}>Delete</button>
    </form>
  );
}

function LeadQuickActions({ phone }: { phone?: string }) {
  const cleanPhone = String(phone || "").replace(/\D/g, "");
  const whatsappPhone = cleanPhone.startsWith("0") ? `92${cleanPhone.slice(1)}` : cleanPhone;
  if (!cleanPhone) return null;
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 6 }}>
      <a href={`tel:${cleanPhone}`} style={{ background: "#2563eb", color: "white", padding: "7px 10px", borderRadius: 6, textDecoration: "none", fontWeight: "bold", fontSize: 13 }}>Call</a>
      <a href={`https://wa.me/${whatsappPhone}`} target="_blank" style={{ background: "#16a34a", color: "white", padding: "7px 10px", borderRadius: 6, textDecoration: "none", fontWeight: "bold", fontSize: 13 }}>WhatsApp</a>
    </div>
  );
}

function FollowUpBox({ title, leads, color }: { title: string; leads: any[]; color: string }) {
  return (
    <div style={{ marginTop: 24, background: "white", border: `2px solid ${color}`, borderRadius: 12, padding: 16 }}>
      <h2 style={{ marginTop: 0 }}>{title}</h2>
      {leads.length === 0 ? <p>No follow-ups.</p> : null}
      {leads.map((lead) => (
        <div key={`${lead.type}-${lead._id}`} style={{ borderTop: "1px solid #e2e8f0", paddingTop: 10, marginTop: 10 }}>
          <b>{lead.name || "No Name"}</b> — {lead.phone || lead.email || ""}
          <p style={{ margin: "6px 0" }}><b>Date:</b> {lead.followUpDate}</p>
          <p style={{ margin: 0 }}>{lead.followUpNote || lead.note || ""}</p>
        </div>
      ))}
    </div>
  );
}

export default async function DashboardPage({ searchParams }: { searchParams?: Promise<{ q?: string; status?: string }> }) {
  const db = await getMongoDb();
  const params = await searchParams;
  const search = String(params?.q || "").trim();
  const status = String(params?.status || "all");

  const quoteFilter = buildSearchFilter(search, status, ["name", "phone", "pickup", "delivery", "truckType", "serviceNeeded", "details", "note", "followUpNote"]);
  const contactFilter = buildSearchFilter(search, status, ["name", "email", "phone", "message", "note", "followUpNote"]);

  const quotesCollection = db.collection("quote_submissions");
  const contactsCollection = db.collection("contact_submissions");

  const quotes = await quotesCollection.find(quoteFilter).sort({ createdAt: -1 }).toArray();
  const contacts = await contactsCollection.find(contactFilter).sort({ createdAt: -1 }).toArray();

  const totalQuotes = await quotesCollection.countDocuments({});
  const totalContacts = await contactsCollection.countDocuments({});
  const totalNew = (await quotesCollection.countDocuments({ status: "new" })) + (await contactsCollection.countDocuments({ status: "new" }));
  const totalContacted = (await quotesCollection.countDocuments({ status: "contacted" })) + (await contactsCollection.countDocuments({ status: "contacted" }));
  const totalClosed = (await quotesCollection.countDocuments({ status: "closed" })) + (await contactsCollection.countDocuments({ status: "closed" }));
  const totalLeads = totalQuotes + totalContacts;
  const conversionRate =
    totalLeads > 0 ? Math.round((totalClosed / totalLeads) * 100) : 0;

  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  const startOfWeek = new Date();
  startOfWeek.setDate(startOfWeek.getDate() - 7);
  startOfWeek.setHours(0, 0, 0, 0);

  const startOfMonth = new Date();
  startOfMonth.setDate(1);
  startOfMonth.setHours(0, 0, 0, 0);

  const todayQuotes = await quotesCollection.countDocuments({
    createdAt: { $gte: startOfToday },
  });
  const todayContacts = await contactsCollection.countDocuments({
    createdAt: { $gte: startOfToday },
  });

  const weekQuotes = await quotesCollection.countDocuments({
    createdAt: { $gte: startOfWeek },
  });
  const weekContacts = await contactsCollection.countDocuments({
    createdAt: { $gte: startOfWeek },
  });

  const monthQuotes = await quotesCollection.countDocuments({
    createdAt: { $gte: startOfMonth },
  });
  const monthContacts = await contactsCollection.countDocuments({
    createdAt: { $gte: startOfMonth },
  });

  const todayLeads = todayQuotes + todayContacts;
  const weekLeads = weekQuotes + weekContacts;
  const monthLeads = monthQuotes + monthContacts;
  const today = new Date().toISOString().slice(0, 10);

  const allFollowUps = [
    ...quotes.map((q: any) => ({ ...q, type: "quote" })),
    ...contacts.map((c: any) => ({ ...c, type: "contact" })),
  ].filter((lead: any) => lead.followUpDate);

  const todayFollowUps = allFollowUps.filter((lead: any) => lead.followUpDate === today);
  const overdueFollowUps = allFollowUps.filter((lead: any) => lead.followUpDate < today && lead.status !== "closed");

  return (
    <div style={{ padding: 40 }}>
      <h1>Admin Dashboard</h1>

      <a href="/api/admin/export-leads" style={{ display: "inline-block", marginTop: 16, background: "#16a34a", color: "white", padding: "10px 16px", borderRadius: 8, textDecoration: "none", fontWeight: "bold" }}>Download Excel</a>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginTop: 24 }}>
        <StatCard title="Total Quote Leads" value={totalQuotes} color="#2563eb" />
        <StatCard title="Total Contact Leads" value={totalContacts} color="#16a34a" />
        <StatCard title="New Leads" value={totalNew} color="#f59e0b" />
        <StatCard title="Contacted Leads" value={totalContacted} color="#7c3aed" />
       <StatCard title="Closed Leads" value={totalClosed} color="#dc2626" />

       <StatCard title="Total Leads" value={totalLeads} color="#0f172a" />
       <StatCard title="Conversion Rate %" value={conversionRate} color="#0891b2" />
       <StatCard title="Today Leads" value={todayLeads} color="#ea580c" />
       <StatCard title="Last 7 Days Leads" value={weekLeads} color="#4f46e5" />
       <StatCard title="This Month Leads" value={monthLeads} color="#65a30d" />

       </div>

      <FollowUpBox title="Today's Follow-Ups" leads={todayFollowUps} color="#f59e0b" />
      <FollowUpBox title="Overdue Follow-Ups" leads={overdueFollowUps} color="#dc2626" />

      <form method="GET" style={{ marginTop: 24, display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", background: "white", padding: 16, border: "1px solid #ddd", borderRadius: 10 }}>
        <input type="text" name="q" defaultValue={search} placeholder="Search name, phone, city, message, note..." style={{ minWidth: 320, padding: 10, border: "1px solid #ccc", borderRadius: 8 }} />
        <select name="status" defaultValue={status} style={{ padding: 10, border: "1px solid #ccc", borderRadius: 8 }}>
          <option value="all">All Status</option>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="closed">Closed</option>
        </select>
        <button type="submit" style={{ background: "#2563eb", color: "white", border: "none", padding: "10px 16px", borderRadius: 8, cursor: "pointer", fontWeight: "bold" }}>Search</button>
        <Link href="/admin/dashboard" style={{ background: "#64748b", color: "white", padding: "10px 16px", borderRadius: 8, textDecoration: "none", fontWeight: "bold" }}>Reset</Link>
      </form>

      <p style={{ marginTop: 16, color: "#475569" }}>
        Showing Quote Leads: <b>{quotes.length}</b> | Showing Contact Leads: <b>{contacts.length}</b>
      </p>

      <h2 style={{ marginTop: 30 }}>Quote Leads</h2>
      <table border={1} cellPadding={10} style={{ marginTop: 20, width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th><th>Phone</th><th>Pickup</th><th>Pickup Date</th><th>Dropoff</th><th>Truck</th><th>Service</th><th>Details</th><th>Status</th><th>Note</th><th>Follow-up</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map((quote: any) => {
            const id = quote._id.toString();
            return (
              <tr key={id}>
                <td>{quote.name}</td>
                <td><div>{quote.phone}</div><LeadQuickActions phone={quote.phone} /></td>
                <td>{quote.pickup}</td><td>{quote.pickupDate}</td><td>{quote.delivery}</td><td>{quote.truckType}</td><td>{quote.serviceNeeded}</td><td>{quote.details}</td>
                <td><StatusForm id={id} type="quote" status={quote.status} /></td>
                <td><NoteForm id={id} type="quote" note={quote.note} /></td>
                <td><FollowUpForm id={id} type="quote" followUpDate={quote.followUpDate} followUpNote={quote.followUpNote} /></td>
                <td><DeleteForm id={id} type="quote" /></td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h2 style={{ marginTop: 50 }}>Contact Leads</h2>
      <table border={1} cellPadding={10} style={{ marginTop: 20, width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Phone</th><th>Message</th><th>Status</th><th>Note</th><th>Follow-up</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact: any) => {
            const id = contact._id.toString();
            return (
              <tr key={id}>
                <td>{contact.name}</td><td>{contact.email}</td>
                <td><div>{contact.phone}</div><LeadQuickActions phone={contact.phone} /></td>
                <td>{contact.message}</td>
                <td><StatusForm id={id} type="contact" status={contact.status} /></td>
                <td><NoteForm id={id} type="contact" note={contact.note} /></td>
                <td><FollowUpForm id={id} type="contact" followUpDate={contact.followUpDate} followUpNote={contact.followUpNote} /></td>
                <td><DeleteForm id={id} type="contact" /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}