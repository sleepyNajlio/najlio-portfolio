import Link from "next/link";

export default function Logo() {
    return (
        <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
          <Link
            href="/"
            className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
          >
            <span className="text-white mr-1">Najlio</span>
            <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
              .info
            </span>
          </Link>
        </div>
    );
};
