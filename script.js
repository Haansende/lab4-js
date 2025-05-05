// Make sure this runs after DOM is parsed (defer does that for you)
const btn = document.getElementById("themeToggle");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  // (Optional) Change button text depending on theme:
  if (document.body.classList.contains("dark-theme")) {
    btn.textContent = "Switch to Light Mode";
  } else {
    btn.textContent = "Switch to Dark Mode";
  }
});

// fetch‐users widget
document.getElementById("loadUsersBtn").addEventListener("click", 
    async () => {
    try {
    const res = await
    fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    const userList = document.getElementById("userList");
    userList.innerHTML = "";
    users.forEach(user => {
    const li = document.createElement("li");
    li.textContent = user.name;
    userList.appendChild(li);
    });
    } catch (err) {
    console.error("Failed to load users:", err);
    }
    });

// FAQ toggle behavior
document.querySelectorAll(".question").forEach(q => {
  // for accessibility, track expanded state
  q.setAttribute("aria-expanded", "false");

  q.addEventListener("click", () => {
    const ans = q.nextElementSibling;
    ans.classList.toggle("visible");

    // update aria-expanded
    const isVisible = ans.classList.contains("visible");
    q.setAttribute("aria-expanded", isVisible);
  });
});

function updateClock() {
  const now = new Date();
  const clock = document.getElementById("clock");
  if (clock) {
    clock.textContent = now.toLocaleTimeString();
  }
}
setInterval(updateClock, 1000);
updateClock(); // call once to show immediately
