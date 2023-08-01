function ServiceItem({ text, img }) {
    return (

        <div style={{background:`linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),url(src/assets/images/${img}) no-repeat center center/cover`}} className={`w-[400px] h-[400px]  flex justify-center items-center`}>
            <h3  className="  text-white text-3xl font-bold">{text.toUpperCase()}</h3>
        </div>

    )
}

export default ServiceItem;