import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const defaultEmail = "admin@ubaidgoodstransport.com";
const defaultPassword = "admin12345";

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/admin"
  },
  providers: [
    Credentials({
      name: "Admin Login",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const email = String(credentials?.email || "");
        const password = String(credentials?.password || "");
        const adminEmail = process.env.ADMIN_EMAIL || defaultEmail;
        const adminPassword = process.env.ADMIN_PASSWORD || defaultPassword;
        const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;

        const validPassword = adminPasswordHash
          ? await bcrypt.compare(password, adminPasswordHash)
          : password === adminPassword;

        if (email === adminEmail && validPassword) {
          return {
            id: "admin",
            email: adminEmail,
            name: "Ubaid Goods Transport Admin"
          };
        }

        return null;
      }
    })
  ],
  trustHost: true,
  secret: process.env.AUTH_SECRET || "change-this-secret-before-production"
});
