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

  const fullname = document.createElement("h2");
  fullname.textContent = form.first_name.value + " " + form.last_name.value;
  contentListItem.appendChild(fullname);

  const gender = document.createElement("p");
  gender.textContent = form.male.value + form.female.value;
  contentListItem.appendChild(gender);

  const category = document.createElement("p");
  category.textContent = form.category.value;
  contentListItem.appendChild(category);

  return contentListItem;
};

const handleDeleteAllClick = function (event) {
  const contentList = document.querySelector("#content");
  contentList.innerHTML = "";
};
