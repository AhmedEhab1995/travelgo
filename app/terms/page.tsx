import Breadcrumb from "@/components/breadcrumb";

export default function TermsPage() {
  return (
    <div className="container py-16">
      <Breadcrumb items={[{ label: "Terms and Conditions" }]} />

      <h1 className="text-4xl font-bold mb-8 text-center">
        Terms and Conditions
      </h1>

      <div className="max-w-4xl mx-auto prose prose-headings:text-black prose-headings:font-bold prose-p:text-gray-600">
        <p className="lead">
          Please read these terms and conditions carefully before using the
          services offered by Zenith Travel Agency. By accessing or using our
          services, you agree to be bound by these terms and conditions.
        </p>

        <h2>1. Booking and Payment</h2>
        <p>
          1.1. A non-refundable deposit of 25% of the total tour cost is
          required to confirm your booking.
        </p>
        <p>
          1.2. Full payment is due 60 days prior to departure. Bookings made
          within 60 days of departure require full payment at the time of
          booking.
        </p>
        <p>
          1.3. Payment can be made by credit card, bank transfer, or other
          specified methods. All payments must be made in the currency indicated
          in your invoice.
        </p>

        <h2>2. Cancellation Policy</h2>
        <p>
          2.1. Cancellations must be submitted in writing and are subject to the
          following fees:
        </p>
        <ul>
          <li>60+ days before departure: Loss of deposit</li>
          <li>59–30 days: 50% of total tour cost</li>
          <li>29–15 days: 75% of total tour cost</li>
          <li>14 days or less: 100% of total tour cost</li>
        </ul>
        <p>
          2.2. No refunds will be provided for unused portions of a tour once it
          has commenced.
        </p>

        <h2>3. Travel Insurance</h2>
        <p>
          3.1. Travel insurance is mandatory and must cover injury, medical
          expenses, evacuation, cancellation, and loss of personal effects.
        </p>
        <p>
          3.2. Proof of insurance may be requested at any time, and failure to
          provide it may result in denial of service.
        </p>

        <h2>4. Passport, Visas, and Health Requirements</h2>
        <p>
          4.1. Clients must hold valid passports (minimum six months’ validity)
          and required visas for all destinations.
        </p>
        <p>
          4.2. Clients are responsible for meeting health requirements and
          obtaining vaccinations.
        </p>
        <p>
          4.3. Zenith Travel Agency is not liable for losses due to
          non-compliance with passport, visa, or health rules.
        </p>

        <h2>5. Tour Changes and Cancellations</h2>
        <p>
          5.1. Zenith Travel Agency may modify or cancel arrangements due to
          unforeseen circumstances (e.g., weather, political issues, force
          majeure).
        </p>
        <p>
          5.2. In such cases, we will offer an equivalent alternative or a full
          refund.
        </p>

        <h2>6. Liability and Responsibility</h2>
        <p>
          6.1. We act as agents for third-party providers and are not liable for
          issues caused by them.
        </p>
        <p>
          6.2. We are not responsible for delays, sickness, weather, strikes, or
          other unforeseen disruptions.
        </p>

        <h2>7. Client Behavior and Responsibility</h2>
        <p>
          7.1. Clients must respect local customs, laws, and fellow travelers.
        </p>
        <p>
          7.2. We reserve the right to remove disruptive or unsafe individuals
          from a tour.
        </p>

        <h2>8. Photography and Marketing</h2>
        <p>
          8.1. We may take photos or videos during tours for promotional use.
          Clients consent unless they opt out in writing before departure.
        </p>

        <h2>9. Governing Law</h2>
        <p>
          9.1. These terms are governed by Egyptian law and subject to the
          jurisdiction of Egyptian courts.
        </p>

        <h2>10. Updates to Terms and Conditions</h2>
        <p>
          10.1. Terms may be updated at any time. Changes will be posted on our
          website. Clients are encouraged to review them regularly.
        </p>

        <p className="text-sm text-gray-500 mt-8">
          Last updated: April 12, 2025
        </p>
      </div>
    </div>
  );
}
