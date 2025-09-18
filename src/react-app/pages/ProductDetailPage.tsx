import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductById } from '@/data/products';
import { Button } from '@/components/ui/button-enhanced';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Target, 
  TrendingUp, 
  DollarSign, 
  Lightbulb,
  Zap,
  Users,
  BarChart3
} from 'lucide-react';

export const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = id ? getProductById(id) : null;

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/products">
            <Button variant="hero">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/products')}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-primary/10 p-3 rounded-xl">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.category}
              </Badge>
              {product.featured && (
                <Badge className="ml-2 bg-accent-gradient">
                  Featured
                </Badge>
              )}
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-exclusive-gradient bg-clip-text text-transparent">
            {product.name}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            {product.mvp}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card className="shadow-premium">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  <CardTitle>What is {product.name}?</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </CardContent>
            </Card>

            {/* Market Analysis */}
            <Card className="shadow-premium">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <CardTitle>Market Opportunity</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {product.market}
                </p>
              </CardContent>
            </Card>

            {/* Why This Fits */}
            <Card className="shadow-premium">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-primary" />
                  <CardTitle>Why This Solution Works</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {product.whyFit}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Revenue Model */}
            <Card className="shadow-premium">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-accent" />
                  <CardTitle>Revenue Model</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {product.revenueModel}
                </p>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card className="shadow-premium">
              <CardHeader>
                <CardTitle>Interested in This Concept?</CardTitle>
                <CardDescription>
                  Connect with us to discuss implementation, partnership, or investment opportunities.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="hero" size="lg" className="w-full">
                  <Users className="mr-2 h-4 w-4" />
                  Get in Touch
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Share Feedback
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="shadow-premium">
              <CardHeader>
                <CardTitle>Quick Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground mb-1">Category</h4>
                  <p className="font-semibold">{product.category}</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground mb-1">Status</h4>
                  <Badge variant="outline" className="text-primary border-primary">
                    Concept Stage
                  </Badge>
                </div>
                <Separator />
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground mb-1">Development</h4>
                  <p className="text-sm">Ready for MVP development</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};