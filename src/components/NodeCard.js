import React from 'react';


export default function NodeCard({ node, onSelect }) {
return (
<div className="border p-4 rounded shadow-md mb-4 cursor-pointer hover:bg-gray-100" onClick={() => onSelect(node)}>
<h2 className="font-bold text-lg">{node.title}</h2>
<p>Mastery: {node.mastery}%</p>
</div>
);
}