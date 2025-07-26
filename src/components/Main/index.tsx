import styled from 'styled-components';

interface MainProps {
  title?: string;
  description?: string;
  technologies?: string[];
}

export function Main({
  title = 'Boilerplate Aqua9',
  description = 'Template Next.js profissional com TypeScript, Tailwind CSS e SEO otimizado',
  technologies = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
}: MainProps) {
  return (
    <MainContainer>
      <Logo src='/img/logo.svg' alt='Aqua9 Logo' />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <TechnologiesList>
        {technologies.map((tech, index) => (
          <Technology key={index}>{tech}</Technology>
        ))}
      </TechnologiesList>
      <Illustration src='/img/hero-illustration.svg' alt='Hero Illustration' />
    </MainContainer>
  );
}

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
`;

const Logo = styled.img`
  width: 120px;
  height: auto;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #e5e7eb;
  max-width: 600px;
`;

const TechnologiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 3rem;
`;

const Technology = styled.span`
  background: rgba(59, 130, 246, 0.2);
  color: #60a5fa;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  border: 1px solid rgba(59, 130, 246, 0.3);
`;

const Illustration = styled.img`
  width: 300px;
  height: auto;
  opacity: 0.8;
`;
