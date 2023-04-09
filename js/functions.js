
function openPopup() {
    var popup = window.open("", "popup", "width=400,height=300,top=100,left=100");
    popup.document.write("<form onsubmit='return false;'>");
    popup.document.write("<label>Converter metros para outras medidas:</label><br>");
    popup.document.write("<input type='number' id='metros' placeholder='Metros'><br>");
    popup.document.write("<input type='button' value='Converter' onclick='converterMedida()'>");
    popup.document.write("<p id='resultado'></p>");
    popup.document.write("</form>");
  }

  function converterMedida() {
    var medida = parseFloat(document.getElementById("metros").value);
    var centimetros = medida * 100;
    var polegadas = medida * 39.3701;
    var pes = medida * 3.28084;
    var resultado = "A medida de " + medida + " metros equivale a:<br>";
    resultado += centimetros + " centímetros<br>";
    resultado += polegadas + " polegadas<br>";
    resultado += pes + " pés";
    var popup = window.open("", "popup", "width=400,height=300,top=100,left=100");
    popup.document.getElementById("resultado").innerHTML = resultado;
  }
