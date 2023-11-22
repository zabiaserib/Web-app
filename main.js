// fichier javascript

const employeeData = [
  { name: "Ali", performance:     [1, 9, 0, 0, 0] },
  { name: "Georges", performance: [1, 7, 0, 0, 0] },
  { name: "Landry", performance:  [10, 1, 0, 0, 0] },
  { name: "Landry", performance:  [1, 4, 0, 0, 0] },
];

document.addEventListener("DOMContentLoaded", function () {
  const empTable = document.getElementById("employee-table");
  const performanceCells = document.querySelectorAll(".performance");
  const totalCells = document.querySelectorAll(".total");
  const dayTotalCells = document.querySelectorAll(".total-day");

  let totalPerByDay = [0, 0, 0, 0, 0];
  let totalPer = 0;

  employeeData.forEach((employee, rowIndex) => {
    const performanceRow = performanceCells[rowIndex * 5];
    let total = 0;

    employee.performance.forEach((value, dayIndex) => {
      const cellIndex = rowIndex * 5 + dayIndex;
      performanceCells[cellIndex].textContent = value;
      total += value;
      totalPerByDay[dayIndex] += value;
      totalPer += value;
    });

    totalCells[rowIndex].textContent = total;
  });

  dayTotalCells.forEach((cell, dayIndex) => {
    cell.textContent = totalPerByDay[dayIndex];
  });

  totalCells[totalCells.length - 1].textContent = totalPer;
});
