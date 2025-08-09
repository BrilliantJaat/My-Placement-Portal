document.addEventListener("DOMContentLoaded", function () {
  const courseSelect = document.getElementById("course");
  const branchSelect = document.getElementById("branch");

  const branchesByCourse = {
    "B.Tech": ["CSE", "ECE", "EE", "ME"],
    "M.Tech": ["CSE", "VLSI", "Power Systems", "Machine Design"],
    "MBA": ["Marketing", "Finance", "HR", "Business Analytics"],
    "Pharmacy": ["Pharmaceutics", "Pharmacology", "Pharmaceutical Chemistry"]
  };

  courseSelect.addEventListener("change", function () {
    const selectedCourse = courseSelect.value;
    branchSelect.innerHTML = '<option value="">Select Branch</option>';

    if (branchesByCourse[selectedCourse]) {
      branchesByCourse[selectedCourse].forEach(branch => {
        const option = document.createElement("option");
        option.value = branch;
        option.textContent = branch;
        branchSelect.appendChild(option);
      });
    }
  });
});