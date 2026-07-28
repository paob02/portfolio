import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export default function Contact() {
  return (
    <Section spacing="default">
      <Container>
        <h1 className="text-h1 text-foreground">Contact</h1>
        <p className="mt-4 max-w-xl text-body-lg text-foreground-muted">
          Email: pauline.bjork@gmail.com
          <br />
          Phone number: +46 703 47 47 09
        </p>
      </Container>
    </Section>
  );
}
