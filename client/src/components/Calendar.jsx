import { useAppContext } from "../context/AppContext";
import axios from "axios";

export default function Calendar() {
  const { user, tasks, setTasks, selectedDate, setSelectedDate } = useAppContext();
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    if (user) {
      axios.get(`http://localhost:5000/api/tasks/${user._id}/${selectedDate}`)
        .then((res) => setTasks(res.data))
        .catch((err) => console.error("Ошибка загрузки задач", err));
    }
  }, [selectedDate, user, setTasks]);

  return (
    <div>
      <h2>Ежедневник</h2>
      <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}
