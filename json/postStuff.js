// for use in client (browser)

async function postStuff(){
    let response = await fetch('https://httpbin.org/post', 
    {
        method: 'post',
        headers: {
         'Accept': 'application/json, text/plain, */*',
         'Content-Type': 'application/json'
        },
        body: JSON.stringify({a: 1, name: 'Billy'})
    })
    let jsonContent = await response.json();
    return jsonContent
};
