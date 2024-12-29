import { useState, useEffect, useRef } from 'react';
import './AnimateOnScroll.scss';

const AnimateOnScroll = ({ children, direction }) => {
	const [isVisible, setIsVisible] = useState(false);
	const elementRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				if (entry.isIntersecting && !isVisible) {
					setIsVisible(true); // Animacja uruchamia się tylko raz
				}
			},
			{ threshold: 0.5 } // Element musi być widoczny w co najmniej 50%
		);

		const currentElement = elementRef.current;
		if (currentElement) {
			observer.observe(currentElement);
		}

		return () => {
			if (currentElement) {
				observer.unobserve(currentElement);
			}
		};
	}, [isVisible]); // useEffect uruchomi się, kiedy isVisible się zmieni

	return (
		<div ref={elementRef} className={`animateOnScroll-${direction} ${isVisible ? 'animate' : ''}`}>
			{children}
		</div>
	);
};

export default AnimateOnScroll;
