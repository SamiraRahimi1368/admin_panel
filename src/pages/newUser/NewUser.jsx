import React from 'react'
import './NewUser.css'
export default function NewUser() {
  return (
    <div className="newUser">
<h1 className="newUserTitle">New User</h1>
<form  className="newUserForm">
  <div className="newUserItem">
    <label>Username</label>
    <input type="text" placeholder="John" />
  </div>
  <div className="newUserItem">
    <label>FullName</label>
    <input type="text" placeholder="John Smith" />
  </div>
  <div className="newUserItem">
    <label>Email</label>
    <input type="email" placeholder="John@gmail.com" />
    <div className="newUserItem">
    <label>Password</label>
    <input type="password" placeholder="password" />
    <div className="newUserItem">
    <label>Phone</label>
    <input type="phone" placeholder="+1 123 456 78" />
  </div>
  <div className="newUserItem">
    <label>Address</label>
    <input type="Address" placeholder="New York.USA" />
  </div>
  <div className="newUserItem">
    <label>Gender</label>
    <div className="newUserGender">
    <input type="radio" name="gender" id="male" value="male"/>
    <label for="male">Male</label>
    <input type="radio" name="gender" id="female" value="female"/>
    <label for="female">Female</label>
    <input type="radio" name="gender" id="others" value="other"/>
    <label for="other">Other</label>
    </div>
  </div>
  </div>
  </div>
  <div className="newUserItem">
  <label>Active</label>
  <select name="active" id="active" className="newUserSelect">
    <option value="yes">yes</option>
    <option value="no">No</option>

  </select>
  </div>
<button className="newUserButton">Create</button>
</form>
      
    </div>
  )
}
