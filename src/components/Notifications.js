import React from "react";


const Notifications = (props) => {
  const { notifications } = props;
  return (
    <ul>
    { notifications && notifications.map(item => {
        return <small style={{fontSize: '15px', fontFamily: 'Graduate'}} className="text-muted mr-4" key={item.id}>{item.content}</small>
    })}
      
    </ul>
  );
};

export default Notifications;
