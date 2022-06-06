const teams = [
    {
      img: "wayne-barnett-founder-ceo.jpg",
      name: "Wayne Barnet",
      role: "Founder & CEO",
    },
    {
      img: "maria-medoro-chief-editor.jpg",
      name: "Maria Medoro",
      role: "Chief Editor",
    },
    {
      img: "walter-gordon-office-manager.jpg",
      name: "Walter Gordon",
      role: "Office Manager",
    },
    {
      img: "angela-proietti-social-media-manager.jpg",
      name: "Angela Proietti",
      role: "Social Media Manager",
    },
    {
      img: "scott-estrada-developer.jpg",
      name: "Scott Estrada",
      role: "Developer",
    },
    {
      img: "barbara-gabrielli-graphic-designer.jpg",
      name: "Barbara Gabrielli",
      role: "Graphic Designer",
    },
  ];
  
  
  let postContainer = document.querySelector(".post-container");
  let button = document.getElementById("submit");
  
  
  function addNewMember (img, name, role) {
    postContainer.innerHTML += 
    `<div class="card">
    <div id="title" class="card-title">
      <img src="./img/${img}">
    </div>
    <div id="content" class="card-content">
      <h2>${name}</h2>
      <p>${role}</p>
    </div>
    </div>`
  }
  
  for (i = 0; i < teams.length; i++) {
    addNewMember(teams[i].img, teams[i].name, teams[i].role);
  }
  
  button.addEventListener("click", () => {
    let inputName = document.getElementById("name").value;
    let inputRole = document.getElementById("role").value;
    let inputImage = document.getElementById("image").ariaReadOnly
    addNewMember(inputImage, inputName, inputRole);
  })
  