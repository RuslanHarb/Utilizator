// мобильное меню
(function(){
  var b=document.getElementById('burger'), n=document.getElementById('nav');
  if(b&&n){b.addEventListener('click',function(){
    n.classList.toggle('open');
    b.setAttribute('aria-expanded', n.classList.contains('open')?'true':'false');
  });}
})();

// копирование шаблона сообщения
(function(){
  var btn=document.querySelector('[data-copy]');
  if(!btn) return;
  btn.addEventListener('click',function(){
    var el=document.getElementById(btn.getAttribute('data-copy'));
    if(!el) return;
    var txt=el.innerText.replace(/\u00a0/g,' ');
    var done=function(){
      var old=btn.textContent;
      btn.textContent='✓ Скопировано';
      setTimeout(function(){btn.textContent=old;},1800);
    };
    if(navigator.clipboard&&navigator.clipboard.writeText){
      navigator.clipboard.writeText(txt).then(done).catch(function(){fallback(txt,done);});
    }else{fallback(txt,done);}
  });
  function fallback(txt,cb){
    var ta=document.createElement('textarea');
    ta.value=txt; ta.style.position='fixed'; ta.style.opacity='0';
    document.body.appendChild(ta); ta.select();
    try{document.execCommand('copy');cb();}catch(e){}
    document.body.removeChild(ta);
  }
})();
