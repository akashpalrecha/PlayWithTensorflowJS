// jshint esversion:9

function updateLogStatus(text){
  console.log(text);
  let list = document.getElementById("logs");
  let litem = document.createElement("li");
  let textContent = document.createTextNode(text);
  litem.appendChild(textContent);
  list.appendChild(litem);
}

const x = tf.cast(tf.ones([4,4,3]), 'int32').add(254);
updateLogStatus(x);
updateLogStatus("Mic check. mic check.");
const y = tf.image.resizeBilinear(x, [2,2]);
updateLogStatus(y);
