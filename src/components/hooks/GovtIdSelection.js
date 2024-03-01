// // GovtIdSelection.js

// import React, { useState } from 'react';

// const GovtIdSelection = ({ onIdTypeChange, onIdNumberChange }) => {
//   const [selectedIdType, setSelectedIdType] = useState('');
//   const [idNumber, setIdNumber] = useState('');

//   const handleIdTypeChange = (e) => {
//       const newIdType = e.target.value;
//       console.log(newIdType);
//     setSelectedIdType(newIdType);
//     onIdTypeChange(newIdType);
//   };

//   const handleIdNumberChange = (e) => {
//     const newIdNumber = e.target.value;
//     setIdNumber(newIdNumber);
//       onIdNumberChange(newIdNumber);
//       console.log('id', newIdNumber);
//   };

//   const isAadharValid = () => {
//     return selectedIdType === 'Aadhar' && /^[2-9]\d{11}$/.test(idNumber);
//     };
//     const isPanValid = () => {
//         return selectedIdType === 'PAN' && /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/
//             .test(idNumber.toUpperCase());
//       };

//   return (
//     <div>
//       <label>
//         Govt Issued ID Type:
//         <select value={selectedIdType} onSubmit={handleIdTypeChange}>
//           <option value="">Select ID Type</option>
//           <option value="Aadhar">Aadhar</option>
//           <option value="PAN">PAN</option>
//         </select>
//       </label>

//       {selectedIdType === 'Aadhar' && (
//         <label>
//           Aadhar Number:
//           <input
//             type="text"
//             value={idNumber}
//             onSubmit={handleIdNumberChange}
//             placeholder="Enter Aadhar Number"
//             style={{ borderColor: isAadharValid() ? 'green' : 'red' }}
//           />
//           {!isAadharValid() && <p style={{ color: 'red' }}>Invalid Aadhar Number</p>}
//               </label>
//           )}
          
//           {selectedIdType === 'PAN' && (
//         <label>
//           PAN Number:
//           <input
//             type="text"
//             value={idNumber}
//             onSubmit={handleIdNumberChange}
//             placeholder="Enter Pan Number"
//             style={{ borderColor: isPanValid() ? 'green' : 'red' }}
//           />
//           {!isPanValid() && <p style={{ color: 'red' }}>Invalid Pan Number</p>}
//               </label>
              
              
//       )}
//     </div>
//   );
// };

// export default GovtIdSelection;

// GovtIdSelection.js

import React, { useState } from 'react';

const GovtIdSelection = ({ onIdTypeChange, onIdNumberChange }) => {
  const [selectedIdType, setSelectedIdType] = useState('');
  const [idNumber, setIdNumber] = useState('');

  const handleIdTypeChange = (e) => {
    const newIdType = e.target.value;
    setSelectedIdType(newIdType);
    onIdTypeChange(newIdType);
  };

  const handleIdNumberChange = (e) => {
    const newIdNumber = e.target.value;
    setIdNumber(newIdNumber);
    onIdNumberChange(newIdNumber);
  };

  const isAadharValid = () => {
    return selectedIdType === 'Aadhar' && /^[2-9]\d{11}$/.test(idNumber);
  };
  const isPanValid = () => {
             return selectedIdType === 'PAN' && /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/
                 .test(idNumber.toUpperCase());
           };

  return (
    <div>
      <label>
        Govt Issued ID Type:
        <select value={selectedIdType} onChange={handleIdTypeChange}>
          <option value="">Select ID Type</option>
          <option value="Aadhar">Aadhar</option>
          <option value="PAN">PAN</option>
        </select>
      </label>

      {selectedIdType === 'Aadhar' && (
        <label>
          Aadhar Number:
          <input
            type="text"
            value={idNumber}
            onChange={handleIdNumberChange}
            placeholder="Enter Aadhar Number"
            style={{ borderColor: isAadharValid() ? 'green' : 'red' }}
          />
          {!isAadharValid() && <p style={{ color: 'red' }}>Invalid Aadhar Number</p>}
        </label>
      )}
       {selectedIdType === 'PAN' && (
         <label>
           PAN Number:
           <input
             type="text"
             value={idNumber}
             onChange={handleIdNumberChange}
             placeholder="Enter Pan Number"
             style={{ borderColor: isPanValid() ? 'green' : 'red' }}
           />
           {!isPanValid() && <p style={{ color: 'red' }}>Invalid Pan Number</p>}
               </label>   
      )}
      
    </div>
  );
};

export default GovtIdSelection;

