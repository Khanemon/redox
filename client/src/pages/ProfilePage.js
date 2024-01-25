import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/shared/Spinner";
import Layout from "../components/shared/Layout/Layout";
// import Modal from "../components/shared/modal/Modal";
import API from "../services/API";
// import moment from "moment";

const ProfilePage = () => {
  const { loading, error, user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setName(user?.name);
    setPhone(user?.phone);
    setBloodGroup(user?.bloodGroup);
  }, [user]);

  const updateData = async () => {
    try {
      const response = await API.post("/auth/profile", {
        name,
        phone,
        bloodGroup,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="container">
            <h4 className="ms-4 mt-2" style={{ cursor: "pointer" }}>
              Profile
            </h4>
            <div>
              <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                  <div className="col-md-3 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                      <img
                        className="rounded-circle mt-5"
                        width="150px"
                        src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                      />

                      <span className="font-weight-bold">{user?.name}</span>
                      <span className="text-black-50">{user?.email}</span>
                    </div>
                  </div>
                  <div className="col-md-9 border-right">
                    <div className="p-3 py-5">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4 className="text-right">Profile Settings</h4>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-12">
                          <label className="labels">Name</label>
                          <input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="enter full name "
                            value={name}
                          />
                        </div>
                        <div className="col-md-12">
                          <label className="labels">Mobile Number</label>
                          <input
                            onChange={(e) => setPhone(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="enter phone number"
                            value={phone}
                          />
                        </div>
                        <div className="col-md-12">
                          <label className="labels">Blood Group</label>
                          <select
                            className="form-control"
                            onChange={(e) => setBloodGroup(e.target.value)}
                          >
                            <option defaultValue={"enter your blood group"}>
                              select your blood group
                            </option>
                            <option
                              selected={user?.bloodGroup === "O+"}
                              value={"O+"}
                            >
                              O+
                            </option>
                            <option
                              selected={user?.bloodGroup === "O-"}
                              value={"O-"}
                            >
                              O-
                            </option>
                            <option
                              selected={user?.bloodGroup === "AB+"}
                              value={"AB+"}
                            >
                              AB+
                            </option>
                            <option
                              selected={user?.bloodGroup === "AB-"}
                              value={"AB-"}
                            >
                              AB-
                            </option>
                            <option
                              selected={user?.bloodGroup === "A+"}
                              value={"A+"}
                            >
                              A+
                            </option>
                            <option
                              selected={user?.bloodGroup === "A-"}
                              value={"A-"}
                            >
                              A-
                            </option>
                            <option
                              selected={user?.bloodGroup === "B+"}
                              value={"B+"}
                            >
                              B+
                            </option>
                            <option
                              selected={user?.bloodGroup === "B-"}
                              value={"B-"}
                            >
                              B-
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="mt-5 text-center">
                        <button
                          className="btn btn-primary profile-button"
                          type="button"
                          onClick={updateData}
                        >
                          Save Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default ProfilePage;
