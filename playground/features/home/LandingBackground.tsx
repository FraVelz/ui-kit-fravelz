import "./landing-background.css";

export default function LandingBackground() {
  return (
    <div className="fz-landing-bg" aria-hidden>
      <div className="fz-landing-bg__mesh" />
      <div className="fz-landing-bg__orb fz-landing-bg__orb--cyan" />
      <div className="fz-landing-bg__orb fz-landing-bg__orb--purple" />
      <div className="fz-landing-bg__orb fz-landing-bg__orb--mix" />
      <div className="fz-landing-bg__fade" />
    </div>
  );
}
