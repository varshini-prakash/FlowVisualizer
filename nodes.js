const generateNodes = (data) => {
    const elements = [];
  
    // Define the positions for nodes in a grid-like pattern
    const positions = {
      "Start": { x: 100, y: 100 },
      "DataInput": { x: 300, y: 100 },
      "Preprocessing": { x: 100, y: 300 },
      "ModelTraining": { x: 300, y: 300 },
      "Evaluation": { x: 500, y: 300 },
      "Results": { x: 700, y: 300 },
      "Analysis": { x: 900, y: 300 },
      "End": { x: 900, y: 100 }
    };
  
    // Add nodes based on the provided data
    data.nodes.forEach(node => {
      elements.push({
        id: node.id,
        data: { label: node.label },
        position: positions[node.id] || { x: 0, y: 0 } // Use predefined position or default to (0,0)
      });
    });
  
    return elements;
  };
  
  export default generateNodes;
  