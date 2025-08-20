export default function UserInfo() {
    const userInfo = <ul>
        <li>Họ và tên: Nguyễn Văn A</li>
        <li>Giới tính: Nam</li>
        <li>Ngày sinh: 06/03/2024</li>
        <li>Email: nva@gmail.com</li>
        <li>Địa chỉ: Thanh Xuân, Hà Nội</li>
    </ul>
    return (
        <div>
            <h2>Thông tin cá nhân</h2>
            <div>{userInfo}</div>
        </div>
    )
}