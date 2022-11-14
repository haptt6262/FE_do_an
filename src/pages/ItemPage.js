import React, { useEffect, useState } from 'react'
import { testGet } from '../services/test'


export default function Home(props) {


    const { listItem } = props
    console.log("listItem day nhes: ", props);



    const [inputName, setInputName] = useState('')
    const [id, setId] = useState()
    console.log(inputName, id, "in page");



    useEffect(() => {
        console.log("listItem: ", listItem);
        // handleFetchList()
        testGet()
    }, [])

    let ListItems = []
    ListItems = listItem.map((item, key) => {
        return (
            <tr key={key}>
                <th>{item.id}</th>
                <th>{item.name}</th>
                <th>
                    <button >DELETE</button>
                </th>
                <th>
                    <button >SELECT</button>
                </th>
            </tr>
        )
    })
    return (
        <>
            <div>Homepage</div>
            <div>
                <input type="text" value={inputName || ''} onChange={(e) => { setInputName(e.target.value) }} />
                <button >ADD</button>
                <button >UPDATE</button>

            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {ListItems}
                </tbody>
            </table>
        </>
    )
}