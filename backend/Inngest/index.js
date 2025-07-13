import { Inngest } from "inngest";
import userModel from "../Models/userModel.js";
import bookingModel from "../Models/bookingModel.js";
import { sendBookingCancelEmail } from "../Config/mailer.js";
import flightModel from "../Models/flightModel.js";

// Create a client to send and receive events
export const inngest = new Inngest({
  id: "fly-zone",
});

// Clerk: create user
const syncUserCreation = inngest.createFunction(
  { id: "sync-user-from-clerk" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } = event.data;
    await userModel.create({
      _id: id,
      name: `${first_name} ${last_name}`,
      email: email_addresses[0].email_address,
      image: image_url,
    });
  }
);

// Clerk: delete user
const syncUserDeletion = inngest.createFunction(
  { id: "delete-user-with-clerk" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    const { id } = event.data;
    await userModel.findByIdAndDelete(id);
  }
);

// Clerk: update user
const syncUserUpdation = inngest.createFunction(
  { id: "update-user-with-clerk" },
  { event: "clerk/user.updated" },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } = event.data;
    await userModel.findByIdAndUpdate(id, {
      _id: id,
      name: `${first_name} ${last_name}`,
      email: email_addresses[0].email_address,
      image: image_url,
    });
  }
);

// Auto-delete unpaid booking after 15 minute
const autoDeleteUnpaidBooking = inngest.createFunction(
  { id: "auto-delete-unpaid-booking" },
  { event: "booking/placed" },
  async ({ event, step }) => {
    const thirtyMinuteLater = new Date(Date.now() + 1 * 60 * 1000);
    await step.sleepUntil("wait-30-min", thirtyMinuteLater);

    await step.run("check-booking-and-delete", async () => {
      const bookingId = event.data.bookingId;
      const userId = event.data.userId;

      const booking = await bookingModel.findById(bookingId);
      const user = await userModel.findById(userId);

      if (booking && !booking.paymentStatus) {
        // Fetch flight title using booking.flightId
        const flight = await flightModel.findById(booking.flightId);
        const flightTitle = flight?.title || "your flight";

        // Delete booking
        await bookingModel.findByIdAndDelete(bookingId);

        // Send cancellation email
        if (user?.email && user?.name) {
          await sendBookingCancelEmail(user.email, user.name, flightTitle);
          console.log("❌ Cancellation email sent to:", user.email);
        } else {
          console.log("⚠️ Could not find user to send email.");
        }
      }
    });
  }
);

// Export all functions
export const functions = [
  syncUserCreation,
  syncUserDeletion,
  syncUserUpdation,
  autoDeleteUnpaidBooking,
];
