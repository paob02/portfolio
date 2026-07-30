import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

type EducationEntry = {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
};

const education: EducationEntry[] = [
  {
    degree: "Software Engineer M.Sc in Interaction Design and Technologies",
    institution: "Chalmers University of Technology",
    startDate: "August 2021",
    endDate: "June 2026",
  },
  {
    degree: "Volvogymnasiet",
    institution: "High School Diploma in Industrial Technology",
    startDate: "August 2018",
    endDate: "June 2021",
  },
];

type WorkExperienceEntry = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
};

// Example entry — duplicate this object and fill in your own details to add another job.
const workExperience: WorkExperienceEntry[] = [
  {
    company: "Onsala Space Observatory",
    role: "Research Assistant",
    startDate: "June 2026",
    endDate: "July 2026",
    description: "Developed an interactive installation at their visitor centre based on my Master’s Thesis on the best ways to teach children about scientific scales.",
  },
  {
    company: "Volvo Group Truck Operations",
    role: "Commercial Packaging Engineer",
    startDate: "June 2025",
    endDate: "August 2025",
    description: "I was responsible for decision making on spare part packaging instructions, performing machine learning validations, solving urgent problems that occur and interacting with suppliers.",
  },
  {
    company: "Happy Hydrate",
    role: "Freelance Graphic Designer",
    startDate: "August 2024",
    endDate: "September 2024",
    description: "Hired as graphical designer to redesign packaging for release in Sweden. Worked with Adobe Illustrator.",
  },
  {
    company: "Aurobay",
    role: "Assembling and Machine Operator",
    startDate: "June 2021",
    endDate: "June 2025",
    description: "Work experience in both inner and outer assembling operations of car engines. Later on I worked as a machine operator of crankshaft processing.",
  },
  {
    company: "Volvo Cars",
    role: "Automation Technician",
    startDate: "August 2018",
    endDate: "June 2021",
    description: "Automation technician in an industrial processing of crankshafts for car engines.",
  },
];

export default function About() {
  return (
    <>
      <Section spacing="default">
        <Container>
          <h1 className="text-h1 text-foreground">About me</h1>
          <p className="mt-4 max-w-xl text-body-lg text-foreground-muted">
            My name is Pauline Björk and I just finished my master’s degree in Interaction Design
            and Technologies at Chalmers University of Technology. The goal I have for my future
            career is to become a UX/UI designer. I want to work with developing new or improving
            existing systems in an accessible and user friendly way. One of the things I enjoy the
            most is working closely with users to gain as much insight as possible to identify design
           problems and find the pest solutions for a user centred design.
  <br />
            During my studies I discovered my passion for creative project work. To collaborate with a
            diverse group of people with different backgrounds to achieve a mutual goal is my favourite
            part about projects. That I could be one of the people that can share all my ideas and
            combine my creativity with others sounds like a dream and is something I see myself doing
            in the future. I am ready to take on the necessary responsibilities and grow my skills
            by developing and improving meaningful products.
  <br />
            During my masters degree I have learned a lot about ideating, creative collaboration and
            using different tools to bring my ideas to life both physically and digitally. Figma is
            my preferred tool for visualising and prototyping ideas, and I have developed strong
            proficiency in it through five years of regular use during my studies. Thanks to my
            software engineering bachelor degree I have good knowledge of code, which is useful
            when collaborating with software developers.
  <br />
            During project work I enjoy taking initiative and I am capable of taking on various roles.
            From my working experience at Volvo and Aurobay I have received feedback that I am a very
            positive,  engaged and self-driven employee.
          </p>
        </Container>
      </Section>

      <Section tone="surface" spacing="default">
        <Container>
          <h2 className="text-h2 text-foreground">Education</h2>
          <div className="mt-6 flex max-w-2xl flex-col gap-6">
            {education.map((entry) => (
              <div key={entry.degree}>
                <h3 className="text-h3 text-foreground">{entry.degree}</h3>
                <p className="mt-1 text-caption">
                  {entry.institution} · {entry.startDate} – {entry.endDate}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="default">
        <Container>
          <h2 className="text-h2 text-foreground">Work Experience</h2>
          <div className="mt-6 flex max-w-2xl flex-col gap-8">
            {workExperience.map((entry) => (
              <div key={`${entry.company}-${entry.role}`}>
                <h3 className="text-h3 text-foreground">
                  {entry.company} — {entry.role}
                </h3>
                <p className="mt-1 text-caption">
                  {entry.startDate} – {entry.endDate}
                </p>
                <p className="mt-3 text-body text-foreground-muted">{entry.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
