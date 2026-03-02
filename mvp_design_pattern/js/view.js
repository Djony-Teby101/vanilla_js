// View - Gère l'interface utilisateur et les événements utilisateur
class PersonView {
    constructor() {
        // Éléments du DOM
        this.form = document.getElementById('personForm');
        this.nomInput = document.getElementById('nom');
        this.prenomInput = document.getElementById('prenom');
        this.ageInput = document.getElementById('age');
        this.villeInput = document.getElementById('ville');
        this.personList = document.getElementById('personList');
        this.totalCount = document.getElementById('totalCount');
        this.averageAge = document.getElementById('averageAge');

        // Callbacks pour les événements
        this.addPersonCallback = null;
        this.deletePersonCallback = null;
    }

    // Initialiser les événements
    initialize() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (this.addPersonCallback) {
                const personData = {
                    nom: this.nomInput.value,
                    prenom: this.prenomInput.value,
                    age: this.ageInput.value,
                    ville: this.villeInput.value
                };
                this.addPersonCallback(personData);
            }
        });
    }

    // Afficher la liste des personnes
    displayPersons(persons) {
        if (persons.length === 0) {
            this.personList.innerHTML = '<div class="empty-message">Aucune personne enregistrée</div>';
            return;
        }

        let html = '';
        persons.forEach(person => {
            html += `
                <div class="person-card" data-id="${person.id}">
                    <div class="person-info">
                        <div class="person-name">${person.prenom} ${person.nom}</div>
                        <div class="person-details">Âge: ${person.age} ans | Ville: ${person.ville}</div>
                    </div>
                    <button class="delete-btn" data-id="${person.id}">Supprimer</button>
                </div>
            `;
        });

        this.personList.innerHTML = html;

        // Ajouter les événements de suppression
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = parseInt(btn.dataset.id);
                if (this.deletePersonCallback) {
                    this.deletePersonCallback(id);
                }
            });
        });
    }

    // Mettre à jour les statistiques
    updateStats(total, averageAge) {
        this.totalCount.textContent = total;
        this.averageAge.textContent = averageAge;
    }

    // Réinitialiser le formulaire
    resetForm() {
        this.form.reset();
    }

    // Afficher un message d'erreur
    showError(message) {
        alert('Erreur: ' + message);
    }

    // Définir le callback pour l'ajout
    setAddPersonCallback(callback) {
        this.addPersonCallback = callback;
    }

    // Définir le callback pour la suppression
    setDeletePersonCallback(callback) {
        this.deletePersonCallback = callback;
    }
}