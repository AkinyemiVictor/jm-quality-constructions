"use client";

import { useState } from "react";

type InquiryTab = "general" | "transportation";

const inputClassName =
  "mt-1 h-12 w-full border border-[#b9b2a8] bg-white px-3 text-[16px] text-[#3a2b22] outline-none transition focus:border-[var(--brand-gold)]";

const labelClassName =
  "block text-[16px] font-semibold leading-[1.2] text-[#2f241d] font-body";

const hintClassName =
  "mt-0.5 text-[13px] leading-none text-[#8f8578] font-body";

export default function InquiryForm() {
  const [activeTab, setActiveTab] = useState<InquiryTab>("general");

  return (
    <>
      <div className="mt-9 border-b border-[var(--brand-gold)]">
        <div className="flex flex-wrap items-end gap-2">
          <button
            type="button"
            aria-pressed={activeTab === "general"}
            onClick={() => setActiveTab("general")}
            className={`w-full px-5 py-3 text-left font-display text-[18px] uppercase leading-none tracking-[0] transition sm:w-auto sm:text-[24px] ${
              activeTab === "general"
                ? "border border-[var(--brand-gold)] border-b-0 bg-[#efefef] text-[#2f241d]"
                : "text-[#9d9488] hover:text-[#6f665c]"
            }`}
          >
            General Project Inquiry
          </button>
          <button
            type="button"
            aria-pressed={activeTab === "transportation"}
            onClick={() => setActiveTab("transportation")}
            className={`w-full px-5 py-3 text-left font-display text-[18px] uppercase leading-none tracking-[0] transition sm:w-auto sm:text-[24px] ${
              activeTab === "transportation"
                ? "border border-[var(--brand-gold)] border-b-0 bg-[#efefef] text-[#2f241d]"
                : "text-[#9d9488] hover:text-[#6f665c]"
            }`}
          >
            Transportation Services Inquiry
          </button>
        </div>
      </div>

      {activeTab === "general" ? <GeneralInquiryForm /> : <TransportationInquiryForm />}
    </>
  );
}

function GeneralInquiryForm() {
  return (
    <form className="mx-auto mt-10 max-w-3xl space-y-4">
      <div>
        <label className={labelClassName} htmlFor="fullName">
          Full Name
        </label>
        <input id="fullName" name="fullName" type="text" className={inputClassName} />
      </div>

      <div>
        <label className={labelClassName} htmlFor="email">
          Email
        </label>
        <input id="email" name="email" type="email" className={inputClassName} />
      </div>

      <div>
        <label className={labelClassName} htmlFor="phone">
          Phone
        </label>
        <input id="phone" name="phone" type="tel" className={inputClassName} />
      </div>

      <div>
        <label className={labelClassName} htmlFor="projectType">
          Project Type
        </label>
        <p className={hintClassName}>Residential, Commercial, Framing, Other</p>
        <input id="projectType" name="projectType" type="text" className={inputClassName} />
      </div>

      <div>
        <label className={labelClassName} htmlFor="projectLocation">
          Project Location
        </label>
        <p className={hintClassName}>City and State</p>
        <input
          id="projectLocation"
          name="projectLocation"
          type="text"
          className={inputClassName}
        />
      </div>

      <div>
        <label className={labelClassName} htmlFor="projectDetails">
          Project Details
        </label>
        <p className={hintClassName}>
          Brief description of scope, timeline, or specific needs
        </p>
        <textarea
          id="projectDetails"
          name="projectDetails"
          rows={5}
          className="mt-1 w-full border border-[#b9b2a8] bg-white px-3 py-2 text-[16px] text-[#3a2b22] outline-none transition focus:border-[var(--brand-gold)]"
        />
      </div>

      <div>
        <label className={labelClassName} htmlFor="projectFiles">
          Project Files
        </label>
        <p className={hintClassName}>
          Blueprints, drawings, or site plans - accepted formats: PDF, DWG, DXF, STEP, VRML
        </p>
        <div className="mt-2 grid gap-3 sm:grid-cols-[1fr_auto]">
          <input
            id="projectFiles"
            name="projectFiles"
            type="file"
            className="h-12 w-full border border-[#b9b2a8] bg-white px-3 py-2 text-[15px] text-[#3a2b22] file:mr-4 file:border-0 file:bg-[#efefef] file:px-3 file:py-1.5 file:text-[14px] file:font-medium file:text-[#3a2b22]"
          />
          <button
            type="button"
            className="inline-flex h-12 min-w-[122px] items-center justify-center bg-[#7f7f7f] px-5 text-[18px] font-extrabold leading-none tracking-[0] !text-white transition hover:bg-[#6f6f6f]"
          >
            Upload
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="mt-2 inline-flex h-12 min-w-[138px] items-center justify-center bg-[var(--brand-gold)] px-7 text-[18px] font-extrabold leading-none tracking-[0] !text-white transition hover:bg-[var(--brand-gold-soft)]"
      >
        Submit
      </button>
    </form>
  );
}

