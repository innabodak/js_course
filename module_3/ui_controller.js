
export default  class UIController {
    constructor(){
        this.inputCard = document.getElementById("inpCard");
        this.inputName = document.getElementById("inpName");
        this.getInfobtn = document.getElementById("getInfo");
        this.cardPattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
        this.namePattern = /^[A-z]{2,}$/;
    }

    cardValidation(){
        this.inputCard.addEventListener("blur", () => {
            if (this.inputCard.value === ""){
                this.inputCard.style.border = "1px solid lightgrey";
            } 
            else if(this.cardPattern.test(this.inputCard.value)){
                this.inputCard.style.border = "2px solid green";
            } 
            else {
                this.inputCard.style.border = "2px solid red";
            }
        });
    }
    
    nameValidation(){
        this.inputName.addEventListener("blur", () => {
            if (!this.inputName.value){
                this.inputName.style.border = "1px solid lightgrey";
            } 
            else if(this.namePattern.test(this.inputName.value)){
                this.inputName.style.border = "2px solid green";
            } 
            else {
                this.inputName.style.border = "2px solid red";
            }
        });
    }

    getInfo(){
        this.getInfobtn.addEventListener("blur", () => {
            if(this.cardPattern.test(this.inputCard.value)
                && this.namePattern.test(this.inputName.value)) {
                this.getInfobtn.removeAttribute("disabled");
            }
        })

        this.cardNum = this.inputCard.value.split("-").join("");
        this.getInfobtn.addEventListener("click", () => {
            return fetch(`https://api.bincodes.com/cc/?format=json&api_key=d96ca493f5be297f8c304a87edcdf6a8&cc=${this.cardNum}`)
            .then(res => {
                if(res.status === 200){
                    return res.json();
                }
                return Promise.reject(res.status);
            })
        })
    }
}
