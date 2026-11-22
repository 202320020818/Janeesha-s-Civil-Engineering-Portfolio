import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About, Achievements, Contact, Education, Expertise, Experience, PersonalSkills, Projects } from '@/components/Sections';
import { Footer } from '@/components/Footer';

export default function Home() {
  return <><Navbar/><main><Hero/><About/><Expertise/><Experience/><Projects/><Education/><Achievements/><PersonalSkills/><Contact/></main><Footer/></>;
}
