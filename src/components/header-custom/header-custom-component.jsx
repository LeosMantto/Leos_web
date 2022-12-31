/* eslint-disable jsx-a11y/anchor-is-valid */
import {FaSearch, FaUserCircle } from 'react-icons/fa';
const HeaderCustom = () => {
    return ( 
    <>
      <div class="nav">
        <div class="search">
          <input type="text" placeholder='search....' />
          <button type='submit'><FaSearch /></button>
        </div>
        <div class="user">
          <a href="#" class="btn">ADD NEW USER</a>
          <div class="img-case">
            <FaUserCircle class="img-user" />
          </div>
        </div>
      </div>
    </> 
  );
};
 
export default HeaderCustom;