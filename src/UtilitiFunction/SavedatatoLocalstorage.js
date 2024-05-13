import { toast } from "react-toastify";

// Function to handle click event and save text to array
function saveToArray(text, name) {
  // Get the existing array from local storage, or create a new one if it doesn't exist
  let savedArray = JSON.parse(localStorage.getItem(name)) || [];

  // Check if the text is already in the array
  if (!savedArray.includes(text)) {
    // If not, add the text to the array
    savedArray.push(text);

    localStorage.setItem(name, JSON.stringify(savedArray));
  }
}
export default saveToArray;
