class Nombre {

    value_max = 10
    btn = document.querySelector('button')
    robot_value
    text

    constructor () {
        this.robot_value = this.getRandomInt()
        this.btn.addEventListener('click', () => {
            let input = document.querySelector('#inputNb').value
            let li = document.createElement("li")
            if (input < this.robot_value) {
                this.text = document.createTextNode(`Trop petit`)
            } else if (input > this.robot_value) {
                this.text = document.createTextNode(`Trop grand`)
            } else {
                this.text = document.createTextNode(`Vous avez trouvé`)
            }
            li.appendChild(this.text)
            document.querySelector('#liste').appendChild(li)
        })
    }

    getRandomInt () {
        return Math.floor(Math.random() * Math.floor(this.value_max))
    }
}

new Nombre()