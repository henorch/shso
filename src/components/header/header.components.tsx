import MenuButton from '../menubutton/menubutton.component';
import './header.style.scss';
import logo from '../../assets/admin/b.png';
import MobileNav from './mobileNav';
import StickyNav from './stickyNav';
import { useEffect, useState } from 'react';

const slideImages = [
    {
        id: 1,
        image: require("../../assets/slide_images/slide_1.jpeg"),
        title: "We have the power to change our trajectory"
    },
    {
        id: 2,
        image: require("../../assets/slide_images/slide_2.jpeg"),
        title: "Intelligence plus Character is the true goal of education"
    },
    {
        id: 1,
        image: require("../../assets/slide_images/slide_3.jpeg"),
        title: "We have the freedom to nuture our path, a society where everyone grow"
    }
]


const SlideImage = () => {
    const [currentImage, setCurrentImage] = useState(0)
    const autoplayInterval = 5000

    const nextSlide = () => {
        setCurrentImage(prevState =>
            prevState === slideImages.length - 1 ? 0 : prevState + 1
        )
    }

    const prevSlide = () => {
        setCurrentImage(prevState =>
            prevState === slideImages.length - 1 ? 0 : prevState - 1
        )
    }

    useEffect(() => {
        const intervalId = setInterval(nextSlide, autoplayInterval);
        return () => clearInterval(intervalId);
    }, [autoplayInterval]);

    return (
        <div
            className='mainImage'
            style={{
                backgroundImage: `url(${slideImages[currentImage].image})`
            }}>

            <b style={{
                backgroundColor: 'wheat',
                width: '100%',
                fontFamily: 'Quintessential',
                alignSelf: 'flex-end',
                borderRadius: '5px',
                opacity: '0.7'
            }}>{slideImages[currentImage].title}</b>

        </div>
    )
}

const Header = () => {
    return (
        <>
            <MobileNav />
            <div className="mainImage">
                <div className='menu2'>
                    <MenuButton />
                </div>
                <SlideImage />
            </div>
            <StickyNav />

        </>
    )
}

export default Header;