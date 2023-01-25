import React from "react";
import { CardUser } from "../card/user-card-admin";

export const CardListUsers = (props) => {
  const { users } = props;
  if (users == null) {
    return <h3>No User To Show</h3>;
  }
  return (
    <div className="container mt-5 mb-5 ms-auto me-auto">
      <div className="row">
        {users.map((user) => (
          <CardUser key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};
