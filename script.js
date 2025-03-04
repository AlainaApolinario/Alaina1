document.addEventListener("DOMContentLoaded", function () {
    fetch("https://raw.githubusercontent.com/AlainaApolinario/Alaina1/main/course.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data); /
            
            const courses = data.courses; 

            if (!Array.isArray(courses)) {
                throw new Error("Invalid data format: 'courses' is not an array");
            }

            const container = document.getElementById("courses-container");

            if (!container) {
                throw new Error("Element with ID 'courses-container' not found");
            }

            container.innerHTML = ""; 

            
            courses.forEach(course => {
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

            console.log("Courses loaded successfully!");
        })
        .catch(error => {
            console.error("Error fetching courses:", error);
            document.getElementById("courses-container").innerHTML =
                "<tr><td colspan='5'>Failed to load courses.</td></tr>";
        });
});
