import React from 'react';

const Quiz = () => {
    return (
        <div>
            <h1 style={{textAlign: 'center', fontSize: '50px' }} ><b>QUIZ</b></h1>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: 'blue', fontSize: '25px' }}>Sr. No.</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: 'blue', fontSize: '25px' }}>Course Name</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: 'blue', fontSize: '25px' }}>Link</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: 'blue', fontSize: '25px' }}>Max. Coins 🪙</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '30px', color: 'black' }}>1</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '30px', color: 'black' }}>C++</td>
                        <td><a href='https://docs.google.com/forms/d/e/1FAIpQLSexe8_iT1OtrttwD2dHZarmYR5E4Cs4rJln57evcxEWtSqD7Q/viewform?usp=sf_link' ><h4 style={{ color: '#00008B',fontSize: '30px'}}>C++ QUIZ</h4></a></td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '30px', color: 'black' }}>0.1🪙</td>
                    </tr>
                    {/* Add more rows as needed */}
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '30px', color: 'black' }}>2</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '30px', color: 'black' }}>Python</td>
                        <td><a href='https://docs.google.com/forms/d/e/1FAIpQLSe8X8dbE4inDb-MLcZPfs3npMY8nC_c9sEKCSQWPTI0BJxWFw/viewform?usp=sf_link'><h4 style={{ color: '#00008B',fontSize: '30px'}}>Python Assignment</h4></a></td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '30px',color: 'black' }}>0.1🪙</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '30px', color: 'black' }}>3</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '30px', color: 'black' }}>JavaScript</td>
                        <td><a href='https://docs.google.com/forms/d/e/1FAIpQLScXdfh-3rCG-fkcZqniyZHKm6I5bp7iX3ZESHlJRWbrXqV1Ww/viewform?usp=sf_link'><h4 style={{ color: '#00008B',fontSize: '30px'}}>JavaScript Knowledge Assessment</h4></a></td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '30px', color: 'black' }}>0.1🪙</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '30px', color: 'black' }}>4</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '30px', color: 'black' }}>HTML</td>
                        <td><a href='https://docs.google.com/forms/d/e/1FAIpQLSez3O32Jk-WWfbUaZR9o1KZ6pW0PmbhejcF5d4DtZPhpPxxsQ/viewform?usp=sf_link'><h4 style={{ color: '#00008B',fontSize: '30px'}}>HTML Test</h4></a></td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '30px', color: 'black' }}>0.1🪙</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '30px', color: 'black' }}>5</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '30px', color: 'black' }}>Java</td>
                        <td><a href='https://docs.google.com/forms/d/e/1FAIpQLScHWiIvxxOYeCB3OgGrZ-R9gD7eGJkBa6Oo46jgkEY1VYCcYA/viewform?usp=sf_link'><h4 style={{ color: '#00008B',fontSize: '30px'}}>Java Tutorial</h4></a></td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '30px', color: 'black' }}>0.1🪙</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Quiz;



