import React,{useState} from 'react'
import './AddFoodStyle.css'

export const AddFood = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [inputprotein, setInputprotein] = useState("");
    const [inputcarbs, setInputcarbs] = useState("");
    const [inputfats, setInputfats] = useState("");
    const [others, setOthers] = useState("");

    const submit=(e)=>{
        e.preventDefault();
        if(!title){ alert("Name of Dish not provided"); }
        else if(!desc){ alert("Add description of the Dish"); }
        else if(!inputprotein){ alert("Value of proteins not provided"); }
        else if(!inputcarbs){ alert("Value of carbs not provided"); }
        else if(!inputfats){ alert("Value of fats not provided"); }
        else{
        props.addFood(title,desc,inputprotein,inputcarbs,inputfats,others);
        setTitle("");
        setDesc("");
        setInputprotein("");
        setInputcarbs("");
        setInputfats("");
        setOthers("");
        }
    }
    return (
        <div className="new-food container my-3 col-md-4">
            <h2> Add a dish!</h2>
            <div className="form-box">
            <form onSubmit={submit} className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="title" className="add-food-details form-label">Name of the Dish</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title"/>
                </div>
                
                <div className="col-12">
                    <label htmlFor="desc" className="add-food-details form-label">Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" placeholder="Healthy and Yum"/>
                </div>
                <p id="nutri-fact">
                    Nutriton facts(per 100g)
                </p>
                <div className="col-md-4">
                    <label htmlFor="inputprotein" className="add-food-details form-label">Proteins(g)</label>
                    <input type="number" value={inputprotein} onChange={(e) => setInputprotein(e.target.value)} className="form-control" id="inputprotein"/>
                </div>
                
                <div className="col-md-4">
                    <label htmlFor="inputcarbs" className="add-food-details form-label">Carbs(g)</label>
                    <input type="number" value={inputcarbs} onChange={(e) => setInputcarbs(e.target.value)} className="form-control" id="inputcarbs"/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputfats" className="add-food-details form-label">Fats(g)</label>
                    <input type="number" value={inputfats} onChange={(e) => setInputfats(e.target.value)} className="form-control" id="inputfats"/>
                </div>
                <div className="col-12">
                    <label htmlFor="others" className="add-food-details form-label">Other Details(if any)</label>
                    <input type="text" value={others} onChange={(e) => setOthers(e.target.value)} className="form-control" id="others" placeholder="Allergies or when to avoid"/>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-success">Add</button>
                </div>
            </form>
            </div>
        </div>
    )
}
