"use client";

import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-xl leading-relaxed text-left text-foreground">
      <h1 className="text-2xl font-semibold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        Revival Dream LLC is committed to protecting the privacy of users and
        clients. This Privacy Policy explains how we collect, use, and safeguard
        your personal data in accordance with applicable privacy laws.
      </p>

      <h2 className="text-lg font-medium mt-8 mb-2">
        1. Information We Collect
      </h2>
      <p className="mb-4">
        We may collect personal data such as names, email addresses, phone
        numbers, company information, IP addresses, and usage data when you:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Request information or quotes from us</li>
        <li>Subscribe to our communications</li>
        <li>Use our website or digital services</li>
        <li>Enter into a commercial agreement with us</li>
      </ul>

      <h2 className="text-lg font-medium mt-8 mb-2">2. Use of Information</h2>
      <p className="mb-4">
        We use the information collected for the following purposes:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>To provide and improve our services</li>
        <li>To respond to inquiries and provide customer support</li>
        <li>To send commercial communications (with consent)</li>
        <li>To comply with legal obligations and contractual duties</li>
      </ul>

      <h2 className="text-lg font-medium mt-8 mb-2">
        3. Sharing of Information
      </h2>
      <p className="mb-4">
        We do not sell your data. We may share your information with trusted
        third parties for the purpose of delivering our services, including:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Service providers (e.g., hosting, analytics, email platforms)</li>
        <li>Legal or regulatory authorities when required by law</li>
        <li>Business partners under confidentiality agreements</li>
      </ul>

      <h2 className="text-lg font-medium mt-8 mb-2">4. Data Retention</h2>
      <p className="mb-4">
        We retain personal data only for as long as necessary to fulfill the
        purposes outlined in this policy or as required by law. Upon request, we
        may delete or anonymize data unless retention is legally required.
      </p>

      <h2 className="text-lg font-medium mt-8 mb-2">5. Security Measures</h2>
      <p className="mb-4">
        We implement industry-standard technical and organizational measures to
        protect personal data against unauthorized access, loss, or misuse.
      </p>

      <h2 className="text-lg font-medium mt-8 mb-2">6. Your Rights</h2>
      <p className="mb-4">
        Depending on your jurisdiction, you may have the right to:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Access, correct, or delete your personal data</li>
        <li>Withdraw consent to data processing</li>
        <li>Object to certain data uses or request data portability</li>
        <li>Lodge a complaint with a data protection authority</li>
      </ul>

      <h2 className="text-lg font-medium mt-8 mb-2">7. Cookies and Tracking</h2>
      <p className="mb-4">
        We may use cookies and similar technologies to improve user experience,
        analyze usage, and provide relevant advertising. Users can manage cookie
        preferences through browser settings.
      </p>

      <h2 className="text-lg font-medium mt-8 mb-2">
        8. International Transfers
      </h2>
      <p className="mb-4">
        Your information may be stored and processed in countries where we or
        our service providers operate. We ensure adequate protections are in
        place for such transfers in accordance with applicable laws.
      </p>

      <h2 className="text-lg font-medium mt-8 mb-2">
        9. Changes to This Policy
      </h2>
      <p className="mb-4">
        We reserve the right to update this Privacy Policy at any time. Any
        changes will be published on this page with a revised “Last Updated”
        date.
      </p>

      <h2 className="text-lg font-medium mt-8 mb-2">10. Contact</h2>
      <p className="mb-4">
        For questions or concerns about this Privacy Policy or our data
        practices, please contact us at:{" "}
        <a href="mailto:sales@revivaldream.com" className="underline">
          sales@revivaldream.com
        </a>
        .
      </p>

      <p className="mt-10 text-muted">
        Last updated: {new Date().toLocaleDateString("en-US")}
      </p>
    </div>
  );
}
