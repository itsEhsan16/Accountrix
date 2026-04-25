import type { BodyBlock } from "@/lib/types";

interface Props {
  block: BodyBlock;
}

export default function RenderBlock({ block }: Props) {
  if (block.type === "paragraph") {
    return (
      <p
        className="text-[#5a5854] leading-relaxed mb-5"
        style={{ fontFamily: "var(--font-source-sans)" }}
      >
        {block.text}
      </p>
    );
  }

  if (block.type === "heading") {
    const Tag = `h${block.level}` as "h2" | "h3";
    const styles =
      block.level === 2
        ? "text-2xl font-bold text-[#1f1e1b] mt-8 mb-4"
        : "text-xl font-semibold text-[#1f1e1b] mt-6 mb-3";
    return (
      <Tag className={styles} style={{ fontFamily: "var(--font-crimson-pro)" }}>
        {block.text}
      </Tag>
    );
  }

  if (block.type === "list") {
    return (
      <ul
        className="space-y-2 mb-6 pl-5"
        style={{ fontFamily: "var(--font-source-sans)" }}
      >
        {block.items.map((item, i) => (
          <li key={i} className="text-[#5a5854] leading-relaxed list-disc">
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return null;
}
