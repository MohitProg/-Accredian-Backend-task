import { PrismaClient } from "@prisma/client";
import { SendReferralEmail } from "../middleware/SendMail.js";
const prisma = new PrismaClient();

export const SendReferral = async (req, res) => {
  const { yourName, yourEmail, referredName, referredEmail, course,message,check } = req.body;
  console.log(req.body)
  try {
    if (!yourName || !yourEmail || !referredEmail || !referredName || !course ||!check) {
      return res.send({
        success: false,
        message: "please fill all the required field",
      });
    }

    const newReferral = await prisma.referral.create({
      data: {
        yourEmail,
        yourName,
        referredEmail,
        referredName,
        course,
        message,
        check
      },
    });

    await SendReferralEmail(referredEmail,referredName,course,message,yourName,yourEmail)

    console.log(newReferral)

    return res.send({ success: true, message: "Referral send successfully" });
  } catch (error) {
    console.log(error);
    return res.send({
        success: false,
        message: error.message,
      });
  }
};
