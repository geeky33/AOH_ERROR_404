import React from 'react';
import '../assets/board.css';

const Leaderboard = () => {
    return (
        <div>
            <h1 style={{textAlign: 'center', fontSize: '50px' }} ><b>LEADERBOARD</b></h1>

            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' , textAlign:'center'}}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center', backgroundColor: 'black', fontSize: '18px' }}>Rank</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center', backgroundColor: 'black', fontSize: '18px' }}>LearnCoins</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center', backgroundColor: 'black', fontSize: '18px' }}>Name</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center', backgroundColor: 'black', fontSize: '18px' }}>ETH coins</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>1</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>Shubham Singh</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>5.05</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>505</td>
                    </tr>
                    {/* Add more rows as needed */}
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>2</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>Aaryan Sanghani</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>3.30</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>330</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>3</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>Viraj Mankani</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>1.50</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>150</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>4</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>Raunak Thanawala</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>0.80</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>80</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>5</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>Palash Shah</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>0.70</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>70</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>6</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>Palakshi Maheshwari</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>0.50</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>50</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>7</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>Neil Shah</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>0.10</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>10</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>8</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>Ahaan Desai</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>0.09</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>9</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>9</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>Mahi Palimkar</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>0.08</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>8</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>10</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>Rushabh Mehta</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>0.01</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>1</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>11</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>Vansh Jalora</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>0.10</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>10</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>12</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>Rahul Desai</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>0.10</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>10</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>13</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>Darshit Shah</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>0.10</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>10</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>14</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>Amit Ingle</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>0.10</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>10</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>15</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>Siddhesh Pandey</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>0.10</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', color: 'black', textAlign: 'center', fontSize: '25px' }}>10</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Leaderboard;


