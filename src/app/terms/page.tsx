import { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Berkham Private Travel & Concierge. Please read these terms carefully before using our services.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsOfService() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <Link href="/" className={styles.backLink}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.subtitle}>Last updated: January 2026</p>
        </header>

        {/* Content */}
        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Agreement to Terms</h2>
            <p>
              Welcome to Berkham Private Travel & Concierge LLP. By accessing our website or using
              our services, you agree to be bound by these Terms of Service. If you do not agree
              with any part of these terms, please do not use our services.
            </p>
            <p>
              These Terms of Service govern your relationship with Berkham Private Travel & Concierge
              LLP and apply to all services we provide, including but not limited to travel planning,
              private aviation, yacht charters, hotel reservations, event access, and concierge services.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Our Services</h2>
            <p>
              Berkham Private Travel & Concierge provides bespoke luxury travel and lifestyle services,
              including:
            </p>
            <ul>
              <li>Private aviation charter arrangements</li>
              <li>Luxury yacht charter bookings</li>
              <li>Premium hotel and villa reservations</li>
              <li>Exclusive event access and VIP tickets</li>
              <li>Ground transportation and transfer services</li>
              <li>Personal concierge and lifestyle management</li>
              <li>Custom travel itinerary planning</li>
            </ul>
            <p>
              We act as an intermediary between you and third-party service providers. While we
              carefully select our partners, the actual services are provided by these third parties
              under their own terms and conditions.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Booking and Reservations</h2>
            <p>
              All bookings are subject to availability and confirmation. When you request a service:
            </p>
            <ul>
              <li>
                <strong>Inquiry:</strong> You submit a request outlining your requirements and
                preferences.
              </li>
              <li>
                <strong>Proposal:</strong> We provide a detailed proposal including services,
                pricing, and terms.
              </li>
              <li>
                <strong>Confirmation:</strong> Upon your acceptance and receipt of required
                deposits, the booking is confirmed.
              </li>
              <li>
                <strong>Documentation:</strong> You will receive confirmation documents and
                relevant travel information.
              </li>
            </ul>
            <p>
              Prices quoted are subject to change until a booking is confirmed and deposit is
              received. All prices are quoted in the currency specified and may be subject to
              currency fluctuations.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Payment Terms</h2>
            <p>Payment terms vary depending on the services booked:</p>
            <ul>
              <li>
                <strong>Deposits:</strong> A deposit (typically 30-50% of the total cost) is
                required to confirm most bookings.
              </li>
              <li>
                <strong>Final Payment:</strong> The balance is due according to the schedule
                outlined in your booking confirmation, typically 30-60 days before the service date.
              </li>
              <li>
                <strong>Late Payment:</strong> Late payments may result in booking cancellation
                and loss of deposit.
              </li>
              <li>
                <strong>Payment Methods:</strong> We accept bank transfers and major credit cards.
                Additional fees may apply for certain payment methods.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Cancellation Policy</h2>
            <p>
              Cancellation terms vary by service type and provider. General guidelines include:
            </p>
            <ul>
              <li>
                <strong>More than 60 days:</strong> Full refund minus administrative fees and any
                non-refundable supplier costs.
              </li>
              <li>
                <strong>30-60 days:</strong> 50% of the total booking cost may be refundable,
                subject to supplier terms.
              </li>
              <li>
                <strong>Less than 30 days:</strong> Bookings are generally non-refundable unless
                otherwise specified.
              </li>
              <li>
                <strong>No-show:</strong> No refund will be provided for no-shows.
              </li>
            </ul>
            <p>
              Specific cancellation terms will be provided with your booking confirmation. Some
              services, particularly private aviation and exclusive events, may have stricter
              cancellation policies.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Your Responsibilities</h2>
            <p>As a client, you are responsible for:</p>
            <ul>
              <li>Providing accurate and complete information for bookings</li>
              <li>Ensuring all travelers have valid travel documents (passports, visas, etc.)</li>
              <li>Meeting all health requirements and obtaining necessary vaccinations</li>
              <li>Adhering to the rules and regulations of service providers</li>
              <li>Obtaining appropriate travel insurance</li>
              <li>Arriving on time for scheduled services</li>
              <li>Informing us promptly of any changes to your requirements</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Travel Insurance</h2>
            <p>
              We strongly recommend that you obtain comprehensive travel insurance covering:
            </p>
            <ul>
              <li>Trip cancellation and interruption</li>
              <li>Medical expenses and emergency evacuation</li>
              <li>Lost or delayed baggage</li>
              <li>Personal liability</li>
              <li>Travel delays</li>
            </ul>
            <p>
              We can assist in arranging suitable travel insurance upon request. Travel insurance
              is your responsibility, and we are not liable for any losses resulting from
              inadequate coverage.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Limitation of Liability</h2>
            <p>
              While we exercise due care in selecting service providers, Berkham Private Travel &
              Concierge acts as an agent and is not liable for:
            </p>
            <ul>
              <li>Acts, omissions, or defaults of third-party service providers</li>
              <li>Delays, cancellations, or changes caused by circumstances beyond our control</li>
              <li>Personal injury, property damage, or loss unless caused by our negligence</li>
              <li>Force majeure events including natural disasters, war, terrorism, or pandemics</li>
            </ul>
            <p>
              Our liability, where applicable, is limited to the service fees paid directly to us,
              excluding third-party costs.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Intellectual Property</h2>
            <p>
              All content on our website, including text, graphics, logos, images, and software,
              is the property of Berkham Private Travel & Concierge or its content suppliers and
              is protected by intellectual property laws. You may not reproduce, distribute, or
              create derivative works without our express written permission.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Confidentiality</h2>
            <p>
              We understand the importance of discretion for our clientele. All personal
              information and travel arrangements are treated with the utmost confidentiality.
              We do not share client information with third parties except as necessary to
              fulfill your bookings or as required by law.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Modifications to Services</h2>
            <p>
              We reserve the right to modify or discontinue any service without prior notice.
              In the event of significant changes to confirmed bookings, we will notify you
              promptly and offer alternative arrangements or refunds as appropriate.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws
              of England and Wales. Any disputes arising from these terms or our services shall
              be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms of Service at any time. Changes will
              be effective immediately upon posting to our website. Your continued use of our
              services after any changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className={styles.contactBox}>
              <p><strong>Berkham Private Travel & Concierge LLP</strong></p>
              <p>5 Brayford Square, London, E1 0SG</p>
              <p>Email: <a href="mailto:office@berkhamtrvl.com">office@berkhamtrvl.com</a></p>
              <p>Phone: <a href="tel:+33679105270">+33 679 105 270</a></p>
            </div>
          </section>

          <div className={styles.footerNote}>
            <p>
              By using our services, you acknowledge that you have read, understood, and agree
              to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
