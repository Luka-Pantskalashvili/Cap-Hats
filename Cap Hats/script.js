const bar = document.getElementById("bar")
const close = document.getElementById("close")
const nav = document.getElementById("navbar")
const overlay = document.getElementById("overlay")


if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
        overlay.classList.add('active')
    })

}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
        overlay.classList.remove('active')
    })

}

// * blog part
document.querySelectorAll(".posts").forEach(post => {
    const heart = post.querySelector(".heartIcon");
    const heartText = post.querySelector(".like-text");
    
    heart.addEventListener("click", function() {
        const currentFill = getComputedStyle(heart).fill;
        const currentCount = parseInt(heartText.textContent) || 0;
        
        if (currentFill === "rgb(255, 255, 255)" || currentFill === "rgba(255, 255, 255, 1)") {
            heart.style.fill = "#e84a43";
            heartText.textContent = currentCount + 1;
        } else {
            heart.style.fill = "#FFFFFF";
            heartText.textContent = currentCount > 1 ? currentCount - 1 : "";
        }
    });
});
    
document.querySelectorAll(".posts").forEach(post => {
    const threeDots = post.querySelector(".dotIcon");
    const shareTab = post.querySelector(".to-share")

    threeDots.addEventListener("click", function(){
        const isHidden = getComputedStyle(shareTab).display === "none"

        if(isHidden){
            shareTab.style.display = "block";
        }

        else{
            shareTab.style.display = "none"
        }
    })
})

document.addEventListener("click", function(event) {
    document.querySelectorAll(".to-share").forEach(shareTab => {
        if (!shareTab.contains(event.target) && !event.target.classList.contains("dotIcon")) {
            shareTab.style.display = "none"; // Hide the share tab
        }
    });
});



// * blog part


