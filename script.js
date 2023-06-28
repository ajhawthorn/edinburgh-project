document.addEventListener("DOMContentLoaded", function () {
  // add click event listener
  document.addEventListener("click", saveForLater);

  // function for save event
  function saveForLater(event) {
    if (event.target.matches(".save-icon")) {
      let icon = event.target;
      let content = icon.getAttribute("data-content");
      let description = icon.getAttribute("data-description");

      // Retrieve saved items from sessionStorage
      let savedItems = sessionStorage.getItem("savedItems");
      if (savedItems) {
        savedItems = JSON.parse(savedItems);
      } else {
        savedItems = [];
      }

      // Add the content and description as an object to the saved items array
      savedItems.push({ content, description });

      sessionStorage.setItem("savedItems", JSON.stringify(savedItems));

      let savedItemCount = savedItems.length;
      alert("You have saved " + savedItemCount + " item(s) for later.");
    }
  }

  // Retrieve saved items from sessionStorage
  let savedItems = sessionStorage.getItem("savedItems");
  if (savedItems) {
    savedItems = JSON.parse(savedItems);

    // Get the <ul> element to append the saved items
    const savedItemsList = document.getElementById("saved-items");

    // Generate the saved items
    savedItems.forEach(function (item) {
      const li = document.createElement("li");
      const content = document.createElement("div");
      const description = document.createElement("div");

      content.textContent = item.content;
      description.innerHTML = item.description;

      li.appendChild(content);
      li.appendChild(description);
      savedItemsList.appendChild(li);
    });
  }
});

//Comment form section
// Get the comment form and comment list elements
const commentForm = document.getElementById("comment-form");
const commentList = document.getElementById("comment-list");

// Add submit event listener to the comment form
commentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the values from the form fields
  const name = document.getElementById("name").value;
  const comment = document.getElementById("comment").value;

  // Create a new comment item
  const li = document.createElement("li");
  const nameElement = document.createElement("p");
  const commentElement = document.createElement("p");

  nameElement.textContent = "Name: " + name;
  commentElement.textContent = "Comment: " + comment;

  li.appendChild(nameElement);
  li.appendChild(commentElement);

  // Append the new comment item to the comment list
  commentList.appendChild(li);

  // Reset the form fields
  commentForm.reset();
});

// like button section
// Get all the like buttons and like count elements
const likeButtons = document.querySelectorAll(".like-button");
const likeCounts = document.querySelectorAll(".like-count");

// Initialize an array to store the like counts for each button
let counts = Array.from(likeCounts).map(() => 0);

// Event listener for each like button
likeButtons.forEach((button, index) => {
  button.addEventListener("click", function () {
    // Increment the like count for the corresponding button
    counts[index]++;

    // Update the like count text for the corresponding button
    likeCounts[index].textContent = counts[index];
  });
});
