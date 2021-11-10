import React from 'react';
import logo from './logo.svg';
import './App.css';
import Avatar from "./components/ChildComponents/Avatar";
import Text from "./components/ChildComponents/Text";
import Button from './components/ChildComponents/ButtonComponent';
import data from './data/data';
const App =()=>{
    return (
        <div className="card-container">
            {data.map((item)=>{
                return (
                    <div className="profile-card" key={item.id}>
                    <Button ></Button>
                    <Avatar   imageUrl={item.imageUrl}></Avatar>
                    <Text   title={item.name}></Text>
                   
                    </div>
                );

            })}
        </div>
    );
}

export default App;
