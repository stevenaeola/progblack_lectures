const form = document.getElementById('my_form');
form.addEventListener('submit', async function(event){
    event.preventDefault();
    const formData = new FormData(form);
    const formJSON = JSON.stringify(Object.fromEntries(formData.entries()));
    console.log("Form data", formData);
    const response = await fetch('/name',
    {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
          },
        body: formJSON
    });
    if(response.ok){
        const responseBody = await response.text();
        console.log("response from POST: ", responseBody)
    }
    else{
        alert('Problem with POST request ' + response.statusText);
    }
    // do nothing with the response
})
