import React, {useState} from 'react';
import './App.css';
import treeData from "./data/sample.json"





const TreeNode = ({ node, label }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  return (
      <li>
        { Array.isArray(node) && (
            <span className="js-toggle-icon" onClick={handleToggle}>
              {isExpanded ? '-' : '+'}
            </span>
          )}
          {label}
          {Array.isArray(node) && isExpanded && (
             <ul>
              {
                node.map((element, index) => (
                   Object.keys(element).map((key) => (
                      <TreeNode key={key} node={element[key]} label={key}/>
                   ))
                ))
              }
             </ul>
            )}
      </li>
    )

}

const TreeMenu = () => {
  // Recursive function to render the tree structure.
  const renderTree = (data) => {
    return (
      Object.keys(data).map((key) => (
          <TreeNode key={key} node={data[key]} label={key}/>
        ))
    );
  };

  // Render the tree data.
  return (
    <ul className="treeViewContainer">
      {renderTree(treeData)}
    </ul>
  );
};


export default TreeMenu;
