import { PRIORITIES, PRIORITY_COLORS } from "../data/todos";

export default function AddTaskPanel({
  newText,
  setNewText,
  newPriority,
  setNewPriority,
  handleAdd,
}) {
  return (
    <div style={styles.panel}>
      <input
        style={styles.input}
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
        placeholder="Add task..."
      />

      <div style={styles.row}>
        {PRIORITIES.map((p) => (
          <button
            key={p}
            onClick={() => setNewPriority(p)}
            style={{
              ...styles.priorityBtn,
              background:
                newPriority === p ? PRIORITY_COLORS[p] : "transparent",
            }}
          >
            {p}
          </button>
        ))}
      </div>

      <button style={styles.addBtn} onClick={handleAdd}>
        Add Task
      </button>
    </div>
  );
}

const styles = {
  panel: {
    marginTop: 20,
  },
  input: {
    width: "100%",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  row: {
    display: "flex",
    gap: 8,
    marginBottom: 12,
  },
  priorityBtn: {
    flex: 1,
    padding: 8,
    borderRadius: 8,
    border: "none",
    cursor: "pointer",
  },
  addBtn: {
    width: "100%",
    padding: 12,
    borderRadius: 10,
    background: "#00f5d4",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
  },
};