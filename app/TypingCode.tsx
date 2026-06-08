"use client";

import { useEffect, useState } from "react";

const snippets = [
  'for note in ["build", "ship"]:\n    print(note)',
  '#include <iostream>\nint main(){ std::cout << "hello"; }',
  '#include <stdio.h>\nint main(){ puts("hello"); }'
];

const typeDelay = 54;
const deleteDelay = 28;
const holdDelay = 1200;

export default function TypingCode() {
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentSnippet = snippets[snippetIndex];
  const visibleCode = currentSnippet.slice(0, charIndex);

  useEffect(() => {
    const isAtEnd = charIndex === currentSnippet.length;
    const isAtStart = charIndex === 0;
    const delay = isDeleting ? deleteDelay : isAtEnd ? holdDelay : typeDelay;

    const timer = window.setTimeout(() => {
      if (!isDeleting && isAtEnd) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && isAtStart) {
        setIsDeleting(false);
        setSnippetIndex((index) => (index + 1) % snippets.length);
        return;
      }

      setCharIndex((index) => index + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [charIndex, currentSnippet, isDeleting]);

  return (
    <code className="typing-code" aria-label={currentSnippet}>
      {visibleCode}
      <span className="typing-caret" aria-hidden="true" />
    </code>
  );
}
