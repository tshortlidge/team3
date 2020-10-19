
import React from 'react'
import { Spring, animated, config } from 'react-spring/renderprops'
import '../css/style_homepage_background_scroll.css'

const COLORS = [
    '#000000',
    'teal',
    'coral',
    'hotpink',
    'skyblue',
    'salmon',
    'seagreen',
    'peachpuff',
]

const background_imgs = [
    'https://i.ibb.co/wM6twyZ/bg-slide-1.png',
    'https://i.ibb.co/Kb6swg6/bg-slide-2.png',
    'https://i.ibb.co/9qJFqwf/bg-slide-3.jpg',
    ' https://i.ibb.co/BKYZhjF/bg-slide-4.png'

]

export class Homepage extends React.Component
{
    state = { y: 0 }
    el = React.createRef()
    spring = React.createRef()
    setY = () => this.setState({ y: Math.round(Math.random() * 750) + 50 })
    // User interaction should stop animation in order to prevent scroll-hijacking
    // Doing this on onWheel isn't enough, but just to illustrate ...
    stop = () => this.spring.current.stop()
    render() {
        const y = this.el.current ? this.el.current.scrollTop : 0
        return (
            <>
                <div className="scrolltop-main">
                    <Spring
                        native
                        reset
                        from={{ y }}
                        to={{ y: this.state.y }}
                        ref={this.spring}
                        config={config.slow}>
                        {props => (
                            <animated.div
                                className="scrolltop-c"
                                ref={this.el}
                                onWheel={this.stop}
                                scrollTop={props.y}>
                                {background_imgs.map(c => (
                                    <div key={c} style={{ height: 1000, background: c }} />
                                ))}

                            </animated.div>
                        )}
                    </Spring>
                </div>
                <div className="scrolltop-b" onClick={this.setY} />
            </>
        )
    }
}