import React, { useState } from "react";

const StudentForm = ({ addStudent }) => {
const [name, setName] = useState("");
const [course, setCourse] = useState("");
const [message, setMessage] = useState("");

const courses = [
"Bachelor of Science Information Technology (BSIT)",
"Certificate in Computer Sciences (CCS)",
"Bachelor of Science in Office Administration (BSOA)",
"Certificate in Office Administration (COA)"
];

const handleSubmit = async (e) => {
e.preventDefault();
if (!name || !course) {
setMessage("Please fill in all fields.");
return;
}
await addStudent(name, course);
setName("");
setCourse("");
setMessage("Student added successfully!");
};

return (
<div className="form-container">
<h2 className="form-header">Add New Student</h2>
<form onSubmit={handleSubmit}>
<input
type="text"
placeholder="Student Name"
value={name}
onChange={(e) => setName(e.target.value)}
className="input-field"
/>
<select
value={course}
onChange={(e) => setCourse(e.target.value)}
className="dropdown"
>
<option value="">Select a Course</option>
{courses.map((c, index) => (
<option key={index} value={c}>
{c}
</option>
))}
</select>
<button type="submit" className="submit-button">
Add Student
</button>
</form>
{message && <p className="message">{message}</p>}
</div>
);
};

export default StudentForm;