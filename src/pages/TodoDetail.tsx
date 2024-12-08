// import { useEffect, useState } from 'react';
// // import { todoListDetail } from '../api/todo';
// // import { Todo } from '../types/Todo';
// import { useParams } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query';

// const TodoDetail = () => {
//     const [todoDetail, setTodoDetail] = useState<Todo>();

//     const { id } = useParams() as unknown as { id: string };
//     useEffect(() => {
//         const getTodoDetail = async () => {
//             setTodoDetail(await todoListDetail(id));
//         };
//         getTodoDetail();
//     }, []);

//     const { data } = useQuery({
//         queryKey: ['delay'],
//         queryFn: async () =>
//             (await fetch('https://api.heropy.dev/v0/delay?t=1000')).json(),
//     });

//     return (
//         <>
//             <div>TodoDetail</div>
//             <div>
//                 <p>{todoDetail?.userId}</p>
//                 <p>{todoDetail?.userId}</p>
//                 <p>{todoDetail?.userId}</p>
//                 <p>{todoDetail?.userId}</p>
//             </div>
//         </>
//     );
// };

// export default TodoDetail;
