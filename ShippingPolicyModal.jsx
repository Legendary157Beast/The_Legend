import { useEffect } from "react";
import { X, Truck } from "lucide-react";

export default function ShippingPolicyModal({ isOpen, onClose }) {
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
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-black/60
        p-3 sm:p-5
      "
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="shipping-policy-title"
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
        {/* HEADER */}
        <div
          className="
            flex shrink-0
            items-center justify-between
            border-b border-slate-200
            px-4 py-4
            sm:px-6
          "
        >
          <div className="flex min-w-0 items-center gap-3">
            <div
              className="
                flex h-10 w-10 shrink-0
                items-center justify-center
                rounded-full
                bg-emerald-50
                text-emerald-700
              "
            >
              <Truck size={21} />
            </div>

            <div className="min-w-0">
              <h2
                id="shipping-policy-title"
                className="
                  truncate
                  text-lg font-semibold
                  text-slate-900
                  sm:text-xl
                "
              >
                Shipping Policy
              </h2>

              <p className="text-xs text-slate-500 sm:text-sm">
                Mayleen Nutricare
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Shipping Policy"
            className="
              ml-3
              flex h-10 w-10 shrink-0
              items-center justify-center
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

        {/* POLICY CONTENT */}
        <div
          className="
            min-h-0 flex-1
            overflow-y-auto
            overscroll-contain
            px-4 py-5
            sm:px-7 sm:py-7
          "
        >
          <article
            className="
              mx-auto
              max-w-3xl
              text-sm
              leading-7
              text-slate-700
              sm:text-[15px]
            "
          >
            <h1
              className="
                mb-5
                text-2xl font-bold
                text-slate-900
                sm:text-3xl
              "
            >
              Shipping Policy
            </h1>

            <section className="mb-8">
              <h3 className="mb-3 text-lg font-bold text-slate-900">
                Shipping Policy & Duration
              </h3>

              <div className="space-y-5">
                <div
                  className="
                    rounded-xl
                    border border-slate-200
                    bg-slate-50
                    p-4 sm:p-5
                  "
                >
                  <p className="font-semibold text-slate-900">
                    Purchases above 100 Volume Points
                  </p>

                  <p className="mt-2">
                    Courier charges are 2.5% + GST on the amount.
                  </p>
                </div>

                <div
                  className="
                    rounded-xl
                    border border-slate-200
                    bg-slate-50
                    p-4 sm:p-5
                  "
                >
                  <p className="font-semibold text-slate-900">
                    Purchases below 100 Volume Points
                  </p>

                  <p className="mt-2">
                    Courier charges are minimum ₹99.
                  </p>
                </div>

                <div
                  className="
                    rounded-xl
                    border border-slate-200
                    bg-slate-50
                    p-4 sm:p-5
                  "
                >
                  <p className="font-semibold text-slate-900">
                    Dispatch Schedule
                  </p>

                  <p className="mt-2">
                    Order(s) will be dispatched from warehouse from Monday to
                    Saturday.
                  </p>
                </div>

                <div
                  className="
                    rounded-xl
                    border border-slate-200
                    bg-slate-50
                    p-4 sm:p-5
                  "
                >
                  <p className="font-semibold text-slate-900">
                    Estimated Delivery
                  </p>

                  <p className="mt-2">
                    Estimated delivery time will be 5 to 7 working days from
                    the date of order confirmation.
                  </p>
                </div>
              </div>
            </section>

            {/* LOCAL RESTRICTIONS */}
            <section className="mb-8">
              <h3 className="mb-3 text-lg font-bold text-slate-900">
                Local Restrictions
              </h3>

              <div
                className="
                  rounded-xl
                  border border-amber-200
                  bg-amber-50
                  p-4 sm:p-5
                "
              >
                <p>
                  If your address lies in an area with local restrictions then
                  your shipment may get delayed and courier charges may
                  increase also.
                </p>

                <p className="mt-3 font-medium">
                  Thank you for your patience.
                </p>
              </div>
            </section>

            {/* RETURN SHIPPING */}
            <section className="mb-4">
              <h3 className="mb-3 text-lg font-bold text-slate-900">
                Return Shipping
              </h3>

              <div className="space-y-4">
                <p>
                  You will be responsible for paying your own shipping cost for
                  returning your items.
                </p>

                <p>
                  Shipping costs are non-refundable.
                </p>

                <p>
                  In some exceptional cases, if the cost of the shipping is
                  paid by the Direct Selling entity / franchisee / pickup
                  Centre, the shipping cost of the return product will be
                  deducted from the refund amount.
                </p>
              </div>
            </section>

            <div
              className="
                mt-8
                border-t border-slate-200
                pt-5
                text-xs leading-6
                text-slate-500
              "
            >
              Source: Mayleen Nutricare official Shipping Policy.
            </div>
          </article>
        </div>

        {/* FOOTER */}
        <div
          className="
            flex shrink-0
            justify-end
            border-t border-slate-200
            px-4 py-3
            sm:px-6
          "
        >
          <button
            type="button"
            onClick={onClose}
            className="
              rounded-lg
              bg-slate-900
              px-5 py-2.5
              text-sm font-semibold
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