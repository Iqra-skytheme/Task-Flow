import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FilterTabs from "./components/FilterTabs";
import TaskCard from "./components/TaskCard";
import AddTaskPanel from "./components/AddTaskPanel";
import FloatingButton from "./components/FloatingButton";
import EmptyState from "./components/EmptyState";
import Footer from "./components/Footer";
import Toast from "./components/Toast";

import { useEffect, useState } from "react";
import API from "./api/todoApi";

import "./styles/global.css";

export default function App() {
const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const [newText, setNewText] = useState("");
  const [newPriority, setNewPriority] = useState("medium");
  const [addingNew, setAddingNew] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await API.get("/");
        setTodos(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTodos();
  }, []);
const handleAdd = async () => {
  if (!newText.trim()) return;

  try {
    const res = await API.post("/", {
      text: newText,
      priority: newPriority,
    });

    setTodos([res.data.data, ...todos]);

    setNewText("");
    setAddingNew(false);
  } catch (err) {
    console.log(err);
  }
};

 const handleToggle = async (id, completed) => {
  try {
    const res = await API.patch(`/${id}`, {
      completed: !completed,
    });

    const updatedTodo = res.data.data;
    
    if (updatedTodo.completed && !completed) {
      setToastMessage(updatedTodo.text);
    }

    setTodos(
      todos.map((todo) =>
        todo._id === id ? updatedTodo : todo
      )
    );
  } catch (err) {
    console.log(err);
  }
};

  const handleDelete = (id) => {
    setTodos(todos.filter((t) => t._id !== id));
  };

  const filtered = todos.filter((t) => {
    const match = t.text.toLowerCase().includes(search.toLowerCase());

    if (filter === "active") return !t.completed && match;
    if (filter === "done") return t.completed && match;

    return match;
  });

  const completionPct = todos.length
    ? Math.round(
        (todos.filter((t) => t.completed).length / todos.length) * 100
      )
    : 0;

  return (
    <div style={styles.root}>
      <Header todos={todos} completionPct={completionPct} />

      <SearchBar search={search} setSearch={setSearch} />

      <FilterTabs filter={filter} setFilter={setFilter} />

      {filtered.length === 0 ? (
        <EmptyState />
      ) : (
        filtered.map((todo) => (
          <TaskCard
            key={todo._id}
            todo={todo}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))
      )}

      {addingNew ? (
        <AddTaskPanel
          newText={newText}
          setNewText={setNewText}
          newPriority={newPriority}
          setNewPriority={setNewPriority}
          handleAdd={handleAdd}
        />
      ) : (
        <FloatingButton setAddingNew={setAddingNew} />
      )}

      <Footer />

      {toastMessage && (
        <Toast 
          message={toastMessage} 
          onClose={() => setToastMessage("")}
        />
      )}
    </div>
  );
}

const styles = {
  root: {
    maxWidth: 420,
    margin: "0 auto",
    padding: "60px 20px 20px 20px",
    minHeight: "100vh",
    color: "#fff",
  },
};