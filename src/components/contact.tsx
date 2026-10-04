"use client";

import { useEffect } from "react";

interface ContactModal {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({
  isOpen,
  onClose,
}: ContactModal) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Message submitted");
  };

  return (
    <div
      className="contactUs"
      onClick={onClose}
    >
      <div
        className="relative max-h-[95vh] w-full max-w-[470px] overflow-y-auto rounded-[20px] bg-white px-7 py-8 shadow-2xl sm:px-9"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close contact form"
          className="closeform"
        >
          ×
        </button>

      
        <div className="contact-logo">
          <img
            src="/logo.svg"
            alt="Solène"
            className="logo"
          />
        </div>

      
        <div className="heading">
          <h2 className="headtext">
            Contact Us
          </h2>

          <p className="headline">
            We welcome questions, critique, and practitioner input.
          </p>
        </div>

      
        <form onSubmit={handleSubmit} className="form">
         
          <div className="input-group">
            <label
              htmlFor="fullName"
              className="fullname-label"
            >
              Full name
            </label>

            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              className="fullname-input"
            />
          </div>

         
          <div className="input-group">
            <label
              htmlFor="email"
              className="email-label"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              className="email-input"
            />
          </div>

        
          <div className="input-group">
            <label
              htmlFor="message"
              className="message-label"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={7}
              required
              className="message-input"
            />
          </div>

        
          <button
            type="submit"
            className="contact-submit"
          >
            Send message
          </button>
        </form>

      
        <p className="contact-text">
          Or email us directly at{" "}
          <a
            href="mailto:solenecanopy@gmail.com"
            className="contact-email"
          >
            solenecanopy@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}