import { useSelector, useDispatch } from "react-redux";
import { removeToken } from "../data/auth";

function Profile() {

  const user = useSelector(state => state.auth.name);
  const dispacth = useDispatch();
  return (
    <main className="mt-20 mx-[5.5%]">
      <button onClick={() => dispacth(removeToken())}>Logout</button>
      <p>{user}</p>
    </main>
  );
}

export default Profile;