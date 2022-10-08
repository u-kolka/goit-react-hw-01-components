import PropTypes from 'prop-types'; 
import {FriendListItem} from 'components/FriendListItem/FriendListItem'
 
export const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(elem =>
                <FriendListItem key={elem.id} avatar={elem.avatar} name={elem.name} isOnline={elem.isOnline} />
            )}
        </ul>)
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object),
}