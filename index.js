let hara = document.getElementById("hara");
let kesariya = document.getElementById("kesariya");
let events = document.getElementsByClassName("events");
let flags = document.getElementsByClassName("flags");
flags = Array.from(flags)
flags[0].style.opacity = 1
let bar = document.getElementsByClassName("bar");
bar = Array.from(bar)
bar[0].style.background = "#EC4530";
bar[0].style.borderColor = "transparent"
let eventDesc = document.getElementById("eventDesc");
let chakra = document.getElementById("chakra");
let chakra2 = document.getElementById("chakra2");
let flagIndex = 0;

setInterval(() => {
    flagIndex = (flagIndex+1)%flags.length
    // console.log(flagIndex, flags.length);
    displayFlag(flagIndex)
}, 2000);

let eventsArr = [
  {
    title: "Revolt of 1857",
    description:
      "India's First War of Independence, also known as the Sepoy Mutiny, was the first time Indians united against the British Raj. This rebellion led to the dissolution of the East India Company's rule in India and shifted the powers of the Company to the British Crown, in 1858."
  },
  {
    title: "Establishing the Indian National Congress in 1885",
    description:
      "In 1885, the Indian National Congress was established. It became the leading party alongside the Muslim League and led the nation in the Freedom Struggle"
  },
  {
    title: "1915: Return of Mahatma Gandhi to India",
    description:
      "In 1915, the Father of the Nation Mahatma Gandhi returned to India from South Africa."
  },
  {
    title: "Lucknow Pact of 1916",
    description:
      "The Lucknow pact was an agreement between Congress and the Muslim League. Muhammad Ali Jinnah had a strong role to play. As a member of both, the League and the Congress, he made both the parties agree that they would put more pressure on the British so that they adopt a more liberal approach to letting Indians run their country."
  },
  {
    title: "1917: The Champaran Satyagraha ",
    description:
      "In 1917, Gandhi led an uprising of the farmers of Champaran, who were being forced to grow Indigo and were not even being compensated enough for it."
  },
  {
    title: "Jallianwala Bagh Massacre",
    description:
      "In 1919, Thousands of Indians gathered at the Jallianwala Bagh in Amritsar, on April 13, to celebrate the festival of Baisakhi. Brigadier-General Dyer called in troops and ordered them to open fire for 10 mins at the mass gathering. The troops had also blocked the main entrance so no one could flee. As per the official records of the British, 350 people died in the massacre, but Congress claims the number was as high as 1,000 people."
  },
  {
    title: "Non-Cooperation Movement In 1920",
    description:
      "Mahatma Gandhi took charge of Congress and started the Non-Cooperation Movement. The movement was non-violent and saw people not buying British goods, supporting local artisans and handicrafts, and picketing alcohol shops. He went around the country explain the tenets of the movement to the masses. The movement came to an end in 1922, when a protest at Chauri Chaura police station turned violent."
  },
  {
    title: "Return of Subhash Chandra Bose to India",
    description:
      "In 1921, Subhash Chandra Bose quit his high-paying ICS job in England to join India's struggle for Independence. Shortly after his return, he joined the Congress. He started a newspaper titled 'Swaraj'. He was sent to prison in 1925 and was released in 1927. Upon his release, he was made the President of the All India Youth Congress and the Secretary of the Bengal State Congress. In 1930, he became the Mayor of Calcutta."
  },
  {
    title: "Purna Swaraj on January 26, 1930",
    description:
      "On January 26, 1930, the Indian National Congress declared the independence of India which the British did not recognise."
  },
  {
    title: "The Dandi March of 1930",
    description:
      "In an act of civil disobedience, Gandhiji took a crowd from the Sabarmati Asharam to Dandi beach, in a non-violent manner, to protest against the repressive salt tax imposed by the British government."
  },
  {
    title: "Government of India Act of 1935",
    description:
      "The Government of India Act and the creation of a new constitution laid the foundations for the events that would follow in the next decade and thereafter."
  },
  {
    title: "Creation of the Indian National Army",
    description:
      "An important development in the struggle for freedom during the Second World War was the formation and activities of the Azad Hind Fauj, also known as the Indian National Army, or INA. The Indian National Army was formed from among the Indian prisoners of war with the aim of liberating India from British rule."
  },
  {
    title: "Quit India Movement of 1942",
    description:
      "The All-India Congress Committee started this movement in their Bombay session on August 8, 1942. There was only one mission - to end British Rule in India. In addition, Gandhiji made a call to Do or Die in his Quit India speech that he delivered in Bombay."
  },
  {
    title: "Royal Navy Strike of 1946 ",
    description:
      "On February 18, 1946, 1,100 Indian sailors of the HMIS Talwar, and the Royal Indian Navy (RIN) Signal School in Bombay declared a hunger strike against the conditions of Indians in the Navy. The next day, somewhere between 10,000-20,000 soldiers joined the strike. While the initial demands were for better food and working conditions, the strike soon turned into a wider demand for independence from the British."
  },
  {
    title: "Partition and the Independence of the country in 1947",
    description:
      "The Parliament of the UK passed the Indian Independence Act. As per the Act, British India would be divided into India and Pakistan. The Monarch gave its assent on July 18, 1947, and it came into effect on August 14-15 in Pakistan and India respectively"
  }
];

for (let i = 0; i < eventsArr.length; i++) {
  hara.innerHTML += `
    <div id="${i}" class="events">
        <img class="eventImg" src="./assests/events/event_${i+1}.jpeg" alt="${i+1}">
        <div class="eventInfo">${eventsArr[i]["title"]}</div>
    </div>
    `;
}

Array.from(events).forEach((element) => {
  element.addEventListener("click", () => {
    Array.from(events).forEach((ele) => {
      ele.children[0].classList.remove("opened");
      ele.children[1].classList.remove("openedInfo");
    });
    element.children[0].classList.add("opened");
    element.children[1].classList.add("openedInfo");
    kesariya.innerHTML = `
        <img class="eventImg" src="${element.children[0].src}" alt="Event picture">
    `;
    eventDesc.innerText = eventsArr[element.id].description;
    chakra.style.zIndex = -1;
    // chakra.style.right = 0;
    // chakra.style.transform = "translate(0, -50%) rotate(360deg)"
    // chakra2.style.left = 0;
    // chakra2.style.transform = "translate(0, -50%) rotate(-360deg)"
  });
});

const displayFlag = (i)=>{
    flags.forEach(flag=>{
        flag.style.opacity = 0
    })
    bar.forEach((barCircle) => {
      barCircle.style.borderColor = "#186B3B";
      barCircle.style.background = "transparent";
    });
    flags[i].style.opacity = 1
    bar[i].style.background = "#EC4530";
    bar[i].style.borderColor = "transparent";
}
