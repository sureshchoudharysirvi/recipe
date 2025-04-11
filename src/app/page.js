import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-white-200 p-4">
      <div className="text-center bg-gray-100 rounded-2xl shadow-lg p-10 max-w-md">
        <h1 className="text-4xl font-bold text-orange-600 mb-6">Welcome to Recipe App</h1>
        <p className="text-gray-600 mb-8">Discover delicious dishes and how to make them!</p>
        <Link
          className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold rounded-full transition duration-300"
          href="/recipe-list"
        >
          🍲 Explore Recipes
        </Link>
      </div>
    </div>
  );
}
