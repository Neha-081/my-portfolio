import React,{ useContext } from 'react';
import Marquee from "react-fast-marquee";

import './Skills.css'

import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsDataFrontend } from '../../data/skillsDataFrontend'
import { skillsDataBackend } from '../../data/skillsDataBackend'
import { hosting } from '../../data/hosting'
import { skillsImage } from '../../utils/skillsImage'

function Skills() {

    const { theme } = useContext(ThemeContext);

    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary30}`
    }

    return (
        <div className="skills" style={{backgroundColor: theme.secondary}}>
            <div className="skillsHeader">
                <h2 style={{color: theme.primary}}>Skills</h2>
            </div>
            <div className="skillsContainer" >
                <div className="skill--scroll">
                    <h1 className="skillsHeader specific">Front End</h1>
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {skillsDataFrontend.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 style={{color: theme.tertiary}}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>

          
                <div className="skill--scroll">
                <h1 className="skillsHeader specific">Back End</h1>
                    <Marquee
                           gradient={false} 
                           speed={80} 
                           pauseOnHover={true}
                           pauseOnClick={true} 
                           delay={0}
                           play={true} 
                           direction="left"
                    >
                        {skillsDataBackend.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 style={{color: theme.tertiary}}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>

                <div className="skill--scroll">
                <h1 className="skillsHeader specific">Hosting Platform</h1>
                    <Marquee
                           gradient={false} 
                           speed={80} 
                           pauseOnHover={true}
                           pauseOnClick={true} 
                           delay={0}
                           play={true} 
                           direction="left"
                    >
                        {hosting.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 style={{color: theme.tertiary}}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
           
           
        </div>
    )
}

export default Skills
