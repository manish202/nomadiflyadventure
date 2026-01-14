import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "Tours - nomadifly adventure",
}

const Tours = () => {
  return (
    <>
      <Navbar />
      <h1>Tours page</h1>
    </>
  )
}
export default Tours;