document.addEventListener('click', async (e) => {

    if (e.target.matches('#btnEliminar')) {
        
        try {
            const $btnEliminar = document.querySelector('#btnEliminar');
            const id = $btnEliminar.dataset.id;

            const data = await fetch(`/${id}`, {
                method: 'delete'
            })

            const res = await data.json();

            if (res.estado) {
                window.location.href = '/allarticulos';
            } else {
                console.log(res);
            }
            
        } catch (error) {
            console.log(error);
        }
    }

})

const $formularioEditar = document.querySelector('#formularioEditar');

$formularioEditar.addEventListener('submit', async (e) => {

    e.preventDefault();

    const titulo = document.querySelector('#titulo').value;
    const descripcion = document.querySelector('#descripcion').value;
    const parrafo = document.querySelector('#parrafo').value;
    const author = document.querySelector('#author').value;
    const id = $formularioEditar.dataset.id;

    try {

        const data = await fetch(`/${id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({titulo, descripcion, parrafo, author})

        })

        const res = await data.json();

        if(res.estado) {
            window.location.href = `/detalle/${id}`;
        } else {
            console.log(res);
        }
        
    } catch (error) {
        console.log(error);
    }

})