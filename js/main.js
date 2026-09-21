/* ======================================================
   MAIN.JS — Navigasi skrin, toast, lencana (badge) & init
   ====================================================== */

let toastTimer;
function tunjukToast(teks){
  const t = document.getElementById('toast');
  t.textContent = teks;
  t.classList.add('tunjuk');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove('tunjuk'), 2600);
}

function tandaLencana(id){
  const el = document.getElementById(id);
  if(el && !el.classList.contains('dapat')) el.classList.add('dapat');
}

function tunjukSkrin(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('aktif'));
  document.getElementById(id).classList.add('aktif');
  window.scrollTo({top:0,behavior:'smooth'});
}

function keMenu(){ tunjukSkrin('layar-menu'); }

function bukaScene(nama){
  if(nama==='gerak'){
    tunjukSkrin('layar-gerak');
    setTimeout(()=>{ tunjukToast('🌍 Perhatikan: akar sentiasa menghala ke bawah (Graviti)!'); tandaLencana('lencana-graviti'); },700);
  } else if(nama==='foto'){
    tunjukSkrin('layar-foto');
    tandaLencana('lencana-siang');
    setTimeout(()=> tunjukToast('☀️ Hantar CO₂ & Air semasa SIANG untuk lihat dapur magis beraksi!'), 700);
  } else if(nama==='kuiz'){
    tunjukSkrin('layar-kuiz-pilih');
  } else if(nama==='memori'){
    tunjukSkrin('layar-memori-pilih');
  }
}
