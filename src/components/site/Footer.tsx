import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

  export function Footer() {

    const [email, setEmail] = useState("");
    const [subscribing, setSubscribing] = useState(false);
    const [subscribeMessage, setSubscribeMessage] = useState("");

    async function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      setSubscribing(true);
      setSubscribeMessage("");

      try {
        const response = await fetch("/api/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Subscription failed");
        }

        setSubscribeMessage("Thank you for subscribing.");
        setEmail("");
      } catch (error) {
        const message =
          error instanceof Error
            ? error.message
            : "Subscription failed. Please try again.";

        setSubscribeMessage(message);
      } finally {
        setSubscribing(false);
      }
    }

    return (
      <footer className="bg-[var(--navy)] text-white/80 mt-24">
        <div className="container-x py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="bg-white inline-block rounded-md p-3">
              <img src={logo} alt="Adedara Ola & Co." className="h-12 w-auto" />
            </div>
            <p className="mt-5 text-sm leading-relaxed max-w-sm">
              Adedara Ola & Co. — Real estate developers, project planners, property
              consultants and managers building sustainable value across Nigeria.
            </p>
            <form className="mt-6 flex gap-2 max-w-sm" onSubmit={handleSubscribe}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 rounded-md bg-white/10 border border-white/15 px-3 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-primary"
              />
              <button
                disabled={subscribing}
                className="rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {subscribing ? "Subscribing..." : "Get Updates"}
              </button>
            </form>

            {subscribeMessage && (
              <p className="mt-2 text-xs text-white/70">{subscribeMessage}</p>
            )}
            <div className="mt-6 flex gap-3">
              {[Facebook, Linkedin, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="h-9 w-9 rounded-md border border-white/15 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Company"
            links={[
              { to: "/about", label: "About Us" },
              { to: "/projects", label: "Projects" },
              { to: "/insights", label: "Insights" },
              { to: "/contact", label: "Contact" },
            ]}
          />
          <FooterCol
            title="Services"
            links={[
              { to: "/services", label: "Project Planning" },
              { to: "/services", label: "Construction" },
              { to: "/services", label: "Refurbishment" },
              { to: "/services", label: "Property Maintenance" },
            ]}
          />
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span>42, Ola Street, Itire, Surulere, Lagos, Nigeria</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span>
                  <a href="tel:+2347038088610" className="block hover:text-white">+234 703 808 8610</a>
                  <a href="tel:+2348035204149" className="block hover:text-white">+234 803 520 4149</a>
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span>
                  <a href="mailto:adedaraolaproperties@gmail.com" className="block hover:text-white text-xs">adedaraolaproperties@gmail.com</a>
                  <a href="mailto:olaadedarabrand@gmail.com" className="block hover:text-white text-xs">olaadedarabrand@gmail.com</a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
            <p>© {new Date().getFullYear()} Adedara Ola & Co. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/" className="hover:text-white">Privacy Policy</Link>
              <Link to="/" className="hover:text-white">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
    return (
      <div>
        <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">{title}</h4>
        <ul className="space-y-2.5 text-sm">
          {links.map((l, i) => (
            <li key={i}>
              <Link to={l.to} className="hover:text-white transition-colors">{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
