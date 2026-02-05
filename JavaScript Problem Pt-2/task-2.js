// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function getSmallestName(friendsArray) {
  let smallestName = friendsArray[0];

  for (let friend of friendsArray) {
    if (friend.length < friendsArray.length) {
      smallestName = friend;
    }
  }
  return smallestName;
}

const friends = ["rahim", "robin", "rafi", "ron", "rashed"];
let smallestNameFriend = getSmallestName(friends);
console.log(smallestNameFriend);
