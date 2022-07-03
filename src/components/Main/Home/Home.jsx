import Languages from './Languages/Languages'
import VerticalLine from './VerticalLine/VerticalLine'
import style from './Home.module.css'
import phone from './images/phone.svg'
import messenger from './images/messengermes.svg'
import watsUp from './images/whatsappwhatsapp.svg'
import Block from './Block/Block'
import Services from './Services/Services'
import Cards from './Cards/Cards'
import arrowRight from './images/arrow-right.svg'
import arrowLeft from './images/arrow-left.svg'

import ArrayCasco from './arrayCasco'


const Home = (props) => {



    const btnsNames = ['Carte verde', 'RCA', 'Casco', 'Medicală', 'Accidente', 'Bunuri', 'Locuințe (imobile)']

    const info = {
       phone : {
           icon:phone,
           content: 'Sună'
       },
       messenger : {
           icon:messenger,
           content:'Messenger'
       },
       watsUp : {
           icon:watsUp,
           content: 'Whatsapp'
       }
    }

    return <div className={style.container}>
        <div className={style.leftSideBar}>
           <Languages />
            <VerticalLine />
            <Block image={info.phone.icon} name={info.phone.content}/>
            <VerticalLine/>
            <Block image={info.messenger.icon} name={info.messenger.content}/>
            <hr/>
            <Block image={info.watsUp.icon} name={info.watsUp.content} />
        </div>
        <div className={style.content}>
            <div className={style.centerContainer}>
                <div className={style.heading}>
                    <h3>Alege tipul de asigurare</h3>
                    <Services items={btnsNames} />
                </div>
                <div className={style.display}>
                    <div className={style.leftBlock}>
                        <h3>Alege tipul autovehiculului</h3>
                        <Cards items={ArrayCasco}/>
                        <div className={style.buttons}>
                            <div className={style.secondaryButton}>
                                <img src={arrowRight} alt="arrow"/>
                                <div>Înapoi</div>
                            </div>
                            <div className={style.primaryButton}>
                                <div>Înainte</div>
                                <img src={arrowLeft} alt="arrow"/>
                            </div>
                        </div>
                    </div>
                    <div className={style.rightBlock}>
                        right block
                    </div>
                </div>
            </div>
        </div>
        <div className={style.rightSideBar}>3</div>
    </div>
}

export default Home