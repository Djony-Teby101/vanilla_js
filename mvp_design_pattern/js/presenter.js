// Presenter - Fait le lien entre le Model et la View
class PersonPresenter {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Configurer les callbacks de la vue
        this.view.setAddPersonCallback((personData) => this.handleAddPerson(personData));
        this.view.setDeletePersonCallback((id) => this.handleDeletePerson(id));

        // Initialiser la vue
        this.view.initialize();

        // Afficher les données initiales
        this.refreshView();
    }

    // Gérer l'ajout d'une personne
    handleAddPerson(personData) {
        try {
            const newPerson = this.model.addPerson(personData);
            this.view.resetForm();
            this.refreshView();
            console.log('Personne ajoutée:', newPerson);
        } catch (error) {
            this.view.showError(error.message);
        }
    }

    // Gérer la suppression d'une personne
    handleDeletePerson(id) {
        if (confirm('Êtes-vous sûr de vouloir supprimer cette personne ?')) {
            const deleted = this.model.deletePerson(id);
            if (deleted) {
                this.refreshView();
                console.log('Personne supprimée, ID:', id);
            }
        }
    }

    // Rafraîchir toutes les vues
    refreshView() {
        // Récupérer les données du modèle
        const persons = this.model.getPersons();
        const total = persons.length;
        const averageAge = this.model.getAverageAge();

        // Mettre à jour la vue
        this.view.displayPersons(persons);
        this.view.updateStats(total, averageAge);
    }
}