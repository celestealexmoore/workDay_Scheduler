const currentDay = document.getElementById("currentDay");
const timeblockParent = document.getElementById("timeblockParent");
let blockTime = 9;

currentDay.innerHTML = moment().format("MMMM Do, YYYY");

for (let i = 0; i < 8; i++) {
  const timeblockRow = document.createElement("div");
  const timeblockHr = document.createElement("div");
  const timeblockText = document.createElement("input");
  const saveBtnParent = document.createElement("i");

  timeblockRow.setAttribute("class", "row time-block");
  timeblockHr.setAttribute("class", "col hour");
  timeblockText.setAttribute("class", "col-8 text form-control");
  timeblockText.setAttribute("type", "text");
  saveBtnParent.setAttribute(
    "class",
    "col saveBtn bi bi-cloud-download-fill fa-2x align-bottom"
  );

  timeblockHr.innerText = blockTime++ + "am";

  if(blockTime > 9) {
      timeblockText.setAttribute('class', 'past col-8 text');
  }

  timeblockParent.appendChild(timeblockRow);
  timeblockRow.appendChild(timeblockHr);
  timeblockRow.appendChild(timeblockText);
  timeblockRow.appendChild(saveBtnParent);
}


// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
