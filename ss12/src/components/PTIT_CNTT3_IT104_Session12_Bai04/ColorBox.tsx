export default function ColorBox() {
    const boxArea = <div style={{display: "flex"}}>
        <div style={{width: "200px", height: "200px", backgroundColor: "red", display: "flex", justifyContent: "center", alignItems: "center", margin: "20px"}}>Box</div>
        <div style={{width: "200px", height: "200px", backgroundColor: "blue", display: "flex", justifyContent: "center", alignItems: "center", margin: "20px"}}>Box</div>
        <div style={{width: "200px", height: "200px", backgroundColor: "green", display: "flex", justifyContent: "center", alignItems: "center", margin: "20px"}}>Box</div>
    </div>
    return (
        <div>{boxArea}</div>
    )
}