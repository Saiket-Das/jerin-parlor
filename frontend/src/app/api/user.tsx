import client from "./client";

type registerProps = {
  userInfo: {
    name: string;
    email: string;
    password: string;
  };
};

const register = ({ userInfo }: registerProps) =>
  client.post("/api/auth/register", userInfo);

export default { register };
