import React, { useEffect } from "react";
import { X, BriefcaseBusiness } from "lucide-react";

export default function DiscoverOpportunityModal({ onClose }) {
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
        aria-labelledby="discover-opportunity-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
              <BriefcaseBusiness size={21} />
            </div>

            <div className="min-w-0">
              <h2
                id="discover-opportunity-title"
                className="truncate text-lg font-semibold text-slate-900 sm:text-xl"
              >
                Discover MAYLEEN Opportunity
              </h2>

              <p className="text-xs text-slate-500 sm:text-sm">
                Mayleen Nutricare
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Discover"
            className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
          >
            <X size={21} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-4 py-5 sm:px-7 sm:py-6">
          <div className="mx-auto max-w-3xl">
            {/* Title */}
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Why{" "}
                <span className="text-emerald-700">MAYLEEN</span>{" "}
                Opportunity
              </h3>

              <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-emerald-600" />
            </div>

            {/* Introduction */}
            <div className="space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
              <p>
                Mayleen Nutricare opportunity is the way to make your dreams
                come true as we aim at bringing the best nutrition products for
                daily consumption, using the products, sharing the results,
                make new friends, travel worldwide with your loved ones, learn
                and teach in interactive training, grow personally and
                professionally.
              </p>

              <p>
                If you have that burning desire to make difference in your life
                or just want to earn some extra income, we invite you on a
                wonderful journey with MAYLEEN NUTRICARE PVT LTD.
              </p>

              <p>
                Our Objectives Is To Establish As The Best Direct Selling Entity
                Where People Can Make It As Their Career & Work For Lifetime
                With International Quality Premium Nutrition Products.
              </p>
            </div>

            {/* Official image slot */}
            <div className="my-7 overflow-hidden rounded-2xl bg-slate-50 shadow-sm">
              <img
                src="/discover-opportunity.jpg"
                alt="Mayleen Nutricare business opportunity"
                className="block h-auto w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Support System */}
            <section className="mb-7">
              <h4 className="mb-2 text-lg font-bold text-slate-900">
                Support System
              </h4>

              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                We are opening up in all the states of India. We will provide
                nationwide multilingual support team, regional leadership &
                strong company management that is responsive to our business
                partner’s needs.
              </p>
            </section>

            {/* Compensation Plan */}
            <section className="mb-7">
              <h4 className="mb-2 text-lg font-bold text-slate-900">
                UNIQUE, FLEXIBLE & INNOVATIVE Compensation Plan
              </h4>

              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                Our compensation plan offers several ways to get paid through
                our Uni-level compensation plan, including product commission
                as well as interim promotions. Its designed keeping in mind all
                the challenges we have faced in last 12 years, its effective
                and easily achievable for even person seeking part time
                business opportunity.
              </p>
            </section>

            {/* Premium Products */}
            <section className="mb-7">
              <h4 className="mb-2 text-lg font-bold text-slate-900">
                Premium Products
              </h4>

              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                We are offering premium International quality products. We
                follow quality controls strictly & have certified manufacturing
                practices.
              </p>
            </section>

            {/* Education */}
            <section className="mb-7">
              <h4 className="mb-3 text-lg font-bold text-slate-900">
                World Class Education System
              </h4>

              <ul className="space-y-2 text-sm leading-6 text-slate-600 sm:text-base">
                <li>• MNC business opportunity presentations (MNC-BOP)</li>
                <li>
                  • NBPS (new brand partner School learning program) (basic
                  training) Products training Full day training sessions
                </li>
                <li>• LDP (leadership development program)</li>
                <li>
                  • Online webinars (to support all business partners at long
                  distances)
                </li>
                <li>
                  • Daily FITNESS ZOOMSS classes for healthy active life
                  WORKSHOPS by Nutrition & Fitness experts.
                </li>
              </ul>
            </section>

            {/* Brand Message */}
            <div className="rounded-2xl bg-emerald-50 px-5 py-6 text-center">
              <p className="text-base font-semibold leading-7 text-emerald-900 sm:text-lg">
                Mayleen Nutricare Makes A Whole New Promise Of Enriching Lives
                By Transforming Lifestyle.
              </p>

              <p className="mt-2 text-sm leading-6 text-emerald-800/80">
                We Offers Premium Range Of Mouthwatering Flavours Of Nutrition
                Protein Shakes, Dietary Supplements And Skin Care Products.
              </p>
            </div>

            {/* Official source */}
            <div className="mt-8 border-t border-slate-200 pt-5 text-xs leading-6 text-slate-500">
              <p>
                Source: Official Mayleen Nutricare Discover page.
              </p>

              <a
                href="https://mayleennutricare.com/discover"
                target="_blank"
                rel="noreferrer"
                className="break-all font-medium text-emerald-700 underline"
              >
                https://mayleennutricare.com/discover
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}