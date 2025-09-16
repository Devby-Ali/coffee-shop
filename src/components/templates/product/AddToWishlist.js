"use client";
import React from "react";
import { CiHeart } from "react-icons/ci";

async function AddToWishlist() {
  const addToWishlist = async () => {
    console.log("add to Wishlist event handler");
  };

  return (
    <div onClick={addToWishlist}>
      <CiHeart />
      <a href="/">افزودن به علاقه مندی ها</a>
    </div>
  );
}

export default AddToWishlist;
