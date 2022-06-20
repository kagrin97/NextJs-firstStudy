import NavBar from "../components/NavBar";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <NavBar />
      <h1>THIS IS ABOUT</h1>
    </div>
  );
}
