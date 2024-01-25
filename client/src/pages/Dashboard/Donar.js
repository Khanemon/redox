import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";
// import moment from "moment";

const Donar = () => {
  const [data, setData] = useState([]);
  //find donar records
  const getDonars = async () => {
    try {
      const { data } = await API.get("/inventory/get-donars");
      //   console.log(data);
      if (data?.success) {
        setData(data?.donars);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDonars();
  }, []);

  return (
    <Layout>
      <div className="row">
        {data?.map((record) => (
          // <tr key={record._id}>
          //   <td>{record.name || record.organisationName + " (ORG)"}</td>
          //   <td>{record.email}</td>
          //   <td>{record.phone}</td>
          //   <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
          // </tr>
          <div className="col-4">
            <div className="card bg-info text-white" style={{ width: "18rem" }}>
              <div key={record._id} className="card-body">
                <h5 className="card-title">Name: {record.name}</h5>
                <h6 className="card-subtitle mb-1 text-white">
                  Phone: {record.phone}
                </h6>
                <h6 className="card-subtitle mb-1 text-white">
                  Email: {record.email}
                </h6>
                <div className="d-flex flex-row justify-content-between">
                  <h5>Blood Group: </h5>
                  <p className="card-text text-danger fw-bold fs-5">
                    {record.bloodGroup}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Donar;
