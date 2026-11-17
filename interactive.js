
document.querySelectorAll('.dam-section').forEach(section=>{
  section.hidden=true;
  const back=document.createElement('a');
  back.href='#explorar'; back.className='back-to-map';back.textContent='← Volver a los apartados';
  section.insertBefore(back,section.firstChild);
  section.querySelectorAll('.work-card').forEach((card,index)=>{
    const heading=card.querySelector('h3');
    const content=card.querySelector('.editable-content');
    if(!heading||!content)return;
    const details=document.createElement('details');
    details.className='content-panel';
    if(index===0)details.open=true;
    const summary=document.createElement('summary');
    summary.textContent=heading.textContent;
    heading.remove();
    content.remove();
    details.append(summary,content);
    card.append(details);
  });
});
function showChapter(){
  const id=decodeURIComponent(location.hash.slice(1));
  document.querySelectorAll('.dam-section').forEach(s=>s.hidden=s.id!==id);
  document.body.classList.toggle('chapter-open',!!document.getElementById(id)?.classList.contains('dam-section'));
}
window.addEventListener('hashchange',showChapter);
showChapter();
