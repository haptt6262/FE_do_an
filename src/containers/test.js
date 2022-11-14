import React, { useEffect, useState } from 'react'
import { testGet } from '../services/test'
import TestComponent from '../pages/ItemPage'

export default function Test() {
    const [data, setData] = useState([])

    const res = async () => {
        const listItem = await testGet()
        console.log("data in container: ", listItem);
        setData(listItem)
    }
    useEffect(() => {
        res()
    }, [])

    return (
        <TestComponent listItem={data} />
    )
}
