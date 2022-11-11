const OrderList = () => {
  return (
    <div className="bg-white p-4">
      <div className="overflow-x-auto ">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="bg-base-300">No</th>
              <th className="bg-base-300">Name</th>
              <th className="bg-base-300">Email</th>
              <th className="bg-base-300">Service</th>
              <th className="bg-base-300">Pay with</th>
              <th className="bg-base-300">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Ahan Bryan</td>
              <td>ahanbryan@gmail.com</td>
              <td>Hair Treatment</td>
              <td>Credit card</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
