import connectToDB from "@/configs/db";
import OtpModel from "@/models/Otp";

export async function POST(req) {
  connectToDB();
  const body = await req.json();
  const { phone, code } = body;

  // Validation (You) ✅

  const otp = await OtpModel.findOne({ phone, code });

  if (otp) {
    const date = new Date();
    const now = date.getTime();

    if (otp.expTime > now) {
      return Response.json({ message: "Code is correct :))" }, { status: 200 });
    } else {
      return Response.json({ message: "Code is expired :))" }, { status: 410 });
    }
  } else {
    return Response.json(
      { message: "Code is not correct !!" },
      { status: 409 }
    );
  }
}
