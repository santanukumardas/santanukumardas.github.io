import { ThemeToggle } from "@/components/theme-toggle";
import { Navbar } from "@/components/navbar";
import { Section } from "@/components/section";
import { siteConfig } from "@/site-config";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col pt-20">
      <Navbar />
      <ThemeToggle />

      {/* Hero Section */}
      <Section id="hero" className="min-h-[80vh] flex flex-col justify-center">
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-none mb-8">
          {siteConfig.name.split(' ').slice(0, 2).join(' ')} <br />
          {siteConfig.name.split(' ').slice(2).join(' ')}
        </h1>
        <p className="text-xl md:text-3xl max-w-2xl font-light leading-relaxed opacity-80">
          {siteConfig.bio}
        </p>
      </Section>

      {/* Tech/Cloud Section */}
      {siteConfig.sections.tech && (
        <Section id="tech">
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-12 opacity-40">TECH / CLOUD</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {[
              { area: "INFRA", items: ["AWS", "GCP", "IAC (TERRAFORM)"] },
              { area: "CONTAINERS", items: ["KUBERNETES", "DOCKER"] },
              { area: "BACKEND", items: ["NODE.JS", "PYTHON", "GO"] },
              { area: "DATA", items: ["POSTGRES", "REDIS", "SNOWFLAKE"] },
            ].map((group) => (
              <div key={group.area} className="space-y-4">
                <span className="text-[10px] font-mono opacity-40 border-l border-foreground/20 pl-2">{group.area}</span>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-xl md:text-2xl font-bold tracking-tighter">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Journal Section */}
      {siteConfig.sections.journal && (
        <Section id="journal">
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-12 opacity-40">JOURNAL / WRITINGS</h2>
          <div className="space-y-px bg-foreground/10 border-y border-foreground/10">
            {[
              { category: "CLOUD", title: "Architecting for Zero-Downtime Static Exports", date: "FEB 2024" },
              { category: "TRAVEL", title: "Midnight in Kyoto: A Photowalk", date: "JAN 2024" },
              { category: "TECH", title: "Building an Obsidian-based CMS", date: "DEC 2023" },
              { category: "PHOTOGRAPHY", title: "The Case for Strictly Black and White", date: "NOV 2023" },
            ].map((post, i) => (
              <a
                key={i}
                href="#"
                className="group block bg-background py-10 md:py-12 hover:bg-foreground hover:text-background transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between px-2">
                  <div className="flex items-baseline gap-4 md:gap-8">
                    <span className="text-[10px] font-mono opacity-40 w-20">{post.category}</span>
                    <h3 className="text-2xl md:text-4xl font-bold tracking-tight">{post.title}</h3>
                  </div>
                  <span className="text-[10px] font-mono opacity-40 mt-2 md:mt-0">{post.date}</span>
                </div>
              </a>
            ))}
          </div>
        </Section>
      )}

      {/* Photography Section */}
      {siteConfig.sections.photography && (
        <Section id="photography">
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-12 opacity-40">PHOTOGRAPHY / VISUALS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-[4/5] bg-foreground/5 border border-foreground/10 group overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                  <span className="text-xs font-mono">IMG_00{i}.JPG</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a href="#" className="text-xs font-bold tracking-[0.2em] border-b border-foreground/20 pb-1 hover:border-foreground transition-colors">
              VIEW ALL VISUALS →
            </a>
          </div>
        </Section>
      )}

      {/* Projects Section */}
      {siteConfig.sections.projects && (
        <Section id="projects">
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-12 opacity-40">EXPERIMENTS / PROJECTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: "Personal CMS", tech: "Markdown + Next.js", desc: "A custom workflows for publishing journal entries directly from my local notes." },
              { title: "Leica-Sim", tech: "CSS / GLSL", desc: "Experimenting with film-like grain and contrast filters for web-based images." },
            ].map((project, i) => (
              <div key={i} className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{project.title}</h3>
                <p className="text-sm md:text-base font-light opacity-60 leading-relaxed">{project.desc}</p>
                <p className="text-[10px] font-mono opacity-40 uppercase tracking-widest">{project.tech}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* About Section */}
      {siteConfig.sections.about && (
        <Section id="about" className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-12 opacity-40">ABOUT</h2>
            <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed opacity-80">
              <p>
                Cloud Professional with a penchant for minimalist design and visual storytelling.
              </p>
              <p>
                I spend my days architecting resilient systems in the cloud and my nights exploring the silent narratives of street photography and generative art.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-12 opacity-40">FIND ME</h2>
            <ul className="space-y-4">
              {[
                { label: "INSTAGRAM", link: siteConfig.socials.instagram },
                { label: "GITHUB", link: siteConfig.socials.github },
                { label: "LINKEDIN", link: siteConfig.socials.linkedin },
                { label: "EMAIL", link: siteConfig.socials.email },
              ].map((social, i) => (
                <li key={i}>
                  <a
                    href={social.link}
                    className="text-2xl md:text-4xl font-bold tracking-tighter hover:pl-4 transition-all duration-300 inline-block border-b-2 border-transparent hover:border-foreground"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      )}

      <footer className="py-12 px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-foreground/10 text-[10px] font-mono opacity-40 flex justify-between items-center">
        <span>© {new Date().getFullYear()} {siteConfig.name}</span>
        <span>CLOUD PROFESSIONAL & PHOTOGRAPHER</span>
      </footer>
    </main>
  );
}
