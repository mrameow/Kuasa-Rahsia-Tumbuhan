/* ======================================================
   KUIZ.JS — Mod Kuiz Detektif Botani (pilihan topik + skor)
   ====================================================== */

let soalanAktif = [];
let indeksSoalan = 0;
let skorKuiz = 0;
let sudahJawab = false;
let tajukKuizSemasa = '';

function mulakanKuiz(topik){
  if(topik==='gerak'){ soalanAktif = soalanGerakBalas; tajukKuizSemasa = '🧭 Kuiz Gerak Balas'; }
  else if(topik==='foto'){ soalanAktif = soalanFotosintesis; tajukKuizSemasa = '🧪 Kuiz Fotosintesis'; }
  else { soalanAktif = [...soalanGerakBalas, ...soalanFotosintesis].sort(()=>Math.random()-0.5); tajukKuizSemasa = '🏆 Kuiz Campuran — Detektif Botani'; }

  indeksSoalan = 0;
  skorKuiz = 0;
  document.getElementById('tajuk-kuiz-soalan').textContent = tajukKuizSemasa;
  tunjukSkrin('layar-kuiz-soalan');
  bukaSoalanKuiz();
}

function lukisDotsKuiz(){
  const wrap = document.getElementById('dots-kuiz');
  wrap.innerHTML = '';
  soalanAktif.forEach((_,i)=>{
    const d = document.createElement('span');
    if(i<indeksSoalan) d.classList.add('done');
    if(i===indeksSoalan) d.classList.add('now');
    wrap.appendChild(d);
  });
}

function bukaSoalanKuiz(){
  sudahJawab = false;
  const s = soalanAktif[indeksSoalan];
  document.getElementById('kuiz-senario-ikon').textContent = s.ikon;
  document.getElementById('kuiz-senario-teks').textContent = s.teks;
  const grid = document.getElementById('kuiz-pilihan-grid');
  grid.innerHTML = '';
  s.pilihan.forEach((teks,i)=>{
    const btn = document.createElement('div');
    btn.className = 'pilihan';
    btn.textContent = teks;
    btn.onclick = ()=>pilihJawapanKuiz(i,btn);
    grid.appendChild(btn);
  });
  const fb = document.getElementById('kuiz-maklumbalas');
  fb.className=''; fb.style.display='none'; fb.textContent='';
  document.getElementById('btn-kuiz-seterusnya').disabled = true;
  document.getElementById('btn-kuiz-seterusnya').textContent = (indeksSoalan===soalanAktif.length-1) ? "TAMAT KUIZ 🏁" : "SETERUSNYA ▶";
  lukisDotsKuiz();
  document.getElementById('kuiz-skor-hud').textContent = skorKuiz;
}

function pilihJawapanKuiz(i,el){
  if(sudahJawab) return;
  sudahJawab = true;
  const s = soalanAktif[indeksSoalan];
  const semuaPilihan = document.querySelectorAll('#kuiz-pilihan-grid .pilihan');
  semuaPilihan.forEach(p=>p.classList.add('disabled'));
  const fb = document.getElementById('kuiz-maklumbalas');
  if(i===s.jawapan){
    el.classList.add('betul');
    skorKuiz += 10;
    fb.className='betul';
    fb.style.display='block';
    fb.textContent = "✅ Syabas! " + s.penjelasan;
  } else {
    el.classList.add('salah');
    semuaPilihan[s.jawapan].classList.add('betul');
    fb.className='salah';
    fb.style.display='block';
    fb.textContent = "❌ Belum tepat. " + s.penjelasan;
  }
  document.getElementById('kuiz-skor-hud').textContent = skorKuiz;
  document.getElementById('btn-kuiz-seterusnya').disabled = false;
}

function soalanKuizSeterusnya(){
  indeksSoalan++;
  if(indeksSoalan >= soalanAktif.length){
    tamatKuiz();
  } else {
    bukaSoalanKuiz();
  }
}

function tamatKuiz(){
  const skorMaks = soalanAktif.length*10;
  const peratus = Math.round((skorKuiz/skorMaks)*100);
  let gelaran, lencana;
  if(peratus>=80){ gelaran="🌟 Pakar Botani Cemerlang!"; lencana="🏆"; }
  else if(peratus>=50){ gelaran="🌿 Detektif Botani Berjaya!"; lencana="🥈"; }
  else { gelaran="🌱 Detektif Botani Baru — Terus Berlatih!"; lencana="🎖️"; }

  document.getElementById('kuiz-lencana-ikon').textContent = lencana;
  document.getElementById('kuiz-gelaran-tamat').textContent = gelaran;
  document.getElementById('kuiz-skor-akhir').textContent = `Skor Kamu: ${skorKuiz} mata (${peratus}%)`;
  tunjukSkrin('layar-kuiz-tamat');
}
