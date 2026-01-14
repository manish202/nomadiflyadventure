import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "Contact - nomadifly adventure",
}

const Contact = () => {
  return (
    <>
      <Navbar />
      <h1>Contact page</h1>
    </>
  )
}
export default Contact;