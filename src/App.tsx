import { useMultiStepForm } from "./hooks/useMultistepForm";
import UserForm from "./components/UserForm";
import AddressForm from "./components/AddressForm";
import AccountForm from "./components/AccountForm";
import { FormEvent } from "react";

function App() {
  const { steps, currentStepIndex, step, back, next } = useMultiStepForm([
    <UserForm />,
    <AddressForm />,
    <AccountForm />,
  ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    next();
  }

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
      <form onSubmit={onSubmit}>
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
        <div style={{ minHeight: "300px" }}>{step}</div>
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
          type="submit"
          onClick={() => next()}
          style={{
            padding: "0.5rem 1rem",
            color: "white",
          }}
        >
          {currentStepIndex === steps.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default App;
