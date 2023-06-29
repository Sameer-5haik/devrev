import React, { useEffect, useState } from 'react';
import { Table, Select, Input } from 'antd';
import image from './booksy.jpg'
const { Search } = Input;

function Home() {
    const [dataSource, setDataSource] = useState([]);
    const [currentDataSource, setCurrentDataSource] = useState([]);
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Author',
            dataIndex: 'author',
            key: 'author',
        },
        {
            title: 'Genre',
            dataIndex: 'genre',
            key: 'genre',
        },
        {
            title: 'Available books',
            dataIndex: 'available_count',
            key: 'available_count',
        },
    ];

    useEffect(() => {
        fetch('http://localhost:8000/bookdata')
            .then((response) => response.json())
            .then((data) => setDataSource(data.bookData))
    }, [])

    useEffect(() => {
        setCurrentDataSource([...dataSource])
    }, [dataSource])

    const handleChange = (value) => {
        if(value == 'name'){
            var bookList = dataSource;
            bookList.sort((a, b) => a.name.localeCompare(b.name));
            setCurrentDataSource([...bookList]);
        }else if(value == 'author'){
            var bookList = dataSource;
            bookList.sort((a, b) => a.author.localeCompare(b.author));
            setCurrentDataSource([...bookList]);
        }else if(value == 'genre'){
            var bookList = dataSource;
            bookList.sort((a, b) => a.genre.localeCompare(b.genre));
            setCurrentDataSource([...bookList]);
        }else if(value == 'count'){
            var bookList = dataSource;
            bookList.sort((a, b) => a.available_count-b.available_count);
            setCurrentDataSource([...bookList]);
        }
    }

    const getData = () => {
        return currentDataSource;
    }

    const onSearch = (value) => {
        if(value == ''){
            setCurrentDataSource([...dataSource])
        }else {
            const result = currentDataSource.filter((obj) => JSON.stringify(obj).toLowerCase().includes(value.toLowerCase()));
            console.log(result)
            setCurrentDataSource([...result])
        }
    }

    return (
        <div className='home-page' style={{backgroundImage : `url(${image})` }}>
            <div className='top' style={{marginTop:'2rem'}}>
            <span style={{color:'white',marginLeft:'8rem',marginTop:'4rem',marginBottom: '2rem'}}>Sort By :</span>
            <Select
                style={{ width: '40%', marginLeft:'3rem', marginBottom: '2rem' }}
                onChange={handleChange}
                options={[
                    { value: 'name', label: 'Name' },
                    { value: 'author', label: 'Author' },
                    { value: 'genre', label: 'Genre' },
                    { value: 'count', label: 'Book Count' },
                ]}
            />
            </div>
            <div className='top'>
            <span style={{color:'white',marginLeft:'8rem',marginTop:'4rem',marginBottom: '2rem'}}>Search : </span>
            <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: '40%', marginLeft:'3rem',marginBottom: '2rem' }}/>
            </div>
            <Table
                dataSource={getData()}
                columns={columns}
            />
        </div>
    );
}

export default Home
