document.addEventListener("DOMContentLoaded", function () {
  // Set up status bar
  const statusFill = document.getElementById("status-fill");
  const currentDateElement = document.getElementById("current-date");

  // Set up detection status logic (example logic for status)
  const detectionStatus = "Undetected"; // Change to "Testing" or "Detected" as needed
  const currentDate = new Date().toLocaleDateString();

  currentDateElement.textContent = currentDate;

  // Adjust bar appearance based on detection status
  switch (detectionStatus) {
    case "Undetected":
      statusFill.style.backgroundColor = "green";
      statusFill.style.width = "100%";
      break;
    case "Testing":
      statusFill.style.backgroundColor = "yellow";
      statusFill.style.width = "50%";
      break;
    case "Detected":
      statusFill.style.backgroundColor = "red";
      statusFill.style.width = "100%";
      break;
  }

  // Ban rate timer
  const lastUpdatedElement = document.getElementById("last-updated");
  const updateBanRate = () => {
    const now = new Date();
    lastUpdatedElement.textContent = now.toLocaleTimeString();
  };

  // Update ban rate timestamp every 10 minutes
  updateBanRate();
  setInterval(updateBanRate, 10 * 60 * 1000);
});
