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
    friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};