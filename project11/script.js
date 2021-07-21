const form = document.getElementById('form')
const posts = document.getElementById('posts')
const bouncers  = document.getElementById('bouncers')


let limit = 5;
let page = 1;

async function getDataFromApi(){
    let resp = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
    let data = await resp.json()

    return data;
}



async function showingInDOM(){
    let data = await getDataFromApi();
    
    data.forEach(post => {
        let child = document.createElement('div');
        child.classList.add('post')
        child.innerHTML = `
                <span class="userId" >${post.id}</span>
                <h3 id="title">${post.title}</h3>
                <p id="body">${post.body}</p>
        `;
        posts.appendChild(child)
    });
}

function loaderShow(){
    
    bouncers.classList.add('play')

    page++;
    showingInDOM()
    bouncers.classList.remove('play')
}

function filterWord(e){
    let filterKey = e.target.value.toLowerCase();
    
    let posts = document.querySelectorAll('.post');
    posts.forEach(post =>{
        let title = post.querySelector('#title').innerText;
        let body = post.querySelector('#body').innerText;

        if(title.indexOf(filterKey) >=0 || body.indexOf(filterKey) >= 0){
            post.style.display = 'flex';
        }else{
            post.style.display = 'none';
        }
    })

}




window.addEventListener('scroll', ()=>{
    let {scrollTop , scrollHeight , clientHeight} = document.documentElement;

    if(scrollTop + clientHeight >= scrollHeight-50 ){
        loaderShow()
    }
})


showingInDOM()

form.addEventListener('input', filterWord)

