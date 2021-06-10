add a favicon.ico



<!-- from Manifest.json - icons -->
,
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
Background Selector removed for now -

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