import React, { Fragment } from "react";
import Head from "next/head";

import { CardListUsers } from "@/components/card-list/card-list.users.component";
import { getAllUsers } from "@/backend-helpers/users-api-utils";

const ShowAllUsers = (props) => {
  const allUsers = props.selectedUsers;

  return (
    <Fragment>
      <div className="container mt-5 mb-5 ms-auto me-auto">
        <div className="row">
          <div className="col-sm-12 text-center border border-3 border-info rounded-pill mb-3">
            <h1>Repliq E-STore Admin Panel</h1>
          </div>
          <div className="category-title badge mb-0 pb-0 col-sm-12 text-center">
            All Users List
          </div>
        </div>
      </div>
      <CardListUsers users={allUsers} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const allUsers = await getAllUsers();
  if (!allUsers) {
    return {
      redirect: {
        destination: "/error",
      },
    };
  } else {
    return {
      props: {
        selectedUsers: allUsers,
      },
      revalidate: 3600,
    };
  }
};

export default ShowAllUsers;
