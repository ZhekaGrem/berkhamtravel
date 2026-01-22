import { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Berkham Private Travel & Concierge. Learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPolicy() {
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
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.subtitle}>Last updated: January 2026</p>
        </header>

        {/* Content */}
        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Introduction</h2>
            <p>
              Berkham Private Travel & Concierge LLP (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to
              protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or use our services.
            </p>
            <p>
              We understand that privacy is of utmost importance to our discerning clientele. Your trust
              is essential to us, and we handle your personal information with the highest level of care
              and discretion.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number, and other
                contact details you provide when making inquiries or booking services.
              </li>
              <li>
                <strong>Travel Preferences:</strong> Destination preferences, accommodation requirements,
                dietary restrictions, and other details necessary to customize your travel experience.
              </li>
              <li>
                <strong>Payment Information:</strong> Billing address and payment details processed
                through secure third-party payment providers.
              </li>
              <li>
                <strong>Communication Data:</strong> Records of correspondence between you and our team.
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser type, device information, and
                cookies when you visit our website.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <ul>
              <li>To provide and personalize our luxury travel and concierge services</li>
              <li>To process bookings, reservations, and payments</li>
              <li>To communicate with you regarding your inquiries and travel arrangements</li>
              <li>To send you relevant updates about your bookings and travel itineraries</li>
              <li>To improve our services and website functionality</li>
              <li>To comply with legal obligations and protect our rights</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share
              your information only in the following circumstances:
            </p>
            <ul>
              <li>
                <strong>Service Providers:</strong> With trusted partners such as hotels, airlines,
                yacht charters, and event organizers to fulfill your travel arrangements.
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to protect our legal rights.
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with any merger, acquisition, or
                sale of assets.
              </li>
            </ul>
            <p>
              All service providers are bound by confidentiality agreements and are required to handle
              your information with the same level of care we provide.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. These
              measures include:
            </p>
            <ul>
              <li>Encrypted data transmission (SSL/TLS)</li>
              <li>Secure server infrastructure</li>
              <li>Limited access to personal information on a need-to-know basis</li>
              <li>Regular security assessments and updates</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Cookies and Tracking</h2>
            <p>
              Our website uses cookies to enhance your browsing experience. Cookies are small text
              files stored on your device that help us understand how you use our website. You can
              control cookie preferences through your browser settings.
            </p>
            <p>We use cookies for:</p>
            <ul>
              <li>Essential website functionality</li>
              <li>Analytics to improve our services</li>
              <li>Remembering your preferences</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Your Rights</h2>
            <p>You have the following rights regarding your personal information:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Objection:</strong> Object to the processing of your data</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the details provided below.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to provide our services
              and fulfill the purposes outlined in this policy. We may also retain certain information
              as required by law or for legitimate business purposes.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>International Transfers</h2>
            <p>
              As a global travel service provider, we may transfer your information to countries
              outside your residence. We ensure that any such transfers comply with applicable data
              protection laws and that your information remains protected.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on
              this page with an updated revision date. We encourage you to review this policy
              periodically.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or wish to exercise your rights,
              please contact us:
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
              This Privacy Policy is governed by the laws of England and Wales.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
