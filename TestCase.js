import React, { useState } from 'react';

const TestCase = ({ testCase, updateTestCase }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(testCase.name);
  const [description, setDescription] = useState(testCase.description);

  const handleSave = () => {
    updateTestCase(testCase.id, { name, description });
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
          <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{testCase.name}</h3>
          <p>{testCase.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default TestCase;
