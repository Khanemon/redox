import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";
import moment from "moment";

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
            <div className="card" style={{ width: "18rem" }}>
              <div key={record._id} className="card-body">
                <h5 className="card-title">{record.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{record.phone}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{record.email}</h6>
                <p className="card-text">{record.bloodGroup}</p>
              </div>
            </div>
          </div>
          ))}
      </div>
    </Layout>
  );
};

export default Donar;
