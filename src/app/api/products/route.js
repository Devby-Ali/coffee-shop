import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";
// import fs from "fs";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req) {
  try {
    connectToDB();
    const body = await req.json();
    const {
      name,
      price,
      shortDescription,
      longDescription,
      weight,
      suitableFor,
      smell,
      tags,
    } = body;

    const product = await ProductModel.create({
      name,
      price,
      shortDescription,
      longDescription,
      weight,
      suitableFor,
      smell,
      tags,
    });

    return Response.json(
      { message: "Product created successfully :))", data: product },
      { status: 201 }
    );
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}

// Image Uploader
export async function PUT(req) {
  const formData = await req.formData();
  const img = formData.get("img");

  // Validation
  if (!img) {
    return Response.json(
      { message: "Product has not image !!" },
      { status: 400 }
    );
  }

  try {
    const buffer = Buffer.from(await img.arrayBuffer());
    const filename = Date.now() + img.name;

    await writeFile(
      path.join(process.cwd(), "public/uploads/" + filename),
      buffer
    );

    // ✅
    return Response.json(
      { message: "File uploaded successfully :))" },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return Response.json({ message: err.message }, { status: 500 });
  }
}

export async function GET() {
  const products = await ProductModel.find({}, "-__v").populate("comments");
  return Response.json(products);
}
