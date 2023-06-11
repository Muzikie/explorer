import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Muzikie explorer" },
    { name: "description", content: "Muzikie explorer!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Muzikie explorer</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://muzikie.com"
            rel="noreferrer"
          >
            Visit Muzikie
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://medium.run/@muzikie"
            rel="noreferrer"
          >
            Read blog posts
          </a>
        </li>
        <li>
          <a target="_blank" href="https://twitter.com/muzikieHQ" rel="noreferrer">
            Follow us
          </a>
        </li>
      </ul>
    </div>
  );
}
