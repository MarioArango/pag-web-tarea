const main = document.getElementById("main")
const homePage = document.getElementById("homePage")
const history = document.getElementById("history")
const management = document.getElementById("management")
const products = document.getElementById("products")
const services = document.getElementById("services")
const testimonial = document.getElementById("testimonial")
const team = document.getElementById("team")

window.addEventListener("DOMContentLoaded", () => {
    handleHomePage()
})

window.addEventListener('hashchange', () => {
    const route = location.hash;
    switch(route){
        case "#home-page":
            handleHomePage()
            break;
        case "#history":
            handleHistory()
            break;
        case "#management":
            handleManagement()
            break;
        case "#products":
            handleProducts()
            break;
        case "#services":
            handleServices()
            break;
        case "#testimonial":
            handleTestimonial()
            break
        case "#team":
            handleTeam()
            break
        default:
            handleHomePage()
    }
})

const handleHomePage = () => {
    location.hash = "home-page"

    history.classList.add("not-view")
    management.classList.add("not-view")
    products.classList.add("not-view")
    services.classList.add("not-view")
    testimonial.classList.add("not-view")
    team.classList.add("not-view")

    homePage.classList.remove("not-view")
    homePage.classList.add("view")
}

const handleHistory = () => {
    location.hash = "history"

    homePage.classList.add("not-view")
    management.classList.add("not-view")
    products.classList.add("not-view")
    services.classList.add("not-view")
    testimonial.classList.add("not-view")
    team.classList.add("not-view")

    history.classList.remove("not-view")
    history.classList.add("view")
}

const handleManagement = () => {
    location.hash = "management"

    homePage.classList.add("not-view")
    history.classList.add("not-view")
    products.classList.add("not-view")
    services.classList.add("not-view")
    testimonial.classList.add("not-view")
    team.classList.add("not-view")

    management.classList.remove("not-view")
    management.classList.add("view")
}

const handleProducts = () => {
    location.hash = "products"

    homePage.classList.add("not-view")
    history.classList.add("not-view")
    management.classList.add("not-view")
    services.classList.add("not-view")
    testimonial.classList.add("not-view")
    team.classList.add("not-view")

    products.classList.remove("not-view")
    products.classList.add("view")
}

const handleServices = () => {
    location.hash = "services"

    homePage.classList.add("not-view")
    history.classList.add("not-view")
    management.classList.add("not-view")
    products.classList.add("not-view")
    testimonial.classList.add("not-view")
    team.classList.add("not-view")

    services.classList.remove("not-view")
    services.classList.add("view")
}

const handleTestimonial = () => {
    location.hash = "testimonial"

    homePage.classList.add("not-view")
    history.classList.add("not-view")
    management.classList.add("not-view")
    products.classList.add("not-view")
    services.classList.add("not-view")
    team.classList.add("not-view")

    testimonial.classList.remove("not-view")
    testimonial.classList.add("view")
}

const handleTeam = () => {
    location.hash = "team"

    homePage.classList.add("not-view")
    history.classList.add("not-view")
    management.classList.add("not-view")
    products.classList.add("not-view")
    services.classList.add("not-view")
    testimonial.classList.add("not-view")

    team.classList.remove("not-view")
    team.classList.add("view")
}