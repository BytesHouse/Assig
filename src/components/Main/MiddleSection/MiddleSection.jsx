import style from './MiddleSection.module.css'

const MiddleSection = () => {
    return  <section className={style.wrapper}>
        <div className={style.container}>
            <div>
            <div><h4>test</h4></div>
            <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus atque, beatae culpa distinctio ea expedita explicabo facilis harum magni nobis non praesentium quaerat quas quia quos similique vitae voluptatum!</p></div>
            </div>
            <div>
                <form action="">
                    <input type="text"/>
                    <input type="text"/>
                    <button>test</button>
                </form>
            </div>
            </div>
    </section>
}

export default MiddleSection