import { LoadingSpinner } from "@/components/ui/loading-spinner";

/**
 * Loading component that displays a loading indicator.
 */
export default function Loading() {
  return (
    <div className="flex w-full min-h-svh justify-center items-center">
      <LoadingSpinner size={100} color="hsl(var(--primary))" />
    </div>
  );
}
