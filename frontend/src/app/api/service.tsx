import client from "./client";

const getServices = () => client.get("/api/service");

const addNewService = async (data: any) => {
  await client.post("/api/service", data);
};

const deleteService = async (id: string) => {
  await client.delete(`/api/service/${id}`);
};

export default { getServices, addNewService, deleteService };
