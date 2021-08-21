import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { setUsers } from '../actions/HomePage/homeActions';
import { getUsers } from '../services/userService';
import UserLists from '../components/UserLists';;

const Home = () => {
    const actionDispatcher = (dispatch) => ({
        setUser: (users) => dispatch(setUsers(users)),
    });

    const { setUser } = actionDispatcher(useDispatch());

    const fetchUsers = useCallback(async () => {
        try {
            const { data: { data } } = await getUsers();
            setUser(data);
        } catch (err) {
            console.error(err);
        }
    }, [setUser]);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return (
        <div>
            <UserLists />
        </div>
    );
};

export default Home;
