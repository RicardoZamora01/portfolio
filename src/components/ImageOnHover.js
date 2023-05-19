// import './ImageOnHover.css';
// import defaultImageSmall from './default-image-small.jpg';
import linkedin from "../assets/linkedin-64.svg";
import linkedinHover from "../assets/linkedin-64-black.svg";
import github from "../assets/github-64.svg";
import githubHover from "../assets/github-64-black.svg";

const imageUrls = {
  LinkedIn: {
    default: linkedin,
    hover: linkedinHover,
  },
  GitHub: {
    default: github,
    hover: githubHover
  },
};


const ImageOnHover = ({name, href}) => {
  const imageUrl = imageUrls[name]

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="relative">
      <picture className="image-container  cursor-pointer">
        <img src={imageUrl.default} alt="Default Gradient LinkedIn" className="default-image"/>
        <img src={imageUrl.hover} alt="Hover LinkedIn" className="hover-image rounded-xl"/>
      </picture>
    </a>

  );
}

export default ImageOnHover;
