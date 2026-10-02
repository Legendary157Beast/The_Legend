import React, { useEffect } from "react";
import { X, FileText } from "lucide-react";

export default function TermsConditionsModal({ onClose }) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-3 sm:p-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="terms-conditions-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
              <FileText size={21} />
            </div>

            <div className="min-w-0">
              <h2
                id="terms-conditions-title"
                className="truncate text-lg font-semibold text-slate-900 sm:text-xl"
              >
                Terms & Conditions
              </h2>

              <p className="text-xs text-slate-500 sm:text-sm">
                Mayleen Nutricare
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Terms & Conditions"
            className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
          >
            <X size={21} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-4 py-5 text-sm leading-7 text-slate-700 sm:px-7 sm:py-6">
          <p className="mb-5">
            Please read the following terms and conditions very carefully as
            your use of service is subject to your acceptance of and compliance
            with the following terms and conditions ("Terms").
          </p>

          <p className="mb-5">
            By subscribing to or using any of our services you agree that you
            have read, understood and are bound by the Terms, regardless of how
            you subscribe to or use the services.
          </p>

          <p className="mb-6">
            In these Terms, references to "you" or "User" shall mean the end
            user accessing the website, its contents and using the services
            offered through the website. "We", "us" and "our" shall mean
            Mayleen Nutricare Pvt Ltd (MNC) and its authorized affiliates.
          </p>

          <section className="space-y-6">
            <div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                1. Introduction
              </h3>
              <p>
                www.mayleennutricare.com is an Internet based content and
                e-commerce portal owned and operated by MNC. Use of the Website
                is offered to you on acceptance without modification of all the
                terms, conditions and notices contained in these Terms, as may
                be posted on the Website from time to time.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                2. User Account, Password and Security
              </h3>
              <p className="mb-2">
                Upon completing the registration process the user will receive
                a password and account designation. The user is responsible for
                maintaining the confidentiality of the password and account,
                and is fully responsible for all activities that occur under
                the user's password or account.
              </p>
              <p>
                Users should immediately notify{" "}
                <a
                  href="mailto:support@mayleennutricare.com"
                  className="font-medium text-emerald-700 underline"
                >
                  support@mayleennutricare.com
                </a>{" "}
                of any unauthorized use of their password or account or any
                other breach of security.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                3. Services
              </h3>
              <p>
                Mayleennutricare.com provides internet based services through
                the Website. One such service enables users to order products
                such as health care, personal care, food & beverages, skin care
                products and other Products. Upon placing an order, MNC shall
                arrange shipment of the product(s) upon successful realization
                of payment for the Services.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                4. Privacy Policy
              </h3>
              <p>
                The User consents and agrees that he/she has read and fully
                understands the Privacy Policy of mayleennutricare.com in
                respect of the Website and its contents.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                5. Limited User
              </h3>
              <p>
                The eligibility of use of the service of the Website and its
                contents is limited to a registered user. The User agrees not
                to alter, modify, copy, reproduce, distribute, transfer,
                transmit, display, publish, license, create derivative works,
                or sell information or software obtained from the Website.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                6. User Conduct and Rules
              </h3>

              <p className="mb-3">
                Users agree to use the Website and related social media
                platforms only to post and upload messages and material
                relevant to the service and business undertaken and promoted by
                MNC.
              </p>

              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Defame, abuse, harass, stalk, threaten or otherwise violate
                  the legal rights of other users or any individual.
                </li>
                <li>
                  Publish, post, upload, distribute or otherwise provide
                  inappropriate, profane, derogatory, obscene, indecent or
                  unlawful material.
                </li>
                <li>
                  Upload files containing information, software or other
                  material protected by intellectual property laws.
                </li>
                <li>
                  Upload or distribute files containing viruses, corrupted
                  files or other software capable of causing damage.
                </li>
                <li>
                  Conduct surveys, contests, pyramid schemes or chain letters.
                </li>
                <li>
                  Falsify or delete author attributions, legal notices or
                  proprietary designations.
                </li>
                <li>
                  Violate any applicable code of conduct or other guidelines.
                </li>
                <li>
                  Violate these Terms or other terms and conditions applicable
                  to use of the Website.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                7. User Content
              </h3>
              <p>
                The user guarantees and certifies that the user owns or is
                authorized to use content submitted or uploaded and that the
                content does not infringe the property, intellectual property
                or other rights of others.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                8. Exactitude of Products
              </h3>
              <p>
                Mayleen Nutricare states that it ensures the quality of its
                products and customer satisfaction. Where expectations are not
                met, replacement or refund will be handled according to the
                applicable Product Return Policy.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                9. Intellectual Property Rights
              </h3>
              <p>
                Mayleennutricare.com owns the intellectual property rights in
                and to the Website, including copyrights, trademarks, trade
                names, service marks, designs, know-how, trade secrets, source
                code, databases, text, content, graphics, icons and hyperlinks.
                Users shall not use, reproduce or distribute Website content
                belonging to Mayleennutricare.com without authorization.
              </p>

              <p className="mt-3">
                Users retain ownership of content they provide or upload while
                using the services and remain responsible for that content.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                10. Links to Third Party Sites
              </h3>
              <p>
                The Website may contain links to other websites that are not
                under the control of Mayleennutricare.com. MNC is not
                responsible for the contents, changes, updates or transmissions
                associated with such linked sites. Links are provided for
                convenience and do not imply endorsement.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                11. Disclaimer and Limitation of Liability
              </h3>
              <p>
                Mayleennutricare.com endeavors to ensure that information on
                the Website is correct but does not warrant or represent the
                quality, accuracy or completeness of data, information,
                products or services.
              </p>

              <p className="mt-3">
                MNC states that it shall not be liable for damages resulting
                from use or inability to use the Services, unauthorized access
                or alteration of transmissions or data, or other matters
                relating to the Services, subject to the terms stated on the
                official Website.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                12. Indemnification
              </h3>
              <p>
                The user agrees to indemnify, defend and hold harmless
                Mayleennutricare.com from losses, liabilities, claims, damages,
                costs and expenses arising from breach or non-performance of
                representations, warranties, covenants or obligations under
                these Terms.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                13. Pricing
              </h3>
              <p>
                Product prices are described on the Website, product catalogue
                or other applicable mediums and are incorporated into these
                Terms by reference. All prices are in Indian rupees. Prices,
                products and Services may change at Mayleennutricare's
                discretion from time to time.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                14. Shipping
              </h3>
              <p>
                Title and risk of loss for products ordered by the user shall
                pass to the user upon shipment to the shipping carrier or
                logistics partner.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                15. Termination
              </h3>
              <p>
                Mayleennutricare.com may suspend or terminate use of the Website
                or any Service if it believes, in its discretion, that the user
                has breached one or more Terms.
              </p>

              <p className="mt-3">
                The user remains liable to pay for products or services already
                ordered up to the time of termination.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                16. Governing Law
              </h3>
              <p>
                The Terms are governed and construed in accordance with the
                laws of India. The official Terms page states that disputes
                arising in relation to the Terms shall be subject to the
                exclusive jurisdiction of the courts at Hyderabad.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                17. Headings
              </h3>
              <p>
                Headings and subheadings are included for convenience and
                identification only and are not intended to limit or define the
                scope of the Terms.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                18. Severability
              </h3>
              <p>
                If any provision of the Terms is determined to be invalid or
                unenforceable, that provision or part of the provision will be
                affected while the remaining provisions continue in force.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                19. Report Abuse
              </h3>
              <p>
                Users are responsible for material or content uploaded to the
                Website or related social media platforms. If you come across
                abuse or a violation of these Terms, it may be reported to{" "}
                <a
                  href="mailto:support@mayleennutricare.com"
                  className="font-medium text-emerald-700 underline"
                >
                  support@mayleennutricare.com
                </a>
                .
              </p>
            </div>
          </section>

          {/* Source */}
          <div className="mt-8 border-t border-slate-200 pt-5 text-xs leading-6 text-slate-500">
            <p>
              Source: Official Mayleen Nutricare Terms & Conditions.
            </p>
            <a
              href="https://mayleennutricare.com/terms"
              target="_blank"
              rel="noreferrer"
              className="break-all font-medium text-emerald-700 underline"
            >
              https://mayleennutricare.com/terms
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}