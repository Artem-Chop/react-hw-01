import { connect } from 'react-redux';
import { getName } from 'redux/auth/auth-selectors';
import defaultAvatar from './default-avatar.jpg';
import { logout } from 'redux/auth/operations';

const UserMenu = ({ name, avatar, OnLogout }) => {
  return (
    <div className="userCorner">
      <span>Welcome, {name}</span>
      <img className="avatar" src={avatar} alt="" />
      <button type="button" onClick={OnLogout}>
        Logout
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  name: getName(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  OnLogout: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
