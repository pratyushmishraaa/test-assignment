import React from 'react';
import Card from './component/Card';

const App = () => {
  return (
    <div className="container">
       <Card
        image="https://picsum.photos/300/400"
        imageTitle="Example Image"
        title="White traditional dress"
        price="$3.99"
      />
      <Card
        image="https://picsum.photos/300/400"
        imageTitle="Example Image"
        title="Long sleeve jacket"
        
        price="$3.99"
      />
      <Card
        image="https://picsum.photos/300/400"
        imageTitle="Example Image"
        title="hush Pupples"
        
        price="$3.99"
      />
      <Card
        image="https://picsum.photos/300/400"
        imageTitle="Example Image"
        title="Athens skirt"
        
        price="$3.99"
      />
     
    </div>
  )
}

export default App;