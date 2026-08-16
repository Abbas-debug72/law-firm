"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#0a1a30", color: "#f7f4ec", fontFamily: "sans-serif" }}>
        <main style={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "2rem" }}>
          <div>
            <p style={{ fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: "#b9964c" }}>
              {error.digest ? `Error ${error.digest}` : "Something went wrong"}
            </p>
            <h1 style={{ fontSize: "2.5rem", margin: "1rem 0" }}>We&apos;ll get to this.</h1>
            <button
              type="button"
              onClick={reset}
              style={{ background: "#b9964c", color: "#0a1a30", border: 0, padding: "0.9rem 2rem", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600, cursor: "pointer" }}
            >
              Try Again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
