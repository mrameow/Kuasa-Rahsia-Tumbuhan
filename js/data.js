/* ======================================================
   DATA.JS — Semua kandungan Sains Tahun 4, Unit 4:
   Tumbuh-Tumbuhan (Gerak Balas & Fotosintesis)
   ====================================================== */

// ---------- KUIZ: GERAK BALAS ----------
const soalanGerakBalas = [
  {
    ikon:"🌳⬇️",
    teks:"Akar sebatang pokok sentiasa tumbuh menuju ke bawah, ditarik oleh daya bumi. Ini adalah gerak balas terhadap...",
    pilihan:["Graviti Bumi","Cahaya","Sentuhan","Bunyi"],
    jawapan:0,
    penjelasan:"Betul! Akar sentiasa tumbuh ke bawah kerana ditarik oleh graviti Bumi, untuk mencengkam tanah dengan kukuh."
  },
  {
    ikon:"🪴💧",
    teks:"Akar tumbuhan dalam pasu mempunyai 'radar' magis dan membengkok ke arah tanah yang lembap. Ini adalah gerak balas terhadap...",
    pilihan:["Cahaya","Air","Graviti Bumi","Suhu"],
    jawapan:1,
    penjelasan:"Betul! Akar akan membengkok dan bergerak ke arah sumber air supaya tumbuhan terus hidup."
  },
  {
    ikon:"🌱☀️",
    teks:"Pucuk dan daun sebatang pokok membengkok dan memanjat ke arah tingkap untuk mendapatkan cahaya. Ini adalah gerak balas terhadap...",
    pilihan:["Air","Graviti Bumi","Cahaya","Sentuhan"],
    jawapan:2,
    penjelasan:"Betul! Pucuk, daun dan bunga sentiasa bertindak balas dan tumbuh ke arah CAHAYA. Tanpa cahaya, tumbuhan akan layu."
  },
  {
    ikon:"🤚🌿",
    teks:"Apabila disentuh, daun Pokok Semalu akan kuncup serta-merta untuk melindungi diri daripada musuh. Ini adalah gerak balas terhadap...",
    pilihan:["Cahaya","Sentuhan","Air","Graviti Bumi"],
    jawapan:1,
    penjelasan:"Betul! Ini adalah gerak balas terhadap SENTUHAN. Pokok Semalu menguncupkan daunnya untuk melindungi diri."
  },
  {
    ikon:"🪰🌿",
    teks:"Perangkap Lalat Venus akan menutup dengan pantas apabila seekor lalat hinggap di atas daunnya. Mengapakah ia bertindak balas sebegini?",
    pilihan:[
      "Untuk mengejar cahaya matahari",
      "Untuk menangkap mangsa sebagai makanan",
      "Untuk mencari sumber air",
      "Untuk mencengkam tanah"
    ],
    jawapan:1,
    penjelasan:"Betul! Perangkap Lalat Venus bertindak balas terhadap sentuhan untuk menangkap serangga sebagai mangsa/makanan."
  },
  {
    ikon:"🌻🧭",
    teks:"Batang pokok bunga matahari sentiasa membengkok mengikut kedudukan matahari sepanjang hari. Pergerakan ini disebut...",
    pilihan:["Geotropisme","Hidrotropisme","Fototropisme","Tigmotropisme"],
    jawapan:2,
    penjelasan:"Betul! Pergerakan tumbuhan ke arah cahaya dipanggil FOTOTROPISME (foto = cahaya)."
  },
  {
    ikon:"🌱",
    teks:"Apakah maksud RANGSANGAN dalam kajian gerak balas tumbuhan?",
    pilihan:[
      "Perubahan keadaan sekeliling yang dirasai oleh tumbuhan",
      "Tindakan yang dilakukan oleh tumbuhan",
      "Makanan yang dihasilkan oleh tumbuhan",
      "Gas yang dibebaskan oleh tumbuhan"
    ],
    jawapan:0,
    penjelasan:"Betul! Rangsangan ialah perubahan keadaan sekeliling (seperti cahaya, air, graviti, sentuhan) yang dirasai oleh tumbuhan."
  },
  {
    ikon:"🌳",
    teks:"Apakah maksud GERAK BALAS pula?",
    pilihan:[
      "Perubahan keadaan sekeliling",
      "Tindakan yang dilakukan oleh tumbuhan akibat rangsangan",
      "Proses tumbuhan memasak makanan",
      "Proses pernafasan tumbuhan"
    ],
    jawapan:1,
    penjelasan:"Betul! Gerak balas ialah tindakan yang dilakukan oleh tumbuhan sebagai respons kepada rangsangan."
  }
];

