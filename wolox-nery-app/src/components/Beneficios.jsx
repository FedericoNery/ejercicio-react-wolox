import React from 'react'
import BrainIcon from './icons/BrainIcon'
import DrinkSnacksIcon from './icons/DrinkSnacksIcon'
import HomeOfficeIcon from './icons/HomeOfficeIcon'
import HourIcon from './icons/HourIcon'
import IconWithLabel from './icons/IconWithLabel'
import LaptopIcon from './icons/LaptopIcon'
import WorkshopsIcon from './icons/WorkshopsIcon'

const Beneficios = props => {
    return <>
        <div className="flex-item align-center flex-auto">
            <h4>Entre los beneficios que ofrecemos se encuentran <span className="celeste">;)</span></h4>
        </div>
        <div className="flex-container align-center flex-auto">
            <IconWithLabel icon={<HourIcon />} text="Flexibilidad horaria" />
            <IconWithLabel icon={<HomeOfficeIcon />} text="Home Office" />
            <IconWithLabel icon={<WorkshopsIcon />} text="Capacitaciones y workshops" />
            <IconWithLabel icon={<DrinkSnacksIcon />} text="Snacks, frutas y bebidas gratis" />
            {/*MARGIN TOP 27px para laptop icon, ver si se puede fixear de otra manera*/}
            <IconWithLabel icon={<LaptopIcon />} text="Semana Remota" />
            <IconWithLabel icon={<BrainIcon />} text="Trabajar en últimas tecnologías" />
        </div>
    </>
};

export default Beneficios;