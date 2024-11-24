import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import CardContainer from './components/CardContainer';
import { FilterProvider } from './context/FilterContext';

function App() {
  const [links, setLinks] = useState([
    { title: 'Example Link', description: 'This is an example link', link: '#', isGrouped: false },
    { title: 'Example Group', description: 'This is an example group', isGrouped: true },
  ]);

  const addLink = (newLink) => {
    setLinks([...links, newLink]);
  };

  const editLink = (index, updatedLink) => {
    const updatedLinks = [...links];
    updatedLinks[index] = updatedLink;
    setLinks(updatedLinks);
  };

  const deleteLink = (index) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  return (
    <FilterProvider>
      <div className="App">
        <Sidebar />
        <div className="main-content">
          <TopBar addLink={addLink} />
          <CardContainer
            links={links}
            onEdit={(index) => editLink(index, { ...links[index], title: 'Updated Title' })}
            onDelete={deleteLink}
          />
        </div>
      </div>
    </FilterProvider>
  );
}

export default App;

