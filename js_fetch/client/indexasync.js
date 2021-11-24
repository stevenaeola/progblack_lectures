window.addEventListener('click', async function(event){
  try{
    let response = await fetch('http://127.0.0.1:809/list');
    let body = await response.text();
    document.getElementById('content').innerHTML=body;
  } catch(e) {
    alert(e);
  }
});
