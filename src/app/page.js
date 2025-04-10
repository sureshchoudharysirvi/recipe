import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-extrabold text-gray-900">Welcome to recipe app</h1>
      <Link className="text-3xl font-extrabold text-gray-900" href="/recipe-list">
        Explore recipes
      </Link>
    </div>
  );
}
