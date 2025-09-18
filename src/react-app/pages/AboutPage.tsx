import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button-enhanced';
import { Separator } from '@/components/ui/separator';
import { 
  Sparkles, 
  Target, 
  Users, 
  Lightbulb,
  Rocket,
  Heart,
  Mail,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import founder from '@/assets/bash.jpg';

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="bg-primary/10 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <Sparkles className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-exclusive-gradient bg-clip-text text-transparent">
            About Oladelemi
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Bridging the gap between innovative product concepts and market reality. 
            Oladelemi is where our founder's ideas meet today's opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Mission & Vision Column */}
          <div className="space-y-8">
            {/* Mission */}
            <Card className="shadow-premium">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Target className="h-6 w-6 text-primary" />
                  <CardTitle>Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To showcase innovative digital and consumer product concepts that have the potential 
                  to transform markets and improve lives. We believe great ideas deserve great execution, 
                  and we're here to connect visionary concepts with the right people to make them reality.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="shadow-premium">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Rocket className="h-6 w-6 text-accent" />
                  <CardTitle>Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  A world where innovative ideas don't remain just concepts, but become the products 
                  and services that shape our future. I envision Oladelemi as the premier destination 
                  for discovering and developing a new generation of breakthrough products.
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="shadow-premium">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Heart className="h-6 w-6 text-destructive" />
                  <CardTitle>Our Values</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Innovation First</h4>
                  <p className="text-sm text-muted-foreground">
                    We prioritize groundbreaking ideas that challenge the status quo and create new possibilities.
                  </p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold mb-2">Market Viability</h4>
                  <p className="text-sm text-muted-foreground">
                    Every concept is evaluated for real-world potential and sustainable business models.
                  </p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold mb-2">Community Driven</h4>
                  <p className="text-sm text-muted-foreground">
                    We believe in the power of collective insight and collaborative development.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Story & Community Column */}
          <div className="space-y-8">
            {/* The Story */}
            <Card className="shadow-premium">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Lightbulb className="h-6 w-6 text-primary" />
                  <CardTitle>The Story Behind Oladelemi</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Oladelemi was born from a simple observation: incredible product ideas are everywhere, 
                  but most never see the light of day. Whether due to lack of resources, connections, 
                  or market insight, countless innovations remain trapped in the realm of "what if."
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our founder experienced this firsthand—developing product concepts that had real potential 
                  but needed the right environment to flourish. Oladelemi represents the solution: 
                  a curated platform where innovative ideas meet the people who can bring them to life.
                </p>
              </CardContent>
            </Card>

            {/* Community */}
            <Card className="shadow-premium">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-accent" />
                  <CardTitle>Our Community</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Oladelemi brings together a diverse community of innovators, entrepreneurs, 
                  and industry experts. Our teams share a common passion for 
                  breakthrough products and transformative ideas.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center p-3 bg-primary/5 rounded-lg">
                    <div className="font-bold text-primary text-lg">7+</div>
                    <div className="text-muted-foreground">Members</div>
                  </div>
                  <div className="text-center p-3 bg-accent/10 rounded-lg">
                    <div className="font-bold text-accent text-lg">9</div>
                    <div className="text-muted-foreground">Products</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Get Involved */}
            <Card className="shadow-premium border-primary/20">
              <CardHeader>
                <CardTitle>Ready to Get Involved?</CardTitle>
                <CardDescription>
                  Whether you're an innovator, investor, or industry expert, 
                  there's a place for you in the Oladelemi community.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link to="/signup">
                  <Button variant="hero" size="lg" className="w-full">
                    Join Our Community
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Founder Section */}
        <div className="mt-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Meet the Founder</h2>
            <Card className="shadow-premium">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <img src={founder} alt="Founder" className="w-24 h-24 rounded-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Bash Oladelemi</h3>
                <p className="text-muted-foreground mb-4">Product Innovator & Entrepreneur</p>
                <p className="text-muted-foreground leading-relaxed">
                  A passionate product strategist with a track record of identifying market opportunities 
                  and developing innovative solutions. With experience spanning multiple industries, 
                  the vision for Oladelemi emerged from years of witnessing great ideas that needed 
                  the right platform to reach their potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};