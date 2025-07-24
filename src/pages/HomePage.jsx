import './homePage.css'

const HomePage = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Meet the Future: Phone 3</h1>
          <p>
            Nothing’s first true flagship—Snapdragon 8s Gen 4, 6.67″ 120 Hz AMOLED,
            triple 50 MP cameras, and the iconic Glyph Matrix. Powerfully unique.
          </p>
          <button className="hero-btn">Shop Now <i className="ri-arrow-right-line"></i></button>
        </div>
        <div className="hero-image">
          <img src="public/image/home-page-image/phone-3-hero-black.avif" alt="Phone (3)" />
        </div>
      </section>

      <section className='headphone_1'>
        <div className="headphone_1_image">
          <img src="public/image/home-page-image/headphone-1.avif" alt="headphone (1)" />
        </div>
        <div className="headphone_1_text">
          <h2>Meet Headphone (1)</h2>
          <p>
            With advanced active noise cancellation, precision engineering, and our
            signature transparent design — Headphone (1) delivers rich sound, deep bass,
            and unrivaled style. Hear everything. Or nothing.
          </p>
          <button className="explore-btn">Explore Headphone (1)</button>
        </div>
      </section>

      <section className='phone_3a_pro'>
        <div className="video_text_content">
          <h2>Phone (3a) Pro</h2>
          <p>
            A new era of simplicity and performance. With refined design, better cameras, and a smarter interface – this is Nothing’s most complete phone yet.
          </p>
          <button className="explore_btn">Learn More</button>
        </div>

        <video
          autoPlay
          muted
          loop
          playsInline
          src='public/video/phone-3a-pro-medium.mp4'
        >
          Your browser does not support the video tag.
        </video>

        <div className="video_overlay_text">
          <h2>Phone (3a) Pro</h2>
          <p>Power. Precision. Nothing more.</p>
          <button className="explore_btn">Explore</button>
        </div>

      </section>
    </>
  )
}

export default HomePage