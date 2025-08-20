type ColorBoxProps = {
  color: string; 
};

const ColorBox = ({ color }: ColorBoxProps) => {
  return (
    <div style={{ textAlign: "center", margin: "20px", display: "inline-block" }}>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: "bold"
        }}
      >
        Box
      </div>
      <div
        style={{
          marginTop: "10px",
          border: "1px solid gray",
          padding: "5px 10px",
          display: "inline-block"
        }}
      >
        {color}
      </div>
    </div>
  );
};

export default ColorBox;
