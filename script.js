try {
    function clearScreen(){
        document.getElementById('screen').value= "";
    }
    
    function display(value){
        document.getElementById('screen').value += value; 
    }
    
    function calculations(){
       var number = document.getElementById('screen').value;
       var numbers = eval(number);
       document.getElementById('screen').value= numbers;
       
    }
} catch (error) {
    var number = document.getElementById('screen').value;
    var numbers = eval(number);
    document.getElementById('screen').value= numbers +" "+ error;

}