import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button-enhanced';
import { LogOut, User, Sparkles } from 'lucide-react';

export const Navigation = () => {
  const { logout, isAuthenticated } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-2xl font-bold bg-exclusive-gradient bg-clip-text text-transparent">
              Oladelemi
            </span>
          </Link>

          <div className="flex items-center space-x-6">
            {isAuthenticated ? (
              <>
                <Link
                  to="/products"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive('/products') ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  Products
                </Link>
                <Link
                  to="/about"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive('/about') ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  About
                </Link>
                <Link
                  to="/profile"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive('/profile') ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  <User className="h-4 w-4" />
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={logout}
                  className="text-muted-foreground hover:text-destructive"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <>
                <Link
                  to="/about"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive('/about') ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  About
                </Link>
                <Link to="/login">
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="hero" size="sm">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};