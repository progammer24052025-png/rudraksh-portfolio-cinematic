'use client'

import { useEffect, useRef, useState } from 'react'
import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, Send, X } from 'lucide-react'

const SUGGESTIONS = [
  'Who is Rudraksh?',
  'Tell me about his projects',
  'What are his skills?',
  'How do I contact him?',
]

export function JarvisChat() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
  })

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    })
  }, [messages])

  const send = (text: string) => {
    if (!text.trim() || status !== 'ready') return
    sendMessage({ text })
    setInput('')
  }

  return (
    <>
      {/* Launcher */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full border border-primary/40 bg-secondary px-5 py-3 shadow-lg shadow-primary/10 transition hover:border-primary ${open ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
        aria-label="Open Jarvis AI assistant"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
        </span>
        <span className="font-sans text-sm tracking-[0.2em] text-foreground">
          ASK JARVIS
        </span>
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-4 right-4 z-50 flex h-[min(600px,calc(100dvh-2rem))] w-[min(400px,calc(100vw-2rem))] flex-col overflow-hidden rounded-xl border border-border bg-secondary shadow-2xl shadow-primary/10"
            role="dialog"
            aria-label="Jarvis AI assistant chat"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15">
                  <Bot className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-sans text-sm tracking-[0.2em] text-foreground">
                    JARVIS
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Rudraksh&apos;s AI companion
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4">
              {messages.length === 0 ? (
                <div className="flex h-full flex-col justify-end gap-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Hello, I&apos;m Jarvis — Rudraksh&apos;s AI companion. Ask
                    me anything about him, his skills, or his projects.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => send(s)}
                        className="rounded-full border border-border px-3 py-1.5 text-xs text-foreground transition hover:border-primary hover:text-primary"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`max-w-[85%] rounded-lg px-3.5 py-2.5 text-sm leading-relaxed ${
                        message.role === 'user'
                          ? 'self-end bg-primary text-primary-foreground'
                          : 'self-start bg-muted text-foreground'
                      }`}
                    >
                      {message.parts.map((part, i) =>
                        part.type === 'text' ? (
                          <span key={i} className="whitespace-pre-wrap">
                            {part.text}
                          </span>
                        ) : null,
                      )}
                    </div>
                  ))}
                  {status === 'submitted' && (
                    <div className="flex items-center gap-1.5 self-start rounded-lg bg-muted px-3.5 py-3">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:0ms]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:150ms]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:300ms]" />
                      <span className="sr-only">Jarvis is thinking</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                send(input)
              }}
              className="flex items-center gap-2 border-t border-border p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (
                    e.key === 'Enter' &&
                    (e.nativeEvent.isComposing || e.keyCode === 229)
                  ) {
                    e.preventDefault()
                  }
                }}
                placeholder="Ask about Rudraksh..."
                className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                aria-label="Message Jarvis"
              />
              <button
                type="submit"
                disabled={status !== 'ready' || !input.trim()}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition hover:opacity-90 disabled:opacity-40"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
