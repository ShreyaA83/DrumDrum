
document.addEventListener("keydown",function(){
    var m=Math.floor(Math.random()*10);
var m1=Math.floor(Math.random()*10);
var m2=Math.floor(Math.random()*10);
var m3=Math.floor(Math.random()*10);
var m4=Math.floor(Math.random()*10);
var m5=Math.floor(Math.random()*10);
var col=("#"+m+m1+m2+m3+m4+m5);
    document.querySelector(".back").style.backgroundColor=col;
});
for(var i=0;i<=(document.querySelectorAll(".drum").length);i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var b=this.innerHTML;
        makeSound(b);
        ban(b);
    });
    document.addEventListener("keydown",function(event){

        makeSound(event.key);
        ban(event.key)
    });
    
    function makeSound(key){
        switch (key) {
            case 'w':
                var wa=new Audio("./sounds/crash.mp3")
                wa.play();
                break;
                case 'a':
                    var aa=new Audio("./sounds/kick-bass.mp3")
                    aa.play();
                    break;
                    case 's':
                        var sa=new Audio("./sounds/snare.mp3")
                        sa.play();
                        break;
                case 'j':
                var ja=new Audio("./sounds/tom-2.mp3")
                ja.play();
                break;
                case 'k':
                var ka=new Audio("./sounds/tom-3.mp3")
                ka.play();
                break;
                case 'l':
                var la=new Audio("./sounds/tom-4.mp3")
                la.play();
                break;
                case 'd':
                        var da=new Audio("./sounds/tom-1.mp3")
                        da.play();
                        break;
                        

        
            default:
                break;
        }

    }
}
function ban(currentkey){
   var activeb= document.querySelector("."+ currentkey);
   activeb.classList.add("pressed");
   setTimeout(function(){
activeb.classList.remove("pressed")

   },100);
}
