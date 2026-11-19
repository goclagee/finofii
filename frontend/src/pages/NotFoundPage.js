import { Link } from "react-router-dom";
import useSEO from "@/hooks/useSEO";

export default function NotFoundPage() {
  useSEO({
    title: "Page not found | Finofiii",
    description: "The page you are looking for could not be found.",
    noindex: true,
  });
  return (
    <section className="max-w-3xl mx-auto px-6 py-32 text-center">
      <h1 className="text-4xl font-extrabold mb-4">Page not found</h1>
      <p className="text-gray-600 mb-8">The page you requested does not exist or has moved.</p>
      <Link to="/" className="underline font-semibold">Go to homepage</Link>
    </section>
  );
}
