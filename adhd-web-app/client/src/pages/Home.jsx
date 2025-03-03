import { useAppContext } from "../context/AppContext";
import Calendar from "../components/Calendar";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { user, setUser } = useAppContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <div>
      <h1>Ежедневник</h1>
      {user ? (
        <>
          <button onClick={handleLogout}>Выйти</button>
          <Calendar />
        </>
      ) : (
        <p>Войдите в систему</p>
      )}
    </div>
  );
}
