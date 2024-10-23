import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "JavaScript Roadmap" },
    { name: "description", content: "Welcome to the JavaScript Roadmap!" },
  ];
};

export default function Index() {
  return (
    <header className="mt-4">
      <h1 className="text-center text-4xl">JavaScript Roadmap</h1>
    </header>
  );
}

