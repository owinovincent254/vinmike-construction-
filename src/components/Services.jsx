import ServiceItem from "./ServiceItem"

function Services() {
    return (
        <div className=" mt-[3em] container mx-auto flex">
            <div className="">
                <div className="text-center text-5xl font-bold">
                    <h3 className="">Our Services</h3>
                </div>
                <div className="mt-[2em] flex justify-center gap-[2em] flex-wrap">
                    <ServiceItem img="blue.jpg" text="painting" />
                    <ServiceItem img="sayles.jpg" text="electrical works" />
                    <ServiceItem img="rahubovskiy.jpg" text="appliance fixing" />
                    <ServiceItem img="pixabay1.jpg" text="welding" />
                    <ServiceItem img="rahubovskiy.jpg" text="plumbing" />
                    <ServiceItem img="chair.jpg" text="carpentry" />
                    <ServiceItem img="tiles.jpg" text="tiling" />
                    <ServiceItem img="p.jpg" text="landscaping" />
                    <ServiceItem img="padriñán.jpg" text="massonry" />
                </div>
            </div>
        </div>
    )
}
export default Services