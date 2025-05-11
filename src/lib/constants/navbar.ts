export const data = [
  {
    category: "Sports",
    subcategories: [
      {
        name: "Football",
        events: [
          "Champions League Final",
          "Premier League Match",
          "El Clasico",
        ],
      },
      {
        name: "Basketball",
        events: ["NBA Finals", "EuroLeague Game", "College Basketball"],
      },
      {
        name: "Tennis",
        events: ["Wimbledon Final", "US Open", "Australian Open"],
      },
      {
        name: "Cricket",
        events: ["IPL Match", "Ashes Series", "World Cup Final"],
      },
      {
        name: "Baseball",
        events: ["MLB Game", "World Series", "Spring Training"],
      },
      {
        name: "Golf",
        events: ["Masters Tournament", "US Open", "PGA Championship"],
      },
      {
        name: "Hockey",
        events: ["NHL Playoffs", "Winter Olympics Match", "World Cup"],
      },
      {
        name: "Boxing",
        events: [
          "Heavyweight Title Fight",
          "Olympic Boxing",
          "Undercard Fights",
        ],
      },
      {
        name: "Formula 1",
        events: ["Monaco Grand Prix", "British Grand Prix", "Singapore GP"],
      },
      {
        name: "Wrestling",
        events: ["WWE WrestleMania", "AEW Dynamite", "Royal Rumble"],
      },
      {
        name: "MMA",
        events: ["UFC Fight Night", "Bellator MMA", "One Championship"],
      },
    ],
  },
  {
    category: "Music",
    subcategories: [
      {
        name: "Rock",
        events: ["Foo Fighters Tour", "Rock Festival", "AC/DC Reunion"],
      },
      {
        name: "Pop",
        events: ["Taylor Swift Eras Tour", "Ariana Grande Live", "K-Pop Night"],
      },
      {
        name: "Jazz",
        events: [
          "Montreux Jazz Fest",
          "Smooth Jazz Evening",
          "Blue Note Nights",
        ],
      },
      {
        name: "Classical",
        events: ["Beethoven Symphony Night", "Opera Gala", "Mozart Live"],
      },
      {
        name: "Hip Hop",
        events: ["Drake Live", "Rap Battles", "Underground Hip Hop Fest"],
      },
      {
        name: "Electronic",
        events: ["Tomorrowland", "EDC Vegas", "Trance Night"],
      },
      {
        name: "Country",
        events: ["Country Road Tour", "Luke Combs Live", "Nashville Night"],
      },
      {
        name: "Reggae",
        events: ["Reggae Sun Ska", "Bob Marley Tribute", "Island Vibes"],
      },
      {
        name: "R&B",
        events: ["The Weeknd Concert", "Soul Sessions", "90s R&B Throwback"],
      },
      {
        name: "Metal",
        events: [
          "Metallica World Tour",
          "Wacken Open Air",
          "Death Metal Night",
        ],
      },
    ],
  },
  {
    category: "Shows",
    subcategories: [
      {
        name: "Drama",
        events: ["Hamilton", "Les Misérables", "Macbeth"],
      },
      {
        name: "Comedy",
        events: ["Kevin Hart Live", "Improv Night", "Netflix Stand-up"],
      },
      {
        name: "Reality TV",
        events: ["Live Big Brother Finale", "The Voice Tour", "Survivor Live"],
      },
      {
        name: "Talk Shows",
        events: ["Jimmy Fallon Taping", "Ellen Live", "Late Night with Seth"],
      },
      {
        name: "Documentary",
        events: [
          "Nature Film Screening",
          "Crime Doc Premiere",
          "Science Doc Night",
        ],
      },
      {
        name: "Thriller",
        events: ["Mystery Theater", "Escape Room Live", "Dark Play Showcase"],
      },
      {
        name: "Sci-Fi",
        events: ["Star Wars Experience", "Sci-Fi Expo", "Futuristic Play"],
      },
      {
        name: "Fantasy",
        events: ["Game of Thrones Play", "Fantasy Fest", "Middle Earth Live"],
      },
      {
        name: "Crime",
        events: ["True Crime Expo", "Murder Mystery Show", "CSI Live"],
      },
      {
        name: "Animation",
        events: ["Pixar Night", "Anime Convention", "Cartoon Showcase"],
      },
    ],
  },
  {
    category: "Cities",
    subcategories: [
      {
        name: "New York",
        events: ["Broadway Show", "Yankees Game", "NYC Jazz Festival"],
      },
      {
        name: "Los Angeles",
        events: ["Hollywood Film Premiere", "Lakers Game", "LA Pride"],
      },
      {
        name: "London",
        events: ["Wimbledon", "Royal Opera", "West End Musical"],
      },
      {
        name: "Paris",
        events: ["Paris Fashion Week", "French Open", "Eiffel Concert Night"],
      },
      {
        name: "Tokyo",
        events: ["Cherry Blossom Festival", "Sumo Tournament", "Anime Japan"],
      },
      {
        name: "Dubai",
        events: ["Dubai Expo", "Desert Safari Show", "Formula E"],
      },
      {
        name: "Sydney",
        events: ["Opera House Performance", "Harbor Fireworks", "Sydney Open"],
      },
      {
        name: "Toronto",
        events: ["TIFF Film Festival", "Maple Leafs Game", "Indie Music Fest"],
      },
      {
        name: "Berlin",
        events: ["Berlin Film Festival", "Techno Parade", "Berlin Marathon"],
      },
      {
        name: "Barcelona",
        events: ["FC Barcelona Match", "Street Art Fest", "Gaudí Night Tour"],
      },
    ],
  },
];

export type data = {
  category: string;
  subcategories: {
    name: string;
    events: string[];
  }[];
};
