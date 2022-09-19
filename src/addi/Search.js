
import React, { useState, useEffect } from 'react';

export const Search = ({ Update, ActionList, setLooking }) => {

    const [Lookup, setLookup] = useState('');
    let LookupRes = [];

    const SubmitHandle = (e) => {
        e.preventDefault();
    }

    const lookfor = (param) => {
        if (ActionList.length > 0) {
            ActionList.forEach(function i(item) {
                if (item.title.includes(param)) {
                    LookupRes.push(item);
                }
            })
        }
        if (param == "") {
            LookupRes = false;
        }

        setLooking(LookupRes);
        Update();
    }



    return (
        <div>
            <form id="act" onSubmit={SubmitHandle}>
                <input id="title" type="text" value={Lookup} onChange={(e) => { setLookup(e.target.value); lookfor(e.target.value) }} placeholder="BUSCAR" />
                <button type="reset" onClick={(e) => { setLookup(""); lookfor("") }}>Borrar</button>
            </form>
        </div>
    )
}