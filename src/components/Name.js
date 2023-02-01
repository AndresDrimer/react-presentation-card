import data from '../data'
export default function Name(){
    return(
        <div className="name-container">
        <h1 className="--name-name">Andrés Drimer</h1>
        <h3 className="--name-position"> Frontend Developer</h3>
        <p className="--name-portfolio"> <a href={data.portfolioSrc} target="_blank" rel="noopener noreferrer">portfolio</a> / <a href={data.resume} target="_blank" rel="noopener noreferrer"> resume</a></p>
        </div>
    )
}