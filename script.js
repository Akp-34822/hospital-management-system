const modal = document.getElementById("patientModal");
const addBtn = document.getElementById("addPatientBtn");
const table = document.getElementById("patientTable").getElementsByTagName('tbody')[0];
const totalPatients = document.getElementById("totalPatients");

addBtn.onclick = () => {
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

function addPatient() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const disease = document.getElementById("disease").value;

    if (name === "" || age === "" || disease === "") {
        alert("Please fill all fields!");
        return;
    }

    const row = table.insertRow();
    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = age;
    row.insertCell(2).innerText = disease;
    row.insertCell(3).innerHTML = `<span class="status active">Admitted</span>`;

    totalPatients.innerText = parseInt(totalPatients.innerText) + 1;

    closeModal();
}
