import ReliefCard from "./TwoLayerCard";

export default function ExperienceSection() {
  return (
    <div className="max-w-6xl mx-auto px-10">
      <h2 className="text-3xl font-semibold text-white mb-12">Experience</h2>

      <div className="grid grid-cols-1 gap-25">
        <ReliefCard title="Mobile Developer — FUTURMAP" subtitle="Mar 2022 – Jan 2024">
          <span className="text-lg">
            My primary role was to develop and deploy mobile applications in collaboration with a backend developer.
          </span>
          <ul className="list-disc pl-5 space-y-2 mt-3 text-lg">
            <li>Developed a video editing app featuring replay, text overlay, and slow-motion capabilities.</li>
            <li>Built Android TV applications using Flutter.</li>
            <li>Created CRM mobile apps integrating Mapbox and analytics tools.</li>
            <li>Maintained an app offering a library of magic trick videos.</li>
          </ul>
        </ReliefCard>

        <ReliefCard title="Mobile Developer — ESOKIA" subtitle="Jan 2024 – Dec 2024">
          <span className="text-lg">
            Under the supervision of the lead developer, I was responsible for developing two mobile applications.
          </span>
          <ul className="list-disc pl-5 space-y-2 mt-3 text-lg">
            <li>Developed an employee career and benefits management app.</li>
            <li>Delivered a recycling tracking product featuring interactive maps and dashboards.</li>
            <li>Implemented API optimizations and offline caching.</li>
          </ul>
        </ReliefCard>
      </div>
    </div>
  );
}