import { redirect } from "@remix-run/node";
import { Link } from "@remix-run/react";

import MainHeader from "~/components/navigation/MainHeader";
import marketingStyles from "~/styles/marketing.css";

export function loader({ params }) {
  if (params["*"] === "exp") {
    return redirect("/expenses");
  }

  throw new Response("Not found", { status: 404 });
}

export default function NotFound() {
  // Due to the loader, this component will never be rendered,
  // but as a good practice, ErrorBoundary will be returned.
  return <ErrorBoundary />;
}

export function ErrorBoundary() {
  return (
    <>
      <MainHeader />
      <main>
        <section>
          <header>
            <h1>Whoops!</h1>
          </header>
          <div className="marketing-content">
            <p className="marketing-explanation">Nothing here yet!</p>
          </div>
          <Link to="/" prefetch="intent" className="cta">
            <span>Return to Home</span>
          </Link>
        </section>
      </main>
    </>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: marketingStyles }];
}
