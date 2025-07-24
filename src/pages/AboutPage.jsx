import { useRef, useState } from 'react';
import './aboutPage.css';

const AboutPage = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play().catch((err) => {
        console.warn('Video play failed:', err);
      });
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <section className='about_intro'>
        <img src="public/image/about-page-image/about-sustainability.webp" alt="" />
        <div className="intro_overlay">
          <h2>“We’re building a world where tech is fun again”</h2>
          <h3>- Carl Pei CEO</h3>
        </div>
      </section>

      <section className='about_us'>
        <div className="about_us_content">
          <h2>About Us</h2>
          <p>Technology shapes our lives. But in a world where everything looks and feels the same, it’s easy to feel uninspired—trapped in empty iterations, dominated by tech giants.</p>
          <p>Nothing is here to change that. We create iconic technology that’s as joyful to use as it is to look at. From the Glyph Interface that helps you spend less time on your screen to transparent earbuds that reveal our engineering precision—we’re building tech that inspires.</p>
          <p>We may not be the biggest, but we aim to be the most impactful and human. Our culture is open, honest, and rooted in community—bringing together curious thinkers who are ready to break away from the ordinary and build something meaningful.</p>
        </div>
        <div className="about_us_video" onClick={handleVideoClick}>
          <video
            ref={videoRef}
            loop
            playsInline
            src="public/video/about-video.mp4">
          </video>

          <div className={`about_video_overlay ${isPlaying ? 'hide_about_video_overlay' : ''}`}>
            <p>Click to Play</p>
          </div>
        </div>


      </section>

      <div className="about_invester">
        <h2>Meet the Investors</h2>
        <div className="investor">
          <div className="investor_card">
            <div className="investor_image">
              <img src="public/image/about-page-image/highland-europe.webp" alt="" />
            </div>
            <h4>Highland Europe</h4>
          </div>
          <div className="investor_card">
            <div className="investor_image">
              <img src="public/image/about-page-image/google-ventures.webp" alt="" />
            </div>
            <h4>Google Ventures</h4>
          </div>
          <div className="investor_card">
            <div className="investor_image">
              <img src="public/image/about-page-image/steve-huffman.jpg" alt="" />
            </div>
            <h4>Steve Huffman</h4>
          </div>
          <div className="investor_card">
            <div className="investor_image">
              <img src="public/image/about-page-image/garry-tan.webp" alt="" />
            </div>
            <h4>Garry Tan</h4>
          </div>
          <div className="investor_card">
            <div className="investor_image">
              <img src="public/image/about-page-image/cristina-stenback.jpg" alt="" />
            </div>
            <h4>Cristina Stenback</h4>
          </div>
          <div className="investor_card">
            <div className="investor_image">
              <img src="public/image/about-page-image/the-weeknd.webp" alt="" />
            </div>
            <h4>The Weeknd</h4>
          </div>
          <div className="investor_card">
            <div className="investor_image">
              <img src="public/image/about-page-image/tony-fadell.webp" alt="" />
            </div>
            <h4>Tony Fadell</h4>
          </div>
          <div className="investor_card">
            <div className="investor_image">
              <img src="public/image/about-page-image/casey-neistat.webp" alt="" />
            </div>
            <h4>Casey Neistat</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage