//* 1.Stampare a schermo un messaggio all’interno di un h1, utilizzando i data di Vue.
//ToDo Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const root = new Vue( {
    el: '#root',

    //Data
    data: {
        title: 'Hello Vue Js!',
        text: 'Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.',
        image:'https://picsum.photos/1000/400',
        textImage: 'Bo è lorem picsum',
        classList: 'd-flex content-center',
        spacing: 'py-20',
        titleClass: 'title',
    },
} );