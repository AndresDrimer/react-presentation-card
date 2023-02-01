import data from '../data'


export default function Name() {
  return (
    <div className="name-container">
      <h1 className="--name-name">{data.name}</h1>
      <h3 className="--name-position"> {data.position}</h3>
      <p className="--name-portfolio">
        {" "}
        <a href={data.portfolioSrc}>
          view portfolio
        </a>{" "}  /  
        <a href={data.resume}>
            get resume
        </a>{" "}</p>
      
    </div>
  );
}
