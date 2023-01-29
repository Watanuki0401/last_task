var btn = document.querySelector('.hoge');

btn.onclick = () => {
    var address = document.querySelector('#address');
    var subject = "Contact" + document.querySelector('#name').value;
    var body = document.querySelector("#detail");
    location.href = 'mailto:' + address.value + '?subject=' + subject + '&body=' + body.value;
}