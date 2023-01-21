import { useState } from 'react';
import { Button } from 'react-bootstrap';
import getJoke from '../api/jokeData';
import JokeButton from '../components/JokeButton';

function Home() {
  const [joke, setJoke] = useState({});
  const [btnText, setBtnText] = useState('Get A Joke');

  const setButton = (text) => {
    setBtnText(text);
  };

  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery,
      });
    });

    setButton('Get Punchline');
  };

  return (
    <div>
      <JokeButton joke={joke} btnText={btnText} />
      {btnText === 'Get A Joke' || btnText === 'Get Another Joke'
        ? (<Button type="button" onClick={getAJoke}>{btnText}</Button>)
        : <Button type="button" onClick={() => setButton('Get Another Joke')}>{btnText}</Button>}
    </div>
  );
}

export default Home;
