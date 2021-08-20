import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { createSelector } from 'reselect';
import styled from 'styled-components';

import { makeSelectUser } from '../actions/UserPage/selectors';
import { setUser } from '../actions/UserPage/userActions';
import { getUser } from '../services/userService';

const stateSelector = createSelector(makeSelectUser, (user) => ({
    user,
}));

const actionDispatch = (dispatch) => ({
    setUser: (user) => dispatch(setUser(user)),
});

const User = () => {
    const { id } = useParams();
    const { user } = useSelector(stateSelector);
    const { setUser } = actionDispatch(useDispatch());

    const fetchUser = useCallback(async () => {
        try {
            const { data: { data } } = await getUser(id);
            setUser(data)
        } catch (err) {
            console.error(err);
        }
    }, [id, setUser]);

    useEffect(() => {
        if (id && id !== '')
            fetchUser();
    }, [fetchUser, id]);

    if (!user) {
        return <div>Loading...</div>
    }

    const { email, avatar, first_name, last_name } = user;

    return (
        <UserContainer>
            <UserWrapper>
                <UserImage>
                    <img src={avatar} alt={first_name} />
                </UserImage>
                <UserName>
                    {first_name} {last_name}
                </UserName>
                <UserEmail>{email}</UserEmail>
            </UserWrapper>
        </UserContainer>
    );
};

const UserContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
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
        text-align: center;
        width: 100%;
        height: 100%;
    }
`;

const UserName = styled.h3`
    text-align: center;
    font-size: 20px;
    color: #000;
    margin: 0;
`;

const UserEmail = styled.p`
    font-size: 18px;
    color: #333;
    margin: 0;
`;

export default User;
