var Contact = /** @class */ (function () {
    function Contact(nom, prenom, email, telephone) {
        this.id = Contact.totalContacts++;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.telephone = telephone;
    }
    Contact.totalContacts = 0;
    return Contact;
}());
var contacts = [];
document.getElementById("contactForm").addEventListener('submit', function (e) {
    e.preventDefault();
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;
    var telephone = document.getElementById("telephone").value;
    var contact = new Contact(nom, prenom, email, telephone);
    contacts.push(contact);
    afficherContacts();
    majNombreContacts();
});
function afficherContacts() {
    var listeContacts = document.getElementById("listeContacts");
    listeContacts.innerHTML = '';
    var _loop_1 = function (contact) {
        var li = document.createElement('li');
        li.textContent = "".concat(contact.id, ". ").concat(contact.nom, " ").concat(contact.prenom, " - ").concat(contact.email, " - ").concat(contact.telephone);
        var btnSupprimer = document.createElement('button');
        btnSupprimer.textContent = "Supprimer";
        btnSupprimer.onclick = function () {
            var index = contacts.indexOf(contact);
            contacts.splice(index, 1);
            afficherContacts();
            majNombreContacts();
        };
        li.appendChild(btnSupprimer);
        listeContacts.appendChild(li);
    };
    for (var _i = 0, contacts_1 = contacts; _i < contacts_1.length; _i++) {
        var contact = contacts_1[_i];
        _loop_1(contact);
    }
}
function majNombreContacts() {
    var div = document.getElementById("nombreContacts");
    div.textContent = "Nombre de contacts: ".concat(contacts.length);
}
function triContacts() {
    var option = document.getElementById("triOption").value;
    switch (option) {
        case 'id':
            contacts.sort(function (a, b) { return a.id - b.id; });
            break;
        case 'nom':
            contacts.sort(function (a, b) { return a.nom.localeCompare(b.nom); });
            break;
        case 'prenom':
            contacts.sort(function (a, b) { return a.prenom.localeCompare(b.prenom); });
            break;
    }
    afficherContacts();
}
