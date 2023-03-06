import client from "./client";

type Props = {
  email: string;
  password: string;
};

const signin = ({ email, password }: Props) =>
  client.post("/api/auth/login", { email, password });

export default { signin };
