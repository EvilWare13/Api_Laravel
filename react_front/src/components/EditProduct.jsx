import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/product'

const EditProduct = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const {id} = useParams()
    
    const navigate = useNavigate()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}/${id}`, {name: name, description: description, price: price, stock: stock})
        navigate('/')
    }

    useEffect ( () => {
        const getProductById = async () =>{
            const {data} = await axios.get(`${endpoint}/${id}`)

            setName(data.name)
            setDescription(data.description)
            setPrice(data.price)
            setStock(data.stock)
        }
        getProductById()
    }, []) 
  
    return (
        <div>
            <h3>Edit product</h3>
            <form onSubmit={update}>

                <div className='mb-3'>
                    <label className='form-label'>
                        Name
                    </label>
                    <input
                        value={name}
                        onChange= {(e)=> setName(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                
                <div className='mb-3'>
                    <label className='form-label'>
                        Description
                    </label>
                    <input
                        value={description}
                        onChange= {(e)=> setDescription(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                
                <div className='mb-3'>
                    <label className='form-label'>
                        Price
                    </label>
                    <input
                        value={price}
                        onChange= {(e)=> setPrice(e.target.value)}
                        type='number'
                        className='form-control'
                    />
                </div>
                
                <div className='mb-3'>
                    <label className='form-label'>
                        Stock
                    </label>
                    <input
                        value={stock}
                        onChange= {(e)=> setStock(e.target.value)}
                        type='number'
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Update</button>
            </form>
        </div>
    )
}

export default EditProduct