function TransportationInquiryForm() {
  return (
    <form className="mx-auto mt-10 max-w-3xl space-y-4">
      <div>
        <label className={labelClassName} htmlFor="transportName">
          Full Name
        </label>
        <input id="transportName" name="transportName" type="text" className={inputClassName} />
      </div>

      <div>
        <label className={labelClassName} htmlFor="transportCompany">
          Company Name
        </label>
        <input
          id="transportCompany"
          name="transportCompany"
          type="text"
          className={inputClassName}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClassName} htmlFor="transportEmail">
            Email
          </label>
          <input
            id="transportEmail"
            name="transportEmail"
            type="email"
            className={inputClassName}
          />
        </div>
        <div>
          <label className={labelClassName} htmlFor="transportPhone">
            Phone
          </label>
          <input
            id="transportPhone"
            name="transportPhone"
            type="tel"
            className={inputClassName}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClassName} htmlFor="pickupLocation">
            Pickup Location
          </label>
          <p className={hintClassName}>City and State</p>
          <input
            id="pickupLocation"
            name="pickupLocation"
            type="text"
            className={inputClassName}
          />
        </div>
        <div>
          <label className={labelClassName} htmlFor="deliveryLocation">
            Delivery Location
          </label>
          <p className={hintClassName}>City and State</p>
          <input
            id="deliveryLocation"
            name="deliveryLocation"
            type="text"
            className={inputClassName}
          />
        </div>
      </div>

      <div>
        <label className={labelClassName} htmlFor="loadType">
          Load Type
        </label>
        <p className={hintClassName}>
          Modular home, building section, oversized equipment, or other
        </p>
        <input id="loadType" name="loadType" type="text" className={inputClassName} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClassName} htmlFor="loadDimensions">
            Load Dimensions
          </label>
          <p className={hintClassName}>Length x Width x Height</p>
          <input
            id="loadDimensions"
            name="loadDimensions"
            type="text"
            className={inputClassName}
          />
        </div>
        <div>
          <label className={labelClassName} htmlFor="estimatedWeight">
            Estimated Weight
          </label>
          <p className={hintClassName}>In pounds or tons</p>
          <input
            id="estimatedWeight"
            name="estimatedWeight"
            type="text"
            className={inputClassName}
          />
        </div>
      </div>

      <div>
        <label className={labelClassName} htmlFor="targetDate">
          Preferred Pickup Date
        </label>
        <input id="targetDate" name="targetDate" type="date" className={inputClassName} />
      </div>

      <div>
        <label className={labelClassName} htmlFor="transportNotes">
          Shipment Details
        </label>
        <p className={hintClassName}>
          Route notes, permit status, escorts, timing, and special handling requirements
        </p>
        <textarea
          id="transportNotes"
          name="transportNotes"
          rows={5}
          className="mt-1 w-full border border-[#b9b2a8] bg-white px-3 py-2 text-[16px] text-[#3a2b22] outline-none transition focus:border-[var(--brand-gold)]"
        />
      </div>

      <div>
        <label className={labelClassName} htmlFor="transportFiles">
          Transport Documents
        </label>
        <p className={hintClassName}>
          Attach permits, route sheets, drawings or shipment photos - PDF, DOC, JPG, PNG
        </p>
        <div className="mt-2 grid gap-3 sm:grid-cols-[1fr_auto]">
          <input
            id="transportFiles"
            name="transportFiles"
            type="file"
            className="h-12 w-full border border-[#b9b2a8] bg-white px-3 py-2 text-[15px] text-[#3a2b22] file:mr-4 file:border-0 file:bg-[#efefef] file:px-3 file:py-1.5 file:text-[14px] file:font-medium file:text-[#3a2b22]"
          />
          <button
            type="button"
            className="inline-flex h-12 min-w-[122px] items-center justify-center bg-[#7f7f7f] px-5 text-[18px] font-extrabold leading-none tracking-[0] !text-white transition hover:bg-[#6f6f6f]"
          >
            Upload
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="mt-2 inline-flex h-12 min-w-[138px] items-center justify-center bg-[var(--brand-gold)] px-7 text-[18px] font-extrabold leading-none tracking-[0] !text-white transition hover:bg-[var(--brand-gold-soft)]"
      >
        Submit
      </button>
    </form>
  );
}
