const addForm=document.getElementById
("form-validaion ");
addForm.addEventListener("submit",(e)=>{
    if(addForm.checkValidity()===false){
        e.preventDefault();
        e.stopPropagation();
        addForm.classList.add('was-validate');
        return false
    }
})