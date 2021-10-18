import React from "react";

import TopHeader from "../components/TopHeader";
import FooterPage from "../components/FooterPage";
import RegisterForm from "../components/register/RegisterForm";

import "../assets/styles/Main.css";
import "../assets/styles/partials/PageRegister.css";

export default function Register() {
  return (
    <div id="page-register">
      <div id="container-register">
        
        <main>
          <div className="content-register">
            <RegisterForm />
          </div>
        </main>
      </div>
      <footer>
        <FooterPage />
      </footer>
    </div>
  );
}
