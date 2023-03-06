import client from "./client";

const assignAdmin = async (id: string) => {
  await client.patch(`/api/admin/assign-admin/${id}`);
};

const assignStaff = async (id: string) => {
  await client.patch(`/api/admin/assign-staff/${id}`);
};

export default { assignAdmin, assignStaff };
