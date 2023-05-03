var colaborators = [
    {
        id: 1,
        name: "Matheus Borges",
        jobtitle: "Analista de Sistemas",
        pictureURL: "https://www.lance.com.br/files/article_main/uploads/2022/08/12/62f6e1f139a2d.jpeg"
    },
    {
        id: 2,
        name: "Adriana Rangel",
        jobtitle: "Designer Master Plus",
        pictureURL: "https://avatars.githubusercontent.com/u/105232781?v=4"
    },
    {
        id: 3,
        name: "Felipe Oliveira",
        jobtitle: "Blackbelt",
        pictureURL: "https://avatars.githubusercontent.com/u/125571407?v=4"
    },
    {
        id: 4,
        name: "Yan Rodrigues",
        jobtitle: "CEO",
        pictureURL: "https://media.licdn.com/dms/image/D4D03AQHu7r-gXumwFw/profile-displayphoto-shrink_800_800/0/1680386054218?e=1688601600&v=beta&t=Xt6fnmbJ9q44lrrWXpWbQIeKXmftCF9nQpzHcwttc58"
    },
    {
        id: 5,
        name: "Juliana Boubée",
        jobtitle: "CTO",
        pictureURL: "https://media.licdn.com/dms/image/D4D03AQHQRZCPQqYlXg/profile-displayphoto-shrink_800_800/0/1680130430561?e=1688601600&v=beta&t=Xq3eRRShuuyi33i0eWsTTV_XjqqwuLkkT6d_6tsrW5c"
    }
]

//A partir do Array mostrar em tela e criar a pesquisa

document.getElementById("sendBtn").addEventListener('click', (e) => {
    e.preventDefault();
    searchUser();
})

/*
    <div class="personContainer">
        <img src="https://avatars.githubusercontent.com/u/91194767?v=4" alt="Pessoa 1"/>
        <div class="contentConteiner">
          <span class="title">Rodolpho</span>
          <span class="job">Programador</span>
        </div>
    </div>
*/

window.onload = () => {
    var htmlString = ""

    colaborators.forEach(colaborators => {
        htmlString += ` <div class="personContainer">
                            <img src="${colaborators.pictureURL}" alt="${colaborators.name}"/>
                            <div class="contentConteiner">
                                <span class="title">${colaborators.name}</span>
                                <span class="job">${colaborators.jobtitle}</span>
                            </div>
                        </div>`
    })
    document.getElementById("peopleContainer").innerHTML = htmlString;
}

const searchUser = () => {
    const searchValue = document.getElementById("search").ariaValueMax;
    const filteredCollaborators = colaborators.filter(colaborators => colaborators.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))

}