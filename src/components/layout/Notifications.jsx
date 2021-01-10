import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

export const notifications = (props) => {
    // console.log('notify',props);
    if(props.length > 0){
        return (
        store.addNotification({
        title: 'Success',
        message: props,
        type: 'success',                         // 'default', 'success', 'info', 'warning'
        container: 'top-right',                // where to position the notifications
        animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
        animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
        dismiss: {
            duration: 3000
        }
    }));
    }else{
        return null
    }
}