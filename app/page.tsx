import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import personalData from "@/data/personal.json";
import aboutData from "@/data/about.json";
import skillsData from "@/data/skills.json";
import experienceData from "@/data/experience.json";
import educationData from "@/data/education.json";
import projectsData from "@/data/projects.json";
import contactData from "@/data/contact.json";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero data={personalData} />
      <About data={aboutData} />
      <Skills data={skillsData} />
      <Experience data={experienceData} />
      <Education data={educationData} />
      <Projects data={projectsData} />
      <Contact data={contactData} social={personalData.social} />
      <Footer data={personalData} />
      <ScrollToTop />
    </main>
  );
}
