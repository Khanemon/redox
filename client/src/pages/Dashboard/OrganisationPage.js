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
              style={{ width: "18rem", backgroundColor: "#20c997" }}
            >
              <div key={record._id} className="card-body">
                <h5 className="card-title">{record.organisationName}</h5>
                <h6 className="card-subtitle mb-2 text-white">
                  {record.email}
                </h6>
                <p className="card-text text-white">{record.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default OrganisationPage;
