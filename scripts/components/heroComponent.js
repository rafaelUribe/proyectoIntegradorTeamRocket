const heroComponent = (firstLabel, secondLabel, thirdLabel, url1, url2, url3, p1, p2, p3) => `
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src=${url1} class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${firstLabel}</h5>
                    <p>${p1}</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src=${url2} class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${secondLabel}</h5>
                    <p>${p2}</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src=${url3} class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${thirdLabel}</h5>
                    <p>${p3}</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
        </button>
    </div>
`

export default heroComponent