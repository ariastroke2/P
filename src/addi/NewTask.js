
import React, { useState, useEffect } from 'react';

export const NewTask = ({ Update, ActionList, Idgen }) => {

    const [title, setTitle] = useState('Actividad');
    const [time, setTime] = useState('');

    const Addon = (e) => {
        e.preventDefault();
        if(title!=""){
        let id = Idgen + 2; 
        console.log(id);
        ActionList.push({ title: title, time: time, id: id });
        Update();
        setTitle("");
        setTime('');
        }
    }

    return (
        <div>
            <form id="act" onSubmit={Addon}>
                <label>Actividad:</label>
                <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="ACTIVIDAD" />
                <input id="time" value={time} onChange={(e) => setTime(e.target.value)} type="date" />
                <button type="reset">Borrar</button>
                <button
                    type="submit">Add Task</button>
            </form>


        </div>
    )
}