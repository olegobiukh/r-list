import "./index.scss";

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import { useHistory } from "react-router-dom";
import uid from "uid";
import Pagination from "../../components/Pagination";
import Wrapper from "../../components/Wrapper";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";

const List = ({ getUsers, deleteUser, users }) => {
  console.log(users);
  
  let history = useHistory();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentUsers, setCurrentUsers] = useState(users);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const currentUsersHandler = () => {
    const from = currentPage === 1 ? 1 : (currentPage - 1) * 5 + 1;
    const to = currentPage * 5;
    const newUsers = users.filter(
      (item, index) => index + 1 >= from && index + 1 <= to
    );

    console.log(users);
    console.log(newUsers);
    console.log(from, to);

    setCurrentUsers(newUsers);
  };

  useEffect(() => {
    currentUsersHandler();
  }, [currentPage, users]);

  const handleEditUser = (id) => {
    history.push(`/r-list/update/${id}`);
  };

  const handleNewUser = () => {
    history.push(`/r-list/new`);
  };

  const body =
    currentUsers.length > 0
      ? currentUsers.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.surname}</td>
            <td>{item.desc}</td>
            <td>
              <button
                className="btn waves-effect blue lighten-2"
                type="button"
                name="action"
                onClick={() => handleEditUser(item.id)}
              >
                <FiEdit />
              </button>
            </td>
            <td>
              <button
                className="btn waves-effect red"
                type="button"
                name="action"
                onClick={() => deleteUser(item.id)}
              >
                <RiDeleteBin5Line />
              </button>
            </td>
          </tr>
        ))
      : null;
  console.log(users);

  const headers =
    users.length > 0
      ? Object.keys(users[0]).map((item) => {
          if (item !== "id") {
            return <th key={uid()}>{item}</th>;
          }
        })
      : null;

  const pagination =
    users.length > 0 ? (
      <Pagination
        users={users}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    ) : null;

  return (
    <Wrapper title="List">
      <table className={`responsive-table`}>
        <thead>
          <tr>
            {headers}
            <th>
              <button className="btn waves-effect blue lighten-2" type="button">
                <FiEdit />
              </button>
            </th>
            <th>
              <button className="btn waves-effect red" type="button">
                <RiDeleteBin5Line />
              </button>
            </th>
          </tr>
        </thead>
        <tbody>{body}</tbody>
      </table>
      {pagination}

      <button
        className="btn waves-effect waves-light list__button--new"
        type="button"
        name="action"
        onClick={handleNewUser}
      >
        New
      </button>
    </Wrapper>
  );
};

export default connect((state) => state, actions)(List);
