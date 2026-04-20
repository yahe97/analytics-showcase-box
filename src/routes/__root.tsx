import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs tracking-widest text-muted-foreground">ERROR — 404</p>
        <h1 className="mt-4 font-display text-7xl tracking-tight text-foreground">Lost the thread.</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            ← Back home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Yajaira Huerta — MBA · Marketing Intelligence · Data & AI Strategy" },
      {
        name: "description",
        content:
          "Portfolio of Yajaira Huerta — MBA candidate at the Robert H. Smith School of Business. Marketing intelligence, data analytics, and AI strategy.",
      },
      { name: "author", content: "Yajaira Huerta" },
      { property: "og:title", content: "Yajaira Huerta — MBA · Marketing Intelligence · Data & AI Strategy" },
      {
        property: "og:description",
        content:
          "MBA candidate translating data into business growth, customer insight, and operational impact.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Yajaira Huerta — MBA · Marketing Intelligence · Data & AI Strategy" },
      { name: "description", content: "A dynamic portfolio showcasing marketing intelligence, data, and AI strategy expertise." },
      { property: "og:description", content: "A dynamic portfolio showcasing marketing intelligence, data, and AI strategy expertise." },
      { name: "twitter:description", content: "A dynamic portfolio showcasing marketing intelligence, data, and AI strategy expertise." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/02a712f3-bb86-47a5-bc3c-91ef818eb887/id-preview-cd04f312--ecc7fa74-1751-41f5-a65c-bad15de85c05.lovable.app-1776727707580.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/02a712f3-bb86-47a5-bc3c-91ef818eb887/id-preview-cd04f312--ecc7fa74-1751-41f5-a65c-bad15de85c05.lovable.app-1776727707580.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
