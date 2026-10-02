import React, { useEffect } from "react";
import { X, Target, Eye } from "lucide-react";

export default function VisionMissionModal({ onClose }) {
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
        className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="vision-mission-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
              <Target size={21} />
            </div>

            <div className="min-w-0">
              <h2
                id="vision-mission-title"
                className="truncate text-lg font-semibold text-slate-900 sm:text-xl"
              >
                Our Vision & Mission
              </h2>

              <p className="text-xs text-slate-500 sm:text-sm">
                Mayleen Nutricare
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Vision and Mission"
            className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
          >
            <X size={21} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-4 py-6 sm:px-8 sm:py-8">
          <div className="mx-auto max-w-2xl">
            {/* Intro */}
            <div className="mb-8 text-center">
              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                Discover what drives Mayleen Nutricare and the promise behind
                our journey.
              </p>

              <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-emerald-600" />
            </div>

            {/* Vision */}
            <section className="mb-6 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5 sm:p-7">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-emerald-700 shadow-sm">
                  <Eye size={22} />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  Our Vision
                </h3>
              </div>

              <p className="text-sm leading-7 text-slate-700 sm:text-base">
                Our Vision is to give people healthy lifestyle and a platform
                where they can achieve their dreams Without any condition &
                time limit.
              </p>
            </section>

            {/* Mission */}
            <section className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm sm:p-7">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                  <Target size={22} />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  Our Mission
                </h3>
              </div>

              <p className="text-sm leading-7 text-slate-700 sm:text-base">
                Mayleen Nutricare provides a world of opportunities with a new
                promise and focuses on Enriching lives by Transforming
                Lifestyle.
              </p>
            </section>

            {/* Brand Promise */}
            <div className="mt-7 rounded-2xl bg-slate-900 px-5 py-7 text-center sm:px-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
                Our Promise
              </p>

              <p className="mt-3 text-xl font-semibold leading-8 text-white sm:text-2xl">
                Enriching Lives.
                <br />
                Transforming Lifestyle.
              </p>
            </div>

            {/* Official source */}
            <div className="mt-7 border-t border-slate-200 pt-5 text-xs leading-6 text-slate-500">
              <p>Source: Official Mayleen Nutricare website.</p>

              <div className="mt-1 flex flex-col gap-1 sm:flex-row sm:gap-4">
                <a
                  href="https://mayleennutricare.com/vision"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-emerald-700 underline"
                >
                  Official Vision
                </a>

                <a
                  href="https://mayleennutricare.com/mission"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-emerald-700 underline"
                >
                  Official Mission
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}