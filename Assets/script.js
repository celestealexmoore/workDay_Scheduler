const currentDay = document.getElementById("currentDay");
const timeblockParent = document.getElementById("timeblockParent");
let blockTime = 4;
const currentTime = moment().format("h");
console.log(currentTime);

currentDay.innerHTML = moment().format("MMMM Do, YYYY, h:mm a");

for (let i = 0; i < 8; i++) {
  const timeblockRow = document.createElement("div");
  const timeblockHr = document.createElement("div");
  const timeblockText = document.createElement("input");
  const saveBtn = document.createElement("i");
  // creates unique identifier for each timeblock
  timeblockRow.setAttribute("id", "hour-" + i);
  timeblockRow.setAttribute("class", "row time-block");
  timeblockHr.setAttribute("class", "col hour");
  timeblockText.setAttribute("class", "col-8 text form-control");
  timeblockText.setAttribute("type", "text");
  saveBtn.setAttribute(
    "class",
    "col saveBtn bi bi-cloud-download-fill fa-2x align-bottom"
  );
  // creates unique identifier for each saveBtn
  saveBtn.setAttribute("id", "save-" + i);

  blockTime += 1;

  timeblockHr.innerText = blockTime + "am";

  if (blockTime == currentTime) {
    timeblockText.setAttribute("class", "present col-8 text");
  } else if (blockTime < currentTime) {
    timeblockText.setAttribute("class", "past col-8 text");
  } else if (blockTime > currentTime) {
    timeblockText.setAttribute("class", "future col-8 text");
  };

  timeblockParent.appendChild(timeblockRow);
  timeblockRow.appendChild(timeblockHr);
  timeblockRow.appendChild(timeblockText);
  timeblockRow.appendChild(saveBtn);

  saveBtn.addEventListener("click", function () {
    localStorage.setItem(timeblockRow.id, timeblockText.value);
  });

  timeblockText.value = localStorage.getItem(
    timeblockRow.id,
    timeblockText.value
  );

  //   if(blockTime > 11) {
  //     let hr12 = document.getElementById('hour-7');
  //     hr12.innerText = blockTime + 'pm';
  // }
}
