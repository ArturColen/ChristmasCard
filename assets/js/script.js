setInterval(snowFlake, 50)

// Function responsible for making the snowflakes dynamic
function snowFlake(){
    const snowFlake = document.createElement('i')

    snowFlake.classList.add('fas')
    snowFlake.classList.add('fa-snowflake')
    snowFlake.style.left = Math.random()*(window.innerWidth-25) + 'px';
    snowFlake.style.animationDuration = Math.random()*3+2+'s';
    snowFlake.style.opacity = Math.random();
    snowFlake.style.fontSize = Math.random()*15+12+'px';

    document.body.appendChild(snowFlake);

    setTimeout(()=>{
        snowFlake.remove()
    }, 2000)
}

var counter = 1;

// Function for switching slides
setInterval(function() {
    document.querySelector('#radio'+counter).checked = true;
    counter++;
    if(counter > 2){
        counter = 1;
    }
}, 10000)