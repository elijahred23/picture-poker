import cppImage from '../assets/cpp.png';
import phpImage from '../assets/php.png';
import pythonImage from '../assets/python.png';
import rustImage from '../assets/rust.png';
import javascriptImage from '../assets/javascript.png';
import csharpImage from '../assets/csharp.png';
import backCardImage from '../assets/back_card.png';

const pictureTypeSources = {
    "cpp": cppImage,
    "php": phpImage,
    "python": pythonImage,
    "javascript": javascriptImage,
    "csharp": csharpImage,
    "rust": rustImage,
    "back_card": backCardImage
}

const ranks = {
    "rust": 6,
    "cpp" : 5,
    "javascript" : 4,
    "python" : 3,
    "csharp" : 2,
    "php": 1,
}

const getRank = (pictureType) => {
    return ranks[pictureType]
}

const pictureTypes = ["rust", "cpp", "javascript", "python", "csharp", "php" ]; 

const getPictureSource = (pictureType)=>{
    return pictureTypeSources[pictureType] ?? null;
}

export {
    pictureTypes,
    getPictureSource, 
    getRank,
};