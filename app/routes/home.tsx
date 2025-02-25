import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Presentation } from "~/welcome/presentation";
import { Histoire } from "~/welcome/histoire";
import { Boat } from "~/welcome/boat";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main>
      <div>
        <Welcome></Welcome>
        <Presentation></Presentation>
        <Boat></Boat>
        <Histoire></Histoire>
      </div>
    </main>
  );
}
