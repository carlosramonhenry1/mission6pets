import React, {useState} from "react";
import axios from "axios";

function CreateProduct() {
    const[input, setInput] = useState({
        title: '',
        content: ''
    })

    //tittle is product name and content is underneath in frontend

    function handleChange(event) {
        const {name, value} = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })

    }

    //

    function handleClick(event) {
        event.preventDefault();
        const newNote = {
            title: input.title,
            content: input.content
        }

        axios.post('http://localhost:3001/create', newNote)
    }



    return <div>
        <h1>Creation page</h1>
            <form>
                <div className='form-group'>
                   <input onChange={handleChange} name="title" value={input.title} autoComplete="off" className="form-control" placeholder = "ProductName"></input> 
                </div>
                <div className='form-group'>
                   <textarea onChange={handleChange} name="content" value={input.content} autoComplete="off" className="form-control"placeholder = "ProductDetails" ></textarea> 
                </div>
                
                <button onClick={handleClick} className='btn btn-lg btn-info'> ADD PRODUCT</button>
            </form>
    </div>
}
export default CreateProduct;