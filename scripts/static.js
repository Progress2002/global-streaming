//  Array of data for the upcoming event section ----------
const array = [
  {
    category: `news`,
    title: `Trending News`,
    categoryEvents: [
      {
        imageSrc: `./images/news/Ukraine.jpg`,
        date: `October 19, 2022 - 12:44AM`,
        headline: `Ukraine’s power stations ‘destroyed’ in brutal`,
        text: `Ukraine’s Volodymyr Zelensky has said that almost a third of all the country’s power stations have been “destroyed” in a brutal new Russian move.`,
        views: `2K views`,
      },
      {
        imageSrc: `./images/news/covid.jpg`,
        date: `October 10, 2022 - 10:53AM`,
        headline: `The Moderna bivalent Covid vaccine introduced in Australia`,
        text: `A new Covid booster has started being rolled out in Australia which is anticipated to give recipients broader immunity to the deadly virus.`,
        views: `10K views`,
      },
      {
        imageSrc: `./images/news/China.webp`,
        date: `October 18, 2022 - 3:53PM`,
        headline: `China sees ‘much faster timeline’ on taking Taiwan,`,
        text: `A White House official has warned the world has seen “a very different China emerge” in recent years, predicting a “much faster timeline” for conflict over Taiwan.`,
        views: `20K views`,
      },
      {
        imageSrc: `./images/news/china-police.jpg`,
        date: `October 13, 2022 - 4:54PM`,
        headline: `China’s mysterious police presence in Sydney`,
        text: `Mystery surrounds China’s police presence in Australia after a report claimed overseas stations were being used for “sinister” purposes.`,
        views: `1.5K views`,
      },
    ],
  },
  {
    category: "entertainment",
    title: "Trending Entertainment Events",
    categoryEvents: [
      {
        imageSrc: "./images/entertainment/Carrie Bickmore.webp",
        date: "October 18, 2022 - 11:34AM",
        headline: "Carrie Bickmore is leaving Channel 10 completely",
        text: "Bickmore will be leaving Channel 10 altogether after 17 years with the network. A spokesperson told TV Tonight: “Yes, Carrie is leaving 10, but we hope to work with her again.”",
        views: "7K views",
      },
      {
        imageSrc: "./images/entertainment/Tracy Grimshaw.webp",
        date: "October 13, 2022 - 10:20AM",
        headline: `Tracy Grimshaw reveals ‘brutal’ advice given to her as a young reporter`,
        text: `In an interview with Sydney talkback radio host Ray Hadley on Wednesday, the A Current Affair anchor revealed that she was told at the age of 21 that her career would be over within 20 years.`,
        views: `2K views`,
      },
      {
        imageSrc: `./images/entertainment/Block teams.webp" alt="image`,
        date: `October 18, 2022 - 8:31AM`,
        headline: `Block teams battle over budget woes with two weeks to go`,
        text: `Tensions have boiled over on The Block over Sharon and Ankur’s supposed “budget cut” as the teams grapple with dwindling funds two weeks towards the end.`,
        views: `20K views`,
      },
      {
        imageSrc: `./images/entertainment/Chris Noth.webp`,
        date: `April 11, 2022 - 7:00PM`,
        headline: `Sacked actor Chris Noth killed off on The Equalizer`,
        text: `There will be no phoenix-ing for scandal-plagued actor Chris Noth, whose character has been written out in savage fashion on his TV show.`,
        views: `10K views`,
      },
    ],
  },
  {
    category: `education`,
    title: `Trending Education Events`,
    categoryEvents: [
      {
        imageSrc: `./images/education/libraries.jpg`,
        date: `October 18, 2022 - 3:30PM`,
        headline: `Libraries offering open access and open educational resources workshops`,
        text: `Open access and open educational resources have become more and more popular in the area of academic and scholarly settings.`,
        views: `1.5K views`,
      },
      {
        imageSrc: `./images/education/University-of-Benin.webp`,
        date: `October 16, 2022 - 4:54PM`,
        headline: `UniBen ranked 6th best in global universities ranking`,
        text: `The University of Benin (UniBen), Edo, Nigeria has been ranked 6th by the Times Higher Education (THE) in its latest World Universities rankings for Nigeria.`,
        views: `2K views`,
      },
      {
        imageSrc: `./images/education/ABUAD.webp`,
        date: `October 17, 2022 - 2:30PM`,
        headline: `ABUAD graduates 121 first class students, others Friday`,
        text: `One hundred and twenty-one students will graduate with First Class as the Afe Babalola University, Ado-Ekiti, holds its 12th anniversary and 10th convocation ceremonies on Friday. `,
        views: `1K views`,
      },
      {
        imageSrc: `./images/education/UNIUYO.webp`,
        date: `October 11, 2022 - 1:30PM`,
        headline: `UNIUYO students happy to return to campus after 8 months`,
        text: `Students of the University of Uyo (UNIUYO) have expressed happiness as they return to campus after eight months strike by the Academic Staff Union of Universities`,
        views: `2K views`,
      },
    ],
  },
  {
    category: `sports`,
    title: `Trending Sports Events`,
    categoryEvents: [
      {
        imageSrc: `./images/sports/maraige.jpg`,
        date: `October 18, 2022 - 9:17PM`,
        headline: `Love Island winner Tayla Damir marries AFL star Nathan Broad`,
        text: `A Love Island winner and an AFL player have tied the knot in an intimate ceremony in front of their close friends and family members.`,
        views: `20K views`,
      },
      {
        imageSrc: `./images/sports/Harry soutter.jpg`,
        date: `October 18, 2022 - 3:20PM`,
        headline: `Socceroos defender Harry Souttar back on the pitch after suffering ACL injury`,
        text: `One star Socceroos defender could yet make the trip to Qatar as he finally returned to play after a 12-month injury lay-off.`,
        views: `10K views`,
      },
      {
        imageSrc: `./images/sports/madrid.jpg`,
        date: `October 18, 2022 - 8:12AM`,
        headline: `Sam Kerr just misses out on 2022 Ballon d’Or `,
        text: `Real Madrid's French forward Karim Benzema (L) celebrates after scoring his team's first goal during the Spanish League football match between Real Madrid CF and FC Barcelona`,
        views: `10K views`,
      },
      {
        imageSrc: `./images/sports/Salah.jpg`,
        date: `October 17, 2022 - 7:35AM`,
        headline: `Mohamed Salah produces moment of magic as Manchester City suffer defeat of the season`,
        text: `Mohamed Salah produced a moment of magic as powerhouse club Manchester City suffered their first defeat of the season.`,
        views: `42K views`,
      },
    ],
  },
];

