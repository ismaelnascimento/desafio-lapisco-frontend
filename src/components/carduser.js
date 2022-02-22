import React from "react";
import "../styles/components.css";

function Carduser({ user }) {
  return (
    <div className="app-comp__carduser">
      <img
        src={user?.picture?.large}
        alt={`Imagem de ${user?.name?.title} ${user?.name?.first} ${user?.name?.last}`}
      />

      <section>
        <h3>
          {user?.name?.title} {user?.name?.first} {user?.name?.last}
        </h3>
        <h5>
          {user?.gender === "female"
            ? "Feminino"
            : user?.gender === "male"
            ? "Masculino"
            : user?.gender}{" "}
          • {user?.dob?.age}
        </h5>
        <h5>{user?.phone}</h5>
        <p>{user?.email}</p>
      </section>
    </div>
  );
}

export default Carduser;
