import axios from "axios";
import { useState } from "react";

const Openai = () => {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");

    const handlePrompt = async (e) => {
        e.preventDefault();
        console.log(prompt);
        try {
            const response = await axios.post('http://localhost:3000/openai', 
                { prompt }
            );
            setResponse(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <form onSubmit={handlePrompt}>
                <textarea onChange={(e) => setPrompt(e.target.value)} value={prompt} placeholder="Enter your prompt here" className="w-1/2 h-96 border border-solid border-black"></textarea>
                <button type="submit">Submit</button>
            </form>
            <div>
                <p>{ console.log(response) }</p>
            </div>
        </div>
    );
};

export default Openai;