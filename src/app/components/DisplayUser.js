"use client";
import { useDispatch, useSelector } from "react-redux";
import { removerUser } from "../redux/slice";

export default function DisplayUser() {
  const userData = useSelector((data) => data.users);
  const dispatch= useDispatch()
  console.log(userData);

  return (
    <div className="display_user">
      <h2>UserList</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <button onClick={()=>dispatch(removerUser(item.id))} style={{backgroundColor:"orangered" , padding:"8px", color:"white", border:"none", borderRadius:"5px"}}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
