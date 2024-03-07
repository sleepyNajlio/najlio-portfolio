import Link from "next/link";

export default function Logo() {
  return (
      <div>
        <Link
          href="/"
          className="text-sm bg-accentColor rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Najlio</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .info
          </span>
        </Link>
      </div>
  );
};
