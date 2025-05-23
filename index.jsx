
export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center' }}>FaithLoop</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem' }}>Automated Care Messaging for Churches</p>
      <section>
        <h2>What is FaithLoop?</h2>
        <p>
          FaithLoop is an automated SMS service designed specifically for churches.
          We help you deliver reminders, blessings, and donation follow-ups — so your
          members feel seen, remembered, and cared for, even when you're busy.
        </p>
      </section>
      <section>
        <h2>What FaithLoop Does</h2>
        <ul>
          <li>Automatically send weekly service reminders</li>
          <li>Pre-scheduled birthday blessings & holiday messages</li>
          <li>Personalized donation thank-you messages</li>
          <li>Reconnect with quiet members</li>
          <li>Monthly reports with delivery stats</li>
        </ul>
      </section>
      <footer style={{ marginTop: '2rem', textAlign: 'center', fontStyle: 'italic' }}>
        Built for churches. Fully managed. Faithfully delivered.
      </footer>
    </div>
  );
}
