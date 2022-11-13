const OrderList = () => {
  return (
    <div className="bg-white p-4">
      <div className="overflow-x-auto ">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="bg-base-300 capitalize text-base">No</th>
              <th className="bg-base-300 capitalize text-base">Name</th>
              <th className="bg-base-300 capitalize text-base">Email</th>
              <th className="bg-base-300 capitalize text-base">Service</th>
              <th className="bg-base-300 capitalize text-base">Pay with</th>
              <th className="bg-base-300 capitalize text-base">Status</th>
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
