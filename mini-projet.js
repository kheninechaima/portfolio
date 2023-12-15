document.addEventListener("DOMContentLoaded", function () 
{
    var logo = document.querySelector("img");
    logo.addEventListener("mouseover", function () {
        this.style.transform = "rotate(360deg)";
    });

    var dateOfBirthInput = document.querySelector("input[name='commentaire']");
    commentaireInput.addEventListener("input", function () 
    {
        var dateOfBirthRegex = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!dateOfBirthRegex.test(this.value)) {
            alert("Format de commentaire incorrect.");
            this.value = ""; 
        }
    });
});