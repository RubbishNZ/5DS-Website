-- Create case_studies table
CREATE TABLE public.case_studies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  number integer NOT NULL UNIQUE,
  industry text NOT NULL,
  context text NOT NULL,
  challenge text NOT NULL,
  solution text NOT NULL,
  result text NOT NULL,
  visual text NOT NULL,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;

-- Allow everyone to read case studies (public facing)
CREATE POLICY "Anyone can view case studies"
  ON public.case_studies
  FOR SELECT
  USING (true);

-- Only authenticated users can insert
CREATE POLICY "Authenticated users can insert case studies"
  ON public.case_studies
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Only authenticated users can update
CREATE POLICY "Authenticated users can update case studies"
  ON public.case_studies
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Only authenticated users can delete
CREATE POLICY "Authenticated users can delete case studies"
  ON public.case_studies
  FOR DELETE
  TO authenticated
  USING (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_case_studies_updated_at
  BEFORE UPDATE ON public.case_studies
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert the existing case studies
INSERT INTO public.case_studies (number, industry, context, challenge, solution, result, visual) VALUES
(1, 'Financial Services', 'Large regional bank with 2,000+ employees', 'Legacy systems, fragmented data, workforce resistant to change, no AI strategy.', '6-month comprehensive AI readiness program including assessment, strategy development, training workshops, and pilot automation project.', 'AI readiness score improved from 2.1 to 7.8/10. Successfully automated loan processing, reducing approval time from 5 days to 4 hours. 85% of staff completed AI training with 92% confidence rating.', 'Assessment report → Training program → Automated workflow diagram'),
(2, 'Healthcare Provider', 'Regional hospital network serving 500,000 patients annually', 'Manual patient scheduling, overwhelmed administrative staff, compliance concerns around AI use.', 'Implemented AI-powered scheduling system with responsible AI governance framework. Conducted compliance review and staff training.', 'Administrative workload reduced by 40%. Patient wait times decreased by 30%. Zero compliance incidents. Staff satisfaction increased 65%.', 'Before/after workflow comparison → Governance framework → Impact metrics'),
(3, 'Manufacturing', 'Mid-sized manufacturing company, 500 employees, 3 production facilities', 'Quality control inconsistencies, high defect rates, limited technical expertise for AI implementation.', 'Deployed computer vision system for real-time quality inspection. Trained in-house team for ongoing maintenance and optimization.', 'Defect rates dropped from 8% to 0.9%. ROI achieved in 7 months. Team now manages system independently and exploring additional AI use cases.', 'Quality control workflow → Computer vision system → Before/after defect rate graph'),
(4, 'Professional Services', 'Mid-sized consulting firm, 150+ consultants, document-heavy workflows', 'Consultants spending 60% of time on document review and research rather than client-facing work.', 'Implemented AI document analysis and research assistant. Conducted training and change management program.', 'Research time reduced by 70%. Consultants reallocated 40% more time to client engagement. Client satisfaction scores increased 28%.', 'Time allocation analysis → AI assistant interface → Productivity gains');