import React, { useEffect, useMemo, useState } from "react";

import Carduser from "../components/carduser";
import InputSearch from "../components/inputSearch";

import axios from "../services/axios";

import { FaRegSadCry } from "react-icons/fa";

import "../styles/layouts.css";

function Listusers() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      await axios.get(`/?results=26`).then((response) => {
        setUsers(response?.data?.results);
      });
    };

    fetchUsers();
  }, []);

  const searchusers = useMemo(() => {
    return users?.filter((user) => {
      const nameuser = `${user?.name?.title} ${user?.name?.first} ${user?.name?.last}`;
      return nameuser
        ?.toLocaleLowerCase()
        ?.includes(search?.toLocaleLowerCase());
    });
  }, [users, search]);

  return (
    <div className="app-listusers">
      <InputSearch placeholder={""} set={setSearch} value={search} />

      <div className="app-listusers-itens">
        {searchusers?.length > 0 ? (
          searchusers?.map((user) => <Carduser user={user} />)
        ) : (
          <div className="app-listusers__not-users">
            <FaRegSadCry /> Nenhum usuário encontrado
          </div>
        )}
      </div>
    </div>
  );
}

export default Listusers;
