import React from "react"
import { Routes, Route, Link, NavLink, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Cog, BarChart3, ShieldCheck, Target, Facebook, Twitter, Linkedin } from "lucide-react"

// ------------------ Logo ------------------
function Logo() {
  return (
    <div className="flex items-center gap-3">
     
      <svg
        className="w-10 h-10 rounded-md p-1 bg-gradient-to-br from-indigo-600 to-cyan-500 text-white"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="4" fill="currentColor" />
        <path
          d="M7 12h10M7 16h6"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div>
        <span className="font-bold text-lg leading-none">ACGIL</span>
        <div className="text-xs text-slate-500 -mt-0.5">Acg Infotech Limited</div>
      </div>
    </div>
  )
}

// ------------------ Header ------------------
function Header() {
  return (
    <header className="w-full sticky top-0 z-40 bg-white/70 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex gap-6 items-center">
          {["Home", "About Us", "Services", "Products", "Contact"].map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 font-semibold"
                  : "text-slate-700 hover:text-indigo-600 transition-colors"
              }>
              {item}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:inline-block px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-medium shadow hover:scale-105 transition-transform">
            Get a Quote
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

// ------------------ Mobile Menu ------------------
function MobileMenu() {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="md:hidden relative">
      <button
        aria-label="toggle menu"
        onClick={() => setOpen(!open)}
        className="p-2 rounded-md bg-slate-100">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 6h16M4 12h16M4 18h16"
            stroke="#0f172a"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-3 w-48 bg-white border rounded-lg shadow-lg py-3">
            {["Home", "About", "Services", "Products", "Contact"].map((item) => (
              <Link
                key={item}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 hover:bg-slate-50"
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ------------------ Hero ------------------
function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
            Innovating Solutions for Tomorrow
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.12 }}
            className="mt-5 text-lg text-slate-600">
            Empowering businesses with technology, strategy, and design to unlock sustainable
            growth and measurable results.
          </motion.p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/services"
              className="inline-flex items-center px-5 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:scale-105 transition-transform">
              Explore Services
            </Link>
            <a
              href="/contact"
              className="inline-flex items-center px-5 py-3 rounded-lg border border-slate-200 text-slate-700 bg-white hover:bg-slate-50">
              Get in touch
            </a>
          </div>
        </div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="relative w-full h-72 md:h-96 rounded-2xl border border-slate-100 shadow-lg flex items-center justify-center bg-white">
          {/* Illustration Placeholder */}
          <svg
            className="w-44 h-44 opacity-90"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            <rect x="10" y="10" width="180" height="180" rx="20" fill="url(#g1)" opacity="0.18" />
            <g fill="#0f172a" opacity="0.85">
              <circle cx="80" cy="86" r="10" />
              <rect x="98" y="60" width="50" height="50" rx="8" />
            </g>
          </svg>
        </motion.div>
      </div>
    </section>
  )
}

// ------------------ Feature Card ------------------
function FeatureCard({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-slate-500 mt-1">{desc}</p>
        </div>
      </div>
    </motion.div>
  )
}

// ------------------ Features ------------------
function Features() {
  const items = [
    {
      icon: <Cog className="w-6 h-6" />,
      title: "Custom Software",
      desc: "End-to-end product development tailored to your business needs.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data & Analytics",
      desc: "Turn data into decisions with robust analytics and dashboards.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Security & Compliance",
      desc: "Security-first systems engineered for scale and trust.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategy & Growth",
      desc: "Product & go-to-market strategy to accelerate adoption.",
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center">
        <h2 className="text-2xl font-bold">What we do</h2>
        <p className="mt-2 text-slate-500">Modular offerings to solve complex business problems.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <FeatureCard key={i} {...it} />
        ))}
      </div>
    </section>
  )
}

// ------------------ Mid CTA ------------------
function MidCTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
        <div>
          <h3 className="text-xl font-bold">Ready to transform your product?</h3>
          <p className="mt-2 text-indigo-100">
            Let’s talk about how we can help you ship faster and scale safely.
          </p>
        </div>
        <div className="flex gap-3">
          <Link to="/contact" className="px-5 py-3 rounded-lg bg-white text-indigo-700 font-semibold">
            Get a Quote
          </Link>
          <Link
            to="/services"
            className="px-5 py-3 rounded-lg border border-white/30 hover:bg-white/10">
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  )
}

// ------------------ Footer ------------------
function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-4">
          <Logo />
          <div className="text-sm text-slate-500">© {new Date().getFullYear()} ACGIL. All rights reserved.</div>
        </div>

        <div className="flex items-center gap-6">
          <a className="text-sm text-slate-600 hover:underline" href="#">
            Privacy Policy
          </a>
          <a className="text-sm text-slate-600 hover:underline" href="#">
            Terms of Service
          </a>
          <div className="flex gap-3 text-slate-500">
            <Facebook className="w-5 h-5 hover:text-indigo-600 cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-indigo-600 cursor-pointer" />
            <Linkedin className="w-5 h-5 hover:text-indigo-600 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  )
}

// ------------------ SimplePage ------------------
function SimplePage({ title, children }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="mt-6 text-slate-600">{children}</div>
    </div>
  )
}

// ------------------ App ------------------
export default function App() {
  const location = useLocation()
  return (
    <div className="min-h-screen body-bg text-slate-900 flex flex-col">
      <Header />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.35 }}
          className="flex-1">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route
              path="/aboutus"
              element={
                <SimplePage title="This is the About Us Page">
                  <p>
                    ACGIL is a conceptual product & engineering partner focused on modern web and
                    data-driven solutions.
                  </p>
                </SimplePage>
              }
            />
            <Route
              path="/services"
              element={
                <SimplePage title="This is the Services Page">
                  <p>Explore our services: Product Development, Analytics, Security, Strategy.</p>
                </SimplePage>
              }
            />
            <Route
              path="/products"
              element={
                <SimplePage title="This is the Products Page">
                  <p>Product listing placeholder.</p>
                </SimplePage>
              }
            />
            <Route
              path="/contact"
              element={
                <SimplePage title="This is the Contact Page">
                  <p>Contact form placeholder. Email: hello@acgil.example</p>
                </SimplePage>
              }
            />
          </Routes>
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  )
}

// ------------------ Home ------------------
function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <MidCTA />
    </div>
  )
}
