import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Image src="/hero.png" alt="hero" width={300} height={100} />
      <h1 className="text-6xl font-bold">Welcome to Najlio</h1>
      <p className="text-lg mt-3">A simple Next.js app with Tailwind CSS and TypeScript.</p>
    </div>
  );
}
