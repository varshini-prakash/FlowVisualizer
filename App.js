import { useCallback } from 'react';
import ReactFlow, { addEdge, useEdgesState, useNodesState } from 'reactflow';
import 'reactflow/dist/style.css';
import generateNodes from './nodes'; 
import generateEdges from './edges'; 
//import initialNodes from './nodes.js';
//import initialEdges from './edges.js';

const App = () => {
  // Your JSON data
  const jsonData = {
    "nodes": [
      {"id": "Start", "label": "Start"},
      {"id": "DataInput", "label": "Data Input"},
      {"id": "Preprocessing", "label": "Preprocessing"},
      {"id": "ModelTraining", "label": "Model Training"},
      {"id": "Evaluation", "label": "Evaluation"},
      {"id": "Results", "label": "Results"},
      {"id": "Analysis", "label": "Analysis"},
      {"id": "End", "label": "End"}
    ],
    "edges": [
      {"source": "Start", "target": "DataInput"},
      {"source": "DataInput", "target": "Preprocessing"},
      {"source": "Preprocessing", "target": "ModelTraining"},
      {"source": "ModelTraining", "target": "Evaluation"},
      {"source": "Evaluation", "target": "Results"},
      {"source": "Results", "target": "Analysis"},
      {"source": "Analysis", "target": "End"},
      {"source": "End", "target": "Start"},
      {"source": "Start", "target": "Preprocessing"},
      {"source": "Preprocessing", "target": "ModelTraining"},
      {"source": "ModelTraining", "target": "Evaluation"},
      {"source": "Evaluation", "target": "Analysis"},
      {"source": "Analysis", "target": "Results"},
      {"source": "Results", "target": "End"},
      {"source": "End", "target": "DataInput"}
    ]
  };

   const elements = [
    ...generateNodes(jsonData)
    //...generateEdges(jsonData)
  ];

  return (
    <ReactFlow
      nodes={generateNodes(jsonData)}
      edges={generateEdges(jsonData)}
    />
  );
}

export default App;
