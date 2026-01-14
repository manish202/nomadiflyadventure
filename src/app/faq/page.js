import styles from "./page.module.css";
import { Navbar,ContactBtn,FaqCard } from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "FAQ - nomadifly adventure",
}

const Faq = () => {
  return (
    <>
      <Navbar />
      <div className="main-box text-center">
        <h1>FAQ</h1>
      </div>
      <div className="faq-box">
        <h2>The Sustainable Development Fee (SDF)</h2><br />
        <FaqCard
          title="What is the Sustainable Development Fee (SDF)?"
          desc="The SDF is a mandatory daily levy for all visitors to Bhutan. As of 2026, the rate is USD 100 per person, per night for international guests and INR 1,200 for Indian nationals. This fee is collected by the national exchequer and is used to fund Bhutan’s free healthcare, free education, infrastructure upgrades, and environmental conservation. It is the cornerstone of our 'High Value, Low Volume' tourism model."
        />
        <FaqCard
          title="Does the SDF include my hotel and meals?"
          desc="No. The SDF is a tax paid directly to the government for national development. Your tour costs (accommodation, meals, transport, and guide services) are separate and will be included in your personalized quote from Nomadifly Adventure. "
        />
        <h2>Visas and Permits</h2><br />
        <FaqCard
          title="How do I get a visa for Bhutan?"
          desc=" All international tourists (except for Indian, Bangladeshi, and Maldivian nationals) require a visa. At Nomadifly Adventure, we handle the entire application process for you. You simply need to send us a scanned copy of your passport (valid for at least 6 months) and a digital passport photo. Once the SDF and visa fee are paid, we will secure your visa clearance."
        />
        <FaqCard
          title="How long does the visa process take?"
          desc="We recommend starting the process at least 2-3 weeks before your travel date. Once submitted to the Department of Immigration, the visa usually takes about 5 working days to be processed."
        />
        <h2>Practical Travel Logistics</h2><br />
        <FaqCard
          title="Is travel insurance mandatory?"
          desc="Yes. The Department of Tourism requires all visitors to have valid travel insurance for the duration of their stay. This insurance should cover medical emergencies and repatriation. We can assist you in finding a suitable provider if needed."
        />
        <FaqCard
          title="Can I travel to Bhutan without a guide?"
          desc="To ensure a high-quality and safe experience, all tourists are required to be accompanied by a DoT-licensed guide for their entire journey. At Nomadifly, we provide expert guides who are not only knowledgeable but treat you like family."
        />
        <h2>Payment and Customization</h2><br />
        <FaqCard
          title="Is it safe to pay a local tour operator?"
          desc="Yes. Nomadifly Adventure is a fully licensed operator registered with the Department of Tourism (License No: 06013132) Payments are made via secure bank transfers to our official business account, ensuring your funds are protected and tracked by the Royal Monetary Authority of Bhutan."
        />
      </div>
      <div className="d-flex mb-25"><ContactBtn /></div>
      <Footer />
    </>
  )
}
export default Faq;