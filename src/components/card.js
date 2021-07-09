import axios from "axios";

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>

const Card = (article) => {
  // creating our selectors
  const card = document.createElement('div')
  const headline = document.createElement('div')
  const author = document.createElement('div')
  const imgContainer = document.createElement('div')
  const img = document.createElement('img')
  const authorName = document.createElement('span')

  // adding classes to our new elements
  card.classList.add('card')
  headline.classList.add('headline')
  author.classList.add('author')
  imgContainer.classList.add('img-container')

  // HTML hierarchy
  card.appendChild(headline)
  card.appendChild(author)
  author.appendChild(imgContainer)
  author.appendChild(authorName)
  imgContainer.appendChild(img)

  // adding content to elements
  headline.textContent = article.headline;
  authorName.textContent = `By ${article.authorName}`;
  img.setAttribute('src', `${article.authorPhoto}`);

  // adding a lister for clicks
  card.addEventListener('click', () => console.log(headline))
  return card;
}

 // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const cardAppender = (selector) => {
    const place = document.querySelector(selector);
    axios.get("http://localhost:5000/api/articles")
      .then(response => {
        const articles = response.data.articles;
        for(const group in articles){            // for in loop
          articles[group].forEach(entry => place.appendChild(Card(entry)))
        }
          })
      .catch(error => console.log(error))
  }

export { Card, cardAppender }
