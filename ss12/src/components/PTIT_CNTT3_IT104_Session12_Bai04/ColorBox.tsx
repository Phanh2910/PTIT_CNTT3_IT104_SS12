type ColorBoxProps = {
  color: string;
};

function B4({ color }: ColorBoxProps) {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontWeight: "bold",
        margin: "10px",
      }}
    >
      Box
    </div>
  );
}

export default B4;