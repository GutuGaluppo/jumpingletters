import React, { useEffect } from 'react';

export default function JumpingLettersFunc() {
	useEffect(() => {
		fillLists();
	});

	function fillLists() {
		var letters = document.querySelectorAll('.letter');
		const random = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;

		console.log(letters)

		let scl = [];
		let avoColorList = [];

		letters.forEach(() => {
			scl.push(random(10, 20));
			avoColorList.push([random(30, 60), random(0, 10), random(200, 30)]);
		});

		const setColor = (el, r, g, b) => {
			el.style.color = `rgb(${r},${g},${b})`
		}

		letters.forEach((letter, index) => {
			letter.addEventListener('mouseenter', () => {
				letter.classList.add('isJumping');
				letter.classList.add('popUp');

				const newColorValueR = (avoColorList[index][0]);
				const newColorValueG = (avoColorList[index][1]);
				const newColorValueB = (avoColorList[index][2]);

				setColor(letter, (255 - newColorValueR), (255 - newColorValueG), (255 - newColorValueB));

				setTimeout(() => {
					letter.classList.remove('isJumping')
					letter.classList.add('popUp');

					setColor(letter, 255, 255, 255)
				}, 2000)
			})
		});
	}

	return (
		<div class="box">
			<div class="inner">
				<div className="letter" data-title="&ldquo;">&ldquo;</div>
				<div className="letter" data-title="B">B</div>
				<div className="letter" data-title="e">e</div>
				<div className="letter" data-title="&nbsp;">&nbsp;</div>
				<div className="letter" data-title="w">w</div>
				<div className="letter" data-title="a">a</div>
				<div className="letter" data-title="t">t</div>
				<div className="letter" data-title="e">e</div>
				<div className="letter" data-title="r">r</div>
				<div className="letter" data-title=",">,</div>
				<div className="letter" data-title="&nbsp;">&nbsp;</div>
				<br />
				<div className="letter" data-title="&nbsp;">&nbsp;</div>
				<div className="letter" data-title="&nbsp;">&nbsp;</div>
				<div className="letter" data-title="&nbsp;">&nbsp;</div>
				<div className="letter" data-title="&nbsp;">&nbsp;</div>
				<div className="letter" data-title="&nbsp;">&nbsp;</div>
				<div className="letter" data-title="m">m</div>
				<div className="letter" data-title="y">y</div>
				<div className="letter" data-title="&nbsp;">&nbsp;</div>
				<div className="letter" data-title="f">f</div>
				<div className="letter" data-title="r">r</div>
				<div className="letter" data-title="i">i</div>
				<div className="letter" data-title="e">e</div>
				<div className="letter" data-title="n">n</div>
				<div className="letter" data-title="d">d</div>
				<div className="letter" data-title="!">!</div>
				<div className="letter" data-title="&rdquo;">&rdquo;</div>
				<br />
			</div>
		</div>
	);
}