const dataByClass = {
  "PTIQ": {
    "Sejarah Peradaban Islam": {
      "2025-04-21": ["Noviyatul Badriyah", "Ibnatul Mardiah"],
      "2025-04-28": ["Nailul Khoiril Marom", "M. Syamsur Rijal"],
      "2025-05-05": ["Nurul Huda", "M. Iskhak Nawawi"],
      "2025-05-12": ["Nur Kholisah", "Nurul Jannah"],
      "2025-05-19": ["Saepul", "M. Imdadur Rachman"],
      "2025-05-26": ["Yolan Hardika Pratama", "Muh. Ikbal Amsah"],
      "2025-06-02": ["Farhani Azkia", "Putri Salsabila Azkya"],
      "2025-06-09": ["Salman Alfarezi", "M. Subulul Hikam"],
      "2025-06-16": ["M. Imran", "Zaky Zimmatillah Zulfikar"],
      "2025-06-23": ["M. Imdadur Rachman", "Muh. Ikbal Amsah"]
    },
    "Filsafat Ilmu": {
      "2025-04-21": ["M. Subulul Hikam", "Zaeni Anwar"],
      "2025-04-28": ["Nurul Jannah", "Farhani Azkia"],
      "2025-05-05": ["M. Iskhak Nawawi", "Zaky Zimmatillah Zulfikar"],
      "2025-05-12": ["Nailul Khoiril Marom", "Yolan Hardika Pratama"],
      "2025-05-19": ["Siti Muliana", "Noviyatul Badriyah"],
      "2025-05-26": ["M. Syamsur Rijal", "Nur Ardhiansyah KH"],
      "2025-06-02": ["Muh. Ikbal Amsah", "Zulfi Fadhlurrahman"],
      "2025-06-09": ["Saepul", "Rusdi"]
    },
    "Pendekatan dalam Kajian Islam": {
      "2025-04-21": ["Nurul Huda", "Rusdi"],
      "2025-04-28": ["Saepul", "Salman Alfarezi"],
      "2025-05-05": ["Yolan Hardika Pratama", "Zaeni Anwar"],
      "2025-05-12": ["Zaky Zimmatillah Zulfikar", "Zulfi Fadhlurrahman"],
      "2025-05-19": ["Farhani Azkia", "Hilya Hasna Nabila"],
      "2025-05-26": ["Ibnatul Mardiah", "Noviyatul Badriyah"],
      "2025-06-02": ["Nur Kholisah", "Nurul Jannah"],
      "2025-06-09": ["Putri Salsabila Azkya", "Siti Muliana"]
    },
    "Ulumul Qur’an": {
      "2025-04-24": ["M. Imran", "Putri Salsabila Azkya"],
      "2025-05-01": ["M. Imdadur Rachman", "Rusdi"],
      "2025-05-08": ["Zaky Zimmatillah Zulfikar", "Nur Ardhiansyah KH"],
      "2025-05-15": ["M. Syamsur Rijal", "Farhani Azkia"],
      "2025-05-22": ["Saepul", "M. Subulul Hikam"],
      "2025-05-29": ["Zaeni Anwar", "Muh. Ikbal Amsah"],
      "2025-06-05": ["Siti Muliana", "Nurul Huda"],
      "2025-06-12": ["Yolan Hardika Pratama"],
      "2025-06-19": ["Nailul Khoiril Marom"]
    },
    "Sejarah dan Pemikiran Tafsir di Indonesia": {
      "2025-04-24": ["Farhani Azkia", "Putri Salsabila Azkya"],
      "2025-05-01": ["Muhamad Imdadur Rachman", "Zaky Zimmatillah Zulfikar"],
      "2025-05-08": ["Zaeni Anwar", "Zulfi Fadhlurrahman"],
      "2025-05-15": ["Nurul Huda", "Muchamad Subulul Hikam"],
      "2025-05-22": ["Yolan Hardika Pratama", "Rusdi"],
      "2025-05-29": ["Muhammad Syamsur Rijal", "Nur Ardhiansyah Khalillurahman Ibrahim"],
      "2025-06-05": ["Mukhamad Iskhak Nawawi", "Nailul Khoiril Marom"],
      "2025-06-12": ["Saepul", "Salman Alfarezi"],
      "2025-06-19": ["Hilya Hasna Nabila", "Nur Kholisah"]
    },
    "Sejarah Pemikiran Islam": {
      "2025-04-24": ["M. Syamsur Rijal", "Nur Kholisah", "Nurul Huda", "Zaky Zimmatillah Zulfikar"],
      "2025-05-01": ["M. Subulul Hikam", "Zaeni Anwar", "M. Imdadur Rachman", "M. Imran"],
      "2025-05-08": ["Nailul Khoiril Marom", "Saepul", "Zulfi Fadhlurrahman", "Salman Alfarezi"],
      "2025-05-15": ["Yolan Hardika Pratama", "Rusdi", "Hilya Hasna Nabila", "Muh. Ikbal Amsah"],
      "2025-05-22": ["Nur Ardhiansyah KH", "Siti Muliana", "Nurul Jannah", "Noviyatul Badriyah"],
      "2025-05-29": ["Putri Salsabila Azkya", "Farhani Azkia", "Ibnatul Mardiah", "M. Iskhak Nawawi"],
      "2025-06-05": ["M. Syamsur Rijal", "Nur Kholisah", "Nurul Huda", "Zaky Zimmatillah Zulfikar"],
      "2025-06-12": ["M. Subulul Hikam", "Zaeni Anwar", "M. Imdadur Rachman", "M. Imran"],
      "2025-06-19": ["Nailul Khoiril Marom", "Saepul", "Zulfi Fadhlurrahman", "Salman Alfarezi"]
    }
  },
  "PKU B": {},
  "PKUP": {}
};

