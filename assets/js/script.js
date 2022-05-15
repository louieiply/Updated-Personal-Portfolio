window.onload = function(){
    const LanguageArray = new Array();

    const getGitHubProjects = async () =>{
        const url ="https://api.github.com/users/louieiply/repos";
        var count = 0;
        await fetch(url,
            {
                method: "GET"
            }
            )
        .then((response) => {return response.json()})
        .then((data) => {console.log(data);
              const card_contrainer = document.querySelector("#card-container");
              var card_contrainer_innerHTML = "";
              data.forEach(element => {
                var langages = [];
                var langages_str = "";
                fetch(element.languages_url,{method: "GET"})
                .then((data)=>{return data.json()})
                .then((data) => {console.log(data);
                        for(k in data) langages.push(k);
                        console.log(langages);
                        langages.forEach(langage => {
                            langages_str += langages_str === "" ? `${langage} ` : `| ${langage}` ;
                            LanguageArray.push(langages_str);
                        });
                })
                
                console.log("langages_str " + langages_str);
                card_contrainer_innerHTML += `            <div class="col-md-4 col-sm-6 col-xs-12 mt-5">
                <div class="card border-dark card-s-bg "> <a href="${element.svn_url}"><img src="/assets/images/bg.jpg" class="card-img-top" alt="..."></a>
                    <div class="card-body d-grid gap-3">
                    <h5 class="card-title text-center text-capitalize">${element.name}</h5>
                    <p class="card-text text-center p-0 pb-3" id="#project${count++}"></p>
                    </div>
                    <!--<div class="card-footer bg-dark text-light">
                    <div><i class="bi bi-facebook"></i></div>

                    </div> -->
                </div>
            </div>`
              });
              card_contrainer.innerHTML = card_contrainer_innerHTML;
        })
        .catch((err) => {console.log(err)});
    }

    const insertlanguages = () => {


        for (let index = 0; index < LanguageArray.length; index++) {
            const id = `#project${index}`;
            const languageSession = document.querySelector(id);
            languageSession.innerHTML = LanguageArray[index];
            
        }
    }

    const init = async () => {
       await getGitHubProjects();
       await insertlanguages();
    }

    init();
}