import Todo from "./todo"

const getTodos = async () => {
    let todos = await fetch("http://localhost:3000/api/todo/list");
    return todos.json();
}

export default async function TodoList() {
    const { todos } = await getTodos();
    console.log(todos);
    return (
        <main>
            <div>
                <ul style={{ listStyleType: "none", padding: 10 }}>
                    {
                        todos.map((t) => {
                            return (
                                <li>
                                    <Todo todo={t} />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </main>
    )
}
