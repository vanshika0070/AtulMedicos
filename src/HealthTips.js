import Blogs from "./Blogs";
import FAQsHealthTips from "./FAQsHealthTips";

function HealthTips() {
  return (
    <>
      <Blogs />

      <FAQsHealthTips />

      <div className="article-disclaimer">
        <strong>Disclaimer:</strong> This information is for general
        educational purposes only and should not replace professional
        medical advice, diagnosis, or treatment. Consult a qualified
        healthcare professional for advice specific to your situation.
      </div>
    </>
  );
}

export default HealthTips;