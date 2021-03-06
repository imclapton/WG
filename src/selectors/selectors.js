import {createSelector} from 'reselect';

const usersSelector = state => state.users;

export const usersWithRatingSelector = createSelector(
	usersSelector,
	(users) => {
		return users.map(user => {
			return {...user, ...{
				rating: (user.winsTotal / user.daysTotal).toFixed(2)
			}}
		});
	}
);

const nameASelector = state => state.selectedUsers.nameA;
export const userASelector = createSelector(
	usersWithRatingSelector,
	nameASelector,
	(users, nameA) => {
		return users.find(user => user.name === nameA && !user.isHidden);
	}
);

const nameBSelector = state => state.selectedUsers.nameB;
export const userBSelector = createSelector(
	usersWithRatingSelector,
	nameBSelector,
	(users, nameB) => {
		return users.find(user => user.name === nameB && !user.isHidden);
	}
);

const columnsSelector = state => state.columns;
export const columnsWithoutNameSelector = createSelector(
	columnsSelector,
	(columns) => {
		return columns.filter(column => column.id !== 'name');
	}
);