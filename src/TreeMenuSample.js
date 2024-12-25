import React, {useState} from 'react';
import './App.css';
import treeData from "./data/sample_2.json"





const TreeNode = ({ node }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  return (
      <li>
        {node.children && (
            <span className="js-toggle-icon" onClick={handleToggle}>
              {isExpanded ? '-' : '+'}
            </span>
          )}
          {node.label}
          {node.children && isExpanded && (
             <ul>
              {
                node.children.map((child, index) => (
                  <TreeNode key={index} node={child} />
                ))
              }
             </ul>
            )}
      </li>
    )

}

const TreeMenuSample = () => {
  // Recursive function to render the tree structure.
  const renderTree = (data) => {
    return (
      <ul className="tree">
        {data.map((node, index) => (
          <TreeNode key={index} node={node} />
        ))}
      </ul>
    );
  };

  // Render the tree data.
  return (
    <ul>
      {renderTree(treeData)}
    </ul>
  );
};


export default TreeMenuSample;
