import React, { useEffect, useState } from 'react'
import UsrModel from '../../Models/UsrCredentials'
import { NavBar, HorizonNavBar } from '../../Components/NavBar';
import { makeStyles } from '@material-ui/core/styles';
import { NormalTable } from '../../Components/Table';
import AssessmentIcon from '@material-ui/icons/Assessment';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import ScrollTop from '../../Components/CommonFunctions/ScrollTop'

import axios from 'axios'

export const HistorialDePrecios = () => {

    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {

        ScrollTop();
    }, []);

    const handleRadioChange = (e) => {

        getPrecios(e.target.value);

    }
    const handleClose = (r) => {
        if (r === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const getPrecios = async (t = 1) => {

        setLoading(true);
        var fechaFin = document.getElementById('dateFinal').value;
        var fechaIni = document.getElementById('dateInicio').value;

        if (fechaFin >= fechaIni) {
            try {
                const { data } = await axios.post('/GetHistPrecios/' + t.toString(), { fechaInicial: fechaIni, fechaFinal: fechaFin });

                if (data && data.success) {
                    setData(data.data);

                } else {
                    setData([]);
                }
                setLoading(false);

            } catch (e) {
                console.log(e);
            }
        } else {
            setLoading(false);
            setOpen(true);
        }
    }




    const classes = useStyles();
    var todayD = new Date();
    const [fechaFin, setFechaFin] = useState(todayD.toISOString().slice(0, 10));
    todayD.setDate(todayD.getDate() - 3);
    const [fechaIni, setFechaIni] = useState(todayD.toISOString().slice(0, 10));
    //const [dataPrecios, setDataPrecios] = useState([]);

    return (
        <>
            <NavBar text={UsrModel.userName.toUpperCase()} />
            <HorizonNavBar />
            <main>
                <div
                    style={{
                        backgroundColor: "white",
                        margin: "0 0 1% 0",
                        padding: "1% 3% 1% 3%",
                    }}
                >
                    <div className="row">
                        <div className="col-md-11">
                            <label className="titulo-seccion-form boldText">
                                Historial De Precios
                            </label>
                        </div>
                        <div className="col-md-1" style={{ textAlign: "right" }}>
                            <AssessmentIcon color="primary" fontSize="large"></AssessmentIcon>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <TextField
                            id="dateInicio"
                            label="Inicial"
                            type="date"
                            value={fechaIni}
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => setFechaIni(e.target.value)}
                        />
                        <TextField
                            id="dateFinal"
                            label="Final"
                            type="date"
                            value={fechaFin}
                            className={classes.textField}
                            InputLabelProps={
                                {
                                    shrink: true,
                                }
                            }
                            onChange={(e) => setFechaFin(e.target.value)}
                        />
                    </div>
                    <br>
                    </br>
                    <div className='row'>
                        <div className='col-md-3'>
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                // className={classes.button}
                                startIcon={<SearchIcon />}
                                onClick={() => {
                                    getPrecios();
                                    //setLoading(true);
                                    //consultaMov();

                                }}
                            >
                                Generar
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12' style={{ textAlign: 'center' }}>
                        {(isLoading) ?
                            <CircularProgress />
                            :
                            <NormalTable data={data} docsCol={false} title='Historial Precios'></NormalTable>
                        }
                    </div>
                </div>

                {/* <GasPriceElement key='gasElement' data={dataPrecios} />
          <a id="hoverUp" href="/#"><FontAwesomeIcon icon={faChevronUp} /></a> */}
            </main>
        </>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));
