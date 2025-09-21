# RLJ Enterprise Chatbot Setup Guide

## Overview
The RLJ Enterprise website now includes an AI-powered chatbot assistant that helps visitors learn about services and gather contact information.

## Features
- 🤖 AI-powered responses using Groq's LLaMA model
- 💬 Real-time chat interface with modern UI
- 📱 Responsive design that works on all devices
- ⚡ Quick question suggestions for common inquiries
- 🔗 Direct integration with contact forms

## Setup Instructions

### 1. Get Groq API Key
1. Visit [Groq Console](https://console.groq.com/)
2. Sign up for a free account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the API key for the next step

### 2. Environment Variables
Create a `.env.local` file in your project root and add:

```env
# Groq API Configuration
GROQ_API_KEY=your_groq_api_key_here

# Next.js Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Replace `your_groq_api_key_here` with your actual Groq API key.

### 3. Installation
The chatbot is already integrated into the website. No additional installation required.

## Usage

### For Visitors
- Click the chat button in the bottom-right corner
- Ask questions about RLJ Enterprise services
- Use quick question suggestions
- Get information about real estate, investments, and partnerships

### For Developers
The chatbot includes:
- **Component**: `src/components/Chatbot.tsx`
- **API Route**: `src/app/api/chatbot/route.ts`
- **Integration**: Added to main layout

## Customization

### Modify Responses
Edit the `systemPrompt` in `src/app/api/chatbot/route.ts` to:
- Update company information
- Add new services
- Modify response tone
- Include additional contact details

### UI Customization
Edit `src/components/Chatbot.tsx` to:
- Change colors and styling
- Add new quick questions
- Modify the chat interface
- Add additional features

### Model Configuration
In `src/app/api/chatbot/route.ts`, you can:
- Change the Groq model (llama-3.1-8b-instant, llama-3.1-70b-versatile, etc.)
- Adjust temperature and max_tokens
- Enable streaming responses

## Troubleshooting

### Common Issues
1. **"Chatbot service not configured"** - Check that GROQ_API_KEY is set in .env.local
2. **API errors** - Verify your Groq API key is valid and has credits
3. **Slow responses** - Consider using a faster model or reducing max_tokens

### Testing
1. Start your development server: `npm run dev`
2. Open the website and click the chat button
3. Test with sample questions like "What services do you offer?"
4. Check browser console for any errors

## Security Notes
- API keys are server-side only (not exposed to client)
- Input validation prevents malicious requests
- Rate limiting should be added for production use
- Consider adding user authentication for sensitive operations

## Production Deployment
1. Set environment variables in your hosting platform
2. Ensure GROQ_API_KEY is configured in production
3. Test the chatbot functionality after deployment
4. Monitor API usage and costs

## Support
For issues or questions about the chatbot integration, contact the development team.
