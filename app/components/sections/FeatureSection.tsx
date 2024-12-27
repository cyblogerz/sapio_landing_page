export default function FeaturesSection() {
    const features: string[] = [
      'Profile customization with skills, projects, interests, and goals.',
      'Location-based swiping to connect for collaborations.',
      'Community forums for discussions and advice.',
      'Gamification with skill challenges and badges.',
      'Event discovery like hackathons and meetups.',
      'AI-powered connection recommendations.',
    ];
  
    return (
      <section className="features">
        <h2>Key Features</h2>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>
    );
  }