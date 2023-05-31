import { CoreValuesProps } from "./cores.component"


type coreProps = {
    cores: CoreValuesProps
}

const Core = ({cores} : coreProps) => {
    const { title, description } = cores;
    return (
        <div className="coreContainer">
           <div style={{
            padding:"4px"
           }}><b>{title}</b></div>
           <div>{description}</div>
        </div>
    )
}

export default Core;