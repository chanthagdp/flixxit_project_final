import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/api/getall");
      setUsers(response.data);
    };

    fetchData();
  }, []);

  const deleteUser = async (userId) => {
    await axios
      .delete(`http://localhost:8000/api/delete/${userId}`)
      .then((respones) => {
        setUsers((prevUser) => prevUser.filter((user) => user._id !== userId));
        toast.success(respones.data.msg, { position: "top-right" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="">
        <Link to={"/add"} className="btn btn-primary">
          Add User
        </Link>
        <hr />
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>User name</th>
              <th>User Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>
                    {user.fname} {user.lname}
                  </td>
                  <td>{user.email}</td>
                  <td>
                    <div class="d-flex flex-row bd-highlight mb-2">
                      <div class="p-2 bd-highlight">
                        <Link to={`/edit/` + user._id}>
                          <i
                            className="fa fa-pencil mr-2 text-warning"
                            aria-hidden="true"
                          ></i>
                        </Link>
                      </div>
                      <div class="p-2 bd-highlight">
                        <Link>
                          <i
                            className="fa fa-trash text-danger"
                            aria-hidden="true"
                            onClick={() => deleteUser(user._id)}
                          ></i>
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default User;
