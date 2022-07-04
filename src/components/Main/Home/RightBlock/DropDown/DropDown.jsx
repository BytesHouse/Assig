import style from './DropDown.module.css'
import plus from './images/plus.svg'

const DropDown = () => {
    return <div className={style.dropDownWrapper}>
        <div className={style.heading}>
            <h4>Obiectul asigurării</h4>
            <img src={plus} alt="close"/>
        </div>
        <div className={style.content}>
            Autovehicule înmatriculate în Republica Moldova, care aparţin persoanelor fizice şi juridice.<br/><br/>

            Echipamentul suplimentar, care nu intră în dotarea autovehiculului conform listei de dotări ale uzinei
            producătoare. <br/><br/>

            Conducătorul auto şi pasagerii, pentru cazuri de accidente care pot avea loc în timpul accidentelor
            rutiere. <br/><br/>
        </div>
    </div>
}

export default DropDown