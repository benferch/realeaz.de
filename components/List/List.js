import styles from './List.module.sass';
import PropTypes from 'prop-types';

export default function List({ type, children }) {
	if (type == 'ordered') {
		return <ol>{children}</ol>;
	} else if (type == 'unordered') {
		return <ul>{children}</ul>;
	} else {
		return <ul>{children}</ul>;
	}
}

List.propTypes = {
	type: PropTypes.oneOf(['ordered', 'unordered']),
};
