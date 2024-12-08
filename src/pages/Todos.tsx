'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

const TodosPage = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const res = await axios.get(
                'https://jsonplaceholder.typicode.com/todos'
            );
            setTodos(res.data);
        };

        fetchTodos();
    }, []);

    return (
        <div>
            <h1>Todos</h1>
            <h2>해야할 일</h2>

            <ul className="border-2 border-gray-300 rounded-md p-4">
                {todos.map((todo) => (
                    <Link to={`/todos/${todo.id}`}>
                        <li key={todo.id} className="border p-2">
                            <h3>{todo.title}</h3>
                            <p>{todo.userId}</p>
                            <p>{todo.completed ? '완료됨' : '미완료됨'}</p>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default TodosPage;
