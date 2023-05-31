import AimComponent from '../OurAim/our_aim.component';
import './glance.style.scss'

const Glance = () => {
    return(
        <div className="mainGlanceContainer">
            <div className='header'>A Glance @ us</div>
            <div className='body'>
                <div className='content'>
                    <h4 className='title'>member interaction</h4>
                    <p>The provost will work with the appropriate office to ensure meaningful interactions are held at al time online and offline</p>
                </div>


                <div className='content'>
                    <h4 className='title'>Association banner</h4>
                    <p>We will close of thw printing of the association banner for ease of indentification and PR</p>
                </div>


                <div className='content'>
                    <h4 className='title'>News/updates</h4>
                    <p>Members will be kept in the loop of events and decisions promptly and effeiciently</p>
                </div>


                <div className='content'>
                    <h4 className='title'>website creation</h4>
                    <p>We shall have a website where members registrations will be automated and events/ news will be updated for members in thye disapora</p>
                </div>


                <div className='content'>
                    <h4 className='title'>financial reporting</h4>
                    <p>There will be a monthly financial records report made available to the general group and an up to date financial records will be published on our website foor transparency and intergrity</p>
                </div>


                <div className='content'>
                    <h4 className='title'>people capacity forum</h4>
                    <p>We shall have at least once-a-quarter forum where career-driven meet-ups are held for members</p>
                </div>
            </div>
            <AimComponent/>
        </div>
    )
}

export default Glance;