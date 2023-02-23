import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	header: {
		backgroundColor: '#deb5b545',
	},

	normal: {
		backgroundColor: '#f5f5f5ab',
	},

	rowChecked: {
		backgroundColor: "#e6e4e4",
	},
});

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
	const selected_style = isHeader ? headerStyle : normal;

	return (
		<tr style={selected_style} className={checked ? css(normal.rowChecked) : ""}>
			{isHeader ? (
				textSecondCell === null ? (
					<th colSpan={2}>{textFirstCell}</th>
				) : (
					<>
						<th>{textFirstCell}</th>
						<th>{textSecondCell}</th>
					</>
				)
			) : (
				<>
					<td>{textFirstCell}</td>
					<td>{textSecondCell}</td>
				</>
			)}
		</tr>
	);
};

CourseListRow.propTypes = {
	isHeader: PropTypes.bool,
	textFirstCell: PropTypes.string.isRequired,
	textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
	isHeader: false,
	textSecondCell: null,
};

export default CourseListRow;
