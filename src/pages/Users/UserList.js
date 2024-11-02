import React from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "../../datas";
import { Link } from "react-router-dom";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./UserList.css";

export default function UserList() {
  const [userDatas, setUserDatas] = useState(userRows);

  const userDelete = userId => {
    setUserDatas(userDatas.filter(user => user.id !== userId))
  }

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="/" className="link">
            <div className="userListUser">
              <img src={params.row.avatar} className="userListImg" alt="img" />
              {params.row.username}
            </div>
          </Link>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 20,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transAction",
      headerName: "TransAction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListWrapper">
            <Link to={`/user/${params.row.id}`} className="link">
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlinedIcon 
            className="userListDelete" 
            onClick={() => userDelete(params.row.id)} />
          </div>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={userDatas}
        columns={columns}
        disableSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
      />
    </div>
  );
}
