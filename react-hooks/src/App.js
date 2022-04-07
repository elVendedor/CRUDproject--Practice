import React, { useState } from "react";
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";
import UserTable from "./tables/UserTable";

const App = () => {
  const usersData = [
    { id: 1, name: "Jesus", username: "jesusmanuel170" },
    { id: 2, name: "Joao", username: "joaovasquez2007" },
    { id: 3, name: "Arthur", username: "arthur2011" },
  ];
  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "", email: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updateUser : user)));
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit User</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users}  editRow={editRow} deleteUser={deleteUser}  />
        </div>
      </div>
    </div>
  );
};

export default App;
