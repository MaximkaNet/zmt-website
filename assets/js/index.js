function fixViewHeight() {
    const root = document.documentElement
    let vh = window.innerHeight * 0.01
    root.style.setProperty("--vh", `${vh}px`)
}

function main() {
    const openVideo = document.querySelector("[data-open-video]")
    const closeVideo = document.querySelector("[data-close-video]")
    const modal = document.querySelector("[data-popup]")
    openVideo.addEventListener("click", () => {
        modal.classList.remove("hidden")
    })

    closeVideo.addEventListener("click", () => {
        modal.classList.add("hidden")
    }, true)

    window.addEventListener('resize', fixViewHeight)
    window.addEventListener("DOMContentLoaded", fixViewHeight)
}

main()