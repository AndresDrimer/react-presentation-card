import data from '../data'

export default function Footer() {
  return (
    <footer>
      <a href="mailto:andresdrimer@hotmail.com" target="_blank" rel="noopener noreferrer">
        {" "}
        <i class="fa-solid fa-envelope"></i>
      </a>
      <a href={data.linkedin} target="_blank">
        {" "}
        <i class="fa-brands fa-linkedin"></i>
      </a>
      <a href={data.github} target="_blank">
        {" "}
        <i class="fa-brands fa-github"></i>
      </a>
      <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
        {" "}
        <i class="fa-solid fa-star"></i>
      </a>
    </footer>
  );
}
