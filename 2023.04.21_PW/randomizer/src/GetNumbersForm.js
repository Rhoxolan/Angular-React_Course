import { useState } from "react";
import axios from "axios";
import './GetNumbersForm.css';

export default function GetNumbersForm() {
    const [apiKey, setApiKey] = useState('');
    const [startRange, setStartRange] = useState(0);
    const [endRange, setEndRange] = useState(0);
    const [numberCount, setNumberCount] = useState(0);
    const [randomNumbers, setRandomNumbers] = useState([]);

    return (
        <>
            <form className="mb-3" onSubmit={async e => {
                e.preventDefault();
                const requestBody = {
                    jsonrpc: '2.0',
                    method: 'generateIntegers',
                    params: {
                        apiKey: apiKey,
                        n: parseInt(numberCount),
                        min: parseInt(startRange),
                        max: parseInt(endRange),
                        replacement: true
                    },
                    id: 42
                };
                const query = 'https://api.random.org/json-rpc/2/invoke';
                let resp = await axios.post(query, requestBody);
                let data = resp?.data?.result?.random?.data;
                if (data) {
                    setRandomNumbers(data.join(' '));
                }
                else {
                    setRandomNumbers('Response error');
                }
            }}>
                <div className='mb-3 w-50'>
                    <label className='form-label' htmlFor='apiKey'>Api Key:</label>
                    <input className='form-control border-primary border-opacity-75' type='text' name='apiKey' value={apiKey}
                        onChange={e => setApiKey(e.target.value)} required />
                </div>
                <div className='mb-3 w-50'>
                    <label className='form-label' htmlFor='startRange'>Start Range:</label>
                    <input className='form-control border-primary border-opacity-75' type='number' name='startRange' value={startRange}
                        onChange={e => setStartRange(e.target.value)} required />
                </div>
                <div className='mb-3 w-50'>
                    <label className='form-label' htmlFor='endRange'>End Range:</label>
                    <input className='form-control border-primary border-opacity-75' type='number' name='endRange' value={endRange}
                        onChange={e => setEndRange(e.target.value)} required />
                </div>
                <div className='mb-3 w-50'>
                    <label className='form-label' htmlFor='numberCount'>Number Count:</label>
                    <input className='form-control border-primary border-opacity-75' type='number' name='numberCount' value={numberCount}
                        onChange={e => setNumberCount(e.target.value)} required />
                </div>
                <input type='submit' value="Send" className='btn btn-success' />
            </form>
            <div id="numbersOutputDiv" className="form-control border-primary border-opacity-75 p-3">
                {randomNumbers}
            </div>
        </>
    );
}