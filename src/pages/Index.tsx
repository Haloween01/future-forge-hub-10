import { motion } from "framer-motion";
import { Code2, FileText, ArrowRight, Sparkles, Shield, Zap, Target, Brain, TrendingUp } from "lucide-react";

const ProductCard = ({
  title,
  subtitle,
  description,
  icon: Icon,
  features,
  href,
  glowClass,
  gradientClass,
  delay,
}: {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  href: string;
  glowClass: string;
  gradientClass: string;
  delay: number;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay }}
    whileHover={{ y: -8, scale: 1.02 }}
    className={`group glass-card rounded-2xl p-8 block cursor-pointer transition-all duration-500 hover:${glowClass}`}
  >
    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${gradientClass}`}>
      <Icon className="w-7 h-7 text-primary-foreground" />
    </div>
    <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-2">{subtitle}</p>
    <h3 className="text-2xl font-bold font-display text-foreground mb-3">{title}</h3>
    <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
    <ul className="space-y-3 mb-8">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-3 text-secondary-foreground text-sm">
          <Sparkles className="w-4 h-4 text-primary shrink-0" />
          {f}
        </li>
      ))}
    </ul>
    <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all duration-300">
      Explore Tool <ArrowRight className="w-4 h-4" />
    </div>
  </motion.a>
);

const FeatureItem = ({
  icon: Icon,
  title,
  description,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="text-center"
  >
    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h4 className="font-display font-semibold text-foreground mb-2">{title}</h4>
    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
  </motion.div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background hero-gradient relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      {/* Hero */}
      <section className="relative z-10 pt-20 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-muted-foreground">AI-Powered Developer Tools</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6">
              Shape Your{" "}
              <span className="text-gradient-primary">Tech Future</span>
              <br />
              With AI Precision
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
              Two powerful AI tools designed to elevate your code quality and accelerate your career.
              Write better code. Land better jobs.
            </p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-muted-foreground"
          >
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 mx-auto flex justify-center pt-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="relative z-10 px-6 pb-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <ProductCard
            title="CodeSAGE AI"
            subtitle="Code Intelligence"
            description="Paste your code and get instant AI-powered reviews, optimization suggestions, security audits, and style improvements across multiple languages."
            icon={Code2}
            features={[
              "Multi-language support (Python, JS, Java, C++)",
              "Syntax, style & security analysis",
              "AI-powered optimization engine",
              "Detailed code insights & reports",
            ]}
            href="https://code-sage-ai-swart.vercel.app/"
            glowClass="glow-primary"
            gradientClass="bg-primary"
            delay={0.1}
          />
          <ProductCard
            title="ResumeAI"
            subtitle="Career Accelerator"
            description="Upload your resume for ATS optimization, discover matching jobs, and get personalized career roadmaps powered by intelligent analysis."
            icon={FileText}
            features={[
              "ATS scoring & resume enhancement",
              "Smart job matching algorithm",
              "Personalized career roadmaps",
              "AI-powered interview prep insights",
            ]}
            href="https://jobtune-three.vercel.app/"
            glowClass="glow-accent"
            gradientClass="bg-accent"
            delay={0.3}
          />
        </div>
      </section>

      {/* Why Section */}
      <section className="relative z-10 px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
              Why These Tools?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Built by developers, for developers. Every feature is designed to give you an unfair advantage.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <FeatureItem icon={Zap} title="Lightning Fast" description="Get results in seconds, not hours" delay={0.1} />
            <FeatureItem icon={Shield} title="Security First" description="Catch vulnerabilities before they ship" delay={0.15} />
            <FeatureItem icon={Target} title="ATS Optimized" description="Beat automated resume screening" delay={0.2} />
            <FeatureItem icon={Brain} title="AI-Powered" description="Cutting-edge models for smart analysis" delay={0.25} />
            <FeatureItem icon={TrendingUp} title="Career Growth" description="Data-driven career path guidance" delay={0.3} />
            <FeatureItem icon={Code2} title="Multi-Language" description="Support for all major programming languages" delay={0.35} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-mono">
            Built with AI to shape your technical future
          </p>
          <div className="flex gap-6">
            <a href="https://code-sage-ai-swart.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              CodeSAGE AI
            </a>
            <a href="https://jobtune-three.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              ResumeAI
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
