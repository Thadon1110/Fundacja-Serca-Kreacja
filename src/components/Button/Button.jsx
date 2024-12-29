import './Button.scss';

export function Button({ children, href, target }) {
	return (
		<a className='default-button' href={href} target={target ? target : ''} rel={target ? 'noopener noreferrer' : ''}>
			{children}
		</a>
	);
}
