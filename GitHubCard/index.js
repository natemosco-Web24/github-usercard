/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
function UserCard(obj) {
  $ = s => document.createElement(s)
  $$ = s => document.querySelector(s)

  const card = $("div")
  card.classList.add("card")

  const img = $("img")
  img.src = obj.avatar_url
  const div = $("div")
  div.classList.add("card-info")

  const h3 = $("h3")
  h3.classList.add("name")
  h3.textContent = obj.name

  const p1 = $("p")
  p1.classList.add("username")
  p1.textContent = obj.login

  const p2 = $("p")
  p2.textContent = `Location: ${obj.location}`

  const p3 = $("p")
  p3.innerHTML = `Profile: <a href="${obj.html_url}">${obj.html_url}</a> `

  const p4 = $("p")
  p4.textContent = `Followers:  ${obj.followers}`

  const p5 = $("p")
  p5.textContent = `Following:  ${obj.following}`

  const p6 = $("p")
  p6.textContent = `Bio:  ${obj.bio}`

  $$(".cards").append(card)
  card.append(img, div)
  div.append(h3, p1, p2, p3, p4, p5, p6)
  return card
}
axios
  .get("https://api.github.com/users/natemosco")
  .then(res => {
    console.log("this is the github response", res)
    UserCard(res.data)
  })
  .catch(err => {
    console.log("Error from github .get request", err)
  })

axios
  .get("https://api.github.com/users/natemosco/followers")
  .then(res => {
    console.log("followersURL response", res)
    let list = res.data
    list.map(follower => UserCard(follower))
  })
  .catch(err => {
    console.log("error from followersURL", err)
  })


/* Step 2: Inspect and study the data coming back, this is YOUR
   github info! You will need to understand the structure of this
   data in order to use it to build your component function

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function,
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either
          follow this link in your browser https://api.github.com/users/<Your github name>/followers
          , manually find some other users' github handles, or use the list found
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.

          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

// const followersArray = [];



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p1 class="username">{users user name}</p>
    <p2>Location: {users location}</p>
    <p3>Profile:
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p4>Followers: {users followers count}</p>
    <p5>Following: {users following count}</p>
    <p6>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
