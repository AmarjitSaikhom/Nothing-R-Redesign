import WatchCard from "../components/WatchCard";
import { motion } from "framer-motion";
import { FaBatteryFull, FaLink, FaGem, FaMagic } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './homePage.css'

const HomePage = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/productDetail/phone-3a-pro");
  };


  const features = [
    {
      icon: <FaMagic />,
      title: "Minimalist Aesthetic",
      description: "Clean and modern design that complements your lifestyle."
    },
    {
      icon: <FaLink />,
      title: "Seamless Connectivity",
      description: "Effortlessly pair with your devices and stay connected."
    },
    {
      icon: <FaBatteryFull />,
      title: "Long Battery Life",
      description: "Keep going for days on a single charge."
    },
    {
      icon: <FaGem />,
      title: "Premium Build",
      description: "High-end materials at a price that makes sense."
    }
  ];


  const earphones = [
    {
      name: "CMF Buds 2 Plus",
      tagline: "Powerfully Compact Sound",
      image: "/image/home-page-image/cmf-buds-2-plus.avif"
    },
    {
      name: "Ear A",
      tagline: "Design Meets Everyday Audio",
      image: "/image/home-page-image/ear-a.avif"
    },
    {
      name: "Ear Open",
      tagline: "Open-Ear Comfort. Uncompromised Awareness.",
      image: "/image/home-page-image/ear-open.avif"
    },
    {
      name: "Ear",
      tagline: "Immersive. Iconic. Yours.",
      image: "/image/home-page-image/ear.avif"
    }
  ];


  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Meet the Future: Phone 3</h1>
          <p>
            Nothing’s first true flagship—Snapdragon 8s Gen 4, 6.67″ 120 Hz AMOLED,
            triple 50 MP cameras, and the iconic Glyph Matrix. Powerfully unique.
          </p>
          <Link to="/product">
            <button className="hero-btn">
              Shop Now <i className="ri-arrow-right-line"></i>
            </button>
          </Link>
        </div>
        <div className="hero-image">
          <img src="/image/home-page-image/phone-3-hero-black.avif" alt="Phone (3)" />
        </div>
      </section>

      <section className='headphone_1'>
        <div className="headphone_1_image">
          <img src="/image/home-page-image/headphone-1.avif" alt="headphone (1)" loading="lazy" />
        </div>
        <div className="headphone_1_text">
          <h2>Meet Headphone (1)</h2>
          <p>
            With advanced active noise cancellation, precision engineering, and our
            signature transparent design — Headphone (1) delivers rich sound, deep bass,
            and unrivaled style. Hear everything. Or nothing.
          </p>
          <Link to={'/product/audio'}>
            <button className="explore-btn">
              Explore Headphone (1)
            </button>
          </Link>

        </div>
      </section>

      <section className="watch-section">
        <h2>Explore the CMF Watches</h2>
        <div className="watch-grid">
          <WatchCard
            title="CMF Watch Pro"
            desc="Smarter than ever"
            img="/image/home-page-image/cmf-watches-3-pro.avif"
          />
          <WatchCard
            title="CMF Watch Pro 2"
            desc="Next-gen performance"
            img="/image/home-page-image/cmf-watches-3-pro-2.avif"
          />
          <WatchCard
            title="CMF Watch 2 Pro"
            desc="Premium design"
            img="/image/home-page-image/cmf-watches-2-pro.avif"
          />
          <WatchCard
            title="CMF Watch SE"
            desc="Stylish and affordable"
            img="/image/home-page-image/cmf-watch-2-pro-2.avif"
          />
        </div>
      </section>

      <section className="why-cmf">
        <h2>Why Choose CMF?</h2>
        <div className="why-cmf-features">
          {features.map((item, i) => (
            <motion.div
              key={i}
              className="why-cmf-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className='phone_3a_pro'>
        <div className="video_text_content">
          <h2>Phone (3a) Pro</h2>
          <p>
            A new era of simplicity and performance. With refined design, better cameras, and a smarter interface – this is Nothing’s most complete phone yet.
          </p>
          <button className="explore_btn" onClick={handleLearnMore}>Learn More</button>
        </div>

        <video
          preload="metadata"
          autoPlay
          muted
          loop
          playsInline

        >
          <source src='/video/phone-3a-pro-medium.mp4' type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="video_overlay_text">
          <h2>Phone (3a) Pro</h2>
          <p>Power. Precision. Nothing more.</p>
          <button className="explore_btn" onClick={handleLearnMore}>Learn More</button>
        </div>

      </section>


      <section className="earphones-section">
        <h2>Explore CMF Earphones</h2>
        <div className="earphones-grid">
          {earphones.map((earphone, i) => (
            <motion.div
              className="earphone-card"
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="earphone-image">
                <img src={earphone.image} alt={earphone.name} />
                <div className="earphone-info">
                  <h4>{earphone.name}</h4>
                  <p>{earphone.tagline}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="cmf-pro-section">
        <div className="cmf-pro-overlay">
          <div className="cmf-pro-content">
            <h1>CMF Phone 2 Pro</h1>
            <p>Power, Redefined in CMF Form</p>
            <Link to={'/product/phone'}>
              <button>Explore Now</button>
            </Link>
          </div>
        </div>
        <img
          className="cmf-pro-bg"
          src="/image/home-page-image/cmf-phone-2-pro.avif"
          alt="CMF Phone 2 Pro"
        />
      </section>
    </>
  )
}

export default HomePage