import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";
import moment from "moment";

const Hospitals = () => {
  const [data, setData] = useState([]);
  //find donar records
  const getDonars = async () => {
    try {
      const { data } = await API.get("/inventory/get-hospitals");
      //   console.log(data);
      if (data?.success) {
        setData(data?.hospitals);
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
          <div className="col-4">
            <div className="card" style={{ width: "18rem" }}>
              <div key={record._id} className="card-body">
                <a href={record.website}><h5 className="card-title">{record.hospitalName}</h5></a>
                <h6 className="card-subtitle mb-2 text-muted">{record.email}</h6>
                <p className="card-text">{record.phone}</p>
                <a href={record.website}>{record.website}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Hospitals;
