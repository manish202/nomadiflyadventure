import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "About - nomadifly adventure",
}

const About = () => {
  return (
    <>
      <Navbar />
      <h1>About page</h1>
    </>
  )
}
export default About;