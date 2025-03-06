import MessageString from "./MessageString";

/**
 * The home page for the app.
 * @returns The home tsx component.
 */
export default function Home() {
  return (
    <h1 className="text-3xl font-figtree justify-center">
      <MessageString />
    </h1>
  )
}