// Ikaw ang Lakas — 20 Affirmations for Filipino Parents Abroad
const affirmations = [
  {
    icon: "🌟", category: "Strength",
    en: "Every sacrifice you make is a <em>seed of love</em> planted for your family's future.",
    tl: "Ang bawat sakripisyo mo ay isang <em>butil ng pagmamahal</em> na itinatanim para sa kinabukasan ng iyong pamilya.",
    sub: "Your hardest days are building the foundation they will stand on forever."
  },
  {
    icon: "💛", category: "Love",
    en: "The distance between you and your family <em>cannot measure</em> the size of your love.",
    tl: "Ang distansya sa pagitan mo at ng iyong pamilya ay <em>hindi masusukat</em> sa laki ng iyong pagmamahal.",
    sub: "Your heart is always home, no matter how many miles away you are."
  },
  {
    icon: "🦅", category: "Courage",
    en: "You chose the <em>harder path</em> so your family could walk an easier one.",
    tl: "Pinili mo ang <em>mas mahirap na landas</em> para ang iyong pamilya ay makaraan sa mas madali.",
    sub: "That is not just bravery — that is the deepest form of devotion."
  },
  {
    icon: "🌅", category: "Hope",
    en: "Every morning you wake up abroad is a <em>morning of purpose</em> — you are someone's answered prayer.",
    tl: "Ang bawat umaga na gising ka sa ibang bansa ay isang <em>umaga ng layunin</em> — ikaw ang sagot sa panalangin ng iyong pamilya.",
    sub: "Your family sees your sacrifice even in the moments you feel invisible."
  },
  {
    icon: "🙏", category: "Faith",
    en: "You are not just working for a salary — you are <em>building a legacy</em> of resilience and love.",
    tl: "Hindi ka lang nagtatrabaho para sa sahod — ikaw ay <em>nagtatayo ng pamana</em> ng lakas at pagmamahal.",
    sub: "Generations from now, they will tell the story of what you did for them."
  },
  {
    icon: "💪", category: "Resilience",
    en: "Missing birthdays, milestones, and holidays is the <em>price of a love</em> that refuses to give up.",
    tl: "Ang hindi pagsama sa mga kaarawan at pagdiriwang ay ang <em>presyo ng pagmamahal</em> na hindi sumusuko.",
    sub: "Your absence is not abandonment — it is a parent's greatest fight."
  },
  {
    icon: "🌙", category: "Comfort",
    en: "On your loneliest nights, remember: your family <em>carries you with them</em> in everything they do.",
    tl: "Sa iyong pinaka-malungkot na gabi, tandaan: ang iyong pamilya ay <em>dala-dala ka nila</em> sa lahat ng kanilang ginagawa.",
    sub: "You are never truly far from the people who love you most."
  },
  {
    icon: "✨", category: "Worth",
    en: "You are more than an OFW — you are a <em>hero without a cape</em>, living proof that love has no limits.",
    tl: "Higit ka pa sa isang OFW — ikaw ay isang <em>bayani na walang balabal</em>, patunay na walang hangganan ang pagmamahal.",
    sub: "The world may not always see it, but your family knows exactly who you are."
  },
  {
    icon: "🌺", category: "Pride",
    en: "Be proud of every callus, every tired night, every meal you ate alone — <em>it all matters.</em>",
    tl: "Ipagmalaki ang bawat gasgas, bawat gabing pagod, bawat kainan na mag-isa — <em>mahalaga ang lahat.</em>",
    sub: "Your children will one day understand the full weight of what you gave them."
  },
  {
    icon: "🌊", category: "Perseverance",
    en: "You did not come this far to stop now. <em>Keep going</em> — your family's better tomorrow depends on your today.",
    tl: "Hindi ka nakarating dito para tumigil na. <em>Magpatuloy</em> — ang mas magandang bukas ng iyong pamilya ay nakasalalay sa iyong ngayon.",
    sub: "The finish line is closer than you think. You are stronger than you know."
  },
  {
    icon: "🌻", category: "Gratitude",
    en: "Your family may not say it every day, but they are <em>grateful for every drop of sweat</em> you give.",
    tl: "Baka hindi sinasabi ng iyong pamilya araw-araw, ngunit sila ay <em>nagpapasalamat sa bawat patak ng iyong pawis.</em>",
    sub: "Gratitude runs deep in the hearts of those who see what you do for them."
  },
  {
    icon: "🕊️", category: "Peace",
    en: "You deserve <em>peace in your heart</em> — not just the peace you build for your family.",
    tl: "Nararapat ka rin ng <em>kapayapaan sa iyong puso</em> — hindi lang ang kapayapaang itinatayo mo para sa iyong pamilya.",
    sub: "Take care of yourself too. You cannot pour from an empty cup."
  },
  {
    icon: "🔥", category: "Passion",
    en: "The fire that drives you is called <em>love</em> — and it will never burn out.",
    tl: "Ang apoy na nagpapatakbo sa iyo ay tinatawag na <em>pagmamahal</em> — at hindi ito kailanman mamamatay.",
    sub: "Let that love be your fuel on the days when everything else feels heavy."
  },
  {
    icon: "🌍", category: "Sacrifice",
    en: "You carry an entire homeland in your chest, and still show up — <em>that is extraordinary.</em>",
    tl: "Dala-dala mo ang isang buong bansa sa iyong dibdib, at nagpapatuloy ka pa rin — <em>ito ay kahanga-hanga.</em>",
    sub: "Your roots make you stronger, not weaker."
  },
  {
    icon: "👐", category: "Giving",
    en: "Every remittance is a love letter — <em>your way of saying</em> 'I am here, I am fighting for you.'",
    tl: "Ang bawat padala ay isang liham ng pagmamahal — <em>ang iyong paraan ng pagsasabi</em> na 'Nandito ako, lumalaban ako para sa inyo.'",
    sub: "What you give is more than money. It is proof of who you are."
  },
  {
    icon: "🌈", category: "Hope",
    en: "The rainbow you are building for your children <em>starts with the storm</em> you are weathering right now.",
    tl: "Ang bahaghari na itinatayo mo para sa iyong mga anak ay <em>nagsisimula sa bagyo</em> na iyong pinagdadaanan ngayon.",
    sub: "Every hardship has a purpose. You are closer to the other side."
  },
  {
    icon: "💼", category: "Dignity",
    en: "There is no shame in hard work done far from home — there is only <em>immeasurable honor.</em>",
    tl: "Walang kahihiyan sa pagsusumikap na malayo sa tahanan — mayroon lamang <em>walang kapantay na karangalan.</em>",
    sub: "Hold your head high. You are doing what most people never dare."
  },
  {
    icon: "📞", category: "Connection",
    en: "Even across oceans, your voice is the <em>most comforting sound</em> your children know.",
    tl: "Kahit sa kabila ng mga karagatan, ang iyong boses ay ang <em>pinaka-nakakaaliw na tunog</em> na kilala ng iyong mga anak.",
    sub: "Distance cannot silence the love that travels through a single phone call."
  },
  {
    icon: "⭐", category: "Legacy",
    en: "Your children will grow up knowing what <em>true sacrifice looks like</em> — because they will see it in you.",
    tl: "Lalaki ang iyong mga anak na may kaalaman kung ano ang <em>tunay na sakripisyo</em> — dahil makikita nila ito sa iyo.",
    sub: "You are not just their parent. You are their greatest teacher."
  },
  {
    icon: "🏡", category: "Home",
    en: "Home is not just a place — it is the <em>warmth you carry inside you</em>, wherever in the world you stand.",
    tl: "Ang tahanan ay hindi lang isang lugar — ito ang <em>init na dala-dala mo sa iyong puso</em>, saan man sa mundo ka nakatayo.",
    sub: "You are home to your family, even from thousands of miles away."
  }
];
