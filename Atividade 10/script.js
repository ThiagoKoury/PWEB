function validar() {
  var flag = 0;

  if (document.getElementById("nome").value.length < 10) {
    alert("Nome deve ter ao menos 10 caracteres");
    flag = 1;
  }

  if (
    document.getElementById("email").value.indexOf("@") < 0 ||
    document.getElementById("email").value.indexOf(".") < 0
  ) {
    alert("E-mail deve conter '@' e '.'");
    flag = 1;
  }

  if (document.getElementById("coment").value.length < 20) {
    alert("Comentário deve ter ao menos 20 caracteres");
    flag = 1;
  }

  if (
    document.formulario.elements[3].checked == false &&
    document.formulario.elements[4].checked == false
  ) {
    alert("Campo pesquisa obrigatório");
    flag = 1;
  }

  if (flag == 1) return false;

  if (document.formulario.elements[3].checked == true) {
    alert("Que bom que você voltou a visitar esta página");
  }

  if (document.formulario.elements[4].checked == true) {
    alert("Volte sempre à esta página!!");
  }
}

