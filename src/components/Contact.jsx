const contactLinks = [
  {
    label: "Email",
    value: "fazalabbas2002@gmail.com",
    href: "mailto:fazalabbas2002@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "Fazal Abbas",
    href: "https://www.linkedin.com/in/fazal-abbas-4653dg86/",
  },
  {
    label: "GitHub",
    value: "@fazal305",
    href: "https://github.com/fazal305/",
  },
];

function Contact() {
  return (
    <footer id="contact" className="contact section-anchor">
      <div className="container">
        <p className="section-label mono-label">
          05 <span aria-hidden="true">—</span> Contact
        </p>

        <div className="contact__content">
          <div>
            <p className="contact__availability mono-label">
              Available for frontend roles and internships
            </p>
            <h2>
              Have a frontend role, internship, or interesting project in mind?{" "}
              <span>Let&apos;s talk.</span>
            </h2>
          </div>

          <ul className="contact__links" aria-label="Contact links">
            {contactLinks.map((link) => {
              const isEmail = link.href.startsWith("mailto:");

              return (
                <li key={link.label}>
                  <span className="mono-label">{link.label}</span>
                  <a
                    href={link.href}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noreferrer"}
                  >
                    {link.value} <span aria-hidden="true">↗</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="contact__footer mono-label">
          <span>Fazal Abbas / Portfolio 2026</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
