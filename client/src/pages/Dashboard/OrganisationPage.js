import React, { useEffect, useState } from "react";
import Layout from "./../../components/shared/Layout/Layout";
import moment from "moment";
import { useSelector } from "react-redux";
import API from "../../services/API";

const OrganisationPage = () => {
  // get current user
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  //find org records
  const getOrg = async () => {
    try {
      if (user?.role === "donar") {
        const { data } = await API.get("/inventory/get-orgnaisation");
        //   console.log(data);
        if (data?.success) {
          setData(data?.organisations);
        }
      }
      if (user?.role === "hospital") {
        const { data } = await API.get("/inventory/get-orgnaisation");
        //   console.log(data);
        if (data?.success) {
          setData(data?.organisations);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrg();
  }, [user]);

  return (
    <Layout>
      <div className="row">
        {data?.map((record) => (
          <div className="col-4">
            <div
              className="card text-white"
              style={{ width: "18rem", backgroundColor: "#27abcc" }}
            >
              <div key={record._id} className="card-body">
                <a className="text-decoration-none" href={record.website}>
                  <h5 className="card-title text-white">
                    {record.organisationName}
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

export default OrganisationPage;