// ---------- KUIZ: FOTOSINTESIS ----------
const soalanFotosintesis = [
  {
    ikon:"☀️🌿",
    teks:"Apakah BAHAN yang diperlukan oleh tumbuhan untuk proses fotosintesis? Pilih jawapan yang PALING TEPAT.",
    pilihan:[
      "Cahaya matahari, karbon dioksida, air dan klorofil",
      "Baja, tanah, angin dan air",
      "Oksigen, glukosa, kanji dan cahaya",
      "Nitrogen, air, tanah dan udara"
    ],
    jawapan:0,
    penjelasan:"Betul! Empat bahan utama fotosintesis ialah cahaya matahari, karbon dioksida, air dan klorofil."
  },
  {
    ikon:"🍬",
    teks:"Apakah HASIL utama proses fotosintesis?",
    pilihan:[
      "Karbon dioksida dan air",
      "Nitrogen dan wap air",
      "Glukosa dan oksigen",
      "Klorofil dan kanji"
    ],
    jawapan:2,
    penjelasan:"Betul! Fotosintesis menghasilkan GLUKOSA (makanan tumbuhan) dan OKSIGEN (dibebaskan ke udara)."
  },
  {
    ikon:"🍃",
    teks:"KLOROFIL ialah bahan pewarna hijau pada daun. Apakah fungsi pentingnya?",
    pilihan:[
      "Menyerap air daripada tanah",
      "Membantu tumbuhan menyerap cahaya matahari untuk memasak makanan",
      "Melindungi tumbuhan daripada serangga",
      "Menyimpan oksigen"
    ],
    jawapan:1,
    penjelasan:"Betul! Tanpa klorofil, tumbuhan tidak dapat menyerap cahaya matahari untuk fotosintesis."
  },
  {
    ikon:"💨",
    teks:"Mengapakah kuasa fotosintesis SANGAT PENTING kepada semua hidupan?",
    pilihan:[
      "Ia hanya menghasilkan bunga yang cantik",
      "Ia membekalkan makanan dan oksigen serta mengekalkan keseimbangan gas di udara",
      "Ia menjadikan tumbuhan berwarna hijau sahaja",
      "Ia membantu tumbuhan bergerak lebih pantas"
    ],
    jawapan:1,
    penjelasan:"Betul! Fotosintesis membekalkan sumber makanan, gas oksigen untuk bernafas, dan mengekalkan keseimbangan gas di udara."
  },
  {
    ikon:"🥔",
    teks:"Glukosa yang berlebihan disimpan oleh tumbuhan dalam bentuk...",
    pilihan:["Protein","Lemak","Kanji","Gula pasir"],
    jawapan:2,
    penjelasan:"Betul! Glukosa berlebihan disimpan sebagai KANJI di dalam daun, batang, akar, biji benih dan buah."
  },
  {
    ikon:"🌵🔍",
    teks:"Seorang pelajar menanam benih dalam kotak gelap dengan satu lubang kecil untuk cahaya masuk. Apakah yang akan berlaku kepada pucuknya?",
    pilihan:[
      "Pucuk akan tumbuh lurus ke atas sahaja",
      "Pucuk akan membengkok dan tumbuh ke arah lubang cahaya itu",
      "Pucuk tidak akan tumbuh langsung",
      "Pucuk akan tumbuh ke arah bawah kotak"
    ],
    jawapan:1,
    penjelasan:"Betul! Ini menunjukkan fototropisme positif — pucuk sentiasa membengkok mencari arah cahaya."
  },
  {
    ikon:"🌙",
    teks:"Mengapakah fotosintesis TIDAK berlaku pada waktu malam?",
    pilihan:[
      "Kerana tiada karbon dioksida pada waktu malam",
      "Kerana tiada cahaya matahari sebagai sumber tenaga",
      "Kerana akar tidur pada waktu malam",
      "Kerana klorofil hilang pada waktu malam"
    ],
    jawapan:1,
    penjelasan:"Betul! Cahaya matahari ialah sumber tenaga utama. Tanpanya, tumbuhan tidak dapat memasak makanan."
  }
];

// ---------- LEVEL FOTOSINTESIS (mod jelajah): bahan & hasil ----------
const bahanSenarai = [
  {ikon:"☀️",label:"Cahaya Matahari",betul:true},
  {ikon:"💨",label:"Karbon Dioksida",betul:true},
  {ikon:"💧",label:"Air",betul:true},
  {ikon:"🍃",label:"Klorofil",betul:true},
  {ikon:"🌍",label:"Tanah",betul:false},
  {ikon:"🧪",label:"Baja Kimia",betul:false},
  {ikon:"💨🌬️",label:"Angin",betul:false},
  {ikon:"⚡",label:"Nitrogen Udara",betul:false}
];
const hasilSenarai = [
  {ikon:"🍬",label:"Glukosa",betul:true},
  {ikon:"🫧",label:"Oksigen",betul:true},
  {ikon:"🛢️",label:"Karbon Monoksida",betul:false},
  {ikon:"⚡",label:"Nitrogen",betul:false},
  {ikon:"☁️",label:"Metana",betul:false},
  {ikon:"🧂",label:"Garam Mineral",betul:false}
];

// ---------- PADANAN INGATAN (memory match) ----------
// setiap objek {id, ikon, label} - dua entri sepasang akan berkongsi 'id'
const kadMemori = [
  {id:1, ikon:"☀️", label:"Cahaya"},
  {id:1, ikon:"🌱↗️", label:"Pucuk Condong"},

  {id:2, ikon:"🌍", label:"Graviti"},
  {id:2, ikon:"⬇️🌱", label:"Akar Ke Bawah"},

  {id:3, ikon:"💧", label:"Air"},
  {id:3, ikon:"↩️🌱", label:"Akar Membelok"},

  {id:4, ikon:"🤚", label:"Sentuhan"},
  {id:4, ikon:"🥀", label:"Pokok Semalu"},

  {id:5, ikon:"🍃", label:"Klorofil"},
  {id:5, ikon:"🎨", label:"Pewarna Hijau"},

  {id:6, ikon:"💨💧", label:"CO₂ + Air"},
  {id:6, ikon:"🍬", label:"Glukosa"},

  {id:7, ikon:"🍃🏭", label:"Kilang Daun"},
  {id:7, ikon:"🫧", label:"Oksigen"},

  {id:8, ikon:"🍬", label:"Kanji Simpanan"},
  {id:8, ikon:"🍅", label:"Buah & Biji"}
];
