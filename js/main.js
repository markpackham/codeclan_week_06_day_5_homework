// Event listener
document.addEventListener("DOMContentLoaded", () => {
  const newItemform = document.querySelector("#new-item-form");
  newItemform.addEventListener("submit", handleNewItemFormSubmit);

  const purpleAllButton = document.querySelector("#turn-purple");
  purpleAllButton.addEventListener("click", handlePurplePara);

  const removePurpleAllButton = document.querySelector("#remove-purple");
  removePurpleAllButton.addEventListener("click", handleRemovePurplePara);

  const deleteAllButton = document.querySelector("#delete-all");
  deleteAllButton.addEventListener("click", handleDeleteAllClick);

  // h1 Hover over effect
  const h1Shift = document.querySelector("h1");
  h1Shift.onmouseover = logMouseOver;
  h1Shift.onmouseout = logMouseOut;
  function logMouseOver() {
    h1Shift.innerHTML = "Please do not hover over me.";
  }
  function logMouseOut() {
    h1Shift.innerHTML = "Random timesink generic form";
  }
});

// Submit data
const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const contentListItem = createReadingListItem(event.target);
  const contentList = document.querySelector("#content");
  contentList.appendChild(contentListItem);

  event.target.reset();
};

// Populate page
const createReadingListItem = (form) => {
  // Content list items
  const contentListItem = document.createElement("li");
  const fullname = document.createElement("h3");
  const email = document.createElement("p");
  const gender = document.createElement("p");
  const checkbox_lover = document.createElement("p");
  const category = document.createElement("p");
  const silly_date = document.createElement("p");
  const listItems = [
    fullname,
    email,
    gender,
    checkbox_lover,
    category,
    silly_date,
  ];

  // Write Text
  fullname.textContent = form.first_name.value + " " + form.last_name.value;
  email.textContent = form.fake_email.value;

  if (form.male.checked) {
    gender.textContent = form.male.value;
  } else {
    gender.textContent = form.female.value;
  }

  if (checkbox_love.checked) {
    checkbox_lover.textContent = "I am the World's biggest fan of checkboxes";
  }

  category.textContent = form.category.value;
  silly_date.textContent = form.meaningless_date.value;

  // Add children
  contentListItem.classList.add("content-item");
  for (let item of listItems) {
    console.log(item);
    contentListItem.appendChild(item);
  }

  return contentListItem;
};

// Turn all paragraph tags purple (and have an excuse to use querySelectorAll)
const handlePurplePara = (event) => {
  const paragraphList = document.querySelectorAll("p");
  for (let i = 0; i < paragraphList.length; ++i) {
    paragraphList[i].classList.add("turnPurple");
  }
};

// Remove Purple Effect
const handleRemovePurplePara = (event) => {
  const paragraphList = document.querySelectorAll("p");
  for (let i = 0; i < paragraphList.length; ++i) {
    paragraphList[i].classList.remove("turnPurple");
  }
};

// Delete data
const handleDeleteAllClick = (event) => {
  const contentList = document.querySelector("#content");
  contentList.innerHTML = "";
};
