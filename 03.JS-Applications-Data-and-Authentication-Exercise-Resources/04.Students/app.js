function solve() {
    showStudents();
    document.querySelector('.container-form').addEventListener('submit', async (ev) => {
        ev.preventDefault();

        const formData = new FormData(ev.target);

        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const facultyNumber = formData.get('facultyNumber');
        const grade = formData.get('grade');

        if (!firstName || !lastName || !facultyNumber || !grade) {
            return alert("All fields must be filled!")
        }

        const obj = {
            firstName,
            lastName,
            facultyNumber,
            grade
        }

        let url = 'http://localhost:3030/jsonstore/collections/students';
        let response = await fetch(url, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        })

        const data = await response.json();

        if (!response.ok) {
            return alert(data.message);
        }

        document.querySelector('input[name="firstName"]').value = '';
        document.querySelector('input[name="lastName"]').value = '';
        document.querySelector('input[name="facultyNumber"]').value = '';
        document.querySelector('input[name="grade"]').value = '';

        showStudents();
    });
}

async function showStudents() {
    const body = document.querySelector('tbody');
    document.querySelector('tbody').innerHTML = '';
    let url = 'http://localhost:3030/jsonstore/collections/students';
    let response = await fetch(url);
    let data = await response.json();

    if (!response.ok) {
        return alert(data.message);
    }

    for (const key in data) {
        let student = createElement(data[key]);
        body.appendChild(student);
    }
}

function createElement(student) {
    const element = document.createElement('tr');
    element.innerHTML =
        `<td>${student.firstName}</td>
    <td>${student.lastName}</td>
    <td>${student.facultyNumber}</td>
    <td>${student.grade}</td>`

    return element;
}

solve();
