class laburo {
    constructor({
        nombre, Finico,
        Fcese, lugar='lima',
        actividades, 
        puesto='Operario de producción'
    }){
        this.nombre = nombre;
        this.Finico = Finico;
        this.Fcese = Fcese;
        this.actividades = actividades;
        this.lugar = lugar;
        this.puesto = puesto;
    }
}

const datos = {
    Nombres: 'Anderson Yoel',
    Apellidos: 'Ollarves Martinez',
    direccion: '🔰 Jr. Caracas 298, Manzana O, Lote 18, Ate., 15495, Lima',
    celular: '📱 944410009',
    correo: '📧 martinez.anderson.0014@gmail.com',
    Fnacimiento: '🎂 15/01/1995',
    resumenProfesional: 'Joven con pasión por su profesión, excelente capacidad de organización y facilidad para el trabajo en equipo. Persona muy adaptable a todo tipo de entornos y clara orientación a objetivos. Desearía desarrollarme profesionalmente en una empresa con proyección de futuro.',
    aptitudes: [
        'Aprendizaje continuo',
        'Flexibilidad horaria',
        'Eficiente y puntual',
        'Habilidad para manipular productos',
        'Trabajo en equipo',
        'Procesos industriales',
        'Manejo de maquinaria',
        'Responsabilidad',
        'Resolución de problemas',
        'Predisposición para aprender'
    ]
}

const Formacion = [
    {
        nombre: 'E.T.R.I Astillero Escuela',
        titulo: 'Bachiller tecnico: mecánica industrial',
        lugar: 'Venezuela',
        fecha: '2017'
    },
    {
        nombre: 'Instituto Educativo Pedro Antonio Leleux',
        titulo: 'Educación Primaria',
        lugar: 'Venezuela',
        fecha: '2011'
    }
]

const HistorialLaboral = [
    new laburo({
        nombre: 'NGR Servicios compartidos',
        Finico: '11/2024',
        Fcese : '02/2025',
        actividades: [
            'Limpieza de areas',
            'Trabajo con cargas pesadas',
            'Trabajo en frío',
            'Manipulación de masa para pizzas',
            'Operador de maquina (Mezcla)',
        ]
    }),

    new laburo({
        nombre: 'Medifarma',
        puesto: 'Auxiliar de producción',
        Finico: '02/2022',
        Fcese : '03/2024',
        actividades: [
            'Acondicionado de productos farmacéuticos grandes ( Galoneras de Bicardial 4L / 5L ).',
            'Limpieza de áreas de trabajo.',
            'Mantener organizada y limpia el área durante el proceso',
            'Control de documentos de los procesos.',
            'Manejo del sistema SAP.',
            'Uso de transpaleta semiautomática.'
        ]
    }),

    new laburo({
        nombre: 'Obiettivo Lavovor los Andes, sede Backus',
        Finico: '10/2019',
        Fcese : '11/2021',
        actividades: [
            'Clasificación de envases en fajas transportadoras( Botellas de vidrio ).',
            'Organizar el material( Cajas de cerveza o  gaseosas ) en parihuelas.',
            'Uso de transpaleta manual para trasladar las parihuelas hasta el almacén.',
            'Picking de producto terminado.',
            'Carga y descarga de productos ( Cerveza, Agua, Gaseosas ).',
            'Mantener organizada el área de trabajo.'
        ]    
    }),

]
