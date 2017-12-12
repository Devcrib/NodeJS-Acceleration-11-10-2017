const students = [
  {
    "name": "Hernandez Fletcher",
    "gender": "male",
    "score": 19
  },
  {
    "name": "Louise Shields",
    "gender": "female",
    "score": 7
  },
  {
    "name": "Nunez Garza",
    "gender": "male",
    "score": 87
  },
  {
    "name": "Hewitt Pruitt",
    "gender": "male",
    "score": 56
  },
  {
    "name": "Brianna Gilmore",
    "gender": "female",
    "score": 60
  },
  {
    "name": "Bernadette Moran",
    "gender": "female",
    "score": 71
  },
  {
    "name": "Howe Patterson",
    "gender": "male",
    "score": 16
  },
  {
    "name": "Peterson Cook",
    "gender": "male",
    "score": 94
  },
  {
    "name": "Marva Wynn",
    "gender": "female",
    "score": 47
  },
  {
    "name": "Mccormick Douglas",
    "gender": "male",
    "score": 18
  },
  {
    "name": "Navarro Dominguez",
    "gender": "male",
    "score": 25
  },
  {
    "name": "Estelle Torres",
    "gender": "female",
    "score": 88
  },
  {
    "name": "Aida Castaneda",
    "gender": "female",
    "score": 54
  },
  {
    "name": "Kimberley Madden",
    "gender": "female",
    "score": 72
  },
  {
    "name": "Wall Ball",
    "gender": "male",
    "score": 72
  },
  {
    "name": "Beck Fulton",
    "gender": "male",
    "score": 73
  },
  {
    "name": "Diann Medina",
    "gender": "female",
    "score": 73
  },
  {
    "name": "Faulkner Wilson",
    "gender": "male",
    "score": 19
  },
  {
    "name": "Guzman Bruce",
    "gender": "male",
    "score": 19
  },
  {
    "name": "Cannon Irwin",
    "gender": "male",
    "score": 78
  },
  {
    "name": "Marianne David",
    "gender": "female",
    "score": 31
  },
  {
    "name": "Mildred Guerrero",
    "gender": "female",
    "score": 24
  },
  {
    "name": "Graves Solomon",
    "gender": "male",
    "score": 22
  },
  {
    "name": "Jordan Saunders",
    "gender": "male",
    "score": 52
  },
  {
    "name": "Brock Franco",
    "gender": "male",
    "score": 5
  },
  {
    "name": "Francisca Terrell",
    "gender": "female",
    "score": 47
  },
  {
    "name": "Edna Lawson",
    "gender": "female",
    "score": 80
  },
  {
    "name": "Janette Goodwin",
    "gender": "female",
    "score": 61
  },
  {
    "name": "Cecilia Munoz",
    "gender": "female",
    "score": 86
  },
  {
    "name": "Mariana Franks",
    "gender": "female",
    "score": 25
  },
  {
    "name": "Valentine Jimenez",
    "gender": "male",
    "score": 33
  },
  {
    "name": "Kemp Fry",
    "gender": "male",
    "score": 16
  },
  {
    "name": "Russell Rodgers",
    "gender": "male",
    "score": 42
  },
  {
    "name": "Burks Wagner",
    "gender": "male",
    "score": 55
  },
  {
    "name": "Butler Hurley",
    "gender": "male",
    "score": 100
  },
  {
    "name": "Yates Stevens",
    "gender": "male",
    "score": 91
  },
  {
    "name": "Lori Mcmillan",
    "gender": "female",
    "score": 65
  },
  {
    "name": "Marlene Ingram",
    "gender": "female",
    "score": 51
  },
  {
    "name": "Katelyn Boone",
    "gender": "female",
    "score": 80
  },
  {
    "name": "Twila Berg",
    "gender": "female",
    "score": 13
  },
  {
    "name": "Pollard Moreno",
    "gender": "male",
    "score": 74
  },
  {
    "name": "Savage Stein",
    "gender": "male",
    "score": 79
  },
  {
    "name": "Orr Mccormick",
    "gender": "male",
    "score": 12
  },
  {
    "name": "Merritt Guy",
    "gender": "male",
    "score": 98
  },
  {
    "name": "Santiago Stokes",
    "gender": "male",
    "score": 64
  },
  {
    "name": "Dixie Oconnor",
    "gender": "female",
    "score": 56
  },
  {
    "name": "Stone Duran",
    "gender": "male",
    "score": 25
  },
  {
    "name": "Gonzales Hinton",
    "gender": "male",
    "score": 11
  },
  {
    "name": "Lott Wilkins",
    "gender": "male",
    "score": 83
  },
  {
    "name": "Neva Norris",
    "gender": "female",
    "score": 96
  },
  {
    "name": "Lucy Hogan",
    "gender": "female",
    "score": 59
  },
  {
    "name": "Estella Bush",
    "gender": "female",
    "score": 90
  },
  {
    "name": "Catherine Blackwell",
    "gender": "female",
    "score": 93
  },
  {
    "name": "Kristie Houston",
    "gender": "female",
    "score": 90
  },
  {
    "name": "Goodman Key",
    "gender": "male",
    "score": 25
  },
  {
    "name": "Barron Sullivan",
    "gender": "male",
    "score": 87
  },
  {
    "name": "Dickerson Marshall",
    "gender": "male",
    "score": 26
  },
  {
    "name": "Weber Morin",
    "gender": "male",
    "score": 21
  },
  {
    "name": "Meyer Simon",
    "gender": "male",
    "score": 33
  },
  {
    "name": "Marcy Woodard",
    "gender": "female",
    "score": 19
  },
  {
    "name": "Julia Gentry",
    "gender": "female",
    "score": 74
  },
  {
    "name": "Helena Juarez",
    "gender": "female",
    "score": 26
  },
  {
    "name": "Hammond Vang",
    "gender": "male",
    "score": 42
  },
  {
    "name": "Billie Maxwell",
    "gender": "female",
    "score": 49
  },
  {
    "name": "Christian Foreman",
    "gender": "female",
    "score": 77
  },
  {
    "name": "Stefanie Cummings",
    "gender": "female",
    "score": 40
  },
  {
    "name": "Fletcher Flynn",
    "gender": "male",
    "score": 29
  },
  {
    "name": "Conley Riggs",
    "gender": "male",
    "score": 71
  },
  {
    "name": "Harrell Fernandez",
    "gender": "male",
    "score": 65
  },
  {
    "name": "Kramer Fleming",
    "gender": "male",
    "score": 67
  },
  {
    "name": "Moss Booker",
    "gender": "male",
    "score": 91
  },
  {
    "name": "Jarvis Ochoa",
    "gender": "male",
    "score": 81
  },
  {
    "name": "Gonzalez Henson",
    "gender": "male",
    "score": 61
  },
  {
    "name": "Margie Brooks",
    "gender": "female",
    "score": 4
  },
  {
    "name": "Fernandez Herman",
    "gender": "male",
    "score": 10
  },
  {
    "name": "Aimee Elliott",
    "gender": "female",
    "score": 65
  },
  {
    "name": "Lila Carey",
    "gender": "female",
    "score": 91
  },
  {
    "name": "Mack Morse",
    "gender": "male",
    "score": 28
  },
  {
    "name": "Malone Potter",
    "gender": "male",
    "score": 32
  },
  {
    "name": "Elma Valenzuela",
    "gender": "female",
    "score": 39
  },
  {
    "name": "Willis Noble",
    "gender": "male",
    "score": 63
  },
  {
    "name": "Reed Dillon",
    "gender": "male",
    "score": 11
  },
  {
    "name": "Simon Sherman",
    "gender": "male",
    "score": 70
  },
  {
    "name": "Violet Banks",
    "gender": "female",
    "score": 51
  },
  {
    "name": "Sondra Mann",
    "gender": "female",
    "score": 47
  },
  {
    "name": "Susie Mcdaniel",
    "gender": "female",
    "score": 13
  },
  {
    "name": "Conway Blankenship",
    "gender": "male",
    "score": 87
  },
  {
    "name": "Reba Powers",
    "gender": "female",
    "score": 15
  },
  {
    "name": "Isabelle Terry",
    "gender": "female",
    "score": 10
  },
  {
    "name": "Wilkerson Oneill",
    "gender": "male",
    "score": 84
  },
  {
    "name": "Kathy Pitts",
    "gender": "female",
    "score": 86
  },
  {
    "name": "Marcella Cross",
    "gender": "female",
    "score": 73
  },
  {
    "name": "Patty Camacho",
    "gender": "female",
    "score": 81
  },
  {
    "name": "Lupe Farley",
    "gender": "female",
    "score": 50
  },
  {
    "name": "Millicent Levy",
    "gender": "female",
    "score": 88
  },
  {
    "name": "Anita Cain",
    "gender": "female",
    "score": 99
  },
  {
    "name": "Silvia Shepherd",
    "gender": "female",
    "score": 21
  },
  {
    "name": "Rita Watkins",
    "gender": "female",
    "score": 37
  },
  {
    "name": "Salas Reid",
    "gender": "male",
    "score": 73
  },
  {
    "name": "Laurel Contreras",
    "gender": "female",
    "score": 36
  }
]