import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/lib/auth';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedText from '@/components/AnimatedText';
import { LogOut, Plus, Edit2, Trash2 } from 'lucide-react';
import ProtectedRoute from '@/components/ProtectedRoute';

interface CaseStudy {
  id: string;
  number: number;
  industry: string;
  context: string;
  challenge: string;
  solution: string;
  result: string;
  visual: string;
}

const CMS = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<CaseStudy>>({});
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const fetchCaseStudies = async () => {
    try {
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .order('number', { ascending: true });

      if (error) throw error;
      setCaseStudies(data || []);
    } catch (error: any) {
      toast({
        title: 'Error',
        description: 'Failed to load case studies',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: 'Logged Out',
      description: 'You have been successfully logged out.',
    });
    navigate('/');
  };

  const handleEdit = (study: CaseStudy) => {
    setEditingId(study.id);
    setFormData(study);
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({});
  };

  const handleSave = async () => {
    if (!editingId) return;

    try {
      const { error } = await supabase
        .from('case_studies')
        .update({
          industry: formData.industry,
          context: formData.context,
          challenge: formData.challenge,
          solution: formData.solution,
          result: formData.result,
          visual: formData.visual,
        })
        .eq('id', editingId);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Case study updated successfully',
      });

      fetchCaseStudies();
      handleCancel();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to update case study',
        variant: 'destructive',
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this case study?')) return;

    try {
      const { error } = await supabase
        .from('case_studies')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Case study deleted successfully',
      });

      fetchCaseStudies();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to delete case study',
        variant: 'destructive',
      });
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen">
        <Navigation />

        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="flex justify-between items-center mb-8">
              <AnimatedText className="text-6xl md:text-8xl font-display font-bold">
                Content Management
              </AnimatedText>
              <Button onClick={handleLogout} variant="outline" size="lg">
                <LogOut className="mr-2" />
                Logout
              </Button>
            </div>

            {loading ? (
              <div className="flex justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
              </div>
            ) : (
              <div className="space-y-8">
                {caseStudies.map((study, index) => (
                  <AnimatedSection key={study.id} delay={index * 0.1}>
                    <div className="bg-card border border-border p-8 rounded-lg">
                      {editingId === study.id ? (
                        <div className="space-y-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <Label>Industry</Label>
                              <Input
                                value={formData.industry || ''}
                                onChange={(e) =>
                                  setFormData({ ...formData, industry: e.target.value })
                                }
                              />
                            </div>
                            <div>
                              <Label>Context</Label>
                              <Input
                                value={formData.context || ''}
                                onChange={(e) =>
                                  setFormData({ ...formData, context: e.target.value })
                                }
                              />
                            </div>
                          </div>

                          <div>
                            <Label>Challenge</Label>
                            <Textarea
                              value={formData.challenge || ''}
                              onChange={(e) =>
                                setFormData({ ...formData, challenge: e.target.value })
                              }
                              rows={3}
                            />
                          </div>

                          <div>
                            <Label>Solution</Label>
                            <Textarea
                              value={formData.solution || ''}
                              onChange={(e) =>
                                setFormData({ ...formData, solution: e.target.value })
                              }
                              rows={3}
                            />
                          </div>

                          <div>
                            <Label>Result</Label>
                            <Textarea
                              value={formData.result || ''}
                              onChange={(e) =>
                                setFormData({ ...formData, result: e.target.value })
                              }
                              rows={3}
                            />
                          </div>

                          <div>
                            <Label>Deliverables</Label>
                            <Input
                              value={formData.visual || ''}
                              onChange={(e) =>
                                setFormData({ ...formData, visual: e.target.value })
                              }
                            />
                          </div>

                          <div className="flex gap-2">
                            <Button onClick={handleSave} variant="hero">
                              Save Changes
                            </Button>
                            <Button onClick={handleCancel} variant="outline">
                              Cancel
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <span className="text-5xl font-display text-muted-foreground/30">
                                {String(study.number).padStart(2, '0')}
                              </span>
                              <h3 className="text-2xl font-display font-bold mt-2">
                                {study.industry}
                              </h3>
                              <p className="text-muted-foreground">{study.context}</p>
                            </div>
                            <div className="flex gap-2">
                              <Button
                                onClick={() => handleEdit(study)}
                                variant="outline"
                                size="sm"
                              >
                                <Edit2 className="w-4 h-4" />
                              </Button>
                              <Button
                                onClick={() => handleDelete(study.id)}
                                variant="destructive"
                                size="sm"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>

                          <div className="space-y-4 text-sm">
                            <div>
                              <strong>Challenge:</strong> {study.challenge}
                            </div>
                            <div>
                              <strong>Solution:</strong> {study.solution}
                            </div>
                            <div>
                              <strong>Result:</strong> {study.result}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </ProtectedRoute>
  );
};

export default CMS;
