import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-group">
          
          <div className="logo">
            <Link href="/" aria-label="Solène home">
              <img
                src="/logo.svg"
                alt="Solène"
                className="footer-logo"
              />
            </Link>
          </div>

          <div>
            <h3 className="company">
              Company
            </h3>

            <div className="company-links">
              <Link
                href="/"
                className="home"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="about"
              >
                About Us
              </Link>
            </div>
          </div>

       
          <div>
            <h3 className="products">
              Product
            </h3>

            <div className="product-links">
              <Link
                href="/platform"
                className="platform"
              >
                Canopy platform
              </Link>

              <Link
                href="/field-tools"
                className="field-tools"
              >
                Field Tools
              </Link>

              <Link
                href="/conservation-tech"
                className="conservation-tech"
              >
                Conservation Tech
              </Link>

              <Link
                href="/integrations"
                className="integrations"
              >
                Integrations
              </Link>
            </div>
          </div>

          
          <div>
            <h3 className="support">
              Support
            </h3>

            <div className="support-links">
              <Link
                href="/contact"
                className="contact"
              >
                Contact Us
              </Link>

              <Link
                href="/faq"
                className="faq"
              >
                FAQ
              </Link>

              <Link
                href="/legal"
                className="legal"
              >
                Legal Notices
              </Link>

              <Link
                href="/privacy"
                className="privacy"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          
          <div>
            <h3 className="contact">
              Contact
            </h3>

            <div className="contact-links">
              <a
                href="mailto:solenecanopy@gmail.com"
                className="solenecanopy"
              >
                Email: solenecanopy@gmail.com
              </a>

              <a
                href="tel:+254769499390"
                className="phone"
              >
                Phone: +254769499390
              </a>
            </div>
          </div>
        </div>

      
        <div className="copyright">
          <p className="text">
            @2026 Solene. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}