import "./styles/index.css";
import DisplayContent from "./DisplayContent.jsx";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorFallback from "./components/ErrorFallback";

const styles = {
  width: "50vw",
  height: "100%",
  display: "grid",
  alignItems: "center",
  justifyContent: "center"
};

function MainApp() {
  return (
    <div className="App">
      <div
        style={{
          ...styles,
          backgroundColor: "var(--dark-blue)"
        }}
      >
        <DisplayContent />
      </div>
      <div
        style={{
          ...styles,
          backgroundColor: "white"
        }}
      >
        <ErrorBoundary fallback={<ErrorFallback />}>
          <DisplayContent boundary />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default MainApp;
