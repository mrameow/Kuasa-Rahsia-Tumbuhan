# Kuasa Rahsia Tumbuh-Tumbuhan 🌱

Permainan web interaktif untuk **Sains Tahun 4 — Unit 4: Tumbuh-Tumbuhan** (Gerak Balas & Fotosintesis), dibina sepenuhnya dengan HTML, CSS dan JavaScript — tiada rangka kerja (framework) atau pemasangan diperlukan.

🔗 **Main sekarang:** https://mrameow.github.io/Kuasa-Rahsia-Tumbuhan/

## Mod Permainan

| Mod | Penerangan |
|---|---|
| 🧭 **Jelajah Gerak Balas** | Sandbox interaktif — klik cahaya/air pada sisi kiri/kanan dan lihat pucuk & akar tumbuhan bengkok secara animasi. Sentuh Pokok Semalu dan Perangkap Lalat Venus untuk lihat gerak balas sentuhan. |
| 🧪 **Dapur Magis Fotosintesis** | Hantar CO₂ dan Air ke daun untuk memicu animasi fotosintesis — hasilkan oksigen & glukosa (buah tumbuh di pokok!). Cuba toggle siang/malam untuk lihat kenapa fotosintesis perlukan cahaya. |
| 🃏 **Padanan Ingatan** | Permainan kad memori — padankan konsep sains dengan contohnya. |
| 🏆 **Kuiz Detektif Botani** | Kuiz pilihan berganda dengan topik berasingan (Gerak Balas / Fotosintesis / Campuran), skor & gelaran akhir. |

## Struktur Projek

```
├── index.html          # Struktur halaman & semua skrin permainan
├── css/
│   └── style.css       # Semua gaya (tema, animasi, responsif)
└── js/
    ├── data.js          # Bank soalan kuiz, senarai bahan/hasil, pasangan kad memori
    ├── main.js           # Navigasi skrin, toast, lencana (badge)
    ├── gerak.js          # Logik Jelajah Gerak Balas
    ├── foto.js            # Logik Dapur Magis Fotosintesis
    ├── kuiz.js             # Enjin kuiz
    └── memori.js            # Logik Padanan Ingatan
```

## Jalankan Secara Tempatan

Buka `index.html` terus dalam pelayar, atau jalankan pelayan tempatan ringkas:

```bash
python -m http.server 8000
```

kemudian layari `http://localhost:8000`.

---
Dibina untuk membantu murid meneroka Sains Tahun 4 dengan cara yang menyeronokkan — belajar melalui penerokaan, animasi dan permainan, bukan sekadar membaca.
