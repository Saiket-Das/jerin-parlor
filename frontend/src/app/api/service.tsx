import client from "./client";

const getServices = () => client.get("/api/service");

export default { getServices };
