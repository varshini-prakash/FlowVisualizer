const generateEdges = (data) => {
    const elements = [];
  
    if (!data || !data.edges || !Array.isArray(data.edges)) {
      console.error('Invalid or missing edge data:', data);
      return elements; // Return an empty array if edge data is invalid
    }
  
    // Add edges based on the provided data
    data.edges.forEach(edge => {
      elements.push({
        id: `${edge.source}-${edge.target}`,
        source: edge.source,
        target: edge.target,
        animated: false,
        type: 'straight'
      });
    });
  
    return elements;
  };
  
  export default generateEdges;
  