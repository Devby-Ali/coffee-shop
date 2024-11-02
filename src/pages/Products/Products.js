import React from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { products } from "../../datas";
import { Link } from "react-router-dom";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Products.css";

export default function Product() {
  const [productDatas, setProductDatas] = useState(products);

  const productDelete = productId => {
    setProductDatas(productDatas.filter(product => product.id !== productId))
  }

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "title",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={`/product/${params.row.id}`} className="link">
            <div className="productListProduct">
              <img src={params.row.avatar} className="productListImg" alt="img" />
              {params.row.title}
            </div>
          </Link>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="productListWrapper">
            <Link to={`/product/${params.row.id}`} className="link">
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlinedIcon 
            className="productListDelete" 
            onClick={() => productDelete(params.row.id)} />
          </div>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={productDatas}
        columns={columns}
        disableSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 3,
            },
          },
        }}
        checkboxSelection
      />
    </div>
  );
}
