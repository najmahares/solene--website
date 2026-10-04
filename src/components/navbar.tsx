"use client";

import { useState } from "react";
import Link from "next/link";
import ContactModal from "./contact";

export default function Navbar() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <header className="header">
        <nav className="navbar">

          <Link href="/" className="nav-logo">
            <img src="/logo.svg" alt="Solène" className="logo" />
          </Link>

          <div className="nav-group">
            <Link href="/" className="nav-link active">
              Home
            </Link>

            <Link href="/about" className="nav-link">
              About Us
            </Link>

            <button
              type="button"
              onClick={() => setIsContactOpen(true)}
              className="nav-link-btn"
            >
              Contact Us
            </button>

            <Link href="/get-started" className="btn-primary">
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
