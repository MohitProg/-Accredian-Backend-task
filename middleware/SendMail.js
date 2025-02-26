import { createTransport } from "nodemailer";

const transporter =  createTransport({
  host: "smtp.gmail.com",
  port:587,
  secure:false,
  auth: {
    user: "mohit.sharma327043@gmail.com",
    pass: "begiwskrdruoawck",
  },

  tls: {
    rejectUnauthorized: false // Prevents SSL issues
  }
});

export const SendReferralEmail = async (
  referralEmail,
  referralName,
  course,
  message,
  yourname,
  yourEmail
) => {
  console.log(referralEmail);
  try {
    const info = await transporter.sendMail({
      from: "mohit.sharma327043@gmail.com",
      to: referralEmail,
      subject: `${referralName} send a Course Refferal to you please check it  `,
      html: `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Refer & Earn</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            padding: 20px;
        }
        .header h1 {
            color: #333;
        }
        .content {
            text-align: center;
            padding: 20px;
        }
        .content p {
            font-size: 16px;
            color: #555;
        }
        .cta-button {
            display: inline-block;
            background-color: #ff6600;
            color: #ffffff;
            padding: 12px 20px;
            text-decoration: none;
            font-size: 18px;
            font-weight: bold;
            border-radius: 5px;
            margin-top: 20px;
        }
        .footer {
            text-align: center;
            font-size: 14px;
            color: #888;
            padding: 20px;
        }
        @media screen and (max-width: 600px) {
            .container {
                width: 90%;
            }
        }
    </style>
</head>
<body>

    <div class="container">
        <div class="header">
            <h1>🎉 Invite & Earn Rewards! 🎉</h1>
        </div>
        <div class="content">
            <p>Hello <strong>${referralName}</strong>,</p>
            <p>Your friend <strong>${yourname}</strong> has invited you to join <strong>Course</strong>! 🎊</p>

            <p>Sign up today and start earning exciting rewards!</p>
             <p>${message ? message : ""}</p>
            <a href="{{referralLink}}" class="cta-button">Join Now</a>
            <p style="margin-top: 20px;">Use this referral code: <strong>{{referralCode}}</strong></p>
        </div>
        <div class="footer">
            <p>Need help? Contact us at <a href="mohit.sharma327043@gmail.com">mohit.sharma327043@gmail.com</a></p>
            <p>© 2025 Accredian. All rights reserved.</p>
        </div>
    </div>

</body>
</html>
`,
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.log(error);
  }
};
