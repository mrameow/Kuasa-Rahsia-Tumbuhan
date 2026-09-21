/* ======================================================
   GERAK.JS — Jelajah Gerak Balas (simulasi SVG organik)

   Setiap sisi ('kiri'/'kanan') memetakan terus kepada satu
   titik-X SASARAN mutlak untuk hujung pucuk/akar (110 = kiri,
   290 = kanan). Ini mengelakkan sebarang kekeliruan tanda
   arah putaran (positif/negatif) — hujung SENTIASA bergerak
   ke sisi yang dipilih, tidak kira sama ada ia berpunca dari
   atas (akar) atau bawah (pucuk).
   ====================================================== */

let cahayaSisi = null;   // null | 'kiri' | 'kanan'
let airSisi = null;

function kemaskiniPucuk(){
  const asalX=200, asalY=118, hujungYAsal=24;
  let hujungX=200, kawalX=200, sudut=0;
  if(cahayaSisi==='kiri'){ hujungX=104; kawalX=150; sudut=-30; }
  else if(cahayaSisi==='kanan'){ hujungX=296; kawalX=250; sudut=30; }
  const kawalY = (asalY+hujungYAsal)/2 - 6;
  document.getElementById('pathPucuk').setAttribute('d', `M${asalX},${asalY} Q${kawalX},${kawalY} ${hujungX},${hujungYAsal}`);
  document.getElementById('hujungPucuk').setAttribute('transform', `translate(${hujungX},${hujungYAsal}) rotate(${sudut})`);
}

function kemaskiniAkar(){
  const asalX=200, asalY=152, hujungYAsal=248;
  let hujungX=200, kawalX=200, sudut=0;
  if(airSisi==='kiri'){ hujungX=104; kawalX=150; sudut=-24; }
  else if(airSisi==='kanan'){ hujungX=296; kawalX=250; sudut=24; }
  const kawalY = (asalY+hujungYAsal)/2 + 8;
  document.getElementById('pathAkar').setAttribute('d', `M${asalX},${asalY} Q${kawalX},${kawalY} ${hujungX},${hujungYAsal}`);
  document.getElementById('hujungAkar').setAttribute('transform', `translate(${hujungX},${hujungYAsal}) rotate(${sudut})`);
}

function setCahaya(sisi){
  cahayaSisi = (cahayaSisi===sisi) ? null : sisi;
  document.querySelector('.matahari-kiri').classList.toggle('aktif', cahayaSisi==='kiri');
  document.querySelector('.matahari-kanan').classList.toggle('aktif', cahayaSisi==='kanan');
  kemaskiniPucuk();
  if(cahayaSisi){
    tunjukToast('☀️ Pucuk membengkok mengejar cahaya! (Fototropisme)');
    tandaLencana('lencana-cahaya');
  } else {
    tunjukToast('🌱 Tiada cahaya dipilih — pucuk kembali tegak.');
  }
}

function setAir(sisi){
  airSisi = (airSisi===sisi) ? null : sisi;
  document.querySelector('.air-kiri').classList.toggle('aktif', airSisi==='kiri');
  document.querySelector('.air-kanan').classList.toggle('aktif', airSisi==='kanan');
  kemaskiniAkar();
  if(airSisi){
    tunjukToast('💧 Akar mencari sumber air! (Hidrotropisme)');
    tandaLencana('lencana-air');
  } else {
    tunjukToast('🌍 Tiada air dipilih — akar kembali lurus ke bawah (graviti).');
  }
}

function resetGerak(){
  cahayaSisi=null; airSisi=null;
  document.querySelectorAll('.matahari-kiri,.matahari-kanan,.air-kiri,.air-kanan').forEach(b=>b.classList.remove('aktif'));
  kemaskiniPucuk();
  kemaskiniAkar();
  tunjukToast('🔄 Tumbuhan direset ke kedudukan asal.');
}

let semaluTimer;
function sentuhSemalu(){
  const kiri = document.querySelectorAll('#daunSemaluKiri .leaflet');
  const kanan = document.querySelectorAll('#daunSemaluKanan .leaflet');
  [...kiri, ...kanan].forEach(el=>el.classList.add('tutup'));
  tunjukToast('🤚 Disentuh! Daun Pokok Semalu menutup untuk lindungi diri. (Sentuhan)');
  tandaLencana('lencana-sentuhan');
  clearTimeout(semaluTimer);
  semaluTimer = setTimeout(()=>{
    [...kiri, ...kanan].forEach(el=>el.classList.remove('tutup'));
  }, 2300);
}

let venusTimer, venusSedangMain = false;
function sentuhVenus(){
  if(venusSedangMain) return;
  venusSedangMain = true;

  const stage = document.getElementById('demoVenus');
  const posisiLalat = document.getElementById('lalatPosisi');
  const lalat = document.getElementById('lalatVenus');

  // Langkah 1: lalat terbang masuk ke dalam perangkap yang masih terbuka.
  tunjukToast('🪰 Lalat hinggap di atas perangkap...');
  posisiLalat.setAttribute('transform', 'translate(-85,44)');

  // Langkah 2: selepas lalat sampai, perangkap menutup pantas.
  clearTimeout(venusTimer);
  venusTimer = setTimeout(()=>{
    stage.classList.add('venus-tutup');
    lalat.classList.add('tertangkap');
    tunjukToast('🪰 Perangkap Lalat Venus menutup pantas untuk menangkap mangsa!');
    tandaLencana('lencana-sentuhan');

    // Langkah 3: selepas beberapa saat, perangkap terbuka semula & lalat baharu muncul.
    venusTimer = setTimeout(()=>{
      stage.classList.remove('venus-tutup');
      lalat.classList.remove('tertangkap');
      posisiLalat.setAttribute('transform', 'translate(0,0)');
      venusSedangMain = false;
    }, 2200);
  }, 600);
}
