import './homePage.css'

const HomePage = () => {
  return (
    <div className='homePage'>
      <section className="hero">
        <div className="hero-content">
          <h1>Meet the Future: Phone 3</h1>
          <p>
            Nothing’s first true flagship—Snapdragon 8s Gen 4, 6.67″ 120 Hz AMOLED,
            triple 50 MP cameras, and the iconic Glyph Matrix. Powerfully unique.
          </p>
          <button className="hero-btn">Shop Phone 3</button>
        </div>
        <div className="hero-image">
          <img src="src\assets\image\HomePageImage\Phone(3) Hero.avif" alt="Phone (3)" />
        </div>
      </section>
    </div>
  )
}

export default HomePage