import beach from '../images/beach.jpg';
import forestLake from '../images/forest-and-lake.jpg';
import mountainLake from '../images/mountain-and-lake.jpg';
import winterScene from '../images/winter-scene.jpg';
import fisherYatesShuffle from '../FisherYatesShuffle.jsx';

function BackgroundSelector() {

  const backgrounds = [beach, forestLake, mountainLake, winterScene];
  const shuffledArray = fisherYatesShuffle(backgrounds);

  return shuffledArray;

}

export default BackgroundSelector;