"use client";

import { useEffect, useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({
  isOpen,
  onClose,
}: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

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

  
  useEffect(() => {
    if (isOpen) {
      setStatusMessage("");
      setIsSuccess(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatusMessage("");
    setIsSuccess(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      message: formData.get("message"),

     
      website: formData.get("website"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setIsSuccess(false);
        setStatusMessage(
          result.message ||
            "Unable to send your message. Please check your details and try again."
        );

        return;
      }

      setIsSuccess(true);
      setStatusMessage(
        "Your message has been sent successfully. Thank you for contacting us."
      );

      form.reset();

      
      setTimeout(() => {
        onClose();
      }, 2500);
    } catch {
      setIsSuccess(false);
      setStatusMessage(
        "Something went wrong. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
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
          disabled={isSubmitting}
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

       
        <form
          onSubmit={handleSubmit}
          className="form"
        >
          
          <div
            className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
            aria-hidden="true"
          >
            <label htmlFor="website">
              Website
            </label>

            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

         
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
              maxLength={100}
              autoComplete="name"
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
              maxLength={254}
              autoComplete="email"
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
              maxLength={3000}
              className="message-input"
            />
          </div>

         
          {statusMessage && (
            <div
              role="alert"
              className={`text-sm leading-5 ${
                isSuccess
                  ? "text-green-700"
                  : "text-red-600"
              }`}
            >
              {statusMessage}
            </div>
          )}

         
          <button
            type="submit"
            disabled={isSubmitting}
            className="contact-submit disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting
              ? "Sending..."
              : "Send message"}
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