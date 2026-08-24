import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";

const RESUME_CONTEXT = `You are a friendly assistant embedded in Sami Ayachi's portfolio website. Answer visitor questions about Sami using ONLY the facts below. Be concise (2-4 sentences), warm, and helpful. If asked something outside this info, say you don't have that detail and suggest contacting Sami directly.

ABOUT: Sami Ayachi is a Software Engineer and Full-Stack Developer based in Sousse, Tunisia, with 2+ years of professional experience. Specialized in React Native and React.js, with expertise across the full stack from frontends to backend services and cloud deployments.

EXPERIENCE:
- Aug 2025–Present: Full-Stack Developer at Kamioun
- Feb 2025–Jul 2025: End-of-Study Intern at Kamioun
- Feb 2024–Sep 2024: Full-Stack Developer at Arsela Technologies
- Jun 2023–Sep 2023: Summer Intern at Arsela Technologies

FEATURED WORK — Kamioun, B2B Retail Marketplace (Aug 2025–Present, Full-Stack Developer):
B2B marketplace digitizing supply for Tunisian corner shops — from ordering through delivery and cash collection. Originally built on Magento, migrated to Medusa v2 / Mercur.
- Contributed to the Magento → Medusa v2 migration: analyzed existing REST endpoints and order workflows, mapped them to Medusa equivalents, adapted the mobile app's API layer to the new backend.
- Built backend features on Medusa v2 / Mercur: delivery agent management, loyalty program, per-supplier delivery dates, COD payment flows.
- Built the order confirmation module and an ads management module in the OMS (drag-and-drop placement config, dynamic rendering in the retailer app).
- Built the retailer mobile app (React Native / Expo): catalog, cart, checkout, order tracking, loyalty, Arabic/French localization — published on Google Play.
- Built delivery and order-picking apps: proximity-optimized routes via Google Maps API, delivery statuses, COD collection, daily KPIs.
Stack: React Native, Expo, TypeScript, Medusa v2, Mercur, Node.js, PostgreSQL, Magento, Firebase, Google Maps API.

OTHER PROJECTS:
1. Coding Moon – Turn-Based 3D Combat Game: a browser-based 3D turn-based combat game using React, Vite and Three.js. Battle system with coin collection, attacks, health points, and level progression. Winner of the Coding Moon Challenge 2025.
2. Enhanced Loan Application System: a microservice using Spring Boot integrated with a Django API for loan and mortgage calculations. Responsive frontend using React, Redux Toolkit, and Material-UI. Containerized with Docker and CI/CD with Jenkins.
3. E-Learning Platform – Online Teaching Application: web platform for managing and browsing educational content, built with Angular and a Laravel backend. Responsive interfaces using Bootstrap and Angular Material.
4. Calculateur Manorga – Solar Panel Roof Estimator: a web application using React that estimates the number of solar panels that can fit on a user's roof. Integrated weather data and Google Maps APIs for visualization.

PERSONAL PROJECT:
E-Citoyen – an e-government project. Developed responsive web interfaces using React.js and Next.js, implemented real-time notifications with Socket.io, and designed a Redis-based scheduled queue system. Stack: Redux, ReduxSaga, Next.js, React.js, Express, MongoDB, Redis.

SKILLS: JavaScript, TypeScript, React.js, Next.js, React Native, Expo, Medusa v2, Mercur, Magento, Node.js, Express, NestJS, Spring Boot, Python, GraphQL, Redux Saga, TailwindCSS, PostgreSQL, MySQL, MongoDB, Redis, Docker, Kubernetes, AWS, Git, Jenkins, Azure.

CERTIFICATIONS: Microsoft Certified Azure Fundamentals (AZ-900), Microsoft Certified Azure AI Fundamentals (AI-900).

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
