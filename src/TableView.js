import React, {useState} from 'react';
import './App.css';




const TableRow = ({ node, label }) => {

  const [isSelected, setIsSelected] = useState(false)

   const handleToggle = () => {
    setIsSelected(!isSelected)
  }
  
  return (
  {

    isSelected && (
        <td>
          {label}
      </td>
      <td>
          {node}
      </td>
      )
  }
      
    )

}

const TableView = ( { current }) => {
  // Recursive function to render the tree structure.
  const renderTable = (current) => {
    return (
      Object.keys(current).map((key) => (
          <th>
             <td>Name</td>
             <td>Value</td>
          </th>
          <tr>
            <TableRow key={key} node={current[key]} label={key}/>
          </tr>
        ))
    );
  };

  // Render the tree data.
  return (
    <table>
      {renderTree(treeData)}
    </table>
  );
};


export default TableView;
