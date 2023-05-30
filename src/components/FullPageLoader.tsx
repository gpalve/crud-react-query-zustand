import { Spinner } from "react-bootstrap";

const FullPageLoader = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        color: "white",
      }}
    >
      <Spinner
        animation="border"
        variant="light"
        role="status"
        style={{ marginRight: "10px" }}
      />
      <span>Loading...</span>
    </div>
  );
};

export default FullPageLoader;
