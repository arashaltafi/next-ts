import style from './style.module.scss'

const page = () => {
    return (
        <div className={style.center}>
            <h1 className={style.title}>sample h1</h1>
            <h2 className={style.subTitle}>sample h2</h2>
        </div>
    )
}

export default page