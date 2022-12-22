const phone = document.getElementById('phone')

phone.addEventListener('keypress', (e) => maskPhone(e.target.value));
phone.addEventListener('change', (e) => maskPhone(e.target.value));

const maskPhone = (value) => {
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    phone.value = value;
}
