document.addEventListener("DOMContentLoaded", function () {
    fetch("https://raw.githubusercontent.com/AlainaApolinario/Alaina1/main/course.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const container = document.getElementById("courses-container");
            container.innerHTML = ""; // Clear previous data
            
            data.forEach(course => {
                const row = `
                    <tr>
                        <td>${course.year_level}</td>
                        <td>${course.semester}</td>
                        <td>${course.code}</td>
                        <td>${course.title}</td>
                        <td>${course.credit}</td>
                    </tr>
                `;
                container.innerHTML += row;
            });
        })
        .catch(error => {
            console.error("Error fetching courses:", error);
            document.getElementById("courses-container").innerHTML = "<tr><td colspan='5'>Failed to load courses.</td></tr>";
        });
});
