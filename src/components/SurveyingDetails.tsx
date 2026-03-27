import { surveyingDetails } from '../data/siteContent';

const workflowIcons = [
  (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3v18M3 12h18" />
      <circle cx="12" cy="12" r="8" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 17l5-5 4 4 7-8" />
      <path d="M4 7h5v5" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 4h9l3 3v13H6z" />
      <path d="M15 4v4h4" />
      <path d="M9 12h6M9 16h6" />
    </svg>
  )
];

export const SurveyingDetails = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
      <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="space-y-5">
          <div className="eyebrow">Surveying Workflow</div>
          <h3 className="text-2xl font-semibold text-vertex-text md:text-3xl">
            Surveying Workflow
          </h3>
          <p className="text-base leading-relaxed text-slate-600">
            This section adds a more structured overview of the surveying process, from
            field preparation through final output, using a different layout from the main
            two-column content blocks.
          </p>
          <div className="rounded-xl border border-vertex-border bg-slate-50 px-5 py-4">
            <div className="text-sm font-medium text-vertex-text">Focused delivery</div>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Each surveying assignment is approached as a sequence of field, capture,
              and output decisions so deliverables remain accurate, readable, and ready
              for planning or engineering use.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="overflow-hidden rounded-2xl border border-vertex-border bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-start justify-between gap-6">
              <div className="max-w-xl">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-vertex-primary">
                  Featured Workflow
                </div>
                <h4 className="mt-3 text-2xl font-semibold text-vertex-text">
                  From field planning to final survey outputs
                </h4>
                <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                  Our surveying process is organized to reduce uncertainty in the field,
                  improve measurement consistency, and turn captured data into clear,
                  project-ready outputs for design, construction, or land analysis.
                </p>
              </div>
              <div className="hidden rounded-xl border border-white/70 bg-white/80 px-4 py-3 text-right shadow-sm md:block">
                <div className="text-sm font-semibold text-vertex-text">3-step process</div>
                <div className="mt-1 text-xs uppercase tracking-[0.28em] text-slate-500">
                  practical and structured
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {surveyingDetails.map((item, index) => (
              <div
                key={item.title}
                className="rounded-xl border border-vertex-border bg-white px-5 py-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-vertex-primary/10 text-vertex-primary">
                  {workflowIcons[index]}
                </div>
                <div className="mt-4 text-base font-semibold text-vertex-text">{item.title}</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
