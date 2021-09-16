// create Element

const eight = document.createElement('h1')
const input = document.createElement('textarea')
const button = document.createElement('button');
const div = document.createElement('div')
const div3 = document.createElement('div')
const div4 = document.createElement('div')
const divs = document.createElement('div')
const p = document.createElement('p')
const h4 = document.createElement('h4')
const br = document.createElement('br')

// add class 

 h4.classList.add('H')

// append elements

divs.append(div4)
divs.append(div3)
div.append(eight)
div.append(input);
div.append(p)
div.append(br)
div.append(br)
div.append(button);
div.append(divs)
div4.append(h4)
document.body.append(div);



// update inner HTML
eight.innerHTML = "Magic Eight "
button.innerHTML = "Shake"
h4.innerHTML='8'

//animation


document.querySelector('h4').style.animation="spin2 4s linear infinite"


// CSS for first div
document.body.style.backgroundColor = "black"
button.style.backgroundColor = "pink"
button.style.fontSize = '22px'
button.style.fontFamily="UnifrakturMaguntia', cursive"
button.style.marginTop = '15px'
div.style.height = '720px'
div.style.width = '500px'
div.style.margin = 'auto'
div.style.marginTop = '10px'
div.style.paddingTop= '10px'
div.style.backgroundColor = 'aqua'
div.style.textAlign = 'center'
divs.style.height = '400px'
divs.style.width = '400px'
divs.style.borderRadius = '100%'
divs.style.backgroundColor = 'black'
divs.style.margin = 'auto'
divs.style.marginTop = '50px'
div3.style.color = 'white'
divs.style.display = 'grid'
divs.style.alignItems = 'center'
divs.style.justifyContent = 'center'
divs.style.fontSize='20px'
div3.style.fontSize = '40px'
div3.style.marginBottom='300px'
div4.style.backgroundColor = 'white'
div4.style.height = '250px'
div4.style.width = '250px'
div4.style.borderRadius = '100%'
div4.style.marginTop = '70px'
h4.style.marginTop = '100px'
h4.style.fontSize = '40px'





button.addEventListener('click', function () {
    

    // let basePath = "../images";

    var images = [],
        index = 0;
    images[0] = "<img src=https://i.ibb.co/JsxD1Z9/magic8ball-2.png width='470px' height='470px'>" 
    images[1] = "<img src=https://i.ibb.co/zJkCQt6/magic8ball-1.png width='470px' height='470px'>"
    images[2] = "<img src=https://i.ibb.co/686M0TS/magic8ball-11.png width='470px' height='470px'>"
    images[3] = "<img src=https://i.ibb.co/5T0Jyt7/magic8ball-13.png width='470px' height='470px'>"
    images[4] = "<img src=https://i.ibb.co/Bq3nSwN/magic8ball-14.png width='470px' height='470px'>"
    images[5] = "<img src=https://i.ibb.co/SmSN34c/magic8ball-6.png width=470px' height='470px'>"
    images[6] = "<img src=https://i.ibb.co/Ms7C8p9/magic8ball-16.png width='470px' height='470px'>"
    images[7] = "<img src=https://i.ibb.co/5KymCt3/magic8ball-17.png width='470px' height='470px'>"
    images[8] = "<img src=https://i.ibb.co/FsBm9C9/magic8ball-19.png width='470px' height='470px'>"
    images[9] = "<img src=https://i.ibb.co/pxrxrJc/magic8ball-20.pngwidth='470px' height='470px'>"



    p.innerHTML = input.value
    
    p.style.fontSize = '20px'
    p.style.color = 'black'
    
    // divs.style.backgroundColor = 'pink'

    index = Math.floor(Math.random() * images.length);
    div3.innerHTML = (images[index]);
    

    input.remove()
    divs.style.display='hidden'
    div4.style.display= 'none'
//  document.getElementsByTagName('h4').style.animation="spin2 4s linear infinite"

    setTimeout(() => {
    location.reload()
    
}, 3000);


});


