class Form2 {

    constructor() {
        this.input = createInput("").attribute("placeholder", "Enter Your Name");
        this.button = createButton('Play');
        
        this.title = createElement('h2');
      
        
      }
      hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
      }i
    
      display(){
        background(introBGImage);
       
        this.title.html("Welcome To My Game !");
        
        
        this.title.position(550, 0);
        
        this.input.position(540,350);
        this.button.position(610,400);
     
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.title.hide();
        
        player2name = this.input.value();
        console.log(player2name);
        gameState=2;
       
      });
  
    
    }
  }
  