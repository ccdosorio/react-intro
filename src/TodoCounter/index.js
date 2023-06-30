import React from "react";

import "./TodoCounter.css";

function TodoCounter({ totalTodos, completedTodos }) {
  return (
    <h2 className="TodoCounter">
      Has complentado {completedTodos} de {totalTodos} ToDos
    </h2>
  );
}

export { TodoCounter };
