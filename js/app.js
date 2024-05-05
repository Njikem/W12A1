let button = document.getElementById('button');
button.addEventListener('click', buttonClick);

let jokes_container = document.getElementById('jokes_container');

function buttonClick(e){
    console.log(button);
    
    axios.request({
        url: "https://official-joke-api.appspot.com/random_ten",
    }).then(successfunction).catch(failurefunction)
    
}


function successfunction(response){
    if (response.status ===200){
        let jokes = response.data;
        for(let i = 0; i < jokes.length; i++){
            const joke = jokes[0];
            jokes_container.insertAdjacentHTML('beforeend', `
                <div class="joke">
                    <p>${joke.setup}</p>
                    <p>${joke.punchline}</p>
                    <p>${joke.type}</p>
                </div>      
            `);
        }
        document.body.style.backgroundColor = 'red';
    }
}

function failurefunction(error){
    console.log(error);
    document.body.insertAdjacentHTML('beforeend', '<h3 style ="color:red">ERROR HAS OCCURED</h3>')
}


