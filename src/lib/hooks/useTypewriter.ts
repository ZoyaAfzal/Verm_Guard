import { useEffect, useState } from "react";

export function useTypewriter(words: string[], typeMs = 90, holdMs = 1400) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const w = words[i % words.length];
    if (!deleting && text === w) {
      const t = setTimeout(() => setDeleting(true), holdMs);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setI((p) => p + 1);
      return;
    }
    const t = setTimeout(() => {
      setText(deleting ? w.slice(0, text.length - 1) : w.slice(0, text.length + 1));
    }, deleting ? typeMs / 2 : typeMs);
    return () => clearTimeout(t);
  }, [text, deleting, i, words, typeMs, holdMs]);
  return text;
}
