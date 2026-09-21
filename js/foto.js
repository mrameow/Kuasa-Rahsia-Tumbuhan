/* ======================================================
   FOTO.JS — Dapur Magis Fotosintesis (simulasi SVG pokok)
   ====================================================== */

let siang = true;
let co2Sedia = false;
let airSedia = false;
let glukosaKira = 0, oksigenKira = 0, buahKira = 0;

function togglMalam(){
  siang = !siang;
  document.getElementById('matahariGroup').classList.toggle('malam', !siang);
  document.getElementById('rectLangitMalam').setAttribute('opacity', siang ? 0 : 1);
  document.getElementById('bintang').setAttribute('opacity', siang ? 0 : 1);
  document.getElementById('kanopiGroup').classList.toggle('malam-daun', !siang);
  if(siang){
    tunjukToast('☀️ Siang hari — cahaya matahari tersedia untuk fotosintesis!');
    tandaLencana('lencana-siang');
  } else {
    tunjukToast('🌙 Waktu malam — tiada cahaya matahari untuk memasak makanan.');
    tandaLencana('lencana-malam');
  }
}

// Zarah (particle) terbang melengkung guna 3 titik (mula -> lengkung -> hujung)
// supaya laluan terasa organik, bukan garis lurus tegang.
function terbangLengkung(emoji, mula, tengah, akhir, masa, selepas){
  const stage = document.querySelector('#layar-foto .panggung-wrap');
  const z = document.createElement('div');
  z.className = 'zarah';
  z.textContent = emoji;
  z.style.left = mula.x; z.style.top = mula.y; z.style.opacity = '1';
  stage.appendChild(z);

  requestAnimationFrame(()=>{
    requestAnimationFrame(()=>{
      z.style.left = tengah.x; z.style.top = tengah.y;
    });
  });
  setTimeout(()=>{
    z.style.left = akhir.x; z.style.top = akhir.y;
  }, masa*0.45);

  setTimeout(()=>{
    z.style.opacity='0';
    setTimeout(()=>{ z.remove(); if(selepas) selepas(); }, 400);
  }, masa);
}

function hantarCO2(){
  terbangLengkung('💨', {x:'2%',y:'40px'}, {x:'26%',y:'10px'}, {x:'46%',y:'90px'}, 1000, ()=>{
    co2Sedia = true;
    cekReaksiFoto();
  });
}
function hantarAir(){
  terbangLengkung('💧', {x:'86%',y:'255px'}, {x:'62%',y:'270px'}, {x:'50%',y:'150px'}, 1050, ()=>{
    airSedia = true;
    cekReaksiFoto();
  });
}

function cekReaksiFoto(){
  if(!(co2Sedia && airSedia)) return;
  co2Sedia = false; airSedia = false;
  const kanopi = document.getElementById('kanopiGroup');

  if(!siang){
    tunjukToast('😴 Tiada cahaya matahari — tumbuhan tidak boleh memasak makanan sekarang!');
    return;
  }

  kanopi.classList.remove('reaksi'); void kanopi.getBBox(); kanopi.classList.add('reaksi');
  tunjukToast('✨ Fotosintesis berjaya! Glukosa & Oksigen dihasilkan!');
  tandaLencana('lencana-glukosa');
  tandaLencana('lencana-oksigen');

  setTimeout(()=>{
    terbangLengkung('🫧', {x:'50%',y:'90px'}, {x:'62%',y:'40px'}, {x:'50%',y:'-30px'}, 1200, ()=>{
      oksigenKira++;
      document.getElementById('kirOksigen').textContent = oksigenKira;
    });
    terbangLengkung('🍬', {x:'50%',y:'90px'}, {x:'40%',y:'160px'}, {x:'46%',y:'250px'}, 1050, ()=>{
      glukosaKira++;
      document.getElementById('kirGlukosa').textContent = glukosaKira;
      tumbuhkanBuah();
    });
  },350);
}

function tumbuhkanBuah(){
  const slots = ['buah1','buah2','buah3','buah4'];
  for(const id of slots){
    const el = document.getElementById(id);
    if(!el.classList.contains('tumbuh')){
      el.classList.add('tumbuh');
      const t = el.getAttribute('transform').replace('scale(0)','scale(1)');
      el.setAttribute('transform', t);
      buahKira++;
      return;
    }
  }
}

function toggleFormula(){
  document.getElementById('kotakFormula').classList.toggle('tunjuk');
}
