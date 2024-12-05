import HeaderBottomMenuList from './HeaderBottomMenuList.jsx';
import HeaderBottomSearch from './HeaderBottomSearch.jsx';

export default function HeaderBottom() {
    return (
        <div class="header-bottom">
            <div class="header-bottom-content">
                <HeaderBottomMenuList />
                <HeaderBottomSearch />
            </div>
        </div>
    );
}