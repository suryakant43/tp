import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        height: "100vh",
        padding: "20px",
        backgroundColor: "#232323",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        This project was generated by{" "}
        <a
          href="https://www.dhiwise.com"
          style={{ color: "#87CEFA", textDecoration: "none" }}
        >
          Dhiwise
        </a>
        . Quickly use the links below to navigate through all pages.
      </p>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/homepage"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            HomePage
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/skillspage"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            SkillsPage
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