const categoryDisplay = document.getElementById("category-display");
const categoryContainer = document.createElement("div");
categoryContainer.setAttribute("class", "category-container container");
categoryDisplay.appendChild(categoryContainer);

function eventDisplayed(num) {
  let number = array[num];
  categoryContainer.innerHTML = `
<h2 class="category-title">${number.title}</h2>
<!-- card-section-1 ------------------- -->
<div class="card-section section-1">
  <div class="card">
    <div class="image">
      <img src="${number.categoryEvents[0].imageSrc}" alt="image">
    </div>
    <div class="description">
      <p class="date">${number.categoryEvents[0].date}</p>
      <p><a class="headline" href="#">${number.categoryEvents[0].headline}</a></p>
      <p class="text">${number.categoryEvents[0].text}</p>
      <p class="views">${number.categoryEvents[0].views}</p>
    </div>
  </div>
  <div class="card">
    <div class="image">
      <img src="${number.categoryEvents[1].imageSrc}" alt="image">
    </div>
    <div class="description">
      <p class="date">${number.categoryEvents[1].date}</p>
      <p><a class="headline" href="#">${number.categoryEvents[1].headline}</a></p>
      <p class="text">${number.categoryEvents[1].text}</p>
      <p class="views">${number.categoryEvents[1].views}</p>
    </div>
  </div>
</div>
<!-- card-section-2 ------------------------ -->
<div class="card-section section-2 ">
  <div class="card">
    <div class="image">
      <img src="${number.categoryEvents[2].imageSrc}" alt="image">
    </div>
    <div class="description">
      <p class="date">${number.categoryEvents[2].date}</p>
      <p><a class="headline" href="#">${number.categoryEvents[2].headline}</a></p>
      <p class="text">${number.categoryEvents[2].text}</p>
      <p class="views">${number.categoryEvents[2].views}</p>
    </div>
  </div>
  <div class="card">
    <div class="image">
      <img src="${number.categoryEvents[3].imageSrc}" alt="image">
    </div>
    <div class="description">
      <p class="date">${number.categoryEvents[3].date}</p>
      <p><a class="headline" href="#">${number.categoryEvents[3].headline}</a></p>
      <p class="text">${number.categoryEvents[3].text}</p>
      <p class="views">${number.categoryEvents[3].views}</p>
    </div>
  </div>
</div>
<button class="btn"><span class="btn-text">MORE <i class="fa-solid fa-caret-down "></i></button>
`;
}

// create a random number that determine which event to display on page load
function randomNum() {
    let num = Math.floor(Math.random() * 4);
    return num;
  }
eventDisplayed(randomNum())

// display items based on the clicked card-----------
const eventCards = document.querySelectorAll('.clicable-card');
eventCards.forEach(card => {
    card.addEventListener('click', (event) => {
        let cardId = event.target.id;
        let newArr = ['news', 'entertainment', 'education', 'sports'];
        for(let i = 0; i < newArr.length; i++) {
            if(newArr[i] === cardId) {
                eventDisplayed(i);
            }
        }
    });
});

// toggle display content-----------
const mobileDisplayBtn = document.querySelector('.btn')
const cardSection = document.querySelector('.section-2');
let showMore = true;

mobileDisplayBtn.addEventListener('click', () => {
  if (showMore) {
    cardSection.classList.toggle('active');
    mobileDisplayBtn.innerHTML = ( 'LESS <i class="fa-solid fa-caret-up"></i>');
    showMore = false
  }else {
    cardSection.classList.remove('active');
    mobileDisplayBtn.innerHTML = ' MORE <i class="fa-solid fa-caret-down"></i>'
    showMore = true
  }
})