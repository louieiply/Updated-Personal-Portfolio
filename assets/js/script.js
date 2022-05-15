window.onload = function(){


    const getGitHubProjects = () =>{
        const url ="https://api.github.com/users/louieiply/repos";
        fetch(url,
            {
                method: "GET"
            }
            )
        .then((response) => {return response.json()})
        .then((data) => {console.log(data);
              const card_contrainer = document.querySelector("#card-container");
              var card_contrainer_innerHTML = "";
              data.forEach(element => {
                card_contrainer_innerHTML += `            <div class="col-4 mt-5">
                <div class="card border-success card-s-bg "> <img src="images/empire_state.jpg" class="card-img-top" alt="...">
                    <div class="card-body d-grid gap-3">
                    <h5 class="card-title text-center text-capitalize">${element.name}</h5>
                    <p class="card-text text-center p-0 pb-3">This card has supporting text below as a natural lead-in to additional content. lead-in to additional content additional contentadditional content</p>
                        
                    </div>
                    <div class="card-footer bg-success text-light">
                    <div><i class="bi bi-facebook"></i></div>

                    </div>
                </div>
            </div>`
              });
              card_contrainer.innerHTML = card_contrainer_innerHTML;
              console.log(card_contrainer_innerHTML);
        })
        .catch((err) => {console.log(err)});
    }

    getGitHubProjects();
}