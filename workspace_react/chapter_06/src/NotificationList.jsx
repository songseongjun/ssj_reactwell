import React from "react";
import notification from "./Notification";
import Notification from "./Notification";

const reservedNotifications = [
  {
    no: 1,
    message:"안녕하세요 오늘은 날씨가맑음입니다",
  },
  {
    no: 2,
    message:"점심시간입니다요",
  },
  {
    no: 3,
    message:"이제 곧 미팅 시작~~`",
  },
];

var timer;

class NotificationList extends React.Component{
  constructor(props) {
    super(props)
    this.state ={
      notifications:[],
    }
  }
  componentDidMount() {
    const {notifications} = this.state;
    timer = setInterval(() =>{
      if (notifications.length < reservedNotifications.length){
        const index = notifications.length;
        notifications.push(reservedNotifications[index]);
        this.setState({notifications:notifications});
      }
      else {
        this.setState({notifications:[]});
        clearInterval(timer);
      }

    },1000);
    console.log("componentDidUpdate() called......")
  }


  componentDidUpdate() {
    console.log("componentDidUpdate() called......")
  }


  componentWillUnmount() {
    if (timer){
      clearInterval(timer);
    }
    console.log("componentWillUnmount() called....")
  }
  render() {
    return(
        <div>
          {this.state.notifications.map((notification) =>{
            return<Notification
                key={notification.no}
                message={notification.message} />;
          })}
        </div>
    );
  }
}

export default NotificationList;