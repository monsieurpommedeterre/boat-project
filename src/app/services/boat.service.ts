
export class BoatService {
    boats = [
        {
            owner_type: "professionel",
            owner_name: "Laurent",
            boat_type: "voilier",
            boat_name: "le p'tit louis",
            boat_model: "cr-760",
            boat_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe perferendis, nobis nostrum id dolorum et sint aut tenetur hic quidem ipsam dolore temporibus tempora eum!",
            boat_img: "assets/img/voilier.jpg",
            details: {
                boat_length: 8,
                boat_width: 3,
                boat_draught: 2,
                boat_crew: true,
                boat_annex: true,
                boat_foil: true
            }
        },
        {
            owner_type: "particulier",
            owner_name: "Marc",
            boat_type: "catamaran",
            boat_name: "la licorne",
            boat_model: "bx-4000",
            boat_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe perferendis, nobis nostrum id dolorum et sint aut tenetur hic quidem ipsam dolore temporibus tempora eum!",
            boat_img: "assets/img/catamaran.jpg",
            details: {
                boat_length: 10,
                boat_width: 5,
                boat_draught: 2,
                boat_crew: true,
                boat_annex: false
            }
        },
        {
            owner_type: "particulier",
            owner_name: "Isabelle",
            boat_type: "bateau_moteur",
            boat_name: "l'angelus",
            boat_model: "tr18",
            boat_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe perferendis, nobis nostrum id dolorum et sint aut tenetur hic quidem ipsam dolore temporibus tempora eum!",
            boat_img: "assets/img/bateau_moteur.jpg"
        }
    ]

    newBoatFormDisplay = {
        part0: true,
        part1: false,
        part2: false
    }

    constructor() {
        if(localStorage.getItem('boatsList')){
            console.log("la liste de bateaux est basée sur le local storage")
            this.boats = JSON.parse(localStorage.getItem('boatsList'));
          } else {
            console.log("la liste de bateaux est basée sur le service")
          }
    }
}