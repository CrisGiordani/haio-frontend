import React from "react";
import { useHistory } from "react-router-dom";
import { FiPower } from "react-icons/fi";

import "./styles.css";

export default function Profile(req, res) {
  const userName = '';
  const history = useHistory();

  async function handleLogout() {
    try {
      // BACKEND - LOGOUT
      localStorage.clear();
      history.push("/");
    } catch {
      alert("Erro ao fazer logout");
    }
  } 

  return (
    <div className="profile-container">
      <header>
        <span>Bem-vinda, {userName}</span>
        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>dados...</h1>

    </div>
  );
}
