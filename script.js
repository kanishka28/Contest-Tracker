const contests = [
  {
    name: "Codeforces Round 901",
    platform: "Codeforces",
    date: "2025-08-06",
    time: "18:30",
    status: "Upcoming",
  },
  {
    name: "LeetCode Weekly Contest 400",
    platform: "LeetCode",
    date: "2025-08-04",
    time: "20:00",
    status: "Ongoing",
  },
  {
    name: "AtCoder Beginner Contest 999",
    platform: "AtCoder",
    date: "2025-07-30",
    time: "21:00",
    status: "Past",
  },
];

const contestList = document.getElementById("contest-list");
const searchInput = document.getElementById("search");
const filterButtons = document.querySelectorAll(".filter");

function displayContests(filter = "All", search = "") {
  contestList.innerHTML = "";

  const filtered = contests.filter((contest) => {
    const matchFilter = filter === "All" || contest.status === filter;
    const matchSearch = contest.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  if (filtered.length === 0) {
    contestList.innerHTML = "<p>No contests found.</p>";
    return;
  }

  filtered.forEach((contest) => {
    const div = document.createElement("div");
    div.className = "contest-card";
    div.innerHTML = `
      <h3>${contest.name}</h3>
      <p><strong>Platform:</strong> ${contest.platform}</p>
      <p><strong>Date:</strong> ${contest.date}</p>
      <p><strong>Time:</strong> ${contest.time}</p>
      <p><strong>Status:</strong> ${contest.status}</p>
    `;
    contestList.appendChild(div);
  });
}

displayContests();

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value;
  const activeFilter = document.querySelector(".filter.active").textContent;
  displayContests(activeFilter, searchValue);
});

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    displayContests(btn.textContent, searchInput.value);
  });
});

