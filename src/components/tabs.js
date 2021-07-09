import axios from "axios";

  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>

const Tabs = (topics) => {
  const tabs = document.createElement('div') // creating container for tabs
  tabs.classList.add('topics') // adding class to container

  topics.forEach(topic => { // iterate through the array and create a tab for each item
    const tab = document.createElement('div')
    tab.classList.add('tab')
    tab.textContent = topic
    tabs.appendChild(tab) // add each tab to da daddy
  });
  return tabs // we are returning the total block of elements
}

  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.

const tabsAppender = (selector) => {
  const place = document.querySelector(selector) // where we are appending our tabs

  axios.get(`http://localhost:5000/api/topics`)
  .then(response => {
    console.log(response.data)
    place.appendChild(Tabs(response.data.topics)) // topics is a key in the object holding the array
  });
}

export { Tabs, tabsAppender }
