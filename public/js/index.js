const navBar = document.querySelector(".navbar");
        window.onscroll = () => {
            this.scrollY > 20 ? navBar.classList.add("sticky") : navBar.classList.remove("sticky"); 
        }

