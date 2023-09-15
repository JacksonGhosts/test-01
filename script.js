const searchData = [
  { name: "Ship -- 01 Palikiar", link: "Classes/Shipinfo/01Palikir[OPV].html" },
  { name: "Ship -- 02 Hameenmaa", link: "Classes/Shipinfo/02 Hameenmaa.html" },
  { name: "Ship -- 03 Lata", link: "Classes/Shipinfo/03Lata.html" },
  { name: "Ship -- 03 Turumaa", link: "Classes/Shipinfo/03Turunmaa.html" },
  { name: "Ship -- 1 Uruguay", link: "Classes/Shipinfo/1uruguay.html" },
  { name: "Ship -- 1-114 Polnochny B", link: "Classes/Shipinfo/1-114polonochny.html" },
  { name: "Ship -- 1-508 [Pr.159AE Petya III]", link: "Classes/Shipinfo/1-508petya.html" },
  { name: "Ship -- 1-8 [Zhuk Pr.1400M Grif]", link: "Classes/Shipinfo" },
  { name: "Ship -- 10 Al Riffa [FPB-38]", link: "Classes/Shipinfo" },
  { name: "Ship -- xxx", link: "Classes/Shipinfo" },
  { name: "Ship -- xxx", link: "Classes/Shipinfo" },
  { name: "Ship -- xxx", link: "Classes/Shipinfo" },
  { name: "Ship -- xxx", link: "Classes/Shipinfo" },
  { name: "Ship -- xxx", link: "Classes/Shipinfo" },
  { name: "Ship -- xxx", link: "Classes/Shipinfo" },
  { name: "Ship -- xxx", link: "Classes/Shipinfo" },
  { name: "Ship -- xxx", link: "Classes/Shipinfo" },
  { name: "Ship -- xxx", link: "Classes/Shipinfo" },
  { name: "Ship -- xxx", link: "Classes/Shipinfo" },
  { name: "Ship -- xxx", link: "Classes/Shipinfo" },
  { name: "Ship -- xxx", link: "Classes/Shipinfo" },
  { name: "Ship -- xxx", link: "Classes/Shipinfo" },
  { name: "Ship -- xxx", link: "Classes/Shipinfo" },
  { name: "Ship -- xxx", link: "Classes/Shipinfo" },
  { name: "Ship -- xxx", link: "Classes/Shipinfo" },
  { name: "Ship -- xxx", link: "Classes/Shipinfo" },
  { name: "Ship -- xxx", link: "Classes/Shipinfo" },
  { name: "Ship -- xxx", link: "Classes/Shipinfo" },
  { name: "Ship -- xxx", link: "Classes/Shipinfo" },
  { name: "Ship -- xxx", link: "Classes/Shipinfo" },
  { name: "Ship -- xxx", link: "Classes/Shipinfo" },
  { name: "Ship -- xxx", link: "Classes/Shipinfo" },
  { name: "Ship -- xxx", link: "Classes/Shipinfo" },
  { name: "Ship -- xxx", link: "Classes/Shipinfo" },
  { name: "Ship -- xxx", link: "Classes/Shipinfo" },
  { name: "Aircraft -- xxx", link: "Classes/airinfo" },
  { name: "Aircraft -- xxx", link: "Classes/airinfo" },
  { name: "Aircraft -- xxx", link: "Classes/airinfo" },
  { name: "Aircraft -- xxx", link: "Classes/airinfo" },
  { name: "Aircraft -- xxx", link: "Classes/airinfo" },
  { name: "Aircraft -- xxx", link: "Classes/airinfo" },
  { name: "Aircraft -- xxx", link: "Classes/airinfo" },
  { name: "Aircraft -- xxx", link: "Classes/airinfo" },
  { name: "Aircraft -- xxx", link: "Classes/airinfo" },
  { name: "Aircraft -- xxx", link: "Classes/airinfo" },
  { name: "Aircraft -- xxx", link: "Classes/airinfo" },
  { name: "Aircraft -- xxx", link: "Classes/airinfo" },
  { name: "Aircraft -- xxx", link: "Classes/airinfo" },
  { name: "Aircraft -- xxx", link: "Classes/airinfo" },
  { name: "Aircraft -- xxx", link: "Classes/airinfo" },

  // ... add more items as needed
  // { name: "Ship -- xxx", link: "Classes/Shipinfo" },
  // { name: "Aircraft -- xxx", link: "Classes/airinfo" },
];

const searchInput = document.getElementById("searchInput1");
const searchButton = document.getElementById("searchButton1");
const searchResults = document.getElementById("searchResults1");

function performSearch() {
  const searchTerm = searchInput.value.toLowerCase();
  const results = searchData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm)
  );

  displayResults(results);
}

function displayResults(results) {
  searchResults.innerHTML = "";

  if (results.length === 0) {
    searchResults.innerHTML = "<li>No results found.</li>";
  } else {
    results.forEach((result) => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.textContent = result.name;
      link.href = result.link;
      li.appendChild(link);
      searchResults.appendChild(li);
    });
  }
}

searchButton.addEventListener("click", performSearch);
searchInput.addEventListener("keyup", performSearch);