import { useEffect } from "react";
import { X, ShieldCheck } from "lucide-react";

export default function PrivacyPolicyModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-3 sm:p-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-policy-title"
        className="
          relative
          flex
          w-full
          max-w-4xl
          max-h-[92vh]
          flex-col
          overflow-hidden
          rounded-2xl
          bg-white
          shadow-2xl
        "
      >
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-slate-200 px-4 py-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
              <ShieldCheck size={21} />
            </div>

            <div className="min-w-0">
              <h2
                id="privacy-policy-title"
                className="truncate text-lg font-semibold text-slate-900 sm:text-xl"
              >
                Privacy Policy
              </h2>

              <p className="text-xs text-slate-500 sm:text-sm">
                Mayleen Nutricare
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Privacy Policy"
            className="
              ml-3
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              text-slate-500
              transition
              hover:bg-slate-100
              hover:text-slate-900
              active:scale-95
            "
          >
            <X size={22} />
          </button>
        </div>

        {/* Policy Content */}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-5 sm:px-7 sm:py-7">
          <article className="mx-auto max-w-3xl text-sm leading-7 text-slate-700 sm:text-[15px]">

            <h1 className="mb-5 text-2xl font-bold text-slate-900 sm:text-3xl">
              Mayleen Nutricare Privacy Policy
            </h1>

            <p className="mb-5">
              Mayleennutricare values the trust you place in us. That's why we
              insist upon the highest standards for secure transactions and
              customer information privacy. Please read the following statement
              to learn about our information gathering and dissemination
              practices.
            </p>

            <div className="mb-7 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
              <strong>Note:</strong> Our privacy policy is subject to change at
              any time without notice. To make sure you are aware of any
              changes, please review this policy periodically.
            </div>

            <p className="mb-5">
              By visiting this Website you agree to be bound by the terms and
              conditions of this Privacy Policy. If you do not agree please do
              not use or access our Website.
            </p>

            <p className="mb-8">
              By more use of the Website, you expressly consent to our use and
              disclosure of your personal information in accordance with this
              Privacy Policy. This Privacy Policy is incorporated into and
              subject to the Terms of Use.
            </p>

            {/* 1 */}
            <section className="mb-8">
              <h3 className="mb-3 text-lg font-bold text-slate-900">
                1. Collection of Personally Identifiable Information and other
                Information
              </h3>

              <p>
                When you use our Website, we collect and store your personal
                information which is provided by you from time to time. Our
                primary goal in doing so is to provide you a safe, efficient,
                smooth and customized experience. This allows us to provide
                services and features that most likely meet your needs, and to
                customize our Website to make your experience safer and easier.
                More importantly, while doing so we collect personal information
                from you that we consider necessary for achieving this purpose.
              </p>

              <p className="mt-4">
                In general, you can browse the Website without telling us who
                you are or revealing any personal information about yourself.
                Once you give us your personal information, you are not
                anonymous to us. Where possible, we indicate which fields are
                required and which fields those are optional. You always have
                the option to not provide information by choosing not to use a
                particular service or feature on the Website.
              </p>

              <p className="mt-4">
                We may automatically track certain information about you based
                upon your behaviour on our Website. We use this information to
                do internal research on our user's demographics, interests, and
                behaviour to better understand, protect and serve our users.
                This information is compiled and analysed on an aggregated
                basis.
              </p>

              <p className="mt-4">
                This information may include the URL that you just came from
                (whether this URL is on our Website or not), which URL you next
                go to (whether this URL is on our Website or not), your computer
                browser information, and your IP address.
              </p>
            </section>

            {/* 2 */}
            <section className="mb-8">
              <h3 className="mb-3 text-lg font-bold text-slate-900">
                2. Use of Demographic / Profile Data /Your Information
              </h3>

              <p>
                We use personal information to provide the services you request.
                To the extent we use your personal information to market to you,
                we will provide you the ability to opt-out of such uses.
              </p>

              <p className="mt-4">
                In our efforts to continually improve our product and service
                offerings, we collect and analyse demographic and profile data
                about our users' activity on our Website.
              </p>

              <p className="mt-4">
                We identify and use your IP address to help diagnose problems
                with our server, and to administer our Website. Your IP address
                is also used to help identify you and to gather broad
                demographic information.
              </p>
            </section>

            {/* 3 */}
            <section className="mb-8">
              <h3 className="mb-3 text-lg font-bold text-slate-900">
                3. Cookies
              </h3>

              <p>
                A "cookie" is a small piece of information stored by a web
                server on a web browser so it can be later read back from that
                browser. Cookies are useful for enabling the browser to remember
                information specific to a given user.
              </p>

              <p className="mt-4">
                We place both permanent and temporary cookies in your computer's
                hard drive. The cookies do not contain any of your personally
                identifiable information.
              </p>
            </section>

            {/* 4 */}
            <section className="mb-8">
              <h3 className="mb-3 text-lg font-bold text-slate-900">
                4. Sharing of personal information
              </h3>

              <p>
                We may disclose personal information if required to do so by law
                or in the good faith belief that such disclosure is reasonably
                necessary to respond to subpoenas, court orders, or other legal
                process.
              </p>

              <p className="mt-4">
                We may disclose personal information to law enforcement offices,
                third party rights owners, or others in the good faith belief
                that such disclosure is reasonably necessary to enforce our
                Terms or Privacy Policy.
              </p>

              <p className="mt-4">
                We and our affiliates will share / sell some or all of your
                personal information with another business entity should we (or
                our assets) plan to merge with, or be acquired by that business
                entity, or re-organization, amalgamation, restructuring of
                business.
              </p>

              <p className="mt-4">
                Should such a transaction occur that other business entity (or
                the new combined entity) will be required to follow this privacy
                policy with respect to your personal information.
              </p>
            </section>

            {/* 5 */}
            <section className="mb-8">
              <h3 className="mb-3 text-lg font-bold text-slate-900">
                5. Links to Other Sites
              </h3>

              <p>
                Our Website may link to other websites that may collect
                personally identifiable information about you.
              </p>
            </section>

            {/* 6 */}
            <section className="mb-8">
              <h3 className="mb-3 text-lg font-bold text-slate-900">
                6. Security Precautions
              </h3>

              <p>
                Our Website has stringent security measures as applicable to
                protect the loss, misuse, and alteration of the information
                under our control. Once your information is in our possession
                we adhere to strict security guidelines, protecting it against
                unauthorized access.
              </p>
            </section>

            {/* 7 */}
            <section className="mb-8">
              <h3 className="mb-3 text-lg font-bold text-slate-900">
                7. Your Consent
              </h3>

              <p>
                By using the Website and/ or by providing your information, you
                consent to the collection and use of the information you disclose
                on the Website in accordance with this Privacy Policy, including
                but not limited to your consent for sharing your information as
                per this privacy policy.
              </p>

              <p className="mt-4">
                If we decide to change our privacy policy, we will post those
                changes on this page so that you are always aware of what
                information we collect, how we use it, and under what
                circumstances we disclose it.
              </p>
            </section>

            {/* 8 */}
            <section className="mb-4">
              <h3 className="mb-3 text-lg font-bold text-slate-900">
                8. Contact details
              </h3>

              <p className="mb-4">
                If you have any questions about this privacy statement, the
                practices of this site or your dealings with this website, you
                can contact us:
              </p>

              <div className="rounded-xl bg-slate-50 p-4 sm:p-5">
                <p className="font-semibold text-slate-900">
                  MayleenNuticare Pvt Ltd
                </p>

                <p className="mt-2">
                  Vijaya nagar colony
                </p>

                <p className="mt-2">
                  Email: support@MayleenNuticare.com
                </p>

                <p className="mt-2">
                  Phone: 1800-2744-700
                </p>
              </div>
            </section>

            <div className="mt-8 border-t border-slate-200 pt-5 text-xs leading-6 text-slate-500">
              Source: Mayleen Nutricare official Privacy Policy.
            </div>
          </article>
        </div>

        {/* Footer */}
        <div className="flex shrink-0 justify-end border-t border-slate-200 px-4 py-3 sm:px-6">
          <button
            type="button"
            onClick={onClose}
            className="
              rounded-lg
              bg-slate-900
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-slate-800
              active:scale-[0.98]
            "
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}