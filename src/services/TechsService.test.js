import {applyFilter} from './TechsService'
import {ORDER} from '../utils/enums'

const listado = [
    {
        "tech": "Node",
        "type": "Back-End",
    },
    {
        "tech": "React",
        "type": "Front-End",
    },
    {
        "tech": "Android",
        "type": "Mobile",
    }
]

test('Aplica filtro al listado de techs quedando todas las opciones', () => {
    const filter = {}
    expect(applyFilter(listado, filter)).toStrictEqual(listado);
});

test('Aplica filtro al listado de techs quedando solo una opción por nombre', () => {
    const filter = {
        nombre: "React"
    }

    const resultado = [{
        "tech": "React",
        "type": "Front-End",
    }]

    expect(applyFilter(listado, filter)).toStrictEqual(resultado);
});

test('Aplica filtro al listado de techs quedando las opciones ordenadas en forma ascendente', () => {
    const resultado = [{
        "tech": "Android",
        "type": "Mobile",
    },{
        "tech": "Node",
        "type": "Back-End",
    },
    {
        "tech": "React",
        "type": "Front-End",
    }]
    const filter = {
        ordenarPorNombre: ORDER.ASCENDENTE
    }
    expect(applyFilter(listado, filter)).toStrictEqual(resultado);
});

test('Aplica filtro al listado de techs quedando las opciones ordenadas en forma descendente', () => {
    const filter = {
        ordenarPorNombre: ORDER.DESCENDENTE
    }

    const resultado = [
        {
            "tech": "React",
            "type": "Front-End",
        },{
            "tech": "Node",
            "type": "Back-End",
        },
        {
            "tech": "Android",
            "type": "Mobile",
        }]
    expect(applyFilter(listado, filter)).toStrictEqual(resultado);
});

test('Aplica filtro al listado de techs quedando las opciones de un solo tipo', () => {
    const filter = {
        tipos: ["Front-End"]
    }

    //TODO por qué no funciona listado[1]
    const resultado = [{
        "tech": "React",
        "type": "Front-End",
    }]
    expect(applyFilter(listado, filter)).toStrictEqual(resultado);
});

test('Aplica filtro al listado de techs quedando las opciones de un varios tipos', () => {
    const filter = {
        tipos: ["Front-End", "Back-End","Mobile"]
    }
    expect(applyFilter(listado, filter)).toStrictEqual(listado);
});