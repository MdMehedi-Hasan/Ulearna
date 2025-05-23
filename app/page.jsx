import CallToAction from "@/components/Home/callToAction";
import FeatureHighlight from "@/components/Home/featureHighlight";
import Hero from "@/components/Home/hero";
import PostFeed from "@/components/Home/postFeed";
import Testimonials from "@/components/Home/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FeatureHighlight />
        <PostFeed />
        <Testimonials />
        <CallToAction />
      </div>
    </main>
  );
}
