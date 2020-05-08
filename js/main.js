document.addEventListener("DOMContentLoaded", () => {
  const newItemform = document.querySelector("#new-item-form");
  newItemform.addEventListener("submit", handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector("#delete-all");
  deleteAllButton.addEventListener("click", handleDeleteAllClick);
});

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const contentListItem = createReadingListItem(event.target);
  const contentList = document.querySelector("#content");
  contentList.appendChild(contentListItem);

  event.target.reset();
};

// Submit data
const createReadingListItem = function (form) {
  // Content list items
  const contentListItem = document.createElement("li");
  const fullname = document.createElement("h3");
  const email = document.createElement("p");
  const gender = document.createElement("p");
  const checkbox_lover = document.createElement("p");
  const category = document.createElement("p");
  const silly_date = document.createElement("p");

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
  category.textContent = form.meaningless_date.value;

  contentListItem.classList.add("content-item");

  // Append Children
  contentListItem.appendChild(fullname);
  contentListItem.appendChild(email);
  contentListItem.appendChild(gender);
  contentListItem.appendChild(checkbox_lover);
  contentListItem.appendChild(category);
  contentListItem.appendChild(silly_date);

  return contentListItem;
};

// Delete data
const handleDeleteAllClick = function (event) {
  const contentList = document.querySelector("#content");
  contentList.innerHTML = "";
};
