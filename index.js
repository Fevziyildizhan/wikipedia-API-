const apiurl = `https://en.wikipedia.org/w/rest.php/v1/search/page?q=` 
const imgurl = '//upload.wikimedia.org/wikipedia/en/thumb/'
//`http://upload.wikimedia.org/wikipedia/en/thumb/`


const search = document.getElementById('search')
const form = document.getElementById('form')
const main = document.getElementById('main')
//getUrl()

async function getUrl(search){
    const resp = await fetch(apiurl + search)
    const respData = await resp.json()

      console.log(respData)
      historyMap(respData)
}

function historyMap(pc){
    main.innerHTML = "";

   pc.pages.forEach(element=> {
    const {excerpt,title,thumbnail} = element

    const wikiel = document.createElement('div')

    wikiel.innerHTML = 
      
    ` 
     <h4>${title}</h4>
     <img src="${thumbnail}"/> 
     <p>${excerpt}</p>
    `  
    main.appendChild(wikiel)
   });
}


form.addEventListener('submit',(e)=>{
    const data = search.value 
    
    if(data){
        getUrl(data)
        search.value = ""
    }
    e.preventDefault()
})