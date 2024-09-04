import appBar from "./components/appBar";
import topCard from "./components/topCard";
import Image from "next/image";
import crown from "../public/crown.svg";
import fire from "../public/fire.svg";
import styles from './styles/AppBar.module.css';

export default function Home() {
  return (
    <main>
      <appBar />
      <topCard />
    </main>
  );
}
