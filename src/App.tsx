import {useTodos} from "./hooks/useTodos.ts";


function App() {

    const {isLoading, data, refetch} = useTodos();


    return (
        <div>
            <button onClick={() => refetch()}>Refresh</button>
            {isLoading ? <div>Loading ...</div> : (
                data?.length ? <ul>{data.map(todo => (
                    <li key={todo.id}>{`${todo.id}: ${todo.title}`}</li>
                ))}</ul> : <h1>Not found</h1>
            )}
        </div>
    )
}

export default App
