import React, { useEffect } from "react";
import { X, RotateCcw } from "lucide-react";

export default function RefundReturnPolicyModal({ onClose }) {
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
        aria-labelledby="refund-return-policy-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
              <RotateCcw size={21} />
            </div>

            <div className="min-w-0">
              <h2
                id="refund-return-policy-title"
                className="truncate text-lg font-semibold text-slate-900 sm:text-xl"
              >
                Refund & Return Policy
              </h2>

              <p className="text-xs text-slate-500 sm:text-sm">
                Mayleen Nutricare
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Refund & Return Policy"
            className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
          >
            <X size={21} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-4 py-5 text-sm leading-7 text-slate-700 sm:px-7 sm:py-6">
          <p className="mb-6">
            This Refund & Return Policy is based on the official Product Return
            Policy published by Mayleen Nutricare Pvt Ltd.
          </p>

          <section className="space-y-7">
            {/* Product Return Policy */}
            <div>
              <h3 className="mb-3 text-base font-semibold text-slate-900">
                Product Return Policy
              </h3>

              <p className="mb-3">
                If the product is in marketable condition and is returned
                within 30 days of receipt of goods accompanied by the original
                invoice, 100% of the amount as refund will be given.
              </p>

              <p className="mb-3">
                If the product is in unmarketable condition and is returned
                within 30 days of receipt of goods, the refund value will be
                assessed by the Grievance Redressal Officer and an appropriate
                value will be given.
              </p>

              <p>
                <strong>Marketable condition:</strong> Products that are
                unopened, sealed and undamaged in any form.
              </p>

              <p className="mt-2">
                <strong>Unmarketable condition:</strong> Products that have
                been opened and their seal has been broken.
              </p>
            </div>

            {/* Buyback / Refund */}
            <div>
              <h3 className="mb-3 text-base font-semibold text-slate-900">
                Buyback / Exchange / Refund Policy
              </h3>

              <p className="mb-3">
                If you are not completely satisfied with the product, you may
                return it within 30 days from the date of receipt, provided
                that you notify Mayleen Nutricare of your intention within one
                week from the date of receipt.
              </p>

              <p className="mb-3">
                You can contact Mayleen Nutricare at{" "}
                <a
                  href="tel:18002744700"
                  className="font-medium text-emerald-700 underline"
                >
                  1800-2744-700
                </a>{" "}
                or by email at{" "}
                <a
                  href="mailto:support@mayleennutricare.com"
                  className="font-medium text-emerald-700 underline"
                >
                  support@mayleennutricare.com
                </a>
                .
              </p>

              <p>
                The buyback/refund policy applies to products in saleable
                condition and partially used products not exceeding 30% of the
                total volume, when accompanied with an invoice. If a product
                has been intentionally damaged or misused, the buyback/refund
                warranty becomes void.
              </p>
            </div>

            {/* Refund Conditions */}
            <div>
              <h3 className="mb-3 text-base font-semibold text-slate-900">
                Refund Conditions
              </h3>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 font-semibold text-slate-900">
                        Condition
                      </th>
                      <th className="px-4 py-3 font-semibold text-slate-900">
                        Time Period
                      </th>
                      <th className="px-4 py-3 font-semibold text-slate-900">
                        Refund
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-t border-slate-200">
                      <td className="px-4 py-3">Saleable / Marketable</td>
                      <td className="px-4 py-3">Within 30 days</td>
                      <td className="px-4 py-3">Invoiced value</td>
                    </tr>

                    <tr className="border-t border-slate-200">
                      <td className="px-4 py-3">
                        Un-Saleable / Unmarketable
                      </td>
                      <td className="px-4 py-3">Within 30 days</td>
                      <td className="px-4 py-3">
                        Value assessed by Grievance Redressal Officer
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Exchange */}
            <div>
              <h3 className="mb-3 text-base font-semibold text-slate-900">
                Exchange
              </h3>

              <p className="mb-3">
                An unopened, unsealed, undamaged or unused product may be
                exchanged within 30 days from the date of receipt of goods,
                subject to the applicable requirements and the original
                invoice.
              </p>

              <p className="mb-3">
                The following are required for exchange:
              </p>

              <ul className="list-disc space-y-2 pl-5">
                <li>Product Return Form</li>
                <li>Copy of receipt of goods</li>
                <li>
                  Products in original packing and marketable condition
                </li>
                <li>
                  Exchange with an equally or higher priced product, with
                  payment of the differential amount where applicable
                </li>
              </ul>

              <p className="mt-3">
                The customer is responsible for the shipping cost of sending
                the product to the entity's Godown, Franchisee's Godown or
                Pickup Centre, as applicable or as directed by the entity.
              </p>
            </div>

            {/* Refund Process */}
            <div>
              <h3 className="mb-3 text-base font-semibold text-slate-900">
                Refund Process
              </h3>

              <p className="mb-3">
                Once the returned product is received, Mayleen Nutricare will
                inspect it and notify you that the returned item has been
                received.
              </p>

              <p className="mb-3">
                You will then be notified about the status of your refund after
                the inspection.
              </p>

              <p className="mb-3">
                Where a return is accepted, the refund value will be calculated
                according to the applicable Buyback / Refund Policy.
              </p>

              <p>
                The refund may be remitted to the bank account provided for the
                refund or to the payment instrument from which the payment was
                made. The Direct Selling Entity has discretion to determine the
                applicable mode of reversal.
              </p>

              <p className="mt-3 font-medium text-slate-900">
                No cash refunds will be made.
              </p>
            </div>

            {/* Shipping Cost */}
            <div>
              <h3 className="mb-3 text-base font-semibold text-slate-900">
                Return Shipping Cost
              </h3>

              <p className="mb-3">
                You are responsible for paying your own shipping cost for
                returning items.
              </p>

              <p>
                Shipping costs are non-refundable. In exceptional cases where
                the shipping cost is paid by the Direct Selling Entity,
                Franchisee or Pickup Centre, the return shipping cost may be
                deducted from the refund amount.
              </p>
            </div>

            {/* Cancellation */}
            <div>
              <h3 className="mb-3 text-base font-semibold text-slate-900">
                Cancellation of Orders
              </h3>

              <h4 className="mb-2 font-semibold text-slate-800">
                Cancellation by Mayleen Nutricare
              </h4>

              <p className="mb-4">
                Mayleen Nutricare may refuse or cancel an order for reasons
                including product or quantity unavailability or where
                additional verification or information is required.
              </p>

              <p className="mb-4">
                If payment has already been processed for a cancelled order,
                the amount will be reversed or remitted to the customer through
                the applicable bank account or payment instrument, at the
                discretion of the Direct Selling Entity.
              </p>

              <h4 className="mb-2 font-semibold text-slate-800">
                Cancellation by Customer
              </h4>

              <p>
                If a cancellation notice is received before the order has been
                processed, Mayleen Nutricare may cancel the order and refund the
                amount within a reasonable period.
              </p>

              <p className="mt-3">
                Orders that have already been processed and have left the
                Direct Selling Entity, Franchisee or Pickup Centre cannot be
                cancelled. The customer may instead exercise the applicable
                product return rights while bearing the applicable return
                shipping costs.
              </p>
            </div>

            {/* Reference Notes */}
            <div>
              <h3 className="mb-3 text-base font-semibold text-slate-900">
                Return Requirements & Reference Notes
              </h3>

              <ul className="list-disc space-y-3 pl-5">
                <li>
                  Products may be returned personally or by courier to the
                  applicable office or location specified by Mayleen Nutricare.
                </li>

                <li>
                  A specific Product Return Form must be duly completed and
                  signed and sent along with the returned product.
                </li>

                <li>
                  The return period is calculated from the date the product is
                  received by the Consumer / Direct Seller until the date it is
                  received at the applicable Direct Selling Entity,
                  Franchisee or Pickup Centre premises.
                </li>

                <li>
                  The condition of returned stock is assessed as marketable or
                  unmarketable by the Grievance Redressal Officer at the
                  Direct Selling Entity's Head Office.
                </li>

                <li>
                  The Product Return Policy does not apply to open packs of
                  literature, videos or other sales and marketing aids that are
                  not meant for resale.
                </li>

                <li>
                  The return process may be subject to additional terms and
                  conditions depending on the nature and category of the
                  product.
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="rounded-xl bg-emerald-50 p-4 sm:p-5">
              <h3 className="mb-2 text-base font-semibold text-emerald-900">
                Need Help With a Return or Refund?
              </h3>

              <p className="text-emerald-900/80">
                Contact Mayleen Nutricare at{" "}
                <a
                  href="tel:18002744700"
                  className="font-semibold underline"
                >
                  1800-2744-700
                </a>{" "}
                or{" "}
                <a
                  href="mailto:support@mayleennutricare.com"
                  className="font-semibold underline"
                >
                  support@mayleennutricare.com
                </a>
                .
              </p>
            </div>
          </section>

          {/* Official Source */}
          <div className="mt-8 border-t border-slate-200 pt-5 text-xs leading-6 text-slate-500">
            <p>
              Source: Official Mayleen Nutricare Refund & Return Policy.
            </p>

            <a
              href="https://mayleennutricare.com/return-policy"
              target="_blank"
              rel="noreferrer"
              className="break-all font-medium text-emerald-700 underline"
            >
              https://mayleennutricare.com/return-policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
