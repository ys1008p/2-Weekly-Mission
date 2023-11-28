interface ProfileProps {
  user: {
    email: string;
    profileImageSource: string;
  };
}

const Profile = ({ user }: ProfileProps) => (
  <div className="profile">
    <img src={user.profileImageSource} alt="profile" />
    <span>{user.email}</span>
  </div>
);

export default Profile;
