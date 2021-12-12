import { useState } from 'react';

import { About } from './About';
import { BaseStats } from './BaseStats';
import { Evolution } from './Evolution';
import { Pokemon } from '../../store/modules/pokemons/types';

import { Container, TabItem } from './styles';

interface TabsProps {
  data: Pokemon;
}

const Tabs = ({ data }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleUpdateActiveTab = (tab: number) => {
    setActiveTab(tab);
  };

  return (
    <Container>
      <div className="tabs">
        <TabItem
          type={data.types[0]}
          active={activeTab === 1}
          onClick={() => handleUpdateActiveTab(1)}
        >
          About
        </TabItem>
        <TabItem
          type={data.types[0]}
          active={activeTab === 2}
          onClick={() => handleUpdateActiveTab(2)}
        >
          Base Stats
        </TabItem>
        <TabItem
          type={data.types[0]}
          active={activeTab === 3}
          onClick={() => handleUpdateActiveTab(3)}
        >
          Evolution
        </TabItem>
      </div>

      {activeTab === 1 && <About data={data} />}
      {activeTab === 3 && <Evolution id={data.id} />}
      {activeTab === 2 && <BaseStats stats={data.stats} type={data.types[0]} />}
    </Container>
  );
};

export { Tabs };
