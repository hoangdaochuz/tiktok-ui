import ListVideo from "~/layouts/components/ListVideo";
import className from 'classnames/bind';
import styles from './Home.module.scss';

const cx = className.bind(styles);
function Home() {
    return ( 
    <div className={cx('wrapper')}>
        <ListVideo/>
    </div>
    );
}

export default Home;