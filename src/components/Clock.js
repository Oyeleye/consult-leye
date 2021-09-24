import React, {useRef, useEffect} from 'react';
import Box from '@material-ui/core/Box';


function App() {
	const [updateCounter, setUpdateCounter] = React.useState(0);
	const canvasRef = useRef(null);
	const timeForScreenReaders = new Intl.DateTimeFormat(
		navigator.language, 
		{hour: 'numeric', minute: 'numeric'}
	).format(new Date());
	
	const drawClock = (ctx, time) => {
		let w = ctx.canvas.width;
		let h = ctx.canvas.height;
		ctx.clearRect(0, 0, w, h);
		
		ctx.fillStyle = "#1010AF";
		
		// Hour marks 
		ctx.save();;
		ctx.translate(w / 2, h / 2); // origin to centre of the canvas
		ctx.save();
		for (let i = 0; i < 12; i++) {
			ctx.fillRect(-w / 24, h / 2 - h / 12, w / 12, h / 12);
			ctx.rotate(Math.PI * 2 / 12); // rotate (around centre)
		}
		ctx.restore();
		
		// clock hands
		ctx.save();
		ctx.rotate(time.getHours() * (Math.PI * 2 / 12) + time.getMinutes() * (Math.PI * 2 / 12 / 60) + Math.PI); // hour hand, rotate per time
		drawHand(ctx, w / 12, h / 12 * 3);
		ctx.restore();
		ctx.save();
		ctx.rotate(time.getMinutes() * (Math.PI * 2 / 60) + Math.PI); // minutes hand, rotate per time
		drawHand(ctx, w / 16, h / 12 * 5);
		ctx.restore();
		ctx.save();
		ctx.rotate(time.getSeconds() * (Math.PI * 2 / 60) + Math.PI); // seconds hand, rotate per time
		drawHand(ctx, w / 48, h / 12 * 5);
		ctx.restore();
		
		ctx.restore();
	}
	
	const drawHand = (ctx, width, length) => {
		ctx.beginPath();
		ctx.moveTo(width / 2, 0);
		ctx.lineTo(-width / 2, 0);
		ctx.lineTo(0, length);
		ctx.closePath();
		ctx.fill();
	}
	
	useEffect(() => {
		let ctx = canvasRef.current.getContext('2d');
		drawClock(ctx, new Date());
		setTimeout(() => {setUpdateCounter(updateCounter + 1)}, 1000);
	});
	
	return (
		<Box>
			<Box style={{zIndex: 1, position: "fixed", right: 50, top: 110}} className='hide-clock'>
				<canvas
					width={200}
					height={200}
					ref={canvasRef}
				>
					Current time is {timeForScreenReaders}
				</canvas>
			</Box>
		</Box>
	);
}

export default App;
