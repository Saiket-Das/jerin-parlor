const OrderList = () => {
  return (
    <div className="bg-white p-4">
      <div className="overflow-x-auto ">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="bg-base-300 capitalize">No</th>
              <th className="bg-base-300 capitalize">Name</th>
              <th className="bg-base-300 capitalize">Email</th>
              <th className="bg-base-300 capitalize">Service</th>
              <th className="bg-base-300 capitalize">Pay with</th>
              <th className="bg-base-300 capitalize">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Ahan Bryan</td>
              <td>ahanbryan@gmail.com</td>
              <td>Hair Treatment</td>
              <td>Credit card</td>

              <select className="select  text-base font-normal ">
                <option selected>Pending</option>
                <option>Done</option>
              </select>
            </tr>

            <tr>
              <td>1</td>
              <td>Ahan Bryan</td>
              <td>ahanbryan@gmail.com</td>
              <td>Hair Treatment</td>
              <td>Credit card</td>

              <select className="select  text-base font-normal mt-1">
                <option selected>Pending</option>
                <option>Done</option>
              </select>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
