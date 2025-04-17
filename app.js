    const data = {
      "Sejarah Peradaban Islam": [
        ["M. Imran", "Nur Ardhiansyah KH"],
        ["Siti Muliana", "Hilya Hasna Nabila"],
        ["Rusdi", "Zaeni Anwar"],
        ["Zulfi Fadhlurrahman", "Zaky Zimmatillah Zulfikar"],
        ["Noviyatul Badriyah", "Ibnatul Mardiah"],
        ["Nailul Khoiril Marom", "M. Syamsur Rijal"],
        ["Nurul Huda", "M. Iskhak Nawawi"],
        ["Nur Kholisah", "Nurul Jannah"],
        ["Saepul", "M. Imdadur Rachman"],
        ["Yolan Hardika Pratama", "Muh. Ikbal Amsah"],
        ["Farhani Azkia", "Putri Salsabila Azkya"],
        ["Salman Alfarezi", "M. Subulul Hikam"],
        ["M. Imran", "Zaky Zimmatillah Zulfikar"],
        ["M. Imdadur Rachman", "Muh. Ikbal Amsah"]
      ],
      "Filsafat Ilmu": [
        ["Ibnatul Mardiah", "Putri Salsabila Azkya"],
        ["Nurul Huda", "M. Imdadur Rachman"],
        ["Nur Kholisah", "Hilya Hasna Nabila"],
        ["M. Imran", "Salman Alfarezi"],
        ["M. Subulul Hikam", "Zaeni Anwar"],
        ["Nurul Jannah", "Farhani Azkia"],
        ["M. Iskhak Nawawi", "Zaky Zimmatillah Zulfikar"],
        ["Nailul Khoiril Marom", "Yolan Hardika Pratama"],
        ["Siti Muliana", "Noviyatul Badriyah"],
        ["M. Syamsur Rijal", "Nur Ardhiansyah KH"],
        ["Muh. Ikbal Amsah", "Zulfi Fadhlurrahman"],
        ["Saepul", "Rusdi"]
      ],
      "Pendekatan dalam Kajian Islam": [
        ["M. Subulul Hikam", "Muh. Ikbal Amsah"],
        ["M. Imdadur Rachman", "M. Imran"],
        ["M. Syamsur Rijal", "M. Iskhak Nawawi"],
        ["Nailul Khoiril Marom", "Nur Ardhiansyah KH"],
        ["Nurul Huda", "Rusdi"],
        ["Saepul", "Salman Alfarezi"],
        ["Yolan Hardika Pratama", "Zaeni Anwar"],
        ["Zaky Zimmatillah Zulfikar", "Zulfi Fadhlurrahman"],
        ["Farhani Azkia", "Hilya Hasna Nabila"],
        ["Ibnatul Mardiah", "Noviyatul Badriyah"],
        ["Nur Kholisah", "Nurul Jannah"],
        ["Putri Salsabila Azkya", "Siti Muliana"]
      ],
      "Ulumul Qur’an": [
        ["M. Imran", "Putri Salsabila Azkya"],
        ["M. Imdadur Rachman", "Rusdi"],
        ["Zaky Zimmatillah Zulfikar", "Nur Ardhiansyah KH"],
        ["M. Syamsur Rijal", "Farhani Azkia"],
        ["Saepul", "M. Subulul Hikam"],
        ["Zaeni Anwar", "Muh. Ikbal Amsah"],
        ["Siti Muliana", "Nurul Huda"],
        ["Yolan Hardika Pratama"],
        ["Nailul Khoiril Marom"]
      ],
      "Sejarah dan Pemikiran Tafsir di Indonesia": [
        ["Farhani Azkia", "Putri Salsabila Azkya"],
        ["Muhamad Imdadur Rachman", "Zaky Zimmatillah Zulfikar"],
        ["Zaeni Anwar", "Zulfi Fadhlurrahman"],
        ["Nurul Huda", "Muchamad Subulul Hikam"],
        ["Yolan Hardika Pratama", "Rusdi"],
        ["Muhammad Syamsur Rijal", "Nur Ardhiansyah Khalillurahman Ibrahim"],
        ["Mukhamad Iskhak Nawawi", "Nailul Khoiril Marom"],
        ["Saepul", "Salman Alfarezi"],
        ["Hilya Hasna Nabila", "Nur Kholisah"]
      ],
      "Sejarah Pemikiran Islam": [
        ["M. Syamsur Rijal", "Nur Kholisah", "Nurul Huda", "Zaky Zimmatillah Zulfikar"],
        ["M. Subulul Hikam", "Zaeni Anwar", "M. Imdadur Rachman", "M. Imran"],
        ["Nailul Khoiril Marom", "Saepul", "Zulfi Fadhlurrahman", "Salman Alfarezi"],
        ["Yolan Hardika Pratama", "Rusdi", "Hilya Hasna Nabila", "Muh. Ikbal Amsah"],
        ["Nur Ardhiansyah KH", "Siti Muliana", "Nurul Jannah", "Noviyatul Badriyah"],
        ["Putri Salsabila Azkya", "Farhani Azkia", "Ibnatul Mardiah", "M. Iskhak Nawawi"],
        ["M. Syamsur Rijal", "Nur Kholisah", "Nurul Huda", "Zaky Zimmatillah Zulfikar"],
        ["M. Subulul Hikam", "Zaeni Anwar", "M. Imdadur Rachman", "M. Imran"],
        ["Nailul Khoiril Marom", "Saepul", "Zulfi Fadhlurrahman", "Salman Alfarezi"]
      ]
    };

    const dates = [
      "10 Februari 2025", "17 Februari 2025", "24 Februari 2025", "14 April 2025",
      "21 April 2025", "28 April 2025", "05 Mei 2025", "12 Mei 2025",
      "19 Mei 2025", "26 Mei 2025", "02 Juni 2025", "09 Juni 2025",
      "16 Juni 2025", "23 Juni 2025",
      "24 April 2025", "01 Mei 2025", "08 Mei 2025", "15 Mei 2025",
      "22 Mei 2025", "29 Mei 2025", "05 Juni 2025", "12 Juni 2025", "19 Juni 2025"
    ];

     function populateFilters() {
      const courseSelect = document.getElementById("courseFilter");
      const dateSelect = document.getElementById("dateFilter");

      for (const course of Object.keys(data)) {
        const option = document.createElement("option");
        option.value = course;
        option.text = course;
        courseSelect.appendChild(option);
      }

      dates.forEach(date => {
        const option = document.createElement("option");
        option.value = date;
        option.text = date;
        dateSelect.appendChild(option);
      });
    }

    function checkAssignments() {
      const name = document.getElementById("studentName").value.trim().toLowerCase();
      const selectedCourse = document.getElementById("courseFilter").value;
      const selectedDate = document.getElementById("dateFilter").value;
      const results = [];

      for (const [course, assignments] of Object.entries(data)) {
        if (selectedCourse !== "" && course !== selectedCourse) continue;

        assignments.forEach((group, index) => {
          const tanggal = dates[index] || "Tanggal tidak ditemukan";
          if (selectedDate !== "" && tanggal !== selectedDate) return;

          group.forEach(person => {
            if (person.toLowerCase().includes(name)) {
              results.push(`${course} - ${tanggal} - <strong>${person}</strong>`);
            }
          });
        });
      }

      const resultDiv = document.getElementById("results");
      if (results.length > 0) {
        resultDiv.innerHTML = "<h3>Hasil Penugasan:</h3><ul>" +
          results.map(r => `<li>${r}</li>`).join("") +
          "</ul>";
      } else {
        resultDiv.innerHTML = "<p>Tidak ada penugasan ditemukan.</p>";
      }
    }

    window.onload = populateFilters;
