function fixViewHeight() {
    const root = document.documentElement
    let vh = window.innerHeight * 0.01
    root.style.setProperty("--vh", `${vh}px`)
}

function main() {
    const openVideo = document.querySelector("[data-open-video]")
    const closeVideo = document.querySelector("[data-close-video]")
    const modal = document.querySelector("[data-popup]")

    const iframePlayer = document.getElementById("popup-player")
    const modalPlayerSrc = iframePlayer.src

    openVideo.addEventListener("click", () => {
        if (iframePlayer.src !== modalPlayerSrc)
            iframePlayer.src = modalPlayerSrc
        modal.classList.toggle("hidden")
        document.body.classList.toggle("is_hidden")
    })

    closeVideo.addEventListener("click", () => {
        // Reload iframe
        iframePlayer.src = ""
        modal.classList.toggle("hidden")
        document.body.classList.toggle("is_hidden")
    }, true)

    window.addEventListener("orientationchange", fixViewHeight)
    window.addEventListener("DOMContentLoaded", fixViewHeight)
}

main()