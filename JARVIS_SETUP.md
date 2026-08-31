# Jarvis Setup Guide - Gemini API Integration

Your Jarvis AI assistant is now fully integrated with Google's Gemini API. Here's how to activate it:

## Step 1: Get Your Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Click "Get API Key" → "Create API Key in new project"
3. Copy your API key

## Step 2: Configure Environment Variables

Create a `.env.local` file in the project root:

```bash
# In .env.local
GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here
```

**Alternative** (if using the Vercel AI SDK Google provider):
```bash
GOOGLE_API_KEY=your_api_key_here
```

## Step 3: Verify the Setup

Your Jarvis now has:
- ✅ **Dynamic Context Injection**: Automatically pulls all portfolio data from `PORTFOLIO` object
- ✅ **RAG System**: Uses `getJarvisContext()` to format website content as knowledge base
- ✅ **Gemini 1.5 Flash**: Fast, efficient LLM model for responses
- ✅ **Auto-Update**: Any changes to portfolio data are immediately reflected in Jarvis responses
- ✅ **Clean Messaging**: Focused on achievements, not AI methodology

## How It Works

### Architecture:
```
User Input → Jarvis Chat Component → Chat API Route
  ↓
System Prompt + Dynamic Portfolio Context → Gemini API
  ↓
Response Stream → Chat Component → Display
```

### Portfolio Content Extraction:
The system automatically extracts:
- Personal info (name, email, contact)
- About section and research interests
- Technical skills
- Three pillars of approach
- Projects (with descriptions and links)
- Journey and achievements
- Statistics

This content is formatted and injected into the system prompt, enabling Jarvis to answer questions with complete context about you and your work.

## Features

### 1. **Always Up-to-Date**
Jarvis automatically pulls the latest content from your portfolio data. Update `PORTFOLIO` in `lib/portfolio-data.ts` and Jarvis will immediately have the new information.

### 2. **RAG-Like Behavior**
Using `getJarvisContext()` function in `lib/jarvis-context.ts`:
- Formats all portfolio data for optimal LLM comprehension
- Provides structured knowledge base
- Enables contextual Q&A about your work

### 3. **Smart Responses**
Jarvis:
- Answers only about you and your portfolio
- Politely declines off-topic questions with wit
- Maintains personality (witty, playful, like Tony Stark's JARVIS)
- Supports bilingual responses (English/Hindi)

### 4. **Production Ready**
- Max response time: 30 seconds
- Token limit: 500 tokens per response
- Temperature: 0.7 (balanced creativity and consistency)
- Error handling with fallback messages

## Testing

1. Start your dev server:
```bash
pnpm dev
```

2. Click "ASK JARVIS" button (bottom right of portfolio)

3. Try these questions:
   - "Who is Rudraksh?"
   - "Tell me about your projects"
   - "What are your technical skills?"
   - "How do I contact you?"

## File Structure

```
lib/
├── portfolio-data.ts      # Main portfolio data + JARVIS_SYSTEM_PROMPT
└── jarvis-context.ts      # Dynamic context extraction (NEW)

app/api/chat/
└── route.ts               # Chat API endpoint with Gemini integration (UPDATED)

components/
└── jarvis-chat.tsx        # Chat UI component

.env.local.example         # Environment variable template (NEW)
```

## Customization

### Change System Prompt
Edit `JARVIS_SYSTEM_PROMPT` in `lib/portfolio-data.ts` to modify Jarvis's personality or response rules.

### Add New Portfolio Sections
1. Add fields to `PORTFOLIO` object
2. Update `getJarvisContext()` in `lib/jarvis-context.ts` to include new fields
3. Jarvis will immediately have access to new information

### Adjust Response Parameters
In `app/api/chat/route.ts`:
- `temperature`: 0.7 (higher = more creative, lower = more consistent)
- `maxTokens`: 500 (response length limit)
- Model: `gemini-1.5-flash` (change to `gemini-pro` for more capabilities)

## Troubleshooting

### "Jarvis encountered an issue"
1. Check `.env.local` has correct `GOOGLE_GENERATIVE_AI_API_KEY`
2. Verify API key is active in Google AI Studio
3. Check browser console for errors

### API Key Not Working
- Ensure you're using the correct environment variable name
- Try recreating the API key in Google AI Studio
- Check that your Google account has quota available

### Jarvis Gives Wrong Information
- Verify `PORTFOLIO` data is correct in `lib/portfolio-data.ts`
- Run `pnpm dev` to ensure changes are hot-reloaded
- Clear browser cache and reload

## Deployment

When deploying to Vercel:

1. Go to your Vercel project settings
2. Add environment variable: `GOOGLE_GENERATIVE_AI_API_KEY`
3. Paste your Gemini API key value
4. Deploy

Jarvis will work exactly the same on production!

---

**Your Portfolio is Now Intelligent! 🚀**

Jarvis is ready to impress visitors with witty, contextual responses about your work and achievements.
