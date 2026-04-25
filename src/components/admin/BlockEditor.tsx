"use client";

import { useState } from "react";
import type { BodyBlock } from "@/lib/types";
import RenderBlock from "@/components/RenderBlock";

interface Props {
  value: BodyBlock[];
  onChange: (blocks: BodyBlock[]) => void;
}

type BlockType = "paragraph" | "heading2" | "heading3" | "list";

const BLOCK_LABELS: Record<BlockType, string> = {
  paragraph: "Paragraph",
  heading2: "Heading 2",
  heading3: "Heading 3",
  list: "List",
};

function newBlock(type: BlockType): BodyBlock {
  if (type === "paragraph") return { type: "paragraph", text: "" };
  if (type === "heading2") return { type: "heading", text: "", level: 2 };
  if (type === "heading3") return { type: "heading", text: "", level: 3 };
  return { type: "list", items: [""] };
}

function blockLabel(block: BodyBlock): string {
  if (block.type === "paragraph") return "Paragraph";
  if (block.type === "heading")
    return block.level === 2 ? "Heading 2" : "Heading 3";
  return "List";
}

export default function BlockEditor({ value, onChange }: Props) {
  const [activeTab, setActiveTab] = useState<"editor" | "preview">("editor");

  function addBlock(type: BlockType) {
    onChange([...value, newBlock(type)]);
  }

  function updateBlock(index: number, updated: BodyBlock) {
    const next = [...value];
    next[index] = updated;
    onChange(next);
  }

  function removeBlock(index: number) {
    onChange(value.filter((_, i) => i !== index));
  }

  function moveBlock(index: number, direction: -1 | 1) {
    const next = [...value];
    const target = index + direction;
    if (target < 0 || target >= next.length) return;
    [next[index], next[target]] = [next[target], next[index]];
    onChange(next);
  }

  function updateListItem(blockIndex: number, itemIndex: number, text: string) {
    const block = value[blockIndex];
    if (block.type !== "list") return;
    const items = [...block.items];
    items[itemIndex] = text;
    updateBlock(blockIndex, { ...block, items });
  }

  function addListItem(blockIndex: number) {
    const block = value[blockIndex];
    if (block.type !== "list") return;
    updateBlock(blockIndex, { ...block, items: [...block.items, ""] });
  }

  function removeListItem(blockIndex: number, itemIndex: number) {
    const block = value[blockIndex];
    if (block.type !== "list") return;
    const items = block.items.filter((_, i) => i !== itemIndex);
    updateBlock(blockIndex, { ...block, items: items.length ? items : [""] });
  }

  return (
    <div className="border border-[#1f1e1b]/15 rounded-xl overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-[#1f1e1b]/15 bg-[#f9f8f6]">
        {(["editor", "preview"] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 text-sm font-medium capitalize transition ${
              activeTab === tab
                ? "text-[#c85a32] border-b-2 border-[#c85a32] bg-white"
                : "text-[#1f1e1b]/50 hover:text-[#1f1e1b]"
            }`}
            style={{ fontFamily: "var(--font-source-sans)" }}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "editor" && (
        <div className="p-5 space-y-3">
          {value.length === 0 && (
            <p
              className="text-sm text-[#1f1e1b]/40 text-center py-6"
              style={{ fontFamily: "var(--font-source-sans)" }}
            >
              No blocks yet. Add one below.
            </p>
          )}

          {value.map((block, index) => (
            <div
              key={index}
              className="border border-[#1f1e1b]/10 rounded-lg bg-white overflow-hidden"
            >
              {/* Block header */}
              <div className="flex items-center justify-between px-4 py-2 bg-[#f9f8f6] border-b border-[#1f1e1b]/10">
                <span
                  className="text-xs font-medium text-[#1f1e1b]/50 uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-source-sans)" }}
                >
                  {blockLabel(block)}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => moveBlock(index, -1)}
                    disabled={index === 0}
                    className="p-1 text-[#1f1e1b]/40 hover:text-[#1f1e1b] disabled:opacity-30 transition"
                    title="Move up"
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    onClick={() => moveBlock(index, 1)}
                    disabled={index === value.length - 1}
                    className="p-1 text-[#1f1e1b]/40 hover:text-[#1f1e1b] disabled:opacity-30 transition"
                    title="Move down"
                  >
                    ↓
                  </button>
                  <button
                    type="button"
                    onClick={() => removeBlock(index)}
                    className="p-1 text-red-400 hover:text-red-600 transition"
                    title="Remove block"
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Block content */}
              <div className="p-4">
                {block.type === "paragraph" && (
                  <textarea
                    value={block.text}
                    onChange={(e) =>
                      updateBlock(index, { ...block, text: e.target.value })
                    }
                    rows={4}
                    className="w-full text-sm text-[#1f1e1b] bg-transparent resize-y focus:outline-none"
                    style={{ fontFamily: "var(--font-source-sans)" }}
                    placeholder="Paragraph text…"
                  />
                )}

                {block.type === "heading" && (
                  <input
                    type="text"
                    value={block.text}
                    onChange={(e) =>
                      updateBlock(index, { ...block, text: e.target.value })
                    }
                    className={`w-full bg-transparent focus:outline-none text-[#1f1e1b] ${
                      block.level === 2
                        ? "text-xl font-bold"
                        : "text-lg font-semibold"
                    }`}
                    style={{ fontFamily: "var(--font-crimson-pro)" }}
                    placeholder={`Heading ${block.level} text…`}
                  />
                )}

                {block.type === "list" && (
                  <div className="space-y-2">
                    {block.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-2">
                        <span className="text-[#1f1e1b]/30 text-sm">•</span>
                        <input
                          type="text"
                          value={item}
                          onChange={(e) =>
                            updateListItem(index, itemIndex, e.target.value)
                          }
                          className="flex-1 text-sm text-[#1f1e1b] bg-transparent focus:outline-none border-b border-[#1f1e1b]/10 pb-1 focus:border-[#c85a32] transition"
                          style={{ fontFamily: "var(--font-source-sans)" }}
                          placeholder="List item…"
                        />
                        <button
                          type="button"
                          onClick={() => removeListItem(index, itemIndex)}
                          className="text-red-400 hover:text-red-600 text-lg leading-none transition"
                          title="Remove item"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => addListItem(index)}
                      className="text-xs text-[#c85a32] hover:underline mt-1"
                      style={{ fontFamily: "var(--font-source-sans)" }}
                    >
                      + Add item
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Add block toolbar */}
          <div className="flex flex-wrap gap-2 pt-2">
            <span
              className="text-xs text-[#1f1e1b]/40 self-center mr-1"
              style={{ fontFamily: "var(--font-source-sans)" }}
            >
              Add:
            </span>
            {(Object.entries(BLOCK_LABELS) as [BlockType, string][]).map(
              ([type, label]) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => addBlock(type)}
                  className="text-xs px-3 py-1.5 border border-[#1f1e1b]/20 rounded-md text-[#1f1e1b]/60 hover:border-[#c85a32] hover:text-[#c85a32] transition"
                  style={{ fontFamily: "var(--font-source-sans)" }}
                >
                  {label}
                </button>
              ),
            )}
          </div>
        </div>
      )}

      {activeTab === "preview" && (
        <div className="p-6 min-h-[200px] bg-white">
          {value.length === 0 ? (
            <p
              className="text-sm text-[#1f1e1b]/40 text-center py-6"
              style={{ fontFamily: "var(--font-source-sans)" }}
            >
              Nothing to preview yet.
            </p>
          ) : (
            value.map((block, i) => <RenderBlock key={i} block={block} />)
          )}
        </div>
      )}
    </div>
  );
}
