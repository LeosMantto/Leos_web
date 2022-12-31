/* eslint-disable jsx-a11y/anchor-is-valid */
//import css style global tables
import './table-style.css';

const TableUserCustom = (props) => {
    return ( 
        <>
        <div class="sub-content-view-user-1"> 
            <div class="title">
                <h2>usuarios sgm</h2>
                <a href="#" class="btn_view_all">view all</a>
            </div>
        <table class="table-user-mini">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombres</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Admin</td>
                    <td>Administrador Test</td>
                    <td>Activo</td>
                </tr>
            </tbody>
           </table>
        </div>
        </>
     );
}
 
export default TableUserCustom;