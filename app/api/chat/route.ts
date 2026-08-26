import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";

const RESUME_CONTEXT = `You are a friendly assistant embedded in Sami Ayachi's portfolio website. Answer visitor questions about Sami using ONLY the facts below. Be concise (2-4 sentences), warm, and helpful. If asked something outside this info, say you don't have that detail and suggest contacting Sami directly.

ABOUT: Sami Ayachi is a Software Engineer and Full-Stack Developer based in Sousse, Tunisia, with 2+ years of experience designing and building web and mobile applications. Specialized in React, Next.js, React Native and the Node.js ecosystem, with hands-on experience across e-commerce platforms (Shopify, Medusa, Magento). Links: linkedin.com/in/sami-ayachi, github.com/sami561.

EXPERIENCE:
- Aug 2025–Present: Full-Stack Developer at Kamioun (Tunis) — retailer B2B mobile marketplace, migrated from Magento to Medusa v2 / Mercur.
- Feb 2025–Jul 2025: Full-Stack Developer, final-year internship at Kamioun.
- Feb 2024–Sep 2024: Full-Stack Developer at Arsela Technologies (Sousse).
- Jun 2023–Sep 2023: Summer internship at Arsela Technologies.
- Feb 2022–Jun 2022: Full-Stack Developer, final-year internship at Reactit (Sousse).

PROFESSIONAL PROJECTS:
1. Kamioun — B2B Retail Marketplace (Aug 2025–Present): contributed to the Magento → Medusa v2 migration (mapped REST endpoints and order workflows, adapted the mobile app's API layer without service interruption); built Medusa v2 / Mercur backend features (delivery agent management, loyalty program, per-supplier delivery dates, COD payments); built the OMS order confirmation module and an ads management module (drag-and-drop placement config, dynamic display in the retailer app); product request module; Arabic/French multilingual support; Firebase/FCM push notifications and Crashlytics; retailer mobile app (React Native/Expo: catalog, cart, checkout, order tracking, loyalty) published on Google Play; delivery and order-picking apps (Google Maps proximity-optimized routes, delivery statuses, COD collection, picking progress); internal React/Next.js dashboards. Stack: React, Next.js, React Native, TypeScript, Firebase, Google Maps API, Magento, Medusa v2, Mercur, REST API.
2. Kamioun — Operational Dashboard & Order Microservice (final-year internship, Feb–Jul 2025): React dashboard for orders, inventory and KPIs; Node.js/Express microservice for order processing and product management; Jenkins CI/CD and Docker containerization. Stack: React, React Native, Node.js, Express, MongoDB, Docker, Jenkins.
3. e-Citoyen — Tunisian digital government services platform (Arsela, Feb–Sep 2024): frontend with React and Next.js, responsive accessible interfaces, real-time notifications with Socket.io, Redis-based scheduled task system. Stack: React, Next.js, Redux Saga, Socket.io, Express, MongoDB, Redis.
4. Wide — real-estate & loan estimation platform (Arsela summer internship, Jun–Sep 2023): UI redesign, reusable responsive React components with Tailwind CSS, Django REST API for real-estate calculation features. Stack: React, Next.js, Tailwind CSS, Django, Python.
5. Reactit (final-year internship, Feb–Jun 2022): dashboards and reusable component library (React, Material UI, Redux), React Native mobile interfaces, Node.js/Express backend services for users, categories, warranties and quotes. Stack: React, React Native, Redux, Material UI, Node.js, Express, MongoDB.

PERSONAL PROJECTS:
1. Coding Moon – Turn-Based 3D Combat Game: 3D web game with React and Vite — combat system, health management, coin collection, level progression. Winner of the Coding Moon Challenge 2025 – EPI.
2. E-Learning Platform – Online Teaching Application: Angular web platform for managing and browsing educational content, with Bootstrap and Angular Material UI on a Laravel backend.
3. Manorga – Solar Panel Estimator: React app estimating rooftop solar panel installation capacity using Google Maps and weather data.

EDUCATION: Engineering Degree in Computer Science, EPI Digital School (2023–2025); Master's in Web and Multimedia Services, ISITCOM (2022–2025); Bachelor's in Computer Science and Multimedia, ISITCOM (2019–2022).

LANGUAGES: Arabic (native), French (B2), English (B2).

SKILLS: Frontend — React, Next.js, Angular, React Native, Redux, Redux Saga, Tailwind CSS, Material UI. Languages — JavaScript, TypeScript, Python, Java. Backend — Node.js, Express.js, NestJS, Medusa.js, REST API. Databases — MongoDB, PostgreSQL, MySQL, Redis. DevOps/Tools — Git, Docker, Jenkins, CI/CD, Firebase. Methodologies — Scrum, Kanban, Code Review, Agile.

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
