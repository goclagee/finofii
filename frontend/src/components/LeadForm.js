import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { X, Loader2, CheckCircle2 } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function LeadForm({
  open,
  onClose,
  productType,
  productInterest,
  title,
  subtitle,
  showAmount = true,
  showTenure = true,
}) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    amount: "",
    tenure: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!open) return null;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please share your name and phone");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s+/g, ""))) {
      toast.error("Please enter a valid 10-digit Indian mobile number");
      return;
    }
    setLoading(true);
    try {
      // Send to existing backend
      const backendPromise = API ? axios.post(`${API}/leads`, {
        ...form,
        product_type: productType,
        product_interest: productInterest,
      }) : Promise.resolve();

      // Send to Investwell CRM
      const investwellPromise = axios.post(
        "https://finofii.investwell.app/api/aggregator/utils/createOutsideLead",
        {
          authName: "finofii141",
          apiKey: "278323c7c100794e2895a011f6e2d10c0f49a85c9d8d2e1b3656e24e48175392",
          name: form.name.trim(),
          email: form.email.trim() || "",
          phone: form.phone.replace(/\s+/g, ""),
          message: [
            form.message,
            productType ? `Product: ${productType}` : "",
            productInterest ? `Interest: ${productInterest}` : "",
            form.city ? `City: ${form.city}` : "",
            form.amount ? `Amount: ${form.amount}` : "",
          ].filter(Boolean).join(" | "),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      await Promise.allSettled([backendPromise, investwellPromise]);

      setSuccess(true);
      toast.success("Thanks! Our team will reach out within 24 hours.");
      setTimeout(() => {
        handleClose();
      }, 1800);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setForm({ name: "", phone: "", email: "", city: "", amount: "", tenure: "", message: "" });
    setSuccess(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
      data-testid="lead-form-modal"
    >
      <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl relative my-8">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-[var(--fino-bg)] z-10"
          aria-label="Close"
          data-testid="lead-form-close"
        >
          <X size={20} />
        </button>

        {success ? (
          <div className="p-10 text-center" data-testid="lead-form-success">
            <CheckCircle2 size={56} className="mx-auto text-amber-500" />
            <h3 className="font-display text-2xl font-bold mt-4">You're all set!</h3>
            <p className="text-[var(--fino-ink-soft)] mt-2">
              A relationship manager will reach out within 24 hours.
            </p>
          </div>
        ) : (
          <>
            <div className="p-7 pb-3 border-b border-[var(--fino-line)]">
              <div className="inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold tracking-wide uppercase border border-amber-200">
                {productType === "fd" ? "Book Fixed Deposit" : productType === "loan" ? "Loan Enquiry" : "Get in Touch"}
              </div>
              <h3 className="font-display text-2xl font-bold mt-3">{title}</h3>
              {subtitle && <p className="text-sm text-[var(--fino-ink-soft)] mt-1">{subtitle}</p>}
            </div>

            <form onSubmit={submit} className="p-7 pt-5 space-y-3" data-testid="lead-form">
              <div className="grid grid-cols-2 gap-3">
                <Input name="name" placeholder="Full Name *" value={form.name} onChange={handleChange} testId="lead-name" />
                <Input name="phone" placeholder="Mobile Number *" value={form.phone} onChange={handleChange} testId="lead-phone" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} testId="lead-email" />
                <Input name="city" placeholder="City" value={form.city} onChange={handleChange} testId="lead-city" />
              </div>
              {(showAmount || showTenure) && (
                <div className="grid grid-cols-2 gap-3">
                  {showAmount && (
                    <Input
                      name="amount"
                      placeholder={productType === "fd" ? "Investment Amount (₹)" : "Loan Amount (₹)"}
                      value={form.amount}
                      onChange={handleChange}
                      testId="lead-amount"
                    />
                  )}
                  {showTenure && (
                    <Input
                      name="tenure"
                      placeholder="Tenure (months/years)"
                      value={form.tenure}
                      onChange={handleChange}
                      testId="lead-tenure"
                    />
                  )}
                </div>
              )}
              <textarea
                name="message"
                placeholder="Any specific requirement?"
                rows={2}
                value={form.message}
                onChange={handleChange}
                data-testid="lead-message"
                className="w-full rounded-xl border border-[var(--fino-line)] px-4 py-3 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
              />

              <p className="text-[11px] text-[var(--fino-ink-soft)] leading-relaxed">
                By submitting, you agree to be contacted by Finofii. We never share your data.
              </p>

              <button
                type="submit"
                disabled={loading}
                data-testid="lead-form-submit"
                className="w-full fino-amber-pill py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? <Loader2 size={18} className="animate-spin" /> : null}
                {loading ? "Submitting..." : "Submit Enquiry"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function Input({ name, placeholder, value, onChange, type = "text", testId }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      data-testid={testId}
      className="w-full rounded-xl border border-[var(--fino-line)] px-4 py-3 text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none"
    />
  );
}
