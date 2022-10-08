import { h } from 'preact';
import ReactPlayer from 'react-player';
import style from './style.css';

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
		<ReactPlayer url="https://www.youtube.com/watch?v=jfKfPfyJRdk" /> 
	</div>
);

export default Home;
