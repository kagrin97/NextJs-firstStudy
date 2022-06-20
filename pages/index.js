import NavBar from "../components/NavBar";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <NavBar />

      <h1>this is home</h1>
    </div>
  );
}
