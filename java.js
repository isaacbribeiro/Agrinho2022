var inputs = document.getElementsByTagName('input')
for(var i = 0; i < inputs.length; i++){
  var input = inputs[i];
  input.addEventListener('focus', function(){
    var place = this.getAttribute('placeholder')
    this.setAttribute('placeholder', '')
    var blur = function(){
      this.setAttribute('placeholder', place)
    }
    this.addEventListener('blur', blur)
  });
}

function mensagem(){
    var texto = document.getElementById("comentario")

    if(comentario.value ==""){
        alert("Preencha todos os formulários")
    }
    else{
        alert("Mensagem enviada")
    }
}
