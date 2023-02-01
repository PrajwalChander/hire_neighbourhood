function openProfile(name, title, rating, avatar, location) {
  document.getElementById("worker-avatar").src = avatar;
  document.getElementById("worker-name").innerHTML = name;
  document.getElementById("worker-title").innerHTML = title;
  document.getElementById("worker-rating").innerHTML = "Rating: " + rating;
  document.getElementById("worker-location").innerHTML = location;
  document.getElementById("worker-hours").innerHTML = "9am-5pm";
  document.getElementById("worker-phone").innerHTML = "555-555-5555";
  document.getElementById("worker-payment").innerHTML = "Accepts credit cards";
  document.getElementById("worker-profile").style.display = "block";
}


function closeProfile() {
  document.getElementById("worker-profile").style.display = "none";
}

function searchWorkers(searchTerm) {
  // Get all worker elements
  const workers = document.querySelectorAll(".worker");
  
  // Loop through each worker element
  workers.forEach(worker => {
    // Get the worker's title
    const workerTitle = worker.querySelector("p").textContent;
    
    // Check if the worker's title contains the search term
    if (workerTitle.toLowerCase().includes(searchTerm.toLowerCase())) {
      // Show the worker
      worker.style.display = "block";
    } else {
      // Hide the worker
      worker.style.display = "none";
    }
  });
}


// Get the search input element
const searchInput = document.querySelector("#search-input");

// Listen for changes in the search input
searchInput.addEventListener("input", e => {
  // Call the search function with the search input value
  searchWorkers(e.target.value);
});


