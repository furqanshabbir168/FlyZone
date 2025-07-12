import { Inngest } from "inngest";
import userModel from "../Models/userModel.js";
import bookingModel from "../Models/bookingModel.js";

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
    const fifteenMinuteLater = new Date(Date.now() + 15 * 60 * 1000); // change to 15 * 60 * 1000 later
    await step.sleepUntil("wait-for-1-min", fifteenMinuteLater);

    await step.run("check-and-delete-booking", async () => {
      const bookingId = event.data.bookingId;
      const booking = await bookingModel.findById(bookingId);
      if (booking && !booking.paymentStatus) {
        await bookingModel.findByIdAndDelete(bookingId);
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
