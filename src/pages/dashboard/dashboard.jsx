//import state and useEffect of react
import React, { useState, useEffect } from 'react';

//import components secondarys
import Card from '../../components/cards/cards';
import TableUserCustom from '../../components/tables/table-user-custom';
import TableSupCustom from '../../components/tables/table-sup-custom';

//import service apis
import { Leos } from '../../services';

//creando instancia de la clase de servicio
const apiCtrl = new Leos();

const Dashboard = () => {

    const [userSGM, setUserSGM] = useState([]);
    const [countUser, setCountUser] = useState({});

    useEffect( () => {
        const user_SGM = apiCtrl.get_usuarios();
        const count_usr = apiCtrl.get_count_usuarios();
        user_SGM.then((usr_sgm) =>  setUserSGM(usr_sgm.data) ).catch( err => console.log(err));
        count_usr.then( result => setCountUser(result.count)).catch(err => console.log(err));
    }, []);

    return (
        <>
        <div class="cards">
            <Card name='SGM Activos' count={countUser.Activos_SGM} />
            <Card name='SGM Inactivos' count={countUser.Inactivos_SGM} />
            <Card name='Usuarios SGM' count={countUser.Usuarios_SGM} />
            <Card name='Empleados' count={countUser.Empleados} />
        </div>
        <div class="content-2">
           { /* Area de graficos de estadisticas de ordenes de trabajo ELEC, MEC, SOL, LA, EQ, BO, GAMA */}
        </div>
        <div class="content-2">
            
        </div>
        </>
  );
};

export default Dashboard;