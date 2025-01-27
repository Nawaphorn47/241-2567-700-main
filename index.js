function submitData(){
    let firstNameDOM = document.querySelector('input[name="firstName"]');
    let lastNameDOM = document.querySelector('input[name="lastName"]');
    let ageDOM = document.querySelector('input[name="age"]');
    let genderDOM = document.querySelector('input[name="gender"]');
    let interestDOM = document.querySelector('input[name="interest"]');
    let descriptionDOM = document.querySelector('input[name="description"]');

    let interest = '';
    for(let i=0;i<interestDOMs.length;i++){
        interest += interestDOMs[i].value
        if(i!=interestDOMs.length-1){
            interest += ',';
        }
    }

    let userData={
        firstName:firstNameDOM.value,
        lastName:lastNameDOM.value,
        age:ageDOM.value,
        genderDOM:genderDOM.value,
        descriptionDOM:descriptionDOM.value,
    }
    console.log("submitData",userData);
}