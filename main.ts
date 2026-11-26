import { mkdirSync, writeFileSync } from "node:fs";

// One satirical sentence, 320 characters at most: a long roast of the
// lawmakers who would regulate AI, crypto and the whole internet, yet
// cannot convert a file to PDF. The punch lands on the last few words:
// the Convert to PDF button might as well be a nuclear launch code.
const ENTRY =
  "They draft laws to regulate artificial intelligence, crypto, and the entire internet, yet these same lawmakers call IT in a panic because their file is still a Word doc and the Convert to PDF button might as well be a nuclear launch code.";

// The gate allows 1 to 320 characters, exactly one sentence;
// refuse to write an entry that breaks it.
if (ENTRY.length < 1 || ENTRY.length > 320) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-320`);
}
if ((ENTRY.match(/[.!?]/g) ?? []).length !== 1 || !ENTRY.endsWith(".")) {
  throw new Error("entry must be exactly one sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
