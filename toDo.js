











function template() {

    let col1 = document.createElement('div')
    col1.classList.add('col1')
    container.appendChild(col1)

    let butCol1 = document.createElement('button')
    butCol1.id = 'button3'
    butCol1.textContent = 'Create list'
    col1.appendChild(butCol1)
    butCol1.addEventListener('click', function(){
        console.log('hello world')
    })

    let textBox1 = document.createElement('input')
    textBox1.setAttribute('type', 'text')
    textBox1.setAttribute('placeholder', 'Todo')
    col1.appendChild(textBox1)


    let col2 = document.createElement('div')
    col2.classList.add('col2')
    container.appendChild(col2)

    let butCol2 = document.createElement('button')
    butCol2.id = 'button3'
    butCol2.textContent = 'Create list'
    col2.appendChild(butCol2)
    col2.addEventListener('click', function(){
        console.log('hello world')
    })

    let textBox2 = document.createElement('input')
    textBox2.setAttribute('type', 'text')
    textBox2.setAttribute('placeholder', 'Half way')
    col2.appendChild(textBox2)


    let col3 = document.createElement('div')
    col3.classList.add('col3')
    container.appendChild(col3)

    let butCol3 = document.createElement('button')
    butCol3.id = 'button3'
    butCol3.textContent = 'Create list'
    col3.appendChild(butCol3)
    butCol3.addEventListener('click', function(){
        console.log('hello world')
    })

    let textBox3 = document.createElement('input')
    textBox3.setAttribute('type', 'text')
    textBox3.setAttribute('placeholder', 'Finished')
    col3.appendChild(textBox3)

}

const templateButton = document.getElementById('button').addEventListener('click', template)


const container = document.getElementById('container')