import React from 'react'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useWindowScroll } from 'react-use';

const ScrollToTop = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        if (pageYOffset > 400) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [pageYOffset]);
    
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth'});
        if (!visible) {
            return false;
        }

    return (
        <div className='scroll-to-top' onClick={scrollToTop}>
            <KeyboardArrowUpIcon className='icon'  />
        </div>
    )
}

export default ScrollToTop;