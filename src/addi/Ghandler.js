
import React, { useState, useEffect } from 'react';
import { NewTask } from './NewTask';
import { Search } from './Search';
import './styles.css';

export const Ghandler = ({ ActionList }) => {
    const [updater, Update] = useState(0);
    const [Looking, setLooking] = useState(false);

    function RenderList() {
        let ListRender;
        //console.log(ActionList);
        if (!Looking) {
            if (ActionList.length > 0) {
                ActionList.forEach(function i(item) {
                    ListRender = <>{ListRender} <div className="bubble"> {item.title} - {item.time? item.time: 'n/a'} <button className="del" onClick={() => butact(item.id)} type="button">X</button> </div> <br />  </>;
                })
            } else {
                ListRender = "No hay elementos";
            }
        } else {
            if (Looking.length > 0) {
                Looking.forEach(function i(item) {
                    ListRender = <>{ListRender} <div className="bubble"> {item.title} - {item.time? item.time: 'n/a'} <button className="del" onClick={() => butact(item.id)} type="button">X</button> </div> <br />  </>;
                })
            } else {
                ListRender = "Ningún elemento coincide con la búsqueda";
            }
        }
        return (
            <>
                {ListRender}
            </>
        )
    };


    const remove = (id) => {
        let ind = ActionList.findIndex((i) => id == i.id), lind;
        if (Looking != false) {
            lind = Looking.findIndex((i) => id == i.id);

            for (let i = lind; i < Looking.length; i++) {
                Looking[i] = Looking[i + 1];
            }
            const temp = Looking.pop();

        }

        for (let i = ind; i < ActionList.length; i++) {
            ActionList[i] = ActionList[i + 1];
        }
        const temp = ActionList.pop();
    }


    const Rerender = () => {
        Update(updater + 1);
    }

    const butact = (id) => {
        remove(id);
        Rerender();
    }
    //             <button onClick={remove(id)} type="button">X</button>


    return (
        <div className="cont">
            <div className="main">
                <NewTask Update={Rerender} ActionList={ActionList} Idgen={updater} />

                <Search Update={Rerender} ActionList={ActionList} setLooking={setLooking} />
                <div className='cont'>
                    <RenderList className="main" />
                </div>



            </div>
        </div>
    )
}