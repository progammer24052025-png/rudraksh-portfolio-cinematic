import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  streamText,
  toUIMessageStream,
  type UIMessage,
} from 'ai'
import { google } from '@ai-sdk/google'
import { JARVIS_SYSTEM_PROMPT } from '@/lib/portfolio-data'
import { getJarvisContext } from '@/lib/jarvis-context'

export const maxDuration = 30

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  // Get dynamic portfolio context for RAG-like behavior
  const portfolioContext = getJarvisContext()

  // Combine system prompt with dynamic context
  const systemPrompt = `${JARVIS_SYSTEM_PROMPT}

DYNAMIC WEBSITE CONTEXT:
${portfolioContext}`

  try {
    const result = streamText({
      model: google('gemini-3.6-flash'),
      system: systemPrompt,
      messages: await convertToModelMessages(messages),
      temperature: 0.7,
      maxTokens: 500,
    })

    return createUIMessageStreamResponse({
      stream: toUIMessageStream({
        stream: result.stream,
        onError: (error) => {
          console.error('[Jarvis] Chat error:', error)
          return 'Jarvis encountered an issue. Please try again.'
        },
      }),
    })
  } catch (error) {
    console.error('[Jarvis] API Error:', error)
    return new Response(
      JSON.stringify({
        error: 'Jarvis is temporarily unavailable. Please check your Gemini API configuration.',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    )
  }
}
