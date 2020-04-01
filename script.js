let backButton = document.querySelector("#back")
let nextButton = document.querySelector("#next")


let students = [
  {
  profileImage:"https://cdn.glitch.com/44258a82-29d3-4269-a22e-2d4ca008f1f2%2FLesroy.png?v=1585154704343",
  name: "The Clown Lesroy Roberts",
  quote: "'understandable'",
  superlative: "Master Procrastinator"
  },
  {
  profileImage:"https://cdn.glitch.com/44258a82-29d3-4269-a22e-2d4ca008f1f2%2F3c30dc2a-b730-4aa1-8dda-807d77bf13c9.image.png?v=1585156471731",
  name: "Nicholas Hylton",
  quote: "'It is What it is'",
  superlative: "Super tall"
  },
  {
  profileImage:"https://cdn.glitch.com/44258a82-29d3-4269-a22e-2d4ca008f1f2%2F17c911a3-f7b0-4637-b378-f944f85c6e06.image.png?v=1585157799547",
  name: "Ronel Franco",
  quote: "'Always smile because I am here!''",
  superlative: "Tik Tok Connoisseur"
  },
  {
  profileImage:"https://cdn.glitch.com/44258a82-29d3-4269-a22e-2d4ca008f1f2%2FNancy%20martinez.png?v=1585157761764",
  name: "Nancy Martinez",
  quote: "'Embrace the void and have the courage to exist'",
  superlative: ""
  },
  {
  profileImage:"https://cdn.glitch.com/44258a82-29d3-4269-a22e-2d4ca008f1f2%2F7e35ca88-cdcf-4d58-b415-45e8f043f99e.image.png?v=1585159377759",
  name: "The Assassin Farid Oumorou",
  quote: "'I will never be homeless because the gym is my home and there are gyms everywhere'",
  superlative: "Muscular"
  },
  {
  profileImage:"https://cdn.glitch.com/44258a82-29d3-4269-a22e-2d4ca008f1f2%2F5582e5fa-2efb-4cab-b7b6-a2c53ee02536.image.png?v=1585159187105",
  name: "Edison Reyes",
  quote: "'IDK'",
  superlative: "Baseball enthusiast"
  },
  {
  profileImage:"https://cdn.glitch.com/44258a82-29d3-4269-a22e-2d4ca008f1f2%2F3f5e24b7-3f0f-4bff-8bbe-691b0ccb2154.image.png?v=1585158214896",
  name: "Thierno Diallo",
  quote: "'A tiny step is still a step'",
  superlative: "Epic"
  },
  {
  profileImage:"https://cdn.glitch.com/44258a82-29d3-4269-a22e-2d4ca008f1f2%2Fc15c2f25-a33a-4c40-a62a-5d15f3739176.image.png?v=1585158854461",
  name: "Yadira Carri",
  quote: "'Remember kids, boomer remover'",
  superlative: "Chill"
  },
  {
  profileImage:"https://cdn.glitch.com/44258a82-29d3-4269-a22e-2d4ca008f1f2%2Ff648dc84-aaa1-4dbd-b9bf-6bd334b068be.image.png?v=1585160301413",
  name: "Lisnell Nunez",
  quote: "'I'm dead'",
  superlative: ""
  },
  {
  profileImage:"https://cdn.glitch.com/44258a82-29d3-4269-a22e-2d4ca008f1f2%2Fa7dd3fa1-a5d1-4990-afcd-e08e41975e42.image.png?v=1585529022862",
  name: "Naomi  Delgado",
  quote: "'The best people are People'",
  superlative: "Most handful"
  },
]
  





let count = 0
document.querySelector("#pic").src = students[count].profileImage
document.querySelector("#name").innerHTML = students[count].name
document.querySelector("#quote").innerHTML = students[count].quote
document.querySelector("#superlative").innerHTML = students[count].superlative


// for (let i = 0; i<students.length; i++){
//     if (students[i] == 0){
//       count == lastStudent
//     }
//   }

let lastStudent = students.length -1
nextButton.addEventListener("click",()=>{
  console.log('next')
  count ++;
  console.log(count)
  if(count > lastStudent){
    count = 0
  }
  document.querySelector("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML = students[count].name
  document.querySelector("#quote").innerHTML = students[count].quote
  document.querySelector("#superlative").innerHTML = students[count].superlative
  
})

backButton.addEventListener("click",()=>{
  console.log('back')
  count --;
  if(count < 0){
    count = lastStudent
  }
  console.log(count)
  document.querySelector("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML = students[count].name
  document.querySelector("#quote").innerHTML = students[count].quote
  document.querySelector("#superlative").innerHTML = students[count].superlative
  
})



let randomButton = document.querySelector("#random")

randomButton.addEventListener("click", ()=>{
  let randomStudentPicture = students[Math.floor(Math.random()* students.length)]
  let randomStudentName = students[Math.floor(Math.random()* students.length)]
  let randomStudentQuote = students[Math.floor(Math.random()* students.length)]
  let randomStudentSuperlative = students[Math.floor(Math.random()* students.length)]
  
  
  document.querySelector("#pic").src = randomStudentPicture.profileImage
  document.querySelector("#name").innerHTML = randomStudentName.name
  document.querySelector("#quote").innerHTML = randomStudentQuote.quote
  document.querySelector("#superlative").innerHTML = randomStudentSuperlative.superlative
})
