import { Link, Outlet } from 'umi';
import { Button } from 'antd';
import styles from './index.scss';

export default function Layout() {
  return (
    <div className={styles.navs}>
      {/* <ul>
        <li>
          <Button type='primary'>
            <Link to="/">主页</Link>
          </Button>
        </li>
        <li>
          <Button >
            <Link to="/docs">文档</Link>
          </Button>
        </li>
        <li>
          <Button>
            <Link to="/preview">预览</Link>
          </Button>
        </li>
      </ul> */}
      <Outlet />
    </div>
  );
}
