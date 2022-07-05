import style from './MiddleSection.module.css'

const MiddleSection = () => {
    return  <section className={style.wrapper}>
        <div className={style.container}>
            <div>
            <div><h4>Ai nevoie de o consultatie?</h4></div>
            <div><p>Lasă numele și numărul tău de telefon, iar noi te vom contacta în cel mai scurt timp posibil.</p></div>
            </div>
            <div>
                <form action="">
                    <div>
                        <input placeholder='Nume/Prenume' type="text"/>
                        <input placeholder='(+373) __-___-___ ' type="tel"/>
                    </div>
                    <div className={style.buttonWrapper}>
                    <button>Trimite</button>
                    </div>
                </form>
            </div>
            </div>
    </section>
}

export default MiddleSection