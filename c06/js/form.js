var elForm, elSelectPackage, elPackageHint, elTerms, elTermHint;
elForm          = document.getElementById('formSignup');
elSelectPackage = document.getElementById('package');
elPackageHint   = document.getElementById('packageHint');
elTerms         = document.getElementById('terms');
elTermHint      = document.getElementById('termsHint');

function packageHint() {
    var pack = this.options[this.selectedIndex].value;

    if(pack === 'monthly') {
        elPackageHint.innerHTML = "Desconto de 10$ se você pagar 1 ano.";
    } else {
        elPackageHint.innerHTML = "Boa escolha!";
    }

}

function checkTerms(event) {
    if(!elTerms.checked) {
        elTermHint.innerHTML = 'Você deve aceitar os termos!';
        event.preventDefault();
    }
}

elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);
