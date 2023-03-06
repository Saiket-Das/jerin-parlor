import client from "./client";

const login = (email: string, password: string) =>
  client.post("/api/auth/login", { email, password });

export default { login };
