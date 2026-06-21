"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Status = "idle" | "submitting" | "success" | "error";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export function ContactModal({ open, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const resetAndClose = () => {
    onClose();
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      setStatus("idle");
      setErrorMsg("");
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={resetAndClose}
            className="fixed inset-0 z-[100] bg-navy-950/80 backdrop-blur-sm"
          />

          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-modal-title"
              className="relative w-full max-w-md rounded-2xl border border-border-strong bg-bg-elevated p-8 shadow-2xl"
            >
              <button
                onClick={resetAndClose}
                data-cursor="pointer"
                aria-label="Close"
                className="absolute right-5 top-5 text-fg-faint transition-colors hover:text-pink-300"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path
                    d="M4 4L14 14M14 4L4 14"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center py-6 text-center"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-pink-500/15">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M5 12.5L9.5 17L19 7"
                        stroke="var(--port-pink-500)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold text-fg">
                    Message sent
                  </h3>
                  <p className="mt-2 text-sm text-fg-muted">
                    Thanks for reaching out — I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={resetAndClose}
                    data-cursor="pointer"
                    className="mt-6 rounded-full bg-pink-500 px-6 py-2.5 text-sm font-semibold text-navy-950 transition-transform hover:scale-105"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3
                    id="contact-modal-title"
                    className="font-display text-2xl font-bold text-fg"
                  >
                    Let&apos;s talk
                  </h3>
                  <p className="mt-1.5 text-sm text-fg-muted">
                    Send me a message and I&apos;ll reply by email.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-fg-faint"
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={status === "submitting"}
                        className="w-full rounded-lg border border-border-strong bg-bg-card px-4 py-2.5 text-sm text-fg placeholder:text-fg-faint focus:border-pink-500 focus:outline-none disabled:opacity-60"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-fg-faint"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === "submitting"}
                        className="w-full rounded-lg border border-border-strong bg-bg-card px-4 py-2.5 text-sm text-fg placeholder:text-fg-faint focus:border-pink-500 focus:outline-none disabled:opacity-60"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-fg-faint"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        disabled={status === "submitting"}
                        className="w-full resize-none rounded-lg border border-border-strong bg-bg-card px-4 py-2.5 text-sm text-fg placeholder:text-fg-faint focus:border-pink-500 focus:outline-none disabled:opacity-60"
                        placeholder="Tell me a bit about your project or inquiry..."
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-sm text-pink-300">{errorMsg}</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      data-cursor="pointer"
                      className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                    >
                      {status === "submitting" ? "Sending..." : "Send message"}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}