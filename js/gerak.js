/* ======================================================
   GERAK.JS — Jelajah Gerak Balas (sandbox interaktif)
   ====================================================== */

let cahayaSisi = null;   // null | 'kiri' | 'kanan'
let airSisi = null;

function setCahaya(sisi){
  cahayaSisi = (cahayaSisi===sisi) ? null : sisi;
  document.querySelector('.matahari-kiri').classList.toggle('aktif', cahayaSisi==='kiri');
  document.querySelector('.matahari-kanan').classList.toggle('aktif', cahayaSisi==='kanan');
  // Pucuk berpunca (transform-origin) di BAWAH & menghala ke ATAS:
  // putaran POSITIF (ikut jam) menggerakkan hujung atas ke KANAN.
  const sudut = cahayaSisi==='kiri' ? -32 : cahayaSisi==='kanan' ? 32 : 0;
  document.getElementById('pucukBatang').style.transform = `rotate(${sudut}deg)`;
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
  // Akar berpunca (transform-origin) di ATAS & menghala ke BAWAH:
  // arah putaran BERLAWANAN dengan pucuk supaya hujung bawah bergerak
  // ke arah yang BETUL (kiri = sudut positif, kanan = sudut negatif).
  const sudut = airSisi==='kiri' ? 30 : airSisi==='kanan' ? -30 : 0;
  document.getElementById('akarBatang').style.transform = `rotate(${sudut}deg)`;
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
  document.getElementById('pucukBatang').style.transform='rotate(0deg)';
  document.getElementById('akarBatang').style.transform='rotate(0deg)';
  tunjukToast('🔄 Tumbuhan direset ke kedudukan asal.');
}

let semaluTimer;
function sentuhSemalu(){
  const el = document.getElementById('demoSemalu');
  el.classList.add('semalu-tutup');
  tunjukToast('🤚 Disentuh! Daun Pokok Semalu menutup untuk lindungi diri. (Sentuhan)');
  tandaLencana('lencana-sentuhan');
  clearTimeout(semaluTimer);
  semaluTimer = setTimeout(()=> el.classList.remove('semalu-tutup'), 2200);
}

let venusTimer;
function sentuhVenus(){
  const el = document.getElementById('demoVenus');
  if(el.classList.contains('venus-tutup')) return;
  el.classList.add('venus-tutup');
  tunjukToast('🪰 Perangkap Lalat Venus menutup pantas untuk menangkap mangsa!');
  tandaLencana('lencana-sentuhan');
  clearTimeout(venusTimer);
  venusTimer = setTimeout(()=>{
    el.classList.remove('venus-tutup');
  }, 2400);
}
