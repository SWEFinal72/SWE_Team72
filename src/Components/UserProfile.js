import Footer from './Footer';
import UsersList from '../Features/users/UsersList';
function UserProfile() {
    return (
    <>
    
    <div>
            <h1>User Profile</h1>
            <p>First Name: </p>
           
        </div>
        <div>
        <UsersList />
        </div>
      
           
            <Footer />
      
        </>
     
        
    );
}

export default UserProfile;