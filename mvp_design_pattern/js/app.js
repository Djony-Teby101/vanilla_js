// Point d'entrée de l'application
document.addEventListener('DOMContentLoaded', () => {
    // Création des composants MVP
    const model = new PersonModel();
    const view = new PersonView();
    const presenter = new PersonPresenter(model, view);

    console.log('Application MVP démarrée avec succès!');
});