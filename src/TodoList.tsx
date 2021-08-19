import React, {ChangeEvent, KeyboardEvent, useState} from "react";

export type FilterValueType = 'All' | 'Active' | 'Completed'
export type tasks1Type = {
    id: string
    title: string
    isDone: boolean
}
export type TodoListType = {
    title: string
    tasks: Array<tasks1Type>
    removeTasks: (id: string) => void
    chengFilter: (value: FilterValueType) => void
    addTask: (title: string) => void
}

export const TodoList = (props: TodoListType) => {
    const [newTitle, setNewTitle] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }
    const onKeyPressEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.shiftKey && e.charCode == 13) {
            props.addTask(newTitle);
            {
                setNewTitle('')
            }
        }
    }
    const onClickHandler = () => {
        props.addTgit ask(newTitle);
        {
            setNewTitle('')
        }
    }
    const buttonAllOnClick = () => props.chengFilter('All')
    const buttonActiveOnClick = () => props.chengFilter('Active')
    const buttonCompletedOnClick = () => props.chengFilter('Completed')
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={newTitle}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressEnterHandler}
                />
                <button onClick={onClickHandler}>+</button>

            </div>
            <ul>
                {props.tasks.map((t) => {
                        const removeHandler = () => {
                            props.removeTasks(t.id)
                        }
                        return <li><input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={removeHandler}>x</button>
                        </li>
                    }
                )}


            </ul>
            <div>
                <button onClick={buttonAllOnClick}>All</button>
                <button onClick={buttonActiveOnClick}>Active</button>
                <button onClick={buttonCompletedOnClick}>Completed</button>
            </div>
        </div>
    )
}