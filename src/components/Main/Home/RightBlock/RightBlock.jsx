import DropDown from './DropDown/DropDown'
import style from './RightBlock.module.css'

const RightBlock = () => {
    return  <div className={style.blockWrapper}>
        <DropDown/>
        <DropDown/>
    </div>
}

export default RightBlock