// DOM Elements
const classSelect = document.getElementById("class-select");
const subjectSelect = document.getElementById("subject-select");
const nameInput = document.getElementById("search-name");
const resultsDiv = document.getElementById("results");

// Update subject options based on selected class
function updateSubjects() {
  const selectedClass = classSelect.value;
  const subjects = Object.keys(dataByClass[selectedClass]);
  
  subjectSelect.innerHTML = '<option value="">Semua Mata Kuliah</option>';
  subjects.forEach(subject => {
    subjectSelect.innerHTML += `<option value="${subject}">${subject}</option>`;
  });
}

// Format tanggal ke bahasa Indonesia
function formatTanggalIndo(dateStr) {
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const months = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];

  const date = new Date(dateStr);
  const dayName = days[date.getDay()];
  const day = String(date.getDate()).padStart(2, '0');
  const monthName = months[date.getMonth()];
  const year = date.getFullYear();
  return `${dayName}, ${day} ${monthName} ${year}`;
}

// Highlight matching text
function highlightText(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(regex, "<strong>$1</strong>");
}

// Show filtered results
function showResults() {
  const nameQuery = nameInput.value.toLowerCase();
  const selectedClass = classSelect.value;
  const selectedSubject = subjectSelect.value;
  
  resultsDiv.innerHTML = "";
  const matches = [];
  const classData = dataByClass[selectedClass];

  for (const subject in classData) {
    if (selectedSubject && subject !== selectedSubject) continue;
    
    for (const date in classData[subject]) {
      const names = classData[subject][date].filter(name => 
        name.toLowerCase().includes(nameQuery)
      );

      if (names.length > 0) {
        matches.push({
          class: selectedClass,
          subject,
          date,
          names,
          query: nameQuery
        });
      }
    }
  }

  // Sort by date
  matches.sort((a, b) => new Date(a.date) - new Date(b.date));

  // Render results
  matches.forEach(match => {
    const card = document.createElement("div");
    card.className = "result-card";
    
    const highlightedNames = match.names.map(name => 
      highlightText(name, match.query)
    ).join(", ");

    card.innerHTML = `
      <p><i class="fa-solid fa-calendar-day"></i> <strong>${formatTanggalIndo(match.date)}</strong></p>
      <p><i class="fa-solid fa-users"></i> ${highlightedNames}</p>
      <p><i class="fa-solid fa-book"></i> ${match.subject}</p>
      <p><i class="fa-solid fa-chalkboard-user"></i> Kelas: ${match.class}</p>
    `;
    
    resultsDiv.appendChild(card);
  });
}

// Event Listeners
classSelect.addEventListener("change", () => {
  updateSubjects();
  showResults();
});

subjectSelect.addEventListener("change", showResults);
nameInput.addEventListener("input", showResults);

// Initial setup
updateSubjects();
showResults();
