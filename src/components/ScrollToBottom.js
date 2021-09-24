import React from 'react'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { useWindowScroll } from 'react-use';



export default function ScrollToBottom() {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        if (pageYOffset < 800) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [pageYOffset]);

    const scrollToBottom = () => window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior:'smooth'
    });
        if (!visible) {
            return false;
        }

    return (
        <div className='scroll-to-bottom' onClick={scrollToBottom}>
            <KeyboardArrowDownIcon className='icon' />
        </div>
    )
}
