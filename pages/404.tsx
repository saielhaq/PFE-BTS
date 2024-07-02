import Link from "next/link";

export default function Custom404() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4">Oops! The page you are looking for does not exist.</p>
      <Link href="/">
        <a className="mt-4 text-blue-500">Go back home</a>
      </Link>
    </div>
  );
}
