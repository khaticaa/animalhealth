let detail = document.querySelector(".detail");



let id = new URLSearchParams(window.location.search).get("id");


fetch(`http://localhost:3000/viewdoctor/${id}`)
.then(res=>res.json())
.then(element=>{
    console.log(id)
        detail.innerHTML+= `
      

        <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-7 col-lg-4 mb-5 mb-lg-0 wow fadeIn">
                <div class="card border-0 shadow">
                    <img src="${element.image}" alt="...">
                    <div class="card-body p-1-9 p-xl-5">
                        <div class="mb-4">
                            <h3 class="h4 mb-0">${element.name}</h3>
                            <span class="text-primary">${element.job}</span>
                        </div>
                        <ul class="list-unstyled mb-4">
                            <li class="mb-3"><a href="#!"><i class="far fa-envelope display-25 me-3 text-secondary"></i>${element.email}</a></li>
                            <li class="mb-3"><a href="#!"><i class="fas fa-mobile-alt display-25 me-3 text-secondary"></i>${element.tel}</a></li>
                            <li><a href="#!"><i class="fas fa-map-marker-alt display-25 me-3 text-secondary"></i>${element.konum}/a></li>
                        </ul>
                        <ul class="social-icon-style2 ps-0">
                            <li><a href="#!" class="rounded-3"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#!" class="rounded-3"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#!" class="rounded-3"><i class="fab fa-youtube"></i></a></li>
                            <li><a href="#!" class="rounded-3"><i class="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="ps-lg-1-6 ps-xl-5">
                    <div class="mb-5 wow fadeIn">
                        <div class="text-start mb-1-6 wow fadeIn">
                            <h2 class="h1 mb-0 text-primary">#About Me</h2>
                        </div>
                        <p>${element.aboutme}</p>
                        <p class="mb-0">${element.aboutme2}</p>
                    </div>
                    <div class="mb-5 wow fadeIn">
                        <div class="text-start mb-1-6 wow fadeIn">
                            <h2 class="mb-0 text-primary">#Education</h2>
                        </div>
                        <div class="row mt-n4">
                            <div class="col-sm-6 col-xl-4 mt-4">
                                <div class="card text-center border-0 rounded-3">
                                    <div class="card-body">
                                        <i class="ti-bookmark-alt icon-box medium rounded-3 mb-4"></i>
                                        <h3 class="h5 mb-3">Education</h3>
                                        <p class="mb-0">${element.education}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xl-4 mt-4">
                                <div class="card text-center border-0 rounded-3">
                                    <div class="card-body">
                                        <i class="ti-pencil-alt icon-box medium rounded-3 mb-4"></i>
                                        <h3 class="h5 mb-3">Career Start</h3>
                                        <p class="mb-0">${element.career}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xl-4 mt-4">
                                <div class="card text-center border-0 rounded-3">
                                    <div class="card-body">
                                        <i class="ti-medall-alt icon-box medium rounded-3 mb-4"></i>
                                        <h3 class="h5 mb-3">Experience</h3>
                                        <p class="mb-0">${element.experience}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="wow fadeIn">
                        <div class="text-start mb-1-6 wow fadeIn">
                            <h2 class="mb-0 text-primary">#Skills &amp; Experience</h2>
                        </div>
                        <p class="mb-4">${element.sae}</p>
                     
                    </div>
                </div>
            </div>
        </div>
    </div>

                <button onclick="Back(${element.id})">Main Page</button>
              

        
        `
    });
    
function Back(){
    window.location="index.html"
  
}



