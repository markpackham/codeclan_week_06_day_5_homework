// Event listener
document.addEventListener("DOMContentLoaded", () => {
  const newItemform = document.querySelector("#new-item-form");
  newItemform.addEventListener("submit", handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector("#delete-all");
  deleteAllButton.addEventListener("click", handleDeleteAllClick);

  const purpleAllButton = document.querySelector("#turn-purple");
  purpleAllButton.addEventListener("click", handlePurplePara);
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
const createReadingListItem = function (form) {
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

// Delete data
const handleDeleteAllClick = function (event) {
  const contentList = document.querySelector("#content");
  contentList.innerHTML = "";
};

const handlePurplePara = function (event) {
  const paragraphList = document.querySelectorAll("p");
  for (let i = 0; i < paragraphList.length; ++i) {
    paragraphList[i].classList.add("turnPurple");
  }
  // paragraphList.setAttribute("class", "turnPurple");
};
