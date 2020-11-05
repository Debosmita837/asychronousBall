class Form {
    constructor(){
        this.input = createInput("name")
        this.button = createButton("play")
        this.greeting = createElement("h2")
    }

    display(){
        
        var title = createElement("h2")
        title.html("Car Racing Game")
        title.position(200, 0)
        this.input.position(230, 160)
        this.button.position(250, 200)
        this.button.mousePressed(function(){
            this.input.hide()
            this.button.hide()
            var name = this.input.value()
            playerCount = playerCount + 1
            player.update(name)
            player.updateCount(playerCount)
            this.greeting.html("Hello " + name)
            this.greeting.position(200, 160)
        })
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
}