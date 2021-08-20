import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import styled from 'styled-components';

import { makeSelectUsers } from '../actions/HomePage/selectors';

const stateSelector = createSelector(makeSelectUsers, (users) => ({
    users,
}));

const UserLists = () => {
    const history = useHistory();
    const { users } = useSelector(stateSelector);

    const isEmptyUser = !users || (users.length === 0);

    if (isEmptyUser) return null;

    const goToUserPage = (id) => {
        history.push(`/user/${id}`);
    };

    return (
        <UserContainers>
            {users.map(user => {
                const { id, email, avatar, first_name, last_name } = user;
                return (
                    <UserWrapper key={id} onClick={() => goToUserPage(id)}>
                        <UserImage>
                            <img src={avatar} alt='' />
                        </UserImage>
                        <UserDetails>
                            {first_name} {last_name}
                        </UserDetails>
                        <UserEmail>{email}</UserEmail>
                    </UserWrapper>
                )
            })}
        </UserContainers>
    );
};

const UserContainers = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`;

const UserWrapper = styled.div`
    dispaly: flex;
    align-items: center;
    flex-direction: column;
`;

const UserImage = styled.div`
    width: 7em;
    height: 7em;

    img {
        width: 100%;
        height: 100%;
    }
`;

const UserDetails = styled.h3`
    text-align: left;
    font-size: 20px;
    color: #000;
    margin: 0;
`;

const UserEmail = styled.p`
    font-size: 16px;
    color: #333;
`;

export default UserLists;
