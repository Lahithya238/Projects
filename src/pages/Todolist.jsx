import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Subhead from '../components/Subhead'
import { Container, Row, Col, Table } from 'react-bootstrap'
import axios from 'axios'

const Todolist = () => {
    const apiUrl = "https://jsonplaceholder.typicode.com/todos"
    const [todos, settodos] = useState([])
    const [search, setsearch] = useState("")
    const [filterData, setfilterData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl)
                console.log('response', response.data)
                settodos(response.data)
                response.data.map((items) => {
                    if (items.completed === true) {
                        items.task = 'done';
                    } else {
                        items.task = 'not done';
                    }
                })
                settodos(response.data)
                setfilterData(response.data)

            } catch (errors) {
                console.log("errors", errors)
            }
        }
        fetchData();
    }, [])

    const handleSearch = (e) => {
        console.log(e.target.value)
        setsearch(e.target.value)
        if (search.length > 3) {
            const searchData = todos.filter(items => items.title.includes(search))
            console.log("searchData", searchData)
            setfilterData(searchData)
        } else {
            setfilterData(todos)
        }
    }


    const handleSelect = (e) => {
        console.log('selectvalue', e.target.value)
        const selectedData = todos.filter((items) => {
            return items.task === e.target.value
        })
        if (e.target.value !== "") {
            setfilterData(selectedData)
        } else {
            setfilterData(todos)
        }

    }
    return (
        <div>
            <Header />
            <Subhead pageTitle={'Todolist'} another={true} /><br />
            <Container fluid>
                <Row>
                    <Col md={4}>
                        <input type='text' class='form-control' placeholder='search by name' value={search} onChange={handleSearch} />
                    </Col>

                    <Col md={6}>
                        <select class='form-control' onChange={handleSelect}>
                            <option value={""}>All</option>
                            <option value={"done"}>Completed</option>
                            <option value={"not done"}>Incomplete</option>
                        </select>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {
                            filterData && filterData.length > 0 ? (
                                <Table stripped>
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            filterData.map((items) => (
                                                <tr key={items.id}>
                                                    <td>{items.title}</td>
                                                    <td>{items.completed === true ? "Completed" : "not done"}</td>
                                                    <td><button>Delete</button></td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>
                            ) : "no data found"
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Todolist