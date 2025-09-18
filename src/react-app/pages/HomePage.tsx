import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button-enhanced';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getFeaturedProducts } from '@/data/products';
import { ArrowRight, Lock, Sparkles, Zap, Eye } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

export const HomePage = () => {
  const { isAuthenticated } = useAuth();
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero-gradient">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-exclusive-gradient bg-clip-text text-transparent">
              Oladelemi
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-4">
              A Catalog of Tomorrow's Ideas
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover innovative digital and consumer product concepts designed by oladelemi. 
              Join an exclusive community of forward-thinking innovators, investors, and dreamers.
            </p>
            
            {!isAuthenticated ? (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup">
                  <Button variant="hero" size="xl" className="w-full sm:w-auto">
                    Sign Up to Explore Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="premium" size="xl" className="w-full sm:w-auto">
                    Already a Member? Sign In
                  </Button>
                </Link>
              </div>
            ) : (
              <Link to="/products">
                <Button variant="hero" size="xl">
                  Explore All Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Featured Innovations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get a glimpse of the groundbreaking products waiting for you inside our exclusive catalog.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="relative group hover:shadow-premium transition-all duration-300">
                {!isAuthenticated && (
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10 flex items-center justify-center rounded-lg">
                    <div className="text-center">
                      <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
                      <p className="text-sm font-medium text-muted-foreground">
                        Sign up to view details
                      </p>
                    </div>
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription className={!isAuthenticated ? 'blur-sm' : ''}>
                    {product.mvp}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className={`text-sm text-muted-foreground ${!isAuthenticated ? 'blur-sm' : ''}`}>
                    {product.description.substring(0, 120)}...
                  </div>
                  {isAuthenticated ? (
                    <Link to={`/products/${product.id}`}>
                      <Button variant="exclusive" size="sm" className="mt-4 w-full">
                        View Details
                        <Eye className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  ) : (
                    <Link to="/signup">
                      <Button variant="outline" size="sm" className="mt-4 w-full">
                        Sign Up to Access
                        <Lock className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {!isAuthenticated && (
            <div className="text-center mt-16">
              <div className="bg-primary/5 rounded-lg p-8 max-w-md mx-auto">
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Ready to Discover More?</h3>
                <p className="text-muted-foreground mb-6">
                  Join our exclusive community to access detailed product concepts, market analysis, and revenue models.
                </p>
                <Link to="/signup">
                  <Button variant="hero" size="lg">
                    Create Your Account
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};