import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Red Oxygen</h3>
          <hr />
          <div>
            <h2>Dear Blood Donation Platform Administrators</h2>
            <p>
              Welcome to the heart of our blood donation community! As stewards
              of this vital platform, you play a pivotal role in fostering a
              culture of compassion, collaboration, and impact. Your dedication
              to efficiently coordinating blood donors with recipients, managing
              our real-time blood inventory, and engaging donors through
              streamlined registration and personalized communication is
              commendable. Our commitment to secure and compliant data
              management reflects our utmost respect for donor privacy and
              regulatory standards. By ensuring the highest standards of data
              security, you are building and maintaining trust within our
              dynamic and growing donor community.
            </p>
            <p>
              As administrators, your role extends beyond the digital realm. By
              driving awareness campaigns, educational initiatives, and actively
              engaging with local organizations, healthcare providers, and
              volunteers, you contribute to the broader mission of saving lives
              through regular blood donation. The emergency response readiness
              you bring to the platform is crucial.
            </p>
            <p>
              This platform's success is a testament to your dedication. We
              encourage you to leverage data analytics tools for insightful
              decision-making and to continuously enhance the user experience by
              incorporating user feedback and embracing a user-centered design
              approach. Your role in ensuring regulatory compliance,
              scalability, accessibility, sustainability, and long-term
              viability is instrumental. By implementing a comprehensive
              maintenance plan and exploring revenue generation options, you
              contribute to the lasting impact and growth of our blood donation
              platform.
            </p>{" "}
            <h3> With gratitude,</h3>
            <h2>RED OXYGEN Administration Team</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
