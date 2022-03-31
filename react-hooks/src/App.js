import React, { useState } from "react";
import AddUserForm from "./AddUserForm";
import UserTable from "./tables/UserTable";

const App = () => {
  const usersData = [
    { id: 1, name: "Jesus", username: "jesusmanuel170" },
    { id: 2, name: "Joao", username: "joaovasquez2007" },
    { id: 3, name: "Arthur", username: "arthur2011" },
  ];
  const [users, setUsers] = useState(usersData);
 

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
};

export default App;
