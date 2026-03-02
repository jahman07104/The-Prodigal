import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Hero />

      {/* This is where we will add your Logistics and Customs text next! */}
      <section className="py-20 bg-white text-gray-900 text-center">
        <h2 className="text-3xl font-bold">The Prodigal: Return Logistics</h2>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          Optimizing global supply chains for your transition back to Jamaica.
        </p>
      </section>
    </main>
  );
}
