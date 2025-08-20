import "./App.css";
import ListCourse from "./components/PTIT_CNTT3_IT104_Session12_Bai01/ListCourse";
import Calculation from "./components/PTIT_CNTT3_IT104_Session12_Bai02/Caculation";
import UserInfo from "./components/PTIT_CNTT3_IT104_Session12_Bai03/UserInfo";
import ColorBox from "./components/PTIT_CNTT3_IT104_Session12_Bai04/ColorBox";
import Format from "./components/PTIT_CNTT3_IT104_Session12_Bai05/Format";
import { AdminIndex } from "./components/PTIT_CNTT3_IT104_Session12_Bai06/Page/AdminIndex";
import { UserLayout } from "./components/PTIT_CNTT3_IT104_Session12_Bai07/Page/UserLayout";
import { Info } from "./components/PTIT_CNTT3_IT104_Session12_Bai08/Page/Info";

const TableHead = () => (
  <thead>
    <tr>
      <th>STT</th>
      <th>Họ và tên</th>
      <th>Ngày sinh</th>
      <th>Giới tính</th>
      <th>Địa chỉ</th>
      <th>Hành động</th>
    </tr>
  </thead>
);

const Button = () => (
  <td>
    <button>Sửa</button>
    <button>Xóa</button>
  </td>
);

const TodoListIndex = () => <div>Đây là Todo List</div>;
function App() {
  const data = [
    { stt: 1, name: "Nguyễn Văn A", dob: "20/11/2023", gender: "Nam", address: "Hà Nội" },
    { stt: 2, name: "Trần Thị B", dob: "10/10/2022", gender: "Nữ", address: "Hồ Chí Minh" },
  ];

  return (
    <>
      <div className="container">
        { /* <ListCourse />
        <Calculation />
        <UserInfo />
        <ColorBox />
        <Format /> */ }
      </div>

      <AdminIndex />
      <UserLayout />

      <table className="infoTable">
        <TableHead />
        <tbody> 
          {data.map((d, index) => {
            return (
              <tr key={index}>
                <td>{d.stt}</td>
                <td>{d.name}</td>
                <td>{d.dob}</td>
                <td>{d.gender}</td>
                <td>{d.address}</td>
                <Button />
              </tr>
            );
          })}
        </tbody>
      </table>

      <TodoListIndex />
    </>
  );
}

export default App;