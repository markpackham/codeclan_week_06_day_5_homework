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

const createReadingListItem = function (form) {
  const contentListItem = document.createElement("li");
  contentListItem.classList.add("content-item");

  const fullname = document.createElement("h3");
  fullname.textContent = form.first_name.value + " " + form.last_name.value;
  contentListItem.appendChild(fullname);

  const email = document.createElement("p");
  email.textContent = form.fake_email.value;
  contentListItem.appendChild(email);

  const gender = document.createElement("p");
  if (form.male.checked) {
    gender.textContent = form.male.value;
  } else {
    gender.textContent = form.female.value;
  }
  contentListItem.appendChild(gender);

  const checkbox_lover = document.createElement("p");
  if (checkbox_love.checked) {
    checkbox_lover.textContent = "I am the world's biggest fan of checkboxes";
    contentListItem.appendChild(checkbox_lover);
  }

  const category = document.createElement("p");
  category.textContent = form.category.value;
  contentListItem.appendChild(category);

  const silly_date = document.createElement("p");
  category.textContent = form.meaningless_date.value;
  contentListItem.appendChild(silly_date);

  return contentListItem;
};

const handleDeleteAllClick = function (event) {
  const contentList = document.querySelector("#content");
  contentList.innerHTML = "";
};
