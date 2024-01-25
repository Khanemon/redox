import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";
// import moment from "moment";

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
            <div
              className="card text-white"
              style={{ width: "18rem", backgroundColor: "#c4161c" }}
            >
              <div key={record._id} className="card-body">
                <a className="text-decoration-none" href={record.website}>
                  <h5 className="card-title text-white">
                    {record.hospitalName}
                  </h5>
                </a>
                <p className="card-subtitle mb-2 text-white">{record.email}</p>
                <p className="card-text">{record.phone}</p>
                <a
                  className="text-black text-decoration-none fw-bold"
                  href={record.website}
                >
                  {record.website}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Hospitals;
