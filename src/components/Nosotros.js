import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"

import javascript from "../assets/skills/javascript.svg"
import bash from "../assets/skills/bash.svg"
import kvm from "../assets/skills/kvm.svg"
import linux from "../assets/skills/linux.svg"
import python from "../assets/skills/python.svg"
import reactIcon from "../assets/skills/react.svg"
import tailwind from "../assets/skills/tailwind.svg"
import mikrotik from "../assets/skills/mikrotik.svg"
import kubernetes from "../assets/skills/kubernetes.svg"
import ansible from "../assets/skills/ansible.svg"
import windows from "../assets/skills/windows.svg"
import react from "../assets/skills/react.svg"
import cisco from "../assets/skills/cisco.svg"
import docker from "../assets/skills/docker.svg"
import git from "../assets/skills/git.svg"
import express from "../assets/skills/express.svg"
import gitlab from "../assets/skills/gitlab.svg"

import hr from "../assets/curve-hr.svg"

export default function Nosotros() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
      };

    return (
        <div id="about" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Nosotros</h1>
            <p className="font-light text-gray-400">Conoce a nuestro equipo</p>

            <div className="mt-4">
                <Slider {...settings}>
                <SkillCard name="Vicente Araos" experience="Presidente" curso="III°C" img={linux} />
                <SkillCard name="Martina Uribe" experience="Vicepresidenta" curso="III°C" img={bash} />
                <SkillCard name="Florencia Ripetti" experience="Tesorera" curso="III°C" img={python} />
                <SkillCard name="Àlvaro Paredes" experience="Secretario" curso="III°D" img={javascript} />
                <SkillCard name="Santiago Carbonetti" experience="Delegado de Pastoral" curso="III°C" img={reactIcon} />
                <SkillCard name="Aidan Shyrne" experience="Delegado de Convivencia" curso="II°C" img={kvm} />
                <SkillCard name="Isidora Lizama" experience="Delegada de Cultura y Medioambiente" curso="II°A" img={mikrotik} />
                <SkillCard name="María Jesús Benavides" experience="Delegada de Ciclo Menor" curso="II°A" img={mikrotik} />
                <SkillCard name="Fernando González" experience="Delegado de Deporte" curso="I°B" img={tailwind} />
                </Slider>
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}