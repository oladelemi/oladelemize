export interface Product {
  id: string;
  name: string;
  mvp: string;
  description: string;
  market: string;
  whyFit: string;
  revenueModel: string;
  category: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 'oye',
    name: 'Oyè',
    mvp: 'Personalized grooming subscription boxes tailored to your skin type and style preferences.',
    description: 'Oyè revolutionizes personal grooming by delivering customized product selections based on individual skin analysis, lifestyle, and preferences. Our AI-powered recommendation engine ensures every product in your box is perfectly suited to your needs.',
    market: 'The global men\'s grooming market is valued at $81.2 billion and growing at 6.2% CAGR. Subscription box services have proven successful in beauty (Birchbox, Ipsy) but remain underserved in men\'s grooming.',
    whyFit: 'Personal grooming is highly individual, yet most products use a one-size-fits-all approach. Oyè eliminates the guesswork by combining dermatological science with personal preference data to deliver truly personalized experiences.',
    revenueModel: 'Monthly subscription tiers ($29-79), affiliate partnerships with grooming brands, private label premium products, and one-time gift boxes.',
    category: 'Consumer Products',
    featured: true,
  },
  {
    id: 'stackz',
    name: 'Stackz',
    mvp: 'AI-powered stock and options recommendation platform with real-time market analysis.',
    description: 'Stackz democratizes advanced financial analysis by providing retail investors with institutional-grade research and recommendations. Our platform combines machine learning, sentiment analysis, and technical indicators to identify high-probability trading opportunities.',
    market: 'The global wealth management platform market is $3.4 billion, with retail trading platforms growing 15% annually. Over 10 million new retail investors entered the market in 2021 alone.',
    whyFit: 'Retail investors lack access to sophisticated analysis tools that institutions use. Stackz levels the playing field by making complex financial data accessible and actionable for everyday investors.',
    revenueModel: 'Freemium SaaS model with premium tiers ($19-99/month), commission partnerships with brokerages, and institutional licensing deals.',
    category: 'FinTech',
    featured: true,
  },
  {
    id: 'trendit',
    name: 'TrendIt',
    mvp: 'Real-time trend detection platform identifying emerging opportunities before they go mainstream.',
    description: 'TrendIt uses advanced data mining and social listening to identify emerging trends across fashion, technology, culture, and consumer behavior. Perfect for brands, investors, and entrepreneurs who need to stay ahead of the curve.',
    market: 'The market research industry is worth $76 billion globally, with trend forecasting being a $2.1 billion niche. Early trend identification can provide 6-18 month competitive advantages.',
    whyFit: 'In today\'s fast-moving digital landscape, trends emerge and fade rapidly. TrendIt\'s real-time analysis gives users the critical early-warning system they need to capitalize on opportunities.',
    revenueModel: 'Enterprise subscriptions ($199-999/month), custom trend reports, API licensing, and consulting services for Fortune 500 companies.',
    category: 'Data & Analytics',
  },
  {
    id: 'beamer',
    name: 'Beamer',
    mvp: 'Wedding photo sharing app where guests upload POV shots for instant collaborative albums.',
    description: 'Beamer transforms wedding photography by enabling guests to contribute their unique perspectives instantly. Couples get hundreds of candid, authentic moments they would never have captured otherwise, creating richer wedding memories.',
    market: 'The wedding industry is worth $344 billion globally, with photography services representing $5.1 billion. Modern couples increasingly value authentic, candid moments over traditional posed photography.',
    whyFit: 'Traditional wedding photography captures only the photographer\'s perspective. Beamer unlocks the collective viewpoint of all guests, creating comprehensive visual storytelling that no single photographer could achieve.',
    revenueModel: 'Event-based pricing ($49-199 per wedding), premium editing services, photo printing partnerships, and corporate event expansion.',
    category: 'Social & Events',
  },
  {
    id: 'tinytown',
    name: 'TinyTown',
    mvp: 'Hyperlocal community platform connecting neighbors for events, skill swaps, and micro-services.',
    description: 'TinyTown rebuilds community connections in the digital age by creating hyperlocal networks where neighbors can organize events, exchange skills, and support each other. Think Nextdoor meets TaskRabbit with a community-first approach.',
    market: 'The local services market is $520 billion annually. Hyperlocal platforms like Nextdoor have 67M users, proving demand for neighborhood-focused digital communities.',
    whyFit: 'Modern urban life often lacks genuine community connection. TinyTown addresses the loneliness epidemic by facilitating meaningful local relationships and practical mutual aid.',
    revenueModel: 'Transaction fees on skill swaps and services (5-10%), premium community features, local business advertising, and event ticketing.',
    category: 'Community & Social',
  },
  {
    id: 'recalldeck',
    name: 'RecallDeck',
    mvp: 'AI-powered flashcard generator that creates personalized study materials from your files.',
    description: 'RecallDeck transforms any document, video, or audio file into optimized flashcards using spaced repetition algorithms. Perfect for students, professionals, and lifelong learners who want to retain more information efficiently.',
    market: 'The global e-learning market is $399.3 billion, with spaced repetition and flashcard apps like Anki and Quizlet serving millions of users. The professional development market adds another $366 billion opportunity.',
    whyFit: 'Information retention is a universal challenge, but current tools require manual effort to create study materials. RecallDeck automates this process while applying proven learning science principles.',
    revenueModel: 'Freemium model with premium features ($9.99/month), enterprise licenses for educational institutions, and API access for integration partners.',
    category: 'EdTech',
  },
  {
    id: 'parkpulse',
    name: 'ParkPulse',
    mvp: 'Real-time urban micro-parking availability tracker using IoT sensors and crowd-sourced data.',
    description: 'ParkPulse solves urban parking frustration by providing real-time availability for street parking, lots, and private spaces. Our IoT sensor network and crowd-sourced updates ensure accurate, up-to-the-minute parking information.',
    market: 'Urban parking is a $100 billion global market, with drivers spending 17 hours annually searching for parking. Smart parking solutions are projected to reach $11.2 billion by 2025.',
    whyFit: 'Parking is a daily pain point for millions of urban drivers. Current solutions focus on expensive parking lots, while ParkPulse addresses the more common need for street and micro-parking spaces.',
    revenueModel: 'Municipal partnerships, parking meter integration revenue sharing, premium app features ($4.99/month), and advertising from local businesses.',
    category: 'Smart City & IoT',
  },
  {
    id: 'arfitmirror',
    name: 'ARFitMirror',
    mvp: 'Low-cost AR fitness form correction using smartphone camera and AI pose detection.',
    description: 'ARFitMirror democratizes personal training by providing real-time form correction using just a smartphone camera. Our AI analyzes body movement and provides instant feedback, making proper exercise technique accessible to everyone.',
    market: 'The global fitness app market is $4.4 billion and growing at 14.7% CAGR. Home fitness surged during COVID-19, with 76% of users continuing digital workouts post-pandemic.',
    whyFit: 'Poor form leads to injuries and ineffective workouts, but personal trainers are expensive and not always available. ARFitMirror provides expert-level guidance at a fraction of the cost.',
    revenueModel: 'Freemium app with premium workouts ($14.99/month), corporate wellness partnerships, and white-label licensing to fitness equipment manufacturers.',
    category: 'Health & Fitness',
  },
  {
    id: 'fleetfit',
    name: 'FleetFit',
    mvp: 'AI-powered vehicle maintenance forecasting for small business fleets to prevent breakdowns.',
    description: 'FleetFit uses machine learning to predict maintenance needs for small business vehicle fleets, preventing costly breakdowns and optimizing service schedules. Our platform integrates with existing fleet management tools and provides actionable insights.',
    market: 'The global fleet management market is worth $34.9 billion, with predictive maintenance representing the fastest-growing segment at 31.9% CAGR. Small businesses operate 60% of commercial vehicles but lack enterprise-level tools.',
    whyFit: 'Small businesses can\'t afford vehicle downtime but lack the sophisticated maintenance prediction tools available to large enterprises. FleetFit bridges this gap with affordable, AI-powered insights.',
    revenueModel: 'Per-vehicle monthly subscriptions ($19-49), integration partnerships with fleet management platforms, and premium analytics packages for larger fleets.',
    category: 'B2B & Logistics',
  },
];

export const getFeaturedProducts = () => products.filter(p => p.featured);

export const getProductById = (id: string) => products.find(p => p.id === id);

export const getProductsByCategory = (category: string) => products.filter(p => p.category === category);