const a: number = 10, b: number = 10
export default function Calculation() {
    const calculation = <ul>
        <li>{a} + {b} = {a + b}</li>
        <li>{a} - {b} = {a - b}</li>
        <li>{a} * {b} = {a * b}</li>
        <li>{a} / {b} = {a / b}</li>
    </ul>
    return (
        <div>
            <h2>Danh sách kết quả</h2>
            <div>{calculation}</div>
        </div>
    )
}