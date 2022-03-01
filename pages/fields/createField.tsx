import { NextPage } from "next";
import React from "react";
import withAuth from "../../components/higherOrder/withAuth";

const createField: NextPage = () => {
  return (
    <div className="container mt-2">
      <form className="form">
        <h2>Create Field</h2>
        <input type="text" className="form-control" placeholder="name"/>
        <input type="text" className="form-control" placeholder="address"/>
      </form>
    </div>
  );
};

export default withAuth(createField);
