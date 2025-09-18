import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button-enhanced';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { User, Mail, Key, Save, Camera } from 'lucide-react';

export const ProfilePage = () => {
  const { user, updateProfile } = useAuth();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
  });

  const handleSave = () => {
    if (user) {
      updateProfile(formData);
      setIsEditing(false);
      toast({
        title: "Profile Updated",
        description: "Your profile information has been successfully updated.",
      });
    }
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
    });
    setIsEditing(false);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p className="text-muted-foreground">Please sign in to view your profile.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
              <User className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Profile Settings</h1>
            <p className="text-muted-foreground">
              Manage your account information and preferences
            </p>
          </div>

          {/* Profile Information */}
          <Card className="shadow-premium mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    Update your personal details and contact information
                  </CardDescription>
                </div>
                {!isEditing ? (
                  <Button variant="outline" onClick={() => setIsEditing(true)}>
                    Edit Profile
                  </Button>
                ) : (
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={handleCancel}>
                      Cancel
                    </Button>
                    <Button variant="hero" size="sm" onClick={handleSave}>
                      <Save className="mr-2 h-4 w-4" />
                      Save
                    </Button>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Profile Picture */}
              <div>
                <Label>Profile Picture</Label>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                  <Button variant="outline" size="sm" disabled>
                    <Camera className="mr-2 h-4 w-4" />
                    Change Photo
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Photo upload coming soon
                </p>
              </div>

              <Separator />

              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={!isEditing}
                  className={!isEditing ? 'bg-muted' : ''}
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={!isEditing}
                  className={!isEditing ? 'bg-muted' : ''}
                />
              </div>

              {/* Member Since */}
              <div className="space-y-2">
                <Label>Member Since</Label>
                <div className="text-sm text-muted-foreground bg-muted p-3 rounded-md">
                  Member since {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long' 
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Account Security */}
          <Card className="shadow-premium mb-8">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Key className="h-5 w-5 text-primary" />
                <div>
                  <CardTitle>Account Security</CardTitle>
                  <CardDescription>
                    Manage your password and security settings
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div>
                  <h4 className="font-medium">Password</h4>
                  <p className="text-sm text-muted-foreground">
                    Last updated: Never (simulated account)
                  </p>
                </div>
                <Button variant="outline" size="sm" disabled>
                  Change Password
                </Button>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div>
                  <h4 className="font-medium">Two-Factor Authentication</h4>
                  <p className="text-sm text-muted-foreground">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <Button variant="outline" size="sm" disabled>
                  Enable 2FA
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Account Stats */}
          <Card className="shadow-premium">
            <CardHeader>
              <CardTitle>Account Activity</CardTitle>
              <CardDescription>
                Your engagement with the Oladelemi platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">9</div>
                  <div className="text-sm text-muted-foreground">Products Viewed</div>
                </div>
                <div className="text-center p-4 bg-accent/10 rounded-lg">
                  <div className="text-2xl font-bold text-accent">2</div>
                  <div className="text-sm text-muted-foreground">Favorites</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Support */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Need help with your account?
            </p>
            <Button variant="outline">
              <Mail className="mr-2 h-4 w-4" />
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};