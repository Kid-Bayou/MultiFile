import React, { useState } from 'react';

interface DataItem {
  id: number;
  description: string;
  filePath: string;
}

const FileList: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([
    { id: 1, description: 'Dummy Description 1', filePath: '/dummy/file/path1' },
    { id: 2, description: 'Dummy Description 2', filePath: '/dummy/file/path2' },
    { id: 3, description: 'Dummy Description 3', filePath: '/dummy/file/path3' },
  ]);

  const handleDelete = (id: number) => {
    setData(data.filter(item => item.id !== id));
  };

  const handleUpdate = (id: number) => {
    // update logic here
    var x = id;
    console.log(x);
  };

  return (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th style={tableHeaderStyle}>Description</th>
          <th style={tableHeaderStyle}>File Path</th>
          <th style={tableHeaderStyle}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td style={tableCellStyle}>{item.description}</td>
            <td style={tableCellStyle}>{item.filePath}</td>
            <td style={{ ...tableCellStyle, ...buttonContainerStyle }}>
              <button onClick={() => handleUpdate(item.id)}>Update</button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


const tableHeaderStyle: React.CSSProperties = {
  borderBottom: '1px solid #ddd',
  padding: '15px',
  textAlign: 'center',
  background: "#aaa8ad77"
};

const tableCellStyle: React.CSSProperties = {
  borderBottom: '1px solid #ddd',
  padding: '8px',
};

const buttonContainerStyle: React.CSSProperties = {
  display: "flex",
  gap: "20px",
  justifyContent: "center"
};

export default FileList;
