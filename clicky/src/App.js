import React, { Component } from 'react';
import MemoryCard from './components/MemoryCard';
import Wrapper from './components/Wrapper'
import Introduction from './components/Introduction';
import memories from './memories.json';
import './App.css';

class App extends Component {
  state = {
    memories: memories
  }

  removeCard = id => {
    const newArray = this.state.memories.filter(memory => {
      return memory.id !== id;
    });

    this.setState({
      memories: newArray
    });
  }

  render() {
    return (
      <Wrapper>
        <Introduction />
        {this.state.memories.map(memory => {
            return <MemoryCard
              key={memory.id}
              id={memory.id}
              type={memory.type}
              image={memory.image}
              removeCard={this.removeCard}
              />
        })}
        
      </Wrapper>
    );
  }
}

export default App;
