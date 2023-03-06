import client from "./client";

const getAllReview = async () => {
  return await client.get("/api/review");
};

const postNewReview = async (data: any) => {
  await client.post("/api/review", data);
};

const deleteReview = async (id: string) => {
  await client.delete(`/api/review/${id}`);
};

export default {
  getAllReview,
  postNewReview,
  deleteReview,
};
