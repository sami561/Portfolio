import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";

const RESUME_CONTEXT = `You are a friendly assistant embedded in Sami Ayachi's portfolio website. Answer visitor questions about Sami using ONLY the facts below. Be concise (2-4 sentences), warm, and helpful. If asked something outside this info, say you don't have that detail and suggest contacting Sami directly.

ABOUT: Sami Ayachi is a Software Engineer and Full Stack JavaScript Developer based in Sousse, Tunisia, with nearly 2 years of professional experience. Specialized in React Native and React.js, with expertise across the full stack from frontends to backend services and cloud deployments.

EXPERIENCE:
- Aug 2025–Present: React Native Mobile Developer at Kamioun
- Feb 2025–Jul 2025: End-of-Study Intern at Kamioun
- Feb 2024–Sep 2024: Full-Stack Developer at Arsela Technologies
- Jun 2023–Sep 2023: Summer Intern at Arsela Technologies

WORK PROJECTS:
1. Coding Moon – 3D Pokémon Battle Game: a browser-based 3D Pokémon battle game using React and Vite. Turn-based battle system with coin collection, attacks, health points, and level progression. Winner of the Coding Moon Challenge 2025.
2. Enhanced Loan Application System: a microservice using Spring Boot integrated with a Django API for loan and mortgage calculations. Responsive frontend using React, Redux Toolkit, and Material-UI. Containerized with Docker and CI/CD with Jenkins.
3. Calculateur Manorga – Solar Panel Roof Estimator: a web application using React that estimates the number of solar panels that can fit on a user's roof. Integrated weather data and Google Maps APIs for visualization.

PERSONAL PROJECT:
E-Citoyen – an e-government project. Developed responsive web interfaces using React.js and Next.js, implemented real-time notifications with Socket.io, and designed a Redis-based scheduled queue system. Stack: Redux, ReduxSaga, Next.js, React.js, Express, MongoDB, Redis.

CONTACT: Phone +216 28 699 806, Email sami.ayachi.dev@gmail.com, Address Tunisia, Sousse.`;

export async function POST(request: Request) {
    if (!process.env.ANTHROPIC_API_KEY) {
        return NextResponse.json(
            { error: "Chat is not configured" },
            { status: 503 }
        );
    }

    try {
        const { messages } = (await request.json()) as {
            messages: Anthropic.MessageParam[];
        };

        if (!Array.isArray(messages) || messages.length === 0) {
            return NextResponse.json({ error: "Invalid request" }, { status: 400 });
        }

        const client = new Anthropic();
        const response = await client.messages.create({
            model: "claude-haiku-4-5",
            max_tokens: 400,
            system: RESUME_CONTEXT,
            messages: messages.slice(-20).map((m) => ({
                role: m.role === "assistant" ? "assistant" : "user",
                content: String(m.content).slice(0, 2000),
            })),
        });

        const text = response.content
            .filter(
                (block): block is Anthropic.TextBlock => block.type === "text"
            )
            .map((block) => block.text)
            .join("");

        return NextResponse.json({ text });
    } catch (error) {
        if (error instanceof Anthropic.APIError) {
            return NextResponse.json(
                { error: `Upstream error (${error.status})` },
                { status: 502 }
            );
        }
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
