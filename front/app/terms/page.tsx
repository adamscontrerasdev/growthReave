"use client";

import React from "react";

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-xl leading-relaxed text-left text-foreground">
      <h1 className="text-2xl font-semibold mb-6">Terms and Conditions</h1>

      <p className="mb-4">
        These Terms and Conditions govern access to and use of the digital
        marketing services provided by Revival Dream LLC. By hiring our
        services, the client agrees to be legally bound by these terms.
      </p>

      <h2 className="text-lg font-medium mt-8 mb-2">1. Scope of Services</h2>
      <p className="mb-4">
        The Company provides digital marketing solutions, including but not
        limited to: advertising campaigns, search engine optimization, social
        media management, digital content creation, marketing automation, and
        performance analytics.
      </p>

      <h2 className="text-lg font-medium mt-8 mb-2">2. Contracting and Term</h2>
      <p className="mb-4">
        Services are engaged through a written agreement or formal acceptance of
        a proposal issued by the Company. The duration is established in such
        agreement and may be automatically renewed unless written notice of
        cancellation is provided at least 30 days in advance.
      </p>

      <h2 className="text-lg font-medium mt-8 mb-2">
        3. Obligations of the Parties
      </h2>
      <p className="mb-2 font-medium">Company Obligations:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Deliver services with professionalism and efficiency.</li>
        <li>Provide regular updates and performance reports.</li>
        <li>Maintain confidentiality of all information received.</li>
      </ul>

      <p className="mb-2 font-medium">Client Obligations:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          Provide all necessary information, materials, and access required to
          deliver services.
        </li>
        <li>Pay agreed fees in a timely manner.</li>
        <li>
          Refrain from obstructing or interfering with the Company’s work.
        </li>
      </ul>

      <h2 className="text-lg font-medium mt-8 mb-2">
        4. Intellectual Property
      </h2>
      <p className="mb-4">
        All materials created by the Company as part of the service will become
        the property of the client upon full payment, unless otherwise agreed.
        The client ensures that all materials provided for use do not infringe
        on any third-party rights.
      </p>

      <h2 className="text-lg font-medium mt-8 mb-2">5. Confidentiality</h2>
      <p className="mb-4">
        Both parties agree to maintain strict confidentiality of all information
        obtained during the contractual relationship, including strategies,
        business data, technical or financial information.
      </p>

      <h2 className="text-lg font-medium mt-8 mb-2">
        6. Limitation of Liability
      </h2>
      <p className="mb-4">
        The Company shall not be liable for indirect damages, loss of profit, or
        data loss. Furthermore, it does not guarantee specific results, as
        services are subject to external variables beyond the Company’s control.
      </p>

      <h2 className="text-lg font-medium mt-8 mb-2">
        7. Cancellation and Termination
      </h2>
      <p className="mb-4">
        Either party may terminate the agreement with at least 30 days’ prior
        written notice. In cases of serious breach, termination may be immediate
        without entitlement to refund.
      </p>

      <h2 className="text-lg font-medium mt-8 mb-2">
        8. Governing Law and Jurisdiction
      </h2>
      <p className="mb-4">
        This agreement shall be governed by the laws of the State of Wyoming,
        United States. Any disputes shall be submitted to the competent courts
        located in Sheridan, WY.
      </p>

      <p className="mt-10 text-muted">
        Last updated: {new Date().toLocaleDateString("en-US")}
      </p>
    </div>
  );
}
