import { jsPDF } from "jspdf";
function convertHTMLtoPDF() {
  var doc = new jsPDF();
  var elementHTML = document.querySelector(".full-resume").innerHTML();
  var specialElementHandlers = {
    "#elementH": function (element, renderer) {
      return true;
    },
  };
  doc.fromHTML(elementHTML, 15, 15, {
    width: 170,
    elementHandlers: specialElementHandlers,
  });

  // Save the PDF
  doc.save("Patrick_Ceriale_Resume.pdf");
}

export default convertHTMLtoPDF;
