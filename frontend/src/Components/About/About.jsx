import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <section className="intro">
        <h1>Welcome to FlyZone — Your Gateway to the Sky</h1>
        <p>
          FlyZone is your all-in-one flight booking solution, born from a simple yet powerful idea:
          <strong> make travel effortless and exciting for everyone</strong>. Whether you're planning your dream vacation,
          a business trip, or a quick weekend getaway, FlyZone is here to help you take off with confidence.
        </p>
        <p>
          Since our launch, we've focused on providing a seamless and enjoyable booking experience for travelers across Pakistan and beyond.
          By combining cutting-edge technology with a human-first approach, we ensure that your journey begins on the right foot — before you even reach the airport.
        </p>
      </section>

      <section className="who-we-are">
        <h2>Who We Are</h2>
        <p>
          FlyZone is a digital travel platform built by a passionate team of developers, designers, and travel enthusiasts
          committed to simplifying the process of booking flights. Headquartered in Lahore, Pakistan, our team believes that air travel
          should be as exciting as the destination itself.
        </p>
        <p>
          We're not just another travel site. We're a mission-driven team on a journey to transform the way people experience
          flight bookings — using smart design, modern tech, and outstanding customer service.
        </p>
      </section>

      <section className="mission-vision">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make air travel accessible, efficient, and affordable for everyone. At FlyZone, we believe
          that whether you're flying for work or leisure, booking a ticket should be the easiest part of your trip.
        </p>
        <p>
          We aim to eliminate the stress and complexity of traditional flight booking by offering a clean user interface,
          real-time seat selection, fast loading speeds, and transparent pricing with no hidden charges.
        </p>
        <h2>Our Vision</h2>
        <p>
          We envision FlyZone as the leading travel-tech company in South Asia, known for reliability, innovation,
          and an unbeatable user experience. We want to connect people, places, and opportunities through modern digital travel solutions.
        </p>
        <p>
          In the long term, we plan to expand our services to include hotel bookings, travel insurance, loyalty programs, and more
          to make FlyZone a one-stop platform for all your travel needs.
        </p>
      </section>

      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>How does FlyZone work?</h3>
          <p>
            FlyZone connects travelers with flights from trusted airline partners. Just enter your trip details, explore available options,
            pick your preferred seat and time, and confirm your booking through our secure payment system.
          </p>
        </div>
        <div className="faq-item">
          <h3>What happens if I don’t complete payment in time?</h3>
          <p>
            Your selected seat will be reserved for 15 minutes. If payment is not completed within this time,
            the seat will be released to allow fair access to other users.
          </p>
        </div>
        <div className="faq-item">
          <h3>Can I cancel or change my booking?</h3>
          <p>
            Yes, depending on the airline’s policy. You can modify or cancel your booking through your dashboard.
            Refunds are processed in accordance with airline rules.
          </p>
        </div>
        <div className="faq-item">
          <h3>Is it safe to book and pay through FlyZone?</h3>
          <p>
            Absolutely. We use Stripe for secure payments and encrypt all personal information to protect your privacy.
            FlyZone does not store any sensitive payment data on its servers.
          </p>
        </div>
        <div className="faq-item">
          <h3>Will I get a ticket immediately after booking?</h3>
          <p>
            Yes! After successful payment, your booking confirmation and digital ticket will be sent instantly to your email.
            You can also download it anytime from your dashboard.
          </p>
        </div>
        <div className="faq-item">
          <h3>Can I contact support if I have an issue?</h3>
          <p>
            Of course! Our friendly support team is available six days a week. You can reach us via email, phone, or through the contact form.
          </p>
        </div>
      </section>

      <section className="privacy">
        <h2>Privacy Policy</h2>
        <p>
          We value your privacy. Here’s what we do to protect your data:
        </p>
        <ul>
          <li>We collect only essential user data required to process bookings.</li>
          <li>Your data is stored securely and is never sold to third parties.</li>
          <li>All payments are handled through encrypted, PCI-compliant gateways (like Stripe).</li>
          <li>We use cookies only to enhance your experience — not for third-party tracking.</li>
          <li>You may request your data to be updated or deleted at any time.</li>
        </ul>
        <p>
          By using FlyZone, you agree to our data handling practices as outlined above.
        </p>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>Need assistance? We’re here to help.</p>
        <p><strong>Email:</strong> flyzonecompany@gmail.com</p>
        <p><strong>Phone:</strong> +1-234-567-890</p>
        <p><strong>Support Hours:</strong> 9:00 AM – 9:00 PM (Monday – Saturday)</p>
        <p><strong>Office Address:</strong> Gulberg, Lahore, Pakistan</p>
        <p>Use the contact form on our website for faster responses and detailed support tickets.</p>
      </section>

      <section className="why-flyzone">
        <h2>Why Choose FlyZone?</h2>
        <ul>
          <li>
            <strong>Clean Interface:</strong> Book your flight in minutes with our clutter-free UI and intuitive navigation.
          </li>
          <li>
            <strong>Live Availability:</strong> Instantly see which seats are available, and hold them for 15 minutes while you finalize your booking.
          </li>
          <li>
            <strong>Secure Checkout:</strong> We use Stripe and follow modern security practices to ensure safe and fast transactions.
          </li>
          <li>
            <strong>Instant Email Confirmations:</strong> No waiting. You’ll receive your e-ticket the moment payment is confirmed.
          </li>
          <li>
            <strong>Smart Notifications:</strong> Stay updated with real-time email alerts for booking status, cancellations, and reminders.
          </li>
          <li>
            <strong>Real Human Support:</strong> Talk to a real person, not a bot. Our team is trained to handle your queries with care.
          </li>
        </ul>
        <p>
          FlyZone is built by travelers, for travelers. We know the value of time, money, and peace of mind. That’s why every feature we build
          is focused on enhancing your experience and helping you take flight, stress-free.
        </p>
      </section>
    </div>
  );
};

export default About;