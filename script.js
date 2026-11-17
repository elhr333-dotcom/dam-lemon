const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
$('#teamGrid').innerHTML = CONTENT.membres.map((m,i)=>`<article class="member"><div class="avatar">${esc(m.inicials)}</div><span>INTEGRANTE ${String(i+1).padStart(2,'0')}</span><h3>${esc(m.nom)}</h3><p>${esc(m.rol)}</p></article>`).join('');
$('#journeyGrid').innerHTML = CONTENT.itinerari.map((m)=>`<a class="journey-card" href="${esc(m.link)}"><div class="journey-head"><span>${esc(m.num)}</span><span>↗</span></div><h3>${esc(m.titol)}</h3><p>${esc(m.descripcio)}</p><span class="chip">${esc(m.estat)}</span></a>`).join('');
$('#balanceTheory').textContent=CONTENT.equilibri.teoria;
$('#balanceActivity').textContent=CONTENT.equilibri.activitat;
$('#balanceEvidence').textContent=CONTENT.equilibri.evidencies;
$('#balanceReflection').textContent=CONTENT.equilibri.reflexio;
const menu=$('.menu'),nav=$('#navlinks');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'✕':'☰';});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰';}));
if('IntersectionObserver' in window){const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}}),{threshold:.08});document.querySelectorAll('.section,.journey-card,.member,.work-card').forEach(el=>{el.classList.add('reveal');obs.observe(el);});}
