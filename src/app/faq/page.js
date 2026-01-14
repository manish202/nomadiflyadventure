import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "FAQ - nomadifly adventure",
}

const Faq = () => {
  return (
    <>
      <Navbar />
      <h1>Faq page</h1>
    </>
  )
}
export default Faq;