import type { Fighter, CardData } from "./fightTypes"

interface FightProps {
    fighterOne: Fighter,
    fighterTwo: Fighter,
}

export const FightLogic = (
    {
        fighterOne,
        fighterTwo
    }: FightProps) => {
        const Winner = Math.floor(Math.random() * 2) + 1;

        if (Winner == 1) {
            return fighterOne.name
        } else {
            return fighterTwo.name
        }
}

export const FightCard: CardData = {  
  fights: [
  
    {
      fighter_one: {
        name: "Islam Makachaev",
        age: 30,
        img: "/islam_makachaev.png",
        category: "lightweight",
        record: {
          wins: 25,
          defeats: 1,
        },
      },
      fighter_two: {
        name: "Illia Topuria",
        age: 27,
        img: "/illia_topuria.png",
        category: "lightweight",
        record: {
          wins: 15,
          defeats: 0,
        },
      },
    },

    {
      fighter_one: {
        name: "Charles Oliveira",
        age: 34,
        img: "/charles_oliveira.png",
        category: "lightweight",
        record: {
          wins: 34,
          defeats: 10,
        },
      },
      fighter_two: {
        name: "Dustin Poirier",
        age: 35,
        img: "/dustin_poirier.png",
        category: "lightweight",
        record: {
          wins: 30,
          defeats: 8,
        },
      },
    },

    {
      fighter_one: {
        name: "Leon Edwards",
        age: 32,
        img: "/leon_edwards.png",
        category: "welterweight",
        record: {
          wins: 21,
          defeats: 3,
        },
      },
      fighter_two: {
        name: "Kamaru Usman",
        age: 36,
        img: "/kamaru_usman.png",
        category: "welterweight",
        record: {
          wins: 20,
          defeats: 4,
        },
      },
    },

    {
      fighter_one: {
        name: "Israel Adesanya",
        age: 34,
        img: "/israel_adesanya.png",
        category: "middleweight",
        record: {
          wins: 24,
          defeats: 3,
        },
      },
      fighter_two: {
        name: "Alex Pereira",
        age: 36,
        img: "/alex_pereira.png",
        category: "middleweight",
        record: {
          wins: 9,
          defeats: 2,
        },
      },
    },

    {
      fighter_one: {
        name: "Colby Covington",
        age: 35,
        img: "/colby_covington.png",
        category: "welterweight",
        record: {
          wins: 17,
          defeats: 4,
        },
      },
      fighter_two: {
        name: "Jorge Masvidal",
        age: 39,
        img: "/jorge_masvidal.png",
        category: "welterweight",
        record: {
          wins: 35,
          defeats: 17,
        },
      },
    },

    {
      fighter_one: {
        name: "Robert Whittaker",
        age: 33,
        img: "/robert_whittaker.png",
        category: "middleweight",
        record: {
          wins: 26,
          defeats: 7,
        },
      },
      fighter_two: {
        name: "Paulo Costa",
        age: 32,
        img: "/paulo_costa.png",
        category: "middleweight",
        record: {
          wins: 14,
          defeats: 3,
        },
      },
    },

    {
      fighter_one: {
        name: "Justin Gaethje",
        age: 35,
        img: "/justin_gaethje.png",
        category: "lightweight",
        record: {
          wins: 25,
          defeats: 5,
        },
      },
      fighter_two: {
        name: "Michael Chandler",
        age: 37,
        img: "/michael_chandler.png",
        category: "lightweight",
        record: {
          wins: 23,
          defeats: 8,
        },
      },
    },

    {
      fighter_one: {
        name: "Sean Strickland",
        age: 33,
        img: "/sean_strickland.png",
        category: "middleweight",
        record: {
          wins: 28,
          defeats: 5,
        },
      },
      fighter_two: {
        name: "Dricus Du Plessis",
        age: 30,
        img: "/dricus_du_plessis.png",
        category: "middleweight",
        record: {
          wins: 21,
          defeats: 2,
        },
      },
    },
  ],
};