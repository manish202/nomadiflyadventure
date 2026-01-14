import styles from "./page.module.css";
import { Navbar,ContactBtn } from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About - nomadifly adventure",
}

const About = () => {
  return (
    <>
      <Navbar />
      <div className="main-box text-center">
        <h1>About Us</h1>
      </div>
      <div className="about">
        <h1>About Nomadifly Adventure</h1>
        <h2>A Message from Our Founder</h2>
        <p>&ldquo;After exploring over 50 countries, I realized that the world&rsquo;s most profound beauty wasn't found in a monument, but in the quiet, untouched soul of my own home: Bhutan.&rdquo;</p>
        <img className="author" src="/images/author_image.jpeg" alt="author image" />
        <p>Welcome to Nomadifly Adventure. My name is Anushia Sharma, and my journey as a travel enthusiast has taken me across continents and cultures. Yet, through all those miles, I discovered that there is truly no place like the Kingdom of Bhutan.</p>
        <p>I founded Nomadifly Adventure because I wanted to share the "unfiltered" Bhutan with the world—the peace that settles in your heart, the vibrant living culture, and the raw, unique way of life that you won&rsquo;t find anywhere else on Earth.</p>
        <h2>Our Philosophy: You are Family</h2>
        <p>At Nomadifly, we don&rsquo;t just see you as a "tourist" or a "customer." From the moment you connect with us, you are family. In Bhutanese culture, hospitality is not just a service—it is a sacred duty. We take immense pride in ensuring that every guest feels cared for, respected, and truly at home in our mountains.</p>
        <h2>Why Choose Nomadifly Adventure ?</h2>
        <ul>
          <li>Expertly Tailored Journeys: We believe that no two travelers are the same. We specialize exclusively in Bhutan tours and take the time to customize every itinerary to match your personal interests, whether you seek spiritual peace, high-altitude adventure, or cultural immersion.</li>
          <li>Global Perspective, Local Heart: With my experience traveling to 50+ countries, I understand what international travelers look for in a seamless, high-quality experience. We combine global standards with authentic local expertise.</li>
          <li>Commitment to Authenticity: We don't just show you the landmarks; we introduce you to the spirit of Bhutan. Our tours are designed to give you a deep, meaningful connection to our land and our people.</li>
        </ul>
        <h2>The Kingdom of Bhutan: A Journey Beyond the Ordinary</h2>
        <h3>Our Sacred Philosophy:</h3>
        <p>High Value, Low Volume Bhutan is not just a destination; it is a sanctuary. As a nation, we have chosen a unique path of "High Value, Low Volume" tourism. This ensures that our guests receive an exclusive, high-quality experience while we protect our most precious assets: our pristine environment and our ancient living culture.</p>
        <p>At Nomadifly Adventure, we are proud ambassadors of this policy. We believe that travel should be mindful, respectful, and transformative for both the visitor and the host.</p>
        <p>The World&rsquo;s Only Carbon-Negative Nation While many countries strive to be carbon-neutral, Bhutan is the world&rsquo;s only carbon-negative country. Our constitution mandates that at least 60% of our land remains under forest cover for all time. When you travel with us, you are stepping into a landscape where nature is held sacred.</p>
        <h3>We integrate sustainability into every itinerary by:</h3>
        <ul>
          <li>Promoting eco-conscious trekking and "Leave No Trace" principles.</li>
          <li>Supporting local farmstays and community-based tourism to ensure your visit directly benefits Bhutanese families.</li>
          <li>Reducing plastic waste and encouraging the use of local, organic resources.</li>
        </ul>
        <h3>Gross National Happiness (GNH)</h3>
        <p>In Bhutan, we measure progress not just in economic terms, but through the Gross National Happiness of our people. This philosophy values spiritual well-being, cultural preservation, and environmental health above all else.</p>
        <p>As your hosts, we aim to offer more than just a sightseeing tour; we invite you to experience the peace and contentment that defines the Bhutanese way of life.</p>
      </div>
      <div className="d-flex mb-25"><ContactBtn /></div>
      <Footer />
    </>
  )
}
export default About;