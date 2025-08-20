const courses: string[] = ["HTML", "CSS", "JavaScript", "ReactJS"]
export default function ListCourse() {
    const listCourse = courses.map(course => <li key={course}>{course}</li>)
    return (
        <div>
            <h2>Danh sách khoá học</h2>
            <ul>{listCourse}</ul>
        </div>
    )
}