import { useState } from "react";
import { PRIORITY_COLORS } from "../data/todos";

export default function TaskCard({ todo, onToggle, onDelete }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="task-card"
      style={{
        ...styles.card,
        borderLeft: `3px solid ${PRIORITY_COLORS[todo.priority]}`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button style={styles.checkbox} onClick={() => onToggle(todo._id, todo.completed)}>
        {todo.completed && "✓"}
      </button>

      <span
        style={{
          ...styles.text,
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.text}
      </span>

      {hovered && (
        <button style={styles.deleteBtn} onClick={() => onDelete(todo._id)}>
          🗑
        </button>
      )}
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    background: "#13131f",
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: "50%",
    cursor: "pointer",
  },
  text: {
    flex: 1,
    color: "#fff",
  },
  deleteBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
  },
};