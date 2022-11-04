import { useMultiStepForm } from "./hooks/useMultistepForm";

function App() {
  const { steps, currentStepIndex, step, back, next } = useMultiStepForm([
    <div>One</div>,
    <div>Two</div>,
    <div>Three</div>,
  ]);

  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "2rem",
        borderRadius: "0.5rem",
        fontFamily: "Arial",
        textAlign: "center",
      }}
    >
      <h1>React Multiform</h1>
      <form>
        <div
          style={{
            position: "absolute",
            top: "0.5rem",
            right: "0.5rem",
            margin: "1rem",
          }}
        >
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
      </form>
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          gap: "0.5rem",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            padding: "0.5rem 1rem",
            color: "white",
          }}
          onClick={() => back()}
          disabled={currentStepIndex === 0}
        >
          Back
        </button>
        <button
          style={{
            padding: "0.5rem 1rem",
            color: "white",
          }}
          onClick={() => next()}
          disabled={currentStepIndex === steps.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
