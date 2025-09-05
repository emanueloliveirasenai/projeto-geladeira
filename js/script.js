function validaForm(){
    if(document.getElementById('nome').value == ""){

        alert("Preencha o campo Nome:");
        document.frmfaleconosco.txtnome.focus();
        return false;

    }else if(document.getElementById('fone').value == ""){

        alert("Preencha o campo Telefone:");
        document.frmfaleconosco.txtfone.focus();
        return false;

    }else if(document.getElementById('email').value == ""){

        alert("Preencha o campo E-mail:");
        document.frmfaleconosco.txtemail.focus();
        return false;
    }

    var nome = document.frmfaleconosco.txtnome.value;
    var expRegNome = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");

    if(!expRegNome.test(nome)){
        alert("Preencha o campo Nome corretamente.");
        document,frmfaleconosco.txtnome.focus();
        return false;
    }

    var fone = document.getElementById('fone').value;
    var expRegFone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");

    if(!expRegFone.test(fone)){
        alert("Preencha o campo Telefone corretamente.");
        document.getElementById('fone').focus();
        return false;
    }

}