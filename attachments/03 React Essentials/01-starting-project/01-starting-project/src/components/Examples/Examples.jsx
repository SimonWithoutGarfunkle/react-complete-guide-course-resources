import './Examples.css';
import { useState } from 'react';
import { EXAMPLES } from '../../../../../data.js';
import TabButton from '../TabButton/TabButton.jsx';
import Tabs from '../Tabs/Tabs.jsx';

export default function Examples() {

    const [selectedTopic, setSeletedTopic] = useState();

    function handleSelect(selectedTab) {
        setSeletedTopic(selectedTab);
        console.log(selectedTopic);
    }

    return (
        <section id="examples">
            <h2>Examples</h2>
            <Tabs 
            buttonsContainer="menu"
            buttons={
                <>
                <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
                </>
            }>Conetet etetetert erte tet er tent
            </Tabs>
            
        </section>
    )
}