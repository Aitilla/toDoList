
function todoList() {

    let col1 = document.createElement('div')
    col1.classList.add('col1')
    container.appendChild(col1)

    let butCol1 = document.createElement('button')
    butCol1.id = 'button1'
    butCol1.textContent = 'Create todo list'
    col1.appendChild(butCol1)
    butCol1.addEventListener('click', function(){
        console.log('hello world')
        let todoCreation = document.createElement('input')
        todoCreation.setAttribute('type', 'text')
        todoCreation.setAttribute('placeholder', 'Todo')
        col1.appendChild(todoCreation)
        let removeTodo = document.createElement('button')
        col1.appendChild(removeTodo)
        removeTodo.addEventListener('click', function(){
            todoCreation.remove()
            removeTodo.remove()
        })
    })

    let textBox1 = document.createElement('input')
    textBox1.setAttribute('type', 'text')
    textBox1.setAttribute('placeholder', 'Todo')
    col1.appendChild(textBox1)

    let removeText1 = document.createElement('button')
    col1.appendChild(removeText1)
    removeText1.addEventListener('click', function(){
        textBox1.remove()
        removeText1.remove()
    })


    let col2 = document.createElement('div')
    col2.classList.add('col2')
    container.appendChild(col2)

    let butCol2 = document.createElement('button')
    butCol2.id = 'button2'
    butCol2.textContent = 'Create halfway list'
    col2.appendChild(butCol2)
    butCol2.addEventListener('click', function(){
        console.log('hello world')
        let halfwayCreation = document.createElement('input')
        halfwayCreation.setAttribute('type', 'text')
        halfwayCreation.setAttribute('placeholder', 'Halfway')
        col2.appendChild(halfwayCreation)
        let removeHalfway = document.createElement('button')
        col2.appendChild(removeHalfway)
        removeHalfway.addEventListener('click', function(){
            halfwayCreation.remove()
            removeHalfway.remove()
        })
    })

    let textBox2 = document.createElement('input')
    textBox2.setAttribute('type', 'text')
    textBox2.setAttribute('placeholder', 'Halfway')
    col2.appendChild(textBox2)
    
    let removeText2 = document.createElement('button')
    col2.appendChild(removeText2)
    removeText2.addEventListener('click', function(){
        textBox2.remove()
        removeText2.remove()
    })


    let col3 = document.createElement('div')
    col3.classList.add('col3')
    container.appendChild(col3)

    let butCol3 = document.createElement('button')
    butCol3.id = 'button3'
    butCol3.textContent = 'Create finished list'
    col3.appendChild(butCol3)
    butCol3.addEventListener('click', function(){
        console.log('hello world')
        let finishedCreation = document.createElement('input')
        finishedCreation.setAttribute('type', 'text')
        finishedCreation.setAttribute('placeholder', 'Finished')
        col3.appendChild(finishedCreation)
        let removeFinished = document.createElement('button')
        col3.appendChild(removeFinished)
        removeFinished.addEventListener('click', function(){
            finishedCreation.remove()
            removeFinished.remove()
        })
    })

    let textBox3 = document.createElement('input')
    textBox3.setAttribute('type', 'text')
    textBox3.setAttribute('placeholder', 'Finished')
    col3.appendChild(textBox3)
    
    let removeText3 = document.createElement('button')
    col3.appendChild(removeText3)
    removeText3.addEventListener('click', function(){
        textBox3.remove()
        removeText3.remove()
    })

}

document.getElementById('button').addEventListener('click', todoList)


const container = document.getElementById('container')