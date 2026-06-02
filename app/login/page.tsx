export default function LoginPage() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Admin Login</h1>

      <form method="POST" action="/api/admin/login">
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
        />
        <br />
        <br />

        <input
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <br />
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}