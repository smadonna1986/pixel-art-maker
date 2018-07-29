let table = $("#pixelCanvas");
function makeGrid(event) {
  let height = $("#inputHeight").val();
  let width = $("#inputWidth").val();
  event.preventDefault();
  table.children().remove();
  for (var y = 1; y <= height; y++) {
    table.append("<tr id='row" + y + "'></tr>");
    for (var x = 1; x <= width; x++) {
      $("#row" + y).append("<td id='td-" + y + "-" + x + "'></td>");
    }
  }
  $("td").on("click", addColor);
}
//Add color with stitch type
function addColor() {
  console.info($(this).attr("id"));
  let color = $("#colorPicker").val();
  let stitchtype = $("#stitch-type").val();
  console.info($(this).css("background-color"));
  if ($(this).css("background-color") !== "rgba(0, 0, 0, 0)") {
    $(this).css("background-color", "");
    $(this).removeClass();
  } else {
    $(this).css("background-color", color);
    $(this).addClass(stitchtype);
  }
}

$("#submit-button").on("click", makeGrid);
