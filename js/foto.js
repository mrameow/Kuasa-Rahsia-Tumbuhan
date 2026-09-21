/* ======================================================
   FOTO.JS — Dapur Magis Fotosintesis (sandbox interaktif)
   ====================================================== */

let siang = true;
let co2Sedia = false;
let airSedia = false;
let glukosaKira = 0, oksigenKira = 0, buahKira = 0;

function togglMalam(){
  siang = !siang;
  const panggung = document.getElementById('stageFoto');
  const matahari = document.getElementById('matahariBesar');
  panggung.classList.toggle('malam', !siang);
  matahari.textContent = siang ? '☀️' : '🌙';
  matahari.classList.toggle('off', !siang);
  document.getElementById('daunBesar').classList.toggle('tidur', !siang);
  if(siang){
    tunjukToast('☀️ Siang hari — cahaya matahari tersedia untuk fotosintesis!');
    tandaLencana('lencana-siang');
  } else {
    tunjukToast('🌙 Waktu malam — tiada cahaya matahari untuk memasak makanan.');
    tandaLencana('lencana-malam');
  }
}

function terbang(emoji, startLeft, startTop, endLeft, endTop, masa, selepas){
  const stage = document.getElementById('stageFoto');
  const z = document.createElement('div');
  z.className = 'zarah';
  z.textContent = emoji;
  z.style.left = startLeft; z.style.top = startTop; z.style.opacity = '1';
  stage.appendChild(z);
  requestAnimationFrame(()=>{
    requestAnimationFrame(()=>{
      z.style.left = endLeft; z.style.top = endTop;
    });
  });
  setTimeout(()=>{
    z.style.opacity='0';
    setTimeout(()=>{ z.remove(); if(selepas) selepas(); }, 400);
  }, masa);
}

function hantarCO2(){
  terbang('💨','2%','40px','44%','120px',950, ()=>{
    co2Sedia = true;
    cekReaksiFoto();
  });
}
function hantarAir(){
  terbang('💧','88%','260px','52%','120px',1000, ()=>{
    airSedia = true;
    cekReaksiFoto();
  });
}

function cekReaksiFoto(){
  if(!(co2Sedia && airSedia)) return;
  co2Sedia = false; airSedia = false;
  const daun = document.getElementById('daunBesar');

  if(!siang){
    tunjukToast('😴 Tiada cahaya matahari — tumbuhan tidak boleh memasak makanan sekarang!');
    return;
  }

  daun.classList.remove('reaksi'); void daun.offsetWidth; daun.classList.add('reaksi');
  tunjukToast('✨ Fotosintesis berjaya! Glukosa & Oksigen dihasilkan!');
  tandaLencana('lencana-glukosa');
  tandaLencana('lencana-oksigen');

  setTimeout(()=>{
    terbang('🫧','50%','120px','50%','-30px',1200, ()=>{
      oksigenKira++;
      document.getElementById('kirOksigen').textContent = oksigenKira;
    });
    terbang('🍬','50%','120px','48%','260px',1000, ()=>{
      glukosaKira++;
      document.getElementById('kirGlukosa').textContent = glukosaKira;
      tumbuhkanBuah();
    });
  },350);
}

function tumbuhkanBuah(){
  const slots = ['buah1','buah2','buah3'];
  for(const id of slots){
    const el = document.getElementById(id);
    if(!el.classList.contains('tumbuh')){
      el.classList.add('tumbuh');
      buahKira++;
      return;
    }
  }
}

function toggleFormula(){
  document.getElementById('kotakFormula').classList.toggle('tunjuk');
}
