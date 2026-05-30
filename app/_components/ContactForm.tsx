"use client";

import { useRouter } from "next/navigation";

export default function ContactForm() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push("/contact/thank-you");
  }

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-[11px] tracking-[0.25em] uppercase text-dim/70 font-mono">
            First Name
          </label>
          <input
            type="text"
            className="bg-white/[0.03] border border-border text-bone text-base py-3 px-4
                       outline-none
                       focus:border-gold/60 transition-colors duration-200
                       caret-gold"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[11px] tracking-[0.25em] uppercase text-dim/70 font-mono">
            Last Name
          </label>
          <input
            type="text"
            className="bg-white/[0.03] border border-border text-bone text-base py-3 px-4
                       outline-none
                       focus:border-gold/60 transition-colors duration-200
                       caret-gold"
          />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label className="text-[11px] tracking-[0.25em] uppercase text-dim/70 font-mono">
          Email Address
        </label>
        <input
          type="email"
          className="bg-white/[0.03] border border-border text-bone text-base py-3 px-4
                     outline-none
                     focus:border-gold/60 transition-colors duration-200
                     caret-gold"
        />
      </div>

      {/* Company */}
      <div className="flex flex-col gap-2">
        <label className="text-[11px] tracking-[0.25em] uppercase text-dim/70 font-mono">
          Company
        </label>
        <input
          type="text"
          className="bg-white/[0.03] border border-border text-bone text-base py-3 px-4
                     outline-none
                     focus:border-gold/60 transition-colors duration-200
                     caret-gold"
        />
      </div>

      {/* Job Title */}
      <div className="flex flex-col gap-2">
        <label className="text-[11px] tracking-[0.25em] uppercase text-dim/70 font-mono">
          Job Title
        </label>
        <input
          type="text"
          className="bg-white/[0.03] border border-border text-bone text-base py-3 px-4
                     outline-none
                     focus:border-gold/60 transition-colors duration-200
                     caret-gold"
        />
      </div>

      {/* Inquiry Type */}
      <div className="flex flex-col gap-2">
        <label className="text-[11px] tracking-[0.25em] uppercase text-dim/70 font-mono">
          Inquiry Type
        </label>
        <div className="relative">
          <select
            className="w-full bg-white/[0.03] border border-border text-bone text-base py-3 px-4
                       outline-none appearance-none cursor-pointer
                       focus:border-gold/60 transition-colors duration-200"
            defaultValue=""
          >
            <option value="" disabled className="bg-surface text-dim">
              Select one
            </option>
            <option value="enterprise" className="bg-surface text-bone">Enterprise Solutions</option>
            <option value="partnership" className="bg-surface text-bone">Partnership</option>
            <option value="careers" className="bg-surface text-bone">Careers</option>
            <option value="press" className="bg-surface text-bone">Press</option>
            <option value="other" className="bg-surface text-bone">Other</option>
          </select>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-dim/50 text-xs">
            ↓
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label className="text-[11px] tracking-[0.25em] uppercase text-dim/70 font-mono">
          Message
        </label>
        <textarea
          rows={5}
          className="bg-white/[0.03] border border-border text-bone text-base py-3 px-4
                     placeholder:text-dim/30 outline-none resize-none
                     focus:border-gold/60 transition-colors duration-200
                     caret-gold"
          placeholder="Tell us about your inquiry…"
        />
      </div>

      {/* Submit */}
      <div className="pt-4">
        <button
          type="submit"
          className="inline-flex items-center justify-center px-10 py-4
                     bg-gold text-ink text-sm tracking-[0.2em] uppercase font-bold
                     hover:bg-gold-bright transition-colors duration-200
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold
                     focus-visible:ring-offset-2 focus-visible:ring-offset-surface
                     active:opacity-90"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
