"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";

type ChatMessage = { role: "user" | "assistant"; text: string };

const ChatWidget = () => {
  const t = useTranslations("Chat");
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", text: t("greeting") },
  ]);

  const suggestions = t.raw("suggestions") as string[];

  const runChat = async (question: string) => {
    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user", text: question },
    ];
    setMessages(nextMessages);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.map((m) => ({
            role: m.role,
            content: m.text,
          })),
        }),
      });
      if (!res.ok) throw new Error("chat failed");
      const data = (await res.json()) as { text?: string };
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: data.text || t("fallback") },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: t("fallback") },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const sendChat = () => {
    const q = input.trim();
    if (!q || loading) return;
    setInput("");
    runChat(q);
  };

  return (
    <div className="fixed bottom-7 right-7 z-[100] flex flex-col items-end gap-3.5">
      {open && (
        <div className="w-[calc(100vw-3.5rem)] max-w-[360px] h-[480px] bg-card border border-input-border rounded-[18px] flex flex-col overflow-hidden shadow-[0_20px_60px_oklch(0%_0_0_/_0.12)]">
          {/* Header */}
          <div className="px-5 py-[18px] border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="font-mono text-sm font-semibold">
                {t("title")}
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-muted text-lg leading-none hover:text-foreground"
            >
              ✕
            </button>
          </div>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-5 py-[18px] flex flex-col gap-3.5">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={
                  msg.role === "user"
                    ? "self-end max-w-[85%] text-[13.5px] leading-[1.5] bg-accent text-accent-foreground rounded-[12px_12px_2px_12px] px-3.5 py-2.5"
                    : "self-start max-w-[85%] text-[13.5px] leading-[1.5] bg-[var(--chat-bubble)] text-foreground rounded-[12px_12px_12px_2px] px-3.5 py-2.5"
                }
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="font-mono text-[13px] text-faint">
                {t("thinking")}
              </div>
            )}
          </div>
          {/* Suggestions */}
          <div className="flex flex-wrap gap-2 px-5 pb-3">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => !loading && runChat(s)}
                className="font-mono text-xs bg-accent-soft text-accent-soft-text border border-accent-soft-border rounded-full px-3 py-[7px] hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
          {/* Input */}
          <div className="flex gap-2 px-4 py-3.5 border-t border-border">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendChat()}
              placeholder={t("placeholder")}
              className="flex-1 min-w-0 font-mono text-[13px] bg-background border border-input-border rounded-[10px] px-3.5 py-[11px] text-foreground outline-none focus:border-accent"
            />
            <button
              onClick={sendChat}
              aria-label="Send"
              className="font-mono font-semibold text-[13px] bg-accent text-accent-foreground rounded-[10px] px-4 hover:bg-accent-hover transition-colors"
            >
              →
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Chat"
        className="w-[58px] h-[58px] rounded-full bg-accent shadow-[0_10px_30px_oklch(0%_0_0_/_0.12)] flex items-center justify-center hover:bg-accent-hover transition-colors"
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="var(--accent-foreground)"
        >
          <path d="M12 2C6.5 2 2 5.9 2 10.7c0 2.6 1.4 4.9 3.5 6.5-.1.8-.5 2.3-1.5 3.8-.1.2.1.5.4.4 1.9-.6 3.4-1.5 4.2-2.1.8.2 1.6.3 2.4.3 5.5 0 10-3.9 10-8.7S17.5 2 12 2z" />
        </svg>
      </button>
    </div>
  );
};

export default ChatWidget;
