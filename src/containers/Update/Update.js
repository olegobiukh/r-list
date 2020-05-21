import "./index.scss";

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import { useHistory } from "react-router-dom";
import Wrapper from "../../components/Wrapper";

const Update = ({ createUser, editUser, users, match }) => {
  let history = useHistory();

  const [data, setFormData] = useState({
    name: "",
    surname: "",
    desc: "",
  });
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    if (users.length === 0) {
      history.push("/r-list/");
    }

    const path = match.path;
    if (path.includes("update") && match.params.id) {
      const user = users.find((item) => item.id === +match.params.id);

      setFormData(user);
      setIsUpdate(true);
    }
  }, [users]);

  const formData = (event) =>
    setFormData({
      ...data,
      [event.target.name]: event.target.value,
    });

  const backToList = () => {
    history.push("/r-list/");
  };

  const updateUser = (event) => {
    event.preventDefault();

    if (isUpdate) {
      const id = match.params.id;
      editUser(id, data);
    } else {
      createUser(data);
    }

    setFormData({
      name: "",
      surname: "",
      desc: "",
    });

    history.push("/");
  };

  return (
    <Wrapper title={isUpdate ? "Update the user" : "Add a new user"}>
      <form className="col s12" onSubmit={updateUser}>
        <div className="row">
          <div className="input-field col s12">
            <input
              value={data.name}
              onChange={(e) => formData(e)}
              id="name"
              type="text"
              className="validate"
              name="name"
              required
            />
            <label className="active" htmlFor="name">
              Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              value={data.surname}
              onChange={(e) => formData(e)}
              id="surname"
              type="text"
              className="validate"
              name="surname"
              required
            />
            <label className="active" htmlFor="surname">
              Surname
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              value={data.desc}
              onChange={(e) => formData(e)}
              id="description"
              type="text"
              className="validate"
              name="desc"
              required
            />
            <label className="active" htmlFor="description">
              Description
            </label>
          </div>
        </div>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          {isUpdate ? "Update the user" : "Add new user"}
        </button>
        <button
          className="btn waves-effect blue lighten-2 update__button--back"
          type="button"
          name="action"
          onClick={() => backToList()}
        >
          Back
        </button>
      </form>
    </Wrapper>
  );
};

export default connect((state) => state, actions)(Update);
