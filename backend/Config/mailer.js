import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  auth: {
    user: process.env.BREVO_USER,
    pass: process.env.BREVO_PASS,
  },
});

export const sendBookingCancelEmail = async (to, name, flightTitle) => {
  const mailOptions = {
    from: `"FlyZone Support" <${process.env.BREVO_USER}>`,
    to,
    subject: "Flight Booking Cancelled | FlyZone",
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: auto;">
        <h2 style="color: #d32f2f;">Hello ${name},</h2>
        
        <p>We noticed that your booking for <strong>${flightTitle}</strong> was not completed within the required time.</p>
        
        <p>As per our policy, all bookings must be paid for within <strong>30 minutes</strong> of placement. Since we didn't receive the payment in time, your booking has been <strong>automatically cancelled</strong> and your reserved seat has been released.</p>

        <p>If this was a mistake or you still wish to travel on this route, feel free to revisit our site and make a new booking at your convenience.</p>

        <hr style="margin: 30px 0;" />

        <p style="font-size: 15px;">Need help or have any questions? Our support team is here for you — just reply to this email or contact us via our Help Center.</p>

        <p>Thank you for choosing FlyZone. We hope to see you onboard soon!</p>

        <br />

        <p style="font-weight: bold;">– The FlyZone Team</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};