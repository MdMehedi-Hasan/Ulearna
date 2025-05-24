import { Button } from '@/components/ui/button';
import { FaArrowRightLong } from "react-icons/fa6";

export default function CallToAction() {
  return (
    <section className="py-12 md:py-16">
      <div className="rounded-lg bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 p-8 md:p-10 lg:p-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-small-white/[0.2] dark:bg-grid-small-white/[0.1]" />
        
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ready to Connect?
          </h2>
          <p className="text-lg md:text-xl mb-6 text-muted-foreground">
            Join our growing community today and start sharing your moments with the world.
            Sign up for free and experience the future of social connection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-md">
              Create Account
              <FaArrowRightLong className="ml-2 h-4 w-4"/>
            </Button>
            <Button size="lg" variant="outline" className="text-md">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}