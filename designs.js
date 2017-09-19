
// Selectors for submit box, grid table, grid dimensions, color picker
const submit = $('input[type=submit]');
const gridTable = $('#pixel_canvas');
const gHeight = $('#input_height');
const gWidth = $('#input_width')
const colorPicker = $('#colorPicker');

// Fn: After uses clicks submit, creates grid of height and width
function makeGrid() {
  // Clears grid
  gridTable.html('');

  // Sets height and width from input boxes
  let currentHeight = gHeight.val();
  let currentWidth = gWidth.val();

  // Row and Col iterators
  let h = 1,
      w = 1;

  // Used to store the row number and fetch current row
  let rowID, currentRow;

  // for h in currentHeight, appends row
  while (h <= currentHeight) {
    rowID = 'row' + h;
    // appends row with id = row[num]
    gridTable.append(`<tr id="${rowID}"></tr>`);

    // Gets current Row by ID to add cols
    currentRow = $(`#${rowID}`);

    while (w <= currentWidth) {
      currentRow.append(`<td></td>`);
      w++;
    }

    // Resets col to 1, goes to next Row
    w = 1;
    h++;
  }
}

// After clicking submit, prevents refresh and runs grid
submit.click(function(e) {
  e.preventDefault();
  makeGrid();
});

// If TD in table clicked, changes color to colorPicker value
gridTable.on('click','td', function() {
  currentColor = colorPicker.val();
  $(this).css('background-color', currentColor);
})
