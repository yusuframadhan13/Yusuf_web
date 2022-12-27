function Fcheck_nav(){
    const nav_ul1 = document.querySelector("ul");
    const check_nav = document.querySelector("#check_nav");

    if(check_nav.checked == true){
        nav_ul1.classList.add("slidebar");
    }else {
        nav_ul1.classList.remove("slidebar");
    }
}

window.addEventListener('scroll', function() {
    if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
        document.querySelector('nav').style.backgroundColor="white";
    }else {
        document.querySelector('nav').style.backgroundColor="transparent";
    }
});

function tampil_alert(alert, comment){
    document.querySelector(`${alert}`).style.display = "flex";
    document.querySelector(`${alert}`).innerHTML = comment;

    setTimeout(function(){
        document.querySelector(`${alert}`).style.display = "none";
    },5000);
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbybgpBmUatfQdzics3d2acXN0V_NJrhF2Mj32DrAKWskgp4_lKCw7s8xNYcyZHZmnUv/exec'
const form = document.forms['Yusuf_web_contact']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))

        const input_name = document.querySelector("#input_name");
        const input_comment = document.querySelector("#input_comment");
    
        if(input_name.value == "" && input_comment.value == ""){
            tampil_alert("#alert-danger", "Data tidak terkirim");
        }else {
            tampil_alert("#alert-success", "Data berhasil terkirim");
            input_name.value = "";
            input_comment.value = "";
        }
})

document.querySelector("#btn_batal").addEventListener('click', function(){
    input_name.value = "";
    input_comment.value = "";
})

