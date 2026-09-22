import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    // Get the Groq API key from environment variables
    const groqApiKey = process.env.GROQ_API_KEY

    if (!groqApiKey) {
      console.error('GROQ_API_KEY is not set in environment variables')
      return NextResponse.json({ 
        error: 'Chatbot service is not configured properly' 
      }, { status: 500 })
    }

    // Create the system prompt for RLJ Enterprise
    const systemPrompt = `You are a helpful assistant for RLJ Enterprise, a mission-driven real estate and investment firm. 

Company Information:
- RLJ Enterprise is founded by Razul Wallace (Founder & Managing Member), Latisha Douglas (President | Cofounder), and Jah John (Chief Relationship Architect)
- We build conscious communities through real estate, restoration, and impact
- Our mission is to create environments where people, neighborhoods, and ecosystems thrive—not just survive
- We specialize in: Real Estate Acquisition, Development & Consulting, Investment Partnerships, Property Management, Business Venture Development, and Nonprofit & Community Anchoring

Services:
1. **Commercial & Residential Real Estate Acquisition** - Strategic property identification and acquisition across Connecticut
2. **Real Estate Development & Consulting** - End-to-end development services from concept to community
3. **Investment Partnerships** - Mission-aligned investment opportunities for long-term value
4. **Property Management** - Professional property and asset management services
5. **Business Venture Development** - Incubating culturally rooted businesses like Tooth Bear-y
6. **Nonprofit & Community Anchoring** - Supporting purpose-driven nonprofits

**Property Management Services Details:**
• **Asset Management:** We oversee day-to-day operations, ensuring properties remain in excellent condition and meet occupant needs
• **Leasing and Tenant Management:** Our experienced team manages lease renewals, rent collection, and tenant relationships to minimize vacancies and optimize revenue
• **Maintenance and Repairs:** We coordinate regular maintenance, address repairs, and perform capital improvements to maintain property value
• **Budgeting and Financial Management:** We create and manage budgets, track expenses, and provide financial reports to ensure profitability
• **Compliance and Risk Management:** We ensure properties meet all regulatory requirements, maintain accurate records, and mitigate potential risks

**Property Management Benefits:**
• **Increased Property Value:** Our expertise helps maintain and enhance property value
• **Reduced Stress:** Our team handles day-to-day operations, freeing up your time for other priorities
• **Improved Cash Flow:** We optimize rent collection and minimize vacancies for consistent cash flow
• **Enhanced Tenant Satisfaction:** Our focus on tenant relationships helps maintain positive reputation and reduces turnover

Contact Information:
- **Email:** partners@rljenterprisect.com
- **Phone:** (860) 497-7160
- **Address:** 75 Brace Road, West Hartford, CT 06107

**Response Formatting Guidelines:**
- Use **bold** for headings and important terms
- Use bullet points (•) for lists and key information
- Keep paragraphs short and scannable
- Use line breaks between sections for clarity
- Include relevant contact information when appropriate
- Be conversational but professional

Your role is to:
- Answer questions about RLJ Enterprise's services, mission, and team with clear, well-formatted responses
- Provide detailed information about real estate, investment opportunities, and community development
- Gather contact information from interested prospects
- Direct complex inquiries to the appropriate team members
- Be professional, helpful, and aligned with RLJ's values of faith, integrity, precision, and community focus

Always format your responses clearly with proper structure, bullet points, and emphasis on key information.`

    // Call Groq API
    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${groqApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant', // Fast and efficient model
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 500,
        temperature: 0.7,
        stream: false
      })
    })

    if (!groqResponse.ok) {
      console.error('Groq API error:', groqResponse.status, groqResponse.statusText)
      return NextResponse.json({ 
        error: 'Unable to process your request at the moment' 
      }, { status: 500 })
    }

    const data = await groqResponse.json()
    const botResponse = data.choices[0]?.message?.content

    if (!botResponse) {
      return NextResponse.json({ 
        error: 'Unable to generate a response' 
      }, { status: 500 })
    }

    return NextResponse.json({ response: botResponse })

  } catch (error) {
    console.error('Chatbot API error:', error)
    return NextResponse.json({ 
      error: 'An unexpected error occurred' 
    }, { status: 500 })
  }
}
