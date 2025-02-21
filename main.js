const $ = (e)=>document.querySelector(e);
const $all = (e)=>document.querySelectorAll(e);
const make = (e)=>document.createElement(e);

function CrearHistoriaLaboral (){

    const mainList = $('.bottom-side .historial')

    HistorialLaboral.forEach(element => {
        const main = make('li');
        const list = make('ul');
        const header = make('header');
        const span1 = make('span');
        const span2 = make('span');

        main.classList.add('main-li');

        span1.innerText = `${element.puesto}, ${element.Finico} - ${element.Fcese}`;
        span2.innerText = `${element.nombre} - ${element.lugar}`;
        header.append(span1,span2);

        element.actividades.forEach(e => {
            const li = make('li');
            const h4 = make('h4');
            h4.innerText = e;
            li.append(h4);
            list.append(li);
        });

        main.append(header,list);
        mainList.append(main);
    });
}

function CrearAptitudes (){
    const container = $('.left-side .skills')

    datos.aptitudes.forEach(element => {
        const li = make('li');
        const h5 = make('h5');

        h5.innerText = element;
        li.append(h5);
        container.append(li);
    });
}

function CrearDatosDeContacto(){
    const html = {
        nombres: $('main header .name'),
        apellidos: $('main header .lastname')
    }

    const contacto = $('.left-side .contact');

    html.nombres.innerText = datos.Nombres;
    html.apellidos.innerText = datos.Apellidos;

    
    const direccion = make('li');
    const celular = make('li');
    const correo = make('li');
    const nacimiento = make('li');

    //datos
    direccion.innerText = datos.direccion;
    celular.innerText = datos.celular;
    correo.innerText = datos.correo;
    nacimiento.innerText = datos.Fnacimiento;
    contacto.append(direccion,celular,correo,nacimiento)
    
}


function LoadData(){
    CrearHistoriaLaboral();
    CrearAptitudes();
    CrearDatosDeContacto();
}

LoadData();