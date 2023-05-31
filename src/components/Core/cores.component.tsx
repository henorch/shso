import Core from './core.component'
import './core.styled.scss'


const coresvalue = [ 
    {
        title: "Purpose",
        description: "Help all Alumni Member to discover the power of lifelong engagement through people capacity building"
    },
    {
        title: "Positioning",
        description: "Alumni are a vital component of the community, Therefore SHSO Agege ALUMNI CLASS 2004 Association is committed to making all alumni members feel supported connected, inspired, and enhanced"
    },
    {
        title: "Goal",
        description: "To create an unwavering sense of belonging within the alumni Expand our CSR Projects withinour alma matter and the community foster economiv=c growth by working towards a community that will bring prosperity to the members"
    }
]

export type CoreValuesProps = {
    title: string,
    description: string,
}



const CoreValues = () => {
   return (
    <div className='coreMainContainer'>
    <h4 className="title">Our Core Values</h4>
        <div className="coreBody">
            {coresvalue.map(value => <Core cores={value}/>)}
        </div>
    </div>
        )
    
}

export default CoreValues;