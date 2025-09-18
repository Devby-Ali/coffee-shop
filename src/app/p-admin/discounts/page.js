import React from "react";
import Layout from "@/components/layouts/AdminPanelLayout";
import styles from "@/components/templates/p-admin/users/table.module.css";
import Table from "@/components/templates/p-admin/users/Table";
import connectToDB from "@/configs/db";
import DiscountModel from "@/models/Discount";

const page = async () => {
  connectToDB();
  const discounts = await DiscountModel.find({}).lean();

  return (
    <Layout>
      {discounts.length !== 0 ? (
        <h1>Off Code</h1>
      ) : (
        <h1>کد تخفیف وجود ندارد</h1>
      )}
    </Layout>
  );
};

export default page;